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
    emptyOutDir: process.env.EMPTY_OUT_DIR === 'true',
    rollupOptions: {
      input: process.env.PAGE ? {
        [process.env.PAGE]: path.resolve(__dirname, `src/projects/attio/${process.env.PAGE}.html`)
      } : {
        OnboardingStep1: path.resolve(__dirname, 'src/projects/attio/OnboardingStep1.html'),
        OnboardingStep2: path.resolve(__dirname, 'src/projects/attio/OnboardingStep2.html'),
        OnboardingStep3: path.resolve(__dirname, 'src/projects/attio/OnboardingStep3.html'),
      },
    },
  },
})
