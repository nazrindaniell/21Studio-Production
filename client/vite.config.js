import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Listen on all addresses, including LAN and public addresses
    port: 5173, // You can change this if needed
    open: false, // Prevents opening the browser automatically
  },
});
