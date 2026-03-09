# Code Sanitization & Localization Prompt

## Context

You are an expert Frontend Engineer focused on preparing and sanitizing codebase extractions for generic template usage. You are given a raw React or HTML file that was extracted from a real production application.

## Your Objective

Your goal is to sanitize the provided code by removing any brand-specific identifiable information and eliminating any dependencies on externally hosted assets, specifically custom SVGs.

## 1. Brand Sanitization (Anonymization)

- **Target Brand Names**: Search the codebase for specific brand names, domains, or identifiable personal information (e.g., "PageInspo", "Attio", "devias.io", "John Doe", "john@email.com").
- **Replacement**: Replace ALL instances of these brand names with generic, placeholder equivalents:
  - Company Names: Replace with **"Acme"** or **"Acme Corp"**.
  - Domains/URLs: Replace with **"acme.com"**.
  - User Names: Replace with generic names like **"John Doe"** or **"Jane Smith"**.
  - Emails: Replace with generic emails like **"john@acme.com"**.

## 2. Asset Localization (SVG Replacement)

- **Identify External SVGs**: Search the codebase for any `<svg>` or `<img />` tags that rely on external URLs (e.g., `<use href="https://example.com/assets/icon.svg#icon" />` or `<img src="https://example.com/logo.png" />`).
- **Replace with Lucide React**: You MUST replace ALL custom/external SVGs or external icons with the closest matching icon from the **Lucide React** library (`lucide-react`).
- **Preserve Styling**: When replacing the SVGs with `<LucideIcon />` components, you must perfectly preserve the existing Tailwind CSS `className` attributes (such as `w-[14px] h-[14px] text-current dark:text-[#FFFFFF]`).
- **Goal**: The resulting code must be completely self-contained and not make any network requests for icons or images.

## 3. Link & Navigation Sanitization

- **Replace all `href` values**: All `<a>` tags must have their `href` set to `"#"`. This includes internal routes (e.g., `/settings/...`, `/logout`) and external URLs (e.g., `https://help.example.com/...`). No link should navigate away from the current page.
- **Disable form navigation**: Ensure `<form>` elements do not have an `action` attribute that would cause a page navigation. Remove any `action` attribute or set it to `"#"`.
- **Why**: These components run in a preview environment with a `?theme=dark` URL parameter for theme switching. Any route change would break the theme switcher and lose the preview state.

## Output format

Return the full, completely sanitized file. Ensure that all `lucide-react` imports are correctly added to the top of the file mapping to the icons you chose to use.
