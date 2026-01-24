import React, { useState, useEffect } from "react";

export default function ExamplePage() {
  const [count, setCount] = useState(0);

  // Example: Theme handling via URL parameter
  // Usage: ?theme=dark
  const [theme] = useState(() => {
    if (typeof window !== 'undefined') {
      return new URLSearchParams(window.location.search).get("theme");
    }
    return null;
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Example: Theme Toggle (updates local state only, mostly for testing)
  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-200">
      <div className="p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4">Boilerplate Page</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This is a standalone React component ready to be built as a single HTML file.
        </p>
        
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center gap-4">
            <button 
              onClick={() => setCount(c => c + 1)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Count is: {count}
            </button>
            <button 
              onClick={toggleTheme}
              className="px-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors font-medium"
            >
              Toggle Theme
            </button>
          </div>
          
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
             Tip: Append <code>?theme=dark</code> to the URL to force dark mode.
          </p>
        </div>
      </div>
    </div>
  );
}
