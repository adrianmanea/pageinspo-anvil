import { build } from 'vite';
import { resolve, join, basename, extname, dirname } from 'path';
import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from "vite-plugin-singlefile";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectName = process.argv[2];

if (!projectName) {
  console.error('Usage: node scripts/build-library.js <project-name>');
  process.exit(1);
}

const projectRoot = resolve(__dirname, `../src/projects/${projectName}`);
const distDir = resolve(__dirname, `../dist/${projectName}`);

console.log(`Scanning for HTML entries in: ${projectRoot}`);

try {
  // Find entry files
  const files = readdirSync(projectRoot);
  const entries = {};

  files.forEach(file => {
    // Look for any .html file (excluding maybe index.html if we only want sub-pages, but let's include all for flexibility)
    if (file.endsWith('.html')) {
      const name = basename(file, '.html');
      entries[name] = join(projectRoot, file);
    }
  });

  if (Object.keys(entries).length === 0) {
    console.error('No .html match found.');
    process.exit(1);
  }

  console.log('Found entries:', entries);

  // Build each entry separately to support single-file inlining
  for (const [name, path] of Object.entries(entries)) {
    console.log(`\nBuilding ${name}...`);
    await build({
      configFile: false,
      plugins: [react(), viteSingleFile()],
      base: './',
      root: projectRoot,
      resolve: {
        alias: {
          "@": resolve(__dirname, "../src"),
        },
      },
      build: {
        outDir: distDir,
        emptyOutDir: false, // Don't clear dist on subsequent builds
        rollupOptions: {
          input: { [name]: path },
        }
      }
    });
  }
  
  console.log(`\nBuild complete! Assets in dist/${projectName}`);

} catch (e) {
  console.error('Build error:', e);
  process.exit(1);
}
