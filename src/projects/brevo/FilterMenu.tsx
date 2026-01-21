import React, { useState, useMemo } from "react";
import {
  SearchIcon,
  CloseIcon,
  ContactDetailsIcon,
  EmailIcon,
  SmsIcon,
  DealEventsIcon,
  GenericObjectIcon,
  ArrowRightIcon,
  NoOptionsIllustration,
} from "./FilterMenuIcons";

const OPTIONS = [
  { id: "contact_details", label: "Contact details", icon: ContactDetailsIcon },
  { id: "email", label: "Email", icon: EmailIcon },
  { id: "sms", label: "SMS", icon: SmsIcon },
  { id: "deal_events", label: "Deal Events", icon: DealEventsIcon },
  { id: "coupon", label: "coupon", icon: GenericObjectIcon },
  { id: "deal", label: "Deal", icon: GenericObjectIcon },
  { id: "company", label: "Company", icon: GenericObjectIcon },
  { id: "product", label: "Product", icon: GenericObjectIcon },
];

interface FilterMenuProps {
  onSelect: (id: string) => void;
  onClose: () => void;
}

export default function FilterMenu({ onSelect, onClose }: FilterMenuProps) {
  const [searchValue, setSearchValue] = useState("");

  const filteredOptions = useMemo(() => {
    if (!searchValue) return OPTIONS;
    const lower = searchValue.toLowerCase();
    return OPTIONS.filter((opt) => opt.label.toLowerCase().includes(lower));
  }, [searchValue]);

  return (
    <div
      className="absolute left-0 top-full mt-2 w-[300px] bg-white rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-[#e3e3e3] overflow-hidden z-50 flex flex-col font-sans"
      style={
        {
          // Positioning hacks to match capture somewhat if needed, but relative usually safer
          // The capture had a specific transform, we'll rely on parent relative positioning
        }
      }
    >
      {/* Search Bar Container */}
      <div className="p-2 border-b border-transparent">
        <div className="relative flex items-center w-full h-[32px] bg-white border border-[#e3e3e3] rounded-[8px] focus-within:border-[#6358de] transition-colors">
          <div className="absolute left-2 text-[#696969] flex items-center justify-center pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="search"
            className="w-full h-full pl-8 pr-8 py-1 text-[14px] text-[#1b1b1b] placeholder-[#696969] bg-transparent outline-none rounded-[8px]"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            autoFocus
          />
          {searchValue && (
            <button
              onClick={() => setSearchValue("")}
              className="absolute right-2 text-[#696969] hover:text-[#1b1b1b] flex items-center justify-center"
              aria-label="Reset search button"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </div>

      {/* Options List */}
      <div className="overflow-y-auto max-h-[240px]">
        {filteredOptions.length > 0 ? (
          <ul className="py-1">
            {filteredOptions.map((option) => (
              <li
                key={option.id}
                role="option"
                onClick={() => onSelect(option.id)}
                className="mx-1 px-2 py-2 flex items-center justify-between hover:bg-[#f2f2f2] rounded-[8px] cursor-pointer group transition-colors"
              >
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="text-[#696969] group-hover:text-[#1b1b1b] transition-colors flex-shrink-0">
                    <option.icon />
                  </div>
                  <span className="text-[14px] text-[#1b1b1b] truncate font-normal">
                    {option.label}
                  </span>
                </div>
                {/* The capture shows an icon on the right, likely an arrow indicating more or action */}
                <div className="text-[#696969] group-hover:text-[#1b1b1b] transition-colors">
                  <ArrowRightIcon />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          /* Empty State */
          <div className="p-4 flex flex-col items-center text-center">
            <div className="w-[80%] mb-2">
              <NoOptionsIllustration />
            </div>
            <span className="text-[14px] text-[#696969]">
              Oops, there are no items in the list yet
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
