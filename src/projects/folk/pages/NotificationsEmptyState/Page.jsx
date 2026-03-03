import React from "react";
import { ChevronDown, MoreHorizontal } from "lucide-react";

export default function Page() {
  return (
    <div className="flex h-screen w-full bg-[#FFFFFF] antialiased text-[#202020] font-['Inter',sans-serif] text-[13px] overflow-hidden">
      {/* Notifications Sub-Sidebar */}
      <aside className="w-full md:w-[384px] flex-shrink-0 flex flex-col border-r border-[#D9D9D9] bg-[#FFFFFF]">
        {/* Header Tabs & Actions */}
        <header className="flex h-[48px] items-center justify-between border-b border-[#D9D9D9] px-[24px] pr-[16px] flex-shrink-0">
          <div className="flex items-center gap-[20px] h-full">
            <button className="relative flex items-center gap-[6px] h-full font-[500] text-[#202020] border-b-2 border-[#202020] -mb-[1px]">
              Notifications
              <span className="text-[12px] text-[#626262]">0</span>
            </button>
            <button className="relative flex items-center gap-[6px] h-full font-[500] text-[#626262] hover:text-[#202020] transition-colors">
              Upcoming
              <span className="text-[12px] text-[#626262]">0</span>
            </button>
          </div>
          <div className="flex items-center gap-[8px]">
            <button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-full border border-transparent hover:bg-black/5 text-[#626262] font-[500] transition-colors">
              All
              <ChevronDown className="h-[14px] w-[14px]" />
            </button>
            <button className="flex h-[28px] w-[28px] items-center justify-center rounded-full text-[#626262] hover:bg-black/5 transition-colors">
              <MoreHorizontal className="h-[16px] w-[16px]" />
            </button>
          </div>
        </header>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {/* Single Notification Item (Muted / Read State) */}
          <div className="flex items-start gap-[12px] p-[16px_24px] bg-black/[0.055] hover:bg-black/[0.08] cursor-pointer transition-colors relative">
            {/* Blue Unread Dot (hidden in this read state example, keeping structure) */}
            {/* <div className="absolute left-[8px] top-[24px] h-[8px] w-[8px] rounded-full bg-[#3B82F6]" /> */}

            {/* Avatar */}
            <div className="flex h-[32px] w-[32px] flex-shrink-0 items-center justify-center rounded-full border border-[#E1E1E1] bg-white overflow-hidden opacity-60">
              <img
                src="https://documents.folk.app/sample-contact-avatar-yellow.webp"
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content & Meta */}
            <div className="flex flex-col flex-1 gap-[2px] opacity-60">
              <span className="text-[13px] font-[500] text-[#202020] leading-[18px]">
                Jane Doe assigned you to [Sample] Vanessa Hickle as "Prospect
                owner"
              </span>
              <span className="text-[13px] text-[#626262]">3 minutes ago</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Notifications Main Detail Area (Empty in this state) */}
      <div className="hidden md:flex flex-1 items-center justify-center bg-[#FFFFFF]">
        <span className="text-[13px] text-[#626262]">
          No unread notifications
        </span>
      </div>
    </div>
  );
}
