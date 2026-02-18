# Attio Design System & Style Guide

Use this guide as the source of truth for generating new pages and components.

## 🎨 Global Styles

### Color Palette

- **Backgrounds**:
  - Light: `bg-white` (Page) / `bg-[#FBFBFB]` (Sidebar)
  - Dark: `bg-[#15181C]` (Page & Sidebar) - **Standard Deep Dark**
- **Text**:
  - Primary: `text-[#242529]` (Light) / `text-[#EEEFF1]` (Dark)
  - Secondary: `text-[#505154]` (Light) / `text-[#A2A4A7]` (Dark)
  - Tertiary: `text-[rgba(0,0,0,0.55)]` (Light) / `text-[#A2A4A7]` (Dark)
- **Borders**:
  - Subtle: `border-[#EEEFF1]` (Light) / `border-[#27282B]` (Dark)
  - Strong: `border-[#D1D5DB]` (Light) / `border-[#A2A4A7]` (Dark)
- **Accent**:
  - Primary Blue: `#266DF0`

### Typography

- Font Family: `Inter`, sans-serif
- Sizes:
  - Page Title: `text-[24px] font-[600] tracking-[-0.48px]`
  - Section Header: `text-[16px] font-[600] tracking-[-0.32px]`
  - Body: `text-[14px]`
  - Label: `text-[12px] font-[500]`

## 🧩 Components

### Inputs & Selects

Standard style for all forms and settings pages.

- **Height**: `h-[34px]`
- **Radius**: `rounded-[10px]`
- **Background**: `bg-transparent` (or `bg-white` contextually in light mode)
- **Border**: **None** (Use inset shadow)
- **Shadow**: `shadow-input-inset` (Light: `rgb(238,239,241)`, Dark: `rgb(39,40,43)`)
- **Focus**: `focus:outline-none`, `focus-within:shadow-input-focus` (Blue ring)
- **Placeholder**: `placeholder-[#96979A]` (Light) / `placeholder-[#5C5E63]` (Dark)

### Buttons

#### Primary Action

- **Height**: `h-[34px]`
- **Radius**: `rounded-[10px]`
- **Background**: `bg-[#266DF0]` (Hover: `bg-[#1D5AD6]`)
- **Text**: `text-white font-[500]`

#### Secondary / Icon Button

- **Height**: `h-[28px]` or `h-[34px]` (Context dependent)
- **Radius**: `rounded-[8px]` or `rounded-[10px]`
- **Background**: Transparent
- **Hover**: `hover:bg-[#EEEFF1]` (Light) / `hover:bg-[#232529]` (Dark)
- **Border**: Optional `border border-[#E5E7EB]` (Light) / `border-[#27282B]` (Dark)

### Sidebar (Settings)

- **Width**: `w-[260px]` or `w-[275px]`
- **Background**: `bg-[#FBFBFB]` (Light) / `bg-[#15181C]` (Dark)
- **Border**: `border-r border-[#EDEEF0]` (Light) / `border-[#27282B]` (Dark)
- **Navigation Item**:
  - Height: `h-[28px]`
  - Radius: `rounded-[9px]`
  - Active: `bg-[#EEEFF1]` (Light) / `bg-[#242529]` (Dark)
  - Text: `text-[14px] font-[500]`

## 🛠️ Tailwind Config Tokens

Ensure `valid configuration` has these extend values:

```js
boxShadow: {
  'input-inset': 'inset 0 0 0 1px rgb(238, 239, 241)',
  'input-inset-dark': 'inset 0 0 0 1px rgb(39, 40, 43)',
  'input-focus': 'inset 0 0 0 1px rgb(38, 109, 240), 0 0 0 3px rgba(38, 109, 240, 0.2)',
}
```
