import React, { useRef, useEffect, useState } from "react";
import { UploadCloud, FileText, Bot, Blocks } from "lucide-react";

export default function MorePopover({ isOpen, onClose }) {
  const popoverRef = useRef(null);

  const [shouldRender, setShouldRender] = useState(isOpen);

  if (isOpen && !shouldRender) {
    setShouldRender(true);
  }

  const handleAnimationEnd = () => {
    if (!isOpen) setShouldRender(false);
  };

  // Handle click outside
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        if (!event.target.closest('[data-popover-trigger="more"]')) {
          onClose();
        }
      }
    }

    // Capture true prevents standard propagation issues when the toggle click fires
    document.addEventListener("mousedown", handleClickOutside, {
      capture: true,
    });
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, {
        capture: true,
      });
    };
  }, [isOpen, onClose]);

  if (!shouldRender) return null;

  return (
    <div
      ref={popoverRef}
      onAnimationEnd={handleAnimationEnd}
      className={`absolute top-full left-[6px] mt-[4px] w-[268px] bg-[#FFFFFF] border-[0.67px] border-[rgba(10,18,23,0.08)] rounded-[24px] shadow-[0_7px_16px_rgba(0,0,0,0.04)] flex flex-col p-[8px] z-[50] font-sans text-[#0a1217] text-[14px] origin-top-left ${
        isOpen ? "animate-[dropdownMenuScaleIn_0.15s_ease-out]" : "animate-[dropdownMenuScaleOut_0.10s_ease-in] [animation-fill-mode:forwards]"
      }`}
      style={{ lineHeight: "24px" }}
    >
      <div className="flex items-center gap-[8px] rounded-[18px] cursor-pointer text-[14px] font-[500] leading-[21px] mb-[1px] p-[8px_12px] hover:bg-[rgba(10,18,23,0.05)] transition-colors duration-200">
        <UploadCloud size={16} />
        File uploads
      </div>

      <div className="flex items-center gap-[8px] rounded-[18px] cursor-pointer text-[14px] font-[500] leading-[21px] mb-[1px] p-[8px_12px] hover:bg-[rgba(10,18,23,0.05)] transition-colors duration-200">
        <FileText size={16} />
        Docs
      </div>

      <div className="flex items-center gap-[8px] rounded-[18px] cursor-pointer text-[14px] font-[500] leading-[21px] mb-[1px] p-[8px_12px] hover:bg-[rgba(10,18,23,0.05)] transition-colors duration-200">
        <Bot size={16} />
        Agents
        <div className="flex-1" />
        <span className="flex items-center gap-[2px]">
          <span className="flex items-center justify-center min-w-[20px] h-[20px] bg-[rgba(10,18,23,0.05)] rounded-[6px] text-[12px] leading-[12px] font-[500] px-[5px]">
            Ctrl
          </span>
          <span className="flex items-center justify-center min-w-[20px] h-[20px] bg-[rgba(10,18,23,0.05)] rounded-[6px] text-[12px] leading-[12px] font-[500] px-[5px]">
            A
          </span>
        </span>
      </div>

      <div className="flex items-center gap-[8px] rounded-[18px] cursor-pointer text-[14px] font-[500] leading-[21px] p-[8px_12px] hover:bg-[rgba(10,18,23,0.05)] transition-colors duration-200">
        <Blocks size={16} />
        Integrations
        <div className="flex-1" />
        <span className="flex items-center gap-[2px]">
          <span className="flex items-center justify-center min-w-[20px] h-[20px] bg-[rgba(10,18,23,0.05)] rounded-[6px] text-[12px] leading-[12px] font-[500] px-[5px]">
            Ctrl
          </span>
          <span className="flex items-center justify-center min-w-[20px] h-[20px] bg-[rgba(10,18,23,0.05)] rounded-[6px] text-[12px] leading-[12px] font-[500] px-[5px]">
            I
          </span>
        </span>
      </div>
    </div>
  );
}
