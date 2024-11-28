import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/PortfolioProject/',
  plugins: [react(),
    viteStaticCopy({
      targets: [
        {
          src: '_redirects', // Archivo que creaste
          dest: '.',         // Colocarlo en la raíz de `dist`
        },
      ],
    }),
  ],
  build: {
    outDir: 'dist',  // Carpeta donde se generará el build
    sourcemap: false, // Desactiva los sourcemaps para producción
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
