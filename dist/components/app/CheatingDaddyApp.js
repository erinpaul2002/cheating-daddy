"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheatingDaddyApp = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const AppHeader_1 = require("./AppHeader");
const MainView_1 = __importDefault(require("../views/MainView"));
const AssistantView_1 = __importDefault(require("../views/AssistantView"));
const CustomizeView_1 = require("../views/CustomizeView");
const HelpView_1 = require("../views/HelpView");
const HistoryView_1 = __importDefault(require("../views/HistoryView"));
const AdvancedView_1 = require("../views/AdvancedView");
const OnboardingView_1 = require("../views/OnboardingView");
const CheatingDaddyApp = () => {
    // Core state
    const [currentView, setCurrentView] = (0, react_1.useState)(localStorage.getItem('onboardingCompleted') ? 'main' : 'onboarding');
    const [statusText, setStatusText] = (0, react_1.useState)('');
    const [startTime, setStartTime] = (0, react_1.useState)(null);
    const [isRecording, setIsRecording] = (0, react_1.useState)(false);
    const [sessionActive, setSessionActive] = (0, react_1.useState)(false);
    const [isInitializing, setIsInitializing] = (0, react_1.useState)(false);
    const [showApiKeyError, setShowApiKeyError] = (0, react_1.useState)(false);
    // Configuration state
    const [selectedProfile, setSelectedProfile] = (0, react_1.useState)(localStorage.getItem('selectedProfile') || 'interview');
    const [selectedLanguage, setSelectedLanguage] = (0, react_1.useState)(localStorage.getItem('selectedLanguage') || 'en-US');
    const [selectedScreenshotInterval, setSelectedScreenshotInterval] = (0, react_1.useState)(localStorage.getItem('selectedScreenshotInterval') || '5');
    const [selectedImageQuality, setSelectedImageQuality] = (0, react_1.useState)(localStorage.getItem('selectedImageQuality') || 'medium');
    const [layoutMode, setLayoutMode] = (0, react_1.useState)(localStorage.getItem('layoutMode') || 'normal');
    const [advancedMode, setAdvancedMode] = (0, react_1.useState)(localStorage.getItem('advancedMode') === 'true');
    // Additional configuration state for views
    const [keybinds, setKeybinds] = (0, react_1.useState)(() => {
        try {
            return JSON.parse(localStorage.getItem('customKeybinds') || '{}');
        }
        catch (e) {
            return {};
        }
    });
    const [googleSearchEnabled, setGoogleSearchEnabled] = (0, react_1.useState)(localStorage.getItem('googleSearchEnabled') === 'true');
    const [backgroundTransparency, setBackgroundTransparency] = (0, react_1.useState)(parseInt(localStorage.getItem('backgroundTransparency') || '80'));
    const [fontSize, setFontSize] = (0, react_1.useState)(parseInt(localStorage.getItem('fontSize') || '14'));
    // Response management
    const [responses, setResponses] = (0, react_1.useState)([]);
    const [currentResponseIndex, setCurrentResponseIndex] = (0, react_1.useState)(-1);
    const [shouldAnimateResponse, setShouldAnimateResponse] = (0, react_1.useState)(false);
    const [savedResponses, setSavedResponses] = (0, react_1.useState)(() => {
        try {
            return JSON.parse(localStorage.getItem('savedResponses') || '[]');
        }
        catch (e) {
            return [];
        }
    });
    // Internal state
    const [isClickThrough, setIsClickThrough] = (0, react_1.useState)(false);
    const [awaitingNewResponse, setAwaitingNewResponse] = (0, react_1.useState)(false);
    const [currentResponseIsComplete, setCurrentResponseIsComplete] = (0, react_1.useState)(true);
    // Initialize layout mode
    (0, react_1.useEffect)(() => {
        updateLayoutMode(layoutMode);
    }, [layoutMode]);
    // IPC setup
    (0, react_1.useEffect)(() => {
        if (window.electron?.ipcRenderer) {
            const ipcRenderer = window.electron.ipcRenderer;
            const handleUpdateResponse = (_, response) => {
                setResponse(response);
            };
            const handleUpdateStatus = (_, status) => {
                setStatus(status);
            };
            const handleClickThroughToggled = (_, isEnabled) => {
                setIsClickThrough(isEnabled);
            };
            const handleSessionInitializing = (_, initializing) => {
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
    (0, react_1.useEffect)(() => {
        if (window.electron?.ipcRenderer) {
            window.electron.ipcRenderer.send('view-changed', currentView);
        }
    }, [currentView]);
    // Persist settings to localStorage
    (0, react_1.useEffect)(() => {
        localStorage.setItem('selectedProfile', selectedProfile);
    }, [selectedProfile]);
    (0, react_1.useEffect)(() => {
        localStorage.setItem('selectedLanguage', selectedLanguage);
    }, [selectedLanguage]);
    (0, react_1.useEffect)(() => {
        localStorage.setItem('selectedScreenshotInterval', selectedScreenshotInterval);
    }, [selectedScreenshotInterval]);
    (0, react_1.useEffect)(() => {
        localStorage.setItem('selectedImageQuality', selectedImageQuality);
    }, [selectedImageQuality]);
    (0, react_1.useEffect)(() => {
        localStorage.setItem('advancedMode', advancedMode.toString());
    }, [advancedMode]);
    const setStatus = (0, react_1.useCallback)((text) => {
        setStatusText(text);
        // Mark response as complete when we get certain status messages
        if (text.includes('Ready') || text.includes('Listening') || text.includes('Error')) {
            setCurrentResponseIsComplete(true);
        }
    }, []);
    const setResponse = (0, react_1.useCallback)((response) => {
        // Check if this looks like a filler response
        const isFillerResponse = response.length < 30 &&
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
            }
            else if (!currentResponseIsComplete && !isFillerResponse && prevResponses.length > 0) {
                // For substantial responses, update the last one (streaming behavior)
                return [...prevResponses.slice(0, prevResponses.length - 1), response];
            }
            else {
                // For filler responses or when current response is complete, add as new
                setCurrentResponseIndex(prevResponses.length);
                setCurrentResponseIsComplete(false);
                return [...prevResponses, response];
            }
        });
        setShouldAnimateResponse(true);
    }, [awaitingNewResponse, currentResponseIsComplete]);
    // Header event handlers
    const handleCustomizeClick = (0, react_1.useCallback)(() => {
        setCurrentView('customize');
    }, []);
    const handleHelpClick = (0, react_1.useCallback)(() => {
        setCurrentView('help');
    }, []);
    const handleHistoryClick = (0, react_1.useCallback)(() => {
        setCurrentView('history');
    }, []);
    const handleAdvancedClick = (0, react_1.useCallback)(() => {
        setCurrentView('advanced');
    }, []);
    const handleMinimize = (0, react_1.useCallback)(async () => {
        if (window.electron?.ipcRenderer) {
            await window.electron.ipcRenderer.invoke('minimize-window');
        }
    }, []);
    const handleViewChange = (0, react_1.useCallback)((view) => {
        setCurrentView(view);
    }, []);
    const handleClose = (0, react_1.useCallback)(async () => {
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
        }
        else {
            console.error('window.electron.ipcRenderer not available');
        }
    }, [currentView, sessionActive]);
    const handleHideToggle = (0, react_1.useCallback)(async () => {
        if (window.electron?.ipcRenderer) {
            await window.electron.ipcRenderer.invoke('toggle-window-visibility');
        }
    }, []);
    // Main view event handlers
    const handleStart = (0, react_1.useCallback)(async () => {
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
        }
        catch (error) {
            console.error('Failed to start session:', error);
            setIsInitializing(false);
        }
    }, [selectedProfile, selectedLanguage, selectedScreenshotInterval, selectedImageQuality]);
    const handleAPIKeyHelp = (0, react_1.useCallback)(async () => {
        if (window.electron?.ipcRenderer) {
            await window.electron.ipcRenderer.invoke('open-external', 'https://cheatingdaddy.com/help/api-key');
        }
    }, []);
    // Customize view event handlers
    const handleProfileChange = (0, react_1.useCallback)((profile) => {
        setSelectedProfile(profile);
    }, []);
    const handleLanguageChange = (0, react_1.useCallback)((language) => {
        setSelectedLanguage(language);
    }, []);
    const handleScreenshotIntervalChange = (0, react_1.useCallback)((interval) => {
        setSelectedScreenshotInterval(interval);
    }, []);
    const handleImageQualityChange = (0, react_1.useCallback)((quality) => {
        setSelectedImageQuality(quality);
    }, []);
    const handleAdvancedModeChange = (0, react_1.useCallback)((enabled) => {
        setAdvancedMode(enabled);
    }, []);
    const handleBackClick = (0, react_1.useCallback)(() => {
        setCurrentView('main');
    }, []);
    // Help view event handlers
    const handleExternalLinkClick = (0, react_1.useCallback)(async (url) => {
        if (window.electron?.ipcRenderer) {
            await window.electron.ipcRenderer.invoke('open-external', url);
        }
    }, []);
    // Assistant view event handlers
    const handleSendText = (0, react_1.useCallback)(async (message) => {
        if (window.cheddar) {
            const result = await window.cheddar.sendTextMessage(message);
            if (!result.success) {
                setStatus('Error sending message: ' + result.error);
            }
            else {
                setStatus('Message sent...');
                setAwaitingNewResponse(true);
            }
        }
    }, []);
    const handleStopSession = (0, react_1.useCallback)(async () => {
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
    const handleResponseIndexChanged = (0, react_1.useCallback)((index) => {
        setCurrentResponseIndex(index);
        setShouldAnimateResponse(false);
    }, []);
    // Onboarding event handlers
    const handleOnboardingComplete = (0, react_1.useCallback)(() => {
        setCurrentView('main');
    }, []);
    const handleLayoutModeChange = (0, react_1.useCallback)(async (mode) => {
        setLayoutMode(mode);
        updateLayoutMode(mode);
        if (window.electron?.ipcRenderer) {
            try {
                await window.electron.ipcRenderer.invoke('update-sizes');
            }
            catch (error) {
                console.error('Failed to update sizes in main process:', error);
            }
        }
    }, []);
    const updateLayoutMode = (mode) => {
        if (mode === 'compact') {
            document.documentElement.classList.add('compact-layout');
        }
        else {
            document.documentElement.classList.remove('compact-layout');
        }
    };
    const renderCurrentView = () => {
        switch (currentView) {
            case 'onboarding':
                return (0, jsx_runtime_1.jsx)(OnboardingView_1.OnboardingView, { currentSlide: 0, contextText: "", onComplete: handleOnboardingComplete, onClose: handleOnboardingComplete });
            case 'main':
                return ((0, jsx_runtime_1.jsx)(MainView_1.default, { onStart: handleStart, onAPIKeyHelp: handleAPIKeyHelp, isInitializing: isInitializing, onLayoutModeChange: handleLayoutModeChange, showApiKeyError: showApiKeyError }));
            case 'customize':
                return ((0, jsx_runtime_1.jsx)(CustomizeView_1.CustomizeView, { selectedProfile: selectedProfile, selectedLanguage: selectedLanguage, selectedScreenshotInterval: selectedScreenshotInterval, selectedImageQuality: selectedImageQuality, layoutMode: layoutMode, keybinds: keybinds, googleSearchEnabled: googleSearchEnabled, backgroundTransparency: backgroundTransparency, fontSize: fontSize, onProfileChange: handleProfileChange, onLanguageChange: handleLanguageChange, onScreenshotIntervalChange: handleScreenshotIntervalChange, onImageQualityChange: handleImageQualityChange, onLayoutModeChange: handleLayoutModeChange, advancedMode: advancedMode, onAdvancedModeChange: handleAdvancedModeChange }));
            case 'help':
                return (0, jsx_runtime_1.jsx)(HelpView_1.HelpView, { onExternalLinkClick: handleExternalLinkClick, keybinds: keybinds });
            case 'history':
                return (0, jsx_runtime_1.jsx)(HistoryView_1.default, {});
            case 'advanced':
                return (0, jsx_runtime_1.jsx)(AdvancedView_1.AdvancedView, {});
            case 'assistant':
                return ((0, jsx_runtime_1.jsx)(AssistantView_1.default, { responses: responses, currentResponseIndex: currentResponseIndex, selectedProfile: selectedProfile, onSendText: handleSendText, shouldAnimateResponse: shouldAnimateResponse, savedResponses: savedResponses, onResponseIndexChanged: handleResponseIndexChanged, onStopSession: handleStopSession }));
            default:
                return (0, jsx_runtime_1.jsxs)("div", { children: ["Unknown view: ", currentView] });
        }
    };
    const getMainContentClass = () => {
        const baseClass = 'main-content';
        if (currentView === 'assistant')
            return `${baseClass} assistant-view`;
        if (currentView === 'onboarding')
            return `${baseClass} onboarding-view`;
        return `${baseClass} with-border`;
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: "window-container", children: (0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsx)(AppHeader_1.AppHeader, { currentView: currentView, onViewChange: handleViewChange, onMinimize: handleMinimize, onClose: handleClose }), (0, jsx_runtime_1.jsx)("div", { className: getMainContentClass(), children: (0, jsx_runtime_1.jsx)("div", { className: "view-container", children: renderCurrentView() }) })] }) }));
};
exports.CheatingDaddyApp = CheatingDaddyApp;
