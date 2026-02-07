import React, { useState, useEffect } from 'react';
import {
    CheckSquare,
    Check,
    Building
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

    return (
        <div className="flex w-full h-screen bg-white dark:bg-[#1a1d21] font-['Inter',sans-serif] text-[10px] overflow-hidden">
            {/* Content Area - Task List */}
            <div className="flex-1 overflow-y-auto overflow-x-auto flex flex-col bg-white dark:bg-[#1a1d21] pt-[32px]">
                {/* Today Section */}
                <div className="flex flex-col mb-[32px]">
                    {/* Section Header */}
                    <div className="flex items-center px-[16px] h-[32px] gap-[4px] sticky top-0 bg-white dark:bg-[#1a1d21] z-10 border-b border-[#EEEFF1] dark:border-[#27282B]">
                        <span className="text-[12px] font-[500] text-[#5C5E63] dark:text-[#A2A4A7] leading-[16px]">Today</span>
                        <span className="flex items-center justify-center min-w-[14px] h-[14px] px-[4px] rounded-[4px] bg-[#EEEFF1] dark:bg-[#2F3033] text-[10px] font-[500] text-[#5C5E63] dark:text-[#CDCFD1] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">1</span>
                    </div>

                    {/* Task Item - Active */}
                    <div className="group flex items-center h-[52px] px-[16px] gap-[32px] bg-white dark:bg-[#1F2125]/35 hover:bg-[#F9F9FB] dark:hover:bg-[#1F2125] border-b border-[#EEEFF1] dark:border-[#27282B] transition-colors cursor-pointer">
                        {/* GETTING TODAY TASK ITEMS */}
                        {/* Task Title Area */}
                        <div className="flex items-center gap-[8px] flex-[2] min-w-[300px]">
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
                        <div className="flex items-center gap-[4px] flex-1 min-w-[180px]">
                            <span className="text-[14px] font-[500] text-[#CF8300] leading-[20px] truncate">
                                Due today
                            </span>
                            {/* Linked Record */}
                            <div className="flex items-center gap-[6px] px-[4px] py-[1px] rounded-[6px] text-[#266DF0] dark:text-[#9E9EFF] border border-[#266DF0] dark:border-[#9E9EFF] bg-transparent">
                                <div className="w-[16px] h-[16px] flex items-center justify-center rounded-[4px] bg-[#266DF0] dark:bg-[#266DF0] text-white">
                                    {/* Simple icon for Airbnb */}
                                    <Building size={10} className="text-white" />
                                </div>
                                <span className="text-[14px] font-[500]">Airbnb</span>
                            </div>
                        </div>

                        {/* Assignee */}
                        <div className="flex items-center flex-1 justify-start min-w-[100px]">
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
                        {/* GETTING UPCOMING TASK ITEMS */}
                        {/* Task Title Area */}
                        <div className="flex items-center gap-[8px] flex-[2] min-w-[300px]">
                            {/* Custom Checkbox */}
                            <div className="flex items-center justify-center w-[16px] h-[16px] rounded-[16px] border border-[#D0D3D6] dark:border-[#2F3033] bg-white dark:bg-[#1A1D21] group-hover:border-[#266DF0] dark:group-hover:border-[#3b82f6] transition-colors cursor-pointer">
                                <Check size={10} className="text-white opacity-0 group-hover:opacity-100 bg-[#266DF0] rounded-full p-[1px]" />
                            </div>

                            <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] truncate">
                                Bring flowers to my spouse (check phone reminder)
                            </span>
                        </div>

                        {/* Columns Area */}
                        <div className="flex items-center gap-[4px] flex-1 min-w-[180px]">
                            <span className="text-[14px] font-[500] text-[#5C5E63] dark:text-[#FFFFFF8C] leading-[20px] truncate">
                                Due Feb 14, 2026
                            </span>
                        </div>

                        {/* Assignee */}
                        <div className="flex items-center flex-1 justify-start min-w-[100px]">
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
        </div>
    );
}
