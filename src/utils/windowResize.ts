interface IpcResponse {
    success: boolean;
    error?: string;
}

interface WindowWithRequire extends Window {
    require?: (module: string) => any;
}

export async function resizeLayout(): Promise<void> {
    try {
        const win = window as WindowWithRequire;
        if (win.require) {
            const { ipcRenderer } = win.require('electron');
            const result: IpcResponse = await ipcRenderer.invoke('update-sizes');
            if (result.success) {
                console.log('Window resized for current view');
            } else {
                console.error('Failed to resize window:', result.error);
            }
        }
    } catch (error) {
        console.error('Error resizing window:', error);
    }
}
