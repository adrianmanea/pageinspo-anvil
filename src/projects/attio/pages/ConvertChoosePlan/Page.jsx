import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

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
            <div className="flex-1 w-full max-w-[1000px] mx-auto flex flex-col items-center justify-start p-[20px] gap-[24px]">
                
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
                                    <svg width="30" height="25" viewBox="0 0 30 25" fill="none" className="shrink-0">
                                        <path d="M7.99852 4.00541L14.0745 0.533435C14.3858 0.355535 14.768 0.355535 15.0793 0.533435L21.1553 4.00541C21.4708 4.1857 21.6655 4.52124 21.6655 4.88464V11.8106C21.6655 12.174 21.4708 12.5095 21.1553 12.6898L15.0793 16.1618C14.768 16.3397 14.3858 16.3397 14.0745 16.1618L7.99852 12.6898C7.683 12.5095 7.48828 12.174 7.48828 11.8106V4.88464C7.48828 4.52124 7.683 4.1857 7.99852 4.00541Z" className="fill-white dark:fill-[#1A1D21] stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.5768 8.34722L7.70972 4.42317M14.5768 8.34722L21.4763 4.40466M14.5768 8.34722V16.1953" className="stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.506329" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.0874 8.0557L21.1633 4.58373C21.4747 4.40583 21.8569 4.40583 22.1682 4.58373L28.2441 8.0557C28.5596 8.236 28.7544 8.57153 28.7544 8.93493V15.8609C28.7544 16.2243 28.5596 16.5598 28.2441 16.7401L22.1682 20.2121C21.8569 20.39 21.4747 20.39 21.1633 20.2121L15.0874 16.7401C14.7719 16.5598 14.5771 16.2243 14.5771 15.8609V8.93493C14.5771 8.57153 14.7719 8.236 15.0874 8.0557Z" fill="#E5EEFF" stroke="#266DF0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" className="dark:fill-[#1D2E55] dark:stroke-[#4E8CFC]"/>
                                        <path opacity="0.4" d="M21.6657 12.3976L14.7986 8.47358M21.6657 12.3976L28.5651 8.45508M21.6657 12.3976V20.2457" stroke="#266DF0" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-[#4E8CFC]"/>
                                    </svg>
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
                                    <svg width="30" height="25" viewBox="0 0 30 25" fill="none" className="shrink-0">
                                        <path d="M7.99852 4.00541L14.0745 0.533435C14.3858 0.355535 14.768 0.355535 15.0793 0.533435L21.1553 4.00541C21.4708 4.1857 21.6655 4.52124 21.6655 4.88464V11.8106C21.6655 12.174 21.4708 12.5095 21.1553 12.6898L15.0793 16.1618C14.768 16.3397 14.3858 16.3397 14.0745 16.1618L7.99852 12.6898C7.683 12.5095 7.48828 12.174 7.48828 11.8106V4.88464C7.48828 4.52124 7.683 4.1857 7.99852 4.00541Z" className="fill-white dark:fill-[#1A1D21] stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.577 8.34722L7.70996 4.42317M14.577 8.34722L21.4765 4.40466M14.577 8.34722V16.1953" className="stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.506329" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.0874 8.0557L21.1633 4.58373C21.4747 4.40583 21.8569 4.40583 22.1682 4.58373L28.2441 8.0557C28.5596 8.236 28.7544 8.57153 28.7544 8.93493V15.8609C28.7544 16.2243 28.5596 16.5598 28.2441 16.7401L22.1682 20.2121C21.8569 20.39 21.4747 20.39 21.1633 20.2121L15.0874 16.7401C14.7719 16.5598 14.5771 16.2293 14.5771 15.8609V8.93493C14.5771 8.57153 14.7719 8.236 15.0874 8.0557Z" className="fill-[#E5EEFF] dark:fill-[#1D2E55] stroke-[#266DF0] dark:stroke-[#4E8CFC]" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path opacity="0.4" d="M21.6659 12.3976L14.7988 8.47358M21.6659 12.3976L28.5654 8.45508M21.6659 12.3976V20.2457" className="stroke-[#266DF0] dark:stroke-[#4E8CFC]" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M0.910142 8.0557L6.98609 4.58373C7.29742 4.40583 7.67961 4.40583 7.99093 4.58373L14.0669 8.0557C14.3824 8.236 14.5771 8.57153 14.5771 8.93493V15.8609C14.5771 16.2243 14.3824 16.5598 14.0669 16.7401L7.99093 20.2121C7.67961 20.39 7.29741 20.39 6.98609 20.2121L0.910141 16.7401C0.594622 16.5598 0.399902 16.2243 0.399902 15.8609V8.93493C0.399902 8.57153 0.594623 8.236 0.910142 8.0557Z" className="fill-white dark:fill-[#1A1D21] stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path opacity="0.4" d="M7.48867 12.3976L0.621582 8.47358M7.48867 12.3976L14.3881 8.45508M7.48867 12.3976V20.2457" className="stroke-[#266DF0] dark:stroke-[#4E8CFC]" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.99852 12.1061L14.0745 8.63414C14.3858 8.45624 14.768 8.45624 15.0793 8.63414L21.1553 12.1061C21.471 12.2864 21.6657 12.6219 21.6657 12.9853V19.9113C21.6657 20.2747 21.471 20.6102 21.1555 20.7905L15.0793 24.2625C14.768 24.4404 14.3858 24.4404 14.0745 24.2625L7.99852 20.7905C7.683 20.6102 7.48828 20.2747 7.48828 19.9113V12.9853C7.48828 12.6219 7.683 12.2864 7.99852 12.1061Z" className="fill-[#E5EEFF] dark:fill-[#1D2E55] stroke-[#266DF0] dark:stroke-[#4E8CFC]" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path opacity="0.4" d="M14.5766 16.4482L7.70947 12.5241M14.5766 16.4482L21.476 12.5056M14.5766 16.4482V24.2963" className="stroke-[#266DF0] dark:stroke-[#4E8CFC]" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
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
                                    <svg width="30" height="25" viewBox="0 0 30 25" fill="none" className="shrink-0">
                                        <path d="M7.99852 4.00541L14.0745 0.533435C14.3858 0.355535 14.768 0.355535 15.0793 0.533435L21.1553 4.00541C21.4708 4.1857 21.6655 4.52124 21.6655 4.88464V11.8106C21.6655 12.174 21.4708 12.5095 21.1553 12.6898L15.0793 16.1618C14.768 16.3397 14.3858 16.3397 14.0745 16.1618L7.99852 12.6898C7.683 12.5095 7.48828 12.174 7.48828 11.8106V4.88464C7.48828 4.52124 7.683 4.1857 7.99852 4.00541Z" className="fill-white dark:fill-[#1A1D21] stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.5768 8.34722L7.70972 4.42317M14.5768 8.34722L21.4763 4.40466M14.5768 8.34722V16.1953" className="stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.506329" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.0874 8.0557L21.1517 4.5888C21.4673 4.4109 21.8495 4.4109 22.1608 4.5888L28.2367 8.06077C28.5522 8.24105 28.747 8.57657 28.747 8.93998V15.8659C28.747 16.2293 28.5522 16.5649 28.2367 16.7451L22.1608 20.2171C21.8495 20.39 21.4673 20.39 21.1517 20.2171L15.0874 16.7451C14.7719 16.5649 14.5771 16.2293 14.5771 15.8659V8.93998C14.5771 8.57657 14.7719 8.24105 15.0874 8.06077V8.0557Z" className="fill-white dark:fill-[#1A1D21] stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21.6657 12.3976L14.7986 8.47358M21.6657 12.3976L28.5651 8.45508M21.6657 12.3976V20.2457" className="stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M0.910142 8.0557L6.98609 4.58373C7.29742 4.40583 7.67961 4.40583 7.99093 4.58373L14.0669 8.0557C14.3824 8.236 14.5771 8.57153 14.5771 8.93493V15.8609C14.5771 16.2243 14.3824 16.5598 14.0669 16.7401L7.99093 20.2121C7.67961 20.39 7.29741 20.39 6.98609 20.2121L0.910141 16.7401C0.594622 16.5598 0.399902 16.2243 0.399902 15.8609V8.93493C0.399902 8.57153 0.594623 8.236 0.910142 8.0557Z" className="fill-white dark:fill-[#1A1D21] stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.48843 12.3976L0.621338 8.47358M7.48843 12.3976L14.3879 8.45508M7.48843 12.3976V20.2457" className="stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.99876 12.1061L14.0747 8.63414C14.386 8.45624 14.768 8.45624 15.0796 8.63414L21.1555 12.1061C21.471 12.2864 21.6657 12.6219 21.6657 12.9853V19.9113C21.6657 20.2747 21.471 20.6102 21.1555 20.7905L15.0796 24.2625C14.768 24.4404 14.386 24.4404 14.0747 24.2625L7.99876 20.7905C7.68325 20.6102 7.48853 20.2747 7.48853 19.9113V12.9853C7.48853 12.6219 7.68325 12.2864 7.99876 12.1061Z" className="fill-[#E5EEFF] dark:fill-[#1D2E55] stroke-[#266DF0] dark:stroke-[#4E8CFC]" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path opacity="0.4" d="M14.5768 16.4482L7.70972 12.5241M14.5768 16.4482L21.4763 12.5056M14.5768 16.4482V24.2963" className="stroke-[#266DF0] dark:stroke-[#4E8CFC]" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
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
                            <svg width="30" height="25" viewBox="0 0 30 25" fill="none" className="shrink-0">
                                <path d="M7.99852 4.00541L14.0745 0.533435C14.3858 0.355535 14.768 0.355535 15.0793 0.533435L21.1553 4.00541C21.4708 4.1857 21.6655 4.52124 21.6655 4.88464V11.8106C21.6655 12.174 21.4708 12.5095 21.1553 12.6898L15.0793 16.1618C14.768 16.3397 14.3858 16.3397 14.0745 16.1618L7.99852 12.6898C7.683 12.5095 7.48828 12.174 7.48828 11.8106V4.88464C7.48828 4.52124 7.683 4.1857 7.99852 4.00541Z" className="fill-white dark:fill-[#1A1D21] stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M14.5768 8.34722L7.70972 4.42317M14.5768 8.34722L21.4763 4.40466M14.5768 8.34722V16.1953" className="stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.506329" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.0874 8.0557L21.1633 4.58373C21.4747 4.40583 21.8569 4.40583 22.1682 4.58373L28.2441 8.0557C28.5596 8.236 28.7544 8.57153 28.7544 8.93493V15.8609C28.7544 16.2243 28.5596 16.5598 28.2441 16.7401L22.1682 20.2121C21.8569 20.39 21.4747 20.39 21.1633 20.2121L15.0793 16.7401C14.7719 16.5598 14.5771 16.2243 14.5771 15.8609V8.93493C14.5771 8.57153 14.7719 8.236 15.0874 8.0557Z" className="fill-white dark:fill-[#1A1D21] stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21.6657 12.3976L14.7986 8.47358M21.6657 12.3976L28.5651 8.45508M21.6657 12.3976V20.2457" className="stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M0.910142 8.0557L6.98609 4.58373C7.29742 4.40583 7.67961 4.40583 7.99093 4.58373L14.0669 8.0557C14.3824 8.236 14.5771 8.57153 14.5771 8.93493V15.8609C14.5771 16.2243 14.3824 16.5598 14.0669 16.7401L7.99093 20.2121C7.67961 20.39 7.29741 20.39 6.98609 20.2121L0.910141 16.7401C0.594622 16.5598 0.399902 16.2243 0.399902 15.8609V8.93493C0.399902 8.57153 0.594623 8.236 0.910142 8.0557Z" className="fill-white dark:fill-[#1A1D21] stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.48843 12.3976L0.621338 8.47358M7.48843 12.3976L14.3879 8.45508M7.48843 12.3976V20.2457" className="stroke-[#CDCFD1] dark:stroke-[#46474A]" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M7.99876 12.1061L14.0747 8.63414C14.386 8.45624 14.768 8.45624 15.0796 8.63414L21.1555 12.1061C21.471 12.2864 21.6657 12.6219 21.6657 12.9853V19.9113C21.6657 20.2747 21.471 20.6102 21.1555 20.7905L15.0796 24.2625C14.768 24.4404 14.386 24.4404 14.0747 24.2625L7.99876 20.7905C7.68325 20.6102 7.48853 20.2747 7.48853 19.9113V12.9853C7.48853 12.6219 7.68325 12.2864 7.99876 12.1061Z" className="fill-[#E5EEFF] dark:fill-[#1D2E55] stroke-[#266DF0] dark:stroke-[#4E8CFC]" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                <path opacity="0.4" d="M14.5768 16.4482L7.70972 12.5241M14.5768 16.4482L21.4763 12.5056M14.5768 16.4482V24.2963" className="stroke-[#266DF0] dark:stroke-[#4E8CFC]" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
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
