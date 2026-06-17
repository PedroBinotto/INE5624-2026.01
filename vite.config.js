import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Plain Vite + React. The page markup lives in src/page-body.html and is
// imported as a raw string (?raw) by App.jsx, then rendered via html-react-parser.
export default defineConfig({
  plugins: [react()],
  server: { open: true },
});
