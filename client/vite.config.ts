import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { 
    port: 5173,
    host: '0.0.0.0', // Allow external connections (required for CodeSpaces)
    strictPort: true, // Fail if port is already in use
    hmr: process.env.CODESPACES
      ? {
          clientPort: 443, // 🔑 let Codespaces proxy HMR over HTTPS
        }
      : undefined,
    // Improve connection handling in cloud environments
    fs: {
      strict: false
    }
  }
});
