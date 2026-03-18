import React, { useState } from "react";
import {
  PanelLeft,
  MessageSquare,
  Sparkles,
  Search,
  Video,
  MoreHorizontal,
  Plus,
  Folder,
  MoreVertical,
  ArrowRight,
  Settings,
  ChevronDown,
  UserPlus,
  ArrowUp,
  BarChart2,
  Globe,
  Blocks,
  HelpCircle,
  Menu,
} from "lucide-react";

import MeetingsPanel from "./MeetingsPanel";
import MorePopover from "./MorePopover";
import SettingsPopover from "./SettingsPopover";

export default function Page({ children }) {
  const [isMeetingsOpen, setIsMeetingsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-[100vh] bg-[#FFFFFF] text-[#0a1217] font-sans">
      {/* ===== MOBILE HEADER ===== */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-[60px] bg-[#FFFFFF] border-b border-[rgba(10,18,23,0.1)] z-[30] flex items-center px-[16px] justify-between transition-all duration-300">
        <div className="flex items-center gap-[8px]">
          <div className="flex items-center justify-center w-[24px] h-[24px] bg-[#0a1217] rounded-[6px] text-[#FFFFFF] font-bold text-[12px]">
            A
          </div>
          <span className="text-[14px] font-[500] leading-[21px] text-[#0a1217]">Acme LLC</span>
        </div>
        <button
          type="button"
          onClick={() => setIsMobileNavOpen(true)}
          className="flex items-center justify-center w-[36px] h-[36px] rounded-full text-[rgba(10,18,23,0.8)] hover:bg-[rgba(10,18,23,0.05)] transition-colors"
        >
          <Menu size={20} />
        </button>
      </header>

      {/* ===== MOBILE OVERLAY ===== */}
      <div
        className={`md:hidden fixed inset-0 bg-[#0a1217]/20 z-[35] transition-opacity duration-300 ${
          isMobileNavOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileNavOpen(false)}
      />

      {/* ===== FIXED HEADER ===== */}
      <div className="hidden md:block fixed top-0 left-0 right-[0px] pl-[268px] z-[4] pointer-events-none transition-all duration-300">
        <div className="px-[80px] pointer-events-none">
          <nav className="flex items-start justify-between pl-[20px] pt-[12px] pointer-events-none transition-all duration-300 gap-[8px]">
            {/* Left Nav */}
            <div className="relative z-[1] flex items-center">
              <div className="flex gap-[4px]">
                <button
                  type="button"
                  className="flex items-center justify-center gap-[6px] h-[36px] px-[16px] bg-[#FFFFFF] border-[0.67px] border-transparent rounded-full text-[16px] font-[500] whitespace-nowrap leading-[20px] pointer-events-auto hover:bg-[#FFFFFF] active:bg-[rgba(10,18,23,0.04)] hover:bg-[url(linear-gradient(rgba(10,18,23,0.04),rgba(10,18,23,0.04)))] transition-all"
                >
                  All
                  <ChevronDown className="w-[16px] h-[16px] text-[rgba(10,18,23,0.6)]" />
                </button>
              </div>
            </div>
            {/* Right Nav */}
            <div className="relative z-[1] flex items-center">
              <div className="flex gap-[8px]">
                <button
                  type="button"
                  className="flex items-center justify-center gap-[6px] h-[36px] pl-[12px] pr-[16px] bg-[rgba(10,18,23,0.06)] border-[0.67px] border-transparent rounded-full text-[14px] font-[500] whitespace-nowrap pointer-events-auto hover:bg-[rgba(10,18,23,0.08)] transition-all"
                >
                  <span className="text-[rgba(10,18,23,0.4)]">
                    <UserPlus className="w-[16px] h-[16px]" />
                  </span>
                  Invite
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center gap-[6px] h-[36px] px-[16px] bg-transparent border-[0.67px] border-[rgba(10,18,23,0.1)] rounded-full text-[14px] font-[500] whitespace-nowrap pointer-events-auto hover:bg-[rgba(10,18,23,0.05)] transition-all"
                >
                  Help
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* ===== FIXED SIDEBAR ===== */}
      <div className={`fixed top-[0px] bottom-[0px] w-[268px] z-[40] md:z-[12] transition-transform duration-300 ease-[cubic-bezier(0.25,0.5,0.25,1)] md:translate-x-0 ${isMobileNavOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <nav className="fixed top-[0px] bottom-[0px] w-[268px] z-[40] md:z-[12]">
          <div className="flex flex-col h-[100vh] w-full bg-[#F9F9F9] transition-all duration-300">
            <div
              className={`flex flex-col h-[100vh] w-full bg-[#F9F9F9] border-r transition-colors duration-300 z-[12] ${isMeetingsOpen ? "border-r-[rgba(10,18,23,0.1)]" : "border-r-transparent"}`}
            >
              {/* Header */}
              <div className="flex flex-col flex-none gap-[8px] pt-[12px] pb-[12px] ml-[16px] mr-[12px] relative">
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="flex items-center flex-1 min-w-0 pr-2 h-[36px] pl-[10px] rounded-[6px] overflow-hidden whitespace-nowrap hover:bg-[rgba(10,18,23,0.05)] transition-all"
                  >
                    <div className="flex items-center justify-start gap-[8px] h-[20px] w-full text-[14px] font-[500] leading-[14px]">
                      <p className="overflow-hidden text-ellipsis leading-[19.6px]">
                        Acme LLC
                      </p>
                    </div>
                  </a>
                  <button
                    type="button"
                    aria-label="Close sidebar"
                    className="flex items-center justify-center flex-none w-[36px] h-[36px] mr-[4px] rounded-full text-[rgba(10,18,23,0.6)] hover:bg-[rgba(10,18,23,0.05)] hover:text-[#0a1217] transition-all"
                  >
                    <PanelLeft className="w-[16px] h-[16px]" />
                  </button>
                </div>
              </div>

              {/* Static Nav Area (Top Group) */}
              <div className="flex flex-col flex-none pl-[12px] pr-[16px] relative z-[20]">
                <a
                  href="#outlet"
                  className="absolute top-[6px] right-[16px] flex items-center px-[8px] py-[4px] bg-[#FFFFFF] rounded-[8px] text-[rgba(0,0,0,0.4)] text-[12px] leading-[12px] z-[30] opacity-0 pointer-events-none transition-opacity"
                >
                  Skip to content
                </a>

                {/* Top Group */}
                <ul className="flex flex-col gap-[2px] mb-[12px] w-full relative z-[20]">
                  <li className="w-full relative group">
                    <a
                      href="#"
                      className="flex items-center gap-[8px] w-full h-[36px] px-[14px] bg-[rgba(10,18,23,0.05)] rounded-full text-[14px] font-[500] leading-[21px] relative transition-all"
                    >
                      <MessageSquare size={16} />
                      New chat
                    </a>
                    <div className="absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-[30]">
                      <div className="bg-[#0a1217] rounded-[100px] text-[#FFFFFF] text-[12px] font-[500] leading-[15.6px] px-[14px] py-[8px] whitespace-nowrap shadow-sm">
                        <span className="flex items-center gap-[6px]">
                          New chat
                          <span className="flex items-center gap-[2px]">
                            <span className="flex flex-none items-center justify-center min-w-[16px] h-[16px] px-[3px] bg-[rgba(255,255,255,0.2)] rounded-[4px] leading-[12px]">
                              Ctrl
                            </span>
                            <span className="flex flex-none items-center justify-center min-w-[16px] h-[16px] px-[3px] bg-[rgba(255,255,255,0.2)] rounded-[4px] leading-[12px]">
                              I
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="w-full relative group">
                    <a
                      href="#"
                      className="flex items-center gap-[8px] w-full h-[36px] px-[14px] rounded-full text-[rgba(10,18,23,0.8)] text-[14px] font-[500] leading-[21px] hover:bg-[rgba(10,18,23,0.05)] hover:text-[#0a1217] relative transition-all"
                    >
                      <Sparkles size={16} />
                      Workflows
                    </a>
                    <div className="absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-[30]">
                      <div className="bg-[#0a1217] rounded-[100px] text-[#FFFFFF] text-[12px] font-[500] leading-[15.6px] px-[14px] py-[8px] whitespace-nowrap shadow-sm">
                        <span className="flex items-center gap-[6px]">
                          Browse workflows
                          <span className="flex items-center gap-[2px]">
                            <span className="flex flex-none items-center justify-center min-w-[16px] h-[16px] px-[3px] bg-[rgba(255,255,255,0.2)] rounded-[4px] leading-[12px]">
                              Ctrl
                            </span>
                            <span className="flex flex-none items-center justify-center min-w-[16px] h-[16px] px-[3px] bg-[rgba(255,255,255,0.2)] rounded-[4px] leading-[12px]">
                              ⇧
                            </span>
                            <span className="flex flex-none items-center justify-center min-w-[16px] h-[16px] px-[3px] bg-[rgba(255,255,255,0.2)] rounded-[4px] leading-[12px]">
                              P
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="w-full relative group">
                    <a
                      href="#"
                      className="flex items-center gap-[8px] w-full h-[36px] px-[14px] rounded-full text-[rgba(10,18,23,0.8)] text-[14px] font-[500] leading-[21px] hover:bg-[rgba(10,18,23,0.05)] hover:text-[#0a1217] relative transition-all"
                    >
                      <Search size={16} />
                      Search
                    </a>
                    <div className="absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-[30]">
                      <div className="bg-[#0a1217] rounded-[100px] text-[#FFFFFF] text-[12px] font-[500] leading-[15.6px] px-[14px] py-[8px] whitespace-nowrap shadow-sm">
                        <span className="flex items-center gap-[6px]">
                          Search
                          <span className="flex items-center gap-[2px]">
                            <span className="flex flex-none items-center justify-center min-w-[16px] h-[16px] px-[3px] bg-[rgba(255,255,255,0.2)] rounded-[4px] leading-[12px]">
                              Ctrl
                            </span>
                            <span className="flex flex-none items-center justify-center min-w-[16px] h-[16px] px-[3px] bg-[rgba(255,255,255,0.2)] rounded-[4px] leading-[12px]">
                              K
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="w-full relative group">
                    <button
                      type="button"
                      onClick={() => setIsMeetingsOpen((prev) => !prev)}
                      className="flex items-center gap-[8px] w-full h-[36px] px-[14px] rounded-full text-[rgba(10,18,23,0.8)] text-[14px] font-[500] leading-[21px] hover:bg-[rgba(10,18,23,0.05)] hover:text-[#0a1217] relative transition-all cursor-pointer"
                    >
                      <Video size={16} />
                      Meetings
                    </button>
                    <div className="absolute left-[calc(100%+8px)] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-[30]">
                      <div className="bg-[#0a1217] rounded-[100px] text-[#FFFFFF] text-[12px] font-[500] leading-[15.6px] px-[14px] py-[8px] whitespace-nowrap shadow-sm">
                        <span className="flex items-center gap-[6px]">
                          Meetings
                          <span className="flex items-center gap-[2px]">
                            <span className="flex flex-none items-center justify-center min-w-[16px] h-[16px] px-[3px] bg-[rgba(255,255,255,0.2)] rounded-[4px] leading-[12px]">
                              Ctrl
                            </span>
                            <span className="flex flex-none items-center justify-center min-w-[16px] h-[16px] px-[3px] bg-[rgba(255,255,255,0.2)] rounded-[4px] leading-[12px]">
                              M
                            </span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className="w-full relative group">
                    <button
                      type="button"
                      data-popover-trigger="more"
                      onClick={() => setIsMoreOpen(prev => !prev)}
                      className="flex items-center justify-between gap-[8px] w-full h-[36px] px-[14px] rounded-full text-[rgba(10,18,23,0.8)] text-[14px] font-[500] leading-[21px] hover:bg-[rgba(10,18,23,0.05)] hover:text-[#0a1217] relative transition-all"
                    >
                      <div className="flex items-center gap-[8px]">
                        <div className="mx-[2px]">
                          <MoreHorizontal className="w-[16px] h-[16px]" />
                        </div>
                        More
                      </div>
                    </button>
                    <MorePopover isOpen={isMoreOpen} onClose={() => setIsMoreOpen(false)} />
                  </li>
                </ul>
              </div>

              {/* Scrollable Nav Area */}
              <div className="flex flex-col flex-auto overflow-auto relative z-[10]">
                <div className="flex-1 relative">
                  <div className="flex flex-col flex-1 pl-[12px] pr-[16px] pb-[12px]">
                    <ul className="flex flex-col gap-[2px] w-full">
                      {/* Folders */}
                      <li>
                        <h6 className="flex items-center justify-between mt-[32px] mb-[-2px] ml-[12px] text-[13px] font-[500] leading-[18.2px] relative">
                          <a href="#" className="block cursor-pointer">
                            Folders
                          </a>
                          <span className="flex opacity-0 transition-opacity pointer-events-none">
                            <button className="flex items-center justify-center flex-none w-[28px] h-[28px] mr-[8px] rounded-[8px] text-[rgba(10,18,23,0.8)] pointer-events-none transition-all">
                              <Plus className="w-[14px] h-[14px]" />
                            </button>
                          </span>
                        </h6>
                        <ul className="flex flex-col gap-[2px] mt-[2px] w-full">
                          <li className="w-full">
                            <div className="w-full">
                              <a
                                href="#"
                                className="group flex items-center gap-[8px] w-full h-[36px] px-[14px] rounded-full text-[rgba(10,18,23,0.8)] text-[14px] leading-[21px] hover:bg-[rgba(10,18,23,0.05)] hover:text-[#0a1217] relative transition-all"
                              >
                                <div className="flex items-center flex-1 min-w-0">
                                  <div className="flex-none">
                                    <Folder className="w-[18px] h-[18px]" />
                                  </div>
                                  <span
                                    className="block ml-[8px] overflow-hidden text-ellipsis whitespace-nowrap"
                                    title="Demo folder"
                                  >
                                    Demo folder
                                  </span>
                                </div>
                                <span className="block relative h-full">
                                  <button
                                    type="button"
                                    className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center justify-center flex-none w-[28px] h-[28px] rounded-[8px] text-[rgba(10,18,23,0.6)] opacity-0 group-hover:opacity-100 hover:bg-[rgba(10,18,23,0.05)] transition-all"
                                  >
                                    <MoreVertical className="w-[16px] h-[16px]" />
                                  </button>
                                </span>
                              </a>
                            </div>
                          </li>
                          <li className="w-full">
                            <button
                              type="button"
                              className="flex items-center gap-[8px] w-full h-[36px] px-[14px] rounded-full text-[rgba(10,18,23,0.8)] text-[14px] font-[600] leading-[19.6px] hover:bg-[rgba(10,18,23,0.05)] hover:text-[#0a1217] relative transition-all"
                            >
                              <div className="ml-[1px] mr-[3px]">
                                <MoreHorizontal className="w-[16px] h-[16px]" />
                              </div>
                              View all
                            </button>
                          </li>
                        </ul>
                      </li>

                      {/* Monday */}
                      <li className="mt-[32px]">
                        <ul>
                          <li>
                            <div className="flex items-center justify-between">
                              <h6 className="mb-[6px] ml-[12px] text-[13px] font-[500] leading-[18.2px]">
                                Monday
                              </h6>
                            </div>
                            <ul className="flex flex-col gap-[2px] ml-[-2px] w-full">
                              <li className="w-full">
                                <div className="w-full">
                                  <a
                                    href="#"
                                    className="group flex items-center justify-between gap-[0px] w-full h-[36px] px-[14px] rounded-full text-[rgba(10,18,23,0.8)] text-[14px] font-[500] leading-[21px] hover:bg-[rgba(10,18,23,0.05)] hover:text-[#0a1217] relative transition-all"
                                  >
                                    <div className="flex-1 min-w-0 pr-2">
                                      <div className="overflow-hidden">
                                        <div className="flex items-center transition-opacity">
                                          <span className="block overflow-hidden text-ellipsis whitespace-nowrap leading-[19.6px]">
                                            Email follow-ups yesterday
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <button
                                        type="button"
                                        className="flex items-center justify-center flex-none w-[28px] h-[28px] rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity"
                                      >
                                        <MoreVertical className="w-[16px] h-[16px]" />
                                      </button>
                                    </div>
                                  </a>
                                </div>
                              </li>
                              <li className="w-full">
                                <div className="w-full">
                                  <a
                                    href="#"
                                    className="group flex items-center justify-between gap-[0px] w-full h-[36px] px-[14px] rounded-full text-[rgba(10,18,23,0.8)] text-[14px] font-[500] leading-[21px] hover:bg-[rgba(10,18,23,0.05)] hover:text-[#0a1217] relative transition-all"
                                  >
                                    <div className="flex-1 min-w-0 pr-2">
                                      <div className="overflow-hidden">
                                        <div className="flex items-center transition-opacity">
                                          <span className="block overflow-hidden text-ellipsis whitespace-nowrap leading-[19.6px]">
                                            Novo Nordisk Finance Analysis
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <button
                                        type="button"
                                        className="flex items-center justify-center flex-none w-[28px] h-[28px] rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity"
                                      >
                                        <MoreVertical className="w-[16px] h-[16px]" />
                                      </button>
                                    </div>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>

                          {/* Sunday */}
                          <li className="mt-[32px]">
                            <div className="flex items-center justify-between">
                              <h6 className="mb-[6px] ml-[12px] text-[13px] font-[500] leading-[18.2px]">
                                Sunday
                              </h6>
                            </div>
                            <ul className="flex flex-col gap-[2px] ml-[-2px] w-full">
                              <li className="w-full">
                                <div className="w-full">
                                  <a
                                    href="#"
                                    className="group flex items-center justify-between gap-[0px] w-full h-[36px] px-[14px] rounded-full text-[rgba(10,18,23,0.8)] text-[14px] font-[500] leading-[21px] hover:bg-[rgba(10,18,23,0.05)] hover:text-[#0a1217] relative transition-all"
                                  >
                                    <div className="flex-1 min-w-0 pr-2">
                                      <div className="overflow-hidden">
                                        <div className="flex items-center transition-opacity">
                                          <span className="block overflow-hidden text-ellipsis whitespace-nowrap leading-[19.6px]">
                                            Novo Nordisk Analysis
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <button
                                        type="button"
                                        className="flex items-center justify-center flex-none w-[28px] h-[28px] rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity"
                                      >
                                        <MoreVertical className="w-[16px] h-[16px]" />
                                      </button>
                                    </div>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>

                          {/* Last week */}
                          <li className="mt-[32px]">
                            <div className="flex items-center justify-between">
                              <h6 className="mb-[6px] ml-[12px] text-[13px] font-[500] leading-[18.2px]">
                                Last week
                              </h6>
                            </div>
                            <ul className="flex flex-col gap-[2px] ml-[-2px] w-full">
                              <li className="w-full">
                                <div className="w-full">
                                  <a
                                    href="#"
                                    className="group flex items-center justify-between gap-[0px] w-full h-[36px] px-[14px] rounded-full text-[rgba(10,18,23,0.8)] text-[14px] font-[500] leading-[21px] hover:bg-[rgba(10,18,23,0.05)] hover:text-[#0a1217] relative transition-all"
                                  >
                                    <div className="flex-1 min-w-0 pr-2">
                                      <div className="overflow-hidden">
                                        <div className="flex items-center transition-opacity">
                                          <span className="block overflow-hidden text-ellipsis whitespace-nowrap leading-[19.6px]">
                                            Novo Nordisk Analysis
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <button
                                        type="button"
                                        className="flex items-center justify-center flex-none w-[28px] h-[28px] rounded-[8px] opacity-0 group-hover:opacity-100 transition-opacity"
                                      >
                                        <MoreVertical className="w-[16px] h-[16px]" />
                                      </button>
                                    </div>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="flex flex-col flex-none gap-[8px] pt-[10px] pb-[16px] px-[16px] relative">
                <div className="flex flex-col gap-[8px] p-[16px] bg-[rgba(10,18,23,0.02)] rounded-[16px] cursor-pointer hover:bg-[rgba(10,18,23,0.05)] transition-colors">
                  <div className="flex flex-col gap-[12px]">
                    <Sparkles className="w-[24px] h-[24px]" />
                    <div className="flex flex-col gap-[4px]">
                      <p className="text-[14px] font-[500] leading-[19.6px]">
                        10 meetings and 20 messages left this month
                      </p>
                      <p className="text-[14px] leading-[19.6px] opacity-40">
                        Upgrade for unlimited use
                      </p>
                    </div>
                    <button
                      type="button"
                      className="flex items-center justify-center gap-[6px] h-[36px] px-[16px] bg-[#0a1217] border-[0.67px] border-transparent rounded-[22px] text-[#FFFFFF] text-[14px] font-[500] leading-[20px] whitespace-nowrap hover:bg-[rgba(10,18,23,0.8)] transition-all"
                    >
                      Upgrade
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <button
                    type="button"
                    data-popover-trigger="settings"
                    onClick={() => setIsSettingsOpen(prev => !prev)}
                    className="flex items-center justify-between w-full min-h-[36px] px-[14px] rounded-full text-[14px] font-[500] leading-[21px] text-[rgba(10,18,23,0.8)] hover:bg-[rgba(10,18,23,0.05)] transition-colors cursor-pointer"
                  >
                    Settings
                    <Settings className="w-[16px] h-[16px]" />
                  </button>
                  <SettingsPopover isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <main>
        <section>
          <div className="flex relative z-[1]">
            <div
              id="outlet"
              className="flex flex-col flex-1 items-center justify-center min-h-[100vh] pl-0 md:pl-[268px] pt-[60px] md:pt-0 z-[12] transition-all duration-300"
            >
              {children || (
                <div className="flex flex-col items-center justify-center gap-[24px] max-w-[400px]">
                  <div className="w-[215px] h-[140px] text-[#0a1217] opacity-[0.08]">
                    <svg
                      width="215"
                      height="140"
                      viewBox="0 0 215 140"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="215"
                        height="140"
                        className="fill-transparent"
                      />
                      <path
                        d="M64 0L64 140"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeDasharray="3 3"
                      />
                      <path
                        d="M151 0L151 140"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeDasharray="3 3"
                      />
                      <path
                        d="M215 24H0"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeDasharray="3 3"
                      />
                      <path
                        d="M215 50H0"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeDasharray="3 3"
                      />
                      <path
                        d="M215 88H0"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeDasharray="3 3"
                      />
                      <path
                        d="M215 114H0"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeDasharray="3 3"
                      />
                      <path
                        d="M199 0L199 140"
                        stroke="currentColor"
                        strokeWidth="0.8"
                      />
                      <path
                        d="M16 0L16 140"
                        stroke="currentColor"
                        strokeWidth="0.8"
                      />
                      <path
                        d="M0 16L215 16"
                        stroke="currentColor"
                        strokeWidth="0.8"
                      />
                      <path
                        d="M0 124L215 124"
                        stroke="currentColor"
                        strokeWidth="0.8"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-center gap-[8px] text-center">
                    <h2 className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#0a1217]">
                      Welcome to Acme
                    </h2>
                    <p className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[rgba(10,18,23,0.6)]">
                      Select an item from the sidebar to get started.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Extension Panels */}
      <MeetingsPanel
        isOpen={isMeetingsOpen}
        onClose={() => setIsMeetingsOpen(false)}
      />
    </div>
  );
}
