"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIPC = void 0;
const react_1 = require("react");
const useIPC = () => {
    const sendToRenderer = (0, react_1.useCallback)((channel, data) => {
        if (window.electron?.ipcRenderer) {
            window.electron.ipcRenderer.send(channel, data);
        }
    }, []);
    const invokeIPC = (0, react_1.useCallback)(async (channel, ...args) => {
        if (window.electron?.ipcRenderer) {
            return await window.electron.ipcRenderer.invoke(channel, ...args);
        }
    }, []);
    return { sendToRenderer, invokeIPC };
};
exports.useIPC = useIPC;
