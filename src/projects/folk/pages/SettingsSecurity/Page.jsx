import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

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
    <div className="flex flex-col flex-1 h-full min-h-screen bg-white dark:bg-[#191919] w-full">
      {/* Header */}
      <header className="flex items-center gap-[8px] h-[48px] px-[24px] pr-[16px] border-b border-[#d9d9d9] dark:border-[#3D3D3D] flex-shrink-0">
        <div className="flex items-center gap-[12px] flex-1">
          <h1 className="text-[20px] font-[500] leading-[30px] tracking-[-0.38px] text-[#202020] dark:text-[#EEEEEE] font-['Uxum_Grotesque',sans-serif] truncate">
            Security
          </h1>
        </div>
      </header>

      {/* Content */}
      <div className="flex flex-col flex-1 h-[calc(100vh-48px)] overflow-y-auto overflow-x-hidden w-full">
        {/* Main Settings Content */}
        <div className="flex flex-col w-full max-w-[672px] px-[24px] pt-[24px] pb-[40px]">
          {/* Description */}
          <div className="flex items-center justify-between gap-[16px]">
            <span className="text-[13px] font-[400] leading-[18px] tracking-[-0.026px] text-[#626262] dark:text-[#B4B4B4]">
              Set security settings for your workspace.{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="underline decoration-[rgba(0,0,0,0.15)] dark:decoration-[#6E6E6E]"
              >
                Learn more
              </a>
            </span>
          </div>

          {/* Settings Section */}
          <section className="mt-[24px] flex flex-col gap-[32px]">
            {/* Hide internal interactions */}
            <label className="flex gap-[8px] cursor-pointer">
              <div className="flex-1">
                <div className="flex items-center gap-[8px]">
                  <span className="text-[13px] font-[500] leading-[18px] tracking-[-0.026px] text-[#202020] dark:text-[#EEEEEE]">
                    Hide internal interactions
                  </span>
                </div>
                <p className="text-[13px] font-[400] leading-[18px] tracking-[-0.026px] text-[#626262] dark:text-[#B4B4B4]">
                  Interactions between members won't be shared
                </p>
              </div>
              <div className="flex items-center justify-end flex-shrink-0">
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  aria-label="Toggle hide internal interactions"
                  className="relative flex-shrink-0 w-[28px] h-[16px] box-content p-[2px] bg-[#BBBBBB] dark:bg-[#353535] rounded-full shadow-[inset_0_0_0_1px_#BBBBBB] dark:shadow-[inset_0_0_0_1px_#606060] overflow-hidden"
                >
                  <span className="block w-[14px] h-[14px] bg-white rounded-full shadow-[0_1px_1px_0_rgba(0,0,0,0.06),_0_0_0_15px_#202020] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24),_0_0_0_15px_#B4B4B4] translate-x-[13px]" />
                </button>
              </div>
            </label>

            {/* Sensitive interactions */}
            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center gap-[8px]">
                <span className="text-[13px] font-[500] leading-[18px] tracking-[-0.026px] text-[#202020] dark:text-[#EEEEEE]">
                  Sensitive interactions
                </span>
              </div>
              <p className="text-[13px] font-[400] leading-[18px] tracking-[-0.026px] text-[#626262] dark:text-[#B4B4B4]">
                Interactions from emails, domains or phone number on this list
                won't be shared
              </p>
            </div>

            {/* Search + Add to list form */}
            <div>
              <form className="flex gap-[16px]">
                <div className="flex-1">
                  <div className="flex items-center h-[28px] min-h-[28px] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] focus-within:border-[#202020] dark:focus-within:border-[#EEEEEE] transition-all overflow-hidden">
                    <span className="flex items-center justify-center w-[30px] min-w-[30px] h-[16px] ml-[8px]">
                      <Search
                        className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4]"
                        strokeWidth={2}
                      />
                    </span>
                    <input
                      type="text"
                      placeholder="Type to add emails, domains or phone…"
                      autoComplete="off"
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck="false"
                      name="value"
                      className="w-full h-full px-[10px] text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE] bg-transparent outline-none placeholder:text-[#BBBBBB] dark:placeholder:text-[#B4B4B4]"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center h-[28px] px-[10px] py-[6px] text-[13px] font-[500] leading-[19px] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#222222] border border-[#bbbbbb] dark:border-[#606060] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-colors rounded-full whitespace-nowrap flex-shrink-0"
                >
                  Add to list
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
