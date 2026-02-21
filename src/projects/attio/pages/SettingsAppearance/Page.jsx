import React, { useState, useEffect } from "react";
import {
  Search,
  ChevronLeft,
  User,
  Settings,
  Bell,
  Gift,
  Shield,
  Briefcase,
  Users,
  Database,
  CreditCard,
  Puzzle,
  Key,
  Webhook,
  Workflow,
  Slash,
  HelpCircle,
  Cloud,
  ChevronDown,
  Phone,
  BarChart2,
  ArrowRightLeft,
  Grid,
  Mail,
  Lock,
  Box,
  List,
  History,
  LayoutDashboard,
  PlayCircle,
  GitBranch,
  Laptop,
  Moon,
  Sun,
  Monitor,
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

  // Handle manual theme switching
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    // Update URL param without reloading
    const url = new URL(window.location);
    url.searchParams.set("theme", newTheme);
    window.history.pushState({}, "", url);
  };

  return (
    <main className="flex flex-1 flex-col overflow-hidden bg-white dark:bg-[#1a1d21] h-full w-full font-sans text-[#1F2937] dark:text-[#EEEFF1]">
      {/* Scrollable Content Area */}
      <div className="flex flex-1 flex-col items-center overflow-y-auto px-[24px]">
        <div className="flex w-full max-w-[768px] flex-col gap-[40px] pb-[72px] pt-[72px]">
          {/* Page Header */}
          <div className="flex flex-col gap-[2px] mb-[40px]">
            <div className="flex items-center gap-[8px]">
              <h1 className="text-[24px] font-[600] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.48px] leading-[28px]">
                Appearance
              </h1>
            </div>
            <p className="text-[14px] text-[#505154] dark:text-[#9FA1A7] leading-[20px] tracking-[-0.14px]">
              Customize the look and feel of your platform
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]" />

          {/* Theme Section */}
          <section className="flex flex-col gap-[24px]">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-[16px] font-[600] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.32px] leading-[20px] mb-[4px]">
                  Theme
                </h2>
                <p className="text-[14px] text-[#505154] dark:text-[#9FA1A7] leading-[20px] tracking-[-0.14px]">
                  Select a theme to personalize your platform’s appearance
                </p>
              </div>
            </div>

            {/* Theme Selection Cards */}
            <div className="flex gap-[16px] flex-wrap">
              {/* Light Theme */}
              <div
                onClick={() => handleThemeChange("light")}
                className={`w-[224px] p-[4px] rounded-[16px] border cursor-pointer transition-all ${
                  theme === "light" ||
                  (!theme &&
                    typeof window !== "undefined" &&
                    !window.matchMedia("(prefers-color-scheme: dark)").matches)
                    ? "bg-white dark:bg-[#1A1D21] border-[#266DF0] ring-[3px] ring-[#266DF0]/10"
                    : "bg-white dark:bg-[#1A1D21] border-[#EEEFF1] dark:border-[#27282B] hover:border-[#D0D3D6] dark:hover:border-[#3A3D41]"
                }`}
              >
                <div className="w-full h-[114px] bg-[#FBFBFB] dark:bg-[#202225] rounded-[12px] border border-[#EEEFF1] dark:border-[#27282B] overflow-hidden relative mb-[12px] flex items-center justify-center">
                  {/* Light theme preview placeholder */}
                  <div className="w-[80%] h-[70%] bg-white rounded-[8px] shadow-sm flex flex-col p-2 space-y-2">
                    <div className="w-full h-2 bg-gray-100 rounded-sm"></div>
                    <div className="w-2/3 h-2 bg-gray-100 rounded-sm"></div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-[8px] pb-[8px]">
                  <Sun
                    size={16}
                    className="text-[#242529] dark:text-[#EEEFF1]"
                  />
                  <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1]">
                    Light
                  </span>
                </div>
              </div>

              {/* Dark Theme */}
              <div
                onClick={() => handleThemeChange("dark")}
                className={`w-[224px] p-[4px] rounded-[16px] border cursor-pointer transition-all ${
                  theme === "dark"
                    ? "bg-white dark:bg-[#1A1D21] border-[#266DF0] ring-[3px] ring-[#266DF0]/10"
                    : "bg-white dark:bg-[#1A1D21] border-[#EEEFF1] dark:border-[#27282B] hover:border-[#D0D3D6] dark:hover:border-[#3A3D41]"
                }`}
              >
                <div className="w-full h-[114px] bg-[#1A1D21] rounded-[12px] border border-[#27282B] overflow-hidden relative mb-[12px] flex items-center justify-center">
                  {/* Dark theme preview placeholder */}
                  <div className="w-[80%] h-[70%] bg-[#15181C] rounded-[8px] shadow-sm flex flex-col p-2 space-y-2">
                    <div className="w-full h-2 bg-[#27282B] rounded-sm"></div>
                    <div className="w-2/3 h-2 bg-[#27282B] rounded-sm"></div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-[8px] pb-[8px]">
                  <Moon
                    size={16}
                    className="text-[#242529] dark:text-[#EEEFF1]"
                  />
                  <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1]">
                    Dark
                  </span>
                </div>
              </div>

              {/* System Theme */}
              <div
                onClick={() => handleThemeChange("system")}
                className={`w-[224px] p-[4px] rounded-[16px] border cursor-pointer transition-all ${
                  theme === "system"
                    ? "bg-white dark:bg-[#1A1D21] border-[#266DF0] ring-[3px] ring-[#266DF0]/10"
                    : "bg-white dark:bg-[#1A1D21] border-[#EEEFF1] dark:border-[#27282B] hover:border-[#D0D3D6] dark:hover:border-[#3A3D41]"
                }`}
              >
                <div className="w-full h-[114px] bg-[#FBFBFB] dark:bg-[#202225] rounded-[12px] border border-[#EEEFF1] dark:border-[#27282B] overflow-hidden relative mb-[12px] flex items-center justify-center relative">
                  {/* Split preview for System */}
                  <div className="absolute inset-0 flex">
                    <div className="w-1/2 h-full bg-[#FBFBFB] flex items-center justify-center border-r border-[#EEEFF1] dark:border-[#27282B]">
                      <Sun size={20} className="text-gray-400" />
                    </div>
                    <div className="w-1/2 h-full bg-[#1A1D21] flex items-center justify-center">
                      <Moon size={20} className="text-gray-500" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-[8px] pb-[8px]">
                  <Monitor
                    size={16}
                    className="text-[#242529] dark:text-[#EEEFF1]"
                  />
                  <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1]">
                    System
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
