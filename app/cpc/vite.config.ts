import { defineConfig } from 'vite';
import type { Plugin, ViteDevServer } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import type { IncomingMessage, ServerResponse } from 'http';

const cspHeader = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://api.emailjs.com https://challenges.cloudflare.com",
  'frame-src https://challenges.cloudflare.com',
].join('; ');

// Custom Vite plugin to set Content-Security-Policy headers during development
const cspPlugin: Plugin = {
  name: 'csp-headers',
  apply: 'serve',
  configureServer(server: ViteDevServer) {
    return () => {
      server.middlewares.use(
        (_req: IncomingMessage, res: ServerResponse, next: () => void) => {
          res.setHeader('Content-Security-Policy', cspHeader);
          next();
        },
      );
    };
  },
};

export default defineConfig({
  plugins: [react(), tailwindcss(), cspPlugin],
  base: '/Convection-parameters-calculator/',
});
