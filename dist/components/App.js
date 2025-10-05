"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ErrorBoundary_1 = require("./ErrorBoundary");
const CheatingDaddyApp_1 = require("./app/CheatingDaddyApp");
const App = () => {
    const [isInitialized, setIsInitialized] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        initializeApp();
    }, []);
    const initializeApp = async () => {
        // Initialize IPC handlers and app state
        // This will be expanded when we integrate with the existing Electron setup
        setIsInitialized(true);
    };
    if (!isInitialized) {
        return (0, jsx_runtime_1.jsx)("div", { className: "loading", children: "Loading..." });
    }
    return ((0, jsx_runtime_1.jsx)(ErrorBoundary_1.ErrorBoundary, { children: (0, jsx_runtime_1.jsx)(CheatingDaddyApp_1.CheatingDaddyApp, {}) }));
};
exports.App = App;
