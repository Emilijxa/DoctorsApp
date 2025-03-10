import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Forces Vite to actively check for file changes
    },
    strictPort: true, // Prevents random port changes
    host: 'localhost', // Ensures Vite runs on the correct host
  },
});
