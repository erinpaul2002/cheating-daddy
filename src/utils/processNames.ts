// processNames.ts - Random process name generation for better stealth

// Pool of legitimate-sounding application name components
const prefixes: readonly string[] = [
    'System',
    'Desktop',
    'Audio',
    'Media',
    'Network',
    'Security',
    'Helper',
    'Service',
    'Background',
    'Core',
    'Windows',
    'Microsoft',
    'Apple',
    'Google',
    'Chrome',
    'Firefox',
    'Adobe',
    'Intel',
    'NVIDIA',
    'Driver',
    'Update',
    'Sync',
    'Cloud',
    'Backup',
    'Office',
    'Document',
    'File',
    'Data',
    'Remote',
    'Connection',
    'Stream',
];

const suffixes: readonly string[] = [
    'Manager',
    'Service',
    'Helper',
    'Agent',
    'Process',
    'Handler',
    'Monitor',
    'Sync',
    'Update',
    'Assistant',
    'Connector',
    'Bridge',
    'Gateway',
    'Client',
    'Server',
    'Engine',
    'Driver',
    'Daemon',
    'Worker',
    'Scheduler',
    'Controller',
    'Viewer',
    'Player',
    'Editor',
    'Converter',
    'Optimizer',
    'Cleaner',
    'Scanner',
    'Analyzer',
];

const extensions: readonly string[] = [
    '',
    'Pro',
    'Plus',
    'Lite',
    'Express',
    'Standard',
    'Premium',
    'Advanced',
    'Basic',
    'Essential',
    'Ultimate',
    'Enterprise',
    '2024',
    '365',
    'X',
    'HD',
];

// Company-like suffixes for more realism
const companies: readonly string[] = [
    'Microsoft',
    'Apple',
    'Google',
    'Adobe',
    'Intel',
    'NVIDIA',
    'HP',
    'Dell',
    'Lenovo',
    'Samsung',
    'LG',
    'Sony',
    'Canon',
    'Epson',
    'Realtek',
    'Qualcomm',
];

let currentRandomName: string | null = null;
let currentRandomDisplayName: string | null = null;

/**
 * Generates a random legitimate-sounding process name
 * @param includeCompany - Whether to include company name
 * @returns Random process name
 */
export function generateRandomProcessName(includeCompany: boolean = false): string {
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    const extension = Math.random() > 0.7 ? extensions[Math.floor(Math.random() * extensions.length)] : '';

    let baseName = `${prefix}${suffix}${extension}`;

    if (includeCompany && Math.random() > 0.5) {
        const company = companies[Math.floor(Math.random() * companies.length)];
        baseName = `${company} ${baseName}`;
    }

    return baseName;
}

/**
 * Generates a random executable name (lowercase, no spaces)
 * @returns Random executable name
 */
export function generateRandomExecutableName(): string {
    const name = generateRandomProcessName(false);
    return name.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Gets or generates the current session's random name
 * This ensures consistency throughout the application session
 * @returns Current random process name
 */
export function getCurrentRandomName(): string {
    if (!currentRandomName) {
        currentRandomName = generateRandomExecutableName();
    }
    return currentRandomName;
}

/**
 * Gets or generates the current session's random display name
 * This ensures consistency throughout the application session
 * @returns Current random display name
 */
export function getCurrentRandomDisplayName(): string {
    if (!currentRandomDisplayName) {
        currentRandomDisplayName = generateRandomProcessName(true);
    }
    return currentRandomDisplayName;
}

/**
 * Forces regeneration of random names (for new sessions)
 */
export function regenerateRandomNames(): void {
    currentRandomName = generateRandomExecutableName();
    currentRandomDisplayName = generateRandomProcessName(true);
}

/**
 * Gets a random company name for branding
 * @returns Random company name
 */
export function getRandomCompanyName(): string {
    return companies[Math.floor(Math.random() * companies.length)];
}

/**
 * Generate a random window title that sounds legitimate
 * @returns Random window title
 */
export function generateRandomWindowTitle(): string {
    const titles = [
        'System Configuration',
        'Audio Settings',
        'Network Monitor',
        'Performance Monitor',
        'System Information',
        'Device Manager',
        'Background Services',
        'System Updates',
        'Security Center',
        'Task Manager',
        'Resource Monitor',
        'System Properties',
        'Network Connections',
        'Audio Devices',
        'Display Settings',
    ];

    return titles[Math.floor(Math.random() * titles.length)];
}
