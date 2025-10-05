import React, { useState, useEffect, useCallback } from 'react';
import { AppHeader } from './AppHeader';
import MainView from '../views/MainView';
import AssistantView from '../views/AssistantView';
import { CustomizeView } from '../views/CustomizeView';
import { HelpView } from '../views/HelpView';
import HistoryView from '../views/HistoryView';
import { AdvancedView } from '../views/AdvancedView';
import { OnboardingView } from '../views/OnboardingView';
import { ViewType } from '../../types';

interface CheatingDaddyAppProps {}

export const CheatingDaddyApp: React.FC<CheatingDaddyAppProps> = () => {
    // Core state
    const [currentView, setCurrentView] = useState<ViewType>(localStorage.getItem('onboardingCompleted') ? 'main' : 'onboarding');
    const [statusText, setStatusText] = useState('');
    const [startTime, setStartTime] = useState<number | null>(null);
    const [isRecording, setIsRecording] = useState(false);
    const [sessionActive, setSessionActive] = useState(false);
    const [isInitializing, setIsInitializing] = useState(false);
    const [showApiKeyError, setShowApiKeyError] = useState(false);

    // Configuration state
    const [selectedProfile, setSelectedProfile] = useState(localStorage.getItem('selectedProfile') || 'interview');
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en-US');
    const [selectedScreenshotInterval, setSelectedScreenshotInterval] = useState(localStorage.getItem('selectedScreenshotInterval') || '5');
    const [selectedImageQuality, setSelectedImageQuality] = useState(localStorage.getItem('selectedImageQuality') || 'medium');
    const [layoutMode, setLayoutMode] = useState(localStorage.getItem('layoutMode') || 'normal');
    const [advancedMode, setAdvancedMode] = useState(localStorage.getItem('advancedMode') === 'true');

    // Additional configuration state for views
    const [keybinds, setKeybinds] = useState<Record<string, string>>(() => {
        try {
            return JSON.parse(localStorage.getItem('customKeybinds') || '{}');
        } catch (e) {
            return {};
        }
    });
    const [googleSearchEnabled, setGoogleSearchEnabled] = useState(localStorage.getItem('googleSearchEnabled') === 'true');
    const [backgroundTransparency, setBackgroundTransparency] = useState(parseInt(localStorage.getItem('backgroundTransparency') || '80'));
    const [fontSize, setFontSize] = useState(parseInt(localStorage.getItem('fontSize') || '14'));

    // Response management
    const [responses, setResponses] = useState<any[]>([]);
    const [currentResponseIndex, setCurrentResponseIndex] = useState(-1);
    const [shouldAnimateResponse, setShouldAnimateResponse] = useState(false);
    const [savedResponses, setSavedResponses] = useState<any[]>(() => {
        try {
            return JSON.parse(localStorage.getItem('savedResponses') || '[]');
        } catch (e) {
            return [];
        }
    });

    // Internal state
    const [isClickThrough, setIsClickThrough] = useState(false);
    const [awaitingNewResponse, setAwaitingNewResponse] = useState(false);
    const [currentResponseIsComplete, setCurrentResponseIsComplete] = useState(true);

    // Initialize layout mode
    useEffect(() => {
        updateLayoutMode(layoutMode);
    }, [layoutMode]);

    // IPC setup
    useEffect(() => {
        if (window.electron?.ipcRenderer) {
            const ipcRenderer = window.electron.ipcRenderer;

            const handleUpdateResponse = (_: any, response: any) => {
                setResponse(response);
            };

            const handleUpdateStatus = (_: any, status: string) => {
                setStatus(status);
            };

            const handleClickThroughToggled = (_: any, isEnabled: boolean) => {
                setIsClickThrough(isEnabled);
            };

            const handleSessionInitializing = (_: any, initializing: boolean) => {
                setIsInitializing(initializing);
            };

            ipcRenderer.on('update-response', handleUpdateResponse);
            ipcRenderer.on('update-status', handleUpdateStatus);
            ipcRenderer.on('click-through-toggled', handleClickThroughToggled);
            ipcRenderer.on('session-initializing', handleSessionInitializing);

            return () => {
                ipcRenderer.removeAllListeners('update-response');
                ipcRenderer.removeAllListeners('update-status');
                ipcRenderer.removeAllListeners('click-through-toggled');
                ipcRenderer.removeAllListeners('session-initializing');
            };
        }
    }, []);

    // Notify main process of view changes
    useEffect(() => {
        if (window.electron?.ipcRenderer) {
            window.electron.ipcRenderer.send('view-changed', currentView);
        }
    }, [currentView]);

    // Persist settings to localStorage
    useEffect(() => {
        localStorage.setItem('selectedProfile', selectedProfile);
    }, [selectedProfile]);

    useEffect(() => {
        localStorage.setItem('selectedLanguage', selectedLanguage);
    }, [selectedLanguage]);

    useEffect(() => {
        localStorage.setItem('selectedScreenshotInterval', selectedScreenshotInterval);
    }, [selectedScreenshotInterval]);

    useEffect(() => {
        localStorage.setItem('selectedImageQuality', selectedImageQuality);
    }, [selectedImageQuality]);

    useEffect(() => {
        localStorage.setItem('advancedMode', advancedMode.toString());
    }, [advancedMode]);

    const setStatus = useCallback((text: string) => {
        setStatusText(text);

        // Mark response as complete when we get certain status messages
        if (text.includes('Ready') || text.includes('Listening') || text.includes('Error')) {
            setCurrentResponseIsComplete(true);
        }
    }, []);

    const setResponse = useCallback(
        (response: any) => {
            // Check if this looks like a filler response
            const isFillerResponse =
                response.length < 30 &&
                (response.toLowerCase().includes('hmm') ||
                    response.toLowerCase().includes('okay') ||
                    response.toLowerCase().includes('next') ||
                    response.toLowerCase().includes('go on') ||
                    response.toLowerCase().includes('continue'));

            setResponses(prevResponses => {
                if (awaitingNewResponse || prevResponses.length === 0) {
                    // Always add as new response when explicitly waiting for one
                    setCurrentResponseIndex(prevResponses.length);
                    setAwaitingNewResponse(false);
                    setCurrentResponseIsComplete(false);
                    return [...prevResponses, response];
                } else if (!currentResponseIsComplete && !isFillerResponse && prevResponses.length > 0) {
                    // For substantial responses, update the last one (streaming behavior)
                    return [...prevResponses.slice(0, prevResponses.length - 1), response];
                } else {
                    // For filler responses or when current response is complete, add as new
                    setCurrentResponseIndex(prevResponses.length);
                    setCurrentResponseIsComplete(false);
                    return [...prevResponses, response];
                }
            });

            setShouldAnimateResponse(true);
        },
        [awaitingNewResponse, currentResponseIsComplete]
    );

    // Header event handlers
    const handleCustomizeClick = useCallback(() => {
        setCurrentView('customize');
    }, []);

    const handleHelpClick = useCallback(() => {
        setCurrentView('help');
    }, []);

    const handleHistoryClick = useCallback(() => {
        setCurrentView('history');
    }, []);

    const handleAdvancedClick = useCallback(() => {
        setCurrentView('advanced');
    }, []);

    const handleMinimize = useCallback(async () => {
        if (window.electron?.ipcRenderer) {
            await window.electron.ipcRenderer.invoke('minimize-window');
        }
    }, []);

    const handleViewChange = useCallback((view: string) => {
        setCurrentView(view as ViewType);
    }, []);

    const handleClose = useCallback(async () => {
        // Always quit the entire application, but stop session first if active
        if (currentView === 'assistant' && sessionActive) {
            // Stop capture and close session first
            if (window.cheddar) {
                window.cheddar.stopCapture();
            }

            if (window.electron?.ipcRenderer) {
                await window.electron.ipcRenderer.invoke('close-session');
            }

            setSessionActive(false);
        }

        // Quit the application
        console.log('Attempting to quit application...');
        if (window.electron?.ipcRenderer) {
            console.log('Calling quit-application IPC...');
            window.electron.ipcRenderer
                .invoke('quit-application')
                .then(result => {
                    console.log('Quit application result:', result);
                })
                .catch(error => {
                    console.error('Quit application error:', error);
                });
        } else {
            console.error('window.electron.ipcRenderer not available');
        }
    }, [currentView, sessionActive]);

    const handleHideToggle = useCallback(async () => {
        if (window.electron?.ipcRenderer) {
            await window.electron.ipcRenderer.invoke('toggle-window-visibility');
        }
    }, []);

    // Main view event handlers
    const handleStart = useCallback(async () => {
        const apiKey = localStorage.getItem('apiKey')?.trim();
        if (!apiKey || apiKey === '') {
            // Trigger API key error animation in MainView
            setShowApiKeyError(true);
            return;
        }

        setIsInitializing(true);

        try {
            if (window.cheddar) {
                await window.cheddar.initializeGemini(selectedProfile, selectedLanguage);
                window.cheddar.startCapture(selectedScreenshotInterval, selectedImageQuality);
            }

            setResponses([]);
            setCurrentResponseIndex(-1);
            setStartTime(Date.now());
            setCurrentView('assistant');
        } catch (error) {
            console.error('Failed to start session:', error);
            setIsInitializing(false);
        }
    }, [selectedProfile, selectedLanguage, selectedScreenshotInterval, selectedImageQuality]);

    const handleAPIKeyHelp = useCallback(async () => {
        if (window.electron?.ipcRenderer) {
            await window.electron.ipcRenderer.invoke('open-external', 'https://cheatingdaddy.com/help/api-key');
        }
    }, []);

    // Customize view event handlers
    const handleProfileChange = useCallback((profile: string) => {
        setSelectedProfile(profile);
    }, []);

    const handleLanguageChange = useCallback((language: string) => {
        setSelectedLanguage(language);
    }, []);

    const handleScreenshotIntervalChange = useCallback((interval: string) => {
        setSelectedScreenshotInterval(interval);
    }, []);

    const handleImageQualityChange = useCallback((quality: string) => {
        setSelectedImageQuality(quality);
    }, []);

    const handleAdvancedModeChange = useCallback((enabled: boolean) => {
        setAdvancedMode(enabled);
    }, []);

    const handleBackClick = useCallback(() => {
        setCurrentView('main');
    }, []);

    // Help view event handlers
    const handleExternalLinkClick = useCallback(async (url: string) => {
        if (window.electron?.ipcRenderer) {
            await window.electron.ipcRenderer.invoke('open-external', url);
        }
    }, []);

    // Assistant view event handlers
    const handleSendText = useCallback(async (message: string) => {
        if (window.cheddar) {
            const result = await window.cheddar.sendTextMessage(message);

            if (!result.success) {
                setStatus('Error sending message: ' + result.error);
            } else {
                setStatus('Message sent...');
                setAwaitingNewResponse(true);
            }
        }
    }, []);

    const handleStopSession = useCallback(async () => {
        // Stop capture and close session
        if (window.cheddar) {
            window.cheddar.stopCapture();
        }

        if (window.electron?.ipcRenderer) {
            await window.electron.ipcRenderer.invoke('close-session');
        }

        setSessionActive(false);
        setCurrentView('main');
    }, []);

    const handleResponseIndexChanged = useCallback((index: number) => {
        setCurrentResponseIndex(index);
        setShouldAnimateResponse(false);
    }, []);

    // Onboarding event handlers
    const handleOnboardingComplete = useCallback(() => {
        setCurrentView('main');
    }, []);

    const handleLayoutModeChange = useCallback(async (mode: string) => {
        setLayoutMode(mode);
        updateLayoutMode(mode);

        if (window.electron?.ipcRenderer) {
            try {
                await window.electron.ipcRenderer.invoke('update-sizes');
            } catch (error) {
                console.error('Failed to update sizes in main process:', error);
            }
        }
    }, []);

    const updateLayoutMode = (mode: string) => {
        if (mode === 'compact') {
            document.documentElement.classList.add('compact-layout');
        } else {
            document.documentElement.classList.remove('compact-layout');
        }
    };

    const renderCurrentView = () => {
        switch (currentView) {
            case 'onboarding':
                return <OnboardingView currentSlide={0} contextText="" onComplete={handleOnboardingComplete} onClose={handleOnboardingComplete} />;

            case 'main':
                return (
                    <MainView
                        onStart={handleStart}
                        onAPIKeyHelp={handleAPIKeyHelp}
                        isInitializing={isInitializing}
                        onLayoutModeChange={handleLayoutModeChange}
                        showApiKeyError={showApiKeyError}
                    />
                );

            case 'customize':
                return (
                    <CustomizeView
                        selectedProfile={selectedProfile}
                        selectedLanguage={selectedLanguage}
                        selectedScreenshotInterval={selectedScreenshotInterval}
                        selectedImageQuality={selectedImageQuality}
                        layoutMode={layoutMode}
                        keybinds={keybinds}
                        googleSearchEnabled={googleSearchEnabled}
                        backgroundTransparency={backgroundTransparency}
                        fontSize={fontSize}
                        onProfileChange={handleProfileChange}
                        onLanguageChange={handleLanguageChange}
                        onScreenshotIntervalChange={handleScreenshotIntervalChange}
                        onImageQualityChange={handleImageQualityChange}
                        onLayoutModeChange={handleLayoutModeChange}
                        advancedMode={advancedMode}
                        onAdvancedModeChange={handleAdvancedModeChange}
                    />
                );

            case 'help':
                return <HelpView onExternalLinkClick={handleExternalLinkClick} keybinds={keybinds} />;

            case 'history':
                return <HistoryView />;

            case 'advanced':
                return <AdvancedView />;

            case 'assistant':
                return (
                    <AssistantView
                        responses={responses}
                        currentResponseIndex={currentResponseIndex}
                        selectedProfile={selectedProfile}
                        onSendText={handleSendText}
                        shouldAnimateResponse={shouldAnimateResponse}
                        savedResponses={savedResponses}
                        onResponseIndexChanged={handleResponseIndexChanged}
                        onStopSession={handleStopSession}
                    />
                );

            default:
                return <div>Unknown view: {currentView}</div>;
        }
    };

    const getMainContentClass = () => {
        const baseClass = 'main-content';
        if (currentView === 'assistant') return `${baseClass} assistant-view`;
        if (currentView === 'onboarding') return `${baseClass} onboarding-view`;
        return `${baseClass} with-border`;
    };

    return (
        <div className="window-container">
            <div className="container">
                <AppHeader currentView={currentView} onViewChange={handleViewChange} onMinimize={handleMinimize} onClose={handleClose} />
                <div className={getMainContentClass()}>
                    <div className="view-container">{renderCurrentView()}</div>
                </div>
            </div>
        </div>
    );
};
