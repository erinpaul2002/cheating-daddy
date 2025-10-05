"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomizeView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const windowResize_1 = require("../../utils/windowResize");
const button_1 = require("@/components/ui/button");
const select_1 = require("@/components/ui/select");
const switch_1 = require("@/components/ui/switch");
const textarea_1 = require("@/components/ui/textarea");
const label_1 = require("@/components/ui/label");
require("./CustomizeView.css");
const CustomizeView = ({ selectedProfile, selectedLanguage, selectedScreenshotInterval, selectedImageQuality, layoutMode, keybinds, googleSearchEnabled, backgroundTransparency, fontSize, onProfileChange, onLanguageChange, onScreenshotIntervalChange, onImageQualityChange, onLayoutModeChange, advancedMode, onAdvancedModeChange, }) => {
    // Local state for internal component management
    const [currentKeybinds, setCurrentKeybinds] = (0, react_1.useState)(keybinds);
    const [localLayoutMode, setLocalLayoutMode] = (0, react_1.useState)(layoutMode);
    // Load settings on mount
    (0, react_1.useEffect)(() => {
        loadKeybinds();
        loadLayoutMode();
        loadGoogleSearchSettings();
        loadAdvancedModeSettings();
        loadBackgroundTransparency();
        loadFontSize();
        (0, windowResize_1.resizeLayout)();
    }, []);
    // Update local keybinds when props change
    (0, react_1.useEffect)(() => {
        setCurrentKeybinds(keybinds);
    }, [keybinds]);
    // Update local layout mode when props change
    (0, react_1.useEffect)(() => {
        setLocalLayoutMode(layoutMode);
    }, [layoutMode]);
    const getProfiles = (0, react_1.useCallback)(() => {
        return [
            {
                value: 'interview',
                name: 'Job Interview',
                description: 'Get help with answering interview questions',
            },
            {
                value: 'sales',
                name: 'Sales Call',
                description: 'Assist with sales conversations and objection handling',
            },
            {
                value: 'meeting',
                name: 'Business Meeting',
                description: 'Support for professional meetings and discussions',
            },
            {
                value: 'presentation',
                name: 'Presentation',
                description: 'Help with presentations and public speaking',
            },
            {
                value: 'negotiation',
                name: 'Negotiation',
                description: 'Guidance for business negotiations and deals',
            },
            {
                value: 'exam',
                name: 'Exam Assistant',
                description: 'Academic assistance for test-taking and exam questions',
            },
        ];
    }, []);
    const getLanguages = (0, react_1.useCallback)(() => {
        return [
            { value: 'en-US', name: 'English (US)' },
            { value: 'en-GB', name: 'English (UK)' },
            { value: 'en-AU', name: 'English (Australia)' },
            { value: 'en-IN', name: 'English (India)' },
            { value: 'de-DE', name: 'German (Germany)' },
            { value: 'es-US', name: 'Spanish (United States)' },
            { value: 'es-ES', name: 'Spanish (Spain)' },
            { value: 'fr-FR', name: 'French (France)' },
            { value: 'fr-CA', name: 'French (Canada)' },
            { value: 'hi-IN', name: 'Hindi (India)' },
            { value: 'pt-BR', name: 'Portuguese (Brazil)' },
            { value: 'ar-XA', name: 'Arabic (Generic)' },
            { value: 'id-ID', name: 'Indonesian (Indonesia)' },
            { value: 'it-IT', name: 'Italian (Italy)' },
            { value: 'ja-JP', name: 'Japanese (Japan)' },
            { value: 'tr-TR', name: 'Turkish (Turkey)' },
            { value: 'vi-VN', name: 'Vietnamese (Vietnam)' },
            { value: 'bn-IN', name: 'Bengali (India)' },
            { value: 'gu-IN', name: 'Gujarati (India)' },
            { value: 'kn-IN', name: 'Kannada (India)' },
            { value: 'ml-IN', name: 'Malayalam (India)' },
            { value: 'mr-IN', name: 'Marathi (India)' },
            { value: 'ta-IN', name: 'Tamil (India)' },
            { value: 'te-IN', name: 'Telugu (India)' },
            { value: 'nl-NL', name: 'Dutch (Netherlands)' },
            { value: 'ko-KR', name: 'Korean (South Korea)' },
            { value: 'cmn-CN', name: 'Mandarin Chinese (China)' },
            { value: 'pl-PL', name: 'Polish (Poland)' },
            { value: 'ru-RU', name: 'Russian (Russia)' },
            { value: 'th-TH', name: 'Thai (Thailand)' },
        ];
    }, []);
    const getProfileNames = (0, react_1.useCallback)(() => {
        return {
            interview: 'Job Interview',
            sales: 'Sales Call',
            meeting: 'Business Meeting',
            presentation: 'Presentation',
            negotiation: 'Negotiation',
            exam: 'Exam Assistant',
        };
    }, []);
    const getDefaultKeybinds = (0, react_1.useCallback)(() => {
        const isMac = window.cheddar?.isMacOS || navigator.platform.includes('Mac');
        return {
            moveUp: isMac ? 'Alt+Up' : 'Ctrl+Up',
            moveDown: isMac ? 'Alt+Down' : 'Ctrl+Down',
            moveLeft: isMac ? 'Alt+Left' : 'Ctrl+Left',
            moveRight: isMac ? 'Alt+Right' : 'Ctrl+Right',
            toggleVisibility: isMac ? 'Cmd+\\' : 'Ctrl+\\',
            toggleClickThrough: isMac ? 'Cmd+M' : 'Ctrl+M',
            nextStep: isMac ? 'Cmd+Enter' : 'Ctrl+Enter',
            previousResponse: isMac ? 'Cmd+[' : 'Ctrl+[',
            nextResponse: isMac ? 'Cmd+]' : 'Ctrl+]',
            scrollUp: isMac ? 'Cmd+Shift+Up' : 'Ctrl+Shift+Up',
            scrollDown: isMac ? 'Cmd+Shift+Down' : 'Ctrl+Shift+Down',
        };
    }, []);
    const loadKeybinds = (0, react_1.useCallback)(() => {
        const savedKeybinds = localStorage.getItem('customKeybinds');
        if (savedKeybinds) {
            try {
                const parsed = JSON.parse(savedKeybinds);
                setCurrentKeybinds({ ...getDefaultKeybinds(), ...parsed });
            }
            catch (e) {
                console.error('Failed to parse saved keybinds:', e);
                setCurrentKeybinds(getDefaultKeybinds());
            }
        }
    }, [getDefaultKeybinds]);
    const saveKeybinds = (0, react_1.useCallback)((newKeybinds) => {
        localStorage.setItem('customKeybinds', JSON.stringify(newKeybinds));
        // Send to main process to update global shortcuts
        if (window.electron?.ipcRenderer) {
            try {
                window.electron.ipcRenderer.send('update-keybinds', newKeybinds);
            }
            catch (e) {
                console.error('Failed to send keybinds to main process:', e);
            }
        }
    }, []);
    const loadLayoutMode = (0, react_1.useCallback)(() => {
        const savedLayoutMode = localStorage.getItem('layoutMode');
        if (savedLayoutMode) {
            setLocalLayoutMode(savedLayoutMode);
        }
    }, []);
    const loadGoogleSearchSettings = (0, react_1.useCallback)(() => {
        // This will be handled by props, but we can load from localStorage if needed
    }, []);
    const loadAdvancedModeSettings = (0, react_1.useCallback)(() => {
        // This will be handled by props, but we can load from localStorage if needed
    }, []);
    const loadBackgroundTransparency = (0, react_1.useCallback)(() => {
        const saved = localStorage.getItem('backgroundTransparency');
        if (saved !== null) {
            updateBackgroundTransparency(parseFloat(saved));
        }
    }, []);
    const loadFontSize = (0, react_1.useCallback)(() => {
        const saved = localStorage.getItem('fontSize');
        if (saved !== null) {
            updateFontSize(parseInt(saved, 10));
        }
    }, []);
    const updateBackgroundTransparency = (0, react_1.useCallback)((value) => {
        const root = document.documentElement;
        root.style.setProperty('--header-background', `rgba(0, 0, 0, ${value})`);
        root.style.setProperty('--main-content-background', `rgba(0, 0, 0, ${value})`);
        root.style.setProperty('--card-background', `rgba(255, 255, 255, ${value * 0.05})`);
        root.style.setProperty('--input-background', `rgba(0, 0, 0, ${value * 0.375})`);
        root.style.setProperty('--input-focus-background', `rgba(0, 0, 0, ${value * 0.625})`);
        root.style.setProperty('--button-background', `rgba(0, 0, 0, ${value * 0.625})`);
        root.style.setProperty('--preview-video-background', `rgba(0, 0, 0, ${value * 1.125})`);
        root.style.setProperty('--screen-option-background', `rgba(0, 0, 0, ${value * 0.5})`);
        root.style.setProperty('--screen-option-hover-background', `rgba(0, 0, 0, ${value * 0.75})`);
        root.style.setProperty('--scrollbar-background', `rgba(0, 0, 0, ${value * 0.5})`);
    }, []);
    const updateFontSize = (0, react_1.useCallback)((value) => {
        const root = document.documentElement;
        root.style.setProperty('--response-font-size', `${value}px`);
    }, []);
    // Event handlers - Updated for shadcn components
    const handleProfileSelect = (0, react_1.useCallback)((value) => {
        const profileValue = value;
        localStorage.setItem('selectedProfile', profileValue);
        onProfileChange(profileValue);
    }, [onProfileChange]);
    const handleLanguageSelect = (0, react_1.useCallback)((value) => {
        const languageValue = value;
        localStorage.setItem('selectedLanguage', languageValue);
        onLanguageChange(languageValue);
    }, [onLanguageChange]);
    const handleScreenshotIntervalSelect = (0, react_1.useCallback)((value) => {
        localStorage.setItem('selectedScreenshotInterval', value);
        onScreenshotIntervalChange(value);
    }, [onScreenshotIntervalChange]);
    const handleImageQualitySelect = (0, react_1.useCallback)((value) => {
        onImageQualityChange(value);
    }, [onImageQualityChange]);
    const handleLayoutModeSelect = (0, react_1.useCallback)((value) => {
        localStorage.setItem('layoutMode', value);
        setLocalLayoutMode(value);
        onLayoutModeChange(value);
    }, [onLayoutModeChange]);
    const handleCustomPromptInput = (0, react_1.useCallback)((e) => {
        localStorage.setItem('customPrompt', e.target.value);
    }, []);
    const handleKeybindChange = (0, react_1.useCallback)((action, value) => {
        const newKeybinds = { ...currentKeybinds, [action]: value };
        setCurrentKeybinds(newKeybinds);
        saveKeybinds(newKeybinds);
    }, [currentKeybinds, saveKeybinds]);
    const resetKeybinds = (0, react_1.useCallback)(() => {
        const defaultKeybinds = getDefaultKeybinds();
        setCurrentKeybinds(defaultKeybinds);
        localStorage.removeItem('customKeybinds');
        saveKeybinds(defaultKeybinds);
    }, [getDefaultKeybinds, saveKeybinds]);
    const handleGoogleSearchChange = (0, react_1.useCallback)(async (checked) => {
        localStorage.setItem('googleSearchEnabled', checked.toString());
        // Notify main process if available
        if (window.electron?.ipcRenderer) {
            try {
                window.electron.ipcRenderer.send('update-google-search', checked);
            }
            catch (error) {
                console.error('Failed to send google search setting to main process:', error);
            }
        }
    }, []);
    const handleAdvancedModeChange = (0, react_1.useCallback)((checked) => {
        localStorage.setItem('advancedMode', checked.toString());
        onAdvancedModeChange(checked);
    }, [onAdvancedModeChange]);
    const handleBackgroundTransparencyChange = (0, react_1.useCallback)((e) => {
        const value = parseFloat(e.target.value);
        localStorage.setItem('backgroundTransparency', value.toString());
        updateBackgroundTransparency(value);
    }, [updateBackgroundTransparency]);
    const handleFontSizeChange = (0, react_1.useCallback)((e) => {
        const value = parseInt(e.target.value, 10);
        localStorage.setItem('fontSize', value.toString());
        updateFontSize(value);
    }, [updateFontSize]);
    // Complex keybind input handling
    const handleKeybindFocus = (0, react_1.useCallback)((e) => {
        e.target.placeholder = 'Press key combination...';
        e.target.select();
    }, []);
    const handleKeybindInput = (0, react_1.useCallback)((e) => {
        e.preventDefault();
        const modifiers = [];
        const keys = [];
        // Check modifiers
        if (e.ctrlKey)
            modifiers.push('Ctrl');
        if (e.metaKey)
            modifiers.push('Cmd');
        if (e.altKey)
            modifiers.push('Alt');
        if (e.shiftKey)
            modifiers.push('Shift');
        // Get the main key
        let mainKey = e.key;
        // Handle special keys
        switch (e.code) {
            case 'ArrowUp':
                mainKey = 'Up';
                break;
            case 'ArrowDown':
                mainKey = 'Down';
                break;
            case 'ArrowLeft':
                mainKey = 'Left';
                break;
            case 'ArrowRight':
                mainKey = 'Right';
                break;
            case 'Escape':
                mainKey = 'Escape';
                break;
            case 'Enter':
                mainKey = 'Enter';
                break;
            case 'Space':
                mainKey = 'Space';
                break;
            case 'Backspace':
                mainKey = 'Backspace';
                break;
            case 'Delete':
                mainKey = 'Delete';
                break;
            case 'Tab':
                mainKey = 'Tab';
                break;
            case 'BracketLeft':
                mainKey = '[';
                break;
            case 'BracketRight':
                mainKey = ']';
                break;
            case 'Backslash':
                mainKey = '\\';
                break;
            case 'Semicolon':
                mainKey = ';';
                break;
            case 'Quote':
                mainKey = "'";
                break;
            case 'Comma':
                mainKey = ',';
                break;
            case 'Period':
                mainKey = '.';
                break;
            case 'Slash':
                mainKey = '/';
                break;
            default:
                // For regular keys, use the key property
                if (e.key.length === 1) {
                    mainKey = e.key.toUpperCase();
                }
                break;
        }
        // Skip if only modifier keys are pressed
        if (['Control', 'Meta', 'Alt', 'Shift'].includes(e.key)) {
            return;
        }
        // Construct keybind string
        const keybind = [...modifiers, mainKey].join('+');
        // Get the action from the input's data attribute
        const action = e.currentTarget.dataset.action;
        // Update the keybind
        handleKeybindChange(action, keybind);
        // Update the input value
        e.currentTarget.value = keybind;
        e.currentTarget.blur();
    }, [handleKeybindChange]);
    const getKeybindActions = (0, react_1.useCallback)(() => {
        return [
            {
                key: 'moveUp',
                name: 'Move Window Up',
                description: 'Move the application window up',
            },
            {
                key: 'moveDown',
                name: 'Move Window Down',
                description: 'Move the application window down',
            },
            {
                key: 'moveLeft',
                name: 'Move Window Left',
                description: 'Move the application window left',
            },
            {
                key: 'moveRight',
                name: 'Move Window Right',
                description: 'Move the application window right',
            },
            {
                key: 'toggleVisibility',
                name: 'Toggle Window Visibility',
                description: 'Show/hide the application window',
            },
            {
                key: 'toggleClickThrough',
                name: 'Toggle Click-through Mode',
                description: 'Enable/disable click-through functionality',
            },
            {
                key: 'nextStep',
                name: 'Ask Next Step',
                description: 'Take screenshot and ask AI for the next step suggestion',
            },
            {
                key: 'previousResponse',
                name: 'Previous Response',
                description: 'Navigate to the previous AI response',
            },
            {
                key: 'nextResponse',
                name: 'Next Response',
                description: 'Navigate to the next AI response',
            },
            {
                key: 'scrollUp',
                name: 'Scroll Response Up',
                description: 'Scroll the AI response content up',
            },
            {
                key: 'scrollDown',
                name: 'Scroll Response Down',
                description: 'Scroll the AI response content down',
            },
        ];
    }, []);
    // Get data for rendering
    const profiles = getProfiles();
    const languages = getLanguages();
    const profileNames = getProfileNames();
    const keybindActions = getKeybindActions();
    const currentProfile = profiles.find(p => p.value === selectedProfile);
    const currentLanguage = languages.find(l => l.value === selectedLanguage);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "settings-container", children: [(0, jsx_runtime_1.jsxs)("div", { className: "settings-section", children: [(0, jsx_runtime_1.jsx)("div", { className: "section-title", children: (0, jsx_runtime_1.jsx)("span", { children: "AI Profile & Behavior" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "form-grid", children: [(0, jsx_runtime_1.jsx)("div", { className: "form-row", children: (0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsxs)(label_1.Label, { className: "form-label", children: ["Profile Type", (0, jsx_runtime_1.jsx)("span", { className: "current-selection", children: currentProfile?.name || 'Unknown' })] }), (0, jsx_runtime_1.jsxs)(select_1.Select, { value: selectedProfile, onValueChange: handleProfileSelect, children: [(0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { className: "form-control", children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: "Select profile" }) }), (0, jsx_runtime_1.jsx)(select_1.SelectContent, { children: profiles.map(profile => ((0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: profile.value, children: profile.name }, profile.value))) })] })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "form-group full-width", children: [(0, jsx_runtime_1.jsx)(label_1.Label, { className: "form-label", children: "Custom AI Instructions" }), (0, jsx_runtime_1.jsx)(textarea_1.Textarea, { className: "form-control", placeholder: `Add specific instructions for how you want the AI to behave during ${profileNames[selectedProfile] || 'this interaction'}...`, defaultValue: localStorage.getItem('customPrompt') || '', rows: 4, onChange: handleCustomPromptInput }), (0, jsx_runtime_1.jsxs)("div", { className: "form-description", children: ["Personalize the AI's behavior with specific instructions that will be added to the", ' ', profileNames[selectedProfile] || 'selected profile', " base prompts"] })] })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "settings-section", children: [(0, jsx_runtime_1.jsx)("div", { className: "section-title", children: (0, jsx_runtime_1.jsx)("span", { children: "Audio & Microphone" }) }), (0, jsx_runtime_1.jsx)("div", { className: "form-grid", children: (0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsx)(label_1.Label, { className: "form-label", children: "Audio Mode" }), (0, jsx_runtime_1.jsxs)(select_1.Select, { defaultValue: localStorage.getItem('audioMode') || 'speaker_only', onValueChange: value => localStorage.setItem('audioMode', value), children: [(0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { className: "form-control", children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: "Select audio mode" }) }), (0, jsx_runtime_1.jsxs)(select_1.SelectContent, { children: [(0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "speaker_only", children: "Speaker Only (Interviewer)" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "mic_only", children: "Microphone Only (Me)" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "both", children: "Both Speaker & Microphone" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "form-description", children: "Choose which audio sources to capture for the AI." })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "settings-section", children: [(0, jsx_runtime_1.jsx)("div", { className: "section-title", children: (0, jsx_runtime_1.jsx)("span", { children: "Stealth Profile" }) }), (0, jsx_runtime_1.jsx)("div", { className: "form-grid", children: (0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsx)(label_1.Label, { className: "form-label", children: "Profile" }), (0, jsx_runtime_1.jsxs)(select_1.Select, { defaultValue: localStorage.getItem('stealthProfile') || 'balanced', onValueChange: value => {
                                        localStorage.setItem('stealthProfile', value);
                                        alert('Restart the application for stealth changes to take full effect.');
                                    }, children: [(0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { className: "form-control", children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: "Select stealth profile" }) }), (0, jsx_runtime_1.jsxs)(select_1.SelectContent, { children: [(0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "visible", children: "Visible" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "balanced", children: "Balanced" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "ultra", children: "Ultra-Stealth" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "form-description", children: "Adjusts visibility and detection resistance. A restart is required for changes to apply." })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "settings-section", children: [(0, jsx_runtime_1.jsx)("div", { className: "section-title", children: (0, jsx_runtime_1.jsx)("span", { children: "Language & Layout" }) }), (0, jsx_runtime_1.jsx)("div", { className: "form-grid", children: (0, jsx_runtime_1.jsxs)("div", { className: "form-row", children: [(0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsxs)(label_1.Label, { className: "form-label", children: ["Language", (0, jsx_runtime_1.jsx)("span", { className: "current-selection", children: currentLanguage?.name || 'Unknown' })] }), (0, jsx_runtime_1.jsxs)(select_1.Select, { value: selectedLanguage, onValueChange: handleLanguageSelect, children: [(0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { className: "form-control", children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: "Select language" }) }), (0, jsx_runtime_1.jsx)(select_1.SelectContent, { children: languages.map(language => ((0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: language.value, children: language.name }, language.value))) })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsxs)(label_1.Label, { className: "form-label", children: ["Layout Mode", (0, jsx_runtime_1.jsx)("span", { className: "current-selection", children: localLayoutMode.charAt(0).toUpperCase() + localLayoutMode.slice(1) })] }), (0, jsx_runtime_1.jsxs)(select_1.Select, { value: localLayoutMode, onValueChange: handleLayoutModeSelect, children: [(0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { className: "form-control", children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: "Select layout" }) }), (0, jsx_runtime_1.jsxs)(select_1.SelectContent, { children: [(0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "compact", children: "Compact" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "normal", children: "Normal" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "spacious", children: "Spacious" })] })] })] })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "settings-section", children: [(0, jsx_runtime_1.jsx)("div", { className: "section-title", children: (0, jsx_runtime_1.jsx)("span", { children: "Keyboard Shortcuts" }) }), (0, jsx_runtime_1.jsx)("div", { className: "keybinds-table-container", children: (0, jsx_runtime_1.jsxs)("table", { className: "keybinds-table", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Action" }), (0, jsx_runtime_1.jsx)("th", { children: "Shortcut" })] }) }), (0, jsx_runtime_1.jsxs)("tbody", { children: [keybindActions.map((action) => ((0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsxs)("td", { children: [(0, jsx_runtime_1.jsx)("div", { className: "action-name", children: action.name }), (0, jsx_runtime_1.jsx)("div", { className: "action-description", children: action.description })] }), (0, jsx_runtime_1.jsx)("td", { children: (0, jsx_runtime_1.jsx)("input", { type: "text", className: "keybind-input form-control", value: currentKeybinds[action.key] || '', "data-action": action.key, onFocus: handleKeybindFocus, onKeyDown: handleKeybindInput, readOnly: true }) })] }, action.key))), (0, jsx_runtime_1.jsx)("tr", { className: "table-reset-row", children: (0, jsx_runtime_1.jsx)("td", { colSpan: 2, children: (0, jsx_runtime_1.jsx)(button_1.Button, { className: "reset-keybinds-button", onClick: resetKeybinds, variant: "outline", children: "Reset to Defaults" }) }) })] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "settings-note", children: "\uD83D\uDCA1 Changes to keyboard shortcuts take effect immediately" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "settings-section", children: [(0, jsx_runtime_1.jsx)("div", { className: "section-title", children: (0, jsx_runtime_1.jsx)("span", { children: "Appearance" }) }), (0, jsx_runtime_1.jsx)("div", { className: "form-grid", children: (0, jsx_runtime_1.jsxs)("div", { className: "form-row", children: [(0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsxs)("label", { className: "form-label", children: ["Background Transparency", (0, jsx_runtime_1.jsxs)("span", { className: "current-selection", children: [Math.round(backgroundTransparency * 100), "%"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "slider-container", children: [(0, jsx_runtime_1.jsx)("div", { className: "slider-header", children: (0, jsx_runtime_1.jsx)("span", { className: "slider-value", children: backgroundTransparency.toFixed(2) }) }), (0, jsx_runtime_1.jsx)("input", { type: "range", className: "slider-input", min: "0.1", max: "1.0", step: "0.05", defaultValue: backgroundTransparency.toString(), onChange: handleBackgroundTransparencyChange }), (0, jsx_runtime_1.jsxs)("div", { className: "slider-labels", children: [(0, jsx_runtime_1.jsx)("span", { children: "10%" }), (0, jsx_runtime_1.jsx)("span", { children: "100%" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "form-description", children: "Adjust the transparency of the application background" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsxs)("label", { className: "form-label", children: ["Font Size", (0, jsx_runtime_1.jsxs)("span", { className: "current-selection", children: [fontSize, "px"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "slider-container", children: [(0, jsx_runtime_1.jsx)("div", { className: "slider-header", children: (0, jsx_runtime_1.jsxs)("span", { className: "slider-value", children: [fontSize, "px"] }) }), (0, jsx_runtime_1.jsx)("input", { type: "range", className: "slider-input", min: "12", max: "32", step: "1", defaultValue: fontSize.toString(), onChange: handleFontSizeChange }), (0, jsx_runtime_1.jsxs)("div", { className: "slider-labels", children: [(0, jsx_runtime_1.jsx)("span", { children: "12px" }), (0, jsx_runtime_1.jsx)("span", { children: "32px" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "form-description", children: "Adjust the font size of AI response text in the assistant view" })] })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "settings-section", children: [(0, jsx_runtime_1.jsx)("div", { className: "section-title", children: (0, jsx_runtime_1.jsx)("span", { children: "Screen Capture Settings" }) }), (0, jsx_runtime_1.jsx)("div", { className: "form-grid", children: (0, jsx_runtime_1.jsxs)("div", { className: "form-row", children: [(0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsxs)(label_1.Label, { className: "form-label", children: ["Capture Interval", (0, jsx_runtime_1.jsx)("span", { className: "current-selection", children: selectedScreenshotInterval === 'manual' ? 'Manual' : `${selectedScreenshotInterval}s` })] }), (0, jsx_runtime_1.jsxs)(select_1.Select, { value: selectedScreenshotInterval, onValueChange: handleScreenshotIntervalSelect, children: [(0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { className: "form-control", children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: "Select interval" }) }), (0, jsx_runtime_1.jsxs)(select_1.SelectContent, { children: [(0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "manual", children: "Manual (On demand)" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "1", children: "Every 1 second" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "2", children: "Every 2 seconds" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "5", children: "Every 5 seconds" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "10", children: "Every 10 seconds" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "form-description", children: selectedScreenshotInterval === 'manual'
                                                ? 'Screenshots will only be taken when you use the "Ask Next Step" shortcut'
                                                : 'Automatic screenshots will be taken at the specified interval' })] }), (0, jsx_runtime_1.jsxs)("div", { className: "form-group", children: [(0, jsx_runtime_1.jsxs)(label_1.Label, { className: "form-label", children: ["Image Quality", (0, jsx_runtime_1.jsx)("span", { className: "current-selection", children: selectedImageQuality.charAt(0).toUpperCase() + selectedImageQuality.slice(1) })] }), (0, jsx_runtime_1.jsxs)(select_1.Select, { value: selectedImageQuality, onValueChange: handleImageQualitySelect, children: [(0, jsx_runtime_1.jsx)(select_1.SelectTrigger, { className: "form-control", children: (0, jsx_runtime_1.jsx)(select_1.SelectValue, { placeholder: "Select quality" }) }), (0, jsx_runtime_1.jsxs)(select_1.SelectContent, { children: [(0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "low", children: "Low" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "medium", children: "Medium" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "high", children: "High" }), (0, jsx_runtime_1.jsx)(select_1.SelectItem, { value: "ultra", children: "Ultra" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "form-description", children: "Higher quality images provide better AI analysis but use more bandwidth" })] })] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "settings-section danger-section", children: [(0, jsx_runtime_1.jsx)("div", { className: "section-title danger-title", children: (0, jsx_runtime_1.jsx)("span", { children: "\u26A0\uFE0F Advanced Mode" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "form-grid", children: [(0, jsx_runtime_1.jsxs)("div", { className: "checkbox-group", children: [(0, jsx_runtime_1.jsx)(switch_1.Switch, { id: "advanced-mode", checked: advancedMode, onCheckedChange: handleAdvancedModeChange }), (0, jsx_runtime_1.jsx)(label_1.Label, { htmlFor: "advanced-mode", className: "checkbox-label", children: "Enable Advanced Mode" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "form-description checkbox-description", children: ["Unlock experimental features, developer tools, and advanced configuration options", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("strong", { children: "Note:" }), " Advanced mode adds a new icon to the main navigation bar"] })] })] })] }));
};
exports.CustomizeView = CustomizeView;
