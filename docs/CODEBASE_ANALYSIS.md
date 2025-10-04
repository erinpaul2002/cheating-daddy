# Cheating Daddy - Codebase Analysis

*Analysis performed on: October 4, 2025*

## Project Overview

**Cheating Daddy** is an Electron-based real-time AI assistant application that captures screen and audio for contextual AI responses. This fork is specifically designed for interview assistance and includes stealth features for sensitive use cases.

- **Version**: 0.4.0
- **License**: GPL-3.0
- **Technology Stack**: Electron + JavaScript, Google Gemini AI, Lit web components
- **Repository**: Fork of [sohzm/cheating-daddy](https://github.com/sohzm/cheating-daddy)

## Architecture & Structure

### Main Process (`src/index.js`)
The main Electron process handles:
- **IPC Handlers**: Configuration management (onboarding, stealth level, layout)
- **Window Management**: Creation and lifecycle of the main application window
- **Global Shortcuts**: Keyboard shortcuts for window positioning and controls
- **Anti-Analysis Measures**: Stealth features and process randomization
- **External Link Handling**: Opening URLs in system browser
- **Application Lifecycle**: Proper cleanup and quit handling

### Renderer Process
- **Entry HTML**: `src/index.html` - Minimal HTML with CSS custom properties for theming
- **Main Component**: `CheatingDaddyApp.js` - Lit-based web component managing the entire UI
- **View System**: Multiple views with smooth transitions (Onboarding, Main, Customize, Help, History, Advanced, Assistant)
- **Styling**: Responsive design with compact/normal layout modes

### Component Architecture
- **Framework**: Lit (lightweight web components library)
- **Structure**:
  - `AppHeader.js` - Navigation and global controls
  - `views/` directory containing view-specific components
  - Event-driven communication between components
- **State Management**: Lit's reactive properties system with localStorage persistence

## Core Functionality

### AI Integration (`utils/gemini.js`)
**Google Gemini Live API Integration**:
- **Model**: `gemini-live-2.5-flash-preview`
- **Real-time Features**:
  - Live audio transcription with speaker diarization
  - Streaming conversation responses
  - Automatic reconnection on connection loss
  - Google Search tool integration
  - Conversation history management

**Audio Processing**:
- 16kHz PCM audio format
- Dual-stream capture (microphone + system audio)
- Speaker identification (Interviewer/Candidate labeling)

### Audio Processing (`audioUtils.js`)
- **Format Conversion**: PCM to WAV with proper headers
- **Audio Analysis**: Buffer statistics (min/max values, RMS, silence detection, dynamic range)
- **Debug Features**: Audio file saving for troubleshooting
- **Quality Metrics**: Sample count, average values, silence percentage

### Stealth Features (`utils/stealthFeatures.js`)
- **Anti-Analysis Measures**: Delayed initialization and obfuscation techniques
- **Process Randomization**: Dynamic process naming for stealth operation
- **Detection Avoidance**: Timing-based anti-analysis measures

## Configuration & Storage

### Configuration System (`config.js`)
- **Format**: JSON-based local configuration
- **Settings Managed**:
  - Onboarding completion status
  - Stealth level (visible/balanced/ultra)
  - Layout mode (normal/compact)
  - Window positioning and sizing

### Data Persistence
- **UI Preferences**: localStorage for user settings and selections
- **Conversation History**: IndexedDB for persistent chat history
- **API Keys**: Secure localStorage storage

## Testing Infrastructure

### Test Framework
- **Tool**: Vitest with JSDOM environment
- **Configuration**: `vitest.config.js` with Electron mocking
- **Coverage Areas**:
  - Audio utilities (PCM conversion, analysis, debug saving)
  - Conversation management (session handling, history)
  - Speaker formatting and diarization
  - Syntax highlighting (end-to-end)

### Test Results
- **Total Tests**: 7 tests across 5 test files
- **Status**: All tests passing
- **Test Types**: Unit tests and end-to-end integration tests

## Build & Packaging

### Build System
- **Tool**: Electron Forge
- **Packaging**: Multi-platform support (Windows, macOS, Linux)
- **Distribution**: Ready for publishing to various app stores

### Scripts Available
```json
{
  "start": "electron-forge start",
  "package": "electron-forge package",
  "make": "electron-forge make",
  "publish": "electron-forge publish",
  "test": "vitest run",
  "lint": "echo \"No linting configured\""
}
```

## Key Features

1. **Real-time AI Assistance**: Live transcription and contextual responses during interviews
2. **Multi-modal Input**: Screen capture + audio analysis for comprehensive context
3. **Speaker Diarization**: Automatic identification of speakers (Interviewer vs Candidate)
4. **Multiple AI Profiles**: Specialized personalities for different use cases
5. **Stealth Mode**: Anti-detection measures for sensitive applications
6. **Transparent Overlay**: Always-on-top window with click-through capability
7. **Cross-platform**: Windows, macOS, Linux support
8. **Conversation Persistence**: History saving and retrieval

## Development Status

### Current Implementation ✅
- Core real-time AI functionality
- Audio/screen capture pipeline
- Basic UI with multiple views
- Google Gemini integration
- Build and packaging system
- Basic test coverage

### Planned Improvements 🔄
- **TypeScript Migration**: Gradual transition from JavaScript
- **React Adoption**: Move from Lit to React components
- **Local Transcription**: Integrate `whisper.cpp` for offline processing
- **Enhanced Audio Capture**: Improved dual-stream handling
- **Voice Activity Detection**: Skip silent segments
- **UI Overhaul**: shadcn/ui component library integration
- **Testing Expansion**: Jest/React Testing Library adoption

## Code Quality Assessment

### Strengths
- **Modular Architecture**: Well-separated concerns between main/renderer processes
- **Error Handling**: Comprehensive error management and recovery
- **Security**: Proper Electron context isolation and IPC validation
- **Performance**: Efficient audio processing and memory management
- **Documentation**: Detailed AGENTS.md with development guidelines

### Areas for Improvement
- **Type Safety**: JavaScript codebase (TypeScript migration planned)
- **Testing Coverage**: Limited automated test suite
- **Dependencies**: Some deprecated packages in package.json
- **Code Style**: Mixed JavaScript patterns (standardization needed)
- **Preload Security**: Minimal preload script (hardening recommended)

## Security Considerations

### Implemented Security Measures
- **Context Isolation**: Maintained Electron security boundaries
- **IPC Validation**: Parameter sanitization across process boundaries
- **Anti-Analysis**: Stealth features for sensitive use cases
- **Privacy Design**: Local processing where possible, user-controlled data retention

### Security Architecture
- **Process Separation**: Main process handles system operations, renderer handles UI
- **Secure IPC**: Validated communication between processes
- **Data Handling**: Secure storage of API keys and conversation data

## Dependencies Analysis

### Runtime Dependencies
- `@google/genai`: ^1.2.0 - Google Gemini AI integration
- `electron-squirrel-startup`: ^1.0.1 - Windows installer handling

### Development Dependencies
- **Electron Forge**: Complete build and packaging toolchain
- **Vitest**: Modern testing framework
- **Electron**: ^30.0.5 - Latest stable version

### Notable Issues
- **Deprecated Packages**: Some dependencies show deprecation warnings
- **Vulnerabilities**: 5 reported (2 low, 3 moderate) - recommend `npm audit fix`

## File Structure Overview

```
src/
├── index.js                 # Main Electron process
├── preload.js              # Electron preload script (minimal)
├── index.html              # Main HTML entry point
├── config.js               # Configuration management
├── audioUtils.js           # Audio processing utilities
├── components/
│   ├── app/
│   │   ├── CheatingDaddyApp.js    # Main app component
│   │   └── AppHeader.js          # Header/navigation component
│   └── views/                    # View components
├── utils/                        # Utility modules
│   ├── gemini.js                # AI integration
│   ├── prompts.js               # AI system prompts
│   ├── window.js                # Window management
│   ├── renderer.js              # Renderer utilities
│   └── stealthFeatures.js       # Anti-analysis features
├── assets/                       # Static assets
└── __tests__/                    # Test files
```

## Development Guidelines

### Code Standards (from AGENTS.md)
- **Future Migration**: Toward TypeScript/React architecture
- **Component Pattern**: Functional components with hooks (planned)
- **IPC Security**: Validate and sanitize all inter-process communication
- **Audio Processing**: Non-blocking operations off main UI thread
- **Testing**: New features require test coverage

### UI Development
- **Component Library**: Planned migration to shadcn/ui
- **Path Aliases**: `@/` prefix for src directory imports
- **React 19**: Target latest React with compiler (planned)
- **Tailwind Integration**: CSS variables with utility classes

## Conclusion

Cheating Daddy is a sophisticated Electron application with real-time AI capabilities, currently functional but undergoing significant architectural improvements. The codebase demonstrates good separation of concerns and robust error handling, with clear plans for modernization through TypeScript and React adoption.

The application successfully implements complex features like real-time audio processing, AI integration, and cross-platform compatibility, making it a technically impressive project with strong foundations for future development.</content>
<parameter name="filePath">c:\Users\user\OneDrive\Desktop\ERIN_PAUL_MANJALY\PersonalGithub\Arakoo\cheating-daddy\CODEBASE_ANALYSIS.md