import React from "react";
import { useState, useEffect } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  Plus,
  Paperclip,
  ArrowUp,
  Sparkles,
  ChevronRight,
  Plug,
  HardDrive,
  FileText,
  Globe,
  Share2,
  Image,
  Presentation,
  Search,
  Folder,
  Upload,
  Video,
  Check,
  ExternalLink,
} from "lucide-react";

export default function Page() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return new URLSearchParams(window.location.search).get("theme");
    }
    return null;
  });

  const [webSearchEnabled, setWebSearchEnabled] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#131314] flex flex-col items-center w-full">
      {/* Main centered area */}
      <div className="w-full flex flex-col items-center justify-center gap-[16px] pt-[80px] pb-[32px] min-h-[calc(100vh-180px)]">
        {/* Chat input container */}
        <div className="flex px-[16px] sm:px-[32px] w-full justify-center items-end">
          <div className="flex relative w-full justify-center">
            <div className="relative w-full max-w-[868px] self-center flex-1 flex-col gap-[12px] pointer-events-auto bg-[#FFFFFF] dark:bg-[#131314] rounded-t-[32px]">
              {/* Form */}
              <form>
                <div className="relative flex">
                  {/* Left button — task selector */}
                  <div className="absolute left-[12px] bottom-[10px] z-[1]">
                    <button
                      className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-full bg-transparent font-[400] transition-colors duration-[150ms] hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] focus:outline-none cursor-pointer"
                      type="button"
                    >
                      <Plus className="w-[20px] h-[20px] text-[#0A1217] dark:text-[#e8e8e8]" />
                    </button>
                  </div>

                  {/* Textarea */}
                  <textarea
                    id="simple-chat-input"
                    placeholder="What would you like to do?"
                    rows="1"
                    className="flex-1 border-none outline-none text-[#0A1217] dark:text-[#e8e8e8] text-[16px] leading-[1.5] placeholder:text-[#0A121766] dark:placeholder:text-[#e8e8e899] pr-[56px] py-[16px] rounded-[32px] w-full bg-[#0A12170d] dark:bg-[#e8e8e80d] resize-none max-h-[200px] overflow-y-auto min-h-[56px] pl-[56px]"
                  />

                  {/* Right button — send */}
                  <div className="absolute right-[12px] bottom-[10px] z-[1]">
                    <button
                      disabled
                      aria-label="Send message"
                      type="button"
                      className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#0A121766] dark:bg-[#e8e8e866] text-[#FFFFFF] dark:text-[#131314] cursor-not-allowed opacity-50 transition-colors duration-[150ms]"
                    >
                      <ArrowUp className="w-[16px] h-[16px]" />
                    </button>
                  </div>
                </div>
              </form>

              {/* Action buttons row */}
              <div className="flex gap-[4px] sm:gap-[8px] items-center mt-[8px]">
                {/* ===== CREATE DROPDOWN ===== */}
                <DropdownMenu.Root open={openDropdown === 'create'} onOpenChange={(open) => setOpenDropdown(open ? 'create' : null)}>
                  <DropdownMenu.Trigger asChild>
                    <button
                      className="flex flex-row justify-center items-center py-[6px] h-[36px] text-[14px] leading-[20px] whitespace-nowrap text-[#0A1217] dark:text-[#e8e8e8] transition-all duration-[200ms] gap-[6px] cursor-pointer rounded-full border border-transparent bg-transparent px-[16px] pl-[12px] font-[400] hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] data-[state=open]:bg-[#0A12170d] dark:data-[state=open]:bg-[#e8e8e80d]"
                      type="button"
                    >
                      <Paperclip className="w-[16px] h-[16px] text-[#0A121766] dark:text-[#e8e8e866]" />
                      <span className="truncate">Create</span>
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      side="bottom"
                      align="start"
                      sideOffset={8}
                      className="min-w-[240px] flex flex-col rounded-[16px] border border-[#0A12170d] dark:border-[#e8e8e814] bg-white dark:bg-[#131314] shadow-[0px_7px_16px_rgba(0,0,0,0.04)] dark:shadow-[0px_7px_16px_rgba(0,0,0,0.2)] p-[4px] z-50 origin-[var(--radix-dropdown-menu-content-transform-origin)] data-[state=open]:animate-[dropdownMenuScaleIn_0.15s_ease-out] data-[state=closed]:animate-[dropdownMenuScaleOut_0.10s_ease-in]"
                    >
                      {/* Doc */}
                      <DropdownMenu.Item className="flex w-full items-center gap-[12px] rounded-[12px] px-[12px] py-[8px] cursor-pointer hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] focus:bg-[#0A12170d] dark:focus:bg-[#e8e8e80d] outline-none transition-colors duration-[50ms]">
                        <div className="flex h-[20px] items-center justify-center min-w-[24px]">
                          <FileText className="w-[20px] h-[20px] text-[#0A121799] dark:text-[#e8e8e899]" />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[14px] text-[#0A1217] dark:text-[#e8e8e8] mb-[2px]">
                            Doc
                          </p>
                          <p className="text-[14px] text-[#0A121766] dark:text-[#e8e8e866]">
                            Write and collaborate
                          </p>
                        </div>
                      </DropdownMenu.Item>

                      {/* Image */}
                      <DropdownMenu.Item className="flex w-full items-center gap-[12px] rounded-[12px] px-[12px] py-[8px] cursor-pointer hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] focus:bg-[#0A12170d] dark:focus:bg-[#e8e8e80d] outline-none transition-colors duration-[50ms]">
                        <div className="flex h-[20px] items-center justify-center min-w-[24px]">
                          <Image className="w-[14px] h-[14px] text-[#0A121799] dark:text-[#e8e8e899]" />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[14px] text-[#0A1217] dark:text-[#e8e8e8] mb-[2px]">
                            Image
                          </p>
                          <p className="text-[14px] text-[#0A121766] dark:text-[#e8e8e866]">
                            Create custom images
                          </p>
                        </div>
                      </DropdownMenu.Item>

                      {/* Slides — disabled */}
                      <DropdownMenu.Item
                        disabled
                        className="flex w-full items-center justify-between gap-[12px] rounded-[12px] px-[12px] py-[8px] opacity-50 cursor-not-allowed outline-none transition-colors duration-[50ms]"
                      >
                        <div className="flex items-center gap-[12px]">
                          <div className="flex h-[20px] items-center justify-center min-w-[24px]">
                            <Presentation className="w-[17px] h-[17px] text-[#0A121799] dark:text-[#e8e8e899]" />
                          </div>
                          <div className="flex flex-col">
                            <p className="text-[14px] text-[#0A1217] dark:text-[#e8e8e8] mb-[2px]">
                              Slides
                            </p>
                            <p className="text-[14px] text-[#0A121766] dark:text-[#e8e8e866]">
                              Generate a presentation
                            </p>
                          </div>
                        </div>
                        <span className="flex items-center flex-shrink-0 text-[10px] h-[20px] rounded-full px-[8px] bg-[#0A12170d] dark:bg-[#e8e8e81a] text-[#0A1217] dark:text-[#e8e8e8]">
                          Coming soon
                        </span>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>

                {/* ===== SOURCES DROPDOWN ===== */}
                <DropdownMenu.Root open={openDropdown === 'sources'} onOpenChange={(open) => setOpenDropdown(open ? 'sources' : null)}>
                  <DropdownMenu.Trigger asChild>
                    <button
                      className="inline-flex h-[36px] items-center rounded-full pr-[14px] pl-[12px] font-[400] text-[14px] transition-colors duration-[150ms] focus:outline-none cursor-pointer min-w-0 bg-transparent hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] data-[state=open]:bg-[#0A12170d] dark:data-[state=open]:bg-[#e8e8e80d]"
                      type="button"
                    >
                      <div className="flex items-center gap-[8px] min-w-0">
                        <Plus className="w-[16px] h-[16px] text-[#0A121766] dark:text-[#e8e8e866]" />
                        <span className="truncate text-[#0A1217] dark:text-[#e8e8e8] text-[14px]">
                          Sources
                        </span>
                      </div>
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      side="bottom"
                      align="start"
                      sideOffset={8}
                      className="min-w-[300px] max-w-[300px] flex flex-col rounded-[24px] border border-[#0A12170d] dark:border-[#e8e8e814] bg-white dark:bg-[#131314] shadow-[0px_7px_16px_rgba(0,0,0,0.04)] dark:shadow-[0px_7px_16px_rgba(0,0,0,0.2)] z-50 overflow-auto max-h-[400px] origin-[var(--radix-dropdown-menu-content-transform-origin)] data-[state=open]:animate-[dropdownMenuScaleIn_0.15s_ease-out] data-[state=closed]:animate-[dropdownMenuScaleOut_0.10s_ease-in]"
                    >
                      <div className="flex-1 overflow-y-auto scroll-smooth max-h-[308px]">
                        <div className="p-[8px]">
                          {/* Search */}
                          <DropdownMenu.Item className="flex w-full items-center rounded-full px-[14px] h-[40px] transition-colors duration-[50ms] hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] focus:bg-[#0A12170d] dark:focus:bg-[#e8e8e80d] cursor-pointer outline-none">
                            <div className="flex min-w-0 flex-1 items-center gap-[12px]">
                              <Search className="w-[16px] h-[16px] text-[#0A1217] dark:text-[#e8e8e8]" />
                              <p className="text-[14px] text-[#0A1217] dark:text-[#e8e8e8]">
                                Search for any file or meeting
                              </p>
                            </div>
                          </DropdownMenu.Item>

                          {/* Folders */}
                          <DropdownMenu.Item className="flex w-full items-center rounded-full px-[14px] h-[40px] transition-colors duration-[50ms] hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] focus:bg-[#0A12170d] dark:focus:bg-[#e8e8e80d] cursor-pointer outline-none justify-between">
                            <div className="flex items-center gap-[10px]">
                              <Folder className="w-[20px] h-[20px] text-[#0A1217] dark:text-[#e8e8e8]" />
                              <span className="text-[14px] text-[#0A1217] dark:text-[#e8e8e8]">Folders</span>
                            </div>
                            <ChevronRight className="w-[14px] h-[14px] ml-auto text-[#0A1217] dark:text-[#e8e8e8]" />
                          </DropdownMenu.Item>

                          {/* Upload files */}
                          <DropdownMenu.Item className="flex w-full items-center rounded-full px-[16px] h-[40px] transition-colors duration-[50ms] hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] focus:bg-[#0A12170d] dark:focus:bg-[#e8e8e80d] cursor-pointer outline-none">
                            <div className="flex min-w-0 flex-1 items-center gap-[12px]">
                              <Upload className="w-[16px] h-[16px] text-[#0A1217] dark:text-[#e8e8e8]" />
                              <p className="text-[14px] text-[#0A1217] dark:text-[#e8e8e8]">Upload files</p>
                            </div>
                          </DropdownMenu.Item>
                        </div>

                        {/* Separator */}
                        <div className="px-[8px] pb-[8px]">
                          <div className="mx-[4px] h-[1px] bg-[#0A12170d] dark:bg-[#e8e8e814]" />
                        </div>

                        {/* Apps header */}
                        <div className="sticky top-0 w-full flex flex-row justify-between px-[22px] py-[10px] rounded-t-[24px] bg-white dark:bg-[#131314] border-[#0A12170d] dark:border-[#e8e8e814]">
                          <p className="text-[14px] text-[#0A1217] dark:text-[#e8e8e8]">Apps</p>
                          <div className="flex items-center gap-[8px] text-[#0A121766] dark:text-[#e8e8e866]">
                            <button className="cursor-pointer group relative">
                              <p className="text-[14px] text-right whitespace-nowrap text-[#0A121766] dark:text-[#e8e8e866] transition-opacity duration-[200ms] group-hover:opacity-0">
                                All enabled
                              </p>
                              <p className="text-[14px] absolute top-0 right-0 text-right whitespace-nowrap text-[#0A121766] dark:text-[#e8e8e866] underline underline-offset-2 decoration-[1px] opacity-0 transition-opacity duration-[200ms] group-hover:opacity-100">
                                All enabled
                              </p>
                            </button>
                          </div>
                        </div>

                        {/* App items */}
                        <div className="px-[8px] pb-[8px]">
                          <DropdownMenu.Item className="flex w-full items-center rounded-full px-[16px] h-[40px] transition-colors duration-[50ms] hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] focus:bg-[#0A12170d] dark:focus:bg-[#e8e8e80d] cursor-pointer outline-none">
                            <div className="flex min-w-0 flex-1 items-center gap-[12px]">
                              <Video className="w-[16px] h-[16px] text-[#0A1217] dark:text-[#e8e8e8]" />
                              <p className="text-[14px] text-[#0A1217] dark:text-[#e8e8e8]">Meetings</p>
                            </div>
                          </DropdownMenu.Item>
                          <DropdownMenu.Item className="flex w-full items-center rounded-full px-[16px] h-[40px] transition-colors duration-[50ms] hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] focus:bg-[#0A12170d] dark:focus:bg-[#e8e8e80d] cursor-pointer outline-none">
                            <div className="flex min-w-0 flex-1 items-center gap-[12px]">
                              <Globe className="w-[16px] h-[16px] text-[#0A1217] dark:text-[#e8e8e8]" />
                              <p className="text-[14px] text-[#0A1217] dark:text-[#e8e8e8]">Webpages</p>
                            </div>
                          </DropdownMenu.Item>
                          <DropdownMenu.Item className="flex w-full items-center rounded-full px-[16px] h-[40px] transition-colors duration-[50ms] hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] focus:bg-[#0A12170d] dark:focus:bg-[#e8e8e80d] cursor-pointer outline-none">
                            <div className="flex min-w-0 flex-1 items-center gap-[12px]">
                              <HardDrive className="w-[16px] h-[16px] text-[#0A1217] dark:text-[#e8e8e8]" />
                              <p className="text-[14px] text-[#0A1217] dark:text-[#e8e8e8]">File uploads</p>
                            </div>
                          </DropdownMenu.Item>
                        </div>
                      </div>

                      {/* Bottom section — Search web toggle */}
                      <div className="px-[8px] pb-[8px]">
                        <div className="mb-[8px] mx-[4px] h-[1px] bg-[#0A12170d] dark:bg-[#e8e8e814]" />
                        <div
                          className="flex w-full items-center rounded-full px-[16px] py-[8px] transition-colors duration-[50ms] cursor-pointer hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d]"
                          onClick={() => setWebSearchEnabled(!webSearchEnabled)}
                        >
                          <div className="flex min-w-0 flex-1 items-center gap-[12px]">
                            <Search className="w-[16px] h-[16px] text-[#0A1217] dark:text-[#e8e8e8]" />
                            <p className="text-[14px] text-[#0A1217] dark:text-[#e8e8e8]">Search web</p>
                          </div>
                          {/* Toggle switch */}
                          <button
                            role="switch"
                            aria-checked={webSearchEnabled}
                            onClick={(e) => {
                              e.stopPropagation();
                              setWebSearchEnabled(!webSearchEnabled);
                            }}
                            className={`relative inline-flex h-[20px] w-[36px] flex-shrink-0 cursor-pointer rounded-full transition-colors duration-[200ms] ${
                              webSearchEnabled
                                ? "bg-[#0A1217] dark:bg-[#e8e8e8]"
                                : "bg-[#0A12171a] dark:bg-[#e8e8e833]"
                            }`}
                          >
                            <span
                              className={`pointer-events-none inline-block h-[16px] w-[16px] rounded-full bg-white dark:bg-[#131314] shadow-sm transform transition-transform duration-[200ms] mt-[2px] ${
                                webSearchEnabled
                                  ? "translate-x-[18px]"
                                  : "translate-x-[2px]"
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>

                {/* Spacer */}
                <div className="flex grow" />

                {/* ===== MODEL SELECTOR DROPDOWN ===== */}
                <DropdownMenu.Root open={openDropdown === 'model'} onOpenChange={(open) => setOpenDropdown(open ? 'model' : null)}>
                  <DropdownMenu.Trigger asChild>
                    <button
                      className="flex flex-row justify-center items-center py-[6px] h-[36px] text-[14px] leading-[20px] whitespace-nowrap text-[#0A1217] dark:text-[#e8e8e8] transition-all duration-[200ms] gap-[6px] cursor-pointer rounded-full border border-transparent bg-transparent px-[16px] pl-[12px] font-[400] hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] data-[state=open]:bg-[#0A12170d] dark:data-[state=open]:bg-[#e8e8e80d] min-w-0"
                      type="button"
                    >
                      <Sparkles className="w-[16px] h-[16px] text-[#0A121766] dark:text-[#e8e8e866]" />
                      <span className="truncate">Default</span>
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      side="bottom"
                      align="end"
                      sideOffset={8}
                      className="min-w-[300px] max-h-[400px] overflow-y-auto flex flex-col rounded-[16px] border border-[#0A12170d] dark:border-[#e8e8e814] bg-white dark:bg-[#131314] shadow-[0px_7px_16px_rgba(0,0,0,0.04)] dark:shadow-[0px_7px_16px_rgba(0,0,0,0.2)] p-[4px] z-50 origin-[var(--radix-dropdown-menu-content-transform-origin)] data-[state=open]:animate-[dropdownMenuScaleIn_0.15s_ease-out] data-[state=closed]:animate-[dropdownMenuScaleOut_0.10s_ease-in]"
                    >
                      {/* Default — selected */}
                      <DropdownMenu.Item className="flex w-full items-center justify-between gap-[12px] rounded-[12px] px-[12px] py-[8px] cursor-pointer hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] focus:bg-[#0A12170d] dark:focus:bg-[#e8e8e80d] outline-none transition-colors duration-[50ms]">
                        <div className="flex items-start gap-[12px]">
                          <div className="flex h-[20px] items-center justify-center min-w-[24px]">
                            <Sparkles className="w-[18px] h-[18px] text-[#0A121799] dark:text-[#e8e8e899]" />
                          </div>
                          <p className="text-[14px] text-[#0A1217] dark:text-[#e8e8e8]">
                            Default
                          </p>
                        </div>
                        <Check className="w-[20px] h-[20px] text-[#0A121799] dark:text-[#e8e8e899]" />
                      </DropdownMenu.Item>

                      <DropdownMenu.Separator className="mx-[4px] my-[4px] h-[1px] bg-[#0A12170d] dark:bg-[#e8e8e814]" />

                      <ModelItem name="GPT-5.4" description="High-performance model built for demanding professional tasks" />
                      <ModelItem name="GPT-5.2" description="Advanced reasoning model for complex tasks" />
                      <ModelItem name="GPT-5-mini" description="Balanced for intelligence and speed" />
                      <ModelItem name="Claude Sonnet 4.6" description="Excels at coding and complex reasoning" />
                      <ModelItem name="Claude Opus 4.6" description="Maximum intelligence for complex tasks" />
                      <ModelItem name="Claude Haiku 4.5" description="Fast responses with near-frontier intelligence" />

                      {/* Gemini 3.1 Pro Preview */}
                      <DropdownMenu.Item className="flex w-full items-center gap-[12px] rounded-[12px] px-[12px] py-[8px] cursor-pointer hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] focus:bg-[#0A12170d] dark:focus:bg-[#e8e8e80d] outline-none transition-colors duration-[50ms]">
                        <div className="flex h-[20px] items-center justify-center min-w-[24px]">
                          <Sparkles className="w-[18px] h-[18px] text-[#0A121799] dark:text-[#e8e8e899]" />
                        </div>
                        <div className="flex flex-col">
                          <p className="text-[14px] text-[#0A1217] dark:text-[#e8e8e8] mb-[2px]">
                            <span className="flex items-center gap-[8px]">
                              Gemini 3.1 Pro Preview
                              <ExternalLink className="w-[16px] h-[16px] text-[#0A121766] dark:text-[#e8e8e866]" />
                            </span>
                          </p>
                          <p className="text-[14px] text-[#0A121766] dark:text-[#e8e8e866]">
                            Google's latest flagship model
                          </p>
                        </div>
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              </div>
            </div>
          </div>
        </div>

        {/* Suggestion items */}
        <div className="w-full flex justify-center px-[16px] sm:px-[32px]">
          <div className="max-w-[868px] w-full mt-[40px]">
            {/* Suggestion 1 — Google Docs */}
            <div className="border-t border-[#0A12170d] dark:border-[#e8e8e80d]">
              <button className="inline-flex gap-[16px] h-[60px] items-center cursor-pointer px-[8px] sm:px-[16px] pointer-events-auto text-[#0A121799] dark:text-[#e8e8e899] hover:text-[#0A1217] dark:hover:text-[#e8e8e8] transition-all max-w-full">
                <HardDrive className="w-[16px] h-[16px] flex-shrink-0" />
                <span className="text-[14px] truncate flex-shrink">
                  Improve my doc in{" "}
                  <strong className="font-[500]">Google Docs</strong>
                </span>
              </button>
            </div>

            {/* Suggestion 2 — Financial analysis */}
            <div className="border-t border-[#0A12170d] dark:border-[#e8e8e80d]">
              <button className="inline-flex gap-[16px] h-[60px] items-center cursor-pointer px-[8px] sm:px-[16px] pointer-events-auto text-[#0A121799] dark:text-[#e8e8e899] hover:text-[#0A1217] dark:hover:text-[#e8e8e8] transition-all max-w-full">
                <Sparkles className="w-[16px] h-[16px] flex-shrink-0" />
                <span className="text-[14px] truncate flex-shrink">
                  Create a financial analysis and plot data in{" "}
                  <strong className="font-[500]">graphs</strong>
                </span>
              </button>
            </div>

            {/* Suggestion 3 — SharePoint */}
            <div className="border-t border-[#0A12170d] dark:border-[#e8e8e80d]">
              <button className="inline-flex gap-[16px] h-[60px] items-center cursor-pointer px-[8px] sm:px-[16px] pointer-events-auto text-[#0A121799] dark:text-[#e8e8e899] hover:text-[#0A1217] dark:hover:text-[#e8e8e8] transition-all max-w-full">
                <Share2 className="w-[16px] h-[16px] flex-shrink-0" />
                <span className="text-[14px] truncate flex-shrink">
                  Plot data from a spreadsheet in{" "}
                  <strong className="font-[500]">SharePoint</strong>
                </span>
              </button>
            </div>

            {/* Suggestion 4 — Browse the web */}
            <div className="border-t border-[#0A12170d] dark:border-[#e8e8e80d]">
              <button className="inline-flex gap-[16px] h-[60px] items-center cursor-pointer px-[8px] sm:px-[16px] pointer-events-auto text-[#0A121799] dark:text-[#e8e8e899] hover:text-[#0A1217] dark:hover:text-[#e8e8e8] transition-all max-w-full">
                <Globe className="w-[16px] h-[16px] flex-shrink-0" />
                <span className="text-[14px] truncate flex-shrink">
                  Browse the <strong className="font-[500]">web</strong> and
                  write a newsletter
                </span>
              </button>
            </div>

            {/* Connect your apps CTA */}
            <div className="border-t border-[#0A12170d] dark:border-[#e8e8e80d]">
              <a
                className="inline-flex h-[60px] cursor-pointer px-[8px] sm:px-[16px] pointer-events-auto text-[#0A121799] dark:text-[#e8e8e899] hover:text-[#0A1217] dark:hover:text-[#e8e8e8] transition-all group gap-[12px] items-center max-w-full"
                href="#"
              >
                <Plug className="w-[20px] h-[20px] flex-shrink-0" />
                <span className="text-[14px] truncate flex-shrink inline-flex flex-grow">
                  Connect your apps for better answers
                </span>
                <span className="group-hover:translate-x-[4px] transition-all">
                  <ChevronRight className="w-[16px] h-[16px]" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable model item for the LLM selector dropdown */
function ModelItem({ name, description }) {
  return (
    <DropdownMenu.Item className="flex w-full items-center gap-[12px] rounded-[12px] px-[12px] py-[8px] cursor-pointer hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] focus:bg-[#0A12170d] dark:focus:bg-[#e8e8e80d] outline-none transition-colors duration-[50ms]">
      <div className="flex h-[20px] items-center justify-center min-w-[24px]">
        <Sparkles className="w-[18px] h-[18px] text-[#0A121799] dark:text-[#e8e8e899]" />
      </div>
      <div className="flex flex-col">
        <p className="text-[14px] text-[#0A1217] dark:text-[#e8e8e8] mb-[2px]">
          {name}
        </p>
        <p className="text-[14px] text-[#0A121766] dark:text-[#e8e8e866]">
          {description}
        </p>
      </div>
    </DropdownMenu.Item>
  );
}
