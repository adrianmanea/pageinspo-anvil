import path from "path"
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Root is now the specific page directory, passed via env var or handled dynamically
  root: process.env.PAGE_DIR || path.resolve(__dirname, 'src/projects/attio'),
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    // Output directory is based on the page name to keep it clean
    outDir: process.env.OUT_DIR || path.resolve(__dirname, 'dist/attio'),
    emptyOutDir: process.env.EMPTY_OUT_DIR === 'true',
    rollupOptions: {
      input: {
        main: path.resolve(process.env.PAGE_DIR || process.cwd(), 'index.html')
      }
    },
  },
})
