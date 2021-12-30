import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import tailwind from 'vite-plugin-tailwind';
import tailwindConfig from './tailwind.config';
// import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwind({
      jit: false,
      autoprefixer: true,
      nesting: true,
      cssPath: path.resolve(__dirname, 'src', 'tailwind.css'),
      tailwind: tailwindConfig,
    }),
    // eslintPlugin(),
  ],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
});
