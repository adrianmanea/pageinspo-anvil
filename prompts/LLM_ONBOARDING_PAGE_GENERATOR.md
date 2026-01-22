# Onboarding Page Generation Prompt

## Context

You are a specialist Frontend Engineer focused on **Pixel-Perfect Onboarding Page Reconstruction** using **React (JSX)** and **Tailwind CSS**. I will provide you with a "Page Extraction" of a raw HTML/JSX capture. This file contains an onboarding page such as Login, Sign Up, Password Reset, Email Verification, or Welcome screens.

## Your Objective

Build the **Onboarding Page Component** (e.g., `LoginPage.jsx`, `SignUpPage.jsx`).

## Critical Anti-Hallucination Rules

### 1. Strict Content Matching

- **Zero Invention**: You are FORBIDDEN from adding form fields, social login buttons, or text that are not in the capture.
- **Text Loyalty**: Every heading, label, placeholder, button text, and helper text must match the source exactly.
- **Link Preservation**: Keep all "Forgot password?", "Sign up", "Terms of Service" links with exact text.

### 2. Component Composition

- **Pure HTML/Tailwind ONLY**: Do NOT use any component libraries (like Shadcn, Radix, or MUI). Use standard HTML elements styled exclusively with Tailwind CSS.
- **Single File**: Keep everything in one file for this pass.
- **Icons**: Use **Lucide React** (`import { Mail, Lock, Eye } from 'lucide-react'`) by default. For social icons, use `react-icons` (e.g., `import { FaGoogle, FaGithub } from 'react-icons/fa'`).

### 3. Arbitrary Values Over Approximations

- **ALWAYS use Tailwind arbitrary values** when the capture has specific measurements or colors.
- ❌ WRONG: `max-w-md`, `py-8`, `bg-gray-50`, `rounded-lg`
- ✅ CORRECT: `max-w-[400px]`, `py-[32px]`, `bg-[#F9FAFB]`, `rounded-[12px]`
- Extract exact values from the source HTML/CSS. Do NOT approximate.

### 4. Form Input Checklist

For EVERY input field, you MUST explicitly match:

| Property      | Example                                       |
| ------------- | --------------------------------------------- |
| Background    | `bg-[#FFFFFF]` or `bg-[#F9FAFB]`              |
| Border        | `border border-[#D1D5DB]`                     |
| Border focus  | `focus:border-[#2563EB] focus:ring-[#2563EB]` |
| Border radius | `rounded-[8px]`                               |
| Padding       | `px-[16px] py-[12px]`                         |
| Text color    | `text-[#111827]`                              |
| Placeholder   | `placeholder:text-[#9CA3AF]`                  |
| Font size     | `text-[14px]` or `text-[16px]`                |
| Height        | `h-[48px]` if explicitly set                  |

### 5. Button Reconstruction Checklist

For EVERY button, you MUST explicitly match:

| Property       | Example                                           |
| -------------- | ------------------------------------------------- |
| Background     | `bg-[#2563EB]` + `hover:bg-[#1D4ED8]`             |
| Text color     | `text-[#FFFFFF]`                                  |
| Font size      | `text-[14px]` or `text-[16px]`                    |
| Font weight    | `font-[500]` or `font-[600]`                      |
| Padding        | `px-[24px] py-[12px]`                             |
| Border radius  | `rounded-[8px]`                                   |
| Width          | `w-full` for form buttons                         |
| Height         | `h-[48px]` if explicitly set                      |
| Shadow         | `shadow-[0_1px_2px_rgba(0,0,0,0.05)]`             |
| Disabled state | `disabled:opacity-50 disabled:cursor-not-allowed` |

### 6. Social Login Buttons

For social auth buttons (Google, GitHub, Apple, etc.):

| Property        | Example                                       |
| --------------- | --------------------------------------------- |
| Background      | `bg-[#FFFFFF]` with `border border-[#E5E7EB]` |
| Hover           | `hover:bg-[#F9FAFB]`                          |
| Icon            | Use `react-icons` for brand icons             |
| Icon size       | `w-[20px] h-[20px]`                           |
| Icon + text gap | `gap-[12px]`                                  |

### 7. Layout & Spacing

- **Center Alignment**: Most onboarding pages are centered. Use `min-h-screen flex items-center justify-center`.
- **Card Container**: If the form is in a card, match exact `padding`, `shadow`, `border-radius`, and `background`.
- **Form Spacing**: Match exact `gap` or `space-y` between form elements.

Add inline comments for complex sections:

```jsx
{
  /* Form Card: bg #FFFFFF, shadow lg, radius 16, p 40 */
}
{
  /* Input: border #D1D5DB, focus #2563EB, radius 8, h 48 */
}
```

## Output Format

Return the JSX code for the complete onboarding page.

```jsx
import React from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F9FAFB] px-[16px]">
      {/* Form Card: bg #FFFFFF, shadow lg, radius 16, p 40 */}
      <div className="w-full max-w-[400px] bg-[#FFFFFF] rounded-[16px] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] p-[40px]">
        {/* Header */}
        <div className="text-center mb-[32px]">
          <h1 className="text-[24px] font-[700] text-[#111827] mb-[8px]">
            Welcome back
          </h1>
          <p className="text-[14px] text-[#6B7280]">
            Sign in to your account to continue
          </p>
        </div>

        {/* Social Login */}
        <button className="w-full flex items-center justify-center gap-[12px] bg-[#FFFFFF] border border-[#E5E7EB] rounded-[8px] px-[16px] py-[12px] text-[14px] font-[500] text-[#374151] hover:bg-[#F9FAFB] transition-colors mb-[24px]">
          <FaGoogle className="w-[20px] h-[20px] text-[#EA4335]" />
          Continue with Google
        </button>

        <div className="flex items-center gap-[16px] mb-[24px]">
          <div className="flex-1 h-[1px] bg-[#E5E7EB]" />
          <span className="text-[12px] text-[#9CA3AF]">or</span>
          <div className="flex-1 h-[1px] bg-[#E5E7EB]" />
        </div>

        {/* Form */}
        <form className="space-y-[16px]">
          {/* Email Input */}
          <div>
            <label className="block text-[14px] font-[500] text-[#374151] mb-[6px]">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] text-[#9CA3AF]" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[48px] pl-[48px] pr-[16px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] text-[14px] text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2563EB] focus:ring-[2px] focus:ring-[#2563EB]/20"
              />
            </div>
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-[14px] font-[500] text-[#374151] mb-[6px]">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-[16px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] text-[#9CA3AF]" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full h-[48px] pl-[48px] pr-[48px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] text-[14px] text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#2563EB] focus:ring-[2px] focus:ring-[#2563EB]/20"
              />
              <button
                type="button"
                className="absolute right-[16px] top-1/2 -translate-y-1/2"
              >
                <Eye className="w-[20px] h-[20px] text-[#9CA3AF] hover:text-[#6B7280]" />
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <a
              href="#"
              className="text-[14px] text-[#2563EB] hover:text-[#1D4ED8]"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          {/* Button: bg #2563EB, hover #1D4ED8, text #fff, h 48, radius 8, font 16/600 */}
          <button
            type="submit"
            className="w-full h-[48px] bg-[#2563EB] hover:bg-[#1D4ED8] text-[#FFFFFF] rounded-[8px] text-[16px] font-[600] transition-colors"
          >
            Sign in
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-[14px] text-[#6B7280] mt-[24px]">
          Don't have an account?{" "}
          <a
            href="#"
            className="text-[#2563EB] hover:text-[#1D4ED8] font-[500]"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
```
