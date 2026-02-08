import React from 'react';
import { ChevronDown, CreditCard } from 'lucide-react';

export default function ConvertPricingPage() {
    return (
        <main className="w-[1680px] h-[967px] min-h-[963px] grid grid-cols-[1680px] grid-rows-[0px_132px_835px_0px] font-['Inter'] text-[10px] text-black">
            {/* Progress Bar */}
            <div className="absolute bottom-[965px] w-[1680px] h-[2px] bg-[#E6E7EA]">
                <div className="w-[1596px] h-[2px] bg-[#242529] rounded-[4px]" />
            </div>

            {/* Header Section */}
            <div className="flex justify-center w-[1680px] h-[132px]">
                <div className="flex flex-col justify-between items-center gap-[20px] w-[1680px] h-[132px] p-[32px]">
                    <img
                        alt="Attio logo"
                        src="https://app.attio.com/web-assets/attio-logo-full-light.06a35891.svg"
                        className="w-[96px] h-[24px]"
                    />

                    <nav className="flex items-center gap-[4px] h-[24px]">
                        {/* Step 1: Choose plan */}
                        <div className="flex items-center gap-[4px] px-[4px] py-[2px] rounded-[4px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0)]">
                            <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#0000008C]">
                                Choose plan
                            </span>
                        </div>

                        {/* Separator */}
                        <span className="block w-[1px] h-[10px] bg-[#EEEFF1] transform -skew-x-[10deg]" />

                        {/* Step 2: Seats and extras */}
                        <div className="flex items-center gap-[4px] px-[4px] py-[2px] rounded-[4px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0)]">
                            <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#0000008C]">
                                Seats and extras
                            </span>
                        </div>

                        {/* Separator */}
                        <span className="block w-[1px] h-[10px] bg-[#EEEFF1] transform -skew-x-[10deg]" />

                        {/* Step 3: Summary (Active) */}
                        <div className="flex items-center gap-[4px] px-[4px] py-[2px] rounded-[4px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0)]">
                            <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529]">
                                Summary
                            </span>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center w-[1680px] h-[835px]">
                <div className="flex flex-col w-[860px] h-[723px] min-w-[600px] mt-[16px] mb-[96px] bg-white rounded-[16px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0),0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)]">
                    <form className="flex flex-col w-[860px] h-[723px]">

                        {/* Form Header */}
                        <div className="flex justify-between items-center w-[860px] h-[72px] p-[16px] gap-[4px]">
                            <div className="flex items-center gap-[12px] h-[40px]">
                                <div className="flex justify-center items-center w-[40px] h-[40px] border border-[#EEEFF1] rounded-[8px]">
                                    {/* Icon Placeholder - Replicating structure with SVG */}
                                    <div className="w-[38px] h-[38px] rounded-[8px] overflow-hidden">
                                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="40" height="40" fill="#FFFFFF" />
                                            <path d="M40 15.9494L0 15.9494" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="0.5" strokeDasharray="1 1" />
                                            <path d="M40 24.0506H0" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="0.5" strokeDasharray="1 1" />
                                            <path d="M12.9114 -4.17233e-07L12.9114 40" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="0.5" strokeDasharray="1 1" />
                                            <path d="M27.0886 0L27.0886 40" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="0.5" strokeDasharray="1 1" />
                                        </svg>
                                    </div>
                                </div>

                                <div className="flex flex-col w-[130px] h-[40px]">
                                    <div className="h-[24px] text-[18px] font-[600] leading-[24px] tracking-[-0.36px] text-[#242529]">
                                        Pro
                                    </div>
                                    <div className="h-[16px] text-[12px] font-[500] leading-[16px] text-[#0000008C]">
                                        For scaling businesses
                                    </div>
                                </div>
                            </div>

                            <button type="button" className="flex items-center justify-center gap-[6px] w-[101px] h-[32px] px-[10px] py-[6px] bg-white rounded-[9px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0),0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)]">
                                <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] whitespace-nowrap">
                                    Change plan
                                </span>
                            </button>
                        </div>

                        <div className="w-[860px] h-[1px] bg-[#EEEFF1]" />

                        {/* Form Body - Columns */}
                        <div className="flex justify-between items-stretch w-[860px] h-[650px]">

                            {/* Left Column - Inputs */}
                            <div className="flex flex-col gap-[16px] w-[519px] h-[650px] p-[20px]">

                                {/* Section Header */}
                                <div className="flex items-center gap-[6px] w-[143px] h-[20px]">
                                    <span className="flex items-center gap-[4px] w-[20px] h-[20px] px-[4px] py-[2px] bg-[#F8F9FA] rounded-[6px] shadow-[inset_0_0_0_1px_#EEEFF1]">
                                        <CreditCard className="w-[12px] h-[12px] text-black" />
                                    </span>
                                    <div className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#242529]">
                                        Billing information
                                    </div>
                                </div>

                                {/* Card Number Input Group */}
                                <div className="flex flex-col gap-[4px] w-[479px] h-[56px]">
                                    <div className="flex flex-col gap-[4px] w-[479px] h-[16px] pl-[4px]">
                                        <label className="flex items-center w-[475px] h-[16px] text-[12px] font-[500] leading-[16px] text-[#0000008C]">
                                            Card number
                                            <span className="w-[57px] h-[16px] text-[#00000066] ml-1">(required)</span>
                                        </label>
                                    </div>
                                    <div className="w-[479px] h-[36px] p-[9px_8px_7px_12px] border border-[#505154] rounded-[8px] shadow-[inset_0_0_0_1px_#EEEFF1]">
                                        {/* Stripe Element Placeholder */}
                                        <div className="w-[459px] h-[16px] text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#505154]">
                                            {/* Hidden input in capture effectively represented here by container style */}
                                        </div>
                                    </div>
                                </div>

                                {/* Full Name Input Group */}
                                <div className="flex flex-col gap-[4px] w-[479px] h-[54px]">
                                    <div className="flex flex-col gap-[4px] w-[479px] h-[16px] pl-[4px]">
                                        <label className="flex items-center w-[475px] h-[16px] text-[12px] font-[500] leading-[16px] text-[#0000008C]">
                                            Full name
                                            <span className="w-[57px] h-[16px] text-[#00000066] ml-1">(required)</span>
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-[6px] w-[479px] h-[34px] px-[10px] border border-[#505154] rounded-[10px] shadow-[inset_0_0_0_1px_#EEEFF1]">
                                        <input
                                            placeholder="Full name"
                                            className="w-full text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] placeholder-[#505154] bg-transparent outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Address Group */}
                                <div className="flex flex-col gap-[8px] w-[479px] h-[222px]">
                                    {/* Line 1 */}
                                    <div className="flex flex-col gap-[4px] w-[479px] h-[54px]">
                                        <div className="flex flex-col gap-[4px] w-[479px] h-[16px] pl-[4px]">
                                            <label className="flex items-center w-[475px] h-[16px] text-[12px] font-[500] leading-[16px] text-[#0000008C]">
                                                Address
                                                <span className="w-[57px] h-[16px] text-[#00000066] ml-1">(required)</span>
                                            </label>
                                        </div>
                                        <div className="flex items-center gap-[6px] w-[479px] h-[34px] px-[10px] border border-[#505154] rounded-[10px] shadow-[inset_0_0_0_1px_#EEEFF1]">
                                            <input
                                                placeholder="Address line 1"
                                                className="w-full text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] placeholder-[#505154] bg-transparent outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Line 2 */}
                                    <div className="flex flex-col gap-[4px] w-[479px] h-[34px]">
                                        <div className="flex items-center gap-[6px] w-[479px] h-[34px] px-[10px] border border-[#505154] rounded-[10px] shadow-[inset_0_0_0_1px_#EEEFF1]">
                                            <input
                                                placeholder="Address line 2"
                                                className="w-full text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] placeholder-[#505154] bg-transparent outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* City */}
                                    <div className="flex flex-col gap-[4px] w-[479px] h-[34px]">
                                        <div className="flex items-center gap-[6px] w-[479px] h-[34px] px-[10px] border border-[#505154] rounded-[10px] shadow-[inset_0_0_0_1px_#EEEFF1]">
                                            <input
                                                placeholder="City"
                                                className="w-full text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] placeholder-[#505154] bg-transparent outline-none"
                                            />
                                        </div>
                                    </div>

                                    {/* Postal Code & Province */}
                                    <div className="flex gap-[12px] w-[479px] h-[34px]">
                                        <div className="flex flex-col gap-[4px] w-[233px] h-[34px]">
                                            <div className="flex items-center gap-[6px] w-[233px] h-[34px] px-[10px] border border-[#505154] rounded-[10px] shadow-[inset_0_0_0_1px_#EEEFF1]">
                                                <input
                                                    placeholder="Postal Code"
                                                    className="w-[213px] text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] placeholder-[#505154] bg-transparent outline-none"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[4px] w-[233px] h-[34px]">
                                            <button type="button" className="flex items-center w-[233px] h-[34px] px-[10px] py-[6px] border border-[#EEEFF1] rounded-[8px] bg-transparent">
                                                <div className="flex-grow text-left overflow-hidden h-[20px]">
                                                    <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#00000066]">Province</span>
                                                </div>
                                                <ChevronDown className="w-[14px] h-[14px] text-black" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Country */}
                                    <div className="flex flex-col gap-[4px] w-[479px] h-[34px]">
                                        <button type="button" className="flex items-center w-[479px] h-[34px] px-[10px] py-[6px] border border-[#EEEFF1] rounded-[8px] bg-transparent">
                                            <div className="flex-grow text-left overflow-hidden h-[20px]">
                                                <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529]">Canada</span>
                                            </div>
                                            <ChevronDown className="w-[14px] h-[14px] text-black" />
                                        </button>
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="flex flex-col gap-[4px] w-[479px] h-[54px]">
                                    <div className="flex flex-col gap-[4px] w-[479px] h-[16px] pl-[4px]">
                                        <label className="flex items-center w-[475px] h-[16px] text-[12px] font-[500] leading-[16px] text-[#0000008C]">
                                            Email
                                            <span className="w-[57px] h-[16px] text-[#00000066] ml-1">(required)</span>
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-[6px] w-[479px] h-[34px] px-[10px] border border-[#505154] rounded-[10px] shadow-[inset_0_0_0_1px_#EEEFF1]">
                                        <input
                                            placeholder="Email address"
                                            className="w-full text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] placeholder-[#505154] bg-transparent outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Business Name Input */}
                                <div className="flex flex-col gap-[4px] w-[479px] h-[54px]">
                                    <div className="flex flex-col gap-[4px] w-[479px] h-[16px] pl-[4px]">
                                        <label className="flex items-center w-[475px] h-[16px] text-[12px] font-[500] leading-[16px] text-[#0000008C]">
                                            Business
                                            <span className="w-[57px] h-[16px] text-[#00000066] ml-1">(required)</span>
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-[6px] w-[479px] h-[34px] px-[10px] border border-[#505154] rounded-[10px] shadow-[inset_0_0_0_1px_#EEEFF1]">
                                        <input
                                            placeholder="Company name"
                                            className="w-full text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] placeholder-[#505154] bg-transparent outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Tax ID Input */}
                                <div className="flex flex-col gap-[4px] w-[479px] h-[54px]">
                                    <div className="flex flex-col gap-[4px] w-[479px] h-[16px] pl-[4px]">
                                        <label className="flex items-center w-[475px] h-[16px] text-[12px] font-[500] leading-[16px] text-[#0000008C]">
                                            GST/HST number
                                            <span className="w-[57px] h-[16px] text-[#00000066] ml-1">(optional)</span>
                                        </label>
                                    </div>
                                    <div className="flex items-center gap-[6px] w-[479px] h-[34px] px-[10px] border border-[#505154] rounded-[10px] shadow-[inset_0_0_0_1px_#EEEFF1]">
                                        <input
                                            placeholder="123456789RT0002"
                                            className="w-full text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529] placeholder-[#505154] bg-transparent outline-none"
                                        />
                                    </div>
                                </div>

                            </div>

                            {/* Right Column - Summary */}
                            <div className="flex flex-col items-center gap-[20px] w-[340px] h-[650px] p-[20px] bg-[#FBFBFB] border-l border-[#EEEFF1] rounded-bl-[16px] rounded-br-[16px]">

                                <div className="flex flex-col items-center gap-[20px] w-[299px] h-[222px]">
                                    {/* Summary Header */}
                                    <div className="flex justify-between items-center w-[299px] h-[20px] gap-[4px]">
                                        <div className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#242529]">
                                            Payment summary
                                        </div>
                                        <span className="flex items-center gap-[4px] px-[6px] py-[2px] h-[20px] bg-[#F8F9FA] rounded-[6px] shadow-[inset_0_0_0_1px_#EEEFF1]">
                                            <span className="text-[12px] font-[500] leading-[16px] text-[#505154] truncate">
                                                Per month
                                            </span>
                                        </span>
                                    </div>

                                    {/* Line Items */}
                                    <div className="flex flex-col items-center gap-[8px] w-[299px] h-[182px]">
                                        {/* Sub-group for items */}
                                        <div className="flex flex-col items-center gap-[8px] w-[299px] h-[141px]">

                                            {/* Item 1 */}
                                            <div className="flex justify-between items-start w-[299px] h-[20px] gap-[4px]">
                                                <div className="flex-1 text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529]">
                                                    1 seat
                                                </div>
                                                <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#0000008C]">
                                                    $86.00
                                                </div>
                                            </div>

                                            {/* Item 2 */}
                                            <div className="flex justify-between items-start w-[299px] h-[20px] gap-[4px]">
                                                <div className="flex items-center justify-start gap-[4px] h-[20px]">
                                                    <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529]">
                                                        10k credits
                                                    </div>
                                                </div>
                                                <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#0000008C]">
                                                    Included
                                                </div>
                                            </div>

                                            {/* Item 3 */}
                                            <div className="flex justify-between items-start w-[299px] h-[20px] gap-[4px]">
                                                <div className="flex items-center justify-start gap-[4px] w-[122px] h-[20px]">
                                                    <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529]">
                                                        0 additional credits
                                                    </div>
                                                </div>
                                                <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#0000008C]">
                                                    $0.00
                                                </div>
                                            </div>

                                            <div className="w-[299px] h-[1px] bg-[#EEEFF1]" />

                                            {/* Subtotal */}
                                            <div className="flex justify-between items-start w-[299px] h-[20px] gap-[4px]">
                                                <div className="flex-1 text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529]">
                                                    Subtotal
                                                </div>
                                                <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#0000008C]">
                                                    $86.00
                                                </div>
                                            </div>

                                            {/* Tax */}
                                            <div className="flex justify-between items-start w-[299px] h-[20px] gap-[4px]">
                                                <div className="flex-1 text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529]">
                                                    Tax
                                                </div>
                                                <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#0000008C]">
                                                    $0.00
                                                </div>
                                            </div>

                                        </div>

                                        <div className="w-[299px] h-[1px] bg-[#EEEFF1]" />

                                        {/* Total */}
                                        <div className="flex justify-between items-start w-[299px] h-[24px] gap-[4px]">
                                            <div className="flex items-center justify-start w-[227px] h-[20px]">
                                                <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529]">
                                                    Total per month
                                                </span>
                                            </div>
                                            <div className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529]">
                                                $86.00
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Confirm Button */}
                                <button type="submit" className="flex justify-center items-center gap-[6px] w-[299px] h-[36px] px-[12px] py-[8px] bg-[#266DF0] rounded-[10px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(38,109,240,0.12),0_3px_6px_-2px_rgba(38,109,240,0.08)]">
                                    <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-white whitespace-nowrap">
                                        Confirm
                                    </span>
                                </button>

                                {/* Disclaimer */}
                                <ul className="flex flex-col gap-[8px] w-[299px] h-[58px] p-[12px_8px_12px_28px] border border-[#EEEFF1] rounded-[9px]">
                                    <li className="list-disc text-[12px] font-[500] leading-[16px] text-[#0000008C]">
                                        Your payment method will be charged monthly beginning Feb 8, 2026
                                    </li>
                                </ul>

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
