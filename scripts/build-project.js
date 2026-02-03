
import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectName = process.argv[2];

if (!projectName) {
  console.error('Please specify a project name: npm run build:project <name>');
  process.exit(1);
}

const rootDir = path.resolve(__dirname, '..');
const customConfig = path.resolve(rootDir, `vite.config.${projectName}.js`);

// Special handling for attio due to single-file plugin limitations
if (projectName === 'attio') {
  console.log('Building attio pages dynamically...');

  const projectDir = path.resolve(rootDir, 'src/projects/attio');
  const distDir = path.resolve(rootDir, 'dist/attio');

  // Clear output directory once at the start
  if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
  }

  // Find all *Page.jsx files
  const files = fs.readdirSync(projectDir).filter(f => f.endsWith('Page.jsx'));

  for (const file of files) {
    const pageName = file.replace('.jsx', ''); // e.g. TasksEmptyPage
    const mountName = `gen-mount-${pageName}`;
    const htmlName = `gen-${pageName}`;

    console.log(`Building ${pageName}...`);

    // 1. Generate Mount File
    const mountContent = `import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from './${pageName}'
import '../../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)
`;
    const mountPath = path.resolve(projectDir, `${mountName}.jsx`);
    fs.writeFileSync(mountPath, mountContent);

    // 2. Generate HTML File
    const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pageName.replace('Page', '')} - PageInspo</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./${mountName}.jsx"></script>
  </body>
</html>`;
    const htmlPath = path.resolve(projectDir, `${htmlName}.html`);
    fs.writeFileSync(htmlPath, htmlContent);

    // 3. Build using temporary HTML
    const child = spawn('npx', ['vite', 'build', '-c', `vite.config.${projectName}.js`], {
      stdio: 'inherit',
      cwd: rootDir,
      shell: true,
      env: {
        ...process.env,
        PAGE: htmlName,
        EMPTY_OUT_DIR: 'false' // We cleared it manually at start
      }
    });

    await new Promise((resolve, reject) => {
      child.on('close', (code) => {
        if (code !== 0) reject(new Error(`Build failed for ${pageName}`));
        else resolve();
      });
    });

    // 4. Rename output file (gen-PageName.html -> PageName.html)
    const builtHtmlPath = path.resolve(distDir, `${htmlName}.html`);
    const targetHtmlPath = path.resolve(distDir, `${pageName}.html`);
    if (fs.existsSync(builtHtmlPath)) {
      fs.renameSync(builtHtmlPath, targetHtmlPath);
    } else {
      console.error(`Warning: Expected output file ${builtHtmlPath} not found.`);
    }

    // 5. Cleanup
    try {
      fs.unlinkSync(mountPath);
      fs.unlinkSync(htmlPath);
    } catch (e) {
      console.warn('Cleanup failed:', e);
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
