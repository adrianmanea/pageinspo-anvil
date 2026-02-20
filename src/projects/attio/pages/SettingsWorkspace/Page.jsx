import React, { useState, useEffect } from "react";
import {
  HelpCircle,
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
  GitBranch,
  LayoutDashboard,
  PlayCircle,
  BarChart2,
  ArrowRightLeft,
  Grid,
  Mail,
  Lock,
  Box,
  List,
  History,
  Search,
  Phone,
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

  // Sidebar Groups Data
  const sidebarGroups = [
    {
      title: "Personal",
      items: [
        { label: "Profile", icon: User },
        { label: "Appearance", icon: Puzzle },
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
        { label: "General", icon: Settings, active: true },
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

  return (
    <div className="flex min-h-screen w-full bg-[#FFFFFF] dark:bg-[#15181C] font-sans text-[#1F2937] dark:text-[#EEEFF1]">
      {/* Sidebar - Exact Clone from SettingsAccount */}
      <aside className="flex w-[275px] min-w-[275px] flex-col border-r border-[#EEEFF1] dark:border-[#27282B] bg-[#FBFBFB] dark:bg-[#15181C]">
        {/* Sidebar Header */}
        <div className="flex h-[49px] items-center justify-start border-b border-[#EEEFF1] dark:border-[#27282B] pl-[12px] pr-[12px]">
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
                    <div className="h-[1px] w-full bg-[#EEEFF1] dark:bg-[#27282B]"></div>
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
            {/* Notifications Breadcrumb */}
            <div className="flex items-center gap-[6px] rounded-[4px] border border-[#E5E7EB] dark:border-[#27282B] bg-white dark:bg-[#1a1d21] px-[4px] py-[2px] shadow-sm">
              <Settings className="h-[14px] w-[14px] text-[#242529] dark:text-[#EEEFF1]" />
              <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1]">
                General
              </span>
            </div>
          </div>

          <button className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] border border-[#E5E7EB] dark:border-[#27282B] hover:bg-gray-50 dark:hover:bg-[#242529]">
            <HelpCircle className="h-[14px] w-[14px] text-[#242529] dark:text-[#EEEFF1]" />
          </button>
        </header>

        {/* Main Content Viewport */}
        <div className="flex flex-col flex-1 w-full overflow-y-auto items-center px-[24px]">
          {/* Centered Width Container */}
          <div className="flex flex-col items-center w-full max-w-[768px] pt-[72px] pb-[72px] gap-[40px]">
            {/* Header Section */}
            <div className="flex flex-col w-[768px] gap-[24px]">
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

            <div className="flex flex-col flex-1 items-stretch justify-start w-[768px] gap-[40px]">
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
                        className="flex flex-row justify-center items-center gap-[6px] h-[28px] px-[8px] bg-[#266DF0] rounded-[8px] border-[0.666667px] border-solid border-transparent shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(38,109,240,0.12),0_3px_6px_-2px_rgba(38,109,240,0.08)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),0_2px_4px_-2px_rgba(78,140,252,0.12),0_3px_6px_-2px_rgba(78,140,252,0.08)] hover:bg-[#1E57C0]"
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
              <div className="flex flex-row w-[768px] gap-[16px]">
                {/* Name Input */}
                <div className="flex flex-col w-[376px] gap-[4px]">
                  <div className="flex flex-col w-full pl-[4px]">
                    <label className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                      Name
                    </label>
                  </div>
                  <div className="flex flex-row items-center w-full min-h-[32px] h-[32px] px-[10px] rounded-[9px] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#27282B] bg-transparent">
                    <input
                      type="text"
                      placeholder="Workspace name"
                      className="flex-1 w-full bg-transparent border-none outline-none text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1] placeholder:text-[#505154] dark:placeholder:text-[#A2A4A7]"
                    />
                  </div>
                </div>

                {/* Slug Input */}
                <div className="flex flex-col w-[376px] gap-[4px]">
                  <div className="flex flex-col w-full pl-[4px]">
                    <label className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                      Slug
                    </label>
                  </div>
                  <div className="flex flex-row items-center w-full min-h-[32px] h-[32px] pl-[10px] pr-[8px] rounded-[9px] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#27282B] bg-[#FBFBFB] dark:bg-[#1F2125]">
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
                      <Copy className="w-[12px] h-[12px] text-black dark:text-white" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Export Workspace Data Block */}
              <div className="flex flex-col w-[768px] gap-[16px]">
                <div className="flex flex-row justify-between items-center w-full h-[40px]">
                  <div className="flex flex-col w-[613.25px]">
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
                    className="flex flex-row justify-center items-center gap-[6px] h-[28px] px-[8px] bg-white dark:bg-[#1A1D21] rounded-[8px] shadow-[inset_0_0_0_1px_transparent,0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)] dark:shadow-[inset_0_0_0_1px_#2F3033,0_0_2px_0_#000000,0_1px_3px_0_rgba(0,0,0,0.08)] border border-[#E5E7EB] dark:border-transparent hover:bg-gray-50"
                  >
                    <Download className="w-[14px] h-[14px] text-[#242529] dark:text-[#EEEFF1]" />
                    <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                      Start new export
                    </span>
                  </button>
                </div>

                {/* Empty State Table */}
                <div className="flex flex-col w-full">
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
              <div className="flex flex-col w-[768px] gap-[12px]">
                <div className="flex flex-row justify-between items-center w-full h-[20px]">
                  <div className="flex flex-col w-full h-[20px]">
                    <span className="text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#242529] dark:text-[#EEEFF1]">
                      Danger zone
                    </span>
                  </div>
                </div>
                <div className="flex flex-row w-full px-[16px] py-[12px] rounded-[12px] border border-[#FFDCDB] dark:border-[#692623]">
                  <div className="flex flex-row justify-between items-center w-full h-[36px] gap-[16px]">
                    <div className="flex flex-col items-stretch justify-start min-w-[291px]">
                      <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                        Delete workspace
                      </span>
                      <span className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                        Once deleted, your workspace cannot be recovered
                      </span>
                    </div>
                    <button
                      type="button"
                      className="flex flex-row justify-center items-center gap-[6px] h-[28px] px-[8px] bg-[#FF5454] dark:bg-[#ED3B3B] rounded-[8px] border-[0.666667px] border-solid border-transparent shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(255,209,209,0.12),0_3px_6px_-2px_rgba(255,209,209,0.08)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1),0_2px_4px_-2px_rgba(105,38,35,0.12),0_3px_6px_-2px_rgba(105,38,35,0.08)] hover:bg-[#E54B4B]"
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
    </div>
  );
}
