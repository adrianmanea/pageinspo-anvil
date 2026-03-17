import React, { useState, useEffect } from "react";
import {
  Plus,
  Sparkles,
  ChevronDown,
  UserPlus,
  PanelLeft,
  MessageSquare,
  Search,
  Video,
  MoreHorizontal,
  Folder,
  Settings,
  MoreVertical,
  ArrowRight,
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

  return (
    <div className="min-h-screen bg-white dark:bg-[#131314] text-[#0a1217] dark:text-[#e8e8e8] flex">
      {/* ===== SIDEBAR ===== */}
      <nav className="w-[260px] min-h-screen bg-white dark:bg-[#131314] border-r border-[#0a12170d] dark:border-[#e8e8e80d] flex flex-col flex-shrink-0">
        {/* Sidebar top bar */}
        <div className="flex items-center justify-between px-[12px] pt-[12px] pb-[8px]">
          <a href="#" className="flex items-center gap-[8px]">
            <p className="text-[14px] font-[500]">New workspace</p>
          </a>
          <button className="w-[28px] h-[28px] inline-flex items-center justify-center rounded-[6px] text-[#0a121799] dark:text-[#e8e8e899] hover:text-[#0a1217] dark:hover:text-[#e8e8e8] hover:bg-[#0a12170d] dark:hover:bg-[#e8e8e80d] transition-colors">
            <PanelLeft className="w-[16px] h-[16px]" />
          </button>
        </div>

        {/* Sidebar scrollable content */}
        <div className="flex-1 overflow-y-auto px-[12px]">
          {/* Nav items */}
          <ul className="flex flex-col gap-[2px] mt-[4px]">
            <li>
              <a
                href="#"
                className="flex items-center gap-[8px] px-[8px] py-[6px] rounded-[8px] text-[14px] font-[400] bg-[#0a12170d] dark:bg-[#e8e8e80d] text-[#0a1217] dark:text-[#e8e8e8]"
              >
                <MessageSquare className="w-[20px] h-[20px]" />
                New chat
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-[8px] px-[8px] py-[6px] rounded-[8px] text-[14px] font-[400] text-[#0a121799] dark:text-[#e8e8e899] hover:bg-[#0a12170d] dark:hover:bg-[#e8e8e80d] hover:text-[#0a1217] dark:hover:text-[#e8e8e8] transition-colors"
              >
                <Sparkles className="w-[20px] h-[20px]" />
                Workflows
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-[8px] px-[8px] py-[6px] rounded-[8px] text-[14px] font-[400] text-[#0a121799] dark:text-[#e8e8e899] hover:bg-[#0a12170d] dark:hover:bg-[#e8e8e80d] hover:text-[#0a1217] dark:hover:text-[#e8e8e8] transition-colors"
              >
                <Search className="w-[20px] h-[20px]" />
                Search
              </a>
            </li>
            <li>
              <button className="flex items-center gap-[8px] px-[8px] py-[6px] rounded-[8px] text-[14px] font-[400] text-[#0a121799] dark:text-[#e8e8e899] hover:bg-[#0a12170d] dark:hover:bg-[#e8e8e80d] hover:text-[#0a1217] dark:hover:text-[#e8e8e8] transition-colors w-full text-left">
                <Video className="w-[20px] h-[20px]" />
                Meetings
              </button>
            </li>
            <li>
              <button className="flex items-center gap-[8px] px-[8px] py-[6px] rounded-[8px] text-[14px] font-[400] text-[#0a121799] dark:text-[#e8e8e899] hover:bg-[#0a12170d] dark:hover:bg-[#e8e8e80d] hover:text-[#0a1217] dark:hover:text-[#e8e8e8] transition-colors w-full text-left">
                <MoreHorizontal className="w-[16px] h-[16px] mx-[2px]" />
                More
              </button>
            </li>
          </ul>

          {/* Folders section */}
          <div className="mt-[32px]">
            <h6 className="flex items-center justify-between ml-[12px] mb-[2px] text-[13px] font-[500]">
              <a href="#" className="hover:underline">
                Folders
              </a>
              <button className="w-[24px] h-[24px] inline-flex items-center justify-center rounded-[4px] text-[#0a121799] dark:text-[#e8e8e899] hover:text-[#0a1217] dark:hover:text-[#e8e8e8] mr-[8px]">
                <Plus className="w-[14px] h-[14px]" />
              </button>
            </h6>
            <ul className="flex flex-col gap-[2px] mt-[2px]">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-[8px] px-[8px] py-[6px] rounded-[8px] text-[14px] font-[400] text-[#0a121799] dark:text-[#e8e8e899] hover:bg-[#0a12170d] dark:hover:bg-[#e8e8e80d] hover:text-[#0a1217] dark:hover:text-[#e8e8e8] transition-colors group"
                >
                  <Folder className="w-[18px] h-[18px] flex-shrink-0" />
                  <span className="truncate">Demo folder</span>
                  <button className="ml-auto opacity-0 group-hover:opacity-100 text-[#0a121799] dark:text-[#e8e8e899] hover:text-[#0a1217] dark:hover:text-[#e8e8e8]">
                    <MoreVertical className="w-[16px] h-[16px]" />
                  </button>
                </a>
              </li>
              <li>
                <button className="flex items-center gap-[8px] px-[8px] py-[6px] rounded-[8px] text-[14px] font-[600] text-[#0a121799] dark:text-[#e8e8e899] hover:bg-[#0a12170d] dark:hover:bg-[#e8e8e80d] hover:text-[#0a1217] dark:hover:text-[#e8e8e8] transition-colors w-full text-left">
                  <ArrowRight className="w-[16px] h-[16px] ml-[1px] mr-[3px]" />
                  View all
                </button>
              </li>
            </ul>
          </div>

          {/* Recent chats */}
          <div className="mt-[32px]">
            <h6 className="text-[13px] font-[500] mb-[6px] ml-[12px]">
              Last week
            </h6>
            <ul className="flex flex-col gap-[2px]">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-between px-[8px] py-[6px] rounded-[8px] text-[14px] font-[400] text-[#0a121799] dark:text-[#e8e8e899] hover:bg-[#0a12170d] dark:hover:bg-[#e8e8e80d] hover:text-[#0a1217] dark:hover:text-[#e8e8e8] transition-colors group"
                >
                  <span className="truncate">Novo Nordisk Analysis</span>
                  <button className="opacity-0 group-hover:opacity-100 text-[#0a121799] dark:text-[#e8e8e899] hover:text-[#0a1217] dark:hover:text-[#e8e8e8]">
                    <MoreVertical className="w-[16px] h-[16px]" />
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar footer */}
        <div className="px-[12px] pb-[12px]">
          {/* Usage */}
          <div className="flex items-center gap-[12px] p-[8px] rounded-[8px]">
            <div className="flex-1">
              <p className="text-[14px] font-[500]">
                10 meetings and 20 messages left this month
              </p>
              <p className="text-[14px] opacity-40">
                Upgrade for unlimited use
              </p>
            </div>
            <button className="flex items-center justify-center h-[36px] px-[16px] rounded-full text-[14px] font-[500] bg-[#0a1217] dark:bg-[#e8e8e8] text-white dark:text-[#131314] hover:bg-[#0a1217e6] dark:hover:bg-[#e8e8e8e6] transition-colors flex-shrink-0">
              Upgrade
            </button>
          </div>
          {/* Settings */}
          <button className="flex items-center justify-between w-full px-[8px] py-[6px] rounded-[8px] text-[14px] font-[400] text-[#0a121799] dark:text-[#e8e8e899] hover:bg-[#0a12170d] dark:hover:bg-[#e8e8e80d] hover:text-[#0a1217] dark:hover:text-[#e8e8e8] transition-colors mt-[4px]">
            Settings
            <Settings className="w-[16px] h-[16px]" />
          </button>
        </div>
      </nav>

      {/* ===== MAIN CONTENT ===== */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top navigation bar */}
        <nav className="flex items-center justify-between px-[16px] py-[8px] border-b border-[#0a12170d] dark:border-[#e8e8e80d]">
          <div className="flex items-center gap-[4px]">
            <button className="flex items-center gap-[4px] h-[36px] px-[16px] rounded-full text-[14px] font-[500] text-[#0a1217] dark:text-[#e8e8e8] bg-transparent hover:bg-[#0a12170f] dark:hover:bg-[#e8e8e80f] transition-colors">
              All
              <ChevronDown className="w-[16px] h-[16px] text-[#0a121799] dark:text-[#e8e8e899]" />
            </button>
          </div>
          <div className="flex items-center gap-[8px]">
            <button className="flex items-center gap-[6px] h-[36px] px-[16px] pl-[12px] rounded-full text-[14px] font-[500] bg-[#0a12170f] dark:bg-[#e8e8e80f] text-[#0a1217] dark:text-[#e8e8e8] hover:bg-[#0a12171a] dark:hover:bg-[#e8e8e81a] backdrop-blur-[12px] transition-colors">
              <UserPlus className="w-[16px] h-[16px] text-[#0a121766] dark:text-[#e8e8e866]" />
              Invite
            </button>
            <button className="flex items-center h-[36px] px-[16px] rounded-full text-[14px] font-[500] text-[#0a1217] dark:text-[#e8e8e8] border border-[#0a12171a] dark:border-[#e8e8e81a] hover:border-[#0a121733] dark:hover:border-[#e8e8e833] backdrop-blur-[12px] transition-colors">
              Help
            </button>
          </div>
        </nav>

        {/* Content area — empty placeholder */}
        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <p className="text-[14px] text-[#0a121766] dark:text-[#e8e8e866]">
            Content area
          </p>
        </div>
      </div>
    </div>
  );
}
