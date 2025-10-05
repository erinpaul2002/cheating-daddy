import React, { useState, useEffect } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { CheatingDaddyApp } from './app/CheatingDaddyApp';

export const App: React.FC = () => {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        initializeApp();
    }, []);

    const initializeApp = async () => {
        // Initialize IPC handlers and app state
        // This will be expanded when we integrate with the existing Electron setup
        setIsInitialized(true);
    };

    if (!isInitialized) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <ErrorBoundary>
            <CheatingDaddyApp />
        </ErrorBoundary>
    );
};
