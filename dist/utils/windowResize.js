export async function resizeLayout() {
    try {
        const win = window;
        if (win.require) {
            const { ipcRenderer } = win.require('electron');
            const result = await ipcRenderer.invoke('update-sizes');
            if (result.success) {
                console.log('Window resized for current view');
            }
            else {
                console.error('Failed to resize window:', result.error);
            }
        }
    }
    catch (error) {
        console.error('Error resizing window:', error);
    }
}
