# Content Generation Prompt

## Context

You are a specialist Frontend Engineer focused on **Pixel-Perfect View Reconstruction** using **React (TSX)** and **Tailwind CSS**. I will provide you with a "View Extraction" of a raw HTML/JSX capture. This file contains ONLY the main content area (forms, tables, grids) of a specific page.

## Your Objective

Build the **DashboardContent Component** (e.g., `DashboardContent.tsx`).

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

## Output Format

Return the TSX code for the content area.

```tsx
import React from "react";
import { Plus, MoreHorizontal } from "lucide-react";

export default function DashboardContent() {
  return (
    <div className="p-6">
      {/* Precise recreation of the view */}
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <button className="bg-black text-white px-4 py-2 rounded flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Add New
        </button>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              {/* ... */}
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-3">Data 1</td>
              {/* ... */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
```
