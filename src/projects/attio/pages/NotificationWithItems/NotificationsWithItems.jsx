import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";

export default function NotificationDemo() {
  const [isOpen, setIsOpen] = useState(true); // Open by default for preview
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
    <div className="w-full font-sans text-sm">
      {/* Conceptual Header */}
      <header className="w-full h-[64px] bg-[#FFFFFF] dark:bg-[#1A1D21] border-b border-[#E5E5E5] dark:border-[#2C313A] px-[24px] flex items-center justify-between transition-colors">
        <div className="flex items-center gap-[24px]">
          {/* Skeleton Logo/Links */}
          <div className="w-[100px] h-[24px] bg-[#F5F5F5] dark:bg-[#2C313A] rounded-[4px]"></div>
          <div className="w-[60px] h-[16px] bg-[#FAFAFA] dark:bg-[#262B33] rounded-[2px] hidden md:block"></div>
          <div className="w-[60px] h-[16px] bg-[#FAFAFA] dark:bg-[#262B33] rounded-[2px] hidden md:block"></div>
        </div>

        {/* Trigger */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F5F5F5] dark:hover:bg-[#2C313A] transition-colors relative group"
          >
            <Bell className="w-[18px] h-[18px] text-[#666666] dark:text-[#A3A3A3] group-hover:dark:text-[#E5E5E5]" />
            <div className="absolute top-[8px] right-[8px] w-[8px] h-[8px] bg-[#E84040] dark:bg-[#F05353] rounded-full border border-[#FFFFFF] dark:border-[#1A1D21] transition-colors"></div>
          </button>

          {/* Notification Panel */}
          {isOpen && (
            <div className="absolute right-0 top-[100%] mt-[8px] w-[calc(100vw-48px)] sm:w-[342px] bg-[#FFFFFF] dark:bg-[#1A1D21] rounded-[12px] shadow-[0px_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0px_8px_24px_rgba(0,0,0,0.5)] border border-[#E5E5E5] dark:border-[#383E47] z-50 flex flex-col overflow-hidden transition-colors">
              <div className="flex flex-col">
                {/* Header */}
                <div className="px-[16px] pt-[16px] pb-[12px]">
                  <div className="text-[14px] font-[600] text-[#1A1A1A] dark:text-[#E5E5E5]">
                    Notifications
                  </div>
                </div>

                {/* Tabs */}
                <div className="px-[16px]">
                  <div className="flex gap-[16px] border-b border-[#F0F0F0] dark:border-[#383E47]">
                    <button className="pb-[8px] text-[13px] font-[500] text-[#1A1A1A] dark:text-[#E5E5E5] border-b-[2px] border-[#1A1A1A] dark:border-[#E5E5E5]">
                      Notifications (2)
                    </button>
                    <button className="pb-[8px] text-[13px] font-[500] text-[#A3A3A3] dark:text-[#737373] hover:text-[#1A1A1A] dark:hover:text-[#E5E5E5] transition-colors border-b-[2px] border-transparent">
                      Requests (0)
                    </button>
                  </div>
                </div>

                {/* Items List Content matching Empty State pixel height exactly (320px SVG + 140px content approx = 450px) */}
                <div className="flex flex-col h-[460px] overflow-y-auto">
                  {/* Notification Item */}
                  <div className="flex items-start gap-[12px] p-[16px] hover:bg-[#F9FAFB] dark:hover:bg-[#2C313A]/50 transition-colors cursor-pointer border-b border-[#F0F0F0] dark:border-[#383E47] last:border-0 relative">
                    {/* Unread Indicator */}
                    <div className="absolute left-[8px] top-[24px] w-[6px] h-[6px] bg-[#266DF0] dark:bg-[#4E8CFC] rounded-full"></div>

                    {/* Avatar */}
                    <div className="relative shrink-0 flex items-center justify-center w-[32px] h-[32px] bg-[#F3F4F6] dark:bg-[#262B33] text-[#4B5563] dark:text-[#A3A3A3] text-[13px] font-[600] rounded-full ml-[4px]">
                      G{/* Icon Badge */}
                      <div className="absolute -bottom-[2px] -right-[2px] w-[14px] h-[14px] bg-[#FFFFFF] dark:bg-[#1A1D21] rounded-full flex items-center justify-center shadow-[0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.1)]">
                        {/* Using a standard check icon for the assigned task representation */}
                        <div className="w-[10px] h-[10px] bg-[#266DF0] dark:bg-[#4E8CFC] rounded-full flex items-center justify-center">
                          <svg
                            width="6"
                            height="6"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 3L4.5 8.5L2 6"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col gap-[4px] pt-[2px]">
                      <div className="text-[13px] font-[400] text-[#1A1A1A] dark:text-[#E5E5E5] leading-[18px]">
                        <span className="font-[600]">Grace Simpson</span>{" "}
                        assigned a task to you.
                      </div>
                      <div className="text-[12px] font-[400] text-[#A3A3A3] dark:text-[#737373]">
                        1 minute ago
                      </div>
                    </div>
                  </div>

                  {/* Read Notification Item (Example) */}
                  <div className="flex items-start gap-[12px] p-[16px] hover:bg-[#F9FAFB] dark:hover:bg-[#2C313A]/50 transition-colors cursor-pointer border-b border-[#F0F0F0] dark:border-[#383E47] last:border-0 opacity-70 hover:opacity-100 relative">
                    {/* Avatar */}
                    <div className="relative shrink-0 flex items-center justify-center w-[32px] h-[32px] bg-[#F3F4F6] dark:bg-[#262B33] text-[#4B5563] dark:text-[#A3A3A3] text-[13px] font-[600] rounded-full ml-[4px]">
                      A
                    </div>
                    {/* Content */}
                    <div className="flex flex-col gap-[4px] pt-[2px]">
                      <div className="text-[13px] font-[400] text-[#1A1A1A] dark:text-[#E5E5E5] leading-[18px]">
                        <span className="font-[600]">Alex Rivera</span>{" "}
                        mentioned you in{" "}
                        <span className="font-[500] text-[#266DF0] dark:text-[#4E8CFC] hover:underline cursor-pointer">
                          Q3 Marketing Logistics
                        </span>
                        .
                      </div>
                      <div className="text-[12px] font-[400] text-[#A3A3A3] dark:text-[#737373]">
                        2 hours ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
