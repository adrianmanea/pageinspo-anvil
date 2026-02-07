const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '../src/projects/attio');
const pagesRoot = path.resolve(projectRoot, 'pages');

if (!fs.existsSync(pagesRoot)) {
    fs.mkdirSync(pagesRoot);
}

const files = fs.readdirSync(projectRoot);

const pageFiles = files.filter(f => f.endsWith('Page.jsx') || f.endsWith('PageShadcn.jsx'));

pageFiles.forEach(file => {
    let folderName = file.replace('.jsx', '');
    // Clean up "Page" from the name for cleaner URLs, but preserve "Shadcn" if present
    if (folderName.endsWith('Page')) {
        folderName = folderName.slice(0, -4);
    } else if (folderName.includes('PageShadcn')) {
        folderName = folderName.replace('PageShadcn', 'Shadcn');
    }

    const pageDir = path.resolve(pagesRoot, folderName);
    if (!fs.existsSync(pageDir)) {
        fs.mkdirSync(pageDir);
    }

    // 1. Move and Rename Component
    const oldPath = path.resolve(projectRoot, file);
    const newPath = path.resolve(pageDir, 'Page.jsx');
    fs.renameSync(oldPath, newPath);

    // 2. Create main.jsx
    const mainContent = `import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from './Page'
import '../../../../index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)
`;
    fs.writeFileSync(path.resolve(pageDir, 'main.jsx'), mainContent);

    // 3. Create index.html
    const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${folderName} - PageInspo</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./main.jsx"></script>
  </body>
</html>`;
    fs.writeFileSync(path.resolve(pageDir, 'index.html'), htmlContent);

    console.log(`Migrated ${file} -> pages/${folderName}`);
});

// Cleanup old artifacts
files.forEach(file => {
    if (file.endsWith('.html') || (file.startsWith('mount') && file.endsWith('.jsx')) || file === 'main.jsx') {
        // Only delete main.jsx if it's the one in the root, not the new ones (though we are iterating root files so it's fine)
        const filePath = path.resolve(projectRoot, file);
        fs.unlinkSync(filePath);
        console.log(`Deleted ${file}`);
    }
});
