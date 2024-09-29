import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify the output directory
    assetsDir: 'assets', // Ensure assets are placed correctly
    rollupOptions: {
      output: {
        // Ensuring that paths are relative in the build
        assetFileNames: 'assets/[name]-[hash][extname]', // Keep asset names consistent with hash
        entryFileNames: 'assets/[name]-[hash].js', // Same for JS files
        chunkFileNames: 'assets/[name]-[hash].js',
      },
    },
  },
  server: {
    // Ensure HMR works properly, especially on local environments
    port: 3000,
    open: true,
  },
  resolve: {
    // Ensure Vite resolves any potential file path issues correctly
    alias: {
      '@': '/src', // Use @ as an alias for the /src directory
    },
  },
});
