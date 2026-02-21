# Generic Page Generation Prompt

## Context

You are a specialist Frontend Engineer focused on **Pixel-Perfect Page Reconstruction** using **React (JSX)** and **Tailwind CSS**. I will provide you with a "Page Extraction" of a raw HTML/JSX capture. This file contains a generic web page, which could be a landing page, settings screen, list view, or any other web interface.

## Your Objective

Build the **Page Component** (e.g., `Page.jsx`).

## Critical Anti-Hallucination Rules

### 1. Strict Content Matching

- **Zero Invention**: You are FORBIDDEN from adding sections, cards, text, or features that are not in the capture.
- **Text Loyalty**: Every heading, paragraph, label, table value, and button text must match the source exactly.
- **Data Fidelity**: If a table lists 5 users, you must render exactly those 5 users. Hardcode the data directly into the JSX.

### 2. Component Composition

- **Pure HTML/Tailwind ONLY**: Do NOT use any component libraries (like Shadcn, Radix, or MUI). Use standard HTML elements (`div`, `table`, `form`, `input`, `button`) styled exclusively with Tailwind CSS.
- **Structure**: You must generate `Page.jsx`, `index.html`, and `main.jsx`.
- **Icons**: Use **Lucide React** (`import { User, Settings } from 'lucide-react'`) by default. If a specific icon style (e.g., solid/filled brand icons) is required to equal the capture and Lucide doesn't fit, you may use `react-icons` (e.g., `import { FaGoogle } from 'react-icons/fa'`).

### 3. Responsive Layout & Sizing

- **Skin (Colors/Fonts/Radius)**: STRICTLY match the capture using arbitrary values.
  - ✅ `bg-[#F9FAFB]`, `rounded-[12px]`, `text-[#1F2937]`, `border-[#E5E7EB]`
- **Layout (Dimensions)**:
  - **Containers**: Use `w-full`, `max-w-[...]`, `min-h-[...]` to ensure responsiveness.
  - ❌ **NEVER** use fixed `width` or `height` for main layout containers or text blocks (e.g., avoid `w-[1200px]`, `h-[50px]`). This causes text clipping on mobile screens.
  - ✅ Use `min-h-[XXpx]` instead of `h-[XXpx]` for containers to allow text wrapping.
  - ✅ Use **Padding** (`p-[24px]`) and **Gap** (`gap-[16px]`) to create size and structure.

### 4. Element Reconstruction Checklists

#### Buttons

For EVERY button, you MUST explicitly match:

| Property      | Example                                              |
| ------------- | ---------------------------------------------------- |
| Background    | `bg-[#1F2937]` + `hover:bg-[#374151]`                |
| Text color    | `text-[#FFFFFF]`                                     |
| Font info     | `text-[14px] font-[500]`                             |
| Padding       | `px-[16px] py-[10px]`                                |
| Border radius | `rounded-[6px]`                                      |
| Icon size     | `w-[16px] h-[16px]`                                  |
| Shadow        | `shadow-sm` or `shadow-[0_1px_2px_rgba(0,0,0,0.05)]` |

#### Inputs & Forms (If present)

For EVERY input field, you MUST explicitly match:

| Property    | Example                                       |
| ----------- | --------------------------------------------- |
| Background  | `bg-[#FFFFFF]` or `bg-[#F9FAFB]`              |
| Border      | `border border-[#D1D5DB]`                     |
| Focus State | `focus:border-[#2563EB] focus:ring-[#2563EB]` |
| Text color  | `text-[#111827]`                              |
| Placeholder | `placeholder:text-[#9CA3AF]`                  |
| Dimensions  | `h-[40px]` (if needed) and `px-[12px]`        |

### 5. Layout & Spacing

- **Alignment**: Identify the alignment (centered, full-width, grid) from the capture and replicate it.
- **Spacing**: Match exact `gap` or `space-y`/`space-x` values between elements.

## Output Format

You must generate **3 files** inside a specific folder structure: `src/projects/[project_name]/pages/[PageName]/`.

### 1. `index.html`

Standard Vite entry HTML.

- Title: `[Page Name] - PageInspo`
- Script: `src="./main.jsx"`

### 2. `main.jsx`

Entry point to render the page.

- Imports `React`, `ReactDOM`
- Imports `./Page`
- Imports `../../../../index.css` (This path is correct for the depth: `projects/[project]/pages/[Page]`)
- Renders `<Page />` in `React.StrictMode` inside `#root`

### 3. `Page.jsx`

The main React component containing the page implementation.

---

**Example Output:**

`src/projects/acme/pages/Dashboard/index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Dashboard - PageInspo</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./main.jsx"></script>
  </body>
</html>
```

`src/projects/acme/pages/Dashboard/main.jsx`:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import Page from "./Page";
import "../../../../index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
);
```

`src/projects/acme/pages/Dashboard/Page.jsx`:

```jsx
import React from "react";
import { Plus, Search, MoreHorizontal } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] p-[24px]">
      <div className="max-w-[1200px] mx-auto">
        {/* Precise recreation of the view */}
        <h1 className="text-[24px] font-[700] text-[#111827] mb-[24px]">
          Page Title
        </h1>
        {/* ... content ... */}
      </div>
    </div>
  );
}
```
