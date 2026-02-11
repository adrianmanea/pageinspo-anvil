import React from 'react';
import { ArrowRight, MessageSquare, HelpCircle, LogOut } from 'lucide-react';

export default function TrialEndedPage() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-['Inter'] text-[#000000]">
      
      {/* Top Bar with Logo */}
      <div className="w-full px-[32px] pt-[32px] pb-[24px]">
        <div className="flex items-center gap-[4px] h-[24px]">
             {/* Grapho Logo */}
             <a href="/" className="flex items-center justify-center">
                <img 
                  alt="Grapho logo" 
                  src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/component-assets/grapho-dark.svg" 
                  className="block w-[96px] h-[24px]"
                />
            </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center w-full px-[20px]">
        <div className="w-full max-w-[320px] flex flex-col items-center gap-[40px]">
          
          {/* Text Content */}
          <div className="flex flex-col items-center gap-[20px] w-full text-center">
            
            {/* Header */}
            <h1 className="text-[#242529] text-[18px] font-[600] leading-[24px] tracking-[-0.36px]">
              Your Pro trial has ended
            </h1>

            {/* Subheader */}
            <p className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-black/55 w-full">
              Upgrade to continue using your workspace and all its premium features
            </p>

            {/* Actions */}
            <div className="w-full flex flex-col gap-[8px]">
              
              {/* Primary Action: Continue with Pro */}
              <a 
                href="/acmessrl/convert/extras" 
                className="w-full h-[32px] bg-[#266DF0] hover:bg-[#1D4ED8] text-white rounded-[9px] flex items-center justify-center gap-[6px] px-[8px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_2px_4px_-2px_rgba(38,109,240,0.12),0_3px_6px_-2px_rgba(38,109,240,0.08)] transition-colors"
              >
                 {/* Flash/Sparkle Icon (using generic svg path from capture as inspiration or Lucide equiv) */}
                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M7 1.75L8.75 5.25L12.25 7L8.75 8.75L7 12.25L5.25 8.75L1.75 7L5.25 5.25L7 1.75Z" fill="currentColor" />
                 </svg>
                 <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px]">
                   Continue with Pro
                 </span>
              </a>

              {/* Secondary Action: Explore plans */}
              <a 
                href="/acmessrl/convert/plan"
                className="w-full h-[32px] bg-white hover:bg-gray-50 text-[#242529] rounded-[9px] flex items-center justify-center gap-[6px] px-[8px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0),0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)] border border-transparent transition-colors"
              >
                <div className="w-[14px] h-[14px] flex items-center justify-center text-[#266DF0]">
                    {/* Grid/Layout Icon */}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-[#266DF0]">
                        <rect x="1" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                        <rect x="8" y="1" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                        <rect x="1" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                        <rect x="8" y="8" width="5" height="5" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                    </svg>
                </div>
                <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px]">
                  Explore plans
                </span>
              </a>

            </div>
          </div>

          {/* Help Links Section */}
          <div className="w-full flex flex-col gap-[8px] items-center">
            
            <p className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-black/55 text-left w-full pl-[20px]">
               {/* Note: Capture has this text left aligned but container centered. Visual check suggests centered or consistent with buttons. */}
               {/* Capture says textAlign: "left" for this specific element but parent aligns "flex-start". Let's center it to match the visual flow or keep left if strict. 
                   Looking at structure: It is inside a 280px wide container. The text "Need any help from us?" is a block. 
                   Let's stick to the visual hierarchy of the buttons below it.
               */}
               Need any help from us?
            </p>

            {/* Request trial extension */}
            <button className="w-full h-[32px] bg-white hover:bg-gray-50 text-[#242529] rounded-[9px] flex items-center justify-center gap-[6px] px-[8px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0),0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)] transition-colors">
               <HelpCircle size={14} className="text-black" />
               <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px]">
                 Request trial extension
               </span>
            </button>

             {/* Talk to Sales */}
             <button className="w-full h-[32px] bg-white hover:bg-gray-50 text-[#242529] rounded-[9px] flex items-center justify-center gap-[6px] px-[8px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0),0_0_2px_0_rgba(28,40,64,0.18),0_1px_3px_0_rgba(24,41,75,0.04)] transition-colors">
               <MessageSquare size={14} className="text-black" />
               <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px]">
                 Talk to sales
               </span>
            </button>

          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="w-full flex justify-center py-[24px]">
          <ul className="flex items-center gap-[20px] text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-black/55">
              <li>
                  <span>© 2026 Grapho Limited</span>
              </li>
              <li>
                  <a href="https://grapho.com/legal/privacy" target="_blank" rel="noreferrer noopener" className="underline decoration-black/10 hover:decoration-black/30">
                      Privacy Policy
                  </a>
              </li>
              <li>
                  <a href="https://grapho.com/help" target="_blank" rel="noreferrer noopener" className="underline decoration-black/10 hover:decoration-black/30">
                      Support
                  </a>
              </li>
              <li>
                  <button className="underline decoration-black/10 hover:decoration-black/30">
                      Sign out
                  </button>
              </li>
          </ul>
      </footer>

    </div>
  );
}
