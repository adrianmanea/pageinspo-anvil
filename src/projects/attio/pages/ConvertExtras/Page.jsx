import React, { useState, useEffect } from "react";
import { ChevronDown, Minus, Plus, Calendar, Users, Zap, Layers } from "lucide-react";

export default function ConvertExtras() {
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

  const [billingPeriod, setBillingPeriod] = useState("annual");
  const [seats, setSeats] = useState(1);
  const [credits, setCredits] = useState(0);

  const seatPrice = 29; // Annual price per month
  const totalPerYear = 348; // Hardcoded matches capture for 1 seat annual

  return (
    <main className="min-h-screen w-full bg-white dark:bg-[#1b1d21] font-['Inter'] text-[10px] text-black dark:text-[#EEEFF1] relative flex flex-col transition-colors duration-200">
      {/* Progress Bar */}
      <div className="w-full h-[2px] bg-[#E6E7EA] dark:bg-[#2F3033]">
        <div className="w-[66%] h-[2px] bg-[#242529] dark:bg-[#EEEFF1] rounded-[4px]" />
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

          {/* Step 2: Seats and extras (Active) */}
          <div className="flex items-center gap-[4px] px-[4px] py-[2px] rounded-[4px]">
            <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] dark:text-[#EEEFF1]">
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
      <div className="flex-1 w-full flex justify-center p-[20px] pb-[96px]">
        <div className="w-full max-w-[860px] bg-white dark:bg-[#1A1D21] rounded-[16px] shadow-[0_1px_3px_0_rgba(24,41,75,0.04),0_0_2px_0_rgba(28,40,64,0.18)] dark:shadow-none dark:border dark:border-[#27282B] overflow-hidden">
          {/* Header */}
          <div className="h-[72px] px-[16px] flex items-center justify-between border-b border-[#EEEFF1] dark:border-[#27282B]">
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
                      
                      {/* Blue Plus Icon Replacement */}
                      <Layers x={5} y={5} size={30} strokeWidth={1.5} className="text-[#266DF0] dark:text-[#4E8CFC] fill-[#E5EEFF] dark:fill-[#1D2E55]" />
                    </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] font-[600] text-[#242529] dark:text-[#EEEFF1] leading-[24px] tracking-[-0.36px]">
                  Plus
                </span>
                <span className="text-[12px] font-[500] text-[#000000]/55 dark:text-white/55 leading-[16px] tracking-[-0.24px]">
                  For growing teams
                </span>
              </div>
            </div>
            <button className="h-[36px] px-[12px] bg-white dark:bg-[#1A1D21] border border-[#EEEFF1] dark:border-[#27282B] rounded-[10px] text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.28px] hover:bg-gray-50 dark:hover:bg-[#2A2B2E] transition-colors">
              Change plan
            </button>
          </div>

          <div className="flex h-full items-stretch flex-col md:flex-row">
            {/* Main Content */}
            <div className="flex-[8] p-[32px] pr-[24px] border-r border-[#EEEFF1] dark:border-[#27282B] flex flex-col">
              
              {/* Billing Period */}
              <div className="mb-[20px]">
                <div className="flex items-center gap-[6px] mb-[16px]">
                  <div className="w-[20px] h-[20px] bg-[#F8F9FA] dark:bg-[#2F3033] rounded-[6px] flex items-center justify-center shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#46474A]">
                     <Calendar size={12} className="text-[#242529] dark:text-[#EEEFF1]" />
                  </div>
                  <span className="text-[14px] font-[600] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.28px]">
                    Billing period
                  </span>
                </div>

                <div className="flex flex-col gap-[8px]">
                  {/* Annual Option */}
                  <button
                    onClick={() => setBillingPeriod("annual")}
                    className={`w-full flex items-center gap-[8px] p-[8px] px-[10px] rounded-[12px] border transition-all ${
                      billingPeriod === "annual"
                        ? "bg-[#266DF0]/[.04] border-[#266DF0] shadow-[0_0_0_2px_rgba(38,109,240,0.04)] dark:bg-[#4E8CFC]/[.06] dark:border-[#4E8CFC] dark:shadow-[0_0_0_2px_rgba(78,140,252,0.06)]"
                        : "bg-white border-[#EEEFF1] dark:bg-[#1A1D21] dark:border-[#27282B]"
                    }`}
                  >
                      <div className={`w-[18px] h-[18px] rounded-[10px] border-[6px] ${billingPeriod === "annual" ? "border-[#266DF0] dark:border-[#4E8CFC]" : "border-[#EEEFF1] border-[1px] dark:border-[#27282B] dark:bg-[#1A1D21]"}`}></div>
                    <div className="flex-1 flex items-center justify-between">
                      <div className="flex items-center gap-[6px]">
                        <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.14px]">
                          Annual
                        </span>
                        <span className="text-[12px] font-[500] text-[#266DF0] dark:text-[#4E8CFC] leading-[16px] tracking-[-0.24px]">
                          (-20%)
                        </span>
                      </div>
                      <div className="bg-[#E5EEFF] dark:bg-[#1D2E55] shadow-[inset_0_0_0_1px_#D6E5FF] dark:shadow-[inset_0_0_0_1px_#2B3E6D] rounded-[6px] px-[6px] py-[2px]">
                        <span className="text-[12px] font-[500] text-[#215BC4] dark:text-[#C2D6FF] leading-[16px]">
                          $29.00 per user / month
                        </span>
                      </div>
                    </div>
                  </button>

                  {/* Monthly Option */}
                  <button
                    onClick={() => setBillingPeriod("monthly")}
                    className={`w-full flex items-center gap-[8px] p-[8px] px-[10px] rounded-[12px] border transition-all ${
                      billingPeriod === "monthly"
                        ? "bg-[#266DF0]/[.04] border-[#266DF0] shadow-[0_0_0_2px_rgba(38,109,240,0.04)] dark:bg-[#4E8CFC]/[.06] dark:border-[#4E8CFC] dark:shadow-[0_0_0_2px_rgba(78,140,252,0.06)]"
                        : "bg-white border-[#EEEFF1] dark:bg-[#1A1D21] dark:border-[#27282B]"
                    }`}
                  >
                      <div className={`w-[18px] h-[18px] rounded-[10px] border-[6px] ${billingPeriod === "monthly" ? "border-[#266DF0] dark:border-[#4E8CFC]" : "border-[#EEEFF1] border-[1px] dark:border-[#27282B] dark:bg-[#1A1D21]"}`}></div>
                    <div className="flex-1 flex items-center justify-between">
                      <div className="flex items-center gap-[6px]">
                        <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.14px]">
                          Monthly
                        </span>
                      </div>
                      <div className="bg-[#F8F9FA] dark:bg-[#2F3033] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#46474A] rounded-[6px] px-[6px] py-[2px]">
                        <span className="text-[12px] font-[500] text-[#505154] dark:text-[#CDCED1] leading-[16px]">
                          $36.00 per user / month
                        </span>
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="h-[1px] bg-[#EEEFF1] dark:bg-[#27282B] my-[20px]" />

              {/* Seats */}
              <div className="mb-[20px]">
                <div className="flex items-center justify-between mb-[12px]">
                   <div className="flex items-center gap-[6px]">
                      <div className="w-[20px] h-[20px] bg-[#F8F9FA] dark:bg-[#2F3033] rounded-[6px] flex items-center justify-center shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#46474A]">
                          <Users size={12} className="text-[#242529] dark:text-[#EEEFF1]" />
                      </div>
                      <span className="text-[14px] font-[600] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.28px]">
                          Seats
                      </span>
                      <span className="text-[12px] font-[500] text-[#000000]/55 dark:text-white/55 leading-[16px] tracking-[-0.24px]">
                          1 used
                      </span>
                   </div>
                </div>
                
                <div className="flex items-center gap-[12px]">
                  <div className="flex items-center border border-[#EEEFF1] dark:border-[#27282B] rounded-[10px] h-[28px]">
                      <button 
                          disabled={seats <= 1}
                          onClick={() => setSeats(s => s - 1)}
                          className="w-[28px] h-[28px] flex items-center justify-center text-[#101010]/30 dark:text-white/30 hover:text-[#101010] dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors border-r border-[#EEEFF1] dark:border-[#27282B] dark:bg-[#1A1D21]"
                      >
                          <Minus size={14} />
                      </button>
                      <div className="min-w-[30px] h-full flex items-center justify-center px-[8px] dark:bg-[#1A1D21]">
                          <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.14px]">
                              {seats}
                          </span>
                      </div>
                      <button 
                          onClick={() => setSeats(s => s + 1)}
                          className="w-[28px] h-[28px] flex items-center justify-center text-[#242529] dark:text-[#EEEFF1] hover:bg-gray-50 dark:hover:bg-[#27282B] transition-colors border-l border-[#EEEFF1] dark:border-[#27282B] dark:bg-[#1A1D21]"
                      >
                          <Plus size={14} />
                      </button>
                  </div>
                  
                   <button className="h-[36px] px-[12px] bg-white dark:bg-[#1A1D21] border border-[#EEEFF1] dark:border-[#27282B] rounded-[10px] text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.28px] hover:bg-gray-50 dark:hover:bg-[#2A2B2E] transition-colors">
                      Manage seats
                  </button>
                </div>
              </div>

              <div className="h-[1px] bg-[#EEEFF1] dark:bg-[#27282B] my-[20px]" />

              {/* Credits */}
              <div>
                   <div className="flex items-center gap-[6px] mb-[16px]">
                      <div className="w-[20px] h-[20px] bg-[#F8F9FA] dark:bg-[#2F3033] rounded-[6px] flex items-center justify-center shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#46474A]">
                          <Zap size={12} className="text-[#242529] dark:text-[#EEEFF1]" />
                      </div>
                      <span className="text-[14px] font-[600] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.28px]">
                          Credits
                      </span>
                      <span className="text-[12px] font-[500] text-[#000000]/55 dark:text-white/55 leading-[16px] tracking-[-0.24px]">
                          1k included
                      </span>
                   </div>

                   <div className="w-full h-[32px] px-[12px] flex items-center justify-between border border-[#EEEFF1] dark:border-[#27282B] rounded-[8px] cursor-pointer hover:bg-gray-50 dark:hover:bg-[#27282B]">
                      <div className="flex items-center gap-[6px]">
                          <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.14px]">
                              +0
                          </span>
                           <span className="text-[12px] font-[500] text-[#000000]/55 dark:text-white/55 leading-[16px] tracking-[-0.24px]">
                              credits / month
                          </span>
                      </div>
                      <div className="flex items-center gap-[12px]">
                           <div className="bg-[#F8F9FA] dark:bg-[#2F3033] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#46474A] rounded-[6px] px-[6px] py-[2px]">
                              <span className="text-[12px] font-[500] text-[#505154] dark:text-[#CDCED1] leading-[16px]">
                                  $0 / month
                              </span>
                          </div>
                          <ChevronDown size={14} className="text-[#242529] dark:text-[#EEEFF1]" />
                      </div>
                   </div>
              </div>

            </div>

            {/* Sidebar Summary */}
            <div className="flex-[5] p-[32px] bg-[#FBFBFB] dark:bg-[#15181C] border-l border-[#EEEFF1] dark:border-[#27282B] flex flex-col">
               <div className="flex flex-col gap-[20px]">
                  {/* Payment Summary Header */}
                  <div className="flex items-center justify-between">
                       <span className="text-[14px] font-[600] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.28px]">
                          Payment summary
                       </span>
                       <div className="bg-[#F8F9FA] dark:bg-[#2F3033] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#46474A] rounded-[6px] px-[6px] py-[2px]">
                          <span className="text-[12px] font-[500] text-[#505154] dark:text-[#CDCED1] leading-[16px]">
                              Per year
                          </span>
                      </div>
                  </div>

                  <div className="flex flex-col gap-[8px] border-b border-[#EEEFF1] dark:border-[#27282B] pb-[8px]">
                       {/* Seat Item */}
                       <div className="flex items-start justify-between">
                           <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.14px]">
                              {seats} seat{seats > 1 ? 's' : ''}
                           </span>
                           <span className="text-[14px] font-[500] text-[#000000]/55 dark:text-white/55 leading-[20px] tracking-[-0.14px]">
                              ${348 * seats}.00
                           </span>
                       </div>
                       {/* Credits Item */}
                       <div className="flex items-start justify-between">
                           <div className="flex items-center gap-[4px]">
                               <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.14px]">
                                  1k credits
                               </span>
                               <span className="text-[12px] font-[500] text-[#000000]/40 dark:text-white/30 leading-[16px] tracking-[-0.24px]">
                                  / per month
                               </span>
                           </div>
                           <span className="text-[14px] font-[500] text-[#000000]/55 dark:text-white/55 leading-[20px] tracking-[-0.14px]">
                              Included
                           </span>
                       </div>
                       {/* Additional Credits */}
                        <div className="flex items-start justify-between">
                           <div className="flex items-center gap-[4px]">
                               <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.14px]">
                                  0 additional credits
                               </span>
                               <span className="text-[12px] font-[500] text-[#000000]/40 dark:text-white/30 leading-[16px] tracking-[-0.24px]">
                                  / per month
                               </span>
                           </div>
                           <span className="text-[14px] font-[500] text-[#000000]/55 dark:text-white/55 leading-[20px] tracking-[-0.14px]">
                              $0.00
                           </span>
                       </div>
                  </div>

                  {/* Subtotal & Tax */}
                  <div className="flex flex-col gap-[4px] border-b border-[#EEEFF1] dark:border-[#27282B] pb-[8px]">
                       <div className="flex items-start justify-between">
                           <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.14px]">
                              Subtotal
                           </span>
                           <span className="text-[14px] font-[500] text-[#000000]/55 dark:text-white/55 leading-[20px] tracking-[-0.14px]">
                              ${348 * seats}.00
                           </span>
                       </div>
                      <div className="flex items-start justify-between">
                           <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.14px]">
                              Tax
                           </span>
                           <span className="text-[14px] font-[500] text-[#000000]/55 dark:text-white/55 leading-[20px] tracking-[-0.14px]">
                              $0.00
                           </span>
                       </div>
                  </div>

                   {/* Total */}
                   <div className="flex items-start justify-between">
                       <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.14px]">
                          Total per year
                       </span>
                       <span className="text-[20px] font-[600] text-[#242529] dark:text-[#EEEFF1] leading-[24px] tracking-[-0.4px]">
                          ${348 * seats}.00
                       </span>
                   </div>

                   <button className="w-full h-[36px] bg-[#266DF0] dark:bg-[#266DF0] text-white rounded-[10px] text-[14px] font-[500] flex items-center justify-center shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(38,109,240,0.12),0_3px_6px_-2px_rgba(38,109,240,0.08)] hover:bg-[#215BC4] dark:hover:bg-[#3B7ADF] transition-colors duration-200">
                      Proceed to payment
                   </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
