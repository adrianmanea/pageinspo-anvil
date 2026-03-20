import fs from 'fs';
import path from 'path';

const srcDir = 'c:\\Users\\adria\\code\\pageinspo-anvil\\src\\projects\\sana-ai\\pages\\AppShell';
const destPath = 'c:\\Users\\adria\\code\\pageinspo-anvil\\dist\\AppShell.prompt.md';

const pageCode = fs.readFileSync(path.join(srcDir, 'Page.jsx'), 'utf-8');
const meetCode = fs.readFileSync(path.join(srcDir, 'MeetingsPanel.jsx'), 'utf-8');
const moreCode = fs.readFileSync(path.join(srcDir, 'MorePopover.jsx'), 'utf-8');
const setCode = fs.readFileSync(path.join(srcDir, 'SettingsPopover.jsx'), 'utf-8');

const combinedCode = `
\`\`\`jsx
// Page.jsx
${pageCode}
\`\`\`

\`\`\`jsx
// MeetingsPanel.jsx
${meetCode}
\`\`\`

\`\`\`jsx
// MorePopover.jsx
${moreCode}
\`\`\`

\`\`\`jsx
// SettingsPopover.jsx
${setCode}
\`\`\`
`.trim();

const markdown = `
A multi-component Application Shell that includes a navigation sidebar, settings and an extension popovers, and responsive layout handling for mobile and desktop views.

You are given a task to integrate an existing React component in the codebase

The codebase should support:

- shadcn project structure
- Tailwind CSS
- JSX / React

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind.

Determine the default path for components and styles.
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:

${combinedCode}

Install NPM dependencies (if any are evident from imports):
\`\`\`bash

# Run install for any external libs found in imports (e.g. lucide-react, framer-motion)
npm install lucide-react
\`\`\`

Implementation Guidelines

1.  Analyze the component structure and identify all required dependencies
2.  Review the component's arguments and state
3.  Identify any required context providers or hooks and install them
4.  Questions to Ask

- What data/props will be passed to this component?
- Are there any specific state management requirements?
- Are there any required assets (images, icons, etc.)?
- What is the expected responsive behavior?
- What is the best place to use this component in the app?

Steps to integrate:

1.  Copy paste all the code above in the correct directories
2.  Install external dependencies
3.  Fill image assets with Unsplash stock images you know exist
4.  Use lucide-react icons for svgs or logos if component requires them
`.trim();

fs.mkdirSync(path.dirname(destPath), { recursive: true });
fs.writeFileSync(destPath, markdown);
console.log('Successfully generated dist/AppShell.prompt.md');
