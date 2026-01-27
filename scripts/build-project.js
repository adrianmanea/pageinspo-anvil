
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
  console.log('Building attio pages sequentially...');
  const pages = ['OnboardingStep1', 'OnboardingStep2', 'OnboardingStep3'];

  for (const page of pages) {
    console.log(`Building ${page}...`);
    // On Windows, setting env var in spawn needs shell option or cross-env, 
    // but passing it in `env` object is cleaner.
    const child = spawn('npx', ['vite', 'build', '-c', `vite.config.${projectName}.js`], {
      stdio: 'inherit',
      cwd: rootDir,
      shell: true,
      env: { ...process.env, PAGE: page }
    });

    await new Promise((resolve, reject) => {
      child.on('close', (code) => {
        if (code !== 0) reject(new Error(`Build failed for ${page}`));
        else resolve();
      });
    });
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
