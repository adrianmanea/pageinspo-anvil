import React, { useState, useEffect } from "react";
import {
  Upload,
  Copy,
  Download,
  FileText,
  Calendar,
  Trash2,
} from "lucide-react";

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
    <main className="flex flex-1 flex-col overflow-hidden bg-white dark:bg-[#1a1d21] h-full w-full font-sans text-[#1F2937] dark:text-[#EEEFF1]">
      {/* Main Content Viewport */}
      <div className="flex flex-col flex-1 w-full overflow-y-auto items-center px-[24px]">
        {/* Centered Width Container */}
        <div className="flex flex-col items-center w-full max-w-[768px] pt-[72px] pb-[72px] gap-[40px]">
          {/* Header Section */}
          <div className="flex flex-col w-full gap-[24px]">
            <div className="flex flex-col w-full gap-[16px]">
              <div className="flex flex-row justify-between items-center w-full gap-[16px]">
                <div className="flex flex-col justify-start items-stretch gap-[2px]">
                  <div className="flex flex-row justify-start items-center gap-[8px]">
                    <h1 className="text-[24px] font-[600] leading-[28px] tracking-[-0.48px] text-[#242529] dark:text-[#EEEFF1]">
                      General
                    </h1>
                  </div>
                  <p className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                    Change the settings for your current workspace
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]"></div>
          </div>

          <div className="flex flex-col flex-1 items-stretch justify-start w-full gap-[40px]">
            {/* Workspace Logo Block */}
            <div className="flex flex-col gap-[16px]">
              <div className="flex flex-row items-start gap-[16px]">
                <div className="flex justify-center items-center w-[72px] h-[72px] rounded-[30%] bg-[#F97514] dark:bg-[#C95908]">
                  <span className="text-[36px] font-[500] leading-[36px] text-[#FEEEE1]">
                    A
                  </span>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex flex-col">
                    <span className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#242529] dark:text-[#EEEFF1]">
                      Workspace logo
                    </span>
                    <span className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                      We only support PNGs, JPEGs and GIFs under 10MB
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-[8px]">
                    <button
                      type="button"
                      className="flex flex-row justify-center items-center gap-[6px] h-[34px] px-[12px] bg-[#266DF0] rounded-[10px] hover:bg-[#1D5AD6] transition-colors"
                    >
                      <Upload className="w-[14px] h-[14px] text-white" />
                      <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-white">
                        Upload logo
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Settings Form */}
            <div className="flex flex-col md:flex-row w-full gap-[16px]">
              {/* Name Input */}
              <div className="flex flex-col flex-1 w-full md:w-[376px] gap-[4px]">
                <div className="flex flex-col w-full pl-[4px]">
                  <label className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                    Name
                  </label>
                </div>
                <div className="flex flex-row items-center w-full min-h-[34px] h-[34px] px-[10px] rounded-[10px] shadow-[inset_0_0_0_1px_rgb(238,239,241)] dark:shadow-[inset_0_0_0_1px_rgb(39,40,43)] focus-within:shadow-[inset_0_0_0_1px_rgb(38,109,240),0_0_0_3px_rgba(38,109,240,0.2)] bg-transparent transition-shadow">
                  <input
                    type="text"
                    placeholder="Workspace name"
                    className="flex-1 w-full bg-transparent border-none outline-none text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1] placeholder-[#96979A] dark:placeholder-[#5C5E63]"
                  />
                </div>
              </div>

              {/* Slug Input */}
              <div className="flex flex-col flex-1 w-full md:w-[376px] gap-[4px]">
                <div className="flex flex-col w-full pl-[4px]">
                  <label className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                    Slug
                  </label>
                </div>
                <div className="flex flex-row items-center w-full min-h-[34px] h-[34px] pl-[10px] pr-[8px] rounded-[10px] shadow-[inset_0_0_0_1px_rgb(238,239,241)] dark:shadow-[inset_0_0_0_1px_rgb(39,40,43)] focus-within:shadow-[inset_0_0_0_1px_rgb(38,109,240),0_0_0_3px_rgba(38,109,240,0.2)] bg-transparent transition-shadow">
                  <input
                    type="text"
                    value="acmessrl"
                    readOnly
                    className="flex-1 w-full bg-transparent border-none outline-none text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]"
                  />
                  <button
                    type="button"
                    className="flex justify-center items-center w-[20px] h-[20px] rounded-[6px] hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    <Copy className="w-[12px] h-[12px] text-black dark:text-[#EEEFF1]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Export Workspace Data Block */}
            <div className="flex flex-col w-full gap-[16px]">
              <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center w-full gap-[12px] md:min-h-[40px]">
                <div className="flex flex-col w-full md:w-auto flex-1">
                  <span className="text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#242529] dark:text-[#EEEFF1]">
                    Export workspace data
                  </span>
                  <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                    Exports are in CSV format and can be downloaded within 7
                    days
                  </span>
                </div>
                <button
                  type="button"
                  className="flex flex-row justify-center items-center gap-[6px] h-[34px] px-[12px] bg-transparent rounded-[10px] border border-[#E5E7EB] dark:border-[#27282B] hover:bg-[#EEEFF1] dark:hover:bg-[#232529] transition-colors"
                >
                  <Download className="w-[14px] h-[14px] text-[#242529] dark:text-[#EEEFF1]" />
                  <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                    Start new export
                  </span>
                </button>
              </div>

              {/* Empty State Table */}
              <div className="flex flex-col w-full overflow-x-auto">
                {/* Table Header */}
                <div className="grid grid-cols-[238px_238px_auto] gap-[12px] w-full px-[14px] py-[12px] bg-white dark:bg-[#1A1D21] border-t border-r border-l border-[#EEEFF1] dark:border-[#27282B] rounded-t-[12px] shadow-[inset_0_-1px_0_0_#EEEFF1] dark:shadow-[inset_0_-1px_0_0_#27282B]">
                  <div className="flex flex-row items-center gap-[6px]">
                    <FileText className="w-[14px] h-[14px] text-[#242529] dark:text-[#EEEFF1]" />
                    <span className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                      Type
                    </span>
                  </div>
                  <div className="flex flex-row items-center gap-[6px]">
                    <Calendar className="w-[14px] h-[14px] text-[#242529] dark:text-[#EEEFF1]" />
                    <span className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                      Date
                    </span>
                  </div>
                  <div></div>
                </div>
                {/* Table Body */}
                <div className="flex flex-row w-full px-[16px] py-[10px] bg-white dark:bg-transparent border-r border-b border-l border-[#EEEFF1] dark:border-[#27282B] rounded-b-[12px]">
                  <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                    No exports yet
                  </span>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="flex flex-col w-full gap-[12px]">
              <div className="flex flex-row justify-between items-center w-full h-[20px]">
                <div className="flex flex-col w-full h-[20px]">
                  <span className="text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#242529] dark:text-[#EEEFF1]">
                    Danger zone
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-full px-[16px] py-[12px] rounded-[12px] border border-[#FFDCDB] dark:border-[#692623]">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full min-h-[36px] gap-[16px]">
                  <div className="flex flex-col items-stretch justify-start w-full sm:min-w-[291px]">
                    <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                      Delete workspace
                    </span>
                    <span className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                      Once deleted, your workspace cannot be recovered
                    </span>
                  </div>
                  <button
                    type="button"
                    className="flex flex-row justify-center items-center gap-[6px] h-[34px] px-[12px] bg-[#FF5454] dark:bg-[#ED3B3B] rounded-[10px] hover:bg-[#E54B4B] transition-colors"
                  >
                    <Trash2 className="w-[14px] h-[14px] text-white" />
                    <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-white">
                      Delete workspace
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
