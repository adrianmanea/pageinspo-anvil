import React, { useState } from "react";
import {
  ChevronDown,
  MoreHorizontal,
  Copy,
  X,
  Plus,
  MessageSquare,
  Sparkles,
  Mail,
  Phone,
  Linkedin,
  Building2,
  StickyNote,
  List,
  ListOrdered,
} from "lucide-react";

export default function Page() {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="flex h-screen w-full bg-[#FFFFFF] antialiased text-[#202020] font-['Inter',sans-serif] text-[13px] overflow-hidden">
      {/* Notifications Sub-Sidebar */}
      <aside className="w-full md:w-[384px] flex-shrink-0 flex flex-col border-r border-[#D9D9D9] bg-[#FFFFFF]">
        {/* Header Tabs & Actions */}
        <header className="flex h-[48px] items-center justify-between border-b border-[#D9D9D9] px-[24px] pr-[16px] flex-shrink-0">
          <div className="flex items-center gap-[20px] h-full">
            <button className="relative flex items-center gap-[6px] h-full font-[500] text-[#202020] border-b-2 border-[#202020] -mb-[1px]">
              Notifications
              <span className="text-[12px] text-[#626262]">0</span>
            </button>
            <button className="relative flex items-center gap-[6px] h-full font-[500] text-[#626262] hover:text-[#202020] transition-colors">
              Upcoming
              <span className="text-[12px] text-[#626262]">0</span>
            </button>
          </div>
          <div className="flex items-center gap-[8px]">
            <button className="flex items-center gap-[4px] px-[10px] py-[6px] rounded-full border border-transparent hover:bg-black/5 text-[#626262] font-[500] transition-colors">
              All
              <ChevronDown className="h-[14px] w-[14px]" />
            </button>
            <button className="flex h-[28px] w-[28px] items-center justify-center rounded-full text-[#626262] hover:bg-black/5 transition-colors">
              <MoreHorizontal className="h-[16px] w-[16px]" />
            </button>
          </div>
        </header>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {/* Active Notification Item */}
          <div className="flex items-start gap-[12px] p-[16px_24px] bg-black/[0.055] cursor-pointer relative">
            {/* Avatar */}
            <div className="flex h-[32px] w-[32px] flex-shrink-0 items-center justify-center rounded-full border border-[#DECCFE] bg-[#F2EBFE] overflow-hidden opacity-60">
              <span className="text-[11px] font-[500] text-[#8643FF] leading-none">
                JS
              </span>
            </div>

            {/* Content & Meta */}
            <div className="flex flex-col flex-1 gap-[2px] opacity-60">
              <span className="text-[13px] font-[500] text-[#202020] leading-[18px]">
                John Doe assigned you to Jane Smith as "Prospect owner"
              </span>
              <span className="text-[13px] text-[#626262]">2 hours ago</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Detail Area - Contact Profile View */}
      <main className="hidden md:flex flex-1 flex-col overflow-hidden bg-[#FFFFFF] relative">
        {/* Detail Header */}
        <header className="flex h-[48px] items-center justify-between border-b border-[#D9D9D9] px-[24px]">
          {/* Breadcrumb / Group Badge */}
          <div className="flex items-center">
            <button className="flex items-center gap-[6px] h-[24px] px-[8px] rounded-full border border-[#E1E1E1] bg-[#FFFFFF] hover:bg-[#F5F5F5] transition-colors">
              <span className="text-[16px] leading-none">🤑</span>
              <span className="text-[13px] text-[#202020] max-w-[150px] truncate">
                Leads
              </span>
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-[8px]">
            <button className="flex items-center justify-center h-[28px] px-[10px] rounded-full border border-transparent text-[#626262] font-[500] hover:bg-black/5 transition-colors">
              Mark as unread
            </button>
            <button className="flex items-center justify-center h-[28px] px-[10px] rounded-full border border-transparent text-[#626262] font-[500] hover:bg-black/5 transition-colors">
              Delete notification
            </button>
          </div>
        </header>

        {/* Scrollable Profile Form Area */}
        <div className="flex-1 overflow-y-auto w-full">
          {/* Grid Layout conforming to capture: 408px left profile column, rest is body */}
          <div className="grid grid-cols-[1fr] xl:grid-cols-[408px_1fr] gap-0 h-full">
            {/* Left Profile Sidebar inside details pane */}
            <div className="relative flex flex-col border-r border-[#D9D9D9] overflow-hidden">
              {/* Header Area — 150px: padding 16px 24px 24px, rows 58px + 28px with 24px gap */}
              <div className="flex flex-col px-[24px] pt-[16px] pb-[24px] gap-[24px] shrink-0 bg-white">
                <div className="flex items-center h-[56px]">
                  <button className="relative flex h-[56px] w-[56px] flex-shrink-0 items-center justify-center rounded-full border border-[#DECCFE] bg-[#F2EBFE] overflow-hidden group/avatar">
                    <span className="text-[20px] font-[500] text-[#8643FF] leading-none tracking-tight">
                      JS
                    </span>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/avatar:opacity-100 transition-opacity" />
                  </button>
                  <div className="flex flex-col ml-[16px] flex-1 justify-center">
                    <div className="flex items-center h-[30px] gap-[4px]">
                      <h2 className="text-[20px] font-[500] text-[#202020] leading-[30px] tracking-[-0.38px]">
                        Jane Smith
                      </h2>
                      <button className="flex items-center justify-center w-[28px] h-[28px] rounded-full text-[#626262] hover:bg-black/5 transition-colors">
                        <Copy className="w-[16px] h-[16px]" />
                      </button>
                    </div>
                    <div className="flex items-center h-[24px] px-[2px]">
                      <div className="flex items-center justify-center w-[16px] h-[16px] mr-[6px] -ml-[2px] shrink-0">
                        <Building2 className="w-[12px] h-[12px] text-[#626262]" />
                      </div>
                      <span className="text-[13px] font-[400] text-[#202020] underline decoration-[#00000026] cursor-pointer hover:decoration-[#202020]">
                        Acme Corp
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons Row */}
                <div className="flex items-center gap-[8px] h-[28px]">
                  <button className="flex items-center justify-center h-[28px] px-[10px] bg-white border border-[#bbbbbb] text-[#202020] text-[13px] font-[500] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] hover:bg-[#F5F5F5] transition-colors">
                    <Sparkles className="w-[16px] h-[16px] mr-[6px] -ml-[2px] text-[#626262]" />
                    Enrich
                  </button>
                  <button className="flex items-center justify-center h-[28px] px-[10px] bg-white border border-[#bbbbbb] text-[#202020] text-[13px] font-[500] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] hover:bg-[#F5F5F5] transition-colors">
                    <Mail className="w-[16px] h-[16px] mr-[6px] -ml-[2px] text-[#626262]" />
                    Email
                  </button>
                  <button className="flex items-center justify-center w-[28px] h-[28px] bg-white border border-[#bbbbbb] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] hover:bg-[#F5F5F5] transition-colors">
                    <Linkedin className="w-[14px] h-[14px] text-[#626262]" />
                  </button>
                  <button className="flex items-center justify-center w-[28px] h-[28px] bg-white border border-[#bbbbbb] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] hover:bg-[#F5F5F5] transition-colors">
                    <Phone className="w-[14px] h-[14px] text-[#626262]" />
                  </button>
                </div>
              </div>

              {/* Responsive Tabs — visible on tablet, hidden on xl desktop */}
              <div className="flex xl:hidden h-[48px] items-end border-b border-[#D9D9D9] px-[24px] gap-[20px] flex-shrink-0 bg-white">
                {[
                  { id: "details", label: "Details" },
                  { id: "interactions", label: "Interactions", count: 0 },
                  { id: "notes", label: "Notes", count: 0 },
                  { id: "reminders", label: "Reminders", count: 0 },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex h-[48px] items-center gap-[6px] font-[500] transition-colors ${
                      activeTab === tab.id
                        ? "border-b-2 border-[#202020] text-[#202020]"
                        : "border-b-2 border-transparent text-[#626262] hover:text-[#202020]"
                    }`}
                  >
                    {tab.label}
                    {tab.count !== undefined && (
                      <span className="text-[12px] text-[#626262] leading-none mb-[1px]">
                        {tab.count}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Content Body — always visible on xl, only when 'details' tab on smaller */}
              <div
                className={`flex-1 overflow-y-auto w-full bg-white ${
                  activeTab === "details" ? "" : "hidden xl:block"
                }`}
              >
                <div className="flex flex-col px-[24px] pt-[20px] pb-[128px] w-full gap-[8px]">
                  {/* Field: Status */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Status
                        </span>
                        <ChevronDown className="w-[12px] h-[12px] text-[#202020] opacity-0 group-hover/field:opacity-100" />
                      </div>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px]">
                      <div className="flex items-center h-[20px] px-[8px] bg-[#F2EBFE] border border-[#DECCFE] rounded-full">
                        <div className="w-[6px] h-[6px] rounded-full bg-[#B185FF] mr-[6px]"></div>
                        <span className="text-[13px] font-[500] text-[#8643FF]">
                          Lead
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Field: Channel */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Channel
                        </span>
                      </div>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                        <X className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px]">
                      <div className="flex items-center h-[20px] px-[8px] bg-[#E5FDF0] border border-[#B1F1CB] rounded-full">
                        <span className="text-[13px] font-[500] text-[#12C86C]">
                          Outbound
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Field: Prospect owner */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Prospect owner
                        </span>
                      </div>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                        <X className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                    <div className="flex items-center h-[28px] px-[6px]">
                      <div className="flex items-center h-[24px] px-[8px] bg-[#f2f2f2] rounded-full">
                        <div className="w-[16px] h-[16px] rounded-full bg-[#EEEEEE] border-[0.666667px] border-[#d9d9d9] flex items-center justify-center mr-[6px] -ml-[2px] overflow-hidden">
                          <span className="text-[9px] text-[#202020]">J</span>
                        </div>
                        <span className="text-[13px] font-[400] text-[#202020]">
                          John Doe
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Field: Deal value */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Deal value
                        </span>
                      </div>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                        <Copy className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px]">
                      <span className="text-[13px] text-[#202020]">
                        $8,000.00
                      </span>
                    </div>
                  </div>

                  {/* Field: Company size */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Company size
                        </span>
                      </div>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                        <X className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px]">
                      <div className="flex items-center h-[20px] px-[8px] bg-[#FFF8CC] border border-[#F6EEB4] rounded-full">
                        <span className="text-[13px] font-[500] text-[#DCA200]">
                          Small
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Field: Next steps */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Next steps
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px]">
                      <span className="text-[13px] text-[#626262]">
                        Add text
                      </span>
                    </div>
                  </div>

                  {/* Field: Company vertical */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Company vertical
                        </span>
                      </div>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                        <X className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px]">
                      <div className="flex items-center h-[20px] px-[8px] bg-[#F2EBFE] border border-[#DECCFE] rounded-full">
                        <span className="text-[13px] font-[500] text-[#8643FF]">
                          Entertainment
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Field: Closed date */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Closed date
                        </span>
                      </div>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                        <Copy className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px]">
                      <span className="text-[13px] text-[#202020]">
                        18/12/2024
                      </span>
                    </div>
                  </div>

                  {/* Field: Lost reason */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Lost reason
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px]">
                      <span className="text-[13px] text-[#626262]">
                        Select an option
                      </span>
                    </div>
                  </div>

                  {/* Field: Emails */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Emails
                        </span>
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                          <Copy className="w-[14px] h-[14px]" />
                        </button>
                        <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                          <MoreHorizontal className="w-[14px] h-[14px]" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px] gap-[6px]">
                      <span className="text-[13px] text-[#202020]">
                        jane@acme.com
                      </span>
                      <Sparkles className="w-[14px] h-[14px] text-[#626262]" />
                    </div>
                  </div>

                  {/* Field: Phones */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Phones
                        </span>
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                          <Copy className="w-[14px] h-[14px]" />
                        </button>
                        <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                          <MoreHorizontal className="w-[14px] h-[14px]" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px] gap-[6px]">
                      <span className="text-[13px] text-[#202020]">
                        +15682482408
                      </span>
                      <Sparkles className="w-[14px] h-[14px] text-[#626262]" />
                    </div>
                  </div>

                  {/* Field: Job title */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Job title
                        </span>
                      </div>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                        <Copy className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px]">
                      <span className="text-[13px] text-[#202020]">
                        Sales Rep
                      </span>
                    </div>
                  </div>

                  {/* Field: Groups */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Groups
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px] gap-[8px]">
                      <div className="flex items-center h-[24px] px-[8px] gap-[6px] bg-white border border-[#e1e1e1] rounded-full">
                        <span className="text-[13px] leading-none">🤑</span>
                        <span className="text-[13px] font-[400] text-[#202020]">
                          Leads
                        </span>
                      </div>
                      <button className="flex items-center h-[24px] px-[8px] gap-[6px] border border-dashed border-[#e1e1e1] rounded-full hover:bg-black/5 transition-colors text-[#626262]">
                        <span className="text-[13px] font-[400]">+ Add</span>
                      </button>
                    </div>
                  </div>

                  {/* Field: My total interactions */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          My total interactions
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px]">
                      <span className="text-[13px] text-[#626262]">
                        0 interaction
                      </span>
                    </div>
                  </div>

                  {/* Field: My last interaction */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          My last interaction
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px]">
                      <span className="text-[13px] text-[#626262]">
                        No interaction
                      </span>
                    </div>
                  </div>

                  {/* Field: Team last interaction */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Team last interaction
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px]">
                      <span className="text-[13px] text-[#626262]">
                        No interaction
                      </span>
                    </div>
                  </div>

                  {/* Field: Addresses */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Addresses
                        </span>
                      </div>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                        <Copy className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px] text-[13px] text-[#202020] underline decoration-[#00000026] cursor-pointer hover:decoration-[#202020]">
                      2521 Sanford Knoll, North Kaia, Washington 20850
                    </div>
                  </div>

                  {/* Field: Urls */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Urls
                        </span>
                      </div>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                        <Copy className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px] text-[13px] text-[#202020] underline decoration-[#00000026] cursor-pointer hover:decoration-[#202020]">
                      https://www.sequoia.com
                    </div>
                  </div>

                  {/* Field: Gender */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Gender
                        </span>
                      </div>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                        <Copy className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px] text-[13px] text-[#202020]">
                      Female
                    </div>
                  </div>

                  {/* Field: Companies */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Companies
                        </span>
                      </div>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                        <X className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px]">
                      <div className="flex items-center h-[24px] px-[8px] gap-[6px] bg-[#f2f2f2] rounded-full">
                        <Building2 className="w-[12px] h-[12px] text-[#626262] shrink-0" />
                        <span className="text-[13px] font-[400] text-[#202020]">
                          Acme Corp
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Field: Strongest connection */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Strongest connection
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px]">
                      <span className="text-[13px] text-[#626262]">
                        No connection
                      </span>
                    </div>
                  </div>

                  {/* Field: Birthday */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Birthday
                        </span>
                      </div>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                        <Copy className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px] text-[13px] text-[#202020]">
                      05/04/1958
                    </div>
                  </div>

                  {/* Field: Notes */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Notes
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px] text-[13px] text-[#626262]">
                      Add a note
                    </div>
                  </div>

                  {/* Field: Created at */}
                  <div className="flex flex-col min-h-[58px] py-[4px] group/field border border-transparent hover:border-[#d9d9d9] rounded-[8px] px-[8px] -mx-[8px] transition-colors">
                    <div className="flex items-center justify-between h-[29px]">
                      <div className="flex items-center gap-[4px] px-[6px] rounded-full hover:bg-black/5 cursor-pointer">
                        <span className="text-[12px] font-[500] text-[#626262]">
                          Created at
                        </span>
                      </div>
                      <button className="hidden group-hover/field:flex items-center justify-center w-[24px] h-[24px] rounded-full text-[#b4b4b4] hover:bg-black/5 transition-colors">
                        <Copy className="w-[14px] h-[14px]" />
                      </button>
                    </div>
                    <div className="flex items-center h-[29px] px-[6px] text-[13px] text-[#202020]">
                      24 Feb 2026, 21:56
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Buttons — always visible on xl, only when 'details' tab on smaller */}
              <div
                className={`absolute bottom-0 left-0 right-0 grid gap-[4px] grid-cols-2 pt-[12px] pb-[12px] px-[24px] bg-white ${
                  activeTab === "details" ? "" : "hidden xl:grid"
                }`}
              >
                <button className="flex h-[28px] px-[10px] py-[6px] items-center justify-center text-[13px] font-[500] text-[#202020] bg-white border-[0.666667px] border-[#bbbbbb] rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] hover:bg-black/5 transition-colors">
                  New field
                </button>
                <button className="flex h-[28px] px-[10px] py-[6px] items-center justify-center text-[13px] font-[500] text-[#202020] bg-white border-[0.666667px] border-[#bbbbbb] rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] hover:bg-black/5 transition-colors">
                  Visible fields
                </button>
              </div>

              {/* Responsive Notes Content — visible when 'notes' tab active on smaller screens */}
              <div
                className={`flex-1 flex flex-col relative overflow-hidden bg-white xl:hidden ${
                  activeTab === "notes" ? "" : "hidden"
                }`}
              >
                <div className="flex-1 overflow-y-auto w-full pt-[20px] pb-[160px] px-[24px]">
                  <div className="flex flex-col items-center justify-center h-[248px] mt-[40px] gap-[8px]">
                    <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-50 rounded-lg">
                      <StickyNote
                        className="w-[24px] h-[24px] text-amber-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-[20px] font-[500] text-[#202020] tracking-[-0.38px] font-['Uxum_Grotesque',sans-serif]">
                      Add a note
                    </h3>
                    <p className="text-[13px] text-[#626262]">
                      Track here any relevant information about your contact
                    </p>
                  </div>
                </div>
                {/* Note editor */}
                <div className="absolute bottom-[24px] left-[24px] right-[24px]">
                  <div className="bg-white border border-[#D9D9D9] rounded shadow-[0_1px_1px_rgba(0,0,0,0.06)] p-[16px] flex flex-col gap-[16px]">
                    <textarea
                      placeholder="Add a note"
                      className="w-full text-[13px] text-[#202020] bg-transparent outline-none resize-none placeholder:text-[#989898]"
                      rows={1}
                    />
                    <div className="flex items-center justify-between pt-[12px] flex-wrap gap-[12px]">
                      <div className="flex items-center gap-[2px]">
                        <button className="w-[28px] h-[28px] rounded flex items-center justify-center text-[#626262] hover:bg-black/5 transition-colors">
                          <span className="font-[600] text-[14px]">B</span>
                        </button>
                        <button className="w-[28px] h-[28px] rounded flex items-center justify-center text-[#626262] hover:bg-black/5 transition-colors italic">
                          <span className="font-[500] text-[14px]">I</span>
                        </button>
                        <button className="w-[28px] h-[28px] rounded flex items-center justify-center text-[#626262] hover:bg-black/5 transition-colors underline">
                          <span className="font-[500] text-[14px]">U</span>
                        </button>
                      </div>
                      <div className="flex items-center gap-[12px]">
                        <label className="flex items-center gap-[8px] cursor-pointer group">
                          <span className="text-[13px] text-[#626262] group-hover:text-[#202020] transition-colors">
                            Make private
                          </span>
                          <div className="relative w-[28px] h-[16px] rounded-full bg-[#BBBBBB] border border-transparent flex items-center p-[1px] transition-colors shadow-[0_0_0_1px_#BBBBBB_inset]">
                            <div className="w-[14px] h-[14px] rounded-full bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06)]" />
                          </div>
                        </label>
                        <button className="h-[28px] px-[10px] rounded-full border border-[#BBBBBB] bg-white text-[#202020] text-[13px] font-[500] opacity-30 shadow-[0_1px_1px_rgba(0,0,0,0.06)]">
                          Add note
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Responsive Interactions Content — visible when 'interactions' tab active */}
              <div
                className={`flex-1 flex flex-col items-center justify-center bg-white xl:hidden ${
                  activeTab === "interactions" ? "" : "hidden"
                }`}
              >
                <p className="text-[13px] text-[#626262]">
                  No interactions yet
                </p>
              </div>

              {/* Responsive Reminders Content — visible when 'reminders' tab active */}
              <div
                className={`flex-1 flex flex-col items-center justify-center bg-white xl:hidden ${
                  activeTab === "reminders" ? "" : "hidden"
                }`}
              >
                <p className="text-[13px] text-[#626262]">No reminders yet</p>
              </div>
            </div>

            {/* Right Body Column (Interactions/Activity) — hidden on tablet */}
            <div className="hidden xl:flex flex-col bg-[#F9FAFB] flex-1 min-w-0">
              {/* Header Tabs */}
              <header className="flex h-[48px] items-center border-b border-[#D9D9D9] px-[24px] gap-[20px] flex-shrink-0 bg-white">
                <button className="flex h-[48px] items-center gap-[6px] px-[4px] border-b-2 border-transparent text-[#626262] font-[500] transition-colors hover:text-[#202020]">
                  Team interactions
                  <span className="text-[12px] leading-none mb-[1px]">0</span>
                </button>
                <button className="flex h-[48px] items-center gap-[6px] px-[4px] border-b-2 border-[#202020] text-[#202020] font-[500] transition-colors">
                  Notes
                  <span className="text-[12px] text-[#626262] leading-none mb-[1px]">
                    0
                  </span>
                </button>
                <button className="flex h-[48px] items-center gap-[6px] px-[4px] border-b-2 border-transparent text-[#626262] font-[500] transition-colors hover:text-[#202020]">
                  Reminders
                  <span className="text-[12px] leading-none mb-[1px]">0</span>
                </button>
              </header>

              {/* Notes Body Workspace */}
              <div className="flex-1 flex flex-col relative overflow-hidden bg-white px-[24px]">
                {/* Scrollable Area for Notes (currently empty) */}
                <div className="flex-1 overflow-y-auto w-full pt-[20px] pb-[160px]">
                  <div className="flex flex-col items-center justify-center h-[248px] mt-[40px] gap-[8px]">
                    <div className="w-[48px] h-[48px] flex items-center justify-center bg-gray-50 rounded-lg">
                      <StickyNote
                        className="w-[24px] h-[24px] text-amber-500"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-[20px] font-[500] text-[#202020] tracking-[-0.38px] font-['Uxum_Grotesque',sans-serif]">
                      Add a note
                    </h3>
                    <p className="text-[13px] text-[#626262]">
                      Track here any relevant information about your contact
                    </p>
                  </div>
                </div>

                {/* fixed bottom entry form */}
                <div className="absolute bottom-[24px] left-0 right-0 mx-auto w-[calc(100%-48px)] max-w-[780px]">
                  <div className="bg-white border border-[#D9D9D9] rounded shadow-[0_1px_1px_rgba(0,0,0,0.06)] p-[16px] flex flex-col gap-[16px]">
                    <textarea
                      placeholder="Add a note"
                      className="w-full text-[13px] text-[#202020] bg-transparent outline-none resize-none placeholder:text-[#989898]"
                      rows={1}
                    />
                    <div className="flex items-center justify-between pt-[12px] flex-wrap gap-[12px]">
                      {/* Editor Tool buttons */}
                      <div className="flex items-center gap-[2px]">
                        <button className="w-[28px] h-[28px] rounded flex items-center justify-center text-[#626262] hover:bg-black/5 transition-colors">
                          <span className="font-[600] text-[14px]">B</span>
                        </button>
                        <button className="w-[28px] h-[28px] rounded flex items-center justify-center text-[#626262] hover:bg-black/5 transition-colors italic">
                          <span className="font-[500] text-[14px]">I</span>
                        </button>
                        <button className="w-[28px] h-[28px] rounded flex items-center justify-center text-[#626262] hover:bg-black/5 transition-colors underline">
                          <span className="font-[500] text-[14px]">U</span>
                        </button>
                        <button className="w-[28px] h-[28px] rounded flex items-center justify-center text-[#626262] hover:bg-black/5 transition-colors">
                          <List className="w-[16px] h-[16px]" strokeWidth={2} />
                        </button>
                        <button className="w-[28px] h-[28px] rounded flex items-center justify-center text-[#626262] hover:bg-black/5 transition-colors">
                          <ListOrdered
                            className="w-[16px] h-[16px]"
                            strokeWidth={2}
                          />
                        </button>
                      </div>
                      <div className="flex items-center gap-[12px]">
                        <label className="flex items-center gap-[8px] cursor-pointer group">
                          <span className="text-[13px] text-[#626262] group-hover:text-[#202020] transition-colors">
                            Make private
                          </span>
                          <div className="relative w-[28px] h-[16px] rounded-full bg-[#BBBBBB] border border-transparent flex items-center p-[1px] transition-colors shadow-[0_0_0_1px_#BBBBBB_inset]">
                            <div className="w-[14px] h-[14px] rounded-full bg-white shadow-[0_1px_1px_rgba(0,0,0,0.06)]" />
                          </div>
                        </label>
                        <button className="h-[28px] px-[10px] rounded-full border border-[#BBBBBB] bg-white text-[#202020] text-[13px] font-[500] opacity-30 shadow-[0_1px_1px_rgba(0,0,0,0.06)]">
                          Add note
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
