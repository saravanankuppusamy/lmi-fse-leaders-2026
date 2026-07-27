import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite configuration. See https://vite.dev/config/
// In this lab you will add a path alias here.
export default defineConfig({
  plugins: [react()],
});
