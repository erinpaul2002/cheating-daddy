// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: {
        invoke: (channel: string, ...args: any[]) => ipcRenderer.invoke(channel, ...args),
        send: (channel: string, data: any) => ipcRenderer.send(channel, data),
        on: (channel: string, listener: (...args: any[]) => void) => ipcRenderer.on(channel, listener),
        removeAllListeners: (channel: string) => ipcRenderer.removeAllListeners(channel),
    },
});
