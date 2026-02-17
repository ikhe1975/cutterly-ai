import { defineConfig } from 'vite';

export default defineConfig({
  // This allows GitHub Pages to see your site at https://yourname.github.io/cutterly-ai/
  base: './', 
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
  build: {
    outDir: 'dist',
  }
});
