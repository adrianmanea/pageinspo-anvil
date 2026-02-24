import React, { useState, useEffect } from "react";
import {
  HelpCircle,
  Search,
  SlidersHorizontal,
  Plus,
  MoreHorizontal,
  Users,
  Shield,
  BadgeCheck,
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

  // Prevent scrolling when dialog is open
  // This page doesn't have a dialog but keeping the theme hook is useful.

  return (
    <div className="flex flex-col w-full min-h-screen bg-[#FFFFFF] dark:bg-[#15181C] font-['Inter',_sans-serif] transition-colors duration-200">
      {/* Header */}
      <div className="flex px-[12px] h-[49px] min-h-[49px] items-center justify-between border-b border-[#EEEFF1] dark:border-[#27282B]">
        <div className="flex items-center gap-[4px]">
          <div className="flex items-center gap-[6px] px-[4px] py-[2px] rounded-[4px] cursor-pointer hover:bg-gray-50 dark:hover:bg-[rgba(255,255,255,0.05)]">
            <Users className="w-[14px] h-[14px] text-[#242529] dark:text-[#EEEFF1]" />
            <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.14px]">
              Members and teams
            </span>
          </div>
        </div>

        <button className="flex items-center justify-center w-[28px] h-[28px] rounded-[8px] hover:bg-gray-50 dark:hover:bg-[rgba(255,255,255,0.05)] text-[#000000] dark:text-[#FFFFFF]">
          <HelpCircle className="w-[14px] h-[14px]" />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col items-center w-full px-[24px]">
        <div className="flex flex-col w-full max-w-[768px] py-[72px] gap-[24px]">
          {/* Page Title & Description */}
          <div className="flex flex-col gap-[16px]">
            <div className="flex justify-between items-center gap-[16px]">
              <div className="flex flex-col gap-[2px]">
                <h1 className="text-[24px] font-[600] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.48px] leading-[28px]">
                  Members and teams
                </h1>
                <p className="text-[14px] font-[500] text-[#505154] dark:text-[#A2A4A7] tracking-[-0.14px] leading-[20px]">
                  Manage workspace members and teams, set access levels, and
                  invite new users.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[40px]">
            {/* Tabs */}
            <div className="flex items-center gap-[4px]">
              <div className="flex items-center bg-[#FBFBFB] dark:bg-[rgba(255,255,255,0.02)] rounded-[8px] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] p-[4px] gap-[4px]">
                <button className="flex items-center gap-[6px] px-[8px] py-[4px] bg-[#FFFFFF] dark:bg-[rgba(255,255,255,0.08)] rounded-[6px] shadow-sm dark:shadow-none">
                  <Users className="w-[14px] h-[14px] text-[#242529] dark:text-[#EEEFF1]" />
                  <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.14px]">
                    Members
                  </span>
                </button>
                <button className="flex items-center gap-[6px] px-[8px] py-[4px] rounded-[6px] hover:bg-gray-50 dark:hover:bg-[rgba(255,255,255,0.05)]">
                  <Users className="w-[14px] h-[14px] text-[#505154] dark:text-[#A2A4A7]" />
                  <span className="text-[14px] font-[500] text-[#505154] dark:text-[#A2A4A7] tracking-[-0.14px]">
                    Teams
                  </span>
                </button>
              </div>
            </div>

            {/* Table Area */}
            <div className="flex flex-col w-full">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-[12px] bg-[#FFFFFF] dark:bg-[#15181C] py-[16px] z-10 sticky top-0">
                <div className="flex items-center flex-1 w-full sm:w-auto h-[34px] px-[10px] bg-transparent rounded-[10px] shadow-input-inset dark:shadow-[inset_0_0_0_1px_rgb(39,40,43)] focus-within:shadow-[inset_0_0_0_1px_rgb(38,109,240),0_0_0_3px_rgba(38,109,240,0.2)] gap-[6px] transition-shadow">
                  <Search
                    className="w-[14px] h-[14px] text-[#505154] dark:text-[#5C5E63]"
                    shrink-0
                  />
                  <input
                    type="text"
                    placeholder="Search name or email"
                    className="flex-1 bg-transparent border-none outline-none text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] placeholder:text-[#96979A] dark:placeholder:text-[#5C5E63]"
                  />
                </div>
                <button className="flex items-center justify-center h-[34px] px-[10px] bg-transparent rounded-[10px] gap-[6px] shadow-input-inset dark:shadow-[inset_0_0_0_1px_rgb(39,40,43)] hover:bg-[#EEEFF1] dark:hover:bg-[#232529] transition-colors">
                  <SlidersHorizontal className="w-[14px] h-[14px] text-[#242529] dark:text-[#EEEFF1]" />
                  <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.14px]">
                    Filter
                  </span>
                </button>
                <button className="flex items-center justify-center h-[34px] px-[10px] bg-[#266DF0] rounded-[10px] gap-[6px] hover:bg-[#1D5AD6] transition-colors">
                  <Plus className="w-[14px] h-[14px] text-[#FFFFFF]" />
                  <span className="text-[14px] font-[500] text-[#FFFFFF] tracking-[-0.14px]">
                    Invite team members
                  </span>
                </button>
              </div>

              {/* Table wrapper */}
              <div className="w-full overflow-x-auto overflow-y-hidden mb-[12px]">
                <div className="min-w-[600px] flex flex-col bg-[#FFFFFF] dark:bg-[#15181C] border border-[#EEEFF1] dark:border-[#27282B] rounded-[12px]">
                  {/* Table Header */}
                  <div className="grid grid-cols-[1.5fr_90px_1.5fr_95px_32px] gap-[12px] px-[14px] py-[12px] border-b border-[#EEEFF1] dark:border-[#27282B] items-center">
                    <div className="flex items-center gap-[6px]">
                      <Users className="w-[14px] h-[14px] text-[#242529] dark:text-[#EEEFF1]" />
                      <span className="text-[12px] font-[500] text-[#505154] dark:text-[#A2A4A7] tracking-[-0.12px]">
                        User
                      </span>
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <Shield className="w-[14px] h-[14px] text-[#242529] dark:text-[#EEEFF1]" />
                      <span className="text-[12px] font-[500] text-[#505154] dark:text-[#A2A4A7] tracking-[-0.12px]">
                        Role
                      </span>
                    </div>
                    <div className="flex items-center gap-[6px]">
                      <Users className="w-[14px] h-[14px] text-[#242529] dark:text-[#EEEFF1]" />
                      <span className="text-[12px] font-[500] text-[#505154] dark:text-[#A2A4A7] tracking-[-0.12px]">
                        Teams
                      </span>
                    </div>
                    <div className="w-[95px]"></div>
                    <div className="w-[32px]"></div>
                  </div>

                  {/* Table Body Row 1 (Invite Pending) */}
                  <div className="grid grid-cols-[1.5fr_90px_1.5fr_95px_32px] gap-[12px] px-[14px] h-[40px] items-center hover:bg-gray-50 dark:hover:bg-[rgba(255,255,255,0.05)] cursor-pointer border-b border-[#EEEFF1] dark:border-[#27282B]">
                    <div className="flex items-center gap-[8px] overflow-hidden">
                      <div className="flex justify-center items-center w-[16px] h-[16px] min-w-[16px] rounded-full bg-[#FF5454]">
                        <span className="text-[10px] font-[500] text-[#FFEBEB] leading-[10px] uppercase">
                          ?
                        </span>
                      </div>
                      <span className="text-[14px] font-[500] text-[#505154] dark:text-[#A2A4A7] tracking-[-0.14px] truncate whitespace-nowrap">
                        adrianmanea.s@icloud.com
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center px-[6px] py-[2px] bg-[#F5F0FF] dark:bg-[rgba(98,56,181,0.2)] rounded-[6px] shadow-[inset_0_0_0_1px_#E8DDFE] dark:shadow-none">
                        <span className="text-[12px] font-[500] text-[#6238B5] dark:text-[#E8DDFE] tracking-[-0.12px] leading-[16px]">
                          Admin
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center overflow-hidden">
                      <div className="flex items-center gap-[4px] overflow-hidden">
                        <div className="flex justify-center items-center w-[14px] h-[14px] min-w-[14px] bg-[#F97514] rounded-[4px] border border-[rgba(0,0,0,0.05)]">
                          <Users className="w-[10px] h-[10px] text-white" />
                        </div>
                        <span className="text-[14px] font-[500] text-[#505154] dark:text-[#A2A4A7] tracking-[-0.14px] truncate whitespace-nowrap">
                          Team Acme
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center px-[6px] py-[2px] bg-[#E5EEFF] dark:bg-[rgba(38,109,240,0.2)] rounded-[6px] shadow-[inset_0_0_0_1px_#D6E5FF] dark:shadow-none">
                        <span className="text-[12px] font-[500] text-[#215BC4] dark:text-[#D6E5FF] tracking-[-0.12px] leading-[16px] whitespace-nowrap">
                          Invite pending
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-end">
                      <button className="flex items-center justify-center w-[20px] h-[20px] rounded-[6px] hover:bg-gray-100 dark:hover:bg-[rgba(255,255,255,0.05)] text-[#000000] dark:text-[#FFFFFF]">
                        <MoreHorizontal className="w-[12px] h-[12px]" />
                      </button>
                    </div>
                  </div>

                  {/* Table Body Row 2 (John Doe) */}
                  <div className="grid grid-cols-[1.5fr_90px_1.5fr_95px_32px] gap-[12px] px-[14px] h-[40px] items-center hover:bg-gray-50 dark:hover:bg-[rgba(255,255,255,0.05)] cursor-pointer border-b border-[#EEEFF1] dark:border-[#27282B] last:border-b-0">
                    <div className="flex items-center gap-[8px] overflow-hidden">
                      <div className="flex justify-center items-center w-[16px] h-[16px] min-w-[16px] rounded-full bg-[#266DF0]">
                        <span className="text-[10px] font-[500] text-[#E5EEFF] leading-[10px] uppercase">
                          J
                        </span>
                      </div>
                      <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.14px] whitespace-nowrap flex-shrink-0">
                        John Doe (You)
                      </span>
                      <span className="text-[14px] font-[500] text-[#505154] dark:text-[#A2A4A7] tracking-[-0.14px] truncate whitespace-nowrap">
                        adrian.manea@devias.io
                      </span>
                    </div>

                    <div className="flex items-center">
                      <div className="flex items-center px-[6px] py-[2px] bg-[#F5F0FF] dark:bg-[rgba(98,56,181,0.2)] rounded-[6px] shadow-[inset_0_0_0_1px_#E8DDFE] dark:shadow-none">
                        <span className="text-[12px] font-[500] text-[#6238B5] dark:text-[#E8DDFE] tracking-[-0.12px] leading-[16px]">
                          Admin
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center overflow-hidden">
                      <div className="flex items-center gap-[4px] overflow-hidden">
                        <div className="flex justify-center items-center w-[14px] h-[14px] min-w-[14px] bg-[#F97514] rounded-[4px] border border-[rgba(0,0,0,0.05)]">
                          <Users className="w-[10px] h-[10px] text-white" />
                        </div>
                        <span className="text-[14px] font-[500] text-[#505154] dark:text-[#A2A4A7] tracking-[-0.14px] truncate whitespace-nowrap">
                          Team Acme
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center">
                      {/* Empty Status cell */}
                    </div>

                    <div className="flex items-center justify-end">
                      <button className="flex items-center justify-center w-[20px] h-[20px] rounded-[6px] hover:bg-gray-100 dark:hover:bg-[rgba(255,255,255,0.05)] text-[#000000] dark:text-[#FFFFFF]">
                        <MoreHorizontal className="w-[12px] h-[12px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
