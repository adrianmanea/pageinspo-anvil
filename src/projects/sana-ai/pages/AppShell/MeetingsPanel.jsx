import React from "react";
import { ChevronDown, SlidersHorizontal, LayoutGrid, X } from "lucide-react";

export default function MeetingsPanel({ isOpen, onClose }) {
  return (
    <>
      {/* Invisible Overlay for click-outside dismissal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[10]"
          onClick={onClose}
        />
      )}

      {/* Slide-out Panel Node */}
      <div
        className={`fixed top-0 bottom-0 left-0 md:left-[268px] w-full md:w-[470px] bg-[#F9F9F9] md:border-l md:border-[rgba(10,18,23,0.08)] text-[#0a1217] flex flex-col font-sans z-[50] md:z-[11] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.25,0.5,0.25,1)] will-change-transform ${
          isOpen ? "translate-x-0 shadow-[0_-16px_16px_rgba(0,0,0,0.04),0_-16px_32px_rgba(0,0,0,0.07)]" : "-translate-x-full shadow-none"
        }`}
        style={{ lineHeight: "24px" }}
      >
      {/* Header */}
      <div className="flex items-center min-h-[28px] mx-[20px] my-[16px] relative z-[1]">
        <h3 className="flex items-center text-[rgba(10,18,23,0.4)] text-[16px] font-[500] leading-[22.4px] gap-[8px]">
          <div className="flex items-center gap-[8px]">
            <span
              type="button"
              className="flex items-center text-[#0a1217] cursor-pointer gap-[8px]"
            >
              All meetings
              <ChevronDown size={16} />
            </span>
          </div>
        </h3>
        <div className="flex gap-[4px] ml-auto">
          <button 
            type="button"
            onClick={onClose}
            className="md:hidden flex items-center justify-center flex-none w-[28px] h-[28px] rounded-[8px] text-[rgba(10,18,23,0.8)] hover:text-[#0a1217] hover:bg-[rgba(10,18,23,0.05)] transition-all cursor-pointer"
          >
            <X size={16} />
          </button>
          <button className="flex items-center justify-center flex-none w-[28px] h-[28px] rounded-[8px] text-[rgba(10,18,23,0.8)] hover:text-[#0a1217] hover:bg-[rgba(10,18,23,0.05)] transition-all cursor-pointer">
            <SlidersHorizontal size={16} />
          </button>
          <button className="flex items-center justify-center flex-none w-[28px] h-[28px] rounded-[8px] text-[rgba(10,18,23,0.8)] hover:text-[#0a1217] hover:bg-[rgba(10,18,23,0.05)] transition-all cursor-pointer">
            <LayoutGrid size={16} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 overflow-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-[460px] mt-[6px]">
          <div className="flex flex-col gap-[6px] px-[20px] pb-[20px]">
            <div className="flex items-center justify-between">
              <h6 className="text-[13px] font-[500] leading-[18.2px]">
                Next meeting
              </h6>
              <h2 className="text-[rgba(10,18,23,0.6)] text-[13px] font-[500] leading-[18.2px] cursor-pointer hover:text-[#0a1217] transition-colors">
                Record
              </h2>
            </div>
            
            <ul className="mb-[32px]">
              <li>
                <div className="flex items-center gap-[16px] mx-[-12px] p-[8px_12px_8px_8px] rounded-[16px] hover:bg-[rgba(10,18,23,0.05)] transition-all cursor-pointer group">
                  <div className="flex flex-col items-center justify-center w-[52px] h-[52px] bg-[rgba(10,18,23,0.02)] rounded-[12px] text-[rgba(10,18,23,0.4)] flex-none transition-all group-hover:bg-[#FFFFFF] group-hover:text-[#0a1217]">
                    <p className="text-[8px] font-[500] leading-[12px] tracking-[0.4px]">
                      MAR
                    </p>
                    <p className="text-[14px] font-[500] leading-[19.6px]">
                      21
                    </p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[14px] font-[500] leading-[19.6px] truncate white-space-nowrap">
                      Flight to Valencia (W4 3185)
                    </p>
                    <p className="flex items-baseline text-[rgba(10,18,23,0.4)] text-[13px] leading-[19.5px]">
                      <time className="block truncate">Mar 21, 08:00</time>
                    </p>
                  </div>
                  <div className="ml-auto">
                    <button
                      type="button"
                      className="flex items-center w-[26px] h-[16px] bg-[rgba(10,18,23,0.08)] rounded-[16px] flex-none transition-all"
                    >
                      <span className="block w-[12px] h-[12px] bg-[#FFFFFF] rounded-full shadow-[0_2px_6px_rgba(0,0,0,0.15)] translate-x-[2px] transition-all" />
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-end gap-[8px] mx-[20px] py-[13px] border-t-[0.67px] border-t-[rgba(10,18,23,0.05)]">
        <button className="flex items-center justify-center gap-[6px] h-[36px] px-[16px] border-[0.67px] border-[rgba(10,18,23,0.1)] rounded-full text-[14px] font-[500] leading-[20px] whitespace-nowrap hover:bg-[rgba(10,18,23,0.05)] transition-all">
          Add meeting
        </button>
      </div>
    </div>
    </>
  );
}
