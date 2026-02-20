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

  const sidebarGroups = [
    {
      title: "Personal",
      items: [
        { label: "Profile", icon: User },
        { label: "Appearance", icon: Puzzle, active: true },
        { label: "Email and calendar accounts", icon: Briefcase },
        { label: "Call intelligence", icon: Phone },
        { label: "Storage accounts", icon: Database },
        { label: "Refer and earn", icon: Gift },
        { label: "Notifications", icon: Bell },
        { label: "Ask Attio", icon: HelpCircle },
      ],
    },
    {
      title: "Workspace",
      items: [
        { label: "General", icon: Settings },
        { label: "Members and teams", icon: Users },
        { label: "Ask Attio usage", icon: BarChart2 },
        { label: "Call recorder", icon: Database },
        { label: "Plans", icon: CreditCard },
        { label: "Billing", icon: CreditCard },
        { label: "Developers", icon: Key },
        { label: "Support requests", icon: HelpCircle },
        { label: "Migrate CRM", icon: ArrowRightLeft },
        { label: "Apps", icon: Grid },
      ],
      showDivider: true,
    },
    {
      title: null,
      items: [
        { label: "Security", icon: Shield },
        { label: "Email and calendar", icon: Mail },
        { label: "Expert access grants", icon: Lock },
      ],
      showDivider: true,
    },
    {
      title: null,
      items: [
        { label: "Objects", icon: Box },
        { label: "Lists", icon: List },
        { label: "Import history", icon: History },
        { label: "Automations", icon: LayoutDashboard },
        { label: "Sequences", icon: PlayCircle },
        { label: "Workflows", icon: GitBranch },
        { label: "Webhooks", icon: Webhook },
      ],
    },
  ];

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
    <div className="flex min-h-screen w-full bg-[#FFFFFF] dark:bg-[#15181C] font-sans text-[#1F2937] dark:text-[#EEEFF1]">
      {/* Sidebar */}
      <aside className="flex w-[275px] min-w-[275px] flex-col border-r border-[#EEEEF1] dark:border-[#27282B] bg-[#FBFBFB] dark:bg-[#15181C]">
        {/* Sidebar Header */}
        <div className="flex h-[49px] items-center justify-start border-b border-[#EEEEF1] dark:border-[#27282B] pl-[12px] pr-[12px]">
          <a
            href="#"
            className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] hover:bg-black/5 dark:hover:bg-white/5"
          >
            <ChevronLeft className="h-[14px] w-[14px] text-[#242529] dark:text-[#A2A4A7]" />
          </a>
          <span className="ml-[4px] text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#242529] dark:text-[#EEEFF1]">
            Settings
          </span>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-1 flex-col overflow-y-auto w-full">
          <div className="px-[12px] py-[10px]">
            {/* Search */}
            <div className="relative group">
              <div className="absolute left-[8px] top-[10px] flex h-[14px] w-[14px] items-center justify-center">
                <Search className="h-[14px] w-[14px] text-[#505154] dark:text-[#A2A4A7]" />
              </div>
              <input
                type="text"
                placeholder="Search settings..."
                className="h-[34px] w-full rounded-[10px] bg-transparent pl-[28px] pr-[10px] text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] placeholder-[#505154] dark:placeholder-[#A2A4A7] focus:outline-none shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] focus:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow"
              />
            </div>
          </div>

          {/* Navigation Groups */}
          <nav className="flex flex-col pb-[4px]">
            {sidebarGroups.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className={`flex flex-col ${groupIndex > 0 && group.title ? "mt-[1px]" : ""}`}
              >
                {group.title && (
                  <div className="sticky top-0 z-10 flex h-[28px] flex-col justify-center bg-[#FBFBFB] dark:bg-[#15181C] px-[8px]">
                    <span className="px-[8px] text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[#0000008C] dark:text-[#A2A4A7]">
                      {group.title}
                    </span>
                  </div>
                )}
                <div className="flex flex-col px-[8px] gap-[1px]">
                  {group.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href="#"
                      className={`flex h-[28px] items-center gap-[6px] rounded-[9px] px-[8px] text-[#242529] dark:text-[#EEEFF1] ${
                        item.active
                          ? "bg-[#EEEFF1] dark:bg-[#242529]"
                          : "hover:bg-black/5 dark:hover:bg-white/5"
                      }`}
                    >
                      <item.icon className="h-[14px] w-[14px] text-[#242529] dark:text-[#EEEFF1]" />
                      <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px]">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
                {group.showDivider && (
                  <div className="px-[16px] pb-[8px] pt-[8px]">
                    <div className="h-[1px] w-full bg-[#EEEEF1] dark:bg-[#27282B]"></div>
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex flex-1 flex-col overflow-hidden bg-white dark:bg-[#1a1d21]">
        {/* Top Header */}
        <header className="flex h-[49px] min-h-[49px] items-center justify-between border-b border-[#EEEFF1] dark:border-[#27282B] pl-[12px] pr-[12px]">
          <div className="flex items-center gap-[4px]">
            {/* Appearance Breadcrumb */}
            <div className="flex items-center gap-[6px] rounded-[4px] border border-[#E5E7EB] dark:border-[#27282B] bg-white dark:bg-[#1a1d21] px-[4px] py-[2px] shadow-sm">
              <Puzzle className="h-[14px] w-[14px] text-[#242529] dark:text-[#EEEFF1]" />
              <span className="text-[13px] font-[500] text-[#242529] dark:text-[#EEEFF1]">
                Appearance
              </span>
            </div>
          </div>

          <button className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] border border-[#E5E7EB] dark:border-[#27282B] hover:bg-gray-50 dark:hover:bg-[#242529]">
            <HelpCircle className="h-[14px] w-[14px] text-[#242529] dark:text-[#EEEFF1]" />
          </button>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex flex-1 flex-col items-center overflow-y-auto">
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
                      !window.matchMedia("(prefers-color-scheme: dark)")
                        .matches)
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
    </div>
  );
}
