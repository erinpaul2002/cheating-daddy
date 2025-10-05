import React, { useState, useEffect, useCallback } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ConversationSession, ConversationTurn } from '../../types';
import { Button } from '@/components/ui/button';
import './HistoryView.css';

interface HistoryViewProps {}

interface SavedResponse {
    profile: string;
    timestamp: number;
    response: string;
}

interface Message {
    type: 'user' | 'ai';
    content: string;
    timestamp: number;
}

const HistoryView: React.FC<HistoryViewProps> = () => {
    const [activeTab, setActiveTab] = useState<'sessions' | 'saved'>('sessions');
    const [sessions, setSessions] = useState<ConversationSession[]>([]);
    const [savedResponses, setSavedResponses] = useState<SavedResponse[]>([]);
    const [selectedSession, setSelectedSession] = useState<ConversationSession | null>(null);
    const [loading, setLoading] = useState(false);

    // Load conversations from cheddar API
    const loadConversations = useCallback(async () => {
        setLoading(true);
        try {
            const result = await window.cheddar.getAllConversationSessions();
            setSessions(result || []);
        } catch (error) {
            console.error('Failed to load conversations:', error);
            setSessions([]);
        } finally {
            setLoading(false);
        }
    }, []);

    // Load saved responses from localStorage
    const loadSavedResponses = useCallback(() => {
        try {
            const saved = localStorage.getItem('savedResponses');
            const parsed = saved ? JSON.parse(saved) : [];
            setSavedResponses(parsed);
        } catch (error) {
            console.error('Failed to load saved responses:', error);
            setSavedResponses([]);
        }
    }, []);

    // Handle session selection
    const handleSessionClick = useCallback((session: ConversationSession) => {
        setSelectedSession(session);
    }, []);

    // Handle back to list
    const handleBackClick = useCallback(() => {
        setSelectedSession(null);
    }, []);

    // Handle delete saved response
    const deleteSavedResponse = useCallback(
        (index: number) => {
            const updated = savedResponses.filter((_, i) => i !== index);
            setSavedResponses(updated);
            localStorage.setItem('savedResponses', JSON.stringify(updated));
        },
        [savedResponses]
    );

    // Format date
    const formatDate = useCallback((timestamp: number) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    }, []);

    // Format time
    const formatTime = useCallback((timestamp: number) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        });
    }, []);

    // Format timestamp for saved responses
    const formatTimestamp = useCallback((timestamp: number) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        });
    }, []);

    // Get session preview
    const getSessionPreview = useCallback((session: ConversationSession) => {
        if (session.transcription) {
            return session.transcription.length > 100 ? session.transcription.substring(0, 100) + '...' : session.transcription;
        }
        return 'No preview available';
    }, []);

    // Get profile display names
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

    // Load data on mount and tab change
    useEffect(() => {
        if (activeTab === 'sessions') {
            loadConversations();
        } else {
            loadSavedResponses();
        }
    }, [activeTab, loadConversations, loadSavedResponses]);

    const renderSessionsList = () => {
        if (loading) {
            return <div className="loading">Loading conversation history...</div>;
        }

        if (sessions.length === 0) {
            return (
                <div className="emptyState">
                    <div className="emptyStateTitle">No conversations yet</div>
                    <div>Start a session to see your conversation history here</div>
                </div>
            );
        }

        return (
            <div className="sessionsList">
                {sessions.map(session => (
                    <div key={session.id} className="sessionItem" onClick={() => handleSessionClick(session)}>
                        <div className="sessionHeader">
                            <span className="sessionDate">{formatDate(session.timestamp)}</span>
                            <span className="sessionTime">{formatTime(session.timestamp)}</span>
                        </div>
                        <div className="sessionPreview">{getSessionPreview(session)}</div>
                    </div>
                ))}
            </div>
        );
    };

    const renderConversationView = () => {
        if (!selectedSession) return null;

        const { conversationHistory } = selectedSession;

        // Flatten the conversation turns into individual messages
        const messages: Message[] = [];
        if (conversationHistory) {
            conversationHistory.forEach((turn: ConversationTurn) => {
                if (turn.transcription) {
                    messages.push({
                        type: 'user',
                        content: turn.transcription,
                        timestamp: turn.timestamp,
                    });
                }
                if (turn.ai_response) {
                    messages.push({
                        type: 'ai',
                        content: turn.ai_response,
                        timestamp: turn.timestamp,
                    });
                }
            });
        }

        return (
            <div className="historyContainer">
                <div className="backHeader">
                    <Button className="backButton" variant="ghost" onClick={handleBackClick}>
                        <svg
                            width="16px"
                            height="16px"
                            strokeWidth="1.7"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="currentColor"
                        >
                            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        Back to Sessions
                    </Button>
                    <div className="legend">
                        \n{' '}
                        <div className="legendItem">
                            \n <div className="legendDot user"></div>
                            <span>Them</span>
                        </div>
                        <div className="legendItem">
                            <div className="legendDot ai"></div>
                            <span>Suggestion</span>
                        </div>
                    </div>
                </div>
                <div className="conversationView">
                    {messages.length > 0 ? (
                        messages.map((message, index) => (
                            <div key={index} className={`message ${message.type}`}>
                                {message.content}
                            </div>
                        ))
                    ) : (
                        <div className="emptyState">No conversation data available</div>
                    )}
                </div>
            </div>
        );
    };

    const renderSavedResponses = () => {
        if (savedResponses.length === 0) {
            return (
                <div className="emptyState">
                    <div className="emptyStateTitle">No saved responses</div>
                    <div>Use the save button during conversations to save important responses</div>
                </div>
            );
        }

        const profileNames = getProfileNames();

        return (
            <div className="sessionsList">
                {savedResponses.map((saved, index) => (
                    <div key={index} className="savedResponseItem">
                        <div className="savedResponseHeader">
                            <div>
                                <span className="savedResponseProfile">
                                    {profileNames[saved.profile as keyof typeof profileNames] || saved.profile}
                                </span>
                                <span className="savedResponseDate">{formatTimestamp(saved.timestamp)}</span>
                            </div>
                            <button className="deleteButton" onClick={() => deleteSavedResponse(index)} title="Delete saved response">
                                <svg width="16px" height="16px" strokeWidth="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 6L18 18M6 18L18 6"
                                        stroke="currentColor"
                                        strokeWidth="1.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="savedResponseContent">{saved.response}</div>
                    </div>
                ))}
            </div>
        );
    };

    if (selectedSession) {
        return renderConversationView();
    }

    return (
        <div className="host">
            <div className="historyContainer">
                <div className="tabsContainer">
                    <button className={`tab ${activeTab === 'sessions' ? 'active' : ''}`} onClick={() => setActiveTab('sessions')}>
                        Conversation History
                    </button>
                    <button className={`tab ${activeTab === 'saved' ? 'active' : ''}`} onClick={() => setActiveTab('saved')}>
                        Saved Responses ({savedResponses.length})
                    </button>
                </div>
                {activeTab === 'sessions' ? renderSessionsList() : renderSavedResponses()}
            </div>
        </div>
    );
};

export default HistoryView;
