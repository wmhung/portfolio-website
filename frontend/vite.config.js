import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// During dev, proxy API calls to the Flask server so the frontend can call
// /api/... without worrying about CORS or ports.
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:5001",
    },
  },
});
