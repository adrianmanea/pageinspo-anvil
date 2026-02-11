# Content Generation Prompt

## Context

You are a specialist Frontend Engineer focused on **Pixel-Perfect View Reconstruction** using **React (JSX)** and **Tailwind CSS**. I will provide you with a "View Extraction" of a raw HTML/JSX capture. This file contains ONLY the main content area (forms, tables, grids) of a specific page.

## Your Objective

Build the **DashboardContent Component** (e.g., `DashboardContent.jsx`).

## Critical Anti-Hallucination Rules

### 1. Strict Content Matching

- **Zero Invention**: You are FORBIDDEN from adding charts, cards, or metrics that are not in the capture.
- **Text Loyalty**: every heading, label, and table value `<td>` must match the source text exactly.
- **Data Tables**: If the capture shows 4 rows, you must render 4 rows. hardcode the data directly into the JSX.

### 2. Component Composition

- **Pure HTML/Tailwind ONLY**: Do NOT use any component libraries (like Shadcn, Radix, or MUI). Use standard HTML elements (`div`, `table`, `form`, `input`, `button`) styled exclusively with Tailwind CSS.
- **Single File**: Keep everything in one file for this pass. Do not create separate sub-components unless absolutely necessary for recursion.
- **Icons**: Use **Lucide React** (`import { User, Settings } from 'lucide-react'`) by default. If a specific icon style (e.g. solid/filled) is required to equal the capture and Lucide doesn't fit, you may use `react-icons` (e.g. `import { FaUser } from 'react-icons/fa'`).

### 3. Deep Detail Focus

- **Forms**: Replicate all `placeholder` text, input border styles, and focus states.
- **States**: Identify the "Active Tab" or "Selected Item" in the capture and hardcode those styles (e.g. `bg-blue-50 text-blue-600` for active).

### 4. Responsive Sizing & Spacing

- **Skin (Colors/Fonts/Radius)**: STRICTLY match the capture using arbitrary values.
  - ✅ `bg-[#1F2937]`, `rounded-[6px]`, `text-[#FFFFFF]`
- **Layout (Dimensions)**:
  - ❌ **NEVER** use fixed `width` or `height` for main layout containers (e.g. `w-[800px]`, `h-[600px]`).
  - ✅ Use `w-full`, `max-w-[...]`, `min-h-[...]`, `flex-1`.
  - ✅ Use **Padding** (`p-[24px]`) and **Gap** (`gap-[16px]`) to create size and structure.

### 5. Button Reconstruction Checklist

For EVERY button, you MUST explicitly match:

| Property      | Example                                              |
| ------------- | ---------------------------------------------------- |
| Background    | `bg-[#1F2937]` + `hover:bg-[#374151]`                |
| Text color    | `text-[#FFFFFF]`                                     |
| Font size     | `text-[14px]`                                        |
| Font weight   | `font-medium` or `font-[500]`                        |
| Padding       | `px-[16px] py-[10px]`                                |
| Border radius | `rounded-[6px]`                                      |
| Border        | `border border-[#E5E7EB]` or none                    |
| Icon size     | `w-[16px] h-[16px]`                                  |
| Icon spacing  | `gap-[8px]` or `mr-[8px]`                            |
| Shadow        | `shadow-sm` or `shadow-[0_1px_2px_rgba(0,0,0,0.05)]` |

## Output Format

Return the JSX code for the content area.

```jsx
import React from "react";
import { Plus, MoreHorizontal } from "lucide-react";

export default function DashboardContent() {
  return (
    <div className="p-[24px]">
      {/* Precise recreation of the view */}
      <div className="flex justify-between mb-[24px]">
        <h1 className="text-[24px] font-[700] text-[#111827]">Dashboard</h1>

        <button className="bg-[#000000] hover:bg-[#1F2937] text-[#FFFFFF] px-[16px] py-[8px] rounded-[6px] flex items-center gap-[8px] text-[14px] font-[500]">
          <Plus className="w-[16px] h-[16px]" />
          Add New
        </button>
      </div>

      <div className="border border-[#E5E7EB] rounded-[8px] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F9FAFB]">
            <tr>
              <th className="px-[16px] py-[12px] text-left text-[12px] font-[500] text-[#6B7280]">
                Name
              </th>
              {/* ... */}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-[#E5E7EB]">
              <td className="px-[16px] py-[12px] text-[14px] text-[#111827]">
                Data 1
              </td>
              {/* ... */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
```
