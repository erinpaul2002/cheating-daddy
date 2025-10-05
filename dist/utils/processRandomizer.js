"use strict";
// processRandomizer.ts - Apply random process names at startup
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeRandomProcessNames = initializeRandomProcessNames;
exports.setRandomProcessTitle = setRandomProcessTitle;
const processNames_1 = require("./processNames");
/**
 * Initialize random process names for the current session
 * This should be called early in the application startup
 * @returns Object containing randomized process identifiers
 */
function initializeRandomProcessNames() {
    console.log('Initializing random process names for stealth...');
    const randomName = (0, processNames_1.getCurrentRandomName)();
    const randomDisplayName = (0, processNames_1.getCurrentRandomDisplayName)();
    const windowTitle = (0, processNames_1.generateRandomWindowTitle)();
    console.log(`Process name: ${randomName}`);
    console.log(`Display name: ${randomDisplayName}`);
    console.log(`Window title: ${windowTitle}`);
    // Set process title to appear as a different process in task manager
    setRandomProcessTitle();
    return {
        processName: randomName,
        displayName: randomDisplayName,
        windowTitle: windowTitle,
    };
}
/**
 * Set a random process title for the current process
 * This changes how the process appears in task manager/process lists
 * @returns The random process name, or null if it failed
 */
function setRandomProcessTitle() {
    try {
        const randomProcessName = (0, processNames_1.getCurrentRandomName)();
        process.title = randomProcessName;
        console.log(`Set process title to: ${randomProcessName}`);
        return randomProcessName;
    }
    catch (error) {
        console.warn('Could not set process title:', error.message);
        return null;
    }
}
