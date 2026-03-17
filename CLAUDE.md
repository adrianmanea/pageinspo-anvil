# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

PageInspo Anvil is a workbench for developing standalone React page components that get built as self-contained single HTML files (via `vite-plugin-singlefile`) for embedding elsewhere. Each page is a visual replica of a real SaaS product's UI.

## Commands

- **Dev server**: `pnpm dev` — runs at http://localhost:5173
- **Lint**: `pnpm lint`
- **Build all pages for a project**: `pnpm build:project <project-name>` (e.g., `pnpm build:project attio`)
- **Build a single page**: `pnpm build:project <project-name> <PageFolder>` (e.g., `pnpm build:project folk SettingsBilling`)
- **Build as library** (flat HTML structure): `pnpm build:lib <project-name>`

No test framework is configured.

## Architecture

### Multi-project, multi-page structure

Each project lives in `src/projects/<project>/pages/`. Each page folder contains:
- `Page.jsx` — the React component (the actual UI)
- `main.jsx` — standalone mount entry that renders `Page` into `#root` with global CSS
- An `.html` file — entry point for Vite builds

The build system (`scripts/build-project.js`) iterates over page folders, builds each one separately using the project's Vite config (`vite.config.<project>.js`), and outputs self-contained single-file HTML to `dist/<project>/<PageName>/`.

### Dashboard app

`src/App.jsx` is a separate React Router app that serves as a dev dashboard for previewing pages. It has its own routes defined inline. The Home page (`src/pages/Home.jsx`) lists projects and links. When adding new pages to preview in dev, add routes to `App.jsx` and entries to the `projects` array in `Home.jsx`.

### Styling

- Tailwind CSS 3 with `@` path alias resolving to `src/`
- `src/lib/utils.js` exports `cn()` (clsx + tailwind-merge)
- Radix UI primitives for dialogs, dropdowns, selects, switches, etc.
- `lucide-react` for icons

### Adding a new project

1. Create `src/projects/<name>/pages/` with page folders
2. Copy an existing `vite.config.<project>.js` and update paths
3. Each page folder needs `Page.jsx`, `main.jsx`, and an `.html` file
