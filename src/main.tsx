import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import './index.css'; // Global styles

// Set up IPC access for React components
(window as any).electron = {
    ipcRenderer: (window as any).require('electron').ipcRenderer,
};

const container = document.getElementById('root');
if (!container) throw new Error('Root element not found');

const root = createRoot(container);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
