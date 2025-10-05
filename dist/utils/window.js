"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureDataDirectories = ensureDataDirectories;
exports.createWindow = createWindow;
exports.getDefaultKeybinds = getDefaultKeybinds;
exports.updateGlobalShortcuts = updateGlobalShortcuts;
exports.setupWindowIpcHandlers = setupWindowIpcHandlers;
const electron_1 = require("electron");
const node_path_1 = __importDefault(require("node:path"));
const node_fs_1 = __importDefault(require("node:fs"));
const os_1 = __importDefault(require("os"));
const stealthFeatures_1 = require("./stealthFeatures");
// Module state
let mouseEventsIgnored = false;
function ensureDataDirectories() {
    const homeDir = os_1.default.homedir();
    const cheddarDir = node_path_1.default.join(homeDir, 'cheddar');
    const dataDir = node_path_1.default.join(cheddarDir, 'data');
    const imageDir = node_path_1.default.join(dataDir, 'image');
    const audioDir = node_path_1.default.join(dataDir, 'audio');
    [cheddarDir, dataDir, imageDir, audioDir].forEach(dir => {
        if (!node_fs_1.default.existsSync(dir)) {
            node_fs_1.default.mkdirSync(dir, { recursive: true });
        }
    });
    return { imageDir, audioDir };
}
function createWindow(sendToRenderer, geminiSessionRef, randomNames = null) {
    // Get layout preference (default to 'normal')
    let windowWidth = 1100;
    let windowHeight = 800;
    const mainWindow = new electron_1.BrowserWindow({
        width: windowWidth,
        height: windowHeight,
        frame: false,
        transparent: true,
        hasShadow: false,
        alwaysOnTop: true,
        skipTaskbar: true,
        hiddenInMissionControl: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false, // TODO: enable context isolation after migration
            backgroundThrottling: false,
            enableBlinkFeatures: 'GetDisplayMedia',
            webSecurity: true,
            allowRunningInsecureContent: false,
        },
        backgroundColor: '#00000000',
    });
    electron_1.session.defaultSession.setDisplayMediaRequestHandler((request, callback) => {
        electron_1.desktopCapturer.getSources({ types: ['screen'] }).then(sources => {
            callback({ video: sources[0], audio: 'loopback' });
        });
    });
    mainWindow.setResizable(false);
    mainWindow.setContentProtection(true);
    mainWindow.setVisibleOnAllWorkspaces(true, { visibleOnFullScreen: true });
    // Center window at the top of the screen
    const primaryDisplay = electron_1.screen.getPrimaryDisplay();
    const { width: screenWidth } = primaryDisplay.workAreaSize;
    const x = Math.floor((screenWidth - windowWidth) / 2);
    const y = 0;
    mainWindow.setPosition(x, y);
    if (process.platform === 'win32') {
        mainWindow.setAlwaysOnTop(true, 'screen-saver', 1);
    }
    mainWindow.loadFile(node_path_1.default.join(__dirname, '../index.html'));
    // Open DevTools for debugging
    // mainWindow.webContents.openDevTools({ mode: 'detach' });
    // Set window title to random name if provided
    if (randomNames && randomNames.windowTitle) {
        mainWindow.setTitle(randomNames.windowTitle);
        console.log(`Set window title to: ${randomNames.windowTitle}`);
    }
    // Apply stealth measures
    (0, stealthFeatures_1.applyStealthMeasures)(mainWindow);
    // Start periodic title randomization for additional stealth
    (0, stealthFeatures_1.startTitleRandomization)(mainWindow);
    // After window is created, check for layout preference and resize if needed
    mainWindow.webContents.once('dom-ready', () => {
        setTimeout(() => {
            const defaultKeybinds = getDefaultKeybinds();
            let keybinds = defaultKeybinds;
            mainWindow.webContents
                .executeJavaScript(`
                try {
                    const savedKeybinds = localStorage.getItem('customKeybinds');
                    
                    return {
                        keybinds: savedKeybinds ? JSON.parse(savedKeybinds) : null
                    };
                } catch (e) {
                    return { keybinds: null };
                }
            `)
                .then(async (savedSettings) => {
                if (savedSettings.keybinds) {
                    keybinds = { ...defaultKeybinds, ...savedSettings.keybinds };
                }
                // Apply content protection setting via IPC handler
                try {
                    const contentProtection = (await mainWindow.webContents.executeJavaScript('cheddar.getContentProtection()'));
                    mainWindow.setContentProtection(contentProtection);
                    console.log('Content protection loaded from settings:', contentProtection);
                }
                catch (error) {
                    console.error('Error loading content protection:', error);
                    mainWindow.setContentProtection(true);
                }
                updateGlobalShortcuts(keybinds, mainWindow, sendToRenderer, geminiSessionRef);
            })
                .catch(() => {
                // Default to content protection enabled
                mainWindow.setContentProtection(true);
                updateGlobalShortcuts(keybinds, mainWindow, sendToRenderer, geminiSessionRef);
            });
        }, 150);
    });
    setupWindowIpcHandlers(mainWindow, sendToRenderer, geminiSessionRef);
    return mainWindow;
}
function getDefaultKeybinds() {
    const isMac = process.platform === 'darwin';
    return {
        moveUp: isMac ? 'Alt+Up' : 'Ctrl+Up',
        moveDown: isMac ? 'Alt+Down' : 'Ctrl+Down',
        moveLeft: isMac ? 'Alt+Left' : 'Ctrl+Left',
        moveRight: isMac ? 'Alt+Right' : 'Ctrl+Right',
        toggleVisibility: isMac ? 'Cmd+\\' : 'Ctrl+\\',
        toggleClickThrough: isMac ? 'Cmd+M' : 'Ctrl+M',
        nextStep: isMac ? 'Cmd+Enter' : 'Ctrl+Enter',
        previousResponse: isMac ? 'Cmd+[' : 'Ctrl+[',
        nextResponse: isMac ? 'Cmd+]' : 'Ctrl+]',
        scrollUp: isMac ? 'Cmd+Shift+Up' : 'Ctrl+Shift+Up',
        scrollDown: isMac ? 'Cmd+Shift+Down' : 'Ctrl+Shift+Down',
        emergencyErase: isMac ? 'Cmd+Shift+E' : 'Ctrl+Shift+E',
    };
}
function updateGlobalShortcuts(keybinds, mainWindow, sendToRenderer, geminiSessionRef) {
    console.log('Updating global shortcuts with:', keybinds);
    // Unregister all existing shortcuts
    electron_1.globalShortcut.unregisterAll();
    const primaryDisplay = electron_1.screen.getPrimaryDisplay();
    const { width, height } = primaryDisplay.workAreaSize;
    const moveIncrement = Math.floor(Math.min(width, height) * 0.1);
    // Register window movement shortcuts
    const movementActions = {
        moveUp: () => {
            if (!mainWindow.isVisible())
                return;
            const [currentX, currentY] = mainWindow.getPosition();
            mainWindow.setPosition(currentX, currentY - moveIncrement);
        },
        moveDown: () => {
            if (!mainWindow.isVisible())
                return;
            const [currentX, currentY] = mainWindow.getPosition();
            mainWindow.setPosition(currentX, currentY + moveIncrement);
        },
        moveLeft: () => {
            if (!mainWindow.isVisible())
                return;
            const [currentX, currentY] = mainWindow.getPosition();
            mainWindow.setPosition(currentX - moveIncrement, currentY);
        },
        moveRight: () => {
            if (!mainWindow.isVisible())
                return;
            const [currentX, currentY] = mainWindow.getPosition();
            mainWindow.setPosition(currentX + moveIncrement, currentY);
        },
    };
    // Register each movement shortcut
    Object.keys(movementActions).forEach(action => {
        const keybind = keybinds[action];
        if (keybind) {
            try {
                electron_1.globalShortcut.register(keybind, movementActions[action]);
                console.log(`Registered ${action}: ${keybind}`);
            }
            catch (error) {
                console.error(`Failed to register ${action} (${keybind}):`, error);
            }
        }
    });
    // Register toggle visibility shortcut
    if (keybinds.toggleVisibility) {
        try {
            electron_1.globalShortcut.register(keybinds.toggleVisibility, () => {
                if (mainWindow.isVisible()) {
                    mainWindow.hide();
                }
                else {
                    mainWindow.showInactive();
                }
            });
            console.log(`Registered toggleVisibility: ${keybinds.toggleVisibility}`);
        }
        catch (error) {
            console.error(`Failed to register toggleVisibility (${keybinds.toggleVisibility}):`, error);
        }
    }
    // Register toggle click-through shortcut
    if (keybinds.toggleClickThrough) {
        try {
            electron_1.globalShortcut.register(keybinds.toggleClickThrough, () => {
                mouseEventsIgnored = !mouseEventsIgnored;
                if (mouseEventsIgnored) {
                    mainWindow.setIgnoreMouseEvents(true, { forward: true });
                    console.log('Mouse events ignored');
                }
                else {
                    mainWindow.setIgnoreMouseEvents(false);
                    console.log('Mouse events enabled');
                }
                mainWindow.webContents.send('click-through-toggled', mouseEventsIgnored);
            });
            console.log(`Registered toggleClickThrough: ${keybinds.toggleClickThrough}`);
        }
        catch (error) {
            console.error(`Failed to register toggleClickThrough (${keybinds.toggleClickThrough}):`, error);
        }
    }
    // Register next step shortcut (either starts session or takes screenshot based on view)
    if (keybinds.nextStep) {
        try {
            electron_1.globalShortcut.register(keybinds.nextStep, async () => {
                console.log('Next step shortcut triggered');
                try {
                    // Determine the shortcut key format
                    const isMac = process.platform === 'darwin';
                    const shortcutKey = isMac ? 'cmd+enter' : 'ctrl+enter';
                    // Use the new handleShortcut function
                    mainWindow.webContents.executeJavaScript(`
                        cheddar.handleShortcut('${shortcutKey}');
                    `);
                }
                catch (error) {
                    console.error('Error handling next step shortcut:', error);
                }
            });
            console.log(`Registered nextStep: ${keybinds.nextStep}`);
        }
        catch (error) {
            console.error(`Failed to register nextStep (${keybinds.nextStep}):`, error);
        }
    }
    // Register previous response shortcut
    if (keybinds.previousResponse) {
        try {
            electron_1.globalShortcut.register(keybinds.previousResponse, () => {
                console.log('Previous response shortcut triggered');
                sendToRenderer('navigate-previous-response');
            });
            console.log(`Registered previousResponse: ${keybinds.previousResponse}`);
        }
        catch (error) {
            console.error(`Failed to register previousResponse (${keybinds.previousResponse}):`, error);
        }
    }
    // Register next response shortcut
    if (keybinds.nextResponse) {
        try {
            electron_1.globalShortcut.register(keybinds.nextResponse, () => {
                console.log('Next response shortcut triggered');
                sendToRenderer('navigate-next-response');
            });
            console.log(`Registered nextResponse: ${keybinds.nextResponse}`);
        }
        catch (error) {
            console.error(`Failed to register nextResponse (${keybinds.nextResponse}):`, error);
        }
    }
    // Register scroll up shortcut
    if (keybinds.scrollUp) {
        try {
            electron_1.globalShortcut.register(keybinds.scrollUp, () => {
                console.log('Scroll up shortcut triggered');
                sendToRenderer('scroll-response-up');
            });
            console.log(`Registered scrollUp: ${keybinds.scrollUp}`);
        }
        catch (error) {
            console.error(`Failed to register scrollUp (${keybinds.scrollUp}):`, error);
        }
    }
    // Register scroll down shortcut
    if (keybinds.scrollDown) {
        try {
            electron_1.globalShortcut.register(keybinds.scrollDown, () => {
                console.log('Scroll down shortcut triggered');
                sendToRenderer('scroll-response-down');
            });
            console.log(`Registered scrollDown: ${keybinds.scrollDown}`);
        }
        catch (error) {
            console.error(`Failed to register scrollDown (${keybinds.scrollDown}):`, error);
        }
    }
    // Register emergency erase shortcut
    if (keybinds.emergencyErase) {
        try {
            electron_1.globalShortcut.register(keybinds.emergencyErase, () => {
                console.log('Emergency Erase triggered!');
                if (mainWindow && !mainWindow.isDestroyed()) {
                    mainWindow.hide();
                    if (geminiSessionRef.current) {
                        geminiSessionRef.current.close();
                        geminiSessionRef.current = null;
                    }
                    sendToRenderer('clear-sensitive-data');
                    setTimeout(() => {
                        electron_1.app.quit();
                    }, 300);
                }
            });
            console.log(`Registered emergencyErase: ${keybinds.emergencyErase}`);
        }
        catch (error) {
            console.error(`Failed to register emergencyErase (${keybinds.emergencyErase}):`, error);
        }
    }
}
function setupWindowIpcHandlers(mainWindow, sendToRenderer, geminiSessionRef) {
    electron_1.ipcMain.on('view-changed', (event, view) => {
        if (view !== 'assistant' && !mainWindow.isDestroyed()) {
            mainWindow.setIgnoreMouseEvents(false);
        }
    });
    electron_1.ipcMain.handle('window-minimize', () => {
        if (!mainWindow.isDestroyed()) {
            mainWindow.minimize();
        }
    });
    electron_1.ipcMain.on('update-keybinds', (event, newKeybinds) => {
        if (!mainWindow.isDestroyed()) {
            updateGlobalShortcuts(newKeybinds, mainWindow, sendToRenderer, geminiSessionRef);
        }
    });
    electron_1.ipcMain.handle('toggle-window-visibility', async (event) => {
        try {
            if (mainWindow.isDestroyed()) {
                return { success: false, error: 'Window has been destroyed' };
            }
            if (mainWindow.isVisible()) {
                mainWindow.hide();
            }
            else {
                mainWindow.showInactive();
            }
            return { success: true };
        }
        catch (error) {
            console.error('Error toggling window visibility:', error);
            return { success: false, error: error.message };
        }
    });
    electron_1.ipcMain.handle('update-sizes', async (event) => {
        try {
            if (mainWindow.isDestroyed()) {
                return { success: false, error: 'Window has been destroyed' };
            }
            // Get current view and layout mode from renderer
            let viewName;
            let layoutMode;
            try {
                viewName = (await event.sender.executeJavaScript('cheddar.getCurrentView()'));
                layoutMode = (await event.sender.executeJavaScript('cheddar.getLayoutMode()'));
            }
            catch (error) {
                console.warn('Failed to get view/layout from renderer, using defaults:', error);
                viewName = 'main';
                layoutMode = 'normal';
            }
            console.log('Size update requested for view:', viewName, 'layout:', layoutMode);
            let targetWidth;
            let targetHeight;
            // Determine base size from layout mode
            const baseWidth = layoutMode === 'compact' ? 700 : 900;
            const baseHeight = layoutMode === 'compact' ? 500 : 600;
            // Adjust height based on view
            switch (viewName) {
                case 'customize':
                case 'settings':
                    targetWidth = baseWidth;
                    targetHeight = layoutMode === 'compact' ? 700 : 800;
                    break;
                case 'help':
                    targetWidth = baseWidth;
                    targetHeight = layoutMode === 'compact' ? 650 : 750;
                    break;
                case 'history':
                    targetWidth = baseWidth;
                    targetHeight = layoutMode === 'compact' ? 650 : 750;
                    break;
                case 'advanced':
                    targetWidth = baseWidth;
                    targetHeight = layoutMode === 'compact' ? 600 : 700;
                    break;
                case 'main':
                case 'assistant':
                case 'onboarding':
                default:
                    targetWidth = baseWidth;
                    targetHeight = baseHeight;
                    break;
            }
            const [currentWidth, currentHeight] = mainWindow.getSize();
            // Skip if already at target size
            if (currentWidth === targetWidth && currentHeight === targetHeight) {
                console.log(`Window already at target size: ${targetWidth}x${targetHeight}`);
                return { success: true };
            }
            console.log(`Resizing window from ${currentWidth}x${currentHeight} to ${targetWidth}x${targetHeight}`);
            // Instant resize - no animation needed since sizes are fixed per view
            const primaryDisplay = electron_1.screen.getPrimaryDisplay();
            const { width: screenWidth } = primaryDisplay.workAreaSize;
            const x = Math.floor((screenWidth - targetWidth) / 2);
            mainWindow.setBounds({ x, y: 0, width: targetWidth, height: targetHeight }, false);
            console.log(`Window resized to: ${targetWidth}x${targetHeight} for view: ${viewName} (${layoutMode})`);
            return { success: true };
        }
        catch (error) {
            console.error('Error updating sizes:', error);
            return { success: false, error: error.message };
        }
    });
}
