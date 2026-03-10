import React, { useState, useEffect } from "react";
import {
  HelpCircle,
  Search,
  Bell,
  MessageSquare,
  LayoutDashboard,
  Bot,
  ChevronDown,
  ChevronRight,
  Plus,
  MoreHorizontal,
  Trash2,
  Settings,
  PanelLeftClose,
  Menu,
  Star,
} from "lucide-react";

export default function Page({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isGroupsOpen, setGroupsOpen] = useState(true);

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

  // Handle responsive sidebar auto-collapse
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { icon: Search, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: MessageSquare, label: "Messages" },
    { icon: LayoutDashboard, label: "Dashboards" },
    { icon: Bot, label: "Acme Assistants" },
  ];

  const myGroups = [
    { emoji: "🤑", label: "Leads" },
    { emoji: "🗣️", label: "Clients" },
    { emoji: "🤝", label: "Partners" },
  ];

  return (
    <div className="flex h-screen w-full bg-[#ffffff] dark:bg-[#191919] font-sans text-[#202020] dark:text-[#eeeeee] overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative flex flex-col flex-shrink-0 w-[240px] h-full border-r border-[#d9d9d9] dark:border-[#3d3d3d] bg-[#ffffff] dark:bg-[#191919] z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:hidden lg:w-0"
        } ${!isSidebarOpen && "lg:hidden"}`}
      >
        {/* Sidebar Header */}
        <header className="flex items-center justify-between h-[48px] px-2 py-2.5 border-b border-[#d9d9d9] dark:border-[#3d3d3d]">
          <button className="flex items-center justify-center h-7 px-2 py-1.5 hover:bg-black/5 dark:hover:bg-white/5 rounded group">
            <span className="flex items-center justify-center w-4 h-4 mr-2 border border-[#e1e1e1] dark:border-[#353535] rounded-sm bg-white dark:bg-[#191919] text-[9px] font-medium text-[#626262] dark:text-[#b4b4b4]">
              A
            </span>
            <span className="text-[13px] font-medium leading-[30px] tracking-[-0.25px] text-[#202020] dark:text-[#eeeeee] truncate">
              Acme Corp
            </span>
            <ChevronDown className="w-4 h-4 ml-0.5 text-[#626262] dark:text-[#b4b4b4] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            className="flex items-center justify-center w-7 h-7 hover:bg-black/5 dark:hover:bg-white/5 rounded-full"
            onClick={() => setSidebarOpen(false)}
          >
            <PanelLeftClose className="w-4 h-4 text-[#626262] dark:text-[#b4b4b4]" />
          </button>
        </header>

        {/* Scrolling Content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Trial Block */}
          <div className="flex flex-col gap-2 p-4 bg-[#f1f1f1] dark:bg-[#272727] border-b border-[#d9d9d9] dark:border-[#3d3d3d]">
            <div className="flex items-center text-[13px] text-[#202020] dark:text-[#eeeeee]">
              <HelpCircle className="w-4 h-4 mr-1 text-[#626262] dark:text-[#b4b4b4]" />
              <span className="font-medium">Premium trial</span>
              <span className="ml-1 text-[#626262] dark:text-[#b4b4b4]">
                (2 weeks left)
              </span>
            </div>
            <button className="flex items-center justify-center h-7 px-2.5 bg-[#202020] dark:bg-[#eeeeee] text-[#fdfdfd] dark:text-[#191919] text-[13px] font-medium rounded-full hover:bg-[#3D3D3D] dark:hover:bg-[#D4D4D4] w-fit">
              Subscribe
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col p-2 pt-3 gap-0.5">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="flex items-center h-7 px-2 gap-2 text-[13px] text-[#626262] dark:text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 rounded"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Groups Section */}
          <div className="flex flex-col p-2 gap-0.5 mt-2">
            <div className="flex items-center justify-between h-7 px-2 pr-0">
              <div
                className="flex items-center flex-1 gap-0.5 cursor-pointer"
                onClick={() => setGroupsOpen(!isGroupsOpen)}
              >
                <span className="text-[12px] font-medium text-[#626262] dark:text-[#b4b4b4] uppercase tracking-wider">
                  My groups
                </span>
                <div className="flex items-center justify-center w-6 h-6 text-[#626262] dark:text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 rounded-full">
                  {isGroupsOpen ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  )}
                </div>
              </div>
              <button className="flex items-center justify-center w-6 h-6 text-[#626262] dark:text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 rounded-full">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {isGroupsOpen && (
              <div className="flex flex-col gap-0.5 mt-1">
                {myGroups.map((group, index) => (
                  <button
                    key={index}
                    className={`flex items-center justify-between h-7 px-2 rounded group ${
                      index === 0
                        ? "bg-black/5 dark:bg-white/5"
                        : "hover:bg-black/5 dark:hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[16px]">{group.emoji}</span>
                      <span className="text-[13px] font-medium text-[#323232] dark:text-[#eeeeee]">
                        {group.label}
                      </span>
                    </div>
                    <div className="flex items-center justify-center w-6 h-6 text-[#626262] dark:text-[#b4b4b4] opacity-0 group-hover:opacity-100 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-opacity">
                      <MoreHorizontal className="w-4 h-4" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Fixed Nav */}
        <div className="flex flex-col p-2 gap-0.5 border-t border-[#d9d9d9] dark:border-[#3d3d3d] bg-white dark:bg-[#191919]">
          <button className="flex items-center h-7 px-2 gap-2 text-[13px] text-[#626262] dark:text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 rounded">
            <Trash2 className="w-4 h-4" />
            <span>Trash</span>
          </button>
          <button className="flex items-center h-7 px-2 gap-2 text-[13px] text-[#626262] dark:text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 rounded">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative bg-[#ffffff] dark:bg-[#191919] overflow-hidden">
        {/* Help Button - Fixed at bottom right */}
        <div className="absolute right-3 bottom-3 z-50">
          <button className="flex items-center justify-center w-8 h-8 bg-white dark:bg-[#222222] border border-[#bbbbbb] dark:border-[#606060] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] text-[#202020] dark:text-[#eeeeee]">
            <HelpCircle className="w-4 h-4" />
          </button>
        </div>

        {/* Topbar */}
        <header className="flex items-center justify-between h-[48px] px-4 lg:px-6 border-b border-[#d9d9d9] dark:border-[#3d3d3d] shrink-0">
          <div className="flex items-center gap-3">
            {(!isSidebarOpen ||
              (typeof window !== "undefined" && window.innerWidth < 1024)) && (
              <button
                className="flex items-center justify-center w-7 h-7 hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors mr-1"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-4 h-4 text-[#626262] dark:text-[#b4b4b4]" />
              </button>
            )}
            <div className="flex items-center gap-2">
              <span className="text-[20px]">🤑</span>
              <h1 className="text-[20px] font-medium text-[#202020] dark:text-[#eeeeee] tracking-[-0.38px]">
                Leads
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center w-7 h-7 text-[#626262] dark:text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors hidden sm:flex">
              <Star className="w-4 h-4" />
            </button>
            <div className="hidden sm:flex items-center mr-1">
              <div className="w-6 h-6 rounded-full border border-white dark:border-[#191919] bg-gray-200 dark:bg-[#333333] flex items-center justify-center text-[10px] text-[#202020] dark:text-[#eeeeee] z-10">
                J
              </div>
            </div>
            <button className="h-7 px-3 bg-[#202020] dark:bg-[#eeeeee] text-white dark:text-[#191919] text-[13px] font-medium rounded-full hover:bg-[#3D3D3D] dark:hover:bg-[#D4D4D4] transition-colors hidden sm:flex items-center">
              Share
            </button>
            <button className="flex items-center justify-center w-7 h-7 text-[#626262] dark:text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 rounded-full transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Page Content Slot */}
        <div className="flex-1 overflow-auto">
          {children ? (
            children
          ) : (
            <div className="flex items-center justify-center h-full w-full">
              <p className="text-gray-400 dark:text-[#b4b4b4] font-medium">
                Page Content Slot
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
