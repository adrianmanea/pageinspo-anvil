import React, { useState, useEffect } from 'react';
import {
  Bell,
  Search,
  CheckSquare,
  FileText,
  Mail,
  Phone,
  BarChart2,
  Zap,
  Star,
  Database,
  Users,
  Briefcase,
  ChevronDown,
  ChevronRight,
  Plus,
  MoreHorizontal,
  Settings,
  PanelLeftClose,
  PanelLeftOpen,
  Check
} from 'lucide-react';

export default function TasksWithItemsPage() {
  // Use vanilla URLSearchParams to avoid React Router dependency for standalone build
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
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

  const [collapsedSections, setCollapsedSections] = useState({
    automations: false,
    favorites: false,
    records: false,
    lists: false,
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSection = (section) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const navItemClass = (active) =>
    `flex items-center gap-[6px] pl-[8px] pr-[4px] min-h-[28px] h-[28px] rounded-[9px] text-[14px] font-[500] leading-[20px] tracking-[-0.28px] transition-colors w-full box-border ${
      active
        ? "bg-[#EEEFF1] text-[#242529] fill-[#242529] dark:bg-[#242529] dark:text-[#EEEFF1] dark:fill-[#EEEFF1]"
        : "text-[#242529] hover:bg-[rgba(0,0,0,0.04)] dark:text-[#EEEFF1] dark:hover:bg-[#1A1D21]"
    }`;

  const iconClass = (active) =>
    `w-[14px] h-[14px] ${
      active
        ? "text-[#242529] dark:text-[#A2A4A7]"
        : "text-[#242529] dark:text-[#A2A4A7]"
    }`;

  return (
    <div className="flex w-full h-screen bg-white dark:bg-[#15181C] font-['Inter',sans-serif] text-[10px] overflow-hidden">
      {/* Sidebar Hover Trigger Zone & Container */}
      <div className={`fixed inset-y-0 left-0 z-50 group flex ${!isSidebarOpen ? 'w-[8px]' : 'w-[275px]'} pointer-events-none`}>
          {/* Hover Trigger (only active when closed) */}
          <div className={`absolute inset-y-0 left-0 w-[8px] bg-transparent pointer-events-auto ${isSidebarOpen ? 'hidden' : 'block'}`} />
          
          {/* Sidebar */}
          <nav className={`
            pointer-events-auto
            flex flex-col w-[275px] min-w-[275px] h-full bg-[#FBFBFB] dark:bg-[#15181C] border-r border-[#EEEFF1] dark:border-[#27282B] overflow-hidden 
            transition-all duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full group-hover:translate-x-0'}
          `}>
            {/* Header (Acme) */}
            <div className="flex items-center h-[48px] px-[12px] border-b border-[#EEEFF1] dark:border-[#27282B] relative z-20">
                <button className="flex items-center gap-[12px] w-full h-full text-left">
                    <span className="flex items-center justify-center w-[24px] h-[24px] rounded-[30%] bg-[#F97514] dark:bg-[#C95908] text-[#FEEEFF] text-[14px] font-[500] uppercase">
                        A
                    </span>
                    <span className="flex-1 text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#242529] dark:text-[#EEEFF1] truncate">
                        Acme
                    </span>
                </button>
                <button 
                    onClick={() => setIsSidebarOpen(false)}
                    className="absolute right-[13px] top-[12px] p-1 rounded-md hover:bg-black/5 dark:hover:bg-white/5 text-[#0000008C] dark:text-white" 
                    aria-label="Collapse sidebar"
                >
                     <PanelLeftClose className="w-[18px] h-[18px]" />
                </button>
            </div>

            {/* Search & Quick Actions */}
            <div className="flex flex-col px-[12px] py-[10px] gap-[8px]">
               <div className="flex items-center gap-[6px]">
                   <button className="flex items-center gap-[6px] flex-1 h-[28px] px-[6px] bg-white dark:bg-[#1A1D21] rounded-[8px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0),0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)] dark:shadow-[inset_0_0_0_1px_rgb(47,48,51),0_0_2px_0_rgb(0,0,0),0_1px_3px_0_rgba(0,0,0,0.08)] hover:bg-[#F9F9FB] dark:hover:bg-[#202225] transition-colors overflow-hidden">
                       <div className="w-[14px] h-[14px] text-[#505154] dark:text-[#A2A4A7] flex items-center justify-center">
                            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="0.5" y="0.5" width="9" height="8" rx="2.5" />
                                 <path d="M4 2V6M4 4.5L5 3.5M5 3.5L7 1.5M5 3.5L7 5.5"  />
                            </svg>
                       </div>
                       <span className="text-[14px] font-[500] leading-[20px] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.28px] truncate flex-1 text-left">
                           Quick actions
                       </span>
                       <kbd className="flex items-center justify-center h-[20px] px-[4px] bg-transparent rounded-[6px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] text-[11px] font-[400] text-[#00000066] dark:text-[#FFFFFF4A] uppercase tracking-[0.22px]">
                           Ctrl K
                       </kbd>
                   </button>
                   <button className="flex items-center justify-center w-[50px] h-[28px] bg-white dark:bg-[#1A1D21] rounded-[8px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0),0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)] dark:shadow-[inset_0_0_0_1px_rgb(47,48,51),0_0_2px_0_rgb(0,0,0),0_1px_3px_0_rgba(0,0,0,0.08)] hover:bg-[#F9F9FB] dark:hover:bg-[#202225] gap-[6px]">
                       <Search className="w-[14px] h-[14px] text-black dark:text-[#EEEFF1]" />
                       <kbd className="flex items-center justify-center w-[20px] h-[20px] bg-transparent rounded-[6px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] text-[11px] font-[400] text-[#00000066] dark:text-[#FFFFFF4A] uppercase tracking-[0.22px]">
                           /
                       </kbd>
                   </button>
               </div>
            </div>
            <div className="h-[1px] bg-[rgba(0,0,0,0.06)] dark:bg-[rgba(255,255,255,0.06)] mb-[8px]" />

            {/* Scrollable Nav Area */}
            <div className="flex-1 overflow-y-auto px-[8px] flex flex-col gap-[12px]">
                {/* Main Nav Links */}
                <div className="flex flex-col gap-[1px]">
                     <button className={navItemClass(false)}>
                        <Bell className={iconClass(false)} />
                        <span className="truncate flex-1 text-left">Notifications</span>
                     </button>
                     <button className={navItemClass(true)}>
                        <CheckSquare className={iconClass(true)} />
                        <span className="truncate flex-1 text-left">Tasks</span>
                        {/* Task Count Badge */}
                        <div className="flex items-center justify-center h-[16px] min-w-[16px] px-[4px] rounded-[6px] bg-[#266DF0] text-white text-[10.5px] font-[600] leading-[16px]">
                            1
                        </div>
                     </button>
                     <button className={navItemClass(false)}>
                        <FileText className={iconClass(false)} />
                        <span className="truncate flex-1 text-left">Notes</span>
                     </button>
                     <button className={navItemClass(false)}>
                        <Mail className={iconClass(false)} />
                        <span className="truncate flex-1 text-left">Emails</span>
                     </button>
                     <button className={navItemClass(false)}>
                        <Phone className={iconClass(false)} />
                        <span className="truncate flex-1 text-left">Calls</span>
                     </button>
                     <button className={navItemClass(false)}>
                        <BarChart2 className={iconClass(false)} />
                        <span className="truncate flex-1 text-left">Reports</span>
                     </button>
                     
                     {/* Automations - Integrated into Main Nav */}
                     <div className="flex flex-col gap-[1px]">
                        <button 
                            onClick={() => toggleSection('automations')}
                            className={`flex items-center gap-[6px] pl-[8px] pr-[4px] min-h-[28px] h-[28px] rounded-[9px] text-[14px] font-[500] leading-[20px] tracking-[-0.28px] transition-colors w-full box-border text-[#242529] hover:bg-[rgba(0,0,0,0.04)] dark:text-[#EEEFF1] dark:hover:bg-[#1A1D21] group`}
                        >
                             <div className="flex items-center justify-center w-[14px] h-[14px]">
                                {collapsedSections.automations ? <ChevronRight size={14} className="text-[#505154] dark:text-[#A2A4A7]" /> : <ChevronDown size={14} className="text-[#505154] dark:text-[#A2A4A7]" />}
                             </div>
                             <span className="truncate flex-1 text-left">Automations</span>
                        </button>
                        {!collapsedSections.automations && (
                            <div className="relative flex flex-col pl-[28px] gap-[1px]">
                                {/* Vertical Line */}
                                <div className="absolute left-[15px] top-[0px] bottom-[4px] w-[1px] bg-[#2F3033]" />
                                 <button className="flex items-center gap-[8px] h-[28px] pl-[8px] text-[#505154] dark:text-[#A2A4A7] hover:text-[#242529] hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[#1A1D21] rounded-[6px] transition-colors w-full">
                                     <Zap size={14} />
                                     <span className="text-[14px] font-[500]">Sequences</span>
                                 </button>
                                 <button className="flex items-center gap-[8px] h-[28px] pl-[8px] text-[#505154] dark:text-[#A2A4A7] hover:text-[#242529] hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[#1A1D21] rounded-[6px] transition-colors w-full">
                                     <Zap size={14} />
                                     <span className="text-[14px] font-[500]">Workflows</span>
                                 </button>
                            </div>
                        )}
                    </div>
                </div>

                <div className="h-[12px]" />

                {/* Favorites */}
                <div className="flex flex-col gap-[1px]">
                     <button 
                        onClick={() => toggleSection('favorites')}
                        className="flex items-center gap-[6px] px-[8px] h-[24px] text-[#505154] dark:text-[#FFFFFF8C] hover:text-[#242529] hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[#1A1D21] rounded-[6px] transition-colors group w-full"
                    >
                         <div className="w-[14px] flex justify-center">
                            {collapsedSections.favorites ? <ChevronRight size={12} /> : <ChevronDown size={12} />}
                         </div>
                         <span className="flex-1 text-left text-[12px] font-[500] leading-[16px] tracking-[-0.1px]">Favorites</span>
                    </button>
                    {!collapsedSections.favorites && (
                        <div className="flex flex-col pl-[12px] ml-[15px]">
                             <button className="flex items-center justify-center gap-[6px] h-[28px] border border-dashed border-[#E6E7EA] dark:border-[#2F3033] bg-white dark:bg-[#15181C] rounded-[8px] text-[#505154] dark:text-[#FFFFFF8C] hover:text-[#242529] dark:hover:text-white transition-colors w-full">
                                 <Plus size={14} />
                                 <span className="text-[13px] font-[500]">New folder</span>
                             </button>
                        </div>
                    )}
                </div>

                {/* Records - No Vertical Line */}
                <div className="flex flex-col gap-[1px]">
                     <button 
                        onClick={() => toggleSection('records')}
                        className="flex items-center gap-[6px] px-[8px] h-[24px] text-[#505154] dark:text-[#FFFFFF8C] hover:text-[#242529] hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[#1A1D21] rounded-[6px] transition-colors group w-full"
                    >
                         <div className="w-[14px] flex justify-center">
                             {collapsedSections.records ? <ChevronRight size={12} /> : <ChevronDown size={12} />}
                         </div>
                         <span className="flex-1 text-left text-[12px] font-[500] leading-[16px] tracking-[-0.1px]">Records</span>
                    </button>
                    {!collapsedSections.records && (
                        <div className="flex flex-col pl-[12px] ml-[15px]">
                             <button className="flex items-center gap-[8px] h-[28px] pl-[8px] text-[#242529] dark:text-[#EEEFF1] hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[#1A1D21] rounded-[6px] transition-colors w-full">
                                 <Database size={14} className="text-[#3b82f6]" />
                                 <span className="text-[14px] font-[500]">Companies</span>
                             </button>
                             <button className="flex items-center gap-[8px] h-[28px] pl-[8px] text-[#242529] dark:text-[#EEEFF1] hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[#1A1D21] rounded-[6px] transition-colors w-full">
                                 <Users size={14} className="text-[#3b82f6]" />
                                 <span className="text-[14px] font-[500]">People</span>
                             </button>
                        </div>
                    )}
                </div>

                {/* Lists - No Vertical Line */}
                <div className="flex flex-col gap-[1px]">
                     <button 
                        onClick={() => toggleSection('lists')}
                        className="flex items-center gap-[6px] px-[8px] h-[24px] text-[#505154] dark:text-[#FFFFFF8C] hover:text-[#242529] hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[#1A1D21] rounded-[6px] transition-colors group w-full"
                    >
                         <div className="w-[14px] flex justify-center">
                            {collapsedSections.lists ? <ChevronRight size={12} /> : <ChevronDown size={12} />}
                         </div>
                         <span className="flex-1 text-left text-[12px] font-[500] leading-[16px] tracking-[-0.1px]">Lists</span>
                    </button>
                    {!collapsedSections.lists && (
                        <div className="flex flex-col pl-[12px] ml-[15px]">
                             <button className="flex items-center justify-center gap-[6px] h-[28px] border border-dashed border-[#E6E7EA] dark:border-[#2F3033] bg-white dark:bg-[#15181C] rounded-[8px] text-[#505154] dark:text-[#FFFFFF8C] hover:text-[#242529] dark:hover:text-white transition-colors w-full">
                                 <Plus size={14} />
                                 <span className="text-[13px] font-[500]">New list</span>
                             </button>
                        </div>
                    )}
                </div>

                {/* Getting Started - Sticky Pill */}
                <div className="sticky bottom-[8px] flex justify-center mt-auto pointer-events-none">
                    <button className="pointer-events-auto flex items-center gap-[6px] px-[10px] h-[32px] bg-white dark:bg-[#1A1D21] border border-[#E6E7EA] dark:border-transparent rounded-[18px] shadow-[0_2px_4px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_0_1px_#2F3033,0_2px_4px_rgba(0,0,0,0.1)] hover:bg-[#F9F9FB] dark:hover:bg-[#242529] transition-colors">
                         <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1]">Getting started</span>
                         <span className="text-[14px] font-[500] text-[#505154] dark:text-[#FFFFFF8C]">14%</span>
                    </button>
                </div>
            </div>

            {/* Footer (Invite & Trial) - Fixed at Bottom */}
            <div className="flex flex-col border-t border-[#EEEFF1] dark:border-[#27282B] p-[8px] gap-[4px] bg-[#FBFBFB] dark:bg-[#15181C]">
                {/* Invite */}
                 <button className="flex items-center gap-[8px] h-[28px] px-[8px] text-[#242529] dark:text-[#EEEFF1] hover:bg-[rgba(0,0,0,0.04)] dark:hover:bg-[#1A1D21] rounded-[6px] transition-colors">
                     <Users className="w-[14px] h-[14px] text-[#5C5E63] dark:text-[#9FA1A7]" />
                     <span className="text-[14px] font-[500]">Invite team members</span>
                 </button>
                
                <div className="h-[1px] bg-[#E6E7EA] dark:bg-[#27282B] my-[3px]" />

                {/* Trial Banner - Single Line */}
                <div className="flex items-center h-[28px] px-[4px] gap-[6px]">
                     <div className="flex items-center justify-center w-[23px] h-[23px] rounded-[8px] border border-[#E6E7EA] dark:border-[#27282B] bg-transparent">
                        <Zap className="w-[14px] h-[14px] text-[#CF8300]" />
                     </div>
                     <span className="flex-1 text-[14px] font-[500] text-[#CF8300] truncate">7 days left on trial!</span>
                     <button className="flex items-center justify-center px-[6px] h-[20px] bg-[#266DF0] text-white text-[12px] font-[500] rounded-[6px] shadow-sm hover:bg-[#1B5BC9] transition-colors">
                         Keep Pro
                     </button>
                </div>
            </div>
          </nav>
      </div>

      {/* Main Content */}
      <main className={`flex-1 min-w-0 bg-white dark:bg-[#1a1d21] flex flex-col h-screen overflow-hidden transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-[275px]' : 'ml-0'}`}>
        {/* Header */}
        {/* Main Content Header - Row 1: Title & Help */}
        <div className="flex items-center justify-between h-[49px] min-h-[49px] max-h-[49px] px-[12px] border-b border-[#EEEFF1] dark:border-[#27282B] bg-white dark:bg-[#1a1d21] z-20 sticky top-0">
          <div className="flex items-center gap-[4px]">
             {/* Expand Button (Only visible when sidebar is closed) */}
             {!isSidebarOpen && (
                 <button onClick={() => setIsSidebarOpen(true)} className="flex items-center justify-center w-[24px] h-[24px] text-[#0000008C] hover:text-[#242529] dark:text-[#EEEFF1] dark:hover:text-white transition-colors" aria-label="Expand sidebar">
                     <PanelLeftOpen className="w-[18px] h-[18px]" />
                 </button>
             )}

             {/* Tasks Icon & Title */}
             <div className="flex items-center gap-[6px] px-[4px] py-[2px] rounded hover:bg-gray-100 dark:hover:bg-[#1A1C20] transition-colors cursor-pointer">
                {/* Only show icon if sidebar is collapsed, based on capture "Tasks" only shows text when sidebar hidden? 
                    Wait, capture line 28 shows "Tasks" text next to the icon.
                    In expanded, it shows Tasks icon + text. 
                    I'll keep it consistent. */}
                <CheckSquare className="w-[14px] h-[14px] text-[#242529] dark:text-[#EEEFF1]" />
                <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.28px]">Tasks</span>
             </div>
          </div>
          
          {/* Help Button - Right aligned in Row 1 */}
          <button className="flex items-center gap-[6px] px-[6px] py-[4px] h-[28px] rounded-[8px] hover:bg-[#F9F9FB] dark:hover:bg-[#1A1C20] transition-colors">
             <div className="w-[14px] h-[14px] flex items-center justify-center text-[#5C5E63] dark:text-[#9FA1A7]">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
                     <path d="M7 9.5V7M7 4.5H7.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
             </div>
             <span className="text-[14px] font-[500] text-[#505154] dark:text-[#9FA1A7] leading-[20px] tracking-[-0.28px]">Help</span>
          </button>
        </div>

        {/* Main Content Header - Row 2: Actions & View Controls */}
        <div className="flex items-center justify-between h-[49px] min-h-[49px] max-h-[49px] px-[12px] border-b border-[#EEEFF1] dark:border-[#27282B] bg-white dark:bg-[#1a1d21] z-10 sticky top-[49px]">
          {/* Left Group: Sorted By & Filter */}
          <div className="flex items-center gap-[8px]">
             {/* Sorted By */}
             <button className="flex items-center gap-[6px] px-[8px] h-[28px] bg-[#266DF0] dark:bg-[#15181C] border border-[#266DF0] dark:border-[#27282B] rounded-[8px] hover:bg-[#1B5CD0] dark:hover:bg-[#1A1C20] transition-colors shadow-sm dark:shadow-[inset_0_0_0_1px_rgba(47,48,51,1)]">
                  <div className="w-[14px] h-[14px] flex items-center justify-center text-white dark:text-[#9FA1A7]">
                       <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2">
                           <path d="M4 7H10M4 10.5H8M4 3.5H12" strokeLinecap="round"/>
                       </svg>
                  </div>
                  <span className="text-[14px] font-[500] text-white dark:text-[#9FA1A7] leading-[20px] tracking-[-0.28px]">
                      Sorted by <span className="text-white dark:text-[#EEEFF1]">Due date</span>
                  </span>
             </button>

             {/* Filter Button */}
             <button className="flex items-center gap-[6px] px-[8px] h-[28px] bg-[#FBFBFB] dark:bg-[#15181C] border border-[#E6E7EA] dark:border-[#27282B] rounded-[8px] hover:bg-[#F1F1F4] dark:hover:bg-[#1A1C20] transition-colors shadow-sm">
                 <div className="w-[14px] h-[14px] flex items-center justify-center text-[#5C5E63] dark:text-[#9FA1A7]">
                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                         <line x1="2" y1="4" x2="12" y2="4"/>
                         <line x1="4" y1="7" x2="10" y2="7"/>
                         <line x1="6" y1="10" x2="8" y2="10"/>
                     </svg>
                 </div>
                 <span className="text-[14px] font-[500] text-[#5C5E63] dark:text-[#9FA1A7] leading-[20px] tracking-[-0.28px]">Filter</span>
             </button>
             
             <div className="w-[1px] h-[20px] bg-[#E6E7EA] dark:bg-[#2F3033]" />
          </div>

          {/* Right Group: View Settings & New Task */}
           <div className="flex items-center gap-[8px]">
             {/* View Settings */}
             <button className="flex items-center gap-[6px] px-[8px] h-[28px] bg-white dark:bg-[#15181C] border border-[#E6E7EA] dark:border-[#27282B] rounded-[8px] hover:bg-[#F9F9FB] dark:hover:bg-[#1A1C20] transition-colors shadow-sm text-[#242529] dark:text-[#EEEFF1]">
                 <Settings className="w-[14px] h-[14px]" />
                 <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px]">View settings</span>
             </button>

             {/* New Task Button */}
             <button className="flex items-center gap-[6px] px-[8px] h-[28px] bg-[#266DF0] rounded-[8px] hover:bg-[#1B5CD0] transition-colors shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(38,109,240,0.12),0_3px_6px_-2px_rgba(38,109,240,0.08)]">
                 <Plus className="w-[14px] h-[14px] text-white" />
                 <span className="text-[14px] font-[500] text-white leading-[20px] tracking-[-0.28px]">New task</span>
             </button>
           </div>
        </div>

        {/* Content Area - Task List */}
        <div className="flex-1 overflow-y-auto flex flex-col bg-white dark:bg-[#1a1d21] pt-[32px]">
            {/* Today Section */}
            <div className="flex flex-col mb-[32px]">
                {/* Section Header */}
                <div className="flex items-center px-[16px] h-[32px] gap-[4px] sticky top-0 bg-white dark:bg-[#1a1d21] z-10 border-b border-[#EEEFF1] dark:border-[#27282B]">
                    <span className="text-[12px] font-[500] text-[#5C5E63] dark:text-[#A2A4A7] leading-[16px]">Today</span>
                    <span className="flex items-center justify-center min-w-[14px] h-[14px] px-[4px] rounded-[4px] bg-[#EEEFF1] dark:bg-[#2F3033] text-[10px] font-[500] text-[#5C5E63] dark:text-[#CDCFD1] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">1</span>
                </div>
                
                {/* Task Item - Active */}
                <div className="group flex items-center h-[52px] px-[16px] gap-[32px] bg-white dark:bg-[#1F2125]/35 hover:bg-[#F9F9FB] dark:hover:bg-[#1F2125] border-b border-[#EEEFF1] dark:border-[#27282B] transition-colors cursor-pointer">
                    {/* Task Title Area */}
                    <div className="flex items-center gap-[8px] flex-[2]">
                        {/* Custom Checkbox */}
                        <div className="flex items-center justify-center w-[16px] h-[16px] rounded-[16px] border border-[#D0D3D6] dark:border-[#2F3033] bg-white dark:bg-[#1A1D21] group-hover:border-[#266DF0] dark:group-hover:border-[#3b82f6] transition-colors cursor-pointer">
                            <Check size={10} className="text-white opacity-0 group-hover:opacity-100 bg-[#266DF0] rounded-full p-[1px]" />
                        </div>
                        
                        <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] truncate">
                            Tweet about @Airbnb
                        </span>
                        
                         {/* Task Tag */}
                        <div className="flex items-center h-[16px] px-[4px] rounded-[4px] bg-[#EEEFF1] dark:bg-[#2F3033] text-[10px] font-[500] text-[#5C5E63] dark:text-[#CDCFD1] border border-transparent dark:border-[#2F3033]">
                            Task
                        </div>
                    </div>

                     {/* Columns Area */}
                    <div className="flex items-center gap-[4px] flex-1">
                        <span className="text-[14px] font-[500] text-[#CF8300] leading-[20px] w-[120px]">
                            Due today
                        </span>
                         {/* Linked Record */}
                        <div className="flex items-center gap-[6px] px-[4px] py-[1px] rounded-[6px] text-[#266DF0] dark:text-[#9E9EFF] border border-[#266DF0] dark:border-[#9E9EFF] bg-transparent">
                             <div className="w-[16px] h-[16px] flex items-center justify-center rounded-[4px] bg-[#266DF0] dark:bg-[#266DF0] text-white">
                                 {/* Simple icon for Airbnb */}
                                 <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 2 4 10.5 4 16.5C4 20.6 7.4 24 11.5 24C12.91 24 14.28 23.63 15.5 23L12 18L8.5 23C5.9 21.9 4 19.4 4 16.5C4 12.1 12 2 12 2M12 2C12 2 20 10.5 20 16.5C20 20.6 16.6 24 12.5 24C11.66 24 10.87 23.83 10.13 23.53L12 18L13.87 23.53C17.3 22.4 20 19.4 20 16.5C20 12.1 12 2 12 2Z" /></svg>
                             </div>
                             <span className="text-[14px] font-[500]">Airbnb</span>
                        </div>
                    </div>
                     
                     {/* Assignee */}
                     <div className="flex items-center flex-1 justify-start">
                         <div className="flex items-center gap-[4px] pl-[4px] pr-[6px] py-[1px] rounded-[7px] bg-[#EEEFF1] dark:bg-[#2F3033] border border-transparent dark:border-black/20 shadow-sm">
                             <div className="w-[16px] h-[16px] rounded-full bg-[#266DF0] flex items-center justify-center text-[8px] font-bold text-white">
                                 J
                             </div>
                             <span className="text-[14px] font-[500] text-[#5C5E63] dark:text-[#CDCFD1]">John Doe</span>
                         </div>
                     </div>
                </div>
            </div>

            {/* Upcoming Section */}
             <div className="flex flex-col">
                {/* Section Header */}
                <div className="flex items-center px-[16px] h-[32px] gap-[4px] sticky top-0 bg-white dark:bg-[#1a1d21] z-10 border-b border-[#EEEFF1] dark:border-[#27282B]">
                    <span className="text-[12px] font-[500] text-[#5C5E63] dark:text-[#A2A4A7] leading-[16px]">Upcoming</span>
                    <span className="flex items-center justify-center min-w-[14px] h-[14px] px-[4px] rounded-[4px] bg-[#EEEFF1] dark:bg-[#2F3033] text-[10px] font-[500] text-[#5C5E63] dark:text-[#CDCFD1] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">1</span>
                </div>
                
                {/* Task Item */}
                <div className="group flex items-center h-[52px] px-[16px] gap-[32px] bg-white dark:bg-[#1F2125]/35 hover:bg-[#F9F9FB] dark:hover:bg-[#1F2125] border-b border-[#EEEFF1] dark:border-[#27282B] transition-colors cursor-pointer">
                    {/* Task Title Area */}
                    <div className="flex items-center gap-[8px] flex-[2]">
                        {/* Custom Checkbox */}
                        <div className="flex items-center justify-center w-[16px] h-[16px] rounded-[16px] border border-[#D0D3D6] dark:border-[#2F3033] bg-white dark:bg-[#1A1D21] group-hover:border-[#266DF0] dark:group-hover:border-[#3b82f6] transition-colors cursor-pointer">
                           <Check size={10} className="text-white opacity-0 group-hover:opacity-100 bg-[#266DF0] rounded-full p-[1px]" />
                        </div>
                        
                        <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] truncate">
                            Bring flowers to my spouse (check phone reminder)
                        </span>
                    </div>

                     {/* Columns Area */}
                    <div className="flex items-center gap-[4px] flex-1">
                        <span className="text-[14px] font-[500] text-[#5C5E63] dark:text-[#FFFFFF8C] leading-[20px] w-[120px]">
                            Due Feb 14, 2026
                        </span>
                    </div>
                     
                     {/* Assignee */}
                     <div className="flex items-center flex-1 justify-start">
                         <div className="flex items-center gap-[4px] pl-[4px] pr-[6px] py-[1px] rounded-[7px] bg-[#EEEFF1] dark:bg-[#2F3033] border border-transparent dark:border-black/20 shadow-sm">
                             <div className="w-[16px] h-[16px] rounded-full bg-[#266DF0] flex items-center justify-center text-[8px] font-bold text-white">
                                 J
                             </div>
                             <span className="text-[14px] font-[500] text-[#5C5E63] dark:text-[#CDCFD1]">John Doe</span>
                         </div>
                     </div>
                </div>
            </div>
            
        </div>
      </main>
    </div>
  );
}
