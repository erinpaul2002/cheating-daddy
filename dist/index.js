"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (require('electron-squirrel-startup')) {
    process.exit(0);
}
const electron_1 = require("electron");
const window_1 = require("./utils/window");
const gemini_1 = require("./utils/gemini");
const processRandomizer_1 = require("./utils/processRandomizer");
const stealthFeatures_1 = require("./utils/stealthFeatures");
const config_1 = require("./config");
const geminiSessionRef = { current: null };
let mainWindow = null;
// Initialize random process names for stealth
const randomNames = (0, processRandomizer_1.initializeRandomProcessNames)();
function createMainWindow() {
    mainWindow = (0, window_1.createWindow)(gemini_1.sendToRenderer, geminiSessionRef, randomNames);
    return mainWindow;
}
electron_1.app.whenReady().then(async () => {
    // Apply anti-analysis measures with random delay
    await (0, stealthFeatures_1.applyAntiAnalysisMeasures)();
    createMainWindow();
    (0, gemini_1.setupGeminiIpcHandlers)(geminiSessionRef);
    setupGeneralIpcHandlers();
});
electron_1.app.on('window-all-closed', () => {
    (0, gemini_1.stopMacOSAudioCapture)();
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('before-quit', () => {
    (0, gemini_1.stopMacOSAudioCapture)();
});
electron_1.app.on('activate', () => {
    if (electron_1.BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
    }
});
function setupGeneralIpcHandlers() {
    // Config-related IPC handlers
    electron_1.ipcMain.handle('set-onboarded', async (event) => {
        try {
            const config = (0, config_1.getLocalConfig)();
            config.onboarded = true;
            (0, config_1.writeConfig)(config);
            return { success: true, config };
        }
        catch (error) {
            console.error('Error setting onboarded:', error);
            return { success: false, error: error.message };
        }
    });
    electron_1.ipcMain.handle('set-stealth-level', async (event, stealthLevel) => {
        try {
            const validLevels = ['visible', 'balanced', 'ultra'];
            if (!validLevels.includes(stealthLevel)) {
                throw new Error(`Invalid stealth level: ${stealthLevel}. Must be one of: ${validLevels.join(', ')}`);
            }
            const config = (0, config_1.getLocalConfig)();
            config.stealthLevel = stealthLevel;
            (0, config_1.writeConfig)(config);
            return { success: true, config };
        }
        catch (error) {
            console.error('Error setting stealth level:', error);
            return { success: false, error: error.message };
        }
    });
    electron_1.ipcMain.handle('set-layout', async (event, layout) => {
        try {
            const validLayouts = ['normal', 'compact'];
            if (!validLayouts.includes(layout)) {
                throw new Error(`Invalid layout: ${layout}. Must be one of: ${validLayouts.join(', ')}`);
            }
            const config = (0, config_1.getLocalConfig)();
            config.layout = layout;
            (0, config_1.writeConfig)(config);
            return { success: true, config };
        }
        catch (error) {
            console.error('Error setting layout:', error);
            return { success: false, error: error.message };
        }
    });
    electron_1.ipcMain.handle('get-config', async (event) => {
        try {
            const config = (0, config_1.getLocalConfig)();
            return { success: true, config };
        }
        catch (error) {
            console.error('Error getting config:', error);
            return { success: false, error: error.message };
        }
    });
    electron_1.ipcMain.handle('quit-application', async (event) => {
        console.log('Received quit-application IPC call');
        try {
            (0, gemini_1.stopMacOSAudioCapture)();
            console.log('Stopping audio capture, quitting app...');
            // Quit after sending the response
            setImmediate(() => {
                console.log('Calling app.quit()');
                electron_1.app.quit();
            });
            return { success: true };
        }
        catch (error) {
            console.error('Error quitting application:', error);
            return { success: false, error: error.message };
        }
    });
    electron_1.ipcMain.handle('open-external', async (event, url) => {
        try {
            await electron_1.shell.openExternal(url);
            return { success: true };
        }
        catch (error) {
            console.error('Error opening external URL:', error);
            return { success: false, error: error.message };
        }
    });
    electron_1.ipcMain.on('update-keybinds', (event, newKeybinds) => {
        if (mainWindow) {
            (0, window_1.updateGlobalShortcuts)(newKeybinds, mainWindow, gemini_1.sendToRenderer, geminiSessionRef);
        }
    });
    electron_1.ipcMain.handle('update-content-protection', async (event, contentProtection) => {
        try {
            if (mainWindow) {
                // Get content protection setting from localStorage via cheddar
                const contentProtection = await mainWindow.webContents.executeJavaScript('cheddar.getContentProtection()');
                mainWindow.setContentProtection(contentProtection);
                console.log('Content protection updated:', contentProtection);
            }
            return { success: true };
        }
        catch (error) {
            console.error('Error updating content protection:', error);
            return { success: false, error: error.message };
        }
    });
    electron_1.ipcMain.handle('get-random-display-name', async (event) => {
        try {
            return randomNames ? randomNames.displayName : 'System Monitor';
        }
        catch (error) {
            console.error('Error getting random display name:', error);
            return 'System Monitor';
        }
    });
}
