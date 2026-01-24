# PageInspo Anvil

The workbench for PageInspo component development. This project allows for developing and building standalone React components/pages that can be embedded elsewhere.

## Getting Started

1.  **Install dependencies**:

    ```bash
    npm install
    # or
    pnpm install
    ```

2.  **Run development server**:
    ```bash
    npm run dev
    ```
    Access the dashboard at `http://localhost:5173`.

## Project Structure

- `src/pages/`: Main dashboard pages.
- `src/projects/`: Individual project components (e.g., `attio`, `brevo`).
- `vite.config.js`: Main build configuration.
- `vite.config.<project>.js`: Standalone build configurations for specific projects.

## Creating a Standalone Project Build

To create a buildable, standalone version of a project (e.g., for embedding in an iframe), follow these steps:

### 1. Create Project Files

Create a new folder in `src/projects/<your-project>` (e.g., `src/projects/my-page`).

Inside, you need two entry files:

**`mount.jsx`** (The React entry point):

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./main"; // Your main component
import "../../index.css"; // Global styles

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
```

**`index.html`** (The HTML entry point):

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Page</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./mount.jsx"></script>
  </body>
</html>
```

### 2. Create Build Configuration

Create a `vite.config.<project>.js` file in the project root (e.g., `vite.config.mypage.js`):

```javascript
import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Root of the sub-project
  root: path.resolve(__dirname, "src/projects/my-page"),
  publicDir: path.resolve(__dirname, "public"),
  build: {
    // Output directory
    outDir: path.resolve(__dirname, "dist/my-page"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Point to your index.html
        main: path.resolve(__dirname, "src/projects/my-page/index.html"),
      },
    },
  },
});
```

### 3. Add Build Script

Add a script to `package.json`:

```json
"scripts": {
  "build:mypage": "vite build -c vite.config.mypage.js"
}
```

### 4. Build

Run the build command:

```bash
npm run build:mypage
```

The output will be generated in `dist/my-page/`.
