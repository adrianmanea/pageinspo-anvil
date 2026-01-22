import React, { useState, useMemo } from "react";
import {
  SearchIcon,
  CloseIcon,
  ListIcon,
  SegmentIcon,
  FolderIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
} from "./LoadListMenuIcons";

// Mock Data
const DATA = {
  lists: [
    {
      id: "folder-1",
      type: "folder",
      label: "Your First Folder",
      children: [], // Empty for now to match "oops no items" snippet or add fake items
    },
    {
      id: "list-1",
      type: "list",
      label: "General Newsletter",
    },
    {
      id: "list-2",
      type: "list",
      label: "VIP Customers",
    },
  ],
  segments: [
    {
      id: "seg-1",
      type: "segment",
      label: "Engaged Users (Open rate > 50%)",
    },
    {
      id: "seg-2",
      type: "segment",
      label: "New Signups (Last 30 days)",
    },
  ],
};

export default function LoadListMenu({ onSelect, onClose }) {
  const [activeTab, setActiveTab] = useState("lists");
  const [currentView, setCurrentView] = useState("root");
  const [activeFolder, setActiveFolder] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const handleFolderClick = (folder) => {
    setActiveFolder(folder);
    setCurrentView("folder");
  };
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentView("root");
    setActiveFolder(null);
  };

  const handleBackClick = () => {
    setCurrentView("root");
    setActiveFolder(null);
  };

  const displayedItems = useMemo(() => {
    if (activeTab === "segments") return DATA.segments;
    return DATA.lists;
  }, [activeTab]);

  const filteredItems = useMemo(() => {
    if (!searchValue) return displayedItems;
    return displayedItems.filter((item) =>
      item.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [displayedItems, searchValue]);

  return (
    <div
      className="absolute left-0 top-full mt-2 w-[520px] bg-white rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-[#e3e3e3] overflow-hidden z-50 flex flex-col font-sans"
      style={
        {
          // The snippet had a translate transform, we'll just position basically for now
        }
      }
    >
      {/* Search Bar */}
      <div className="p-3 pb-0">
        <div className="relative flex items-center w-full h-[40px] bg-white border border-[#e3e3e3] rounded-[8px] focus-within:border-[#6358de] transition-colors group">
          <div className="absolute left-3 text-[#696969] flex items-center justify-center pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="search"
            className="w-full h-full pl-10 pr-10 py-2 text-[14px] text-[#1b1b1b] placeholder-[#696969] bg-transparent outline-none rounded-[8px]"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            // autoFocus // Optional, might be annoying if it steals focus immediately
          />
          {searchValue && (
            <button
              onClick={() => setSearchValue("")}
              className="absolute right-3 text-[#696969] hover:text-[#1b1b1b] flex items-center justify-center"
            >
              <CloseIcon />
            </button>
          )}
        </div>
      </div>

      {/* Tabs Control Bar */}
      <div className="px-4 border-b border-[#e3e3e3]">
        <div className="flex gap-6">
          <button
            onClick={() => handleTabChange("lists")}
            className={`flex items-center gap-2 py-4 relative ${
              activeTab === "lists"
                ? "text-[#6358de]"
                : "text-[#696969] hover:text-[#1b1b1b]"
            }`}
          >
            <ListIcon />
            <span
              className={`text-[14px] font-medium ${
                activeTab === "lists" ? "text-[#000]" : "" // Snippet shows text color specific
              }`}
            >
              Lists
            </span>
            {activeTab === "lists" && (
              <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#6358de]" />
            )}
          </button>

          <button
            onClick={() => handleTabChange("segments")}
            className={`flex items-center gap-2 py-4 relative ${
              activeTab === "segments"
                ? "text-[#6358de]"
                : "text-[#696969] hover:text-[#1b1b1b]"
            }`}
          >
            <SegmentIcon />
            <span className="text-[14px] font-medium">Segments</span>
            {activeTab === "segments" && (
              <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#6358de]" />
            )}
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="h-[250px] overflow-y-auto relative">
        {/* VIEW: Root List */}
        {currentView === "root" && (
          <ul className="py-2">
            {filteredItems.map((item) => (
              <li
                key={item.id}
                onClick={() =>
                  item.type === "folder"
                    ? handleFolderClick(item)
                    : onSelect(item.id)
                }
                className="mx-2 px-3 py-3 flex items-center justify-between hover:bg-[#f2f2f2] rounded-[8px] cursor-pointer group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="text-[#696969] group-hover:text-[#1b1b1b]">
                    {item.type === "folder" ? (
                      <FolderIcon />
                    ) : activeTab === "lists" ? (
                      <ListIcon /> // Or maybe generic item icon? Snippet used reused icons.
                    ) : (
                      <SegmentIcon />
                    )}
                  </div>
                  <span className="text-[14px] text-[#1b1b1b]">
                    {item.label}
                  </span>
                </div>
                {item.type === "folder" && (
                  <div className="text-[#696969] group-hover:text-[#1b1b1b]">
                    <ArrowRightIcon />
                  </div>
                )}
              </li>
            ))}
            {filteredItems.length === 0 && (
              <div className="p-8 text-center text-[#696969] text-[14px]">
                No items found
              </div>
            )}
          </ul>
        )}

        {/* VIEW: Folder Child View */}
        {currentView === "folder" && activeFolder && (
          <div className="absolute inset-0 bg-white z-10 flex flex-col">
            {/* Folder Header */}
            <div
              className="px-4 py-3 flex items-center gap-2 cursor-pointer border-b border-[#f0f0f0] hover:bg-[#fafafa]"
              onClick={handleBackClick}
            >
              <div className="text-[#696969]">
                <ArrowLeftIcon />
              </div>
              <div className="flex items-center gap-2 text-[#696969]">
                <FolderIcon />
                {/* Empty span in snippet, maybe breadcrumb? */}
                <span className="text-[14px] font-medium text-[#1b1b1b]">
                  {activeFolder.label}
                </span>
              </div>
            </div>

            {/* Folder Contents */}
            <div className="flex-1 overflow-y-auto">
              {activeFolder.children && activeFolder.children.length > 0 ? (
                <ul>
                  {activeFolder.children.map((child) => (
                    <li key={child.id}>{child.label}</li>
                  ))}
                </ul>
              ) : (
                /* Empty State from Snippet */
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  {/* Skeleton simulation from snippet */}
                  <div className="mb-4 w-1/2 h-[60px] bg-[#f0f0f0] rounded animate-pulse" />
                  <div className="text-[14px] text-[#696969]">
                    Oops, there are no items in the list yet
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
