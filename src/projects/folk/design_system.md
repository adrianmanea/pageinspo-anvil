# Folk Design System & Style Guide

Use this guide as the source of truth for generating new pages and components.

## Color Palette

### Backgrounds

| Token | Light | Dark |
|-------|-------|------|
| Page | `#FFFFFF` | `#191919` |
| Card / Elevated | `#FFFFFF` | `#222222` |
| Subtle / Hover | `#F5F5F5` | `#2A2A2A` |
| Muted | `#F9F9F9` | `#222222` |
| Overlay | `#00000033` | `#00000033` |

### Text

| Token | Light | Dark |
|-------|-------|------|
| Primary | `#202020` | `#EEEEEE` |
| Secondary | `#626262` | `#B4B4B4` |
| Tertiary / Disabled | `#BBBBBB` | `#6E6E6E` |
| On-dark (button text) | `#FDFDFD` | `#191919` |

### Borders

| Token | Light | Dark |
|-------|-------|------|
| Default | `#D9D9D9` | `#3D3D3D` |
| Strong | `#BBBBBB` | `#606060` |
| Subtle | `#E1E1E1` | `#353535` |

### Status / Badge Colors

| Status | Background | Text | Border |
|--------|-----------|------|--------|
| Purple | `#F2EBFE` | `#8643FF` | `#DECCFE` |
| Green | `#E5FDF0` | `#12C86C` | `#B1F1CB` |
| Yellow | `#FFF8CC` | `#DCA200` | `#F6EEB4` |

### Danger

| Token | Light | Dark |
|-------|-------|------|
| Background | `#DC3E42` | `#EC5D5E` |
| Hover | `#c73539` | `#d95253` |
| Text on danger | `#FDFDFD` | `#191919` |

### Avatar Palette (8 colors)

```
1. bg-[#FFE2DD] text-[#5D1715] border-[#FFC4BC]
2. bg-[#D3E5EF] text-[#183347] border-[#A6CBE1]
3. bg-[#DBEDDB] text-[#1C3829] border-[#B7DBB7]
4. bg-[#FDECC8] text-[#402C1B] border-[#FBE09B]
5. bg-[#E8DEEE] text-[#412454] border-[#D1BDDF]
6. bg-[#F5E0E9] text-[#4C2337] border-[#EBC1D3]
7. bg-[#EAE4F2] text-[#36294A] border-[#D5C9E5]
8. bg-[#FADEC9] text-[#49290E] border-[#F5BD93]
```

---

## Typography

**Font Family:** System sans-serif stack (`font-sans`). Headings may use `font-['Uxum_Grotesque',sans-serif]`.

| Role | Size | Weight | Line Height | Letter Spacing |
|------|------|--------|-------------|----------------|
| Page Title | `20px` | `500` | `30px` | `-0.38px` |
| Large Heading (Auth) | `28px` / `32px` | `500` | `32px` / `35px` | `-0.61px` |
| Body | `13px` | `400` | `18px` | `-0.026px` |
| Body Large | `15px` | `400` | `18px` | `-0.026px` |
| Button (App) | `13px` | `500` | `19px` | — |
| Button (Auth) | `15px` | `500` | `19px` | — |
| Label | `12px` | `500` | `16px` | `-0.024px` |
| Pill Button | `14px` | `500` | `19px` | — |
| Avatar Initials | `9px` | — | — | — |
| Badge | `13px` | `500` | — | — |

---

## Spacing

### Standard Scale (px)

`2` · `4` · `6` · `8` · `10` · `12` · `16` · `20` · `24` · `32` · `40` · `64` · `80`

### Common Patterns

| Context | Value |
|---------|-------|
| Button padding | `px-[10px] py-[6px]` |
| Input padding | `px-[10px] py-[4px]` |
| Header height | `h-[48px]` |
| Header padding | `px-[24px]` |
| Tab bar height | `h-[48px]` |
| Section gap | `gap-[24px]` or `gap-[32px]` |
| Item gap | `gap-[8px]` or `gap-[12px]` |
| Card padding | `p-[24px_32px]` |
| Page content padding | `px-[24px]` |
| Dialog padding | `p-[16px]` |

---

## Border & Radius

### Border Width

- Standard: `border` (1px) or `border-[0.667px]` (sub-pixel for retina)
- Directional: `border-b`, `border-r`, `border-l`, `border-t`
- Tab underline: `border-b-2`

### Border Radius

| Element | Radius |
|---------|--------|
| Buttons, pills, avatars | `rounded-full` |
| Dialog | `4px` (inline style) |
| Sidebar nav items | `rounded-[4px]` |
| Input fields | `rounded-[4px]` |
| Cards (auth/onboarding) | `rounded-[12px]` |
| Field rows (hover) | `rounded-[8px]` |
| Checkbox | `rounded-[3px]` or `rounded-sm` |

---

## Shadows

| Token | Light | Dark |
|-------|-------|------|
| Small (buttons, inputs) | `shadow-[0_1px_1px_rgba(0,0,0,0.06)]` | `shadow-[0_1px_2px_rgba(0,0,0,0.24)]` |
| Avatar ring | `shadow-[0_0_0_2px_rgb(255,255,255)]` | `shadow-[0_0_0_2px_rgb(25,25,25)]` |
| Dialog | `shadow-[0_0_1px_0_rgba(24,26,27,0.04),0_3px_6px_0_rgba(24,26,27,0.08),0_9px_24px_0_rgba(24,26,27,0.16),0_0_0_1px_rgba(141,141,141,0.24)]` | `shadow-[0_0_1px_0_rgba(0,0,0,0.04),0_3px_6px_0_rgba(0,0,0,0.08),0_9px_24px_0_rgba(0,0,0,0.24),0_0_0_1px_rgba(200,200,200,0.24)]` |
| Dropdown | `shadow-[0_4px_12px_rgba(0,0,0,0.1)]` | `shadow-[0_4px_12px_rgba(0,0,0,0.3)]` |

---

## Components

### Buttons

All buttons use `rounded-full`, `transition-colors`, `cursor-pointer`, and `select-none`.

#### Primary (Dark Filled)

```
h-[28px] px-[10px] py-[6px] rounded-full
bg-[#202020] dark:bg-[#EEEEEE]
text-[#FDFDFD] dark:text-[#191919]
border border-transparent
text-[13px] font-[500] leading-[19px]
hover:bg-[#3D3D3D] dark:hover:bg-[#D4D4D4]
transition-colors
```

Auth pages use `h-[40px]` and `text-[15px]`.

#### Secondary (Outline)

```
h-[28px] px-[10px] py-[6px] rounded-full
bg-[#FFFFFF] dark:bg-[#222222]
text-[#202020] dark:text-[#EEEEEE]
border border-[#BBBBBB] dark:border-[#606060]
shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)]
text-[13px] font-[500] leading-[19px]
hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A]
transition-colors
```

#### Ghost (Tertiary)

```
h-[28px] px-[8px] py-[6px] rounded-full
bg-transparent border border-transparent
text-[#626262] dark:text-[#B4B4B4]
text-[13px] font-[500]
hover:bg-[rgba(0,0,0,0.055)] dark:hover:bg-[rgba(255,255,255,0.063)]
transition-colors
```

#### Icon Button (Circular)

```
w-[28px] h-[28px] rounded-full
border-[0.667px] border-transparent
text-[#626262] dark:text-[#B4B4B4]
hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A]
transition-colors cursor-pointer
```

Icons inside: `w-[16px] h-[16px]`

#### Round Action Button (Outline Circle)

```
w-[28px] h-[28px] rounded-full
bg-[#FFFFFF] dark:bg-[#222222]
border-[0.667px] border-[#BBBBBB] dark:border-[#606060]
shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)]
hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A]
transition-colors cursor-pointer
```

#### Danger Button

```
h-[28px] px-[10px] py-[6px] rounded-full
bg-[#DC3E42] dark:bg-[#EC5D5E]
text-[#FDFDFD] dark:text-[#191919]
border border-transparent
hover:bg-[#c73539] dark:hover:bg-[#d95253]
transition-colors
```

#### Disabled State

```
opacity-[0.24] !cursor-default
hover:bg-transparent dark:hover:bg-transparent
```

---

### Inputs

#### Text Input

```
h-[28px] px-[10px]
bg-white dark:bg-[#222222]
text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE]
border border-[#BBBBBB] dark:border-[#606060]
rounded-[4px]
shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)]
placeholder:text-[#BBBBBB] dark:placeholder:text-[#B4B4B4]
focus-within:border-[#202020] dark:focus-within:border-[#EEEEEE]
outline-none transition-colors
```

Auth pages use `h-[40px]` and `rounded-[4px]`.

#### Form Label

```
text-[12px] font-[500] leading-[16px] tracking-[-0.024px]
text-[#626262] dark:text-[#B4B4B4]
```

---

### Checkbox

```
w-[16px] h-[16px] rounded-[3px]
border border-[#CECECE] dark:border-[#4A4A4A]
bg-white dark:bg-[#191919]
checked:bg-[#202020] dark:checked:bg-[#EEEEEE]
cursor-pointer
```

---

### Toggle / Switch

```
Track:
  w-[28px] h-[16px] rounded-full
  bg-[#BBBBBB] dark:bg-[#353535]
  shadow-[inset_0_0_0_1px_#BBBBBB] dark:shadow-[inset_0_0_0_1px_#606060]
  checked: bg-[#202020] dark:bg-[#B4B4B4]

Thumb:
  w-[12px] h-[12px] rounded-full
  bg-white dark:bg-[#191919]
  shadow-[0_1px_2px_rgba(0,0,0,0.2)]
  translate-x-[2px] → checked: translate-x-[14px]
  transition-transform
```

---

### Tabs

```
Container: h-[48px] border-b border-[#D9D9D9] dark:border-[#3D3D3D]

Active Tab:
  font-[500] text-[14px]
  text-[#202020] dark:text-[#EEEEEE]
  border-b-[2px] border-[#202020] dark:border-[#EEEEEE]

Inactive Tab:
  font-[500] text-[14px]
  text-[#626262] dark:text-[#B4B4B4]
  border-b-[2px] border-transparent
  hover:text-[#202020] dark:hover:text-[#EEEEEE]
  hover:border-[#D9D9D9] dark:hover:border-[#3D3D3D]
  transition-colors
```

Tab icons: `w-[16px] h-[16px]`, placed before label with `gap-[4px]`.

---

### Dialog / Modal

```
Overlay:
  fixed inset-0 bg-[#00000033] z-[100001]

Content:
  w-[384px] (narrow) or w-[576px] (wide)
  max-h-[85vh]
  bg-white dark:bg-[#222222]
  border border-[#202020] dark:border-[#3D3D3D]
  border-radius: 4px (inline style)
  p-[16px]
  shadow: (see Dialog shadow token above)

Title:
  text-[20px] font-[500] leading-[30px] tracking-[-0.38px]

Animation:
  fade-in-0 / fade-out-0
  zoom-in-95 / zoom-out-95
  slide-in-from-left-1/2 / slide-out-to-left-1/2
  duration-200
```

---

### Select / Dropdown

```
Trigger:
  h-[28px] px-[10px] py-[6px] rounded-full
  border border-[#BBBBBB] dark:border-[#606060]
  shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)]
  focus:border-[#202020] dark:focus:border-[#EEEEEE]

Dropdown:
  p-[4px]
  border border-[#BBBBBB] dark:border-[#606060]
  shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]

Item:
  px-[8px] py-[6px]
  text-[14px] font-[500]
  data-[highlighted]:bg-[#F3F4F6] dark:data-[highlighted]:bg-[#333333]
```

---

### Avatar

```
Standard: w-[32px] h-[32px]
Small stack: w-[16px] h-[16px] (with 19px outer ring)
Large: w-[56px] h-[56px]

Container:
  rounded-full overflow-hidden
  border border-[#E1E1E1] dark:border-[#353535]
  bg-white dark:bg-[#191919]

Stacked avatars:
  -mx-[4px] or marginLeft: -6px
  shadow-[0_0_0_2px_rgb(255,255,255)] dark:shadow-[0_0_0_2px_rgb(25,25,25)]
  z-index descending
```

---

### Badges / Pills

```
h-[20px] px-[8px] rounded-full
text-[13px] font-[500]
border border-[statusColor]
bg-[statusColor] text-[statusColor]
```

---

## Layout Patterns

### App Header

```
h-[48px] px-[24px]
border-b-[0.667px] border-[#D9D9D9] dark:border-[#3D3D3D]
flex items-center justify-between
```

### Settings Sidebar

```
w-[240px] h-screen flex-shrink-0
border-r border-[#D9D9D9] dark:border-[#3D3D3D]
bg-[#FFFFFF] dark:bg-[#191919]

Section Header:
  text-[12px] font-[500] tracking-tight
  text-[#626262] dark:text-[#B4B4B4]

Active Item:
  bg-[rgba(0,0,0,0.055)] dark:bg-[rgba(255,255,255,0.063)]
  text-[#202020] dark:text-[#EEEEEE] font-[500]

Inactive Item:
  text-[#626262] dark:text-[#B4B4B4] font-[400]
  hover:bg-[rgba(0,0,0,0.055)] dark:hover:bg-[rgba(255,255,255,0.063)]
```

### Table

```
Column Header:
  h-[32px] w-[200px] px-[8px]
  text-[12px] font-[500]
  text-[#626262] dark:text-[#B4B4B4]
  border-r-[0.667px] border-b-[0.667px] border-[#D9D9D9] dark:border-[#3D3D3D]

Row:
  min-h-[40px] px-[10px]
  border-b border-[#D9D9D9] dark:border-[#3D3D3D]
  hover:bg-[#F9F9F9] dark:hover:bg-[#222222]
  transition-colors
```

### List Row (Members, Notifications)

```
min-h-[70px] px-[24px] py-[16px]
flex items-center gap-[12px]
border-b border-[#f0f0f0] dark:border-[#333333]
hover:bg-[#F9F9F9] dark:hover:bg-[#1A1A1A]
transition-colors cursor-pointer
```

### Empty State Card

```
w-[224px] p-[24px_32px]
flex flex-col items-center gap-[24px]
border-[0.667px] border-[#D9D9D9] dark:border-[#3D3D3D]
```

### Auth / Onboarding Card

```
w-full max-w-[576px]
rounded-[12px] overflow-hidden
bg-[#FFFFFF] dark:bg-[#222222]
shadow: (dialog shadow)
p-[24px] sm:p-[32px]
```

Auth page background: `bg-[#F7F3EF]` (warm beige, light only).

---

## Icon Sizes

| Context | Size |
|---------|------|
| Inline / buttons | `16px` |
| Small | `14px` |
| Medium | `20px` |
| Large | `24px` |
| Empty state | `48px` |

Icon color follows text-secondary by default: `text-[#626262] dark:text-[#B4B4B4]`.

---

## Hover & Interaction States

| Element | Light Hover | Dark Hover |
|---------|-------------|------------|
| Primary button | `#3D3D3D` | `#D4D4D4` |
| Secondary button | `#F5F5F5` | `#2A2A2A` |
| Ghost / sidebar | `rgba(0,0,0,0.055)` | `rgba(255,255,255,0.063)` |
| Table row | `#F9F9F9` | `#222222` |
| Link | text → `#202020` | text → `#EEEEEE` |

All interactive elements use `transition-colors`. Links use underline with `decoration-[rgba(0,0,0,0.15)] dark:decoration-[#6E6E6E]`.

---

## Selection

```
selection:bg-[#F3F4F6] dark:selection:bg-[#333333]
```

---

## Progress Indicators

```
Dots:
  container: flex gap-[8px]
  inactive: w-[6px] h-[6px] rounded-full bg-[#E9E9E9]
  active: w-[6px] h-[6px] rounded-full bg-[#8C8C8C]

Progress Bar:
  track: h-[4px] bg-[#E1E1E1] dark:bg-[#353535]
  fill: bg-[#202020] dark:bg-[#EEEEEE]
```

---

## Z-Index Scale

| Layer | Value |
|-------|-------|
| Sticky columns | `z-[30]` |
| Add-column button | `z-[10]` |
| Sidebar (mobile) | `z-50` |
| Dialog overlay | `z-[100001]` |
| Dialog content | `z-[100002]` |

---

## Responsive Breakpoints

Standard Tailwind breakpoints: `sm`, `md`, `lg`, `xl`. Mobile-first approach.

Common patterns:
- Sidebar: `hidden lg:flex` (hidden on mobile, visible on desktop)
- Auth forms: `w-full sm:max-w-[368px]`
- Page padding: `p-[16px] sm:p-[24px]`
