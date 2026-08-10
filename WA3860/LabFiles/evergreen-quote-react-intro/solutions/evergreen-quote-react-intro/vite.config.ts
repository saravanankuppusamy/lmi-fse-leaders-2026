import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // The lab VM's filesystem may not emit native file-change events, which can
  // stop Vite's hot reload from noticing your saves. Polling makes the dev
  // server reliably detect changes so Hot Module Replacement keeps working.
  server: {
    watch: { usePolling: true },
  },
});
