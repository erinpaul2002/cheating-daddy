# React & TypeScript Migration Guide

*Generated on: October 4, 2025*

This document outlines the file migration strategy for converting the Cheating Daddy codebase from JavaScript/Lit web components to React/TypeScript.

## Migration Overview

The current codebase uses:
- **JavaScript** with ES6 modules
- **Lit** web components framework
- **Electron** for cross-platform desktop app
- **Vitest** for testing

The target architecture will use:
- **TypeScript** for type safety
- **React** with functional components and hooks
- **Electron** (unchanged)
- **Vitest** with TypeScript support

## Phase 1: TypeScript Foundation (Non-UI Files)

**Strategy**: Convert utility functions and core logic to TypeScript FIRST before touching UI components. This provides type safety for business logic while keeping the UI functional.

### 🔄 Utility Functions (Convert JS → TS)

| Current File | New File | Description | Risk Level |
|-------------|----------|-------------|------------|
| `src/audioUtils.js` | `src/audioUtils.ts` | Audio processing utilities (PCM conversion, analysis) | 🟢 Low |
| `src/config.js` | `src/config.ts` | Configuration management (localStorage, file I/O) | 🟢 Low |
| `src/utils/gemini.js` | `src/utils/gemini.ts` | Google Gemini AI integration & IPC handlers | 🟡 Medium |
| `src/utils/prompts.js` | `src/utils/prompts.ts` | AI system prompts and profile configurations | 🟢 Low |
| `src/utils/processNames.js` | `src/utils/processNames.ts` | Process naming utilities for stealth features | 🟢 Low |
| `src/utils/processRandomizer.js` | `src/utils/processRandomizer.ts` | Process randomization for anti-analysis | 🟢 Low |
| `src/utils/renderer.js` | `src/utils/renderer.ts` | Renderer process utilities & global cheddar object | 🟡 Medium |
| `src/utils/stealthFeatures.js` | `src/utils/stealthFeatures.ts` | Anti-analysis measures & window cloaking | 🟢 Low |
| `src/utils/window.js` | `src/utils/window.ts` | Window management & global shortcuts | 🟡 Medium |
| `src/utils/windowResize.js` | `src/utils/windowResize.ts` | Window resizing animations & layout | 🟢 Low |

### 🔄 Main Process (Optional)

| Current File | New File | Description | Risk Level |
|-------------|----------|-------------|------------|
| `src/index.js` | `src/index.ts` | Electron main process (IPC, window creation) | 🟡 Medium |

### 🔄 Test Files

| Current File | New File | Description | Risk Level |
|-------------|----------|-------------|------------|
| `src/__tests__/audioUtils.test.js` | `src/__tests__/audioUtils.test.ts` | Audio utility tests | 🟢 Low |
| `src/__tests__/audioUtils.e2e.test.js` | `src/__tests__/audioUtils.e2e.test.ts` | End-to-end audio tests | 🟢 Low |
| `src/__tests__/geminiConversation.test.js` | `src/__tests__/geminiConversation.test.ts` | Conversation management tests | 🟢 Low |
| `src/__tests__/speakerFormat.test.js` | `src/__tests__/speakerFormat.test.ts` | Speaker formatting tests | 🟢 Low |
| `src/__tests__/syntaxHighlight.e2e.test.js` | `src/__tests__/syntaxHighlight.e2e.test.ts` | Syntax highlighting tests | 🟢 Low |

### 🔄 Configuration Files

| Current File | New File | Description | Risk Level |
|-------------|----------|-------------|------------|
| `vitest.config.js` | `vitest.config.ts` | Test configuration for TypeScript | 🟢 Low |

## Why Convert These Files First?

### ✅ Benefits
- **Type Safety on Core Logic**: Business logic gets compile-time checking
- **No UI Impact**: UI continues working during migration
- **Incremental Progress**: Can test and validate each conversion
- **Foundation for React**: Typed utilities make React component conversion easier
- **Low Risk**: Pure functions are easier to convert than UI components

### 🎯 Conversion Priority (Easiest to Hardest)
1. **Data structures**: `prompts.js`, `processNames.js` (simple objects/functions)
2. **Pure utilities**: `audioUtils.js`, `config.js`, `windowResize.js`
3. **Electron APIs**: `stealthFeatures.js`, `processRandomizer.js`
4. **Complex utilities**: `gemini.js`, `renderer.js`, `window.js` (IPC, async operations)
5. **Main process**: `index.js` (optional, can stay JavaScript)
6. **Tests**: Convert after utilities are typed

### 📋 TypeScript Setup Requirements
Before converting files, ensure:
- `package.json` has TypeScript dependencies
- `tsconfig.json` exists with proper Electron configuration
- Type definitions installed (`@types/node`, `@types/electron`)

## Files to CHANGE (Convert/Rewrite)

### 🔄 Component Files (Convert from Lit to React)

| Current File | New File | Action Required |
|-------------|----------|----------------|
| `src/components/app/CheatingDaddyApp.js` | `src/components/app/CheatingDaddyApp.tsx` | Complete rewrite: Convert LitElement class to React functional component with hooks |
| `src/components/app/AppHeader.js` | `src/components/app/AppHeader.tsx` | Complete rewrite: Convert LitElement to React component |
| `src/components/views/MainView.js` | `src/components/views/MainView.tsx` | Complete rewrite: Convert LitElement to React component |
| `src/components/views/CustomizeView.js` | `src/components/views/CustomizeView.tsx` | Complete rewrite: Convert LitElement to React component |
| `src/components/views/HelpView.js` | `src/components/views/HelpView.tsx` | Complete rewrite: Convert LitElement to React component |
| `src/components/views/HistoryView.js` | `src/components/views/HistoryView.tsx` | Complete rewrite: Convert LitElement to React component |
| `src/components/views/AssistantView.js` | `src/components/views/AssistantView.tsx` | Complete rewrite: Convert LitElement to React component |
| `src/components/views/OnboardingView.js` | `src/components/views/OnboardingView.tsx` | Complete rewrite: Convert LitElement to React component |
| `src/components/views/AdvancedView.js` | `src/components/views/AdvancedView.tsx` | Complete rewrite: Convert LitElement to React component |
| `src/components/index.js` | `src/components/index.ts` | Update exports for TypeScript |

### 🔄 Entry Points (Update for React)

| Current File | Changes Required |
|-------------|------------------|
| `src/index.html` | - Remove Lit component mounting (`<cheating-daddy-app>`) <br> - Add React root div (`<div id="root"></div>`) <br> - Update script loading for React app |

### 🔄 Configuration Files (Add TypeScript/React Support)

| Current File | Changes Required |
|-------------|------------------|
| `package.json` | Add dependencies: <br> - `react`, `react-dom` <br> - `typescript` <br> - `@types/react`, `@types/react-dom` <br> - `@types/node` (for Electron types) <br> - Testing: `@testing-library/react`, `@testing-library/jest-dom` |
| `vitest.config.js` | - Rename to `vitest.config.ts` <br> - Add TypeScript configuration <br> - Update for React testing utilities |

### 🔄 Test Files (Convert to TypeScript)

| Current File | New File | Changes Required |
|-------------|----------|------------------|
| `src/__tests__/audioUtils.test.js` | `src/__tests__/audioUtils.test.ts` | - Add type imports <br> - Update for TypeScript |
| `src/__tests__/audioUtils.e2e.test.js` | `src/__tests__/audioUtils.e2e.test.ts` | - Add type imports <br> - Update for TypeScript |
| `src/__tests__/geminiConversation.test.js` | `src/__tests__/geminiConversation.test.ts` | - Add type imports <br> - Update for TypeScript |
| `src/__tests__/speakerFormat.test.js` | `src/__tests__/speakerFormat.test.ts` | - Add type imports <br> - Update for TypeScript |
| `src/__tests__/syntaxHighlight.e2e.test.js` | `src/__tests__/syntaxHighlight.e2e.test.ts` | - Add type imports <br> - Update for TypeScript |

## Files to KEEP AS-IS (Minimal/No Changes)

### ✅ Electron Main Process
| File | Reason |
|------|--------|
| `src/index.js` | Electron main process logic - no UI framework dependencies |
| `src/preload.js` | Minimal preload script - no changes needed |

### ✅ Utility Functions (Pure JavaScript, No UI)
| File | Reason |
|------|--------|
| `src/audioUtils.js` | Audio processing utilities - pure functions |
| `src/config.js` | Configuration management - pure functions |
| `src/utils/gemini.js` | AI integration logic - Electron/Node.js specific |
| `src/utils/prompts.js` | System prompts - data structures |
| `src/utils/processNames.js` | Process naming utilities - pure functions |
| `src/utils/processRandomizer.js` | Stealth features - Electron APIs |
| `src/utils/renderer.js` | Renderer utilities - Electron IPC |
| `src/utils/stealthFeatures.js` | Anti-analysis measures - Electron APIs |
| `src/utils/window.js` | Window management - Electron APIs |
| `src/utils/windowResize.js` | Resize utilities - pure functions |

### ✅ Assets & Static Files
| Directory/File | Reason |
|----------------|--------|
| `src/assets/` | All static assets (CSS, JS libraries, images, icons) |
| `src/assets/lit-all-2.7.4.min.js` | Keep for backward compatibility if needed |
| `src/assets/lit-core-2.7.4.min.js` | Keep for backward compatibility if needed |

### ✅ Mocks & Tests Infrastructure
| File | Reason |
|------|--------|
| `src/__mocks__/electron.js` | Electron API mocking for tests |

### ✅ Build & Configuration
| File | Reason |
|------|--------|
| `forge.config.js` | Electron Forge configuration - unchanged |
| `entitlements.plist` | macOS code signing entitlements - unchanged |

### ✅ Documentation & Meta
| File | Reason |
|------|--------|
| `AGENTS.md` | Development guidelines - keep |
| `LICENSE` | License file - keep |
| `README.md` | Project documentation - keep |
| `docs/CODEBASE_ANALYSIS.md` | Analysis documentation - keep |

## Migration Impact Summary

### High Impact Changes (9 files)
- **Component Conversion**: 9 Lit components → React components
- **Complete rewrites** required with new patterns:
  - LitElement classes → React functional components
  - `html` template literals → JSX
  - `css` tagged templates → CSS modules or styled-components
  - Lit reactive properties → React useState/useEffect
  - Event handling → React event handlers

### Medium Impact Changes (3 files)
- **Configuration Updates**: package.json, vitest.config.js
- **Entry Point**: index.html React mounting

### Low Impact Changes (5 files)
- **Test File Extensions**: .js → .ts with type imports

### No Changes Required (20+ files)
- **Core Logic**: All utility functions and Electron-specific code
- **Assets**: Static files and libraries
- **Build Config**: Electron Forge and platform-specific files

## Implementation Strategy

### Phase 1: Setup (1-2 days)
1. Install React, TypeScript, and related dependencies
2. Create TypeScript configuration (`tsconfig.json`)
3. Set up React testing utilities
4. Update build configurations

### Phase 2: Component Migration (3-5 days)
1. Convert components one by one (start with simpler ones like HelpView)
2. Create TypeScript interfaces for props and state
3. Implement React patterns (hooks, context, etc.)
4. Update component communication patterns

### Phase 3: Integration & Testing (2-3 days)
1. Update main app component and routing
2. Convert remaining test files
3. Update index.html for React mounting
4. Test Electron integration

### Phase 4: Cleanup & Optimization (1-2 days)
1. Remove Lit dependencies
2. Clean up unused assets
3. Performance optimization
4. Final testing and documentation

## Key Technical Considerations

### TypeScript Configuration
- Target ES2020+ for Electron compatibility
- Include DOM types for renderer process
- Configure path mapping for clean imports
- Set up JSX support

### React Patterns to Adopt
- Functional components with hooks
- Custom hooks for Electron IPC communication
- Context API for global state management
- React.memo for performance optimization

### Testing Strategy
- Keep Vitest as test runner
- Add React Testing Library
- Update mocks for TypeScript
- Maintain Electron mocking approach

### Build Process
- Ensure Electron Forge works with TypeScript
- Update package scripts for type checking
- Configure source maps for debugging

## Benefits of Migration

1. **Type Safety**: Compile-time error catching
2. **Better DX**: Improved IDE support and refactoring
3. **Modern React**: Latest patterns and ecosystem
4. **Maintainability**: Easier to reason about and extend
5. **Performance**: React's optimization features
6. **Ecosystem**: Access to React libraries and tools

## Risks & Mitigations

### Risk: Breaking Electron Integration
**Mitigation**: Test IPC communication thoroughly, keep Electron APIs isolated in utilities

### Risk: Performance Regression
**Mitigation**: Profile before/after migration, optimize with React.memo and useMemo

### Risk: Complex Component Conversion
**Mitigation**: Convert components incrementally, maintain functionality tests

### Risk: TypeScript Learning Curve
**Mitigation**: Start with loose typing, gradually add strict types

## Success Criteria

- ✅ All components converted to React/TypeScript
- ✅ Application builds and runs without errors
- ✅ All existing functionality preserved
- ✅ Tests pass with TypeScript
- ✅ No performance regressions
- ✅ Type checking passes with strict mode enabled

## Next Steps

1. Create a new branch for the migration
2. Set up React/TypeScript dependencies
3. Create TypeScript configuration
4. Begin with a simple component conversion
5. Gradually migrate all components
6. Update tests and build process
7. Full integration testing
8. Performance validation