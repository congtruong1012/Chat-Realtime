import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "vite-plugin-tailwind";
import tailwindConfig from "./tailwind.config";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwind({
      jit: false,
      autoprefixer: true,
      nesting: true,
      cssPath: path.resolve(__dirname, "src", "tailwind.css"),
      tailwind: tailwindConfig,
    }),
  ],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: [".."],
    },
  },
});
