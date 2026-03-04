# Notification Component Generation Prompt

## Context

You are a specialist Frontend Engineer focused on **Pixel-Perfect Component Reconstruction** using **React (JSX)** and **Tailwind CSS**. I will provide you with a "Component Extraction" of a raw HTML/JSX capture. This capture contains a **Notification Panel** that was captured in isolation.

## Your Objective

Build the **Notification Component** (e.g., `NotificationDemo.jsx`).

Because we only captured the notification panel itself, **you must also build a conceptual Header component** to contain the trigger (a notification bell button) that opens this panel. The header should contain skeleton-like links (placeholders) and the notification bell as the active trigger.

## Critical Anti-Hallucination Rules

### 1. Strict Content Matching (Notification Panel)

- **Zero Invention**: You are FORBIDDEN from adding sections, cards, text, or features inside the notification panel that are not in the capture.
- **Text Loyalty**: Every heading, paragraph, timestamp, and button text within the panel must match the source exactly.
- **Data Fidelity**: If the panel lists 3 notifications, you must render exactly those 3 notifications. Hardcode the data directly into the JSX for the initial render.

### 2. Conceptual Header & Trigger Requirement

- Since the capture only includes the panel, you **MUST** create a simple, horizontal header.
- The header should have a few skeleton/placeholder links (e.g., small gray rectangles or generic text like "Dashboard", "Settings").
- The header **MUST** contain a notification bell icon (`<Bell>` from `lucide-react`) acting as the trigger.
- The notification panel should be positioned relatively/absolutely to this trigger, simulating a realistic popover or dropdown behavior.

### 3. Component Composition

- **Pure HTML/Tailwind ONLY**: Do NOT use any component libraries (like Shadcn, Radix, or MUI). Use standard HTML elements (`div`, `button`, `ul`, `li`) styled exclusively with Tailwind CSS.
- **Structure**: You must generate `NotificationDemo.jsx` (or similarly named main component file), `index.html`, and `main.jsx`.
- **Icons**: Use **Lucide React** (`import { Bell, Check, X, Settings } from 'lucide-react'`) by default. Replace ALL custom/external SVGs from the capture with the closest matching Lucide React icon.

### 4. Responsive Layout & Sizing

- **Skin (Colors/Fonts/Radius)**: STRICTLY match the capture using arbitrary values for the panel.
  - ✅ `bg-[#FFFFFF]`, `rounded-[8px]`, `text-[#1F2937]`, `border-[#E5E7EB]`
- **Layout (Dimensions)**:
  - **Containers**: Ensure the panel has a maximum width and height, and handles overflow (scrolling) if there are many notifications.
  - ❌ **NEVER** use fixed `width` or `height` for text blocks.
  - ✅ Use **Padding** (`p-[16px]`) and **Gap** (`gap-[12px]`) to create size and structure.
  - **ROUNDING FRACTIONAL PIXELS**: **ALWAYS** round all physical dimensions to the nearest whole number.
  - **Positioning**: Use `relative` on the trigger container and `absolute` on the panel with appropriate `top`, `right`, `z-index`, and shadow classes to make it look like a dropdown.

### 5. Element Reconstruction Checklists

#### Dropdown Panel

| Property      | Example                                                                   |
| ------------- | ------------------------------------------------------------------------- |
| Shadow        | `shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)]` |
| Border        | `border border-[#E5E7EB]`                                                 |
| Background    | `bg-[#FFFFFF]`                                                            |
| Border radius | `rounded-[8px]`                                                           |
| Positioning   | `absolute top-[100%] right-0 mt-[8px] z-50`                               |

#### Items/Buttons

For EVERY button or interactive notification item, you MUST explicitly match:

| Property     | Example                                                                          |
| ------------ | -------------------------------------------------------------------------------- |
| Background   | `bg-transparent` + `hover:bg-[#F3F4F6]`                                          |
| Text color   | `text-[#111827]`                                                                 |
| Font info    | `text-[14px] font-[500]`                                                         |
| Padding      | `px-[16px] py-[12px]`                                                            |
| Hover States | **CRITICAL**: Replicate hover states exactly (`hover:bg-[...] hover:text-[...]`) |

## Output Format

You must generate **3 files** inside a specific folder structure: `src/projects/[project_name]/components/[ComponentName]/`.

### 1. `index.html`

Standard Vite entry HTML.

- Title: `[Component Name] - Acme`
- Script: `src="./main.jsx"`

### 2. `main.jsx`

Entry point to render the component.

- Imports `React`, `ReactDOM`
- Imports `./NotificationDemo`
- Imports `../../../../index.css`
- Renders `<NotificationDemo />` in `React.StrictMode` inside `#root`

### 3. `NotificationDemo.jsx`

The main React component containing the conceptual header and the notification panel logic.
Ensure the header is clean and the panel functions visually as a dropdown.

---

**Example Output:**

`src/projects/acme/components/NotificationHeader/index.html`:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Notification Header - Acme</title>
  </head>
  <body class="bg-[#F9FAFB] min-h-screen">
    <div id="root"></div>
    <script type="module" src="./main.jsx"></script>
  </body>
</html>
```

`src/projects/acme/components/NotificationHeader/main.jsx`:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import NotificationDemo from "./NotificationDemo";
import "../../../../index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotificationDemo />
  </React.StrictMode>,
);
```

`src/projects/acme/components/NotificationHeader/NotificationDemo.jsx`:

```jsx
import React, { useState } from "react";
import { Bell } from "lucide-react";

export default function NotificationDemo() {
  const [isOpen, setIsOpen] = useState(true); // Open by default for preview

  return (
    <div className="w-full">
      {/* Conceptual Header */}
      <header className="w-full h-[64px] bg-[#FFFFFF] border-b border-[#E5E7EB] px-[24px] flex items-center justify-between">
        <div className="flex items-center gap-[24px]">
          {/* Skeleton Logo/Links */}
          <div className="w-[100px] h-[24px] bg-[#E5E7EB] rounded-[4px]"></div>
          <div className="w-[60px] h-[16px] bg-[#F3F4F6] rounded-[2px] hidden md:block"></div>
          <div className="w-[60px] h-[16px] bg-[#F3F4F6] rounded-[2px] hidden md:block"></div>
        </div>

        {/* Trigger */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[40px] h-[40px] flex items-center justify-center rounded-full hover:bg-[#F3F4F6] transition-colors relative"
          >
            <Bell className="w-[20px] h-[20px] text-[#4B5563]" />
            {/* Unread badge example */}
            <span className="absolute top-[8px] right-[10px] w-[8px] h-[8px] bg-[#EF4444] rounded-full ring-2 ring-[#FFFFFF]"></span>
          </button>

          {/* Notification Panel */}
          {isOpen && (
            <div className="absolute right-0 top-[100%] mt-[8px] w-[380px] bg-[#FFFFFF] rounded-[12px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] border border-[#E5E7EB] z-50 overflow-hidden">
              {/* Precise recreation of the view inside this container */}
              {/* ... panel content extracted from capture ... */}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
```
