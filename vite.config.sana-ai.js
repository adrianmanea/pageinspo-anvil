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
  root: process.env.PAGE_DIR || path.resolve(__dirname, 'src/projects/sana-ai'),
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: process.env.OUT_DIR || path.resolve(__dirname, 'dist/sana-ai'),
    emptyOutDir: process.env.EMPTY_OUT_DIR === 'true',
    rollupOptions: {
      input: {
        main: process.env.HTML_FILE || path.resolve(process.env.PAGE_DIR || process.cwd(), 'index.html')
      }
    },
  },
})
