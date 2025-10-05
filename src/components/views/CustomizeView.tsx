import React, { useState, useEffect, useCallback } from 'react';
import { CustomizeViewProps, ProfileOption, LanguageOption, KeybindActionInfo, ProfileType, LanguageType, KeybindAction } from '../../types';
import { resizeLayout } from '../../utils/windowResize';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import './CustomizeView.css';

export const CustomizeView: React.FC<CustomizeViewProps> = ({
    selectedProfile,
    selectedLanguage,
    selectedScreenshotInterval,
    selectedImageQuality,
    layoutMode,
    keybinds,
    googleSearchEnabled,
    backgroundTransparency,
    fontSize,
    onProfileChange,
    onLanguageChange,
    onScreenshotIntervalChange,
    onImageQualityChange,
    onLayoutModeChange,
    advancedMode,
    onAdvancedModeChange,
}) => {
    // Local state for internal component management
    const [currentKeybinds, setCurrentKeybinds] = useState<Record<string, string>>(keybinds);
    const [localLayoutMode, setLocalLayoutMode] = useState<string>(layoutMode);

    // Load settings on mount
    useEffect(() => {
        loadKeybinds();
        loadLayoutMode();
        loadGoogleSearchSettings();
        loadAdvancedModeSettings();
        loadBackgroundTransparency();
        loadFontSize();
        resizeLayout();
    }, []);

    // Update local keybinds when props change
    useEffect(() => {
        setCurrentKeybinds(keybinds);
    }, [keybinds]);

    // Update local layout mode when props change
    useEffect(() => {
        setLocalLayoutMode(layoutMode);
    }, [layoutMode]);

    const getProfiles = useCallback((): ProfileOption[] => {
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

    const getLanguages = useCallback((): LanguageOption[] => {
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

    const getProfileNames = useCallback(() => {
        return {
            interview: 'Job Interview',
            sales: 'Sales Call',
            meeting: 'Business Meeting',
            presentation: 'Presentation',
            negotiation: 'Negotiation',
            exam: 'Exam Assistant',
        };
    }, []);

    const getDefaultKeybinds = useCallback((): Record<string, string> => {
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

    const loadKeybinds = useCallback(() => {
        const savedKeybinds = localStorage.getItem('customKeybinds');
        if (savedKeybinds) {
            try {
                const parsed = JSON.parse(savedKeybinds);
                setCurrentKeybinds({ ...getDefaultKeybinds(), ...parsed });
            } catch (e) {
                console.error('Failed to parse saved keybinds:', e);
                setCurrentKeybinds(getDefaultKeybinds());
            }
        }
    }, [getDefaultKeybinds]);

    const saveKeybinds = useCallback((newKeybinds: Record<string, string>) => {
        localStorage.setItem('customKeybinds', JSON.stringify(newKeybinds));
        // Send to main process to update global shortcuts
        if (window.electron?.ipcRenderer) {
            try {
                window.electron.ipcRenderer.send('update-keybinds', newKeybinds);
            } catch (e) {
                console.error('Failed to send keybinds to main process:', e);
            }
        }
    }, []);

    const loadLayoutMode = useCallback(() => {
        const savedLayoutMode = localStorage.getItem('layoutMode');
        if (savedLayoutMode) {
            setLocalLayoutMode(savedLayoutMode);
        }
    }, []);

    const loadGoogleSearchSettings = useCallback(() => {
        // This will be handled by props, but we can load from localStorage if needed
    }, []);

    const loadAdvancedModeSettings = useCallback(() => {
        // This will be handled by props, but we can load from localStorage if needed
    }, []);

    const loadBackgroundTransparency = useCallback(() => {
        const saved = localStorage.getItem('backgroundTransparency');
        if (saved !== null) {
            updateBackgroundTransparency(parseFloat(saved));
        }
    }, []);

    const loadFontSize = useCallback(() => {
        const saved = localStorage.getItem('fontSize');
        if (saved !== null) {
            updateFontSize(parseInt(saved, 10));
        }
    }, []);

    const updateBackgroundTransparency = useCallback((value: number) => {
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

    const updateFontSize = useCallback((value: number) => {
        const root = document.documentElement;
        root.style.setProperty('--response-font-size', `${value}px`);
    }, []);

    // Event handlers - Updated for shadcn components
    const handleProfileSelect = useCallback(
        (value: string) => {
            const profileValue = value as ProfileType;
            localStorage.setItem('selectedProfile', profileValue);
            onProfileChange(profileValue);
        },
        [onProfileChange]
    );

    const handleLanguageSelect = useCallback(
        (value: string) => {
            const languageValue = value as LanguageType;
            localStorage.setItem('selectedLanguage', languageValue);
            onLanguageChange(languageValue);
        },
        [onLanguageChange]
    );

    const handleScreenshotIntervalSelect = useCallback(
        (value: string) => {
            localStorage.setItem('selectedScreenshotInterval', value);
            onScreenshotIntervalChange(value);
        },
        [onScreenshotIntervalChange]
    );

    const handleImageQualitySelect = useCallback(
        (value: string) => {
            onImageQualityChange(value);
        },
        [onImageQualityChange]
    );

    const handleLayoutModeSelect = useCallback(
        (value: string) => {
            localStorage.setItem('layoutMode', value);
            setLocalLayoutMode(value);
            onLayoutModeChange(value);
        },
        [onLayoutModeChange]
    );

    const handleCustomPromptInput = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
        localStorage.setItem('customPrompt', e.target.value);
    }, []);

    const handleKeybindChange = useCallback(
        (action: KeybindAction, value: string) => {
            const newKeybinds = { ...currentKeybinds, [action]: value };
            setCurrentKeybinds(newKeybinds);
            saveKeybinds(newKeybinds);
        },
        [currentKeybinds, saveKeybinds]
    );

    const resetKeybinds = useCallback(() => {
        const defaultKeybinds = getDefaultKeybinds();
        setCurrentKeybinds(defaultKeybinds);
        localStorage.removeItem('customKeybinds');
        saveKeybinds(defaultKeybinds);
    }, [getDefaultKeybinds, saveKeybinds]);

    const handleGoogleSearchChange = useCallback(async (checked: boolean) => {
        localStorage.setItem('googleSearchEnabled', checked.toString());

        // Notify main process if available
        if (window.electron?.ipcRenderer) {
            try {
                window.electron.ipcRenderer.send('update-google-search', checked);
            } catch (error) {
                console.error('Failed to send google search setting to main process:', error);
            }
        }
    }, []);

    const handleAdvancedModeChange = useCallback(
        (checked: boolean) => {
            localStorage.setItem('advancedMode', checked.toString());
            onAdvancedModeChange(checked);
        },
        [onAdvancedModeChange]
    );

    const handleBackgroundTransparencyChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseFloat(e.target.value);
            localStorage.setItem('backgroundTransparency', value.toString());
            updateBackgroundTransparency(value);
        },
        [updateBackgroundTransparency]
    );

    const handleFontSizeChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = parseInt(e.target.value, 10);
            localStorage.setItem('fontSize', value.toString());
            updateFontSize(value);
        },
        [updateFontSize]
    );

    // Complex keybind input handling
    const handleKeybindFocus = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
        e.target.placeholder = 'Press key combination...';
        e.target.select();
    }, []);

    const handleKeybindInput = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            e.preventDefault();

            const modifiers: string[] = [];
            const keys: string[] = [];

            // Check modifiers
            if (e.ctrlKey) modifiers.push('Ctrl');
            if (e.metaKey) modifiers.push('Cmd');
            if (e.altKey) modifiers.push('Alt');
            if (e.shiftKey) modifiers.push('Shift');

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
            const action = e.currentTarget.dataset.action as KeybindAction;

            // Update the keybind
            handleKeybindChange(action, keybind);

            // Update the input value
            e.currentTarget.value = keybind;
            e.currentTarget.blur();
        },
        [handleKeybindChange]
    );

    const getKeybindActions = useCallback((): KeybindActionInfo[] => {
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

    return (
        <div className="settings-container">
            {/* AI Profile & Behavior Section */}
            <div className="settings-section">
                <div className="section-title">
                    <span>AI Profile & Behavior</span>
                </div>

                <div className="form-grid">
                    <div className="form-row">
                        <div className="form-group">
                            <Label className="form-label">
                                Profile Type
                                <span className="current-selection">{currentProfile?.name || 'Unknown'}</span>
                            </Label>
                            <Select value={selectedProfile} onValueChange={handleProfileSelect}>
                                <SelectTrigger className="form-control">
                                    <SelectValue placeholder="Select profile" />
                                </SelectTrigger>
                                <SelectContent>
                                    {profiles.map(profile => (
                                        <SelectItem key={profile.value} value={profile.value}>
                                            {profile.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="form-group full-width">
                        <Label className="form-label">Custom AI Instructions</Label>
                        <Textarea
                            className="form-control"
                            placeholder={`Add specific instructions for how you want the AI to behave during ${
                                profileNames[selectedProfile as keyof typeof profileNames] || 'this interaction'
                            }...`}
                            defaultValue={localStorage.getItem('customPrompt') || ''}
                            rows={4}
                            onChange={handleCustomPromptInput}
                        />
                        <div className="form-description">
                            Personalize the AI's behavior with specific instructions that will be added to the{' '}
                            {profileNames[selectedProfile as keyof typeof profileNames] || 'selected profile'} base prompts
                        </div>
                    </div>
                </div>
            </div>

            {/* Audio & Microphone Section */}
            <div className="settings-section">
                <div className="section-title">
                    <span>Audio & Microphone</span>
                </div>
                <div className="form-grid">
                    <div className="form-group">
                        <Label className="form-label">Audio Mode</Label>
                        <Select
                            defaultValue={localStorage.getItem('audioMode') || 'speaker_only'}
                            onValueChange={value => localStorage.setItem('audioMode', value)}
                        >
                            <SelectTrigger className="form-control">
                                <SelectValue placeholder="Select audio mode" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="speaker_only">Speaker Only (Interviewer)</SelectItem>
                                <SelectItem value="mic_only">Microphone Only (Me)</SelectItem>
                                <SelectItem value="both">Both Speaker & Microphone</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="form-description">Choose which audio sources to capture for the AI.</div>
                    </div>
                </div>
            </div>

            {/* Stealth Profile Section */}
            <div className="settings-section">
                <div className="section-title">
                    <span>Stealth Profile</span>
                </div>
                <div className="form-grid">
                    <div className="form-group">
                        <Label className="form-label">Profile</Label>
                        <Select
                            defaultValue={localStorage.getItem('stealthProfile') || 'balanced'}
                            onValueChange={value => {
                                localStorage.setItem('stealthProfile', value);
                                alert('Restart the application for stealth changes to take full effect.');
                            }}
                        >
                            <SelectTrigger className="form-control">
                                <SelectValue placeholder="Select stealth profile" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="visible">Visible</SelectItem>
                                <SelectItem value="balanced">Balanced</SelectItem>
                                <SelectItem value="ultra">Ultra-Stealth</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="form-description">
                            Adjusts visibility and detection resistance. A restart is required for changes to apply.
                        </div>
                    </div>
                </div>
            </div>

            {/* Language & Layout Section */}
            <div className="settings-section">
                <div className="section-title">
                    <span>Language & Layout</span>
                </div>
                <div className="form-grid">
                    <div className="form-row">
                        <div className="form-group">
                            <Label className="form-label">
                                Language
                                <span className="current-selection">{currentLanguage?.name || 'Unknown'}</span>
                            </Label>
                            <Select value={selectedLanguage} onValueChange={handleLanguageSelect}>
                                <SelectTrigger className="form-control">
                                    <SelectValue placeholder="Select language" />
                                </SelectTrigger>
                                <SelectContent>
                                    {languages.map(language => (
                                        <SelectItem key={language.value} value={language.value}>
                                            {language.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="form-group">
                            <Label className="form-label">
                                Layout Mode
                                <span className="current-selection">{localLayoutMode.charAt(0).toUpperCase() + localLayoutMode.slice(1)}</span>
                            </Label>
                            <Select value={localLayoutMode} onValueChange={handleLayoutModeSelect}>
                                <SelectTrigger className="form-control">
                                    <SelectValue placeholder="Select layout" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="compact">Compact</SelectItem>
                                    <SelectItem value="normal">Normal</SelectItem>
                                    <SelectItem value="spacious">Spacious</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Keyboard Shortcuts Section */}
            <div className="settings-section">
                <div className="section-title">
                    <span>Keyboard Shortcuts</span>
                </div>
                <div className="keybinds-table-container">
                    <table className="keybinds-table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Shortcut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {keybindActions.map((action: KeybindActionInfo) => (
                                <tr key={action.key}>
                                    <td>
                                        <div className="action-name">{action.name}</div>
                                        <div className="action-description">{action.description}</div>
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            className="keybind-input form-control"
                                            value={currentKeybinds[action.key] || ''}
                                            data-action={action.key}
                                            onFocus={handleKeybindFocus}
                                            onKeyDown={handleKeybindInput}
                                            readOnly
                                        />
                                    </td>
                                </tr>
                            ))}
                            <tr className="table-reset-row">
                                <td colSpan={2}>
                                    <Button className="reset-keybinds-button" onClick={resetKeybinds} variant="outline">
                                        Reset to Defaults
                                    </Button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="settings-note">💡 Changes to keyboard shortcuts take effect immediately</div>
            </div>

            {/* Appearance Section */}
            <div className="settings-section">
                <div className="section-title">
                    <span>Appearance</span>
                </div>
                <div className="form-grid">
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">
                                Background Transparency
                                <span className="current-selection">{Math.round(backgroundTransparency * 100)}%</span>
                            </label>
                            <div className="slider-container">
                                <div className="slider-header">
                                    <span className="slider-value">{backgroundTransparency.toFixed(2)}</span>
                                </div>
                                <input
                                    type="range"
                                    className="slider-input"
                                    min="0.1"
                                    max="1.0"
                                    step="0.05"
                                    defaultValue={backgroundTransparency.toString()}
                                    onChange={handleBackgroundTransparencyChange}
                                />
                                <div className="slider-labels">
                                    <span>10%</span>
                                    <span>100%</span>
                                </div>
                            </div>
                            <div className="form-description">Adjust the transparency of the application background</div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">
                                Font Size
                                <span className="current-selection">{fontSize}px</span>
                            </label>
                            <div className="slider-container">
                                <div className="slider-header">
                                    <span className="slider-value">{fontSize}px</span>
                                </div>
                                <input
                                    type="range"
                                    className="slider-input"
                                    min="12"
                                    max="32"
                                    step="1"
                                    defaultValue={fontSize.toString()}
                                    onChange={handleFontSizeChange}
                                />
                                <div className="slider-labels">
                                    <span>12px</span>
                                    <span>32px</span>
                                </div>
                            </div>
                            <div className="form-description">Adjust the font size of AI response text in the assistant view</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Screen Capture Settings Section */}
            <div className="settings-section">
                <div className="section-title">
                    <span>Screen Capture Settings</span>
                </div>

                <div className="form-grid">
                    <div className="form-row">
                        <div className="form-group">
                            <Label className="form-label">
                                Capture Interval
                                <span className="current-selection">
                                    {selectedScreenshotInterval === 'manual' ? 'Manual' : `${selectedScreenshotInterval}s`}
                                </span>
                            </Label>
                            <Select value={selectedScreenshotInterval} onValueChange={handleScreenshotIntervalSelect}>
                                <SelectTrigger className="form-control">
                                    <SelectValue placeholder="Select interval" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="manual">Manual (On demand)</SelectItem>
                                    <SelectItem value="1">Every 1 second</SelectItem>
                                    <SelectItem value="2">Every 2 seconds</SelectItem>
                                    <SelectItem value="5">Every 5 seconds</SelectItem>
                                    <SelectItem value="10">Every 10 seconds</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="form-description">
                                {selectedScreenshotInterval === 'manual'
                                    ? 'Screenshots will only be taken when you use the "Ask Next Step" shortcut'
                                    : 'Automatic screenshots will be taken at the specified interval'}
                            </div>
                        </div>

                        <div className="form-group">
                            <Label className="form-label">
                                Image Quality
                                <span className="current-selection">
                                    {selectedImageQuality.charAt(0).toUpperCase() + selectedImageQuality.slice(1)}
                                </span>
                            </Label>
                            <Select value={selectedImageQuality} onValueChange={handleImageQualitySelect}>
                                <SelectTrigger className="form-control">
                                    <SelectValue placeholder="Select quality" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="low">Low</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="ultra">Ultra</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="form-description">Higher quality images provide better AI analysis but use more bandwidth</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advanced Mode Section */}
            <div className="settings-section danger-section">
                <div className="section-title danger-title">
                    <span>⚠️ Advanced Mode</span>
                </div>

                <div className="form-grid">
                    <div className="checkbox-group">
                        <Switch id="advanced-mode" checked={advancedMode} onCheckedChange={handleAdvancedModeChange} />
                        <Label htmlFor="advanced-mode" className="checkbox-label">
                            Enable Advanced Mode
                        </Label>
                    </div>
                    <div className="form-description checkbox-description">
                        Unlock experimental features, developer tools, and advanced configuration options
                        <br />
                        <strong>Note:</strong> Advanced mode adds a new icon to the main navigation bar
                    </div>
                </div>
            </div>
        </div>
    );
};
