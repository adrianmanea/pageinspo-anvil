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
        { label: "Profile", icon: User, active: true },
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
        <header className="flex h-[49px] min-h-[49px] items-center justify-between border-b border-[#EEEEF1] dark:border-[#27282B] pl-[12px] pr-[12px]">
          <div className="flex items-center gap-[4px]">
            {/* Profile Breadcrumb */}
            <div className="flex items-center gap-[6px] rounded-[4px] border border-[#E5E7EB] dark:border-[#27282B] bg-white dark:bg-[#1a1d21] px-[4px] py-[2px] shadow-sm">
              <User className="h-[14px] w-[14px] text-[#242529] dark:text-[#EEEFF1]" />
              <span className="text-[13px] font-[500] text-[#242529] dark:text-[#EEEFF1]">
                Profile
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
            <div className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[16px]">
                <div className="flex items-center justify-between gap-[16px]">
                  <div className="flex flex-col gap-[2px]">
                    <div className="flex items-center gap-[8px]">
                      <h1 className="text-[24px] font-[600] leading-[28px] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.02em]">
                        Profile
                      </h1>
                    </div>
                    <p className="text-[14px] font-[500] text-[#6B7280] dark:text-[#A2A4A7]">
                      Manage your personal details
                    </p>
                  </div>
                </div>

                {/* Alert */}
                <div className="flex h-[44px] w-full items-center justify-between rounded-[12px] border border-[#EEEEF1] dark:border-[#46474A] bg-[#F8F9FA] dark:bg-[#2F3033] px-[12px] py-[8px]">
                  <div className="flex items-center gap-[6px]">
                    <div className="flex h-[20px] w-[20px] items-center justify-center">
                      <Cloud className="h-[14px] w-[14px] text-[#242529] dark:text-[#EEEFF1]" />
                    </div>
                    <span className="text-[14px] font-[500] text-[#505154] dark:text-[#A2A4A7]">
                      Changes to your profile will apply to all of your
                      workspaces.
                    </span>
                  </div>
                </div>
              </div>

              {/* Profile Picture Section */}
              <div className="flex flex-col gap-[16px]">
                <div className="flex gap-[16px]">
                  {/* Avatar */}
                  <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#266DF0] text-white">
                    <span className="text-[36px] font-[500]">J</span>
                  </div>

                  <div className="flex flex-col gap-[8px]">
                    <div className="flex flex-col">
                      <h3 className="text-[14px] font-[600] text-[#242529] dark:text-[#EEEFF1]">
                        Profile Picture
                      </h3>
                      <p className="text-[12px] font-[500] text-[#505154] dark:text-[#A2A4A7]">
                        We only support PNGs, JPEGs and GIFs under 10MB
                      </p>
                    </div>

                    <button className="flex h-[28px] w-fit items-center gap-[6px] rounded-[8px] bg-[#266DF0] px-[8px] py-[4px] text-white shadow-sm hover:bg-[#1D5AD6]">
                      <Cloud className="h-[14px] w-[14px]" />
                      <span className="text-[13px] font-[500]">
                        Upload image
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Form Fields Section */}
              <div className="flex flex-col gap-[16px]">
                {/* First Name & Last Name Row */}
                <div className="flex flex-row gap-[16px]">
                  {/* First Name */}
                  <div className="flex flex-col gap-[4px] w-[376px]">
                    <label className="text-[12px] font-[500] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                      First Name
                    </label>
                    <div className="flex h-[34px] items-center rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] px-[10px] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow">
                      <input
                        type="text"
                        defaultValue="John"
                        className="h-full w-full bg-transparent text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col gap-[4px] w-[376px]">
                    <label className="text-[12px] font-[500] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                      Last Name
                    </label>
                    <div className="flex h-[34px] items-center rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] px-[10px] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow">
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="h-full w-full bg-transparent text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Primary Email */}
                <div className="flex flex-col gap-[4px] w-full">
                  <label className="text-[12px] font-[500] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                    Primary email address
                  </label>
                  <div className="flex h-[34px] items-center justify-between rounded-[10px] bg-[#FBFBFB] dark:bg-[#1F2125] opacity-60 shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] px-[10px]">
                    <input
                      readOnly
                      type="text"
                      className="h-full w-full bg-transparent text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] focus:outline-none cursor-default"
                      value="adrian.manea@devias.io"
                    />
                    <button className="flex h-[20px] items-center justify-center rounded-[6px] bg-white dark:bg-[#1A1D21] border border-[#E5E7EB] dark:border-[#46474A] px-[6px] text-[12px] font-[500] text-[#242529] dark:text-[#EEEFF1] shadow-sm hover:bg-gray-50 dark:hover:bg-[#2F3033]">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Preferences Section */}
            <div className="flex flex-col gap-[16px] pt-[16px] border-t border-[#EEEEF1] dark:border-[#27282B]">
              <div className="flex flex-col gap-[4px]">
                <h2 className="text-[16px] font-[600] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.01em]">
                  Time preferences
                </h2>
                <p className="text-[14px] font-[500] text-[#505154] dark:text-[#A2A4A7]">
                  Manage your time preferences
                </p>
              </div>

              {/* Time Preferences Fields - Row */}
              <div className="flex flex-row gap-[16px]">
                {/* Preferred Timezone */}
                <div className="flex flex-col gap-[4px] w-[376px]">
                  <label className="text-[12px] font-[500] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                    Preferred Timezone
                  </label>
                  <button className="flex h-[34px] w-full items-center justify-between rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] px-[10px] text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] focus:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow outline-none">
                    <span>Europe/Bucharest</span>
                    <ChevronDown className="h-[14px] w-[14px] text-[#75777C] dark:text-[#86888D]" />
                  </button>
                </div>

                {/* Start week on */}
                <div className="flex flex-col gap-[4px] w-[376px]">
                  <label className="text-[12px] font-[500] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                    Start week on
                  </label>
                  <button className="flex h-[34px] w-full items-center justify-between rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] px-[10px] text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] focus:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow outline-none">
                    <span>Monday</span>
                    <ChevronDown className="h-[14px] w-[14px] text-[#75777C] dark:text-[#86888D]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
