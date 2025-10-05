// Global type declarations
declare global {
    interface Window {
        cheddar: {
            initializeGemini: (profile: string, language: string) => Promise<void>;
            getAllConversationSessions: () => Promise<ConversationSession[]>;
            isMacOS: boolean;
            stopCapture: () => void;
            startCapture: (interval: string, quality: string) => void;
            sendTextMessage: (message: string) => Promise<{ success: boolean; error?: string }>;
            // Add other IPC methods as needed
        };
        electron?: {
            ipcRenderer?: {
                send: (channel: string, data: any) => void;
                invoke: (channel: string, ...args: any[]) => Promise<any>;
                on: (channel: string, listener: (...args: any[]) => void) => void;
                removeAllListeners: (channel: string) => void;
            };
        };
    }
}

// Component Props Interfaces
export interface AppHeaderProps {
    currentView: string;
    onViewChange: (view: string) => void;
    onMinimize?: () => void;
    onClose?: () => void;
}

export interface MainViewProps {
    onStart: () => void;
    onAPIKeyHelp: () => void;
    isInitializing: boolean;
    onLayoutModeChange: (mode: string) => void;
    showApiKeyError?: boolean;
}

export interface CustomizeViewProps {
    selectedProfile: string;
    selectedLanguage: string;
    selectedScreenshotInterval: string;
    selectedImageQuality: string;
    layoutMode: string;
    keybinds: Record<string, string>;
    googleSearchEnabled: boolean;
    backgroundTransparency: number;
    fontSize: number;
    onProfileChange: (profile: string) => void;
    onLanguageChange: (language: string) => void;
    onScreenshotIntervalChange: (interval: string) => void;
    onImageQualityChange: (quality: string) => void;
    onLayoutModeChange: (mode: string) => void;
    advancedMode: boolean;
    onAdvancedModeChange: (enabled: boolean) => void;
}

export interface AssistantViewProps {
    responses: any[];
    currentResponseIndex: number;
    selectedProfile: string;
    onSendText: (text: string) => void;
    shouldAnimateResponse: boolean;
    savedResponses: SavedResponse[];
    onResponseIndexChanged?: (index: number) => void;
    onStopSession?: () => void;
}

export interface SavedResponse {
    response: string;
    timestamp: string;
    profile: string;
}

export interface HelpViewProps {
    onExternalLinkClick: (url: string) => void;
    keybinds: Record<string, string>;
}

export interface HistoryViewProps {
    sessions: any[];
    selectedSession: any;
    loading: boolean;
    activeTab: string;
    savedResponses: any[];
}

// History View specific types
export interface Message {
    type: 'user' | 'ai';
    content: string;
    timestamp: number;
}

export interface HistoryViewState {
    sessions: ConversationSession[];
    selectedSession: ConversationSession | null;
    loading: boolean;
    activeTab: 'sessions' | 'saved';
    savedResponses: SavedResponse[];
}

export interface AdvancedViewProps {
    isClearing: boolean;
    statusMessage: string;
    statusType: string;
    throttleTokens: boolean;
    maxTokensPerMin: number;
    throttleAtPercent: number;
    contentProtection: boolean;
}

export interface OnboardingViewProps {
    currentSlide: number;
    contextText: string;
    onComplete: () => void;
    onClose: () => void;
}

// Onboarding View specific types
export interface OnboardingSlide {
    icon: string;
    title: string;
    content: string;
    showTextarea?: boolean;
    showFeatures?: boolean;
}

export interface ColorScheme extends Array<[number, number, number]> {}

export interface OnboardingViewState {
    currentSlide: number;
    contextText: string;
    isTransitioning: boolean;
    transitionStartTime: number;
    previousColorScheme: ColorScheme | null;
}

export interface CanvasAnimationState {
    canvas: HTMLCanvasElement | null;
    ctx: CanvasRenderingContext2D | null;
    animationId: number | null;
}

// Profile and Language Data Interfaces
export interface ProfileOption {
    value: ProfileType;
    name: string;
    description: string;
}

export interface LanguageOption {
    value: LanguageType;
    name: string;
}

export interface KeybindActionInfo {
    key: KeybindAction;
    name: string;
    description: string;
}

// IPC and Window Interfaces
export interface WindowWithCheddar extends Window {
    cheddar: {
        initializeGemini: (profile: string, language: string) => Promise<void>;
        getAllConversationSessions: () => Promise<ConversationSession[]>;
        isMacOS: boolean;
        stopCapture: () => void;
        startCapture: (interval: string, quality: string) => void;
        sendTextMessage: (message: string) => Promise<{ success: boolean; error?: string }>;
        // Add other IPC methods as needed
    };
    electron?: {
        ipcRenderer?: {
            send: (channel: string, data: any) => void;
            invoke: (channel: string, ...args: any[]) => Promise<any>;
            on: (channel: string, listener: (...args: any[]) => void) => void;
            removeAllListeners: (channel: string) => void;
        };
    };
}

// Data Interfaces
export interface ConversationSession {
    id: string;
    timestamp: number;
    transcription: string;
    ai_response: string;
    profile: string;
    conversationHistory?: ConversationTurn[];
}

export interface ConversationTurn {
    timestamp: number;
    transcription: string;
    ai_response: string;
}

export interface AppSettings {
    onboarded: boolean;
    stealthLevel: string;
    layout: string;
    apiKey?: string;
    profile?: string;
    language?: string;
}

// View Types
export type ViewType = 'main' | 'customize' | 'assistant' | 'help' | 'history' | 'advanced' | 'onboarding';

// Profile Types
export type ProfileType = 'interview' | 'sales' | 'meeting' | 'presentation' | 'negotiation' | 'exam';

// Language Types
export type LanguageType =
    | 'en-US'
    | 'en-GB'
    | 'en-AU'
    | 'en-IN'
    | 'de-DE'
    | 'es-US'
    | 'es-ES'
    | 'fr-FR'
    | 'fr-CA'
    | 'hi-IN'
    | 'pt-BR'
    | 'ar-XA'
    | 'id-ID'
    | 'it-IT'
    | 'ja-JP'
    | 'tr-TR'
    | 'vi-VN'
    | 'bn-IN'
    | 'gu-IN'
    | 'kn-IN'
    | 'ml-IN'
    | 'mr-IN'
    | 'ta-IN'
    | 'te-IN'
    | 'nl-NL'
    | 'ko-KR'
    | 'cmn-CN'
    | 'pl-PL'
    | 'ru-RU'
    | 'th-TH';

// Keybind Action Types
export type KeybindAction =
    | 'moveUp'
    | 'moveDown'
    | 'moveLeft'
    | 'moveRight'
    | 'toggleVisibility'
    | 'toggleClickThrough'
    | 'nextStep'
    | 'previousResponse'
    | 'nextResponse'
    | 'scrollUp'
    | 'scrollDown';

// Layout Mode Types
export type LayoutMode = 'compact' | 'normal' | 'spacious';
