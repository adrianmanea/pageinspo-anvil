import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronDown, Upload, Search, Home, Users, Settings, Command, Hash, MoreHorizontal, Filter, Plus } from "lucide-react";

export default function OnboardingStep2Page() {
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

  const isDark = theme === "dark";

  return (
    <div
      className="min-h-screen flex flex-col items-center bg-white dark:bg-[#1b1d21] pt-[32px] pb-[24px] gap-[24px] px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[#E6E7EA] dark:bg-[#313337] z-50">
        <div
          className="h-[2px] bg-[#232529] dark:bg-[#EEEFF1] rounded-[4px]"
          style={{ width: "25%" }}
        />
      </div>

      {/* Logo */}
      <div className="flex items-center gap-[4px] w-[96px] h-[24px]">
        <a href="/" className="flex items-center justify-center">
          <img
            alt="Grapho logo"
            src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/component-assets/grapho-dark.svg"
            className="w-[96px] h-[24px] dark:hidden"
          />
          <img
             alt="Grapho logo"
             src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/component-assets/grapho-light.svg"
             className="w-[96px] h-[24px] hidden dark:block"
          />
        </a>
      </div>

      {/* Main Card Container */}
      <div className="flex-1 flex items-center justify-center w-full">
        {/* Card */}
        <div className="flex flex-col lg:flex-row w-full max-w-[1130px] lg:h-[692px] border border-[#EEEFF1] dark:border-[#27282B] rounded-[20px] overflow-hidden">
          {/* Left Side - Form */}
          <div className="flex flex-col w-full lg:w-[564px] lg:min-w-[564px] lg:max-w-[564px] h-auto lg:h-[690px]">
            <div className="p-[32px] lg:p-[72px] flex justify-center">
              <div className="flex flex-col items-center gap-[32px] w-full max-w-[420px]">
                
                {/* Header with Back Button */}
                <div className="flex flex-col gap-[16px] w-full">
                  <div className="w-full">
                     <button
                        type="button"
                        className="flex items-center justify-center w-[28px] h-[28px] rounded-[8px] text-[#000000] dark:text-[#9FA1A7] hover:bg-[#F3F4F6] dark:hover:bg-[#232529] transition-colors -ml-[7px]"
                     >
                        <ChevronLeft size={16} />
                     </button>
                  </div>
                  <div>
                     <h1 className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#232529] dark:text-[#EEEFF1]">
                        Create your workspace
                     </h1>
                  </div>
                </div>

                {/* Logo Upload Section */}
                <div className="flex items-center gap-[20px] w-full">
                  {/* Logo Placeholder */}
                  <button
                    type="button"
                    className="flex items-center justify-center w-[56px] h-[56px] bg-[#FBFBFB] dark:bg-[#202225] border border-dashed border-[rgba(35,37,41,0.06)] dark:border-[rgba(255,255,255,0.06)] rounded-[16px] text-[30px] font-[500] text-[#9FA1A7] dark:text-[#5C5E63] uppercase"
                  >
                    A
                  </button>

                  <div className="flex flex-col items-start gap-[4px]">
                    <div className="text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#232529] dark:text-[#EEEFF1]">
                      Company logo
                    </div>
                    <div className="text-[12px] font-[500] leading-[16px] text-[#75777C] dark:text-[#86888D]">
                      We support PNGs, JPEGs and GIFs under 10MB.
                      <br />
                      Recommended size is 400x400px.
                    </div>
                  </div>
                </div>

                {/* Form Fields */}
                <form className="flex flex-col gap-[28px] w-full">
                  <div className="flex flex-col gap-[16px]">
                    
                    {/* Company Name */}
                    <div className="flex flex-col gap-[4px]">
                      <div className="pl-[4px]">
                        <label className="text-[12px] font-[500] leading-[16px] text-[#75777C] dark:text-[#86888D]">
                          Company name
                        </label>
                      </div>
                      <div className="flex items-center gap-[6px] w-full h-[34px] min-h-[34px] px-[10px] rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow">
                        <input
                          placeholder="Enter your company name..."
                          className="flex-1 bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] placeholder:text-[#9FA1A7] dark:placeholder:text-[#5C5E63] outline-none"
                        />
                      </div>
                    </div>

                    {/* Workspace Handle */}
                    <div className="flex flex-col gap-[4px]">
                      <div className="pl-[4px]">
                        <label className="text-[12px] font-[500] leading-[16px] text-[#75777C] dark:text-[#86888D]">
                          Workspace handle
                        </label>
                      </div>
                      <div className="flex items-center w-full h-[34px] min-h-[34px] px-[8px] rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow">
                        <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#75777C] dark:text-[#86888D]">
                          app.attio.com/
                        </span>
                        <input
                          placeholder="my-workspace"
                          className="flex-1 bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] placeholder:text-[#9FA1A7] dark:placeholder:text-[#5C5E63] outline-none ml-[1px]"
                        />
                      </div>
                    </div>

                    {/* Billing Country */}
                    <div className="flex flex-col gap-[4px]">
                      <div className="pl-[4px]">
                        <label className="text-[12px] font-[500] leading-[16px] text-[#75777C] dark:text-[#86888D]">
                          Billing country
                        </label>
                      </div>
                      <button
                        type="button"
                        className="flex items-center justify-between w-full h-[32px] px-[8px] bg-transparent border border-[#EEEEF1] dark:border-[#27282B] rounded-[8px] outline-none"
                      >
                         <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1]">
                           Romania
                         </span>
                         <ChevronDown size={14} className="text-[#75777C] dark:text-[#86888D]" />
                      </button>
                    </div>

                  </div>

                  {/* Continue Button */}
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-[6px] w-full h-[36px] px-[12px] py-[8px] bg-[#266DF0] rounded-[10px] text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-white shadow-[rgba(35,37,41,0.1)_0px_0px_0px_1px_inset,rgba(38,109,240,0.12)_0px_2px_4px_-2px,rgba(38,109,240,0.08)_0px_3px_6px_-2px] dark:shadow-[rgba(244,245,246,0.1)_0px_0px_0px_1px_inset,rgba(38,109,240,0.12)_0px_2px_4px_-2px,rgba(38,109,240,0.08)_0px_3px_6px_-2px] hover:bg-[#0E55D9] transition-colors"
                  >
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Side - App Preview */}
          <div
            className="hidden lg:flex flex-col w-[564px] min-w-[564px] max-w-[564px] h-[690px] bg-white dark:bg-[#1B1D21]"
            style={{
              borderLeft: "1px solid rgba(35, 37, 41, 0.05)",
            }}
          >
            <div className="relative w-full h-full p-[96px_64px] bg-[#FBFBFB] dark:bg-[#202225] overflow-hidden">
               {/* Scaled App Preview */}
               <div
                  className="origin-top-left"
                  style={{
                     transform: "scale(0.555)",
                     width: "1440px",
                     height: "900px",
                  }}
               >
                  {/* Main Container */}
                  <div className="flex h-full rounded-[12px] overflow-hidden shadow-[rgba(0,0,0,0)_0px_437px_122px_0px,rgba(0,0,0,0.02)_0px_280px_112px_0px,rgba(0,0,0,0.05)_0px_157px_94px_0px,rgba(0,0,0,0.1)_0px_17px_38px_0px]">
                    
                    {/* Sidebar */}
                    <div className="flex flex-col w-[272px] h-full bg-[#FBFBFB] dark:bg-[#17191C] border-r border-[rgba(0,0,0,0.05)] dark:border-[#27282B] rounded-l-[12px]">
                      
                      {/* Sidebar Header */}
                      <div className="p-[12px]">
                        <div className="flex items-center gap-[12px] px-[12px] h-[32px] rounded-[6px] hover:bg-black/5 dark:hover:bg-white/5 cursor-default transition-colors">
                            <div className="flex items-center justify-center w-[20px] h-[20px] border border-dashed border-[rgba(35,37,41,0.06)] dark:border-[rgba(255,255,255,0.06)] rounded-[4px] bg-[#FFFFFF] dark:bg-[#202225] text-[#9FA1A7] dark:text-[#5C5E63] text-[10px] font-medium uppercase">
                              A
                            </div>
                            <div className="text-[14px] font-[500] text-[#232529] dark:text-[#EEEFF1] tracking-[-0.28px]">
                              Workspace
                            </div>
                            <ChevronDown size={14} className="ml-auto text-[#9FA1A7] opacity-60" />
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-[1px] bg-[#EEEFF1] dark:bg-[#27282B] w-full" />

                      {/* Sidebar Menu */}
                      <div className="px-[12px] py-[8px] flex flex-col gap-[2px]">
                         {/* Search */}
                         <div className="flex items-center gap-[10px] px-[8px] py-[4px] h-[28px] bg-white dark:bg-[#1B1D21] border border-[rgba(0,0,0,0.04)] dark:border-[#27282B] rounded-[6px] shadow-sm">
                             <Search size={14} className="text-[#9FA1A7]" />
                             <div className="w-[60px] h-[6px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[3px]" />
                             <div className="ml-auto flex items-center gap-1 border border-[#EEEFF1] dark:border-[#27282B] rounded-[4px] px-1 h-[18px]">
                                <span className="text-[9px] text-[#9FA1A7] font-medium">⌘K</span>
                             </div>
                         </div>
                         
                         {/* Quick Actions */}
                         <div className="mt-1 flex items-center gap-[10px] px-[8px] py-[4px] h-[28px] hover:bg-[#EEEFF1] dark:hover:bg-[#313337]/50 rounded-[6px] cursor-default">
                             <Home size={14} className="text-[#5C5E63]" />
                             <div className="w-[40px] h-[6px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[3px]" />
                         </div>

                         {/* People (Active) */}
                         <div className="flex items-center gap-[10px] px-[8px] py-[4px] h-[28px] bg-[#EEEFF1] dark:bg-[#202225] rounded-[6px]">
                             <Users size={14} className="text-[#232529] dark:text-[#EEEFF1]" />
                             <div className="text-[13px] font-[500] text-[#232529] dark:text-[#EEEFF1]">People</div>
                         </div>

                         {/* Settings */}
                         <div className="flex items-center gap-[10px] px-[8px] py-[4px] h-[28px] hover:bg-[#EEEFF1] dark:hover:bg-[#313337]/50 rounded-[6px] cursor-default opacity-60">
                             <Settings size={14} className="text-[#5C5E63]" />
                             <div className="w-[50px] h-[6px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[3px]" />
                         </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 flex flex-col bg-white dark:bg-[#1B1D21]">
                      {/* Header */}
                      <div className="flex items-center justify-between px-[16px] h-[48px] border-b border-[#EEEFF1] dark:border-[#27282B]">
                         <div className="flex items-center gap-[8px]">
                            {/* Icon */}
                            <div className="flex items-center justify-center w-[20px] h-[20px] bg-[#266DF0] rounded-[6px] border border-[rgba(0,0,0,0.05)] shadow-sm">
                               <Users size={12} className="text-white" />
                            </div>
                            <span className="text-[14px] font-[500] text-[#232529] dark:text-[#EEEFF1] tracking-[-0.28px]">People</span>
                         </div>
                         {/* Avatars */}
                          <div className="flex items-center gap-[8px]">
                            <div className="w-[20px] h-[20px] bg-[#266DF0] rounded-full flex items-center justify-center text-[10px] text-white font-[500] border border-white dark:border-[#1B1D21]">J</div>
                            <div className="w-[1px] h-[14px] bg-[#EEEFF1] dark:bg-[#27282B]" />
                            <MoreHorizontal size={14} className="text-[#9FA1A7]" />
                         </div>
                      </div>

                      {/* Toolbar */}
                      <div className="flex items-center justify-between px-[12px] py-[8px] border-b border-[#EEEFF1] dark:border-[#27282B] bg-[#FBFBFB] dark:bg-[#17191C]/50">
                         <div className="flex items-center gap-[8px]">
                            <div className="flex items-center gap-2 px-2 h-[28px] bg-white dark:bg-[#202225] border border-[#EEEFF1] dark:border-[#27282B] rounded-[6px] shadow-sm">
                                <Filter size={12} className="text-[#9FA1A7]" />
                                <div className="w-[40px] h-[6px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[3px]" />
                            </div>
                             <div className="flex items-center gap-2 px-2 h-[28px] bg-white dark:bg-[#202225] border border-[#EEEFF1] dark:border-[#27282B] rounded-[6px] shadow-sm">
                                <div className="w-[50px] h-[6px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[3px]" />
                            </div>
                         </div>
                         <div className="flex items-center gap-2 px-2 h-[28px] bg-[#266DF0] rounded-[6px] shadow-sm">
                            <Plus size={12} className="text-white" />
                            <div className="w-[30px] h-[6px] bg-white/40 rounded-[3px]" />
                         </div>
                      </div>
                      
                      {/* Table Content */}
                      <div className="flex-1 overflow-hidden bg-white dark:bg-[#1B1D21]">
                         {/* Table Header */}
                         <div className="flex items-center h-[36px] px-[16px] border-b border-[#EEEFF1] dark:border-[#27282B]">
                            <div className="w-[16px] h-[16px] border border-[#EEEFF1] dark:border-[#27282B] rounded-[4px] mr-[12px]" />
                            <div className="w-[60px] h-[6px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[3px]" />
                         </div>
                         
                         {/* Row 1 - Active/Selected style from capture */}
                         <div className="flex items-center h-[40px] px-[16px] border-b border-[#EEEFF1] dark:border-[#27282B]">
                             <div className="flex items-center justify-center w-[16px] h-[16px] bg-[#266DF0] rounded-[4px] mr-[12px]">
                                <Users size={10} className="text-white" />
                             </div>
                             <div className="w-[24px] h-[24px] rounded-full bg-[#EEEFF1] dark:bg-[#27282B] mr-[12px]" />
                             <div className="w-[80px] h-[6px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[3px] mr-[32px]" />
                             <div className="w-[120px] h-[6px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[3px]" />
                         </div>

                         {/* Other Rows */}
                         {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center h-[40px] px-[16px] border-b border-[#EEEFF1] dark:border-[#27282B]">
                                <div className="w-[16px] h-[16px] border border-[#EEEFF1] dark:border-[#27282B] rounded-[4px] mr-[12px]" />
                                <div className="w-[24px] h-[24px] rounded-full bg-[#EEEFF1] dark:bg-[#27282B] mr-[12px] opacity-60" />
                                <div className="w-[80px] h-[6px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[3px] mr-[32px] opacity-60" />
                                <div className="w-[100px] h-[6px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[3px] opacity-40" />
                            </div>
                         ))}
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
