
import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectName = process.argv[2];
const targetPageName = process.argv[3]; // Optional target page

if (!projectName) {
  console.error('Please specify a project name: npm run build:project <name> [targetPage]');
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');
const customConfig = path.resolve(rootDir, `vite.config.${projectName}.js`);

// Special handling for attio due to multi-page structure
if (projectName === 'attio') {
  console.log('Building attio pages (new structure)...');

  const pagesDir = path.resolve(rootDir, 'src/projects/attio/pages');
  const distDir = path.resolve(rootDir, 'dist/attio');

  // Clear output directory once at the start ONLY if we are building the full project
  if (!targetPageName) {
    if (fs.existsSync(distDir)) {
      fs.rmSync(distDir, { recursive: true, force: true });
    }
    fs.mkdirSync(distDir, { recursive: true });
  } else {
    // Make sure the top level dir exists
    if (!fs.existsSync(distDir)) fs.mkdirSync(distDir, { recursive: true });
  }

  // Find all page directories
  if (!fs.existsSync(pagesDir)) {
    console.error(`Error: Pages directory not found at ${pagesDir}`);
    process.exit(1);
  }

  let pages = fs.readdirSync(pagesDir).filter(f => {
    return fs.statSync(path.join(pagesDir, f)).isDirectory();
  });

  if (targetPageName) {
    if (!pages.includes(targetPageName)) {
      console.error(`Error: Page '${targetPageName}' not found in ${pagesDir}`);
      process.exit(1);
    }
    pages = [targetPageName];
  }

  for (const pageName of pages) {
    console.log(`\nBuilding folder: ${pageName}...`);

    const pageDir = path.resolve(pagesDir, pageName);
    const pageDistDir = path.resolve(distDir, pageName);

    // Find all .html files in the page directory
    const htmlFiles = fs.readdirSync(pageDir).filter(f => f.endsWith('.html'));

    if (htmlFiles.length === 0) {
      console.warn(`Warning: No HTML files found in ${pageName}, skipping...`);
      continue;
    }

    for (let i = 0; i < htmlFiles.length; i++) {
      const htmlFile = htmlFiles[i];
      console.log(`  -> Building entry: ${htmlFile}`);

      const child = spawn('npx', ['vite', 'build', '-c', `vite.config.${projectName}.js`], {
        stdio: 'inherit',
        cwd: rootDir,
        shell: true,
        env: {
          ...process.env,
          PAGE_DIR: pageDir,
          OUT_DIR: pageDistDir,
          HTML_FILE: path.resolve(pageDir, htmlFile),
          EMPTY_OUT_DIR: i === 0 ? 'true' : 'false' // Only clear the dist folder on the first build
        }
      });

      await new Promise((resolve, reject) => {
        child.on('close', (code) => {
          if (code !== 0) reject(new Error(`Build failed for ${pageName}/${htmlFile}`));
          else resolve();
        });
      });
    }
  }

  console.log('Attio build complete!');
  process.exit(0);
}

// 1. Check for custom config and delegate if found (Generic)
if (fs.existsSync(customConfig)) {
  console.log(`Found custom config: vite.config.${projectName}.js`);
  console.log(`Delegating to vite build...`);

  const child = spawn('npx', ['vite', 'build', '-c', `vite.config.${projectName}.js`], {
    stdio: 'inherit',
    cwd: rootDir,
    shell: true
  });

  child.on('close', (code) => {
    process.exit(code);
  });
} else {
  // 2. Fallback to generic build logic
  const projectRoot = path.resolve(__dirname, `../src/projects/${projectName}`);
  const entryHtml = path.resolve(projectRoot, 'index.html');

  if (!fs.existsSync(entryHtml)) {
    console.error(`Error: Entry file not found at ${entryHtml}`);
    console.error(`If this project uses a custom structure, please create vite.config.${projectName}.js`);
    process.exit(1);
  }

  console.log(`Building project: ${projectName} (Standard Mode)`);
  console.log(`Entry: ${entryHtml}`);
  console.log(`Config: vite.config.js`);

  try {
    await build({
      configFile: path.resolve(__dirname, '../vite.config.js'),
      root: rootDir,
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
}
