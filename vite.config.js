import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Stok-prediction1/", // ✅ Fix GitHub Pages base URL
  plugins: [react()],
});
