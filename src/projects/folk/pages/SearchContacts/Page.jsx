import React, { useState, useEffect } from "react";
import {
  Search,
  ChevronDown,
  Plus,
  MessageSquare,
  User,
  X,
  MoreHorizontal,
  Linkedin,
  Twitter,
  Maximize2,
  Copy,
  Sparkles,
  Mail,
  Phone,
  Trash2,
} from "lucide-react";

export default function Page() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return new URLSearchParams(window.location.search).get("theme");
    }
    return null;
  });

  const [selectedContact, setSelectedContact] = useState(null);
  const [selectedContactIds, setSelectedContactIds] = useState([]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const contacts = [
    {
      id: "025deb2b",
      name: "Jane Doe",
      avatar: User,
      company: {
        name: "Acme Corp",
        logoUrl: "https://placehold.co/32x32/E8EAED/9AA0A6.svg?text=A",
      },
      title: "Sales Rep",
      email: "jane.doe@acme.com",
      group: { name: "Leads", emoji: "🤑" },
    },
    {
      id: "10e677f6",
      name: "John Smith",
      avatar: User,
      company: {
        name: "Acme Corp",
        logoUrl: "https://placehold.co/32x32/E8EAED/9AA0A6.svg?text=A",
      },
      title: "Sales Manager",
      email: "john.smith@acme.com",
      group: { name: "Leads", emoji: "🤑" },
    },
    {
      id: "21867ec5",
      name: "Alice Johnson",
      avatar: User,
      company: {
        name: "Acme Corp",
        logoUrl: "https://placehold.co/32x32/E8EAED/9AA0A6.svg?text=A",
      },
      title: "Account Executive",
      email: "alice.johnson@acme.com",
      group: { name: "Leads", emoji: "🤑" },
    },
  ];

  return (
    <div className="flex flex-col h-screen w-full bg-[#ffffff] dark:bg-[#191919] font-sans text-[#202020] dark:text-[#EEEEEE] text-[13px] overflow-hidden">
      {/* Search Header */}
      <header className="flex items-center h-[48px] pl-[24px] pr-[16px] border-b border-[#d9d9d9] dark:border-[#3D3D3D] shrink-0 gap-[8px]">
        <div className="flex flex-1 items-center h-full gap-[12px]">
          <Search className="w-[20px] h-[20px] text-[#626262] dark:text-[#B4B4B4] shrink-0" />
          <input
            type="search"
            id="search-input"
            placeholder="Search people and companies…"
            className="flex-1 h-full bg-transparent outline-none text-[13px] text-[#202020] dark:text-[#EEEEEE] placeholder:text-[#626262] dark:placeholder:text-[#B4B4B4]"
            autoComplete="off"
            spellCheck="false"
          />
        </div>
      </header>

      {/* Tabs & Filters Header */}
      <div className="flex items-center justify-between h-[48px] px-[24px] border-b border-[#d9d9d9] dark:border-[#3D3D3D] shrink-0">
        <div className="flex items-end h-full gap-[20px]">
          <button className="flex items-center h-full gap-[6px] font-[500] text-[13px] text-[#202020] dark:text-[#EEEEEE] border-b-2 border-transparent">
            People
            <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
              10
            </span>
          </button>
          <button className="flex items-center h-full gap-[6px] font-[500] text-[13px] text-[#626262] dark:text-[#B4B4B4] border-b-2 border-transparent">
            Companies
            <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
              10
            </span>
          </button>
        </div>

        <div className="flex items-center gap-[8px]">
          <button className="flex items-center justify-center gap-[4px] px-[10px] py-[6px] h-[28px] rounded-full text-[#626262] dark:text-[#B4B4B4] font-[500] text-[13px] hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
            All contacts
            <ChevronDown className="w-[16px] h-[16px]" />
          </button>
        </div>
      </div>

      {/* Search Results */}
      <div className="flex-1 overflow-y-auto">
        <ul className="w-full flex-col flex">
          {contacts.map((contact, index) => (
            <li
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className="group flex flex-row items-center relative h-[70px] w-full px-[24px] py-[16px] gap-[12px] hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              {/* Avatar & Checkbox Stack */}
              <div className="relative flex items-center justify-center w-[32px] h-[32px] shrink-0">
                <input
                  type="checkbox"
                  checked={selectedContactIds.includes(contact.id)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedContactIds((prev) => [...prev, contact.id]);
                    } else {
                      setSelectedContactIds((prev) =>
                        prev.filter((id) => id !== contact.id),
                      );
                    }
                  }}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute inset-0 m-auto w-[16px] h-[16px] border border-[#cecece] dark:border-[#4A4A4A] rounded-[4px] bg-white dark:bg-[#191919] cursor-pointer accent-[#202020] dark:accent-[#EEEEEE] opacity-0 group-hover:opacity-100 checked:opacity-100 z-10 transition-opacity"
                />
                <div
                  className={`absolute inset-0 w-full h-full rounded-full bg-white dark:bg-[#191919] overflow-hidden transition-opacity z-0 pointer-events-none flex items-center justify-center ${selectedContactIds.includes(contact.id) ? "opacity-0" : "group-hover:opacity-0 opacity-100"}`}
                >
                  <contact.avatar className="w-full h-full p-1.5 text-[#626262] dark:text-[#B4B4B4]" />
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col flex-1 justify-center h-full pt-[1px] min-w-0">
                <span className="font-[500] text-[#202020] dark:text-[#EEEEEE] text-[13px] leading-[18px] truncate">
                  {contact.name}
                </span>
                <div className="flex items-center gap-[4px] text-[#626262] dark:text-[#B4B4B4] text-[13px] leading-[18px] truncate mt-[1px]">
                  <div className="flex items-center justify-center w-[16px] h-[16px] shrink-0">
                    <img
                      src={contact.company.logoUrl}
                      alt={contact.company.name}
                      className="w-full h-full rounded-[4px] object-cover"
                    />
                  </div>
                  <span>{contact.company.name}</span>
                  <span className="mx-[2px]">·</span>
                  <span>{contact.title}</span>
                  <span className="mx-[2px]">·</span>
                  <span>{contact.email}</span>
                </div>
              </div>

              {/* Badge & Actions */}
              <div className="flex items-center gap-[12px] shrink-0 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                {/* Group Badge */}
                <div className="flex items-center h-[28px] px-[8px] gap-[6px] bg-white dark:bg-[#191919] border border-[#e1e1e1] dark:border-[#353535] rounded-full">
                  <span className="text-[16px] leading-none">
                    {contact.group.emoji}
                  </span>
                  <span className="text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE] truncate max-w-[120px]">
                    {contact.group.name}
                  </span>
                </div>

                {/* Hover Actions */}
                <div className="flex items-center gap-[4px]">
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center w-[24px] h-[24px] bg-white dark:bg-[#222222] border border-[#bbbbbb] dark:border-[#606060] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] hover:bg-gray-50 dark:hover:bg-[#2A2A2A] text-[#626262] dark:text-[#B4B4B4]"
                  >
                    <Plus className="w-[14px] h-[14px]" />
                  </button>
                  <button
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center w-[24px] h-[24px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-[#626262] dark:text-[#B4B4B4]"
                  >
                    <MessageSquare className="w-[14px] h-[14px]" />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Slide-out Dialog Panel */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 flex pointer-events-auto justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 dark:bg-black/40 transition-opacity backdrop-blur-sm"
            onClick={() => setSelectedContact(null)}
          ></div>

          {/* Dialog Container */}
          <div className="relative w-[576px] h-full bg-white dark:bg-[#191919] border-l border-[#d9d9d9] dark:border-[#3D3D3D] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right-8 duration-300 pointer-events-auto">
            {/* Top Bar */}
            <div className="flex items-center px-[24px] h-[48px] border-b border-[#d9d9d9] dark:border-[#2C2C2E] shrink-0 gap-[4px] bg-white dark:bg-[#191919]">
              <button
                onClick={() => setSelectedContact(null)}
                className="flex items-center justify-center w-[28px] h-[28px] rounded-full text-[#626262] dark:text-[#B4B4B4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-[16px] h-[16px]" />
              </button>
              <button className="flex items-center justify-center w-[28px] h-[28px] rounded-full text-[#626262] dark:text-[#B4B4B4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <Maximize2 className="w-[16px] h-[16px]" />
              </button>

              <div className="flex items-center px-[8px] mx-[8px] h-[28px]">
                <span className="text-[13px] font-[500] text-[#626262] dark:text-[#B4B4B4] mr-[8px]">
                  View in
                </span>
                <div className="flex items-center h-[28px] px-[8px] border border-[#626262] dark:border-[#B4B4B4] rounded-full cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <span className="text-[16px] leading-[19px] mr-[6px] -ml-[2px]">
                    {selectedContact.group.emoji}
                  </span>
                  <span className="text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE] leading-[19px]">
                    {selectedContact.group.name}
                  </span>
                </div>
              </div>

              <button className="flex items-center justify-center h-[28px] px-[10px] rounded-full text-[13px] font-[500] text-[#626262] dark:text-[#B4B4B4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors ml-auto">
                Copy link
              </button>
              <button className="flex items-center justify-center w-[28px] h-[28px] rounded-full text-[#626262] dark:text-[#B4B4B4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <MoreHorizontal className="w-[16px] h-[16px]" />
              </button>
            </div>

            {/* Header Area */}
            <div className="flex flex-col px-[24px] pt-[16px] pb-[4px] gap-[24px] shrink-0 bg-white dark:bg-[#191919]">
              <div className="flex items-center h-[56px]">
                <div className="w-[56px] h-[56px] rounded-full bg-[#E1E1E1] dark:bg-[#333333] flex items-center justify-center overflow-hidden shrink-0">
                  <selectedContact.avatar className="w-[24px] h-[24px] text-[#626262] dark:text-[#B4B4B4]" />
                </div>
                <div className="flex flex-col ml-[16px] flex-1 justify-center">
                  <div className="flex items-center h-[30px] gap-[4px]">
                    <h2 className="text-[20px] font-[500] text-[#202020] dark:text-[#EEEEEE] leading-[30px] tracking-[-0.38px]">
                      {selectedContact.name}
                    </h2>
                    <button className="flex items-center justify-center w-[28px] h-[28px] rounded-full text-[#626262] dark:text-[#B4B4B4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <Copy className="w-[16px] h-[16px]" />
                    </button>
                  </div>
                  <div className="flex items-center h-[24px] px-[2px]">
                    <div className="flex items-center justify-center w-[16px] h-[16px] mr-[6px] -ml-[2px] shrink-0">
                      <img
                        src={selectedContact.company.logoUrl}
                        alt={selectedContact.company.name}
                        className="w-[12px] h-[12px] rounded-[2px] object-cover"
                      />
                    </div>
                    <span className="text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE] underline decoration-[#00000026] dark:decoration-[#FFFFFF26] cursor-pointer hover:decoration-[#202020] dark:hover:decoration-[#EEEEEE]">
                      {selectedContact.company.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex items-center gap-[8px] h-[28px]">
                <button className="flex items-center justify-center h-[28px] px-[10px] bg-white dark:bg-[#222222] border border-[#bbbbbb] dark:border-[#606060] text-[#202020] dark:text-[#EEEEEE] text-[13px] font-[500] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors">
                  <Sparkles className="w-[16px] h-[16px] mr-[6px] -ml-[2px] text-[#626262] dark:text-[#B4B4B4]" />
                  Enrich
                </button>
                <button className="flex items-center justify-center h-[28px] px-[10px] bg-white dark:bg-[#222222] border border-[#bbbbbb] dark:border-[#606060] text-[#202020] dark:text-[#EEEEEE] text-[13px] font-[500] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors">
                  <Mail className="w-[16px] h-[16px] mr-[6px] -ml-[2px] text-[#626262] dark:text-[#B4B4B4]" />
                  Email
                </button>
                <button className="flex items-center justify-center w-[28px] h-[28px] bg-white dark:bg-[#222222] border border-[#bbbbbb] dark:border-[#606060] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors">
                  <Linkedin className="w-[14px] h-[14px] text-[#626262] dark:text-[#B4B4B4]" />
                </button>
                <button className="flex items-center justify-center w-[28px] h-[28px] bg-white dark:bg-[#222222] border border-[#bbbbbb] dark:border-[#606060] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors">
                  <Phone className="w-[14px] h-[14px] text-[#626262] dark:text-[#B4B4B4]" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex items-end px-[24px] h-[48px] border-b border-[#d9d9d9] dark:border-[#3D3D3D] shrink-0 gap-[20px] bg-white dark:bg-[#191919]">
              <button className="flex items-center h-[48px] text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] border-b-[2px] border-[#202020] dark:border-[#EEEEEE]">
                Details
              </button>
              <button className="flex items-center gap-[6px] h-[48px] text-[13px] font-[500] text-[#626262] dark:text-[#B4B4B4] border-b-[2px] border-transparent hover:text-[#202020] dark:hover:text-[#EEEEEE] transition-colors">
                Team interactions
                <span className="text-[12px] font-[500]">0</span>
              </button>
              <button className="flex items-center gap-[6px] h-[48px] text-[13px] font-[500] text-[#626262] dark:text-[#B4B4B4] border-b-[2px] border-transparent hover:text-[#202020] dark:hover:text-[#EEEEEE] transition-colors">
                Notes
                <span className="text-[12px] font-[500]">0</span>
              </button>
              <button className="flex items-center gap-[6px] h-[48px] text-[13px] font-[500] text-[#626262] dark:text-[#B4B4B4] border-b-[2px] border-transparent hover:text-[#202020] dark:hover:text-[#EEEEEE] transition-colors">
                Reminders
                <span className="text-[12px] font-[500]">0</span>
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto w-full bg-white dark:bg-[#191919]">
              <div className="flex flex-col px-[24px] pt-[20px] pb-[128px] w-full max-w-[896px] mx-auto gap-[8px]">
                {/* Field: Status */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Status
                      </span>
                      <ChevronDown className="w-[12px] h-[12px] text-[#202020] dark:text-[#EEEEEE] opacity-0 group-hover/field:opacity-100" />
                    </div>
                  </div>
                  <div className="flex items-center h-[29px] px-[6px]">
                    <div className="flex items-center h-[20px] px-[8px] bg-[#F2EBFE] dark:bg-[#A984FF5E] border border-[#DECCFE] dark:border-[#DECCFE] rounded-full">
                      <div className="w-[6px] h-[6px] rounded-full bg-[#B185FF] mr-[6px]"></div>
                      <span className="text-[13px] font-[500] text-[#8643FF] dark:text-[#EAE0FF]">
                        Lead
                      </span>
                    </div>
                  </div>
                </div>

                {/* Field: Channel */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Channel
                      </span>
                    </div>
                    <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <X className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                  <div className="flex items-center h-[29px] px-[6px]">
                    <div className="flex items-center h-[20px] px-[8px] bg-[#E5FDF0] dark:bg-[#50FDAC5E] border border-[#B1F1CB] dark:border-[#B1F1CB] rounded-full">
                      <span className="text-[13px] font-[500] text-[#12C86C] dark:text-[#B1F1CB]">
                        Outbound
                      </span>
                    </div>
                  </div>
                </div>

                {/* Field: Prospect owner */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Prospect owner
                      </span>
                    </div>
                    <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <X className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                  <div className="flex items-center h-[28px] px-[6px]">
                    <div className="flex items-center h-[24px] px-[8px] bg-[#f2f2f2] dark:bg-[#353535] rounded-full">
                      <div className="w-[16px] h-[16px] rounded-full bg-[#EEEEEE] dark:bg-[#333] border-[0.666667px] border-[#d9d9d9] dark:border-[#EEEEEE] flex items-center justify-center mr-[6px] -ml-[2px] overflow-hidden">
                        <span className="text-[9px] text-[#202020] dark:text-[#EEEEEE]">
                          A
                        </span>
                      </div>
                      <span className="text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE]">
                        Adrian Stefan
                      </span>
                    </div>
                  </div>
                </div>

                {/* Field: User selection */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        User selection
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center h-[28px] px-[6px]">
                    <span className="text-[13px] text-[#626262] dark:text-[#b4b4b4]">
                      Add member
                    </span>
                  </div>
                </div>

                {/* Field: Deal value */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Deal value
                      </span>
                    </div>
                    <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <Copy className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                  <div className="flex items-center h-[28px] px-[6px]">
                    <span className="text-[13px] text-[#202020] dark:text-[#EEEEEE]">
                      $20,000.00
                    </span>
                  </div>
                </div>

                {/* Field: Company size */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Company size
                      </span>
                    </div>
                    <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <X className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                  <div className="flex items-center h-[29px] px-[6px]">
                    <div className="flex items-center h-[20px] px-[8px] bg-[#FFF8CC] dark:bg-[#FDCB225C] border border-[#F6EEB4] dark:border-[#F6EEB4] rounded-full">
                      <span className="text-[13px] font-[500] text-[#DCA200] dark:text-[#F6EEB4]">
                        Enterprise
                      </span>
                    </div>
                  </div>
                </div>

                {/* Field: Emails */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Emails
                      </span>
                    </div>
                    <div className="flex items-center gap-[4px]">
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        <Copy className="w-[14px] h-[14px]" />
                      </button>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        <MoreHorizontal className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center h-[29px] px-[6px] gap-[6px]">
                    <span className="text-[13px] text-[#202020] dark:text-[#EEEEEE]">
                      {selectedContact.email}
                    </span>
                    <Sparkles className="w-[14px] h-[14px] text-[#626262] dark:text-[#b4b4b4]" />
                  </div>
                </div>

                {/* Field: Phones */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Phones
                      </span>
                    </div>
                    <div className="flex items-center gap-[4px]">
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        <Copy className="w-[14px] h-[14px]" />
                      </button>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                        <MoreHorizontal className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center h-[29px] px-[6px] gap-[6px]">
                    <span className="text-[13px] text-[#202020] dark:text-[#EEEEEE]">
                      +1 555-0198
                    </span>
                    <Sparkles className="w-[14px] h-[14px] text-[#626262] dark:text-[#b4b4b4]" />
                  </div>
                </div>

                {/* Field: Job title */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Job title
                      </span>
                    </div>
                    <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <Copy className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                  <div className="flex items-center h-[29px] px-[6px]">
                    <span className="text-[13px] text-[#202020] dark:text-[#EEEEEE]">
                      Product Manager
                    </span>
                  </div>
                </div>

                {/* Field: Groups */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Groups
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center h-[29px] px-[6px] gap-[8px]">
                    <div className="flex items-center h-[24px] px-[8px] gap-[6px] bg-white dark:bg-[#191919] border border-[#e1e1e1] dark:border-[#353535] rounded-full">
                      <span className="text-[13px] leading-none">🔍</span>
                      <span className="text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE]">
                        Search contacts
                      </span>
                    </div>
                    <button className="flex items-center h-[24px] px-[8px] gap-[6px] border border-dashed border-[#e1e1e1] dark:border-[#3D3D3D] rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-[#626262] dark:text-[#B4B4B4]">
                      <span className="text-[13px] font-[400]">+ Add</span>
                    </button>
                  </div>
                </div>

                {/* Field: Addresses */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Addresses
                      </span>
                    </div>
                    <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <Copy className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                  <div className="flex items-center h-[29px] px-[6px] text-[13px] text-[#202020] dark:text-[#EEEEEE] underline decoration-[#00000026] dark:decoration-[#FFFFFF26] cursor-pointer hover:decoration-[#202020] dark:hover:decoration-[#EEEEEE]">
                    404 Example Street, Unknown, USA 12345
                  </div>
                </div>

                {/* Field: Urls */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Urls
                      </span>
                    </div>
                    <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <Copy className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                  <div className="flex items-center h-[29px] px-[6px] text-[13px] text-[#202020] dark:text-[#EEEEEE] underline decoration-[#00000026] dark:decoration-[#FFFFFF26] cursor-pointer hover:decoration-[#202020] dark:hover:decoration-[#EEEEEE]">
                    https://example.com/janedoe
                  </div>
                </div>

                {/* Field: Gender */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Gender
                      </span>
                    </div>
                    <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <Copy className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                  <div className="flex items-center h-[29px] px-[6px] text-[13px] text-[#202020] dark:text-[#EEEEEE]">
                    Female
                  </div>
                </div>

                {/* Field: Companies */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Companies
                      </span>
                    </div>
                    <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <X className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                  <div className="flex items-center h-[29px] px-[6px]">
                    <div className="flex items-center h-[24px] px-[8px] gap-[6px] bg-[#f2f2f2] dark:bg-[#353535] rounded-full">
                      <img
                        src={selectedContact.company.logoUrl}
                        alt={selectedContact.company.name}
                        className="w-[12px] h-[12px] rounded-[2px] object-cover shrink-0"
                      />
                      <span className="text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE]">
                        Google
                      </span>
                    </div>
                  </div>
                </div>

                {/* Field: Notes */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Notes
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center h-[29px] px-[6px] text-[13px] text-[#626262] dark:text-[#B4B4B4]">
                    Add a note
                  </div>
                </div>

                {/* Field: Created at */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Created at
                      </span>
                    </div>
                    <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <Copy className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                  <div className="flex items-center h-[29px] px-[6px] text-[13px] text-[#202020] dark:text-[#EEEEEE]">
                    24 Feb 2026, 21:56
                  </div>
                </div>

                {/* Field: Created by */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Created by
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center h-[28px] px-[6px]">
                    <div className="flex items-center h-[24px] px-[8px] bg-[#f2f2f2] dark:bg-[#353535] rounded-full">
                      <div className="w-[16px] h-[16px] rounded-full bg-[#EEEEEE] dark:bg-[#333] border-[0.666667px] border-[#d9d9d9] dark:border-[#EEEEEE] flex items-center justify-center mr-[6px] -ml-[2px] overflow-hidden">
                        <span className="text-[9px] text-[#202020] dark:text-[#EEEEEE]">
                          A
                        </span>
                      </div>
                      <span className="text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE]">
                        Adrian Stefan
                      </span>
                    </div>
                  </div>
                </div>

                {/* Field: Added to group at */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Added to group at
                      </span>
                    </div>
                    <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                      <Copy className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                  <div className="flex items-center h-[29px] px-[6px] text-[13px] text-[#202020] dark:text-[#EEEEEE]">
                    24 Feb 2026, 21:56
                  </div>
                </div>

                {/* Field: Added to group by */}
                <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] dark:hover:border-[#3D3D3D] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                  <div className="flex items-center justify-between h-[29px]">
                    <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                        Added to group by
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center h-[28px] px-[6px]">
                    <div className="flex items-center h-[24px] px-[8px] bg-[#f2f2f2] dark:bg-[#353535] rounded-full">
                      <div className="w-[16px] h-[16px] rounded-full bg-[#EEEEEE] dark:bg-[#333] border-[0.666667px] border-[#d9d9d9] dark:border-[#EEEEEE] flex items-center justify-center mr-[6px] -ml-[2px] overflow-hidden">
                        <span className="text-[9px] text-[#202020] dark:text-[#EEEEEE]">
                          A
                        </span>
                      </div>
                      <span className="text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE]">
                        Adrian Stefan
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="absolute bottom-0 left-[24px] right-[24px] grid gap-[4px] grid-cols-2 pt-[12px] pb-[12px] bg-white dark:bg-[#191919]">
              <button className="flex h-[28px] px-[10px] py-[6px] items-center justify-center text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#222222] border-[0.666667px] border-[#bbbbbb] dark:border-[#606060] rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                New field
              </button>
              <button className="flex h-[28px] px-[10px] py-[6px] items-center justify-center text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#222222] border-[0.666667px] border-[#bbbbbb] dark:border-[#606060] rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                Visible fields
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Selection Floating Panel */}
      {selectedContactIds.length > 0 && (
        <div className="fixed bottom-[24px] left-1/2 -translate-x-1/2 flex items-center gap-[8px] h-[52px] px-[16px] py-[12px] bg-white dark:bg-[#222222] border border-[#e1e1e1] dark:border-[#e1e1e1]/20 rounded-[12px] shadow-[0_1px_1px_rgba(0,0,0,0.06),0_3px_6px_rgba(0,0,0,0.1),0_9px_88px_rgba(0,0,0,0.2)] dark:shadow-[0_0_1px_rgba(0,0,0,0.08),0_3px_6px_rgba(0,0,0,0.16),0_9px_88px_rgba(0,0,0,0.56),0_0_0_1px_rgba(200,200,200,0.24)] z-50">
          <div className="flex flex-col">
            <h2 className="sr-only">Selected contacts actions</h2>
            <p className="sr-only">Perform actions on the selected contacts</p>
          </div>
          <span className="text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE]">
            {selectedContactIds.length}{" "}
            {selectedContactIds.length === 1 ? "person" : "people"}
          </span>
          <div className="flex items-center gap-[6px] ml-[8px]">
            <button className="flex items-center justify-center h-[28px] px-[10px] bg-white dark:bg-[#222222] border border-[#bbbbbb] dark:border-[#606060] text-[#202020] dark:text-[#EEEEEE] text-[13px] font-[500] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors">
              Email
            </button>
            <button className="flex items-center justify-center h-[28px] px-[10px] bg-white dark:bg-[#222222] border border-[#bbbbbb] dark:border-[#606060] text-[#202020] dark:text-[#EEEEEE] text-[13px] font-[500] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors">
              Enrich
            </button>
            <button className="flex items-center justify-center h-[28px] px-[10px] bg-white dark:bg-[#222222] border border-[#bbbbbb] dark:border-[#606060] text-[#202020] dark:text-[#EEEEEE] text-[13px] font-[500] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors">
              Add to group
            </button>
            <button className="flex items-center justify-center h-[28px] px-[10px] bg-white dark:bg-[#222222] border border-[#bbbbbb] dark:border-[#606060] text-[#202020] dark:text-[#EEEEEE] text-[13px] font-[500] rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors">
              Merge
            </button>
            <button className="flex items-center justify-center w-[28px] h-[28px] rounded-full text-[#626262] dark:text-[#B4B4B4] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Trash2 className="w-[16px] h-[16px]" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => setSelectedContactIds([])}
            className="flex items-center justify-center h-[28px] px-[10px] text-[#626262] dark:text-[#B4B4B4] text-[13px] font-[500] rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors ml-[4px]"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
