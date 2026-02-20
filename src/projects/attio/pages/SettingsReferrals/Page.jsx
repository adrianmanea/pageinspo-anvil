import React, { useState, useEffect } from "react";
import {
  HelpCircle,
  ChevronRight,
  Copy,
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
        { label: "Refer and earn", icon: Gift, active: true },
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
            {/* Refer and earn Breadcrumb */}
            <div className="flex items-center gap-[6px] rounded-[4px] border border-[#E5E7EB] dark:border-[#27282B] bg-white dark:bg-[#1a1d21] px-[4px] py-[2px] shadow-sm">
              <Gift className="h-[14px] w-[14px] text-[#242529] dark:text-[#EEEFF1]" />
              <span className="text-[13px] font-[500] text-[#242529] dark:text-[#EEEFF1]">
                Refer and earn
              </span>
            </div>
          </div>

          <button className="flex h-[28px] w-[28px] items-center justify-center rounded-[8px] border border-[#E5E7EB] dark:border-[#27282B] hover:bg-gray-50 dark:hover:bg-[#242529]">
            <HelpCircle className="h-[14px] w-[14px] text-[#242529] dark:text-[#EEEFF1]" />
          </button>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex flex-1 flex-col items-center overflow-y-auto">
          <div className="flex flex-col items-center w-full px-[24px]">
            <div className="flex flex-col items-center max-w-[768px] w-full pt-[72px] pb-[72px] gap-[40px]">
              <div className="flex flex-col justify-start items-center w-full gap-[24px]">
                <div className="flex flex-col justify-start items-start w-full gap-[16px]">
                  <div className="flex w-full justify-between items-center gap-[16px]">
                    <div className="flex overflow-hidden justify-start items-center gap-[12px]">
                      <div className="flex flex-col overflow-hidden justify-start items-stretch gap-[2px]">
                        <div className="flex justify-start items-center gap-[8px]">
                          <h1 className="block text-[24px] font-[600] leading-[28px] tracking-[-0.48px] text-[#242529] dark:text-[#EEEFF1]">
                            Refer and earn
                          </h1>
                        </div>
                        <div className="block text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                          Earn rewards by referring teams to Attio.{" "}
                          <a
                            href="https://www.attio.com/refer"
                            target="_blank"
                            rel="noreferrer"
                            className="inline mr-[2px] underline decoration-[#0000001A] dark:decoration-[rgba(255,255,255,0.1)]"
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full h-[1px] flex-shrink-0 bg-[#EEEFF1] dark:bg-[#27282B]"></div>
              </div>

              <div className="flex flex-col justify-start items-stretch w-full gap-[40px]">
                <div className="flex flex-col justify-start items-start w-full gap-[24px]">
                  <div className="flex flex-row justify-between items-center w-full gap-[16px]">
                    <div className="flex flex-col justify-start items-start w-full">
                      <h2 className="flex items-center gap-[4px] text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#242529] dark:text-[#EEEFF1]">
                        Give teams 10% off Attio
                      </h2>
                      <div className="block w-full text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#505154]">
                        <div className="block w-full text-left text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                          New workspaces created via your link will receive 10%
                          off Attio for their first year.{" "}
                          <a
                            href="https://attio.com/legal/terms-and-conditions"
                            target="_blank"
                            rel="noreferrer"
                            className="inline text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)] underline decoration-[#0000001A] dark:decoration-[rgba(255,255,255,0.1)]"
                          >
                            Terms & Conditions
                          </a>{" "}
                          apply
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-start items-stretch w-full gap-[4px]">
                    <div className="flex w-full justify-start items-center gap-[10px] flex-grow">
                      <div className="flex items-center flex-grow h-[34px] px-[12px] gap-[6px] bg-transparent dark:bg-[#1F2125] rounded-[10px] shadow-input-inset dark:shadow-[inset_0_0_0_1px_#27282B] focus-within:shadow-input-focus">
                        <input
                          readOnly
                          value="attio.com?r=Aymp3pKsfW-sqh4k"
                          className="flex flex-1 w-full bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1] focus:outline-none"
                        />
                      </div>
                      <button
                        type="button"
                        className="flex justify-center items-center flex-shrink-0 h-[34px] px-[10px] py-[6px] pl-[8px] gap-[6px] bg-[#266DF0] hover:bg-[#1D5AD6] rounded-[10px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(38,109,240,0.12),0_3px_6px_-2px_rgba(38,109,240,0.08)] dark:border-transparent"
                      >
                        <div className="flex justify-center items-center w-[14px] h-[14px]">
                          <Copy
                            size={14}
                            className="text-[#FFFFFF] dark:text-white"
                          />
                        </div>
                        <span className="block overflow-hidden whitespace-nowrap text-ellipsis text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#FFFFFF] dark:text-white">
                          Copy link
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="flex w-full justify-start items-center gap-[10px]">
                    <div className="flex flex-col flex-grow justify-start items-center gap-[4px]">
                      <div className="flex flex-shrink-0 w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]"></div>
                    </div>
                    <div className="block text-left text-[12px] font-[500] leading-[16px] tracking-[-0.12px] whitespace-nowrap text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.29)]">
                      or share with a message
                    </div>
                    <div className="flex flex-col flex-grow justify-start items-center gap-[4px]">
                      <div className="flex flex-shrink-0 w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]"></div>
                    </div>
                  </div>

                  <div className="flex flex-col w-full justify-start items-start gap-[12px]">
                    <div className="flex flex-col w-full justify-start items-stretch gap-[4px]">
                      <textarea
                        readOnly
                        className="block w-full h-[60px] p-[10px_12px] flex-1 bg-[#FBFBFB] dark:bg-[#1F2125] rounded-[8px] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#27282B] text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1] whitespace-pre-wrap resize-none outline-none dark:border-[#27282B]"
                        value={
                          "Hey, we've been using Attio for our team. If you want to check it out, here's my link to get 10% off your first year: attio.com?r=Aymp3pKsfW-sqh4k"
                        }
                      />
                    </div>
                    <button
                      type="button"
                      className="flex justify-center items-center flex-shrink-0 h-[34px] px-[10px] py-[6px] pl-[8px] gap-[6px] bg-transparent dark:bg-[#1A1D21] rounded-[10px] border border-[#E5E7EB] dark:border-transparent hover:bg-[#EEEFF1] dark:shadow-[inset_0_0_0_1px_#2F3033,0_0_2px_0_#000000,0_1px_3px_0_rgba(0,0,0,0.08)]"
                    >
                      <div className="flex justify-center items-center w-[14px] h-[14px]">
                        <Copy
                          size={14}
                          className="text-[#242529] dark:text-white"
                        />
                      </div>
                      <span className="block overflow-hidden whitespace-nowrap text-ellipsis text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                        Copy message
                      </span>
                    </button>
                  </div>
                </div>

                {/* Rewards Section */}
                <div className="flex flex-col justify-start items-center w-full gap-[24px]">
                  <div className="flex flex-col flex-grow w-full pt-[16px] overflow-hidden gap-[20px] bg-[#FBFBFB] dark:bg-[#15181C] border-[0.666667px] border-solid border-[#EEEFF1] dark:border-[#27282B] rounded-[18px]">
                    <div className="flex justify-start items-center w-full px-[16px] gap-[12px]">
                      <div className="relative block w-[52px] h-[52px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="52"
                          height="56"
                          fill="none"
                          className="block w-[52px] h-[56px] overflow-hidden"
                        >
                          <path
                            className="fill-[#FBFBFB] dark:fill-[#15181C]"
                            d="M21.2 6.771c1.749-1.01 2.623-1.514 3.553-1.712a6 6 0 0 1 2.494 0c.93.198 1.804.703 3.553 1.712l9.453 5.458c1.748 1.01 2.623 1.514 3.258 2.22a5.999 5.999 0 0 1 1.248 2.161c.294.904.294 1.913.294 3.933v10.914c0 2.02 0 3.03-.294 3.933-.26.8-.685 1.536-1.248 2.16-.636.707-1.51 1.212-3.258 2.221L30.8 45.23c-1.749 1.01-2.623 1.514-3.553 1.712a6 6 0 0 1-2.494 0c-.93-.198-1.804-.703-3.553-1.712l-9.453-5.458c-1.748-1.01-2.623-1.514-3.258-2.22A6 6 0 0 1 7.24 35.39c-.294-.904-.294-1.913-.294-3.933V20.543c0-2.02 0-3.03.294-3.933a6 6 0 0 1 1.248-2.16c.635-.707 1.51-1.212 3.258-2.221L21.2 6.77Z"
                          />
                          <path
                            className="stroke-[#FBFBFB] dark:stroke-[#15181C]"
                            strokeWidth="2"
                            d="m7.745 38.22.727-.654-.727.654c.744.825 1.747 1.404 3.346 2.327l.156.09 9.453 5.458.156.09c1.599.923 2.602 1.503 3.689 1.734.96.204 1.95.204 2.91 0 1.087-.231 2.09-.81 3.689-1.734l.156-.09 9.453-5.458.156-.09c1.599-.922 2.602-1.502 3.346-2.327a7 7 0 0 0 1.455-2.521c.343-1.056.343-2.215.343-4.061V20.363c0-1.847 0-3.006-.343-4.062a7 7 0 0 0-1.455-2.52c-.744-.826-1.747-1.405-3.346-2.328l-.156-.09L31.3 5.905l-.156-.09c-1.599-.923-2.602-1.503-3.689-1.734a7 7 0 0 0-2.91 0c-1.087.231-2.09.81-3.689 1.734l-.156.09-9.453 5.458-.156.09c-1.599.923-2.602 1.502-3.346 2.327a7 7 0 0 0-1.455 2.521c-.343 1.056-.343 2.215-.343 4.061V31.637c0 1.847 0 3.006.343 4.062a7 7 0 0 0 1.455 2.52Z"
                          />
                          <path
                            fill="url(#b)"
                            stroke="url(#c)"
                            d="M21.45 7.204c1.778-1.026 2.573-1.478 3.407-1.656a5.5 5.5 0 0 1 2.287 0c.833.178 1.628.63 3.406 1.656l9.453 5.458c1.777 1.026 2.566 1.488 3.137 2.122a5.501 5.501 0 0 1 1.143 1.98c.264.811.27 1.726.27 3.779v10.914c0 2.053-.006 2.968-.27 3.779a5.501 5.501 0 0 1-1.143 1.98c-.57.633-1.36 1.096-3.137 2.122l-9.453 5.458c-1.778 1.026-2.573 1.478-3.407 1.656-.753.16-1.533.16-2.287 0-.833-.178-1.628-.63-3.406-1.656l-9.453-5.458C10.22 38.312 9.43 37.85 8.86 37.216a5.5 5.5 0 0 1-1.143-1.98c-.264-.811-.27-1.726-.27-3.779V20.543c0-2.053.006-2.968.27-3.778a5.5 5.5 0 0 1 1.143-1.981c.57-.634 1.36-1.096 3.137-2.122l9.453-5.458Z"
                          />
                          <defs>
                            <linearGradient
                              id="b"
                              x1="14.267"
                              x2="33.088"
                              y1="10.6"
                              y2="44.47"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#DEE2E7" />
                              <stop offset="0.877" stopColor="#C1C7D0" />
                            </linearGradient>
                            <linearGradient
                              id="c"
                              x1="9.133"
                              x2="26.488"
                              y1="12.8"
                              y2="46.659"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#E6E9EC" />
                              <stop offset="0.496" stopColor="#F3F4F6" />
                              <stop offset="1" stopColor="#A4ADBA" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <div className="flex flex-col flex-grow justify-start items-stretch gap-[8px]">
                        <div className="flex justify-between items-center gap-[4px]">
                          <div className="block text-[#242529] dark:text-[#EEEFF1] text-[14px] font-[600] leading-[20px] tracking-[-0.14px]">
                            Your referrals
                          </div>
                          <div className="flex justify-start items-center gap-[4px]">
                            <div className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)]">
                              <span className="inline text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                                0 / 180
                              </span>{" "}
                              <span className="inline text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.29)]">
                                points earned
                              </span>
                            </div>
                            <ChevronRight
                              size={14}
                              className="text-[#000000] dark:text-[#A2A4A7]"
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-[4px] w-full">
                          <div className="block flex-1 h-[10px] bg-[#0000000D] dark:bg-[rgba(255,255,255,0.05)] rounded-[3px]"></div>
                          <div className="block flex-[2_1_0%] h-[10px] bg-[#0000000D] dark:bg-[rgba(255,255,255,0.05)] rounded-[3px]"></div>
                          <div className="block flex-[3_1_0%] h-[10px] bg-[#0000000D] dark:bg-[rgba(255,255,255,0.05)] rounded-[3px]"></div>
                          <div className="block flex-[5.5_1_0%] h-[10px] bg-[#0000000D] dark:bg-[rgba(255,255,255,0.05)] rounded-[3px]"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-start items-center w-full gap-[4px]">
                      <div className="flex w-full h-[0.666667px] border-b-[0.666667px] border-dashed border-[#EEEFF1] dark:border-[#27282B]"></div>
                    </div>

                    <div className="flex flex-col justify-start items-stretch gap-[8px] flex-grow w-full">
                      <div className="flex justify-between items-center px-[16px] h-[36px] gap-[4px] flex-grow">
                        <div className="flex flex-col justify-between items-start h-[36px]">
                          <div className="block text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                            Rewards
                          </div>
                          <div className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                            Receive instant updates when you earn rewards
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-start items-center flex-grow-0 w-full overflow-x-auto">
                        <div className="flex flex-row justify-start items-center gap-[16px] p-[8px_16px_16px] min-w-full">
                          {/* Tier 1 */}
                          <div className="flex flex-col flex-shrink-0 w-[162px] h-[216.667px] bg-[#FFFFFF] dark:bg-[#15181C] border border-[#EEEFF1] dark:border-[#27282B] rounded-[12px]">
                            <div className="flex flex-col justify-start items-center p-[4px] gap-[4px] w-full h-[120px]">
                              <div className="rounded-[9px] w-[154px] h-[112px] bg-[#FBFBFB] dark:bg-[#15181C] bg-[url('https://placehold.co/154x112/E5E7EB/A3A8B8?text=Tier+1')] dark:bg-[url('https://placehold.co/154x112/1A1D21/EEEFF1?text=Tier+1')] bg-cover bg-center"></div>
                            </div>
                            <div className="flex flex-col justify-start items-start p-[8px_12px_12px] gap-[4px] w-full">
                              <div className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                                Tier 1
                              </div>
                              <div className="block overflow-hidden whitespace-nowrap text-ellipsis text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[#242529] dark:text-[#EEEFF1]">
                                Attio merch bundle
                              </div>
                            </div>
                            <div className="flex flex-col justify-center items-center px-[10px] w-full gap-[4px]">
                              <div className="flex w-full border-b-[0.666667px] border-dashed border-[#EEEFF1] dark:border-[#27282B]"></div>
                            </div>
                            <div className="flex flex-col w-full p-[12px] gap-[4px]">
                              <button
                                disabled
                                type="button"
                                className="flex justify-center flex-shrink-0 items-center w-full h-[20px] p-[2px_6px] gap-[4px] bg-[#FFFFFF] dark:bg-[#1A1D21] rounded-[6px] shadow-[inset_0_0_0_1px_transparent,0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)] dark:shadow-[inset_0_0_0_1px_#2F3033,0_0_2px_0_#000000,0_1px_3px_0_rgba(0,0,0,0.08)] opacity-40"
                              >
                                <span className="block overflow-hidden whitespace-nowrap text-ellipsis text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[#242529] dark:text-[#EEEFF1] text-opacity-80">
                                  10 points
                                </span>
                              </button>
                            </div>
                          </div>

                          {/* Tier 2 */}
                          <div className="flex flex-col flex-shrink-0 w-[162px] h-[216.667px] bg-[#FFFFFF] dark:bg-[#15181C] border border-[#EEEFF1] dark:border-[#27282B] rounded-[12px]">
                            <div className="flex flex-col justify-start items-center p-[4px] gap-[4px] w-full h-[120px]">
                              <div className="rounded-[9px] w-[154px] h-[112px] bg-[#FBFBFB] dark:bg-[#15181C] bg-[url('https://placehold.co/154x112/E5E7EB/A3A8B8?text=Tier+2')] dark:bg-[url('https://placehold.co/154x112/1A1D21/EEEFF1?text=Tier+2')] bg-cover bg-center"></div>
                            </div>
                            <div className="flex flex-col justify-start items-start p-[8px_12px_12px] gap-[4px] w-full">
                              <div className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                                Tier 2
                              </div>
                              <div className="block overflow-hidden whitespace-nowrap text-ellipsis text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[#242529] dark:text-[#EEEFF1]">
                                Kinto coffee bundle
                              </div>
                            </div>
                            <div className="flex flex-col justify-center items-center px-[10px] w-full gap-[4px]">
                              <div className="flex w-full border-b-[0.666667px] border-dashed border-[#EEEFF1] dark:border-[#27282B]"></div>
                            </div>
                            <div className="flex flex-col w-full p-[12px] gap-[4px]">
                              <button
                                disabled
                                type="button"
                                className="flex justify-center flex-shrink-0 items-center w-full h-[20px] p-[2px_6px] gap-[4px] bg-[#FFFFFF] dark:bg-[#1A1D21] rounded-[6px] shadow-[inset_0_0_0_1px_transparent,0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)] dark:shadow-[inset_0_0_0_1px_#2F3033,0_0_2px_0_#000000,0_1px_3px_0_rgba(0,0,0,0.08)] opacity-40"
                              >
                                <span className="block overflow-hidden whitespace-nowrap text-ellipsis text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[#242529] dark:text-[#EEEFF1] text-opacity-80">
                                  25 points
                                </span>
                              </button>
                            </div>
                          </div>

                          {/* Tier 3 */}
                          <div className="flex flex-col flex-shrink-0 w-[162px] h-[216.667px] bg-[#FFFFFF] dark:bg-[#15181C] border border-[#EEEFF1] dark:border-[#27282B] rounded-[12px]">
                            <div className="flex flex-col justify-start items-center p-[4px] gap-[4px] w-full h-[120px]">
                              <div className="rounded-[9px] w-[154px] h-[112px] bg-[#FBFBFB] dark:bg-[#15181C] bg-[url('https://placehold.co/154x112/E5E7EB/A3A8B8?text=Tier+3')] dark:bg-[url('https://placehold.co/154x112/1A1D21/EEEFF1?text=Tier+3')] bg-cover bg-center"></div>
                            </div>
                            <div className="flex flex-col justify-start items-start p-[8px_12px_12px] gap-[4px] w-full">
                              <div className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                                Tier 3
                              </div>
                              <div className="block overflow-hidden whitespace-nowrap text-ellipsis text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[#242529] dark:text-[#EEEFF1]">
                                Sonos audio bundle
                              </div>
                            </div>
                            <div className="flex flex-col justify-center items-center px-[10px] w-full gap-[4px]">
                              <div className="flex w-full border-b-[0.666667px] border-dashed border-[#EEEFF1] dark:border-[#27282B]"></div>
                            </div>
                            <div className="flex flex-col w-full p-[12px] gap-[4px]">
                              <button
                                disabled
                                type="button"
                                className="flex justify-center flex-shrink-0 items-center w-full h-[20px] p-[2px_6px] gap-[4px] bg-[#FFFFFF] dark:bg-[#1A1D21] rounded-[6px] shadow-[inset_0_0_0_1px_transparent,0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)] dark:shadow-[inset_0_0_0_1px_#2F3033,0_0_2px_0_#000000,0_1px_3px_0_rgba(0,0,0,0.08)] opacity-40"
                              >
                                <span className="block overflow-hidden whitespace-nowrap text-ellipsis text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[#242529] dark:text-[#EEEFF1] text-opacity-80">
                                  60 points
                                </span>
                              </button>
                            </div>
                          </div>

                          {/* Tier 4 */}
                          <div className="flex flex-col flex-shrink-0 w-[162px] h-[216.667px] bg-[#FFFFFF] dark:bg-[#15181C] border border-[#EEEFF1] dark:border-[#27282B] rounded-[12px]">
                            <div className="flex flex-col justify-start items-center p-[4px] gap-[4px] w-full h-[120px]">
                              <div className="rounded-[9px] w-[154px] h-[112px] bg-[#FBFBFB] dark:bg-[#15181C] bg-[url('https://placehold.co/154x112/E5E7EB/A3A8B8?text=Tier+4')] dark:bg-[url('https://placehold.co/154x112/1A1D21/EEEFF1?text=Tier+4')] bg-cover bg-center"></div>
                            </div>
                            <div className="flex flex-col justify-start items-start p-[8px_12px_12px] gap-[4px] w-full">
                              <div className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                                Tier 4
                              </div>
                              <div className="block overflow-hidden whitespace-nowrap text-ellipsis text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[#242529] dark:text-[#EEEFF1]">
                                Apple Studio Display
                              </div>
                            </div>
                            <div className="flex flex-col justify-center items-center px-[10px] w-full gap-[4px]">
                              <div className="flex w-full border-b-[0.666667px] border-dashed border-[#EEEFF1] dark:border-[#27282B]"></div>
                            </div>
                            <div className="flex flex-col w-full p-[12px] gap-[4px]">
                              <button
                                disabled
                                type="button"
                                className="flex justify-center flex-shrink-0 items-center w-full h-[20px] p-[2px_6px] gap-[4px] bg-[#FFFFFF] dark:bg-[#1A1D21] rounded-[6px] shadow-[inset_0_0_0_1px_transparent,0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)] dark:shadow-[inset_0_0_0_1px_#2F3033,0_0_2px_0_#000000,0_1px_3px_0_rgba(0,0,0,0.08)] opacity-40"
                              >
                                <span className="block overflow-hidden whitespace-nowrap text-ellipsis text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[#242529] dark:text-[#EEEFF1] text-opacity-80">
                                  180 points
                                </span>
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
          </div>
        </div>
      </main>
    </div>
  );
}
