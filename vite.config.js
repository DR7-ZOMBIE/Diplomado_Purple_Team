// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],

  server: {
    host: true,           // 0.0.0.0  → acepta conexiones externas
    port: 5173,
    strictPort: true,     // evita que Vite cambie de puerto si está ocupado

    /**  Permite *cualquier* dominio externo mientras desarrollas  */
    allowedHosts: 'all',

    /* --- Versión más restrictiva y segura ---
    allowedHosts: [
      '.ngrok-free.app',  // incluye cualquier subdominio dinámico gratis
      '.ngrok.app'        // subdominios de planes pagos
    ],
    */
  },

  preview: {
    host: true,
    port: 4173,
    allowedHosts: 'all'
  }
});
