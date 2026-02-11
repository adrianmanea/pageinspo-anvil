import React, { useState, useEffect } from "react";
import { CreditCard, Building2, Mail, MapPin, User, Check, ChevronDown } from "lucide-react";

export default function ConvertSummary() {
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
        <div className="w-[95%] h-[2px] bg-[#242529] dark:bg-[#EEEFF1] rounded-[4px]" />
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
          {/* Step 1: Choose plan */}
          <div className="flex items-center gap-[4px] px-[4px] py-[2px] rounded-[4px]">
            <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#0000008C] dark:text-[#FFFFFF8C]">
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

          {/* Step 3: Summary (Active) */}
          <div className="flex items-center gap-[4px] px-[4px] py-[2px] rounded-[4px]">
            <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] dark:text-[#EEEFF1]">
              Summary
            </span>
          </div>
        </ol>
      </div>

      {/* Main Content */}
      <div className="w-full flex justify-center pb-[96px]">
        <div className="w-full max-w-[860px] bg-white dark:bg-[#1A1D21] rounded-[16px] shadow-[0_1px_3px_0_rgba(24,41,75,0.04),0_0_2px_0_rgba(28,40,64,0.18)] dark:shadow-none dark:border dark:border-[#27282B] flex flex-col md:flex-row overflow-hidden">
          
          {/* Left Column: Billing Information */}
          <div className="flex-[8] p-[20px] border-b md:border-b-0 md:border-r border-[#EEEFF1] dark:border-[#27282B]">
             
             {/* Plan Summary Header */}
             <div className="flex items-center justify-between mb-[24px]">
                <div className="flex items-center gap-[12px]">
                   <div className="w-[40px] h-[40px] border border-[#EEEFF1] dark:border-[#27282B] rounded-[8px] flex items-center justify-center relative">
                      <div className="w-[38px] h-[38px] bg-white dark:bg-[#1A1D21] rounded-[8px] flex items-center justify-center absolute top-[0.66px] right-[0.66px] overflow-hidden">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="w-[40px] h-[40px]">
                            <rect width="40" height="40" fill="white" className="dark:fill-[#1A1D21]"/>
                            <path d="M40 15.9494L0 15.9494" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5" strokeDasharray="1 1"/>
                            <path d="M40 24.0506H0" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5" strokeDasharray="1 1"/>
                            <path d="M12.9114 -4.17233e-07L12.9114 40" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5" strokeDasharray="1 1"/>
                            <path d="M27.0886 0L27.0886 40" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5" strokeDasharray="1 1"/>
                            <path d="M34.1423 -0.000732422V39.9993" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5"/>
                            <path d="M5.85938 -0.000732422V39.9993" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5"/>
                            <path d="M0.000976562 5.8577H40.001" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5"/>
                            <path d="M0.000976562 34.4206H40.001" stroke="currentColor" strokeOpacity="0.05" strokeWidth="0.5"/>
                            
                            {/* Blue Plus Icon */}
                            <path d="M15.0874 8.0557L21.1633 4.58373C21.4747 4.40583 21.8569 4.40583 22.1682 4.58373L28.2441 8.0557C28.5596 8.236 28.7544 8.57153 28.7544 8.93493V15.8609C28.7544 16.2243 28.5596 16.5598 28.2441 16.7401L22.1682 20.2121C21.8569 20.39 21.4747 20.39 21.1633 20.2121L15.0874 16.7401C14.7719 16.5598 14.5771 16.2243 14.5771 15.8609V8.93493C14.5771 8.57153 14.7719 8.236 15.0874 8.0557Z" fill="#E5EEFF" stroke="#266DF0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" className="dark:fill-[#1D2E55] dark:stroke-[#4E8CFC]"/>
                            <path opacity="0.4" d="M21.6657 12.3976L14.7986 8.47358M21.6657 12.3976L28.5651 8.45508M21.6657 12.3976V20.2457" stroke="#266DF0" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="dark:stroke-[#4E8CFC]"/>
                          </svg>
                      </div>
                   </div>
                   <div className="flex flex-col">
                      <span className="text-[18px] font-[600] leading-[24px] tracking-[-0.36px] text-[#242529] dark:text-[#EEEFF1]">Plus</span>
                      <span className="text-[12px] font-[500] leading-[16px] tracking-[-0.24px] text-[#0000008C] dark:text-white/55">For growing teams</span>
                   </div>
                </div>
                <button className="flex justify-center items-center gap-[6px] h-[32px] px-[10px] bg-white dark:bg-[#1A1D21] border border-[#EEEFF1] dark:border-[#27282B] rounded-[9px] hover:bg-gray-50 dark:hover:bg-[#2A2B2E] transition-colors duration-200">
                   <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">Change plan</span>
                </button>
             </div>

             <div className="h-[1px] w-full bg-[#EEEFF1] dark:bg-[#27282B] mb-[24px]" />

             <div className="flex items-center gap-[6px] mb-[20px]">
                <div className="w-[20px] h-[20px] bg-[#F8F9FA] dark:bg-[#2F3033] rounded-[6px] flex items-center justify-center shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#46474A]">
                   <CreditCard size={12} className="text-[#242529] dark:text-[#EEEFF1]" />
                </div>
                <span className="text-[14px] font-[600] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.28px]">
                  Billing information
                </span>
             </div>

             <div className="flex flex-col gap-[16px]">
                {/* Card Number */}
                <div className="flex flex-col gap-[4px]">
                   <label className="text-[12px] font-[500] text-[#75777C] dark:text-[#86888D]">
                      Card number <span className="text-[#5C5E63] dark:text-[#9FA1A7]">(required)</span>
                   </label>
                   <div className="flex items-center gap-[6px] w-full h-[34px] min-h-[34px] px-[10px] rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow bg-transparent">
                      <div className="w-full h-[20px] bg-transparent text-[#505154] dark:text-[#A2A4A7] text-[14px] font-[500]">
                         {/* Placeholder for Stripe Element */}
                      </div>
                   </div>
                </div>

                {/* Full Name */}
                <div className="flex flex-col gap-[4px]">
                   <label className="text-[12px] font-[500] text-[#75777C] dark:text-[#86888D]">
                      Full name <span className="text-[#5C5E63] dark:text-[#9FA1A7]">(required)</span>
                   </label>
                   <div className="flex items-center gap-[6px] w-full h-[34px] min-h-[34px] px-[10px] rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow bg-transparent">
                      <input 
                         type="text" 
                         placeholder="Full name"
                         className="flex-1 bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] placeholder:text-[#5C5E63] dark:placeholder:text-[#9FA1A7] outline-none"
                      />
                   </div>
                </div>

                {/* Address */}
                <div className="flex flex-col gap-[8px]">
                    <div className="flex flex-col gap-[4px]">
                       <label className="text-[12px] font-[500] text-[#75777C] dark:text-[#86888D]">
                          Address <span className="text-[#5C5E63] dark:text-[#9FA1A7]">(required)</span>
                       </label>
                       <div className="flex items-center gap-[6px] w-full h-[34px] min-h-[34px] px-[10px] rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow bg-transparent">
                          <input 
                             type="text" 
                             placeholder="Address line 1"
                             className="flex-1 bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] placeholder:text-[#5C5E63] dark:placeholder:text-[#9FA1A7] outline-none"
                          />
                       </div>
                       <div className="flex items-center gap-[6px] w-full h-[34px] min-h-[34px] px-[10px] rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow bg-transparent">
                          <input 
                             type="text" 
                             placeholder="Address line 2"
                             className="flex-1 bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] placeholder:text-[#5C5E63] dark:placeholder:text-[#9FA1A7] outline-none"
                          />
                       </div>
                       <div className="flex items-center gap-[6px] w-full h-[34px] min-h-[34px] px-[10px] rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow bg-transparent">
                          <input 
                             type="text" 
                             placeholder="City"
                             className="flex-1 bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] placeholder:text-[#5C5E63] dark:placeholder:text-[#9FA1A7] outline-none"
                          />
                       </div>
                       <div className="flex gap-[12px]">
                          <div className="flex-1 flex items-center gap-[6px] h-[34px] min-h-[34px] px-[10px] rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow bg-transparent">
                             <input 
                                type="text" 
                                placeholder="Postal Code"
                                className="flex-1 bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] placeholder:text-[#5C5E63] dark:placeholder:text-[#9FA1A7] outline-none"
                             />
                          </div>
                          <div className="flex-1 h-[34px] relative">
                             <button className="w-full h-full px-[10px] flex items-center justify-between bg-transparent rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] hover:bg-gray-50 dark:hover:bg-[#2A2B2E] transition-all text-[14px] font-[500] text-[#232529] dark:text-[#EEEFF1]">
                                <span className="text-[#5C5E63] dark:text-[#9FA1A7]">Province</span>
                                <ChevronDown size={14} className="text-[#75777C] dark:text-[#86888D]" />
                             </button>
                          </div>
                       </div>
                       <button className="w-full h-[34px] px-[10px] flex items-center justify-between bg-transparent rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] hover:bg-gray-50 dark:hover:bg-[#2A2B2E] transition-all text-[14px] font-[500] text-[#232529] dark:text-[#EEEFF1]">
                          <span>Canada</span>
                          <ChevronDown size={14} className="text-[#75777C] dark:text-[#86888D]" />
                       </button>
                    </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-[4px]">
                   <label className="text-[12px] font-[500] text-[#75777C] dark:text-[#86888D]">
                      Email <span className="text-[#5C5E63] dark:text-[#9FA1A7]">(required)</span>
                   </label>
                   <div className="flex items-center gap-[6px] w-full h-[34px] min-h-[34px] px-[10px] rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow bg-transparent">
                      <input 
                         type="email" 
                         placeholder="Email address"
                         className="flex-1 bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] placeholder:text-[#5C5E63] dark:placeholder:text-[#9FA1A7] outline-none"
                      />
                   </div>
                </div>

                {/* Business */}
                <div className="flex flex-col gap-[4px]">
                   <label className="text-[12px] font-[500] text-[#75777C] dark:text-[#86888D]">
                      Business <span className="text-[#5C5E63] dark:text-[#9FA1A7]">(required)</span>
                   </label>
                   <div className="flex items-center gap-[6px] w-full h-[34px] min-h-[34px] px-[10px] rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow bg-transparent">
                      <input 
                         type="text" 
                         placeholder="Company name"
                         className="flex-1 bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] placeholder:text-[#5C5E63] dark:placeholder:text-[#9FA1A7] outline-none"
                      />
                   </div>
                </div>

                {/* GST/HST */}
                <div className="flex flex-col gap-[4px]">
                   <label className="text-[12px] font-[500] text-[#75777C] dark:text-[#86888D]">
                      GST/HST number <span className="text-[#5C5E63] dark:text-[#9FA1A7]">(optional)</span>
                   </label>
                   <div className="flex items-center gap-[6px] w-full h-[34px] min-h-[34px] px-[10px] rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow bg-transparent">
                      <input 
                         type="text" 
                         placeholder="123456789RT0002"
                         className="flex-1 bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] placeholder:text-[#5C5E63] dark:placeholder:text-[#9FA1A7] outline-none"
                      />
                   </div>
                </div>
             </div>
          </div>

          {/* Right Column: Payment Summary */}
          <div className="flex-[5] p-[20px] bg-[#FBFBFB] dark:bg-[#15181C] flex flex-col gap-[20px] dark:border-l dark:border-[#27282B] rounded-bl-[16px] rounded-br-[16px] md:rounded-bl-none">
             
             {/* Header */}
             <div className="flex items-center justify-between">
                <span className="text-[14px] font-[600] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.28px]">
                   Payment summary
                </span>
                <div className="bg-[#F8F9FA] dark:bg-[#2F3033] px-[6px] py-[2px] rounded-[6px] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#46474A]">
                   <span className="text-[12px] font-[500] text-[#505154] dark:text-[#CDCFD1]">
                      Per year
                   </span>
                </div>
             </div>

             {/* Line Items */}
             <div className="flex flex-col gap-[8px]">
                
                {/* Seats */}
                <div className="flex justify-between items-start">
                   <div className="flex flex-col">
                      <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.14px]">
                         2 seats
                      </span>
                   </div>
                   <span className="text-[14px] font-[500] text-[#000000]/55 dark:text-white/55 tracking-[-0.14px]">
                      $696.00
                   </span>
                </div>

                {/* Credits Included */}
                <div className="flex justify-between items-start">
                   <div className="flex items-center gap-[4px]">
                      <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.14px]">
                         1k credits
                      </span>
                      <span className="text-[12px] font-[500] text-[#000000]/40 dark:text-white/29 tracking-[-0.24px]">
                         / per month
                      </span>
                   </div>
                   <span className="text-[14px] font-[500] text-[#000000]/55 dark:text-white/55 tracking-[-0.14px]">
                      Included
                   </span>
                </div>

                {/* Additional Credits */}
                <div className="flex justify-between items-start">
                   <div className="flex items-center gap-[4px]">
                      <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.14px]">
                         5k additional credits
                      </span>
                      <span className="text-[12px] font-[500] text-[#000000]/40 dark:text-white/29 tracking-[-0.24px]">
                         / per month
                      </span>
                   </div>
                   <span className="text-[14px] font-[500] text-[#000000]/55 dark:text-white/55 tracking-[-0.14px]">
                      $840.00
                   </span>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]" />

                {/* Subtotal */}
                <div className="flex justify-between items-start">
                   <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.14px]">
                      Subtotal
                   </span>
                   <span className="text-[14px] font-[500] text-[#000000]/55 dark:text-white/55 tracking-[-0.14px]">
                      $1,536.00
                   </span>
                </div>

                {/* Tax */}
                <div className="flex justify-between items-start">
                   <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.14px]">
                      Tax
                   </span>
                   <span className="text-[14px] font-[500] text-[#000000]/55 dark:text-white/55 tracking-[-0.14px]">
                      $0.00
                   </span>
                </div>

                {/* Divider */}
                <div className="h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]" />

                {/* Total */}
                <div className="flex justify-between items-center">
                   <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.14px]">
                      Total per year
                   </span>
                   <span className="text-[20px] font-[600] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.4px]">
                      $1,536.00
                   </span>
                </div>
             </div>

             {/* Confirm Button */}
             <button className="w-full h-[36px] bg-[#266DF0] hover:bg-[#1D4ED8] dark:bg-[#266DF0] dark:hover:bg-[#3B7ADF] text-white rounded-[10px] text-[14px] font-[500] md:shadow-[rgba(0,0,0,0.1)_0px_0px_0px_1px_inset,rgba(38,109,240,0.12)_0px_2px_4px_-2px,rgba(38,109,240,0.08)_0px_3px_6px_-2px] transition-colors duration-200">
                Confirm
             </button>

             {/* Disclaimer */}
             <div className="p-[12px] pl-[28px] pr-[8px] border border-[#EEEFF1] dark:border-[#27282B] rounded-[9px] relative">
                <ul className="list-disc text-[12px] font-[500] text-[#000000]/55 dark:text-white/55">
                   <li>
                      Your payment method will be charged annually beginning Feb 10, 2026
                   </li>
                </ul>
             </div>

          </div>

        </div>
      </div>
    </main>
  );
}
