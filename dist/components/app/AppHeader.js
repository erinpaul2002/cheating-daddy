"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const button_1 = require("@/components/ui/button");
require("./AppHeader.css");
const AppHeader = ({ currentView, onViewChange, onMinimize, onClose }) => {
    const [elapsedTime, setElapsedTime] = (0, react_1.useState)('');
    const [timerInterval, setTimerInterval] = (0, react_1.useState)(null);
    // Timer effect for assistant view
    (0, react_1.useEffect)(() => {
        if (currentView === 'assistant') {
            const interval = setInterval(() => {
                // This would need to be connected to the actual start time from parent component
                // For now, we'll show a placeholder
                setElapsedTime('0s');
            }, 1000);
            setTimerInterval(interval);
            return () => {
                if (interval) {
                    clearInterval(interval);
                }
            };
        }
        else {
            if (timerInterval) {
                clearInterval(timerInterval);
                setTimerInterval(null);
            }
            setElapsedTime('');
        }
    }, [currentView, timerInterval]);
    const getViewTitle = () => {
        const titles = {
            onboarding: 'Welcome to Cheating Daddy',
            main: 'Cheating Daddy',
            customize: 'Customize',
            help: 'Help & Shortcuts',
            history: 'Conversation History',
            advanced: 'Advanced Tools',
            assistant: 'Cheating Daddy',
        };
        return titles[currentView] || 'Cheating Daddy';
    };
    const isNavigationView = () => {
        const navigationViews = ['customize', 'help', 'history', 'advanced'];
        return navigationViews.includes(currentView);
    };
    const HistoryIcon = () => ((0, jsx_runtime_1.jsxs)("svg", { width: "24px", height: "24px", strokeWidth: "1.7", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: "currentColor", children: [(0, jsx_runtime_1.jsx)("path", { d: "M12 21V7C12 5.89543 12.8954 5 14 5H21.4C21.7314 5 22 5.26863 22 5.6V18.7143", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M12 21V7C12 5.89543 11.1046 5 10 5H2.6C2.26863 5 2 5.26863 2 5.6V18.7143", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M14 19L22 19", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M10 19L2 19", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M12 21C12 19.8954 12.8954 19 14 19", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M12 21C12 19.8954 11.1046 19 10 19", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" })] }));
    const SettingsIcon = () => ((0, jsx_runtime_1.jsxs)("svg", { width: "24px", height: "24px", strokeWidth: "1.7", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: "currentColor", children: [(0, jsx_runtime_1.jsx)("path", { d: "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M19.6224 10.3954L18.5247 7.7448L20 6L18 4L16.2647 5.48295L13.5578 4.36974L12.9353 2H10.981L10.3491 4.40113L7.70441 5.51596L6 4L4 6L5.45337 7.78885L4.3725 10.4463L2 11V13L4.40111 13.6555L5.51575 16.2997L4 18L6 20L7.79116 18.5403L10.397 19.6123L11 22H13L13.6045 19.6132L16.2551 18.5155C16.6969 18.8313 18 20 18 20L20 18L18.5159 16.2494L19.6139 13.598L21.9999 12.9772L22 11L19.6224 10.3954Z", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" })] }));
    const HelpIcon = () => ((0, jsx_runtime_1.jsxs)("svg", { width: "24px", height: "24px", strokeWidth: "1.7", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: "currentColor", children: [(0, jsx_runtime_1.jsx)("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M9 9C9 5.49997 14.5 5.5 14.5 9C14.5 11.5 12 10.9999 12 13.9999", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M12 18.01L12.01 17.9989", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" })] }));
    const AdvancedIcon = () => ((0, jsx_runtime_1.jsxs)("svg", { width: "24px", strokeWidth: "1.7", height: "24px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: "currentColor", children: [(0, jsx_runtime_1.jsx)("path", { d: "M18.5 15L5.5 15", stroke: "currentColor", strokeWidth: "1.7", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M16 4L8 4", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M9 4.5L9 10.2602C9 10.7376 8.82922 11.1992 8.51851 11.5617L3.48149 17.4383C3.17078 17.8008 3 18.2624 3 18.7398V19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19V18.7398C21 18.2624 20.8292 17.8008 20.5185 17.4383L15.4815 11.5617C15.1708 11.1992 15 10.7376 15 10.2602L15 4.5", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M12 9.01L12.01 8.99889", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }), (0, jsx_runtime_1.jsx)("path", { d: "M11 2.01L11.01 1.99889", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" })] }));
    const CloseIcon = () => ((0, jsx_runtime_1.jsx)("svg", { width: "24px", height: "24px", strokeWidth: "1.7", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { d: "M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) }));
    const BackIcon = () => ((0, jsx_runtime_1.jsx)("svg", { width: "24px", height: "24px", strokeWidth: "1.7", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", color: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { d: "M15 6L9 12L15 18", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round" }) }));
    return ((0, jsx_runtime_1.jsxs)("div", { className: "header", children: [(0, jsx_runtime_1.jsx)("div", { className: "header-title", children: getViewTitle() }), (0, jsx_runtime_1.jsxs)("div", { className: "header-actions", children: [currentView === 'assistant' && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("span", { children: elapsedTime }), (0, jsx_runtime_1.jsx)("span", { children: "Ready" }), (0, jsx_runtime_1.jsxs)(button_1.Button, { className: "button", variant: "ghost", children: ["Hide\u00A0\u00A0", (0, jsx_runtime_1.jsx)("span", { className: "key", style: { pointerEvents: 'none' }, children: window.cheddar?.isMacOS ? 'Cmd' : 'Ctrl' }), "\u00A0\u00A0", (0, jsx_runtime_1.jsx)("span", { className: "key", children: "\\" })] }), (0, jsx_runtime_1.jsx)(button_1.Button, { className: "icon-button window-close", variant: "ghost", onClick: onClose, children: (0, jsx_runtime_1.jsx)(CloseIcon, {}) })] })), currentView === 'main' && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(button_1.Button, { className: "icon-button", variant: "ghost", title: "Conversation History", onClick: () => onViewChange('history'), children: (0, jsx_runtime_1.jsx)(HistoryIcon, {}) }), (0, jsx_runtime_1.jsx)(button_1.Button, { className: "icon-button", variant: "ghost", title: "Advanced Tools", onClick: () => onViewChange('advanced'), children: (0, jsx_runtime_1.jsx)(AdvancedIcon, {}) }), (0, jsx_runtime_1.jsx)(button_1.Button, { className: "icon-button", variant: "ghost", title: "Customize", onClick: () => onViewChange('customize'), children: (0, jsx_runtime_1.jsx)(SettingsIcon, {}) }), (0, jsx_runtime_1.jsx)(button_1.Button, { className: "icon-button", variant: "ghost", title: "Help & Shortcuts", onClick: () => onViewChange('help'), children: (0, jsx_runtime_1.jsx)(HelpIcon, {}) }), (0, jsx_runtime_1.jsx)(button_1.Button, { className: "icon-button window-close", variant: "ghost", onClick: onClose, children: (0, jsx_runtime_1.jsx)(CloseIcon, {}) })] })), currentView === 'onboarding' && ((0, jsx_runtime_1.jsx)(button_1.Button, { className: "icon-button window-close", variant: "ghost", onClick: () => onViewChange('main'), children: (0, jsx_runtime_1.jsx)(CloseIcon, {}) })), isNavigationView() && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(button_1.Button, { className: "icon-button", variant: "ghost", title: "Back to Main", onClick: () => onViewChange('main'), children: (0, jsx_runtime_1.jsx)(BackIcon, {}) }), (0, jsx_runtime_1.jsx)(button_1.Button, { className: "icon-button window-close", variant: "ghost", onClick: onClose, children: (0, jsx_runtime_1.jsx)(CloseIcon, {}) })] }))] })] }));
};
exports.AppHeader = AppHeader;
