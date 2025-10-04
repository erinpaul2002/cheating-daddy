// processRandomizer.ts - Apply random process names at startup

import { getCurrentRandomName, getCurrentRandomDisplayName, generateRandomWindowTitle } from './processNames';

interface RandomProcessNames {
    processName: string;
    displayName: string;
    windowTitle: string;
}

/**
 * Initialize random process names for the current session
 * This should be called early in the application startup
 * @returns Object containing randomized process identifiers
 */
export function initializeRandomProcessNames(): RandomProcessNames {
    console.log('Initializing random process names for stealth...');

    const randomName = getCurrentRandomName();
    const randomDisplayName = getCurrentRandomDisplayName();
    const windowTitle = generateRandomWindowTitle();

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
export function setRandomProcessTitle(): string | null {
    try {
        const randomProcessName = getCurrentRandomName();
        process.title = randomProcessName;
        console.log(`Set process title to: ${randomProcessName}`);
        return randomProcessName;
    } catch (error) {
        console.warn('Could not set process title:', (error as Error).message);
        return null;
    }
}
