"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const windowResize_1 = require("../../utils/windowResize");
const input_1 = require("@/components/ui/input");
const button_1 = require("@/components/ui/button");
const utils_1 = require("@/lib/utils");
require("./MainView.css");
const MainView = ({ onStart, onAPIKeyHelp, isInitializing, onLayoutModeChange, showApiKeyError = false }) => {
    const [apiKey, setApiKey] = (0, react_1.useState)(() => localStorage.getItem('apiKey') || '');
    const [displayApiKeyError, setDisplayApiKeyError] = (0, react_1.useState)(showApiKeyError);
    // Update display error when prop changes
    (0, react_1.useEffect)(() => {
        setDisplayApiKeyError(showApiKeyError);
    }, [showApiKeyError]);
    // IPC listener for session initialization state
    (0, react_1.useEffect)(() => {
        const handleSessionInitializing = (event, initializing) => {
            // This will be handled by parent component via props
        };
        window.electron?.ipcRenderer?.on('session-initializing', handleSessionInitializing);
        return () => {
            window.electron?.ipcRenderer?.removeAllListeners('session-initializing');
        };
    }, []);
    // Load and apply layout mode on startup
    (0, react_1.useEffect)(() => {
        const loadLayoutMode = () => {
            const savedLayoutMode = localStorage.getItem('layoutMode');
            if (savedLayoutMode && savedLayoutMode !== 'normal') {
                onLayoutModeChange(savedLayoutMode);
            }
        };
        loadLayoutMode();
        (0, windowResize_1.resizeLayout)();
    }, [onLayoutModeChange]);
    // Keyboard event handler
    const handleKeydown = (0, react_1.useCallback)((e) => {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const isStartShortcut = isMac ? e.metaKey && e.key === 'Enter' : e.ctrlKey && e.key === 'Enter';
        if (isStartShortcut) {
            e.preventDefault();
            handleStartClick();
        }
    }, []);
    // Add keyboard event listener
    (0, react_1.useEffect)(() => {
        document.addEventListener('keydown', handleKeydown);
        return () => document.removeEventListener('keydown', handleKeydown);
    }, [handleKeydown]);
    const handleInput = (e) => {
        const value = e.target.value;
        setApiKey(value);
        localStorage.setItem('apiKey', value);
        // Clear error state when user starts typing
        if (displayApiKeyError) {
            setDisplayApiKeyError(false);
        }
    };
    const handleStartClick = () => {
        if (isInitializing) {
            return;
        }
        onStart();
    };
    const handleAPIKeyHelpClick = () => {
        onAPIKeyHelp();
    };
    const handleResetOnboarding = () => {
        localStorage.removeItem('onboardingCompleted');
        // Refresh the page to trigger onboarding
        window.location.reload();
    };
    // Method to trigger the red blink animation
    const triggerApiKeyError = (0, react_1.useCallback)(() => {
        setDisplayApiKeyError(true);
        // Remove the error class after 1 second
        setTimeout(() => {
            setDisplayApiKeyError(false);
        }, 1000);
    }, []);
    const getStartButtonText = () => {
        const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        const cmdIcon = ((0, jsx_runtime_1.jsxs)("svg", { width: "14px", height: "14px", viewBox: "0 0 24 24", strokeWidth: "2", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0, jsx_runtime_1.jsx)("path", { d: "M9 6V18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M15 6V18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H18C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3C16.3431 3 15 4.34315 15 6", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M9 18C9 19.6569 7.65685 21 6 21C4.34315 21 3 19.6569 3 18C3 16.3431 4.34315 15 6 15H18C19.6569 15 21 16.3431 21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
        const enterIcon = ((0, jsx_runtime_1.jsxs)("svg", { width: "14px", height: "14px", strokeWidth: "2", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.25 19.25L6.75 15.75L10.25 12.25", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M6.75 15.75H12.75C14.9591 15.75 16.75 13.9591 16.75 11.75V4.75", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })] }));
        if (isMac) {
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Start Session", ' ', (0, jsx_runtime_1.jsxs)("span", { className: "shortcut-icons", children: [cmdIcon, enterIcon] })] }));
        }
        else {
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["Start Session ", (0, jsx_runtime_1.jsxs)("span", { className: "shortcut-icons", children: ["Ctrl", enterIcon] })] }));
        }
    };
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)("div", { className: "main-view", children: [(0, jsx_runtime_1.jsx)("div", { className: "welcome", children: "Welcome" }), (0, jsx_runtime_1.jsxs)("div", { className: "input-group", children: [(0, jsx_runtime_1.jsx)(input_1.Input, { type: "password", placeholder: "Enter your Gemini API Key", value: apiKey, onChange: handleInput, className: (0, utils_1.cn)(displayApiKeyError && 'api-key-error') }), (0, jsx_runtime_1.jsx)(button_1.Button, { onClick: handleStartClick, className: (0, utils_1.cn)('start-button', isInitializing && 'initializing'), disabled: isInitializing, variant: "default", children: getStartButtonText() })] }), (0, jsx_runtime_1.jsxs)("p", { className: "description", children: ["dont have an api key?", (0, jsx_runtime_1.jsx)("span", { onClick: handleAPIKeyHelpClick, className: "link", children: "get one here" })] })] }) }));
};
exports.default = MainView;
