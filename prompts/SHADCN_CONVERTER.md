# Shadcn/UI Conversion Prompt

## Context

You are a **Senior Frontend Engineer** and **Design System Specialist**. I will provide you with a "Raw Implementation" of a React page (source file) that uses **arbitrary Tailwind values** (e.g., `w-[275px]`, `bg-[#FBFBFB]`) and raw HTML elements.

## Your Objective

**Create a BRAND NEW React component file** (e.g., if input is `Page.jsx`, output `PageShadcn.jsx`) that recreates the input page using **Clean, Idiomatic Shadcn/UI**.

**DO NOT refactor the existing file in place.** You are building a fresh implementation from scratch, using the original file ONLY as a visual and functional reference.

## Critical Rules

### 1. Functional Integrity (CRITICAL)

- **Replicate Logic**: You must replicate the application logic, `useState`, `useEffect`, and event handlers (e.g., `toggleSection`, `isSidebarOpen`) from the source file into your new file.
- **State Integration**: Wire up the new Shadcn components to this replicated state.
  - Example: A custom `button` triggering a dropdown -> `<DropdownMenu><DropdownMenuTrigger>...</DropdownMenuTrigger>...</DropdownMenu>`
  - Example: A controlled input -> `<Input value={val} onChange={handler} />`

### 2. Semantic Token Mapping (The Golden Rule)

**NEVER** use arbitrary color values (hex/rgb) or arbitrary spacing. You must map them to the closest semantic variables provided by Shadcn/UI.

| Raw Value Example                          | Shadcn Token / Class                      | Logic                                                                                                       |
| ------------------------------------------ | ----------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `bg-white`, `bg-[#FBFBFB]`, `bg-[#1a1d21]` | `bg-background`, `bg-card`, `bg-muted/40` | Main backgrounds map to `background`; panels/sidebars often map to `muted` or `card`.                       |
| `text-[#242529]`, `text-[#000]`            | `text-foreground`                         | Primary text.                                                                                               |
| `text-[#505154]`, `text-[#5C5E63]`         | `text-muted-foreground`                   | Secondary/Help text.                                                                                        |
| `border-[#EEEFF1]`, `border-[#27282B]`     | `border-border`                           | All structural borders.                                                                                     |
| `bg-[#266DF0]` (Brand Blue)                | `bg-primary text-primary-foreground`      | Main action color maps to `primary`.                                                                        |
| `bg-[#F97514]` (Warning/Orange)            | `bg-orange-600` or `bg-destructive`       | **Prefer** `primary` if it acts as a brand accent, otherwise use a semantic utility like `text-orange-600`. |
| `h-[28px]`, `px-[12px]`                    | `h-7`, `px-3`                             | Map pixel values to the closest multiple of 4 (`0.25rem`).                                                  |
| `rounded-[8px]`                            | `rounded-md`                              | Standard radius token.                                                                                      |
| `text-[14px]`                              | `text-sm`                                 | Standard typography token.                                                                                  |

### 3. Component Replacement Strategy

Replace raw HTML patterns with Shadcn components.

- **Buttons**:
  - `button` with `bg-transparent` -> `<Button variant="ghost">`
  - `button` with `border` -> `<Button variant="outline">`
  - `button` with `bg-brand` -> `<Button>` (default)
  - `button` with `h-[28px]` -> `<Button size="sm">`
  - **Note**: If a button has an icon and text, use the standard pattern: `<Button><Icon className="mr-2 h-4 w-4" /> Label</Button>`

- **Inputs**: `input` -> `<Input />`
- **Cards/Containers**: `div` with border/shadow -> `<Card>`, `<CardHeader>`, `<CardContent>`
- **Dropdowns**: Custom absolute positioned divs -> `<DropdownMenu>`
- **Avatars**: `div` with initials -> `<Avatar><AvatarFallback>CN</AvatarFallback></Avatar>`
- **Separators**: `div` with `h-[1px]` -> `<Separator />`
- **Badges/Tags**: Small rounded divs -> `<Badge variant="secondary" />` or `<div className="px-2 py-1 rounded-full bg-muted text-xs">` if simple tag.

### 4. Layout and Structure

- **Sidebar**: If the provided code has a sidebar, attempt to use a standard formatting. `aside` with `border-r border-border bg-muted/10 w-64`.
- **Top Navigation**: Use `header` with `border-b border-border bg-background/95 backdrop-blur`.

### 5. Iconography

- Continue using `lucide-react`.
- Ensure strict sizing: `w-4 h-4` (16px) is standard for button icons. `w-5 h-5` (20px) for navigation.

## Handling "Custom" Brand Elements

If the source has a very specific brand header or logo that cannot be purely "shadcn-ified" (like a custom SVG logo), you may keep the SVG but ensure its container uses semantic coloring (e.g., `text-primary`).

## Output Format

Return the **FULL NEW FILE CONTENT**:

```jsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Bell, CheckSquare, Search } from "lucide-react";

export default function NewPageShadcn() {
  // Logic replicated from original file
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex h-screen bg-background text-foreground">
      {/* Recreated Sidebar */}
      <aside
        className={`border-r bg-muted/30 transition-all ${isOpen ? "w-64" : "w-16"}`}
      >
        <div className="p-4 border-b flex justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary text-primary-foreground flex items-center justify-center font-bold">
              A
            </div>
            {isOpen && <span className="font-semibold">Acme Inc</span>}
          </div>
        </div>
        <nav className="p-2 space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={() => {}}
          >
            <CheckSquare className="mr-2 h-4 w-4" />
            {isOpen && "Tasks"}
          </Button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <header className="h-14 border-b flex items-center px-4 justify-between">
          <h1 className="font-semibold text-lg">Page Title</h1>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="ghost">
              <Bell className="h-4 w-4" />
            </Button>
          </div>
        </header>

        <div className="flex-1 p-8">{/* Content */}</div>
      </main>
    </div>
  );
}
```
