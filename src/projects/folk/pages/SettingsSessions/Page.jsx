import React, { useState, useEffect } from "react";
import { Monitor } from "lucide-react";

export default function Page() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
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

  return (
    <div className="flex flex-col flex-1 w-full bg-white dark:bg-[#191919] text-[#202020] dark:text-[#EEEEEE] font-sans min-h-screen">
      <header className="flex items-center gap-[8px] h-[48px] px-[24px] pr-[16px] border-b border-[#D9D9D9] dark:border-[#3D3D3D] flex-shrink-0">
        <div className="flex items-center gap-[12px] flex-1">
          <h1 className="text-[20px] font-[500] leading-[30px] tracking-[-0.38px] text-[#202020] dark:text-[#EEEEEE]">
            Sessions
          </h1>
        </div>
      </header>
      <div className="flex-1 w-full overflow-y-auto">
        {/* Main Content Area */}
        <div className="w-full max-w-[672px] px-[16px] sm:px-[24px] pt-[24px] pb-[40px] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between gap-[16px]">
            <span className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
              Manage devices where you're signed in
            </span>
          </div>

          {/* Sessions Section */}
          <section className="mt-[24px]">
            <ul className="flex flex-col gap-[16px] mt-[16px]">
              {/* Session 1: Current — Apple Macintosh (Mac OS) */}
              <li className="flex gap-[24px]">
                <label className="flex flex-col sm:flex-row sm:items-center w-full gap-[8px]">
                  <div className="flex items-center gap-[8px] flex-wrap">
                    <Monitor className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4] flex-shrink-0" />
                    <span className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
                      Apple Macintosh (Mac OS)
                    </span>
                    <p className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
                      Chrome
                    </p>
                  </div>
                  <div className="flex items-center sm:justify-end flex-1">
                    <span className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
                      Current
                    </span>
                  </div>
                </label>
              </li>

              {/* Divider */}
              <div className="w-full h-0 border-t border-[#E1E1E1] dark:border-[#353535]" />

              {/* Session 2: Revokable — Windows */}
              <li className="flex gap-[24px]">
                <label className="flex flex-col sm:flex-row sm:items-center w-full gap-[8px]">
                  <div className="flex items-center gap-[8px] flex-wrap">
                    <Monitor className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4] flex-shrink-0" />
                    <span className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
                      Windows
                    </span>
                    <p className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
                      Chrome — 5 days ago
                    </p>
                  </div>
                  <div className="flex items-center sm:justify-end flex-1">
                    <button
                      aria-label="Revoke session on Windows"
                      className="flex items-center justify-center h-[28px] px-[10px] py-[6px] text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] rounded-full shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-colors whitespace-nowrap"
                    >
                      Revoke
                    </button>
                  </div>
                </label>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
