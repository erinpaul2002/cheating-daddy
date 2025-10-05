import { useEffect } from 'react';

export const useKeyboardShortcuts = (shortcuts: Record<string, () => void>, deps: any[] = []) => {
    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
            const ctrlOrCmd = isMac ? event.metaKey : event.ctrlKey;

            // Check for registered shortcuts
            Object.entries(shortcuts).forEach(([shortcut, handler]) => {
                const [modifier, key] = shortcut.split('+');
                const modifierPressed =
                    modifier === 'cmd' ? event.metaKey : modifier === 'ctrl' ? event.ctrlKey : modifier === 'alt' ? event.altKey : false;

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
