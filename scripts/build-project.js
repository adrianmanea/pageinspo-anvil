
import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectName = process.argv[2];

if (!projectName) {
  console.error('Please specify a project name: npm run build:project <name>');
  process.exit(1);
}

const projectRoot = path.resolve(__dirname, `../src/projects/${projectName}`);
const entryHtml = path.resolve(projectRoot, 'index.html');

console.log(`Building project: ${projectName}`);
console.log(`Entry: ${entryHtml}`);

try {
  await build({
    configFile: path.resolve(__dirname, '../vite.config.ts'),
    root: path.resolve(__dirname, '..'), // Keep root at project root to resolve /src alias
    build: {
      outDir: path.resolve(__dirname, `../dist/${projectName}`),
      emptyOutDir: true,
      rollupOptions: {
        input: entryHtml,
      },
    },
  });
  console.log(`Build complete! Output: dist/${projectName}`);
} catch (e) {
  console.error('Build failed:', e);
  process.exit(1);
}
