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
    CircleHelp,
    ArrowUpDown,
    Filter,
} from 'lucide-react';

export default function AppShellPage() {
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
        `flex items-center gap-[6px] pl-[8px] pr-[4px] min-h-[28px] h-[28px] rounded-[9px] text-[14px] font-[500] leading-[20px] tracking-[-0.28px] transition-colors w-full box-border ${active
            ? "bg-[#EEEFF1] text-[#242529] fill-[#242529] dark:bg-[#242529] dark:text-[#EEEFF1] dark:fill-[#EEEFF1]"
            : "text-[#242529] hover:bg-[rgba(0,0,0,0.04)] dark:text-[#EEEFF1] dark:hover:bg-[#1A1D21]"
        }`;

    const iconClass = (active) =>
        `w-[14px] h-[14px] ${active
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
                            <button className="flex items-center gap-[6px] flex-1 h-[28px] px-[6px] bg-white dark:bg-[#1A1D21] rounded-[8px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] hover:bg-[#F9F9FB] dark:hover:bg-[#202225] transition-colors overflow-hidden">
                                <div className="w-[14px] h-[14px] text-[#505154] dark:text-[#A2A4A7] flex items-center justify-center">
                                    <Zap size={14} strokeWidth={1.5} />
                                </div>
                                <span className="text-[14px] font-[500] leading-[20px] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.28px] truncate flex-1 text-left">
                                    Quick actions
                                </span>
                                <kbd className="flex items-center justify-center h-[20px] px-[4px] bg-transparent rounded-[6px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] text-[11px] font-[400] text-[#00000066] dark:text-[#FFFFFF4A] uppercase tracking-[0.22px]">
                                    Ctrl K
                                </kbd>
                            </button>
                            <button className="flex items-center justify-center w-[50px] h-[28px] bg-white dark:bg-[#1A1D21] rounded-[8px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] hover:bg-[#F9F9FB] dark:hover:bg-[#202225] gap-[6px]">
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
                                        <div className="absolute left-[15px] top-[0px] bottom-[4px] w-[1px] bg-[#E6E7EA] dark:bg-[#2F3033]" />
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
                            <CheckSquare className="w-[14px] h-[14px] text-[#242529] dark:text-[#EEEFF1]" />
                            <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.28px]">Tasks</span>
                        </div>
                    </div>

                    {/* Help Button - Right aligned in Row 1 */}
                    <button className="flex items-center gap-[6px] px-[6px] py-[4px] h-[28px] rounded-[8px] hover:bg-[#F9F9FB] dark:hover:bg-[#1A1C20] transition-colors">
                        <div className="w-[14px] h-[14px] flex items-center justify-center text-[#5C5E63] dark:text-[#9FA1A7]">
                            <CircleHelp size={14} strokeWidth={1.5} />
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
                                <ArrowUpDown size={14} strokeWidth={1.5} />
                            </div>
                            <span className="text-[14px] font-[500] text-white dark:text-[#9FA1A7] leading-[20px] tracking-[-0.28px]">
                                Sorted by <span className="text-white dark:text-[#EEEFF1]">Due date</span>
                            </span>
                        </button>

                        {/* Filter Button */}
                        <button className="flex items-center gap-[6px] px-[8px] h-[28px] bg-[#FBFBFB] dark:bg-[#15181C] border border-[#E6E7EA] dark:border-[#27282B] rounded-[8px] hover:bg-[#F1F1F4] dark:hover:bg-[#1A1C20] transition-colors shadow-sm">
                            <div className="w-[14px] h-[14px] flex items-center justify-center text-[#5C5E63] dark:text-[#9FA1A7]">
                                <Filter size={14} strokeWidth={1.5} />
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

                {/* Content Area - Placeholder */}
                <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-8 bg-white dark:bg-[#1a1d21]">
                    <div className="flex flex-col items-center gap-[24px] max-w-[400px]">
                        <div className="w-[215px] h-[140px] text-[#EEEFF1] dark:text-[#27282B]">
                            <svg width="215" height="140" viewBox="0 0 215 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="215" height="140" className="fill-white dark:fill-[#15181C]" />
                                <path d="M64 0L64 140" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                                <path d="M151 0L151 140" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                                <path d="M215 24H0" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                                <path d="M215 50H0" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                                <path d="M215 88H0" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                                <path d="M215 114H0" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                                <path d="M199 0L199 140" stroke="currentColor" strokeWidth="0.8" />
                                <path d="M16 0L16 140" stroke="currentColor" strokeWidth="0.8" />
                                <path d="M0 16L215 16" stroke="currentColor" strokeWidth="0.8" />
                                <path d="M0 124L215 124" stroke="currentColor" strokeWidth="0.8" />
                            </svg>
                        </div>
                        <div className="flex flex-col items-center gap-[8px] text-center">
                            <h2 className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529] dark:text-[#EEEFF1]">Welcome to Acme</h2>
                            <p className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#505154] dark:text-[#9FA1A7]">
                                Select an item from the sidebar to get started.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
