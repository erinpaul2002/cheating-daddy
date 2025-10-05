"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useKeyboardShortcuts = void 0;
const react_1 = require("react");
const useKeyboardShortcuts = (shortcuts, deps = []) => {
    (0, react_1.useEffect)(() => {
        const handleKeydown = (event) => {
            const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
            const ctrlOrCmd = isMac ? event.metaKey : event.ctrlKey;
            // Check for registered shortcuts
            Object.entries(shortcuts).forEach(([shortcut, handler]) => {
                const [modifier, key] = shortcut.split('+');
                const modifierPressed = modifier === 'cmd' ? event.metaKey : modifier === 'ctrl' ? event.ctrlKey : modifier === 'alt' ? event.altKey : false;
                if (modifierPressed && event.key.toLowerCase() === key.toLowerCase()) {
                    event.preventDefault();
                    handler();
                }
            });
        };
        document.addEventListener('keydown', handleKeydown);
        return () => document.removeEventListener('keydown', handleKeydown);
    }, deps);
};
exports.useKeyboardShortcuts = useKeyboardShortcuts;
