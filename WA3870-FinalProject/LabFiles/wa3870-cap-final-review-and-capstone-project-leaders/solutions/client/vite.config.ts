import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// (provided - Day 2, REPLACES client/vite.config.ts)
// The proxy forwards every /api request from the dev server (and from
// `npm run preview`) to the Evergreen Quote API on port 3000. The client
// keeps using relative URLs; no code changes and no cross-origin setup.
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  preview: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
