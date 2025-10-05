/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        include: ['src/__tests__/**/*.test.{js,ts,tsx}'],
        globals: true,
        setupFiles: ['./src/__tests__/setup.ts'],
        coverage: {
            reporter: ['text'],
        },
    },
    resolve: {
        alias: {
            electron: path.resolve(__dirname, 'src/__mocks__/electron.js'),
        },
    },
});
