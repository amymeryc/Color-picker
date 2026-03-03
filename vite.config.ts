import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // ESTA ES LA RUTA PARA GITHUB PAGES (Asegúrate de que sea el nombre exacto de tu repo)
  base: '/color-picker/', 
  
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // Si necesitas la API Key de Gemini, la definimos aquí directamente para el build
  define: {
    'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY),
  }
});
