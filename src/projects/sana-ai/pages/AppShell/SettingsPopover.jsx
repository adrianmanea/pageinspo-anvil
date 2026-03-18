import React, { useRef, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

export default function SettingsPopover({ isOpen, onClose }) {
  const popoverRef = useRef(null);

  const [shouldRender, setShouldRender] = useState(isOpen);

  if (isOpen && !shouldRender) {
    setShouldRender(true);
  }

  const handleAnimationEnd = () => {
    if (!isOpen) setShouldRender(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        if (!event.target.closest('[data-popover-trigger="settings"]')) {
          onClose();
        }
      }
    }

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
      className={`absolute bottom-full left-0 mb-[4px] w-[268px] bg-[#FFFFFF] border-[0.67px] border-[rgba(10,18,23,0.08)] rounded-[24px] shadow-[0_7px_16px_rgba(0,0,0,0.04)] flex flex-col p-[8px] z-[50] font-sans text-[#0a1217] text-[14px] origin-bottom-left ${
        isOpen
          ? "animate-[dropdownMenuScaleIn_0.15s_ease-out]"
          : "animate-[dropdownMenuScaleOut_0.10s_ease-in] [animation-fill-mode:forwards]"
      }`}
      style={{
        lineHeight: "24px",
        maxHeight: "calc(100vh - 120px)",
        overflow: "auto",
      }}
    >
      <div className="flex justify-between text-[rgba(10,18,23,0.6)] text-[14px] leading-[19.6px] p-[8px_16px] gap-[4px]">
        <div className="truncate">john.doe@acme.com</div>
        <div className="flex-none">Free plan</div>
      </div>

      <div className="flex items-center gap-[10px] rounded-[18px] cursor-pointer text-[14px] font-[500] leading-[21px] mb-[1px] p-[8px_8px_8px_16px] hover:bg-[rgba(10,18,23,0.05)] transition-colors duration-100">
        Upgrade plan
      </div>

      <div className="bg-[rgba(10,18,23,0.1)] h-[1px] m-[4px_8px]" />

      <div className="flex items-center justify-between gap-[10px] rounded-[18px] cursor-pointer text-[14px] font-[500] leading-[21px] mb-[1px] p-[8px_8px_8px_16px] hover:bg-[rgba(10,18,23,0.05)] transition-colors duration-100">
        Workspace settings
        <div className="flex gap-[2px]">
          <span className="flex items-center justify-center bg-[rgba(10,18,23,0.05)] rounded-[6px] text-[11px] leading-[16.5px] min-w-[20px] px-[4px] select-none">
            Ctrl
          </span>
          <span className="flex items-center justify-center bg-[rgba(10,18,23,0.05)] rounded-[6px] text-[11px] leading-[16.5px] min-w-[20px] px-[4px] select-none">
            ⇧
          </span>
          <span className="flex items-center justify-center bg-[rgba(10,18,23,0.05)] rounded-[6px] text-[11px] leading-[16.5px] min-w-[20px] px-[4px] select-none">
            M
          </span>
        </div>
      </div>

      <div className="flex items-center gap-[10px] rounded-[18px] cursor-pointer text-[14px] font-[500] leading-[21px] mb-[1px] p-[8px_8px_8px_16px] hover:bg-[rgba(10,18,23,0.05)] transition-colors duration-100">
        Members
      </div>

      <div className="bg-[rgba(10,18,23,0.1)] h-[1px] m-[4px_8px]" />

      <div className="flex items-center gap-[10px] rounded-[18px] cursor-pointer text-[14px] font-[500] leading-[21px] mb-[1px] p-[8px_8px_8px_16px] hover:bg-[rgba(10,18,23,0.05)] transition-colors duration-100">
        Profile settings
      </div>

      <div className="flex items-center gap-[10px] rounded-[18px] cursor-pointer text-[14px] font-[500] leading-[21px] mb-[1px] p-[8px_8px_8px_16px] hover:bg-[rgba(10,18,23,0.05)] transition-colors duration-100">
        Notification settings
      </div>

      <div className="flex items-center justify-between gap-[10px] rounded-[18px] cursor-pointer text-[14px] font-[500] leading-[21px] mb-[1px] p-[8px_8px_8px_16px] hover:bg-[rgba(10,18,23,0.05)] transition-colors duration-100">
        Keyboard shortcuts
        <div className="flex gap-[2px]">
          <span className="flex items-center justify-center bg-[rgba(10,18,23,0.05)] rounded-[6px] text-[11px] leading-[16.5px] min-w-[20px] px-[4px] select-none">
            Ctrl
          </span>
          <span className="flex items-center justify-center bg-[rgba(10,18,23,0.05)] rounded-[6px] text-[11px] leading-[16.5px] min-w-[20px] px-[4px] select-none">
            ,
          </span>
        </div>
      </div>

      <div className="flex items-center gap-[10px] rounded-[18px] cursor-pointer text-[14px] font-[500] leading-[21px] mb-[1px] p-[8px_8px_8px_16px] hover:bg-[rgba(10,18,23,0.05)] transition-colors duration-100">
        <div className="flex flex-1 items-center justify-between">
          <div>Interface theme</div>
          <ChevronRight size={16} />
        </div>
      </div>

      <div className="bg-[rgba(10,18,23,0.1)] h-[1px] m-[4px_8px]" />

      <div className="flex items-center gap-[10px] rounded-[18px] cursor-pointer text-[14px] font-[500] leading-[21px] p-[8px_8px_8px_16px] hover:bg-[rgba(10,18,23,0.05)] transition-colors duration-100">
        Sign out
      </div>
    </div>
  );
}
