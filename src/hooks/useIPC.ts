import { useCallback } from 'react';

export const useIPC = () => {
    const sendToRenderer = useCallback((channel: string, data: any) => {
        if (window.electron?.ipcRenderer) {
            window.electron.ipcRenderer.send(channel, data);
        }
    }, []);

    const invokeIPC = useCallback(async (channel: string, ...args: any[]) => {
        if (window.electron?.ipcRenderer) {
            return await window.electron.ipcRenderer.invoke(channel, ...args);
        }
    }, []);

    return { sendToRenderer, invokeIPC };
};
