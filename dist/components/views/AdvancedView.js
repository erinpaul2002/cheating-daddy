"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvancedView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const windowResize_js_1 = require("../../utils/windowResize.js");
require("./AdvancedView.css");
const AdvancedView = () => {
    const [state, setState] = (0, react_1.useState)({
        isClearing: false,
        statusMessage: '',
        statusType: '',
        throttleTokens: true,
        maxTokensPerMin: 1000000,
        throttleAtPercent: 75,
        contentProtection: true,
    });
    // Load settings on component mount
    (0, react_1.useEffect)(() => {
        loadRateLimitSettings();
        loadContentProtectionSetting();
        (0, windowResize_js_1.resizeLayout)();
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
        if (state.isClearing)
            return;
        setState(prev => ({ ...prev, isClearing: true, statusMessage: '', statusType: '' }));
        try {
            // Clear localStorage
            localStorage.clear();
            // Clear sessionStorage
            sessionStorage.clear();
            // Clear IndexedDB databases
            const databases = await indexedDB.databases();
            const clearPromises = databases.map((db) => {
                return new Promise((resolve, reject) => {
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
        }
        catch (error) {
            console.error('Error clearing data:', error);
            const errorMessage = `❌ Error clearing data: ${error.message}`;
            setState(prev => ({ ...prev, statusMessage: errorMessage, statusType: 'error' }));
        }
        finally {
            setState(prev => ({ ...prev, isClearing: false }));
        }
    };
    const handleThrottleTokensChange = (e) => {
        const checked = e.target.checked;
        setState(prev => ({ ...prev, throttleTokens: checked }));
        localStorage.setItem('throttleTokens', checked.toString());
    };
    const handleMaxTokensChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setState(prev => ({ ...prev, maxTokensPerMin: value }));
            localStorage.setItem('maxTokensPerMin', value.toString());
        }
    };
    const handleThrottlePercentChange = (e) => {
        const value = parseInt(e.target.value, 10);
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
    const handleContentProtectionChange = async (e) => {
        const checked = e.target.checked;
        setState(prev => ({ ...prev, contentProtection: checked }));
        localStorage.setItem('contentProtection', checked.toString());
        // Update the window's content protection in real-time
        if (window.electron?.ipcRenderer) {
            try {
                await window.electron.ipcRenderer.invoke('update-content-protection', checked);
            }
            catch (error) {
                console.error('Failed to update content protection:', error);
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "advancedContainer", children: [(0, jsx_runtime_1.jsxs)("div", { className: "advancedSection", children: [(0, jsx_runtime_1.jsx)("div", { className: "sectionTitle", children: (0, jsx_runtime_1.jsx)("span", { children: "\uD83D\uDD12 Content Protection" }) }), (0, jsx_runtime_1.jsx)("div", { className: "advancedDescription", children: "Content protection makes the application window invisible to screen sharing and recording software. This is useful for privacy when sharing your screen, but may interfere with certain display setups like DisplayLink." }), (0, jsx_runtime_1.jsxs)("div", { className: "formGrid", children: [(0, jsx_runtime_1.jsxs)("div", { className: "checkboxGroup", children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", className: "checkboxInput", id: "content-protection", checked: state.contentProtection, onChange: handleContentProtectionChange }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "content-protection", className: "checkboxLabel", children: "Enable content protection (stealth mode)" })] }), (0, jsx_runtime_1.jsx)("div", { className: "formDescription", style: { marginLeft: '22px' }, children: state.contentProtection
                                    ? 'The application is currently invisible to screen sharing and recording software.'
                                    : 'The application is currently visible to screen sharing and recording software.' })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "advancedSection", children: [(0, jsx_runtime_1.jsx)("div", { className: "sectionTitle", children: (0, jsx_runtime_1.jsx)("span", { children: "\u23F1\uFE0F Rate Limiting" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "rateLimitWarning", children: [(0, jsx_runtime_1.jsx)("span", { className: "rateLimitWarningIcon", children: "\u26A0\uFE0F" }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Warning:" }), " Don't mess with these settings if you don't know what this is about. Incorrect rate limiting settings may cause the application to stop working properly or hit API limits unexpectedly."] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "formGrid", children: [(0, jsx_runtime_1.jsxs)("div", { className: "checkboxGroup", children: [(0, jsx_runtime_1.jsx)("input", { type: "checkbox", className: "checkboxInput", id: "throttle-tokens", checked: state.throttleTokens, onChange: handleThrottleTokensChange }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "throttle-tokens", className: "checkboxLabel", children: "Throttle tokens when close to rate limit" })] }), (0, jsx_runtime_1.jsxs)("div", { className: `rateLimitControls ${state.throttleTokens ? 'enabled' : ''}`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "formRow", children: [(0, jsx_runtime_1.jsxs)("div", { className: "formGroup", children: [(0, jsx_runtime_1.jsx)("label", { className: "formLabel", children: "Max Allowed Tokens Per Minute" }), (0, jsx_runtime_1.jsx)("input", { type: "number", className: "formControl", value: state.maxTokensPerMin, min: "1000", max: "10000000", step: "1000", onInput: handleMaxTokensChange, disabled: !state.throttleTokens }), (0, jsx_runtime_1.jsx)("div", { className: "formDescription", children: "Maximum number of tokens allowed per minute before throttling kicks in" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "formGroup", children: [(0, jsx_runtime_1.jsx)("label", { className: "formLabel", children: "Throttle At Percent" }), (0, jsx_runtime_1.jsx)("input", { type: "number", className: "formControl", value: state.throttleAtPercent, min: "1", max: "99", step: "1", onInput: handleThrottlePercentChange, disabled: !state.throttleTokens }), (0, jsx_runtime_1.jsxs)("div", { className: "formDescription", children: ["Start throttling when this percentage of the limit is reached (", state.throttleAtPercent, "% =", Math.floor((state.maxTokensPerMin * state.throttleAtPercent) / 100), " tokens)"] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "rateLimitReset", children: [(0, jsx_runtime_1.jsx)("button", { className: "actionButton", onClick: resetRateLimitSettings, disabled: !state.throttleTokens, children: "Reset to Defaults" }), (0, jsx_runtime_1.jsx)("div", { className: "formDescription", style: { marginTop: '8px' }, children: "Reset rate limiting settings to default values" })] })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "advancedSection dangerSection", children: [(0, jsx_runtime_1.jsx)("div", { className: "sectionTitle danger", children: (0, jsx_runtime_1.jsx)("span", { children: "\uD83D\uDDD1\uFE0F Data Management" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "dangerBox", children: [(0, jsx_runtime_1.jsx)("span", { className: "dangerIcon", children: "\u26A0\uFE0F" }), (0, jsx_runtime_1.jsxs)("span", { children: [(0, jsx_runtime_1.jsx)("strong", { children: "Important:" }), " This action will permanently delete all local data and cannot be undone."] })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("button", { className: "actionButton dangerButton", onClick: clearLocalData, disabled: state.isClearing, children: state.isClearing ? '🔄 Clearing...' : '🗑️ Clear All Local Data' }), state.statusMessage && ((0, jsx_runtime_1.jsx)("div", { className: `statusMessage ${state.statusType === 'success' ? 'statusSuccess' : 'statusError'}`, children: state.statusMessage }))] })] })] }));
};
exports.AdvancedView = AdvancedView;
