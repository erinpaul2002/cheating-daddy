import React, { useState, useEffect } from 'react';
import { HelpViewProps } from '../../types';
import { resizeLayout } from '../../utils/windowResize';
import './HelpView.css';

export const HelpView: React.FC<HelpViewProps> = ({ onExternalLinkClick, keybinds }) => {
    const [currentKeybinds, setCurrentKeybinds] = useState<Record<string, string>>({});

    useEffect(() => {
        // Resize window for this view
        resizeLayout();

        // Load keybinds from props or localStorage
        loadKeybinds();
    }, [keybinds]);

    const getDefaultKeybinds = (): Record<string, string> => {
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
    };

    const loadKeybinds = () => {
        const savedKeybinds = localStorage.getItem('customKeybinds');
        if (savedKeybinds) {
            try {
                const parsedKeybinds = JSON.parse(savedKeybinds);
                setCurrentKeybinds({ ...getDefaultKeybinds(), ...parsedKeybinds });
            } catch (e) {
                console.error('Failed to parse saved keybinds:', e);
                setCurrentKeybinds(getDefaultKeybinds());
            }
        } else {
            setCurrentKeybinds(keybinds && Object.keys(keybinds).length > 0 ? keybinds : getDefaultKeybinds());
        }
    };

    const formatKeybind = (keybind: string): React.JSX.Element[] => {
        if (!keybind)
            return [
                <span key="empty" className="key">
                    Not set
                </span>,
            ];
        return keybind.split('+').map((key, index) => (
            <span key={index} className="key">
                {key}
            </span>
        ));
    };

    const handleExternalLinkClick = (url: string) => {
        onExternalLinkClick(url);
    };

    const isMacOS = window.cheddar?.isMacOS || false;

    return (
        <div className="help-container">
            <div className="option-group">
                <div className="option-label">
                    <span>Community & Support</span>
                </div>
                <div className="community-links">
                    <div className="community-link" onClick={() => handleExternalLinkClick('https://cheatingdaddy.com')}>
                        🌐 Official Website
                    </div>
                    <div className="community-link" onClick={() => handleExternalLinkClick('https://github.com/sohzm/cheating-daddy')}>
                        📂 GitHub Repository
                    </div>
                    <div className="community-link" onClick={() => handleExternalLinkClick('https://discord.gg/GCBdubnXfJ')}>
                        💬 Discord Community
                    </div>
                </div>
            </div>

            <div className="option-group">
                <div className="option-label">
                    <span>Keyboard Shortcuts</span>
                </div>
                <div className="keyboard-section">
                    <div className="keyboard-group">
                        <div className="keyboard-group-title">Window Movement</div>
                        <div className="shortcut-item">
                            <span className="shortcut-description">Move window up</span>
                            <div className="shortcut-keys">{formatKeybind(currentKeybinds.moveUp)}</div>
                        </div>
                        <div className="shortcut-item">
                            <span className="shortcut-description">Move window down</span>
                            <div className="shortcut-keys">{formatKeybind(currentKeybinds.moveDown)}</div>
                        </div>
                        <div className="shortcut-item">
                            <span className="shortcut-description">Move window left</span>
                            <div className="shortcut-keys">{formatKeybind(currentKeybinds.moveLeft)}</div>
                        </div>
                        <div className="shortcut-item">
                            <span className="shortcut-description">Move window right</span>
                            <div className="shortcut-keys">{formatKeybind(currentKeybinds.moveRight)}</div>
                        </div>
                    </div>

                    <div className="keyboard-group">
                        <div className="keyboard-group-title">Window Control</div>
                        <div className="shortcut-item">
                            <span className="shortcut-description">Toggle click-through mode</span>
                            <div className="shortcut-keys">{formatKeybind(currentKeybinds.toggleClickThrough)}</div>
                        </div>
                        <div className="shortcut-item">
                            <span className="shortcut-description">Toggle window visibility</span>
                            <div className="shortcut-keys">{formatKeybind(currentKeybinds.toggleVisibility)}</div>
                        </div>
                    </div>

                    <div className="keyboard-group">
                        <div className="keyboard-group-title">AI Actions</div>
                        <div className="shortcut-item">
                            <span className="shortcut-description">Take screenshot and ask for next step</span>
                            <div className="shortcut-keys">{formatKeybind(currentKeybinds.nextStep)}</div>
                        </div>
                    </div>

                    <div className="keyboard-group">
                        <div className="keyboard-group-title">Response Navigation</div>
                        <div className="shortcut-item">
                            <span className="shortcut-description">Previous response</span>
                            <div className="shortcut-keys">{formatKeybind(currentKeybinds.previousResponse)}</div>
                        </div>
                        <div className="shortcut-item">
                            <span className="shortcut-description">Next response</span>
                            <div className="shortcut-keys">{formatKeybind(currentKeybinds.nextResponse)}</div>
                        </div>
                        <div className="shortcut-item">
                            <span className="shortcut-description">Scroll response up</span>
                            <div className="shortcut-keys">{formatKeybind(currentKeybinds.scrollUp)}</div>
                        </div>
                        <div className="shortcut-item">
                            <span className="shortcut-description">Scroll response down</span>
                            <div className="shortcut-keys">{formatKeybind(currentKeybinds.scrollDown)}</div>
                        </div>
                    </div>

                    <div className="keyboard-group">
                        <div className="keyboard-group-title">Text Input</div>
                        <div className="shortcut-item">
                            <span className="shortcut-description">Send message to AI</span>
                            <div className="shortcut-keys">
                                <span className="key">Enter</span>
                            </div>
                        </div>
                        <div className="shortcut-item">
                            <span className="shortcut-description">New line in text input</span>
                            <div className="shortcut-keys">
                                <span className="key">Shift</span>
                                <span className="key">Enter</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description" style={{ marginTop: '12px', fontStyle: 'italic', textAlign: 'center' }}>
                    💡 You can customize these shortcuts in the Settings page!
                </div>
            </div>

            <div className="option-group">
                <div className="option-label">
                    <span>How to Use</span>
                </div>
                <div className="usage-steps">
                    <div className="usage-step">
                        <strong>Start a Session:</strong> Enter your Gemini API key and click "Start Session"
                    </div>
                    <div className="usage-step">
                        <strong>Customize:</strong> Choose your profile and language in the settings
                    </div>
                    <div className="usage-step">
                        <strong>Position Window:</strong> Use keyboard shortcuts to move the window to your desired location
                    </div>
                    <div className="usage-step">
                        <strong>Click-through Mode:</strong> Use {formatKeybind(currentKeybinds.toggleClickThrough)} to make the window click-through
                    </div>
                    <div className="usage-step">
                        <strong>Get AI Help:</strong> The AI will analyze your screen and audio to provide assistance
                    </div>
                    <div className="usage-step">
                        <strong>Text Messages:</strong> Type questions or requests to the AI using the text input
                    </div>
                    <div className="usage-step">
                        <strong>Navigate Responses:</strong> Use {formatKeybind(currentKeybinds.previousResponse)} and
                        {formatKeybind(currentKeybinds.nextResponse)} to browse through AI responses
                    </div>
                </div>
            </div>

            <div className="option-group">
                <div className="option-label">
                    <span>Supported Profiles</span>
                </div>
                <div className="profiles-grid">
                    <div className="profile-item">
                        <div className="profile-name">Job Interview</div>
                        <div className="profile-description">Get help with interview questions and responses</div>
                    </div>
                    <div className="profile-item">
                        <div className="profile-name">Sales Call</div>
                        <div className="profile-description">Assistance with sales conversations and objection handling</div>
                    </div>
                    <div className="profile-item">
                        <div className="profile-name">Business Meeting</div>
                        <div className="profile-description">Support for professional meetings and discussions</div>
                    </div>
                    <div className="profile-item">
                        <div className="profile-name">Presentation</div>
                        <div className="profile-description">Help with presentations and public speaking</div>
                    </div>
                    <div className="profile-item">
                        <div className="profile-name">Negotiation</div>
                        <div className="profile-description">Guidance for business negotiations and deals</div>
                    </div>
                    <div className="profile-item">
                        <div className="profile-name">Exam Assistant</div>
                        <div className="profile-description">Academic assistance for test-taking and exam questions</div>
                    </div>
                </div>
            </div>

            <div className="option-group">
                <div className="option-label">
                    <span>Audio Input</span>
                </div>
                <div className="description">The AI listens to conversations and provides contextual assistance based on what it hears.</div>
            </div>
        </div>
    );
};
