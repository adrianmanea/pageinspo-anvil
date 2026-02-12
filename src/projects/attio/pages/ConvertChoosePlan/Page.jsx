import React, { useState, useEffect } from 'react';
import { Check, Box, Layers, Zap, Building2 } from 'lucide-react';

export default function ConvertChoosePlanPage() {
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
        <main className="min-h-screen w-full bg-white dark:bg-[#1b1d21] font-['Inter'] text-[10px] text-black dark:text-[#EEEFF1] relative flex flex-col transition-colors duration-200">
            {/* Progress Bar */}
            <div className="w-full h-[2px] bg-[#E6E7EA] dark:bg-[#2F3033]">
                <div className="w-[33%] h-[2px] bg-[#242529] dark:bg-[#EEEFF1] rounded-[4px]" />
            </div>

            {/* Header Section */}
            <div className="w-full max-w-[1200px] mx-auto p-[32px] flex flex-col items-center gap-[20px]">
                <a href="/" className="flex items-center justify-center">
                    <img
                        alt="Grapho logo"
                        src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/component-assets/grapho-dark.svg"
                        className="w-[96px] h-[24px] dark:hidden"
                    />
                    <img
                        alt="Grapho logo"
                        src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/component-assets/grapho-light.svg"
                        className="w-[96px] h-[24px] hidden dark:block"
                    />
                </a>

                <ol className="flex items-center gap-[4px] h-[24px]">
                    {/* Step 1: Choose plan (Active) */}
                    <div className="flex items-center gap-[4px] px-[4px] py-[2px] rounded-[4px]">
                        <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] dark:text-[#EEEFF1]">
                            Choose plan
                        </span>
                    </div>

                    {/* Separator */}
                    <span className="block w-[1px] h-[10px] bg-[#EEEFF1] dark:bg-[#2F3033] transform -skew-x-[10deg]" />

                    {/* Step 2: Seats and extras */}
                    <div className="flex items-center gap-[4px] px-[4px] py-[2px] rounded-[4px]">
                        <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#0000008C] dark:text-[#FFFFFF8C]">
                            Seats and extras
                        </span>
                    </div>

                    {/* Separator */}
                    <span className="block w-[1px] h-[10px] bg-[#EEEFF1] dark:bg-[#2F3033] transform -skew-x-[10deg]" />

                    {/* Step 3: Summary */}
                    <div className="flex items-center gap-[4px] px-[4px] py-[2px] rounded-[4px]">
                        <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#0000008C] dark:text-[#FFFFFF8C]">
                            Summary
                        </span>
                    </div>
                </ol>
            </div>

            {/* Main Content */}
            <div className="flex-1 w-full max-w-[1000px] mx-auto flex flex-col items-center justify-start p-[20px] pb-[96px] gap-[24px]">
                
                {/* Toggle Switch */}
                <div className="flex justify-center items-center gap-[4px] w-full">
                    <div className="flex gap-[2px] p-[2px] bg-[#0000000A] dark:bg-[#FFFFFF0A] rounded-[10px]">
                        {/* Annual (Selected) */}
                        <button className="flex justify-center items-center gap-[6px] px-[12px] py-[4px] bg-white dark:bg-[#15181C] rounded-[8px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0),0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)] dark:shadow-[inset_0_0_0_1px_#2F3033] h-[28px]">
                            <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#266DF0] dark:text-[#4E8CFC]">
                                Annual
                            </span>
                            <span className="flex items-center gap-[4px] h-[20px] px-[6px] py-[2px] bg-[#E5EEFF] dark:bg-[#1D2E55] rounded-[6px] shadow-[inset_0_0_0_1px_#D6E5FF] dark:shadow-[inset_0_0_0_1px_#2B3E6D]">
                                <span className="text-[12px] font-[500] leading-[16px] text-[#215BC4] dark:text-[#C2D6FF]">
                                    -20%
                                </span>
                            </span>
                        </button>
                        {/* Monthly */}
                        <button className="flex justify-center items-center gap-[6px] px-[12px] py-[4px] bg-transparent rounded-[8px] h-[28px]">
                            <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#0000008C] dark:text-[#FFFFFF8C]">
                                Monthly
                            </span>
                        </button>
                    </div>
                </div>

                {/* Pricing Cards Layout */}
                <div className="flex flex-col gap-[16px] w-full">
                    
                    {/* Top Row: 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px] w-full items-stretch">
                        
                        {/* 1. Plus Card */}
                        <div className="w-full border border-[#EEEFF1] dark:border-[#27282B] rounded-[12px] flex flex-col bg-white dark:bg-[#1A1D21]">
                            <div className="flex flex-col items-start gap-[20px] w-full p-[16px] flex-1">
                                {/* Header */}
                                <div className="flex flex-col items-start gap-[12px] w-full">
                                    <Layers size={30} strokeWidth={1.5} className="text-[#266DF0] dark:text-[#4E8CFC] fill-[#E5EEFF] dark:fill-[#1D2E55]" />
                                    <div className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529] dark:text-[#EEEFF1]">Plus</div>
                                </div>

                                {/* Price */}
                                <div className="flex flex-col items-start gap-0 w-full">
                                    <div className="flex items-center gap-[8px]">
                                        <div className="text-[24px] font-[600] leading-[28px] tracking-[-0.48px] text-[#242529] dark:text-[#EEEFF1]">$29</div>
                                        <span className="flex items-center gap-[4px] px-[6px] py-[2px] bg-[#E5EEFF] dark:bg-[#1D2E55] rounded-[6px] shadow-[inset_0_0_0_1px_#D6E5FF] dark:shadow-none">
                                            <span className="text-[12px] font-[500] leading-[16px] text-[#215BC4] dark:text-[#C2D6FF]">20% off</span>
                                        </span>
                                    </div>
                                    <div className="text-[12px] font-[500] leading-[16px] text-[#0000008C] dark:text-[#FFFFFF8C]">per user/month, billed annually</div>
                                </div>

                                {/* Button */}
                                <button className="flex justify-center items-center gap-[6px] w-full h-[36px] px-[12px] py-[4px] bg-white dark:bg-[#1A1D21] border border-[#EEEFF1] dark:border-[#27282B] rounded-[10px] hover:bg-gray-50 dark:hover:bg-[#2A2B2E] transition-colors">
                                    <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] dark:text-[#EEEFF1]">Subscribe to Plus</span>
                                </button>

                                {/* Features */}
                                <div className="flex flex-col items-start gap-[8px] w-full pt-[8px]">
                                    <div className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#505154] dark:text-[#A2A4A7]">For growing teams</div>
                                    <div className="flex flex-col gap-[10px] w-full">
                                        <FeatureItem text="Enhanced email sending" />
                                        <FeatureItem text="Permission settings" />
                                        <FeatureItem text="Upgraded contact analysis" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Pro Card (Highlighted) */}
                        <div className="w-full px-[1px] pb-[1px] bg-[#266DF0] rounded-[13px] flex flex-col relative shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
                            <div className="text-[12px] font-[500] leading-[16px] text-center text-white py-[4px]">You're using 7 Pro features</div>
                            <div className="flex-1 bg-white dark:bg-[#1A1D21] rounded-[12px] p-[16px] flex flex-col items-start gap-[20px] w-full">
                                {/* Header */}
                                <div className="flex flex-col items-start gap-[12px] w-full">
                                    <Zap size={30} strokeWidth={1.5} className="text-[#266DF0] dark:text-[#4E8CFC] fill-[#E5EEFF] dark:fill-[#1D2E55]" />
                                    <div className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529] dark:text-[#EEEFF1]">Pro</div>
                                </div>

                                {/* Price */}
                                <div className="flex flex-col items-start gap-0 w-full">
                                    <div className="flex items-center gap-[8px]">
                                        <div className="text-[24px] font-[600] leading-[28px] tracking-[-0.48px] text-[#242529] dark:text-[#EEEFF1]">$69</div>
                                        <span className="flex items-center gap-[4px] px-[6px] py-[2px] bg-[#E5EEFF] dark:bg-[#1D2E55] rounded-[6px] shadow-[inset_0_0_0_1px_#D6E5FF] dark:shadow-none">
                                            <span className="text-[12px] font-[500] leading-[16px] text-[#215BC4] dark:text-[#C2D6FF]">20% off</span>
                                        </span>
                                    </div>
                                    <div className="text-[12px] font-[500] leading-[16px] text-[#0000008C] dark:text-[#FFFFFF8C]">per user/month, billed annually</div>
                                </div>

                                {/* Button */}
                                <button className="flex justify-center items-center gap-[6px] w-full h-[36px] px-[12px] py-[4px] bg-[#266DF0] dark:bg-[#4E8CFC] rounded-[10px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(38,109,240,0.12),0_3px_6px_-2px_rgba(38,109,240,0.08)] hover:bg-[#1D4ED8] dark:hover:bg-[#3B7ADF] transition-colors">
                                    <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-white">Subscribe to Pro</span>
                                </button>

                                {/* Features */}
                                <div className="flex flex-col items-start gap-[8px] w-full pt-[8px]">
                                    <div className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#505154] dark:text-[#A2A4A7]">For scaling businesses</div>
                                    <div className="flex flex-col gap-[10px] w-full">
                                        <FeatureItem text="Full access permissions" />
                                        <FeatureItem text="Advanced data enrichment" />
                                        <FeatureItem text="Priority support" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Enterprise Card */}
                        <div className="w-full border border-[#EEEFF1] dark:border-[#27282B] rounded-[12px] flex flex-col bg-white dark:bg-[#1A1D21]">
                            <div className="flex flex-col items-start gap-[20px] w-full p-[16px] flex-1">
                                {/* Header */}
                                <div className="flex flex-col items-start gap-[12px] w-full">
                                    <Building2 size={30} strokeWidth={1.5} className="text-[#266DF0] dark:text-[#4E8CFC] fill-[#E5EEFF] dark:fill-[#1D2E55]" />
                                    <div className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529] dark:text-[#EEEFF1]">Enterprise</div>
                                </div>
                                {/* Price */}
                                <div className="flex flex-col items-start gap-0 w-full">
                                    <div className="text-[24px] font-[600] leading-[28px] tracking-[-0.48px] text-[#242529] dark:text-[#EEEFF1]">Custom</div>
                                </div>
                                {/* Button */}
                                <button className="flex justify-center items-center gap-[6px] w-full h-[36px] px-[12px] py-[4px] bg-white dark:bg-[#1A1D21] border border-[#EEEFF1] dark:border-[#27282B] rounded-[10px] hover:bg-gray-50 dark:hover:bg-[#2A2B2E] transition-colors">
                                    <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] dark:text-[#EEEFF1]">Talk to sales</span>
                                </button>

                                {/* Features */}
                                <div className="flex flex-col items-start gap-[8px] w-full pt-[8px]">
                                    <div className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#505154] dark:text-[#A2A4A7]">For large organizations</div>
                                    <div className="flex flex-col gap-[10px] w-full">
                                        <FeatureItem text="Unlimited reporting" />
                                        <FeatureItem text="SAML and SSO" />
                                        <FeatureItem text="Custom billing" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Free Plan - Horizontal Card */}
                    <div className="w-full border border-[#EEEFF1] dark:border-[#27282B] rounded-[12px] bg-white dark:bg-[#1A1D21] flex flex-col md:flex-row items-center p-[16px] gap-[16px]">
                        
                        {/* Section 1: Icon & Header */}
                        <div className="flex flex-row items-center gap-[16px] w-full md:w-auto md:min-w-[200px]">
                            <Box size={30} strokeWidth={1.5} className="text-[#266DF0] dark:text-[#4E8CFC] fill-[#E5EEFF] dark:fill-[#1D2E55]" />
                            <div className="flex flex-col">
                                <div className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529] dark:text-[#EEEFF1]">Free</div>
                                <div className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#505154] dark:text-[#A2A4A7]">For very small teams</div>
                            </div>
                        </div>
                        
                        {/* Section 2: Features */}
                        <div className="flex flex-col gap-[10px] w-full md:flex-1">
                            <div className="flex items-center gap-[6px]">
                                <div className="flex justify-center items-center w-[20px] h-[20px] bg-[#F8F9FA] dark:bg-[#15181C] rounded-[6px] shrink-0">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" className="stroke-[#242529] dark:stroke-[#EEEFF1]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="text-[12px] font-[500] leading-[16px] text-[#505154] dark:text-[#A2A4A7]">Unlimited records</div>
                            </div>
                            <div className="flex items-center gap-[6px]">
                                <div className="flex justify-center items-center w-[20px] h-[20px] bg-[#F8F9FA] dark:bg-[#15181C] rounded-[6px] shrink-0">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" className="stroke-[#242529] dark:stroke-[#EEEFF1]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="text-[12px] font-[500] leading-[16px] text-[#505154] dark:text-[#A2A4A7]">Sync your email & calendar</div>
                            </div>
                        </div>

                        {/* Section 3: Button */}
                        <div className="w-full md:w-auto md:min-w-[200px]">
                            <button className="flex justify-center items-center gap-[6px] w-full h-[36px] px-[12px] py-[4px] bg-white dark:bg-[#1A1D21] border border-[#EEEFF1] dark:border-[#27282B] rounded-[10px] hover:bg-gray-50 dark:hover:bg-[#2A2B2E] transition-colors">
                                <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] dark:text-[#EEEFF1]">Continue with Free</span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}

// Helper Component for Feature Items
function FeatureItem({ text }) {
    return (
        <div className="flex items-start gap-[6px] w-full">
            <div className="flex justify-center items-center w-[20px] h-[20px] bg-[#F8F9FA] dark:bg-[#15181C] rounded-[6px] shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" className="stroke-[#242529] dark:stroke-[#EEEFF1]" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="text-[12px] font-[500] leading-[16px] text-[#505154] dark:text-[#A2A4A7] pt-[2px]">{text}</div>
        </div>
    );
}
