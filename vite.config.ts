import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//test

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves the site from a project subpath, so we need to
  // tell Vite to prefix built asset URLs with the repository name.
  // Without this, the page loads without styles or scripts when deployed.
  base: '/portfoliowebsite/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
