import React from "react";
import FilterMenu from "./FilterMenu";

import {
  ChevronDown,
  Plus,
  Check,
  ChevronLeft,
  ChevronRight,
  Search,
  X,
  Columns,
  RotateCw,
  Info,
} from "lucide-react";

import * as Checkbox from "@radix-ui/react-checkbox";

interface Contact {
  name: string;
  email: string;
  subscribed: boolean;
  blocklisted: boolean;
  whatsapp: boolean;
  lastChanged: string;
  creationDate: string;
}

const FAKE_CONTACTS: Contact[] = [
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    subscribed: true,
    blocklisted: false,
    whatsapp: false,
    lastChanged: "22/01/2025",
    creationDate: "15/01/2025",
  },
  {
    name: "Bob Smith",
    email: "bob.smith@test.co",
    subscribed: true,
    blocklisted: false,
    whatsapp: true,
    lastChanged: "21/01/2025",
    creationDate: "10/01/2025",
  },
  {
    name: "Charlie Brown",
    email: "charlie.b@domain.net",
    subscribed: false,
    blocklisted: false,
    whatsapp: false,
    lastChanged: "20/01/2025",
    creationDate: "05/01/2025",
  },
  {
    name: "Diana Prince",
    email: "diana.prince@wonder.org",
    subscribed: true,
    blocklisted: false,
    whatsapp: false,
    lastChanged: "19/01/2025",
    creationDate: "01/01/2025",
  },
  {
    name: "Evan Wright",
    email: "evan.wright@write.com",
    subscribed: true,
    blocklisted: false,
    whatsapp: false,
    lastChanged: "18/01/2025",
    creationDate: "28/12/2024",
  },
  {
    name: "Fiona Gallagher",
    email: "fiona.g@shameless.tv",
    subscribed: false,
    blocklisted: true,
    whatsapp: true,
    lastChanged: "17/01/2025",
    creationDate: "25/12/2024",
  },
  {
    name: "George Martin",
    email: "george.rr@books.com",
    subscribed: true,
    blocklisted: false,
    whatsapp: false,
    lastChanged: "16/01/2025",
    creationDate: "20/12/2024",
  },
  {
    name: "Hannah Lee",
    email: "hannah.lee@music.io",
    subscribed: true,
    blocklisted: false,
    whatsapp: false,
    lastChanged: "15/01/2025",
    creationDate: "18/12/2024",
  },
  {
    name: "Ian Somerhalder",
    email: "ian.s@vampire.net",
    subscribed: true,
    blocklisted: false,
    whatsapp: true,
    lastChanged: "14/01/2025",
    creationDate: "15/12/2024",
  },
  {
    name: "Julia Roberts",
    email: "julia.r@movie.star",
    subscribed: true,
    blocklisted: false,
    whatsapp: false,
    lastChanged: "13/01/2025",
    creationDate: "10/12/2024",
  },
];

import LoadListMenu from "./LoadListMenu";

// ... existing imports ...

import { useRef } from "react";
import { useOutsideClick } from "./useOutsideClick";

// ... existing imports ...

export default function ContactsView() {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = React.useState(false);
  const [isLoadListOpen, setIsLoadListOpen] = React.useState(false);

  const loadListRef = useRef<HTMLDivElement>(null);
  const filterMenuRef = useRef<HTMLDivElement>(null);

  useOutsideClick(loadListRef, () => {
    if (isLoadListOpen) setIsLoadListOpen(false);
  });

  useOutsideClick(filterMenuRef, () => {
    if (isFilterMenuOpen) setIsFilterMenuOpen(false);
  });

  return (
    <div className="w-full h-full p-4 lg:p-8 font-sans text-[#1b1b1b] font-normal text-[16px] leading-[24px] box-border">
      {/* 
        ========================================
        HEADER SECTION 
        ========================================
      */}
      <header className="flex flex-col sm:flex-row flex-wrap justify-between items-start sm:items-center w-full gap-4 mb-6">
        {/* Left Side: Title + Count */}
        <div className="flex items-center">
          <h1 className="text-[32px] font-semibold leading-[40px] text-[#1b1b1b] mr-4">
            Contacts
          </h1>
          <div className="flex items-center gap-2">
            <span className="text-[20px] font-semibold leading-[24px] text-[#696969]">
              8,234
            </span>
            <button className="text-[#696969] p-1 rounded-lg w-[24px] h-[24px] flex items-center justify-center">
              <Info size={14} />
            </button>
          </div>
        </div>

        {/* Right Side: Primary Actions */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {/* Create a contact */}
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-[15px] py-[7px] h-[40px] bg-gradient-to-t from-[#fafafa] to-white border border-[#cfcfcf] rounded-[16px] shadow-sm hover:bg-gray-50 transition-colors">
            <span className="text-[16px] font-normal text-[#1b1b1b] whitespace-nowrap">
              Create a contact
            </span>
          </button>

          {/* Import contacts */}
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-[15px] py-[7px] h-[40px] bg-gradient-to-t from-[#1b1b1b] to-[#2c2c2c] border border-[#1b1b1b] rounded-[16px] text-white hover:opacity-90 transition-opacity">
            <span className="text-[16px] font-normal text-white whitespace-nowrap">
              Import contacts
            </span>
          </button>
        </div>
      </header>

      {/* 
        ========================================
        FILTERS ROW 
        ========================================
      */}
      <div className="flex flex-wrap items-start gap-4 mb-6">
        {/* Load a list or a segment */}
        <div className="relative" ref={loadListRef}>
          <button
            onClick={() => setIsLoadListOpen(!isLoadListOpen)}
            className="flex items-center justify-center gap-2 px-[7px] py-[3px] h-[32px] bg-gradient-to-t from-[#fafafa] to-white border border-[#cfcfcf] rounded-[12px] shadow-sm hover:bg-gray-50 transition-colors"
          >
            <span className="text-[16px] font-normal text-[#1b1b1b] px-2">
              Load a list or a segment
            </span>
            <ChevronDown size={14} className="text-[#1b1b1b] mr-1" />
          </button>
          {isLoadListOpen && (
            <LoadListMenu
              onSelect={(item) => {
                console.log("Selected item:", item);
                setIsLoadListOpen(false);
              }}
              onClose={() => setIsLoadListOpen(false)}
            />
          )}
        </div>

        {/* Add filter */}
        <div className="relative" ref={filterMenuRef}>
          <button
            onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
            className="flex items-center justify-center gap-2 px-[8px] py-[3px] h-[32px] bg-gradient-to-t from-[#fafafa] to-white border border-[#cfcfcf] rounded-[12px] shadow-sm hover:bg-gray-50 transition-colors"
          >
            <span className="text-[16px] font-normal text-[#1b1b1b]">
              Add filter
            </span>
            <Plus size={16} className="text-[#1b1b1b] ml-1" />
          </button>
          {isFilterMenuOpen && (
            <FilterMenu
              onSelect={(id) => {
                console.log("Selected filter:", id);
                setIsFilterMenuOpen(false);
              }}
              onClose={() => setIsFilterMenuOpen(false)}
            />
          )}
        </div>
      </div>

      {/* 
        ========================================
        TABLE CONTAINER 
        ========================================
      */}
      <div className="bg-white border text-[#1b1b1b] border-[#e3e3e3] rounded-t-[16px] overflow-hidden">
        {/* 
          TABLE CONTROLS BAR (Part of the "table" visual block in capture)
          It looks like a header above the actual column headers 
        */}
        <div className="flex justify-between items-center px-6 py-2 border-b border-[#e3e3e3] h-[64px]">
          {/* Left: Total Count + Refresh */}
          <div className="flex items-center gap-2">
            <span className="text-[14px] text-[#696969]">
              <span className="font-normal tracking-wide text-[#696969]">
                8,234
              </span>{" "}
              contacts
            </span>
            <button className="ml-1 p-1 rounded-lg w-[24px] h-[24px] flex items-center justify-center text-[#696969]">
              <RotateCw size={12} strokeWidth={2} />
            </button>
          </div>

          {/* Right: Customize Columns + Search */}
          <div className="flex items-center gap-2">
            {/* Customize columns */}
            <button className="flex items-center justify-center gap-2 px-[15px] py-[7px] h-[40px] border border-transparent hover:border-[#cfcfcf] rounded-[16px] transition-colors group">
              <Columns size={16} className="text-[#6358de]" />
              <span className="text-[16px] font-normal text-[#6358de]">
                Customize columns
              </span>
            </button>

            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={16} className="text-[#696969]" />
              </div>
              <input
                type="search"
                placeholder="Search"
                className="pl-[35px] pr-[12px] py-[3px] h-[32px] w-[250px] border border-[#e3e3e3] rounded-[12px] text-[16px] text-[#1b1b1b] placeholder-[#696969] outline-none focus:border-[#6358de]"
              />
              <div className="absolute inset-y-0 right-2 flex items-center">
                <button className="text-[#696969] hover:text-[#1b1b1b]">
                  <X size={16} strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 
          ACTUAL DATA TABLE
        */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse min-w-[1000px]">
            <thead>
              <tr className="border-b border-[#e3e3e3] h-[64px]">
                {/* Checkbox Column */}
                <th className="w-[56px] px-6 text-center border-r border-[#e3e3e3] bg-white sticky left-0 z-10">
                  <Checkbox.Root className="flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-[4px] border border-[#1b1b1b] bg-white outline-none data-[state=checked]:bg-[#6358de] data-[state=checked]:border-[#6358de]">
                    <Checkbox.Indicator className="text-white">
                      <Check size={12} strokeWidth={3} />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                </th>

                {/* CONTACT */}
                <th className="text-left px-6 py-2 border-r border-[#e3e3e3] w-[303px]">
                  <span className="text-[16px] font-bold text-[#1b1b1b]">
                    CONTACT
                  </span>
                </th>

                {/* SUBSCRIBED */}
                <th className="text-left px-6 py-2 w-[293px]">
                  <span className="text-[16px] font-normal text-[#696969]">
                    SUBSCRIBED
                  </span>
                </th>

                {/* BLOCKLISTED */}
                <th className="text-left px-6 py-2 w-[293px]">
                  <span className="text-[16px] font-normal text-[#696969]">
                    BLOCKLISTED
                  </span>
                </th>

                {/* EMAIL */}
                <th className="text-left px-6 py-2 w-[293px]">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <span className="text-[16px] font-normal text-[#696969]">
                      EMAIL
                    </span>
                    <ChevronDown
                      size={16}
                      className="text-[#696969] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </th>

                {/* WHATSAPP */}
                <th className="text-left px-6 py-2 w-[233px]">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <span className="text-[16px] font-normal text-[#696969]">
                      WHATSAPP
                    </span>
                    <ChevronDown
                      size={16}
                      className="text-[#696969] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </th>

                {/* LAST CHANGED */}
                <th className="text-left px-6 py-2 w-[233px]">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <span className="text-[16px] font-normal text-[#696969]">
                      LAST CHANGED
                    </span>
                    <ChevronDown
                      size={16}
                      className="text-[#696969] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </th>

                {/* CREATION DATE */}
                <th className="text-left px-6 py-2 w-[233px]">
                  <div className="flex items-center gap-2 group cursor-pointer">
                    <span className="text-[16px] font-normal text-[#696969]">
                      CREATION DATE
                    </span>
                    <ChevronDown
                      size={16}
                      className="text-[#696969] opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {FAKE_CONTACTS.map((contact, index) => (
                <tr
                  key={index}
                  className="border-b border-[#e3e3e3] h-[56px] hover:bg-[#f9f9f9] transition-colors group"
                >
                  <td className="w-[56px] px-6 text-center border-r border-[#e3e3e3] bg-white group-hover:bg-[#f9f9f9] sticky left-0 z-10">
                    <Checkbox.Root className="flex h-[16px] w-[16px] appearance-none items-center justify-center rounded-[4px] border border-[#1b1b1b] bg-white outline-none data-[state=checked]:bg-[#1b1b1b] data-[state=checked]:border-[#1b1b1b]">
                      <Checkbox.Indicator className="text-white">
                        <Check size={12} strokeWidth={3} />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                  </td>

                  <td className="px-6 py-2 border-r border-[#e3e3e3]">
                    <a
                      href="#"
                      className="text-[#1b1b1b] underline decoration-1 underline-offset-2"
                    >
                      {contact.name}
                    </a>
                  </td>

                  <td className="px-6 py-2">
                    {contact.subscribed && (
                      <div className="flex items-center gap-1 bg-[#d8efe8] px-2 py-0.5 rounded-[20px] w-fit">
                        <Check size={14} className="text-[#1b1b1b]" />
                        <span className="text-[14px]">Email</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-2">
                    {contact.blocklisted && (
                      <span className="text-[#d20000] text-[14px]">
                        Blocklisted
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-2 text-[#1b1b1b]">{contact.email}</td>
                  <td className="px-6 py-2">
                    {contact.whatsapp && (
                      <div className="flex items-center gap-1 bg-[#d8efe8] px-2 py-0.5 rounded-[20px] w-fit">
                        <Check size={14} className="text-[#1b1b1b]" />
                        <span className="text-[14px]">WA</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-2 text-[#1b1b1b]">
                    {contact.lastChanged}
                  </td>
                  <td className="px-6 py-2 text-[#1b1b1b]">
                    {contact.creationDate}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="border-t border-[#e3e3e3] bg-white">
              <tr>
                <td colSpan={8} className="px-6 py-4">
                  <div className="flex items-center justify-end w-full gap-2">
                    {/* Rows per page selector */}
                    <button className="flex items-center justify-between px-2 w-[60px] h-[32px] bg-gradient-to-t from-[#fafafa] to-white border border-[#cfcfcf] rounded-[12px] shadow-[0_1px_2px_rgba(28,28,28,0.08)] hover:bg-gray-50 transition-colors">
                      <span className="font-semibold text-[13px] text-[#1b1b1b]">
                        20
                      </span>
                      <ChevronDown size={14} className="text-[#1b1b1b]" />
                    </button>

                    <span className="text-[16px] text-[#1b1b1b] mr-6">
                      Rows per page
                    </span>

                    {/* Count stats */}
                    <span className="text-[16px] text-[#1b1b1b] mr-2">
                      <span className="font-semibold">1–20</span>{" "}
                      <span>of 8,234</span>
                    </span>

                    {/* Page selector */}
                    <button className="flex items-center justify-between px-2 w-[48px] h-[32px] bg-gradient-to-t from-[#fafafa] to-white border border-[#cfcfcf] rounded-[12px] shadow-[0_1px_2px_rgba(28,28,28,0.08)] hover:bg-gray-50 transition-colors mr-2">
                      <span className="font-semibold text-[13px] text-[#1b1b1b]">
                        1
                      </span>
                      <ChevronDown size={14} className="text-[#1b1b1b]" />
                    </button>

                    <span className="text-[16px] text-[#1b1b1b] mr-2">
                      of 412 pages
                    </span>

                    {/* Navigation Buttons */}
                    <div className="flex items-center gap-1">
                      <button
                        className="flex items-center justify-center w-[40px] h-[40px] rounded-[16px] text-[#6358de] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                        disabled
                      >
                        <ChevronLeft size={16} strokeWidth={3} />
                      </button>
                      <button className="flex items-center justify-center w-[40px] h-[40px] rounded-[16px] text-[#6358de] hover:bg-gray-50 transition-colors">
                        <ChevronRight size={16} strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="h-[200px] bg-white"></div>{" "}
          {/* Spacer for bottom scroll/visual */}
        </div>
      </div>
    </div>
  );
}
