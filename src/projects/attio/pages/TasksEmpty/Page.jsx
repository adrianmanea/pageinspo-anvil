import React, { useState, useEffect } from 'react';
import {
    CheckSquare,
    Zap,
    Plus,
    GraduationCap,
    ArrowUpDown,
    Filter,
    Settings,
    CircleHelp
} from 'lucide-react';

export default function TasksEmptyPage() {
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
            {/* Content Area - Scrollable */}
            <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-8 bg-white dark:bg-[#1a1d21]">
                {/* Empty State Container */}
                <div className="flex flex-col items-center gap-[24px] max-w-[400px]">
                    {/* Illustration */}
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
                            {/* Tasks cards simulation */}
                            <g opacity="0.6">
                                <path d="M84.8 59.4L87.4 56.6" className="stroke-[#5C5E63] dark:stroke-[#9FA1A7]" strokeWidth="0.6" strokeLinecap="round" />
                                <rect width="27.6" height="3.6" rx="1.4" transform="matrix(0.866 -0.5 0 1 92.4 52.8)" className="stroke-[#5C5E63] dark:stroke-[#9FA1A7]" strokeWidth="0.6" />
                                <rect width="27.6" height="3.6" rx="1.4" transform="matrix(0.866 -0.5 0 1 92.4 65.9)" className="stroke-[#5C5E63] dark:stroke-[#9FA1A7]" strokeWidth="0.6" />
                                <rect width="27.6" height="3.6" rx="1.4" transform="matrix(0.866 -0.5 0 1 92.4 79.0)" className="stroke-[#5C5E63] dark:stroke-[#9FA1A7]" strokeWidth="0.6" />
                                <rect width="27.6" height="3.6" rx="1.4" transform="matrix(0.866 -0.5 0 1 92.4 92.1)" className="stroke-[#5C5E63] dark:stroke-[#9FA1A7]" strokeWidth="0.6" />
                                {/* Card Content */}
                                <path d="M131.7 26.7C131.7 26.6 131.6 26.5 131.5 26.5L129 25C128.9 25 128.8 25 128.7 25C128.4 25 128 25.2 127.3 25.6L86 49.5C85.3 49.9 84.9 50.1 84.6 50.4C84.4 50.7 84.2 51 84.1 51.3C84 51.7 84 52.1 84 52.9V110.9C84 111.7 84 112.1 84.1 112.4C84.2 112.5 84.2 112.6 84.3 112.6L86.9 114.1C87 114.1 87.1 114.1 87.2 114.1C87.4 114.1 87.8 113.9 88.5 113.5L129.9 89.6C130.6 89.2 130.9 89 131.2 88.7C131.4 88.4 131.6 88.1 131.7 87.8C131.9 87.4 131.9 87 131.9 86.1V28.2C131.9 27.4 131.9 27 131.7 26.7Z" className="fill-white dark:fill-[#202225] stroke-[#5C5E63] dark:stroke-[#5C5E63]" strokeWidth="1" />
                                <path d="M111.8 31.8C112.2 32.1 112.9 32.1 113.6 31.7L116.8 29.9C118.9 28.7 120.6 29.6 120.6 32C120.6 32.4 120.3 32.9 119.9 33.1L96 47C95.6 47.2 95.3 47 95.3 46.6C95.3 44.2 97 41.3 99.1 40L102.3 38.2C103.7 37.4 104.8 35.5 104.8 33.9C104.8 31.9 106.2 29.4 107.9 28.4C109.7 27.4 111.1 28.2 111.1 30.2C111.1 31.8 112.2 32.5 113.6 31.7Z" className="fill-white dark:fill-[#202225] stroke-[#9FA1A7] dark:stroke-[#5C5E63]" strokeWidth="0.6" />
                            </g>
                        </svg>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col items-center gap-[8px] text-center">
                        <h2 className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529] dark:text-[#EEEFF1]">Tasks</h2>
                        <p className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#505154] dark:text-[#9FA1A7]">
                            No tasks yet! Create your first task to get started.
                        </p>
                    </div>

                    {/* CTA Button */}
                    <button className="flex items-center gap-[6px] px-[12px] h-[32px] bg-[#266DF0] rounded-[8px] hover:bg-[#1B5CD0] transition-colors shadow-sm">
                        <Plus className="w-[14px] h-[14px] text-white" />
                        <span className="text-[14px] font-[500] text-white leading-[20px] tracking-[-0.28px]">New task</span>
                    </button>

                    <div className="h-[20px]"></div>

                    {/* Learn More Card */}
                    <div className="flex flex-col gap-[8px] w-[309px] self-center">
                        <span className="text-[12px] font-[500] text-[#00000066] dark:text-[#FFFFFF8C] self-start">Learn more</span>
                        <a href="#" className="flex items-center gap-[12px] p-[8px] rounded-[18px] border border-[#EEEFF1] dark:border-[#27282B] bg-white dark:bg-[#1A1D21] hover:bg-[#F9F9FB] dark:hover:bg-[#202225] transition-colors group">
                            <div className="w-[56px] h-[56px] rounded-[12px] border border-[#E6E7EA] dark:border-[#27282B] bg-[#FBFBFB] dark:bg-[#202225] flex items-center justify-center overflow-hidden">
                                {/* Academy Icon */}
                                <GraduationCap size={24} strokeWidth={1.5} className="text-[#0000EE] dark:text-[#9E9EFF]" />
                            </div>
                            <div className="flex flex-col gap-[2px]">
                                <span className="text-[14px] font-[600] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.28px]">Notes, tasks and email sending</span>
                                <span className="text-[14px] font-[400] text-[#505154] dark:text-[#9FA1A7] leading-[20px] tracking-[-0.28px]">Acme Academy</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
