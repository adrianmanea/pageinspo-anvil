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
  root: path.resolve(__dirname, 'src/projects/attio'),
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: path.resolve(__dirname, 'dist/attio'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        OnboardingStep1Page: path.resolve(__dirname, 'src/projects/attio/OnboardingStep1Page.html'),
      },
    },
  },
})
