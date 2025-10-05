"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const button_1 = require("@/components/ui/button");
require("./HistoryView.css");
const HistoryView = () => {
    const [activeTab, setActiveTab] = (0, react_1.useState)('sessions');
    const [sessions, setSessions] = (0, react_1.useState)([]);
    const [savedResponses, setSavedResponses] = (0, react_1.useState)([]);
    const [selectedSession, setSelectedSession] = (0, react_1.useState)(null);
    const [loading, setLoading] = (0, react_1.useState)(false);
    // Load conversations from cheddar API
    const loadConversations = (0, react_1.useCallback)(async () => {
        setLoading(true);
        try {
            const result = await window.cheddar.getAllConversationSessions();
            setSessions(result || []);
        }
        catch (error) {
            console.error('Failed to load conversations:', error);
            setSessions([]);
        }
        finally {
            setLoading(false);
        }
    }, []);
    // Load saved responses from localStorage
    const loadSavedResponses = (0, react_1.useCallback)(() => {
        try {
            const saved = localStorage.getItem('savedResponses');
            const parsed = saved ? JSON.parse(saved) : [];
            setSavedResponses(parsed);
        }
        catch (error) {
            console.error('Failed to load saved responses:', error);
            setSavedResponses([]);
        }
    }, []);
    // Handle session selection
    const handleSessionClick = (0, react_1.useCallback)((session) => {
        setSelectedSession(session);
    }, []);
    // Handle back to list
    const handleBackClick = (0, react_1.useCallback)(() => {
        setSelectedSession(null);
    }, []);
    // Handle delete saved response
    const deleteSavedResponse = (0, react_1.useCallback)((index) => {
        const updated = savedResponses.filter((_, i) => i !== index);
        setSavedResponses(updated);
        localStorage.setItem('savedResponses', JSON.stringify(updated));
    }, [savedResponses]);
    // Format date
    const formatDate = (0, react_1.useCallback)((timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    }, []);
    // Format time
    const formatTime = (0, react_1.useCallback)((timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        });
    }, []);
    // Format timestamp for saved responses
    const formatTimestamp = (0, react_1.useCallback)((timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        });
    }, []);
    // Get session preview
    const getSessionPreview = (0, react_1.useCallback)((session) => {
        if (session.transcription) {
            return session.transcription.length > 100 ? session.transcription.substring(0, 100) + '...' : session.transcription;
        }
        return 'No preview available';
    }, []);
    // Get profile display names
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
    // Load data on mount and tab change
    (0, react_1.useEffect)(() => {
        if (activeTab === 'sessions') {
            loadConversations();
        }
        else {
            loadSavedResponses();
        }
    }, [activeTab, loadConversations, loadSavedResponses]);
    const renderSessionsList = () => {
        if (loading) {
            return (0, jsx_runtime_1.jsx)("div", { className: "loading", children: "Loading conversation history..." });
        }
        if (sessions.length === 0) {
            return ((0, jsx_runtime_1.jsxs)("div", { className: "emptyState", children: [(0, jsx_runtime_1.jsx)("div", { className: "emptyStateTitle", children: "No conversations yet" }), (0, jsx_runtime_1.jsx)("div", { children: "Start a session to see your conversation history here" })] }));
        }
        return ((0, jsx_runtime_1.jsx)("div", { className: "sessionsList", children: sessions.map(session => ((0, jsx_runtime_1.jsxs)("div", { className: "sessionItem", onClick: () => handleSessionClick(session), children: [(0, jsx_runtime_1.jsxs)("div", { className: "sessionHeader", children: [(0, jsx_runtime_1.jsx)("span", { className: "sessionDate", children: formatDate(session.timestamp) }), (0, jsx_runtime_1.jsx)("span", { className: "sessionTime", children: formatTime(session.timestamp) })] }), (0, jsx_runtime_1.jsx)("div", { className: "sessionPreview", children: getSessionPreview(session) })] }, session.id))) }));
    };
    const renderConversationView = () => {
        if (!selectedSession)
            return null;
        const { conversationHistory } = selectedSession;
        // Flatten the conversation turns into individual messages
        const messages = [];
        if (conversationHistory) {
            conversationHistory.forEach((turn) => {
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
        return ((0, jsx_runtime_1.jsxs)("div", { className: "historyContainer", children: [(0, jsx_runtime_1.jsxs)("div", { className: "backHeader", children: [(0, jsx_runtime_1.jsxs)(button_1.Button, { className: "backButton", variant: "ghost", onClick: handleBackClick, children: [(0, jsx_runtime_1.jsx)("svg", { width: "16px", height: "16px", strokeWidth: "1.7", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { d: "M15 6L9 12L15 18", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) }), "Back to Sessions"] }), (0, jsx_runtime_1.jsxs)("div", { className: "legend", children: ["\\n", ' ', (0, jsx_runtime_1.jsxs)("div", { className: "legendItem", children: ["\\n ", (0, jsx_runtime_1.jsx)("div", { className: "legendDot user" }), (0, jsx_runtime_1.jsx)("span", { children: "Them" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "legendItem", children: [(0, jsx_runtime_1.jsx)("div", { className: "legendDot ai" }), (0, jsx_runtime_1.jsx)("span", { children: "Suggestion" })] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "conversationView", children: messages.length > 0 ? (messages.map((message, index) => ((0, jsx_runtime_1.jsx)("div", { className: `message ${message.type}`, children: message.content }, index)))) : ((0, jsx_runtime_1.jsx)("div", { className: "emptyState", children: "No conversation data available" })) })] }));
    };
    const renderSavedResponses = () => {
        if (savedResponses.length === 0) {
            return ((0, jsx_runtime_1.jsxs)("div", { className: "emptyState", children: [(0, jsx_runtime_1.jsx)("div", { className: "emptyStateTitle", children: "No saved responses" }), (0, jsx_runtime_1.jsx)("div", { children: "Use the save button during conversations to save important responses" })] }));
        }
        const profileNames = getProfileNames();
        return ((0, jsx_runtime_1.jsx)("div", { className: "sessionsList", children: savedResponses.map((saved, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "savedResponseItem", children: [(0, jsx_runtime_1.jsxs)("div", { className: "savedResponseHeader", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("span", { className: "savedResponseProfile", children: profileNames[saved.profile] || saved.profile }), (0, jsx_runtime_1.jsx)("span", { className: "savedResponseDate", children: formatTimestamp(saved.timestamp) })] }), (0, jsx_runtime_1.jsx)("button", { className: "deleteButton", onClick: () => deleteSavedResponse(index), title: "Delete saved response", children: (0, jsx_runtime_1.jsx)("svg", { width: "16px", height: "16px", strokeWidth: "1.7", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: (0, jsx_runtime_1.jsx)("path", { d: "M6 6L18 18M6 18L18 6", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) }) })] }), (0, jsx_runtime_1.jsx)("div", { className: "savedResponseContent", children: saved.response })] }, index))) }));
    };
    if (selectedSession) {
        return renderConversationView();
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "host", children: (0, jsx_runtime_1.jsxs)("div", { className: "historyContainer", children: [(0, jsx_runtime_1.jsxs)("div", { className: "tabsContainer", children: [(0, jsx_runtime_1.jsx)("button", { className: `tab ${activeTab === 'sessions' ? 'active' : ''}`, onClick: () => setActiveTab('sessions'), children: "Conversation History" }), (0, jsx_runtime_1.jsxs)("button", { className: `tab ${activeTab === 'saved' ? 'active' : ''}`, onClick: () => setActiveTab('saved'), children: ["Saved Responses (", savedResponses.length, ")"] })] }), activeTab === 'sessions' ? renderSessionsList() : renderSavedResponses()] }) }));
};
exports.default = HistoryView;
