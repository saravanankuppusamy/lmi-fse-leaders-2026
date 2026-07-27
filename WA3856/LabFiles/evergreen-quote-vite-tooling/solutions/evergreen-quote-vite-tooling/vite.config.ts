import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Solution: a path alias maps "@" to the src/ folder. See https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
