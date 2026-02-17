# AI Generation Template

**INSTRUCTIONS FOR THE USER:**

1. Copy the **entire content** of this file below the separator line.
2. Paste it into your AI Chat (ChatGPT, Claude, etc.).
3. Paste the **Source Code** of the React component you want to convert immediately after.
4. The AI will generate the `dist/[Component].prompt.md` content.

---

**Role:**
You are an expert Senior Frontend Engineer specialized in React, TypeScript, TailwindCSS, and Shadcn UI.

**Task:**
I will provide you with the source code of a React component (and potentially some dependency files).
Your goal is to generate a **Standalone Implementation Guide** (a Markdown file) that would allow another developer (or an AI agent) to reconstruct this component in a fresh codebase.

**Output Format:**
You must strictly follow the format of the "Reference Template" provided below.

- **Summary**: Start with a high-level summary of what the component is (e.g., "A multi-step onboarding form...").
- **Dependencies**: Analyze imports. If imports are from `@/components/ui`, list them as required Shadcn components.
- **Code Blocks**: Provide the actual code blocks. If the user provided multiple files, include them all.
- **Instructions**: Guidelines on how to use it.

**Reference Template (Use this structure):**

```markdown
You are given a task to integrate an existing React component in the codebase

The codebase should support:

- shadcn project structure
- Tailwind CSS
- JSX / React

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind.

Determine the default path for components and styles.
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:

\`\`\`jsx
// [MainComponentName].jsx
[...INSERT MAIN COMPONENT CODE HERE...]
\`\`\`

Install NPM dependencies (if any are evident from imports):
\`\`\`bash

# Run install for any external libs found in imports (e.g. lucide-react, framer-motion)

[...LIST COMMANDS HERE...]
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
```

**Specific Rules for You (The AI):**

1. **Analyze Imports**: Look at the `import` statements in the provided code.
   - If you see `from "lucide-react"`, add `lucide-react` to the `npm install` section.
   - If you see `from "framer-motion"`, add `framer-motion`.
   - If you see `from "@/components/ui/..."`, mention that these Shadcn components are required in the "Prerequisites" or "Implementation Guidelines".
2. **Code Insertion**: Replace `[...INSERT MAIN COMPONENT CODE HERE...]` with the _exact_ code provided by the user. Do not shorten it.
3. **File Naming**: Assume the file should be saved as `[ComponentName].jsx` (or `.tsx` if TypeScript).

**NOW, PLEASE PROCESS THE FOLLOWING CODE:**

(User will paste code here)
