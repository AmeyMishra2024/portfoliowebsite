import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//test

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use root-relative asset paths so the site works on the custom domain.
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
