import React from 'react';
import { Check } from 'lucide-react';

export default function ConvertChoosePlanPage() {
    return (
        <main className="w-[1680px] h-[963px] min-h-[963px] grid grid-cols-[1680px] grid-rows-[0px_132px_831px_0px] font-['Inter'] text-[10px] text-black">
            {/* Progress Bar */}
            <div className="absolute bottom-[961px] w-[1680px] h-[2px] bg-[#E6E7EA]">
                <div className="w-[554.398px] h-[2px] bg-[#242529] rounded-[4px]" />
            </div>

            {/* Header Section */}
            <div className="flex justify-center w-[1680px] h-[132px]">
                <div className="flex flex-col justify-between items-center gap-[20px] w-[1680px] h-[132px] p-[32px]">
                    <img
                        alt="Attio logo"
                        src="https://app.attio.com/web-assets/attio-logo-full-light.06a35891.svg"
                        className="w-[96px] h-[24px]"
                    />

                    <ol className="flex items-center gap-[4px] h-[24px]">
                        {/* Step 1: Choose plan (Active) */}
                        <div className="flex items-center gap-[4px] px-[4px] py-[2px] rounded-[4px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0)]">
                            <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529]">
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

                        {/* Step 3: Summary */}
                        <div className="flex items-center gap-[4px] px-[4px] py-[2px] rounded-[4px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0)]">
                            <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#0000008C]">
                                Summary
                            </span>
                        </div>
                    </ol>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center justify-center w-[1680px] h-[831px]">
                <div className="flex flex-col items-stretch gap-[24px] w-[784px] h-[652px] p-[30px_12px]">

                    {/* Toggle Switch */}
                    <div className="flex justify-center items-center gap-[4px] w-[760px] h-[32px]">
                        <div className="flex gap-[2px] w-[185.812px] h-[32px] p-[2px] bg-[#0000000A] rounded-[10px]">
                            {/* Annual (Selected) */}
                            <button className="flex justify-center items-center gap-[6px] w-[111.242px] h-[28px] px-[8px] py-[4px] bg-white rounded-[8px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0),0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)]">
                                <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#266DF0]">
                                    Annual
                                </span>
                                <span className="flex items-center gap-[4px] h-[20px] px-[6px] py-[2px] bg-[#E5EEFF] rounded-[6px] shadow-[inset_0_0_0_1px_#D6E5FF]">
                                    <span className="text-[12px] font-[500] leading-[16px] text-[#215BC4]">
                                        -20%
                                    </span>
                                </span>
                            </button>
                            {/* Monthly */}
                            <button className="flex justify-center items-center gap-[6px] w-[68.57px] h-[28px] px-[8px] py-[4px] bg-transparent rounded-[8px]">
                                <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#0000008C]">
                                    Monthly
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="flex flex-col items-center gap-[16px] w-[760px] h-[484px]">
                        <div className="flex justify-start items-stretch gap-[16px] w-[760px] h-[354px]">

                            {/* 1. Plus Card */}
                            <div className="w-[242.672px] h-[354px] border border-[#EEEFF1] rounded-[12px]">
                                <div className="flex flex-col items-start gap-[20px] w-full h-full p-[16px]">
                                    {/* Header */}
                                    <div className="flex flex-col items-center gap-[16px] w-[208.672px]">
                                        <div className="flex flex-col items-start gap-[12px] w-full">
                                            {/* Icon */}
                                            <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99852 4.00541L14.0745 0.533435C14.3858 0.355535 14.768 0.355535 15.0793 0.533435L21.1553 4.00541C21.4708 4.1857 21.6655 4.52124 21.6655 4.88464V11.8106C21.6655 12.174 21.4708 12.5095 21.1553 12.6898L15.0793 16.1618C14.768 16.3397 14.3858 16.3397 14.0745 16.1618L7.99852 12.6898C7.683 12.5095 7.48828 12.174 7.48828 11.8106V4.88464C7.48828 4.52124 7.683 4.1857 7.99852 4.00541Z" fill="#FFFFFF" stroke="#CDCFD1" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M14.5768 8.34722L7.70972 4.42317M14.5768 8.34722L21.4763 4.40466M14.5768 8.34722V16.1953" stroke="#CDCFD1" strokeWidth="0.506329" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529]">Plus</div>
                                        </div>

                                        {/* Price */}
                                        <div className="flex flex-col items-start gap-0 w-full">
                                            <div className="flex items-center gap-[8px]">
                                                <div className="text-[24px] font-[600] leading-[28px] tracking-[-0.48px] text-[#242529]">$29</div>
                                                <span className="flex items-center gap-[4px] px-[6px] py-[2px] bg-[#E5EEFF] rounded-[6px] shadow-[inset_0_0_0_1px_#D6E5FF]">
                                                    <span className="text-[12px] font-[500] leading-[16px] text-[#215BC4]">20% off</span>
                                                </span>
                                            </div>
                                            <div className="text-[12px] font-[500] leading-[16px] text-[#0000008C]">per user/month, billed annually</div>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <button className="flex justify-center items-center gap-[6px] w-[208.672px] h-[28px] px-[8px] py-[4px] bg-white rounded-[8px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0),0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)]">
                                        <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529]">Subscribe to Plus</span>
                                    </button>

                                    {/* Features */}
                                    <div className="flex flex-col items-start gap-[8px] w-[208.672px]">
                                        <div className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#505154]">For growing teams</div>
                                        <div className="flex flex-col items-center gap-[10px] w-[179.586px]">
                                            <FeatureItem text="Enhanced email sending" />
                                            <FeatureItem text="Permission settings" />
                                            <FeatureItem text="Upgraded contact analysis" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Pro Card (Highlighted) */}
                            <div className="w-[242.664px] h-[354px] px-[1px] pb-[1px] bg-[#266DF0] rounded-[13px] flex flex-col">
                                <div className="text-[12px] font-[500] leading-[16px] text-center text-white p-[4px]">You're using 7 Pro features</div>
                                <div className="w-[240.664px] flex-1 bg-white rounded-[12px] p-[16px] flex flex-col items-start gap-[20px]">
                                    {/* Header */}
                                    <div className="flex flex-col items-center gap-[16px] w-[208.664px]">
                                        <div className="flex flex-col items-start gap-[12px] w-full">
                                            {/* Icon */}
                                            <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99852 4.00541L14.0745 0.533435C14.3858 0.355535 14.768 0.355535 15.0793 0.533435L21.1553 4.00541C21.4708 4.1857 21.6655 4.52124 21.6655 4.88464V11.8106C21.6655 12.174 21.4708 12.5095 21.1553 12.6898L15.0793 16.1618C14.768 16.3397 14.3858 16.3397 14.0745 16.1618L7.99852 12.6898C7.683 12.5095 7.48828 12.174 7.48828 11.8106V4.88464C7.48828 4.52124 7.683 4.1857 7.99852 4.00541Z" fill="#FFFFFF" stroke="#CDCFD1" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M14.577 8.34722L7.70996 4.42317M14.577 8.34722L21.4765 4.40466M14.577 8.34722V16.1953" stroke="#CDCFD1" strokeWidth="0.506329" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15.0874 8.0557L21.1633 4.58373C21.4747 4.40583 21.8569 4.40583 22.1682 4.58373L28.2441 8.0557C28.5596 8.236 28.7544 8.57153 28.7544 8.93493V15.8609C28.7544 16.2243 28.5596 16.5598 28.2441 16.7401L22.1682 20.2121C21.8569 20.39 21.4747 20.39 21.1633 20.2121L15.0874 16.7401C14.7719 16.5598 14.5771 16.2243 14.5771 15.8609V8.93493C14.5771 8.57153 14.7719 8.236 15.0874 8.0557Z" fill="#E5EEFF" stroke="#266DF0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path opacity="0.4" d="M21.6659 12.3976L14.7988 8.47358M21.6659 12.3976L28.5654 8.45508M21.6659 12.3976V20.2457" stroke="#266DF0" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M0.910142 8.0557L6.98609 4.58373C7.29742 4.40583 7.67961 4.40583 7.99093 4.58373L14.0669 8.0557C14.3824 8.236 14.5771 8.57153 14.5771 8.93493V15.8609C14.5771 16.2243 14.3824 16.5598 14.0669 16.7401L7.99093 20.2121C7.67961 20.39 7.29741 20.39 6.98609 20.2121L0.910141 16.7401C0.594622 16.5598 0.399902 16.2243 0.399902 15.8609V8.93493C0.399902 8.57153 0.594623 8.236 0.910142 8.0557Z" fill="#FFFFFF" stroke="#CDCFD1" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path opacity="0.4" d="M7.48867 12.3976L0.621582 8.47358M7.48867 12.3976L14.3881 8.45508M7.48867 12.3976V20.2457" stroke="#266DF0" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7.99852 12.1061L14.0745 8.63414C14.3858 8.45624 14.768 8.45624 15.0793 8.63414L21.1553 12.1061C21.4708 12.2864 21.6655 12.6219 21.6655 12.9853V19.9113C21.6655 20.2747 21.471 20.6102 21.1555 20.7905L15.0793 24.2625C14.768 24.4404 14.3858 24.4404 14.0745 24.2625L7.99852 20.7905C7.683 20.6102 7.48828 20.2747 7.48828 19.9113V12.9853C7.48828 12.6219 7.683 12.2864 7.99852 12.1061Z" fill="#E5EEFF" stroke="#266DF0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path opacity="0.4" d="M14.5766 16.4482L7.70947 12.5241M14.5766 16.4482L21.476 12.5056M14.5766 16.4482V24.2963" stroke="#266DF0" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529]">Pro</div>
                                        </div>
                                        {/* Price */}
                                        <div className="flex flex-col items-start gap-0 w-full">
                                            <div className="flex items-center gap-[8px]">
                                                <div className="text-[24px] font-[600] leading-[28px] tracking-[-0.48px] text-[#242529]">$69</div>
                                                <span className="flex items-center gap-[4px] px-[6px] py-[2px] bg-[#E5EEFF] rounded-[6px] shadow-[inset_0_0_0_1px_#D6E5FF]">
                                                    <span className="text-[12px] font-[500] leading-[16px] text-[#215BC4]">20% off</span>
                                                </span>
                                            </div>
                                            <div className="text-[12px] font-[500] leading-[16px] text-[#0000008C]">per user/month, billed annually</div>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <button className="flex justify-center items-center gap-[6px] w-[208.664px] h-[28px] px-[8px] py-[4px] bg-[#266DF0] rounded-[8px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(38,109,240,0.12),0_3px_6px_-2px_rgba(38,109,240,0.08)]">
                                        <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-white">Subscribe to Pro</span>
                                    </button>

                                    {/* Features */}
                                    <div className="flex flex-col items-start gap-[8px] w-[208.664px]">
                                        <div className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#505154]">For scaling businesses</div>
                                        <div className="flex flex-col items-center gap-[10px] w-[180.992px]">
                                            <FeatureItem text="Full access permissions" />
                                            <FeatureItem text="Advanced data enrichment" />
                                            <FeatureItem text="Priority support" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Enterprise Card */}
                            <div className="w-[242.664px] h-[354px] border border-[#EEEFF1] rounded-[12px]">
                                <div className="flex flex-col items-start gap-[20px] w-full h-full p-[16px]">
                                    {/* Header */}
                                    <div className="flex flex-col items-center gap-[16px] w-[208.664px]">
                                        <div className="flex flex-col items-start gap-[12px] w-full">
                                            {/* Icon */}
                                            <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99852 4.00541L14.0745 0.533435C14.3858 0.355535 14.768 0.355535 15.0793 0.533435L21.1553 4.00541C21.4708 4.1857 21.6655 4.52124 21.6655 4.88464V11.8106C21.6655 12.174 21.4708 12.5095 21.1553 12.6898L15.0793 16.1618C14.768 16.3397 14.3858 16.3397 14.0745 16.1618L7.99852 12.6898C7.683 12.5095 7.48828 12.174 7.48828 11.8106V4.88464C7.48828 4.52124 7.683 4.1857 7.99852 4.00541Z" fill="#FFFFFF" stroke="#CDCFD1" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M14.5768 8.34722L7.70972 4.42317M14.5768 8.34722L21.4763 4.40466M14.5768 8.34722V16.1953" stroke="#CDCFD1" strokeWidth="0.506329" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M15.0874 8.0557L21.1517 4.5888C21.4673 4.4109 21.8495 4.4109 22.1608 4.5888L28.2367 8.06077C28.5522 8.24105 28.747 8.57657 28.747 8.93998V15.8659C28.747 16.2293 28.5522 16.5649 28.2367 16.7451L22.1608 20.2171C21.8495 20.395 21.4673 20.395 21.1517 20.2171L15.0874 16.7451C14.7719 16.5649 14.5771 16.2293 14.5771 15.8659V8.93998C14.5771 8.57657 14.7719 8.24105 15.0874 8.06077V8.0557Z" fill="#FFFFFF" stroke="#CDCFD1" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M21.6657 12.3976L14.7986 8.47358M21.6657 12.3976L28.5651 8.45508M21.6657 12.3976V20.2457" stroke="#CDCFD1" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M0.910142 8.0557L6.98609 4.58373C7.29742 4.40583 7.67961 4.40583 7.99093 4.58373L14.0669 8.0557C14.3824 8.236 14.5771 8.57153 14.5771 8.93493V15.8609C14.5771 16.2243 14.3824 16.5598 14.0669 16.7401L7.99093 20.2121C7.67961 20.39 7.29741 20.39 6.98609 20.2121L0.910141 16.7401C0.594622 16.5598 0.399902 16.2243 0.399902 15.8609V8.93493C0.399902 8.57153 0.594623 8.236 0.910142 8.0557Z" fill="#FFFFFF" stroke="#CDCFD1" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7.48843 12.3976L0.621338 8.47358M7.48843 12.3976L14.3879 8.45508M7.48843 12.3976V20.2457" stroke="#CDCFD1" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M7.99876 12.1061L14.0747 8.63414C14.386 8.45624 14.768 8.45624 15.0796 8.63414L21.1555 12.1061C21.471 12.2864 21.6657 12.6219 21.6657 12.9853V19.9113C21.6657 20.2747 21.471 20.6102 21.1555 20.7905L15.0796 24.2625C14.768 24.4404 14.386 24.4404 14.0747 24.2625L7.99876 20.7905C7.68325 20.6102 7.48853 20.2747 7.48853 19.9113V12.9853C7.48853 12.6219 7.68325 12.2864 7.99876 12.1061Z" fill="#E5EEFF" stroke="#266DF0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                                <path opacity="0.4" d="M14.5768 16.4482L7.70972 12.5241M14.5768 16.4482L21.4763 12.5056M14.5768 16.4482V24.2963" stroke="#266DF0" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                            <div className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529]">Enterprise</div>
                                        </div>
                                        {/* Price */}
                                        <div className="flex flex-col items-start gap-0 w-full">
                                            <div className="text-[24px] font-[600] leading-[28px] tracking-[-0.48px] text-[#242529]">Custom</div>
                                        </div>
                                    </div>

                                    {/* Button */}
                                    <button className="flex justify-center items-center gap-[6px] w-[208.664px] h-[28px] px-[8px] py-[4px] bg-white rounded-[8px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0),0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)]">
                                        <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529]">Talk to sales</span>
                                    </button>

                                    {/* Features */}
                                    <div className="flex flex-col items-start gap-[8px] w-[208.664px]">
                                        <div className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#505154]">For large organizations</div>
                                        <div className="flex flex-col items-center gap-[10px] w-[136.203px]">
                                            <FeatureItem text="Unlimited reporting" />
                                            <FeatureItem text="SAML and SSO" />
                                            <FeatureItem text="Custom billing" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 4. Free Plan */}
                        <div className="w-[760px] h-[114px] border border-[#EEEFF1] rounded-[12px]">
                            <div className="flex items-center gap-[16px] w-full h-[112px]">
                                <div className="flex items-center gap-[16px] w-[242px] h-[76px] p-[16px]">
                                    {/* Icon */}
                                    <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99852 4.00541L14.0745 0.533435C14.3858 0.355535 14.768 0.355535 15.0793 0.533435L21.1553 4.00541C21.4708 4.1857 21.6655 4.52124 21.6655 4.88464V11.8106C21.6655 12.174 21.4708 12.5095 21.1553 12.6898L15.0793 16.1618C14.768 16.3397 14.3858 16.3397 14.0745 16.1618L7.99852 12.6898C7.683 12.5095 7.48828 12.174 7.48828 11.8106V4.88464C7.48828 4.52124 7.683 4.1857 7.99852 4.00541Z" fill="#FFFFFF" stroke="#CDCFD1" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M14.5768 8.34722L7.70972 4.42317M14.5768 8.34722L21.4763 4.40466M14.5768 8.34722V16.1953" stroke="#CDCFD1" strokeWidth="0.506329" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.0874 8.0557L21.1633 4.58373C21.4747 4.40583 21.8569 4.40583 22.1682 4.58373L28.2441 8.0557C28.5596 8.236 28.7544 8.57153 28.7544 8.93493V15.8609C28.7544 16.2243 28.5596 16.5598 28.2441 16.7401L22.1682 20.2121C21.8569 20.39 21.4747 20.39 21.1633 20.2121L15.0874 16.7401C14.7719 16.5598 14.5771 16.2243 14.5771 15.8609V8.93493C14.5771 8.57153 14.7719 8.236 15.0874 8.0557Z" fill="#FFFFFF" stroke="#CDCFD1" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21.6657 12.3976L14.7986 8.47358M21.6657 12.3976L28.5651 8.45508M21.6657 12.3976V20.2457" stroke="#CDCFD1" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M0.910142 8.0557L6.98609 4.58373C7.29742 4.40583 7.67961 4.40583 7.99093 4.58373L14.0669 8.0557C14.3824 8.236 14.5771 8.57153 14.5771 8.93493V15.8609C14.5771 16.2243 14.3824 16.5598 14.0669 16.7401L7.99093 20.2121C7.67961 20.39 7.29741 20.39 6.98609 20.2121L0.910141 16.7401C0.594622 16.5598 0.399902 16.2243 0.399902 15.8609V8.93493C0.399902 8.57153 0.594623 8.236 0.910142 8.0557Z" fill="#FFFFFF" stroke="#CDCFD1" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.48843 12.3976L0.621338 8.47358M7.48843 12.3976L14.3879 8.45508M7.48843 12.3976V20.2457" stroke="#CDCFD1" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7.99876 12.1061L14.0747 8.63414C14.386 8.45624 14.768 8.45624 15.0796 8.63414L21.1555 12.1061C21.471 12.2864 21.6657 12.6219 21.6657 12.9853V19.9113C21.6657 20.2747 21.471 20.6102 21.1555 20.7905L15.0796 24.2625C14.768 24.4404 14.386 24.4404 14.0747 24.2625L7.99876 20.7905C7.68325 20.6102 7.48853 20.2747 7.48853 19.9113V12.9853C7.48853 12.6219 7.68325 12.2864 7.99876 12.1061Z" fill="#E5EEFF" stroke="#266DF0" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                        <path opacity="0.4" d="M14.5768 16.4482L7.70972 12.5241M14.5768 16.4482L21.4763 12.5056M14.5768 16.4482V24.2963" stroke="#266DF0" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="flex flex-col items-start">
                                        <div className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529]">Free</div>
                                        <div className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#505154]">For very small teams</div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-start gap-[10px] w-[242px] p-[16px]">
                                    <div className="flex items-center gap-[6px]">
                                        <div className="flex justify-center items-center w-[20px] h-[20px] bg-[#F8F9FA] rounded-[6px]">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="#242529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="text-[12px] font-[500] leading-[16px] text-[#505154]">Unlimited records</div>
                                    </div>
                                    <div className="flex items-center gap-[6px]">
                                        <div className="flex justify-center items-center w-[20px] h-[20px] bg-[#F8F9FA] rounded-[6px]">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="#242529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="text-[12px] font-[500] leading-[16px] text-[#505154]">Sync your email & calendar</div>
                                    </div>
                                </div>
                                <div className="flex items-center p-[16px] w-[214px]">
                                    <button className="flex justify-center items-center gap-[6px] w-full h-[28px] px-[8px] py-[4px] bg-white rounded-[8px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0),0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)]">
                                        <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#242529]">Continue with Free</span>
                                    </button>
                                </div>
                            </div>
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
        <div className="flex items-center gap-[6px] w-full h-[20px]">
            <div className="flex justify-center items-center w-[20px] h-[20px] bg-[#F8F9FA] rounded-[6px]">
                {/* Check Icon Placeholder - Using SVG from capture or Lucide */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* The capture uses a <use> tag referencing an external SVG definition. 
                         For a standalone component, I'll replace it with a Lucide check or a simple path. 
                         Since the prompt asks for specific icons if required, and here it's a generic checkmark inside a box.
                         I'll use a simple SVG path for the checkmark to match the visual style of the capture's 14x14 icon.
                     */}
                    <path d="M11.6666 3.5L5.24992 9.91667L2.33325 7" stroke="#242529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="text-[12px] font-[500] leading-[16px] text-[#505154]">{text}</div>
        </div>
    );
}
