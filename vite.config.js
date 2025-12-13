import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // WAJIB untuk mobile / IP / emulator
    port: 5173,
  },
});
