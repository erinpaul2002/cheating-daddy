import React, { useState, useEffect } from 'react';
import { resizeLayout } from '../../utils/windowResize.js';
import './AdvancedView.css';

interface AdvancedViewState {
    isClearing: boolean;
    statusMessage: string;
    statusType: string;
    throttleTokens: boolean;
    maxTokensPerMin: number;
    throttleAtPercent: number;
    contentProtection: boolean;
}

export const AdvancedView: React.FC = () => {
    const [state, setState] = useState<AdvancedViewState>({
        isClearing: false,
        statusMessage: '',
        statusType: '',
        throttleTokens: true,
        maxTokensPerMin: 1000000,
        throttleAtPercent: 75,
        contentProtection: true,
    });

    // Load settings on component mount
    useEffect(() => {
        loadRateLimitSettings();
        loadContentProtectionSetting();
        resizeLayout();
    }, []);

    const loadRateLimitSettings = () => {
        const throttleTokens = localStorage.getItem('throttleTokens');
        const maxTokensPerMin = localStorage.getItem('maxTokensPerMin');
        const throttleAtPercent = localStorage.getItem('throttleAtPercent');

        setState(prev => ({
            ...prev,
            throttleTokens: throttleTokens !== null ? throttleTokens === 'true' : true,
            maxTokensPerMin: maxTokensPerMin !== null ? parseInt(maxTokensPerMin, 10) || 1000000 : 1000000,
            throttleAtPercent: throttleAtPercent !== null ? parseInt(throttleAtPercent, 10) || 75 : 75,
        }));
    };

    const loadContentProtectionSetting = () => {
        const contentProtection = localStorage.getItem('contentProtection');
        setState(prev => ({
            ...prev,
            contentProtection: contentProtection !== null ? contentProtection === 'true' : true,
        }));
    };

    const clearLocalData = async () => {
        if (state.isClearing) return;

        setState(prev => ({ ...prev, isClearing: true, statusMessage: '', statusType: '' }));

        try {
            // Clear localStorage
            localStorage.clear();

            // Clear sessionStorage
            sessionStorage.clear();

            // Clear IndexedDB databases
            const databases = await indexedDB.databases();
            const clearPromises = databases.map((db): Promise<void> => {
                return new Promise<void>((resolve, reject) => {
                    if (!db.name) {
                        resolve();
                        return;
                    }
                    const deleteReq = indexedDB.deleteDatabase(db.name);
                    deleteReq.onsuccess = () => resolve();
                    deleteReq.onerror = () => reject(deleteReq.error);
                    deleteReq.onblocked = () => {
                        console.warn(`Deletion of database ${db.name} was blocked`);
                        resolve(); // Continue anyway
                    };
                });
            });

            await Promise.all(clearPromises);

            // Clear any other browser storage
            if ('caches' in window) {
                const cacheNames = await caches.keys();
                await Promise.all(cacheNames.map(name => caches.delete(name)));
            }

            const successMessage = `✅ Successfully cleared all local data (${databases.length} databases, localStorage, sessionStorage, and caches)`;
            setState(prev => ({ ...prev, statusMessage: successMessage, statusType: 'success' }));

            // Notify user that app will close
            setTimeout(() => {
                setState(prev => ({ ...prev, statusMessage: '🔄 Closing application...' }));
                setTimeout(async () => {
                    // Close the entire application
                    if (window.electron?.ipcRenderer) {
                        await window.electron.ipcRenderer.invoke('quit-application');
                    }
                }, 1000);
            }, 2000);
        } catch (error) {
            console.error('Error clearing data:', error);
            const errorMessage = `❌ Error clearing data: ${(error as Error).message}`;
            setState(prev => ({ ...prev, statusMessage: errorMessage, statusType: 'error' }));
        } finally {
            setState(prev => ({ ...prev, isClearing: false }));
        }
    };

    const handleThrottleTokensChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setState(prev => ({ ...prev, throttleTokens: checked }));
        localStorage.setItem('throttleTokens', checked.toString());
    };

    const handleMaxTokensChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = parseInt((e.target as HTMLInputElement).value, 10);
        if (!isNaN(value) && value > 0) {
            setState(prev => ({ ...prev, maxTokensPerMin: value }));
            localStorage.setItem('maxTokensPerMin', value.toString());
        }
    };

    const handleThrottlePercentChange = (e: React.FormEvent<HTMLInputElement>) => {
        const value = parseInt((e.target as HTMLInputElement).value, 10);
        if (!isNaN(value) && value >= 0 && value <= 100) {
            setState(prev => ({ ...prev, throttleAtPercent: value }));
            localStorage.setItem('throttleAtPercent', value.toString());
        }
    };

    const resetRateLimitSettings = () => {
        setState(prev => ({
            ...prev,
            throttleTokens: true,
            maxTokensPerMin: 1000000,
            throttleAtPercent: 75,
        }));

        localStorage.removeItem('throttleTokens');
        localStorage.removeItem('maxTokensPerMin');
        localStorage.removeItem('throttleAtPercent');
    };

    const handleContentProtectionChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        setState(prev => ({ ...prev, contentProtection: checked }));
        localStorage.setItem('contentProtection', checked.toString());

        // Update the window's content protection in real-time
        if (window.electron?.ipcRenderer) {
            try {
                await window.electron.ipcRenderer.invoke('update-content-protection', checked);
            } catch (error) {
                console.error('Failed to update content protection:', error);
            }
        }
    };

    return (
        <div className="advancedContainer">
            {/* Content Protection Section */}
            <div className="advancedSection">
                <div className="sectionTitle">
                    <span>🔒 Content Protection</span>
                </div>
                <div className="advancedDescription">
                    Content protection makes the application window invisible to screen sharing and recording software. This is useful for privacy
                    when sharing your screen, but may interfere with certain display setups like DisplayLink.
                </div>

                <div className="formGrid">
                    <div className="checkboxGroup">
                        <input
                            type="checkbox"
                            className="checkboxInput"
                            id="content-protection"
                            checked={state.contentProtection}
                            onChange={handleContentProtectionChange}
                        />
                        <label htmlFor="content-protection" className="checkboxLabel">
                            Enable content protection (stealth mode)
                        </label>
                    </div>
                    <div className="formDescription" style={{ marginLeft: '22px' }}>
                        {state.contentProtection
                            ? 'The application is currently invisible to screen sharing and recording software.'
                            : 'The application is currently visible to screen sharing and recording software.'}
                    </div>
                </div>
            </div>

            {/* Rate Limiting Section */}
            <div className="advancedSection">
                <div className="sectionTitle">
                    <span>⏱️ Rate Limiting</span>
                </div>

                <div className="rateLimitWarning">
                    <span className="rateLimitWarningIcon">⚠️</span>
                    <span>
                        <strong>Warning:</strong> Don't mess with these settings if you don't know what this is about. Incorrect rate limiting
                        settings may cause the application to stop working properly or hit API limits unexpectedly.
                    </span>
                </div>

                <div className="formGrid">
                    <div className="checkboxGroup">
                        <input
                            type="checkbox"
                            className="checkboxInput"
                            id="throttle-tokens"
                            checked={state.throttleTokens}
                            onChange={handleThrottleTokensChange}
                        />
                        <label htmlFor="throttle-tokens" className="checkboxLabel">
                            Throttle tokens when close to rate limit
                        </label>
                    </div>

                    <div className={`rateLimitControls ${state.throttleTokens ? 'enabled' : ''}`}>
                        <div className="formRow">
                            <div className="formGroup">
                                <label className="formLabel">Max Allowed Tokens Per Minute</label>
                                <input
                                    type="number"
                                    className="formControl"
                                    value={state.maxTokensPerMin}
                                    min="1000"
                                    max="10000000"
                                    step="1000"
                                    onInput={handleMaxTokensChange}
                                    disabled={!state.throttleTokens}
                                />
                                <div className="formDescription">Maximum number of tokens allowed per minute before throttling kicks in</div>
                            </div>

                            <div className="formGroup">
                                <label className="formLabel">Throttle At Percent</label>
                                <input
                                    type="number"
                                    className="formControl"
                                    value={state.throttleAtPercent}
                                    min="1"
                                    max="99"
                                    step="1"
                                    onInput={handleThrottlePercentChange}
                                    disabled={!state.throttleTokens}
                                />
                                <div className="formDescription">
                                    Start throttling when this percentage of the limit is reached ({state.throttleAtPercent}% =
                                    {Math.floor((state.maxTokensPerMin * state.throttleAtPercent) / 100)} tokens)
                                </div>
                            </div>
                        </div>

                        <div className="rateLimitReset">
                            <button className="actionButton" onClick={resetRateLimitSettings} disabled={!state.throttleTokens}>
                                Reset to Defaults
                            </button>
                            <div className="formDescription" style={{ marginTop: '8px' }}>
                                Reset rate limiting settings to default values
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Data Management Section */}
            <div className="advancedSection dangerSection">
                <div className="sectionTitle danger">
                    <span>🗑️ Data Management</span>
                </div>
                <div className="dangerBox">
                    <span className="dangerIcon">⚠️</span>
                    <span>
                        <strong>Important:</strong> This action will permanently delete all local data and cannot be undone.
                    </span>
                </div>

                <div>
                    <button className="actionButton dangerButton" onClick={clearLocalData} disabled={state.isClearing}>
                        {state.isClearing ? '🔄 Clearing...' : '🗑️ Clear All Local Data'}
                    </button>

                    {state.statusMessage && (
                        <div className={`statusMessage ${state.statusType === 'success' ? 'statusSuccess' : 'statusError'}`}>
                            {state.statusMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
