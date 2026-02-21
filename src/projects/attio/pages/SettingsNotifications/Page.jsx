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
  Monitor,
  Check,
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

  return (
    <main className="flex flex-1 flex-col overflow-hidden bg-white dark:bg-[#1a1d21] h-full w-full font-sans text-[#1F2937] dark:text-[#EEEFF1]">
      {/* Main Content Viewport */}
      <div className="flex flex-col flex-1 w-full overflow-y-auto items-center px-[24px]">
        {/* Centered Width Container */}
        <div className="flex flex-col items-center w-full max-w-[768px] pt-[72px] pb-[72px] gap-[40px]">
          {/* Header Block */}
          <div className="flex w-full max-w-[768px] flex-col gap-[24px]">
            <div className="flex flex-col gap-[16px]">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex flex-col gap-[2px]">
                  <h1 className="text-[24px] font-[600] leading-[28px] tracking-[-0.48px] text-[#242529] dark:text-[#EEEFF1]">
                    Notifications
                  </h1>
                  <p className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                    Customize your notification settings to stay informed
                    without being overwhelmed
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]"></div>
          </div>

          {/* Body Block (Remaining Content) */}
          <div className="flex flex-col justify-start items-stretch w-full gap-[28px]">
            {/* Sections Container */}
            <div className="flex flex-col gap-[28px] w-full max-w-[768px]">
              {/* Daily Digest Section */}
              <section className="flex flex-col gap-[16px]">
                <div className="flex w-full items-center justify-between">
                  <h2 className="text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#242529] dark:text-[#EEEFF1]">
                    Daily digest
                  </h2>
                </div>
                <div className="flex w-full min-h-[56px] items-center justify-between px-[12px] py-[8px] bg-[#FBFBFB] dark:bg-[#1A1D21] rounded-[12px] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#27282B]">
                  <div className="flex flex-col justify-start items-start gap-[4px] px-[4px]">
                    <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                      Enable daily digest
                    </span>
                    <span className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                      Includes tasks overdue and due today. Sent every morning
                      if any tasks are due or overdue.
                    </span>
                  </div>
                  <button
                    type="button"
                    role="switch"
                    aria-checked="true"
                    className="relative h-[16px] w-[24px] rounded-full sm:flex bg-[#266DF0] dark:bg-[#266DF0] flex-shrink-0"
                  >
                    <span className="absolute left-[9px] top-[1px] h-[14px] w-[14px] rounded-full bg-white transition-transform"></span>
                  </button>
                </div>
              </section>
              {/* Collaboration Notifications */}
              <section className="flex flex-col gap-[16px]">
                <div className="flex w-full items-center justify-between">
                  <div className="flex flex-col">
                    <h2 className="text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#242529] dark:text-[#EEEFF1]">
                      Collaboration notifications
                    </h2>
                  </div>
                </div>
                {/* Table Container */}
                <div className="flex flex-col w-full text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1] overflow-x-auto">
                  <div className="min-w-[600px] w-full flex flex-col">
                    {/* Header Row */}
                    <div className="sticky top-0 z-10 flex flex-col gap-[16px]">
                      <div className="grid grid-cols-[minmax(0,1fr)_72px_72px] w-full min-h-[40.6667px] px-[14px] py-[12px] gap-[12px] bg-[#FBFBFB] dark:bg-[#1A1D21] border-[0.666667px] border-solid border-[#EEEFF1] dark:border-[#27282B] border-b-0 rounded-t-[12px] shadow-[inset_0_-1px_0_0_#EEEFF1] dark:shadow-[inset_0_-1px_0_0_#27282B]">
                        {/* Col 1 */}
                        <div className="flex flex-row justify-start items-center gap-[6px]">
                          <Bell className="w-[14px] h-[14px]" />
                          <div className="flex flex-row justify-start items-center gap-[6px] w-[89.9792px]">
                            <span className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)] whitespace-nowrap overflow-hidden text-ellipsis">
                              Notify me about
                            </span>
                          </div>
                        </div>

                        {/* Col 2 */}
                        <div className="flex flex-row justify-start items-center gap-[6px]">
                          <Mail className="w-[14px] h-[14px] text-[rgba(0,0,0,0.4)] dark:text-[#EEEFF1]" />
                          <span className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)] whitespace-nowrap overflow-hidden text-ellipsis">
                            Email
                          </span>
                        </div>

                        {/* Col 3 */}
                        <div className="flex flex-row justify-start items-center gap-[6px]">
                          <Monitor className="w-[14px] h-[14px] text-[rgba(0,0,0,0.4)] dark:text-[#EEEFF1]" />
                          <span className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)] whitespace-nowrap overflow-hidden text-ellipsis">
                            App
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Rows Container */}
                    <div className="flex flex-col w-full bg-[#FFFFFF] dark:bg-transparent border-r-[0.666667px] border-b-[0.666667px] border-l-[0.666667px] border-solid border-[#EEEFF1] dark:border-[#27282B] rounded-b-[12px]">
                      {/* Row 1: Mentions */}
                      <div className="grid grid-cols-[minmax(0,1fr)_72px_72px] w-full min-h-[52px] px-[14px] items-center gap-[12px]">
                        {/* Text */}
                        <div className="flex flex-col justify-center items-start py-[8px]">
                          <span className="block text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                            Mentions
                          </span>
                          <span className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.29)]">
                            Notify me when someone cites me with an @mention in
                            notes or comments.
                          </span>
                        </div>
                        {/* Checkbox 1 */}
                        <div className="flex items-center">
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked="true"
                            className="flex items-center justify-center w-[16px] h-[16px] bg-[#266DF0] border-[0.666667px] border-solid border-[#266DF0] rounded-[6px]"
                          >
                            <Check className="w-[10px] h-[10px] text-white stroke-[3px]" />
                          </button>
                        </div>
                        {/* Checkbox 2 */}
                        <div className="flex items-center">
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked="true"
                            className="flex items-center justify-center w-[16px] h-[16px] bg-[#266DF0] border-[0.666667px] border-solid border-[#266DF0] rounded-[6px]"
                          >
                            <Check className="w-[10px] h-[10px] text-white stroke-[3px]" />
                          </button>
                        </div>
                      </div>

                      <div className="flex w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]"></div>

                      {/* Row 2: Replies */}
                      <div className="grid grid-cols-[minmax(0,1fr)_72px_72px] w-full min-h-[52px] px-[14px] items-center gap-[12px]">
                        <div className="flex flex-col justify-center items-start py-[8px]">
                          <span className="block text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                            Replies
                          </span>
                          <span className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.29)]">
                            Notify me when someone replies to my comments.
                          </span>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked="true"
                            className="flex items-center justify-center w-[16px] h-[16px] bg-[#266DF0] border-[0.666667px] border-solid border-[#266DF0] rounded-[6px]"
                          >
                            <Check className="w-[10px] h-[10px] text-white stroke-[3px]" />
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked="true"
                            className="flex items-center justify-center w-[16px] h-[16px] bg-[#266DF0] border-[0.666667px] border-solid border-[#266DF0] rounded-[6px]"
                          >
                            <Check className="w-[10px] h-[10px] text-white stroke-[3px]" />
                          </button>
                        </div>
                      </div>

                      <div className="flex w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]"></div>

                      {/* Row 3: Email Grants */}
                      <div className="grid grid-cols-[minmax(0,1fr)_72px_72px] w-full min-h-[52px] px-[14px] items-center gap-[12px]">
                        <div className="flex flex-col justify-center items-start py-[8px]">
                          <span className="block text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                            Email Grants
                          </span>
                          <span className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.29)]">
                            Notify me of email access requested or when my
                            requests are accepted or denied.
                          </span>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked="true"
                            className="flex items-center justify-center w-[16px] h-[16px] bg-[#266DF0] border-[0.666667px] border-solid border-[#266DF0] rounded-[6px]"
                          >
                            <Check className="w-[10px] h-[10px] text-white stroke-[3px]" />
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked="true"
                            className="flex items-center justify-center w-[16px] h-[16px] bg-[#266DF0] border-[0.666667px] border-solid border-[#266DF0] rounded-[6px]"
                          >
                            <Check className="w-[10px] h-[10px] text-white stroke-[3px]" />
                          </button>
                        </div>
                      </div>

                      <div className="flex w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]"></div>

                      {/* Row 4: Task Assignments */}
                      <div className="grid grid-cols-[minmax(0,1fr)_72px_72px] w-full min-h-[52px] px-[14px] items-center gap-[12px]">
                        <div className="flex flex-col justify-center items-start py-[8px]">
                          <span className="block text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                            Task Assignments
                          </span>
                          <span className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.29)]">
                            Notify me when I'm assigned a task.
                          </span>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked="true"
                            className="flex items-center justify-center w-[16px] h-[16px] bg-[#266DF0] border-[0.666667px] border-solid border-[#266DF0] rounded-[6px]"
                          >
                            <Check className="w-[10px] h-[10px] text-white stroke-[3px]" />
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked="true"
                            className="flex items-center justify-center w-[16px] h-[16px] bg-[#266DF0] border-[0.666667px] border-solid border-[#266DF0] rounded-[6px]"
                          >
                            <Check className="w-[10px] h-[10px] text-white stroke-[3px]" />
                          </button>
                        </div>
                      </div>

                      <div className="flex w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]"></div>

                      {/* Row 5: Shared Resources */}
                      <div className="grid grid-cols-[minmax(0,1fr)_72px_72px] w-full min-h-[52px] px-[14px] items-center gap-[12px]">
                        <div className="flex flex-col justify-center items-start py-[8px]">
                          <span className="block text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                            Shared Resources
                          </span>
                          <span className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.29)]">
                            Notify me when someone shares a resource, such as an
                            email, with me.
                          </span>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked="true"
                            className="flex items-center justify-center w-[16px] h-[16px] bg-[#266DF0] dark:bg-[#4E8CFC] border-[0.666667px] border-solid border-[#266DF0] dark:border-[#4E8CFC] rounded-[6px]"
                          >
                            <Check className="w-[10px] h-[10px] text-white stroke-[3px]" />
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked="true"
                            className="flex items-center justify-center w-[16px] h-[16px] bg-[#266DF0] dark:bg-[#4E8CFC] border-[0.666667px] border-solid border-[#266DF0] dark:border-[#4E8CFC] rounded-[6px]"
                          >
                            <Check className="w-[10px] h-[10px] text-white stroke-[3px]" />
                          </button>
                        </div>
                      </div>
                      <div className="flex w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]"></div>

                      {/* Row 6: Sequence delegated sender invites */}
                      <div className="grid grid-cols-[minmax(0,1fr)_72px_72px] w-full min-h-[52px] px-[14px] items-center gap-[12px] rounded-b-[12px]">
                        <div className="flex flex-col justify-center items-start py-[8px]">
                          <span className="block text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                            Sequence delegated sender invites
                          </span>
                          <span className="block text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.29)]">
                            Notify me when someone invites me to be a sequence
                            delegated sender.
                          </span>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked="true"
                            className="flex items-center justify-center w-[16px] h-[16px] bg-[#266DF0] dark:bg-[#4E8CFC] border-[0.666667px] border-solid border-[#266DF0] dark:border-[#4E8CFC] rounded-[6px]"
                          >
                            <Check className="w-[10px] h-[10px] text-white stroke-[3px]" />
                          </button>
                        </div>
                        <div className="flex items-center">
                          <button
                            type="button"
                            role="checkbox"
                            aria-checked="true"
                            className="flex items-center justify-center w-[16px] h-[16px] bg-[#266DF0] dark:bg-[#4E8CFC] border-[0.666667px] border-solid border-[#266DF0] dark:border-[#4E8CFC] rounded-[6px]"
                          >
                            <Check className="w-[10px] h-[10px] text-white stroke-[3px]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
