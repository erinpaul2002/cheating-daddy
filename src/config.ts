const fs = require('fs');
const path = require('path');
const os = require('os');

interface Config {
    onboarded: boolean;
    stealthLevel: string;
    layout: string;
}

type Platform = 'win32' | 'darwin' | string;

// Default configuration
const DEFAULT_CONFIG: Config = {
    onboarded: false,
    stealthLevel: "balanced",
    layout: "normal"
};

// Get the config directory path based on OS
function getConfigDir(): string {
    const platform: Platform = os.platform();
    let configDir: string;

    if (platform === 'win32') {
        // Windows: %APPDATA%\cheating-daddy-config
        configDir = path.join(os.homedir(), 'AppData', 'Roaming', 'cheating-daddy-config');
    } else if (platform === 'darwin') {
        // macOS: ~/Library/Application Support/cheating-daddy-config
        configDir = path.join(os.homedir(), 'Library', 'Application Support', 'cheating-daddy-config');
    } else {
        // Linux and others: ~/.config/cheating-daddy-config
        configDir = path.join(os.homedir(), '.config', 'cheating-daddy-config');
    }

    return configDir;
}

function getConfigFilePath(): string {
    return path.join(getConfigDir(), 'config.json');
}

// Ensure the config directory exists
function ensureConfigDir(): void {
    const configDir = getConfigDir();
    if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir, { recursive: true });
    }
}

// Read existing config or return empty object
function readExistingConfig(): Partial<Config> {
    const configFilePath = getConfigFilePath();

    try {
        if (fs.existsSync(configFilePath)) {
            const configData = fs.readFileSync(configFilePath, 'utf8');
            return JSON.parse(configData);
        }
    } catch (error) {
        console.warn('Error reading config file:', (error as Error).message);
    }

    return {};
}

// Write config to file
function writeConfig(config: Config): void {
    ensureConfigDir();
    const configFilePath = getConfigFilePath();

    try {
        fs.writeFileSync(configFilePath, JSON.stringify(config, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing config file:', (error as Error).message);
        throw error;
    }
}

// Merge default config with existing config
function mergeWithDefaults(existingConfig: Partial<Config>): Config {
    const mergedConfig: Config = { ...DEFAULT_CONFIG };

    // Add any existing values that match default keys
    for (const key in DEFAULT_CONFIG) {
        if (existingConfig.hasOwnProperty(key)) {
            (mergedConfig as any)[key] = existingConfig[key as keyof Config];
        }
    }

    return mergedConfig;
}

// Main function to get local config
function getLocalConfig(): Config {
    try {
        // Ensure config directory exists
        ensureConfigDir();

        // Read existing config
        const existingConfig = readExistingConfig();

        // Merge with defaults
        const finalConfig = mergeWithDefaults(existingConfig);

        // Check if we need to update the config file
        const needsUpdate = JSON.stringify(existingConfig) !== JSON.stringify(finalConfig);

        if (needsUpdate) {
            writeConfig(finalConfig);
            console.log('Config updated with missing fields');
        }

        return finalConfig;
    } catch (error) {
        console.error('Error in getLocalConfig:', (error as Error).message);
        // Return default config if anything fails
        return { ...DEFAULT_CONFIG };
    }
}

// Export only the necessary functions
export {
    getLocalConfig,
    writeConfig
};