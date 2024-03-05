import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: "@src", replacement: "./src" },
      { find: "@/components", replacement: "/src/Components" },
      { find: "@/pages", replacement: "/src/pages" },
      { find: "@/firebaseApp", replacement: "/src/firebase" },
    ],
  },
});
