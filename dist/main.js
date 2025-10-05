"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const App_1 = require("./components/App");
require("./index.css"); // Global styles
// Set up IPC access for React components
window.electron = {
    ipcRenderer: window.require('electron').ipcRenderer,
};
const container = document.getElementById('root');
if (!container)
    throw new Error('Root element not found');
const root = (0, client_1.createRoot)(container);
root.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(App_1.App, {}) }));
