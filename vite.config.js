import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["atticus-subtorrid-gaugeably.ngrok-free.dev"],
  },
  base: "/",
  plugins: [react(), tailwindcss()],
});
