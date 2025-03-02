import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Stock Prediction project
export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/sachink1101/Stok-prediction1/', // GitHub repository reference
});
