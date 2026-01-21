# Perfect Capture Workflow: The Split-Phase Protocol (HTML/CSS Edition)

## Core Philosophy

**"Divide and Conquer to prevent Hallucination."**
Attempting to clone a massive raw capture (3000+ lines) in one shot guarantees two things:

1.  **Context Amnesia**: The LLM forgets deep nesting constraints.
2.  **Token Overload**: complex DOM trees consume massive tokens, forcing the model to summarize (hallucinate) instead of detail.

## The Quantitative Thresholds (The "Numbers")

Before starting, run these checks on your capture:

- **Safe Token Limit**: ~2,000 lines of raw JSX is the danger zone.
- **Splitting Trigger**: If the capture contains both a **Sidebar** (>50 lines) AND a **Data Table** (>50 lines), you **MUST** split them.
- **Nesting Depth**: If you see `div > div > div` stack deeper than 10 levels, the component is too complex for a single pass.

---

## Step-by-Step Process

### Step 1: The Surgical Split (Pre-Processing)

**Objective**: Physically separate the "Shell" from the "View" to isolate contexts.

1.  **Identify the Seam**:
    - Find the HTML element where the page content lives (usually a `<main>` or a `div` next to the sidebar).
2.  **Create Two Files**:
    - `capture_layout.txt`: Contains the Sidebar, Topbar, and a placeholder `<div id="content-hole"></div>` where the main content was.
    - `capture_view.txt`: Contains **ONLY** the inner HTML of that main content area.
    - _Why?_ This reduces token noise by 50-60%.

### Step 2: Phase 1 - The Layout Shell

**Context**: Feed `capture_layout.txt` to the LLM.
**Prompt Goal**: "Build the master `layout.html`."

1.  **Focus**: Navigation visual states, Layout structure (Flex/Grid).
2.  **Output**: A clean `layout.html` that contains `<!-- CONTENT_HOLE -->`.
3.  **Validation**:
    - Does it look exactly like the original screenshot/capture?
    - Are the hover states on the sidebar working (via Tailwind classes)?

### Step 3: Phase 2 - The Page View

**Context**: Feed `capture_view.txt` to the LLM.
**Prompt Goal**: "Build the specific Page View HTML."

1.  **Detailed Reconstruction**:
    - Since the LLM _only_ sees the page content, it cannot hallucinate a dashboard. It MUST look at the table/form details.
2.  **Strict Cloning**:
    - Replicate every text node, button style, and table row exactly as seen.

### Step 4: Assembly

1.  **Paste**: Take the output from Phase 2 and paste it into the `<!-- CONTENT_HOLE -->` of Phase 1.
2.  **Result**: A complete, pixel-perfect HTML/Tailwind clone of the page.

## Summary Checklist

| Phase         | Input        | Output                   | Success Metric              |
| :------------ | :----------- | :----------------------- | :-------------------------- |
| **1. Split**  | Raw Capture  | `layout.txt`, `view.txt` | File size < 1000 lines each |
| **2. Layout** | `layout.txt` | `layout.html`            | Accurate Sidebar/Nav        |
| **3. View**   | `view.txt`   | `view.html`              | 100% Content Match          |
| **4. Merge**  | HTML + HTML  | `final.html`             | Pixel Perfect Match         |

## Why this is "Perfect"?

- **Zero Hallucination**: The model literally doesn't have the context to hallucinate.
- **Max Precision**: Token budget is spent entirely on the specific pixels of the table/form, not wasted on repeating the sidebar code.
- **Aesthetic Purity**: By removing the need to write React logic, the LLM can focus 100% of its capacity on CSS fidelity.
