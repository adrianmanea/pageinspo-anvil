import React, { useState, useEffect } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Select from "@radix-ui/react-select";
import { Search, ChevronDown, Check, X } from "lucide-react";

export default function Page() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return new URLSearchParams(window.location.search).get("theme");
    }
    return null;
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex flex-col flex-1 h-full min-h-screen bg-white dark:bg-[#191919] w-full">
      <header className="flex items-center gap-[8px] h-[48px] px-[24px] pr-[16px] border-b border-[#d9d9d9] dark:border-[#3D3D3D] flex-shrink-0">
        <div className="flex items-center gap-[12px] flex-1">
          <h1 className="text-[20px] font-[500] leading-[30px] tracking-[-0.38px] text-[#202020] dark:text-[#EEEEEE]">
            Members
          </h1>
        </div>
      </header>

      <div className="flex flex-col flex-1 h-[calc(100vh-48px)] overflow-y-auto overflow-x-hidden w-full">
        <div className="flex flex-col w-full max-w-[672px] px-[24px] pt-[24px] pb-[40px] flex-shrink-0">
          <div className="flex items-center justify-between gap-[16px] w-full min-h-[36px] mb-[32px]">
            <span className="text-[13px] font-[400] leading-[18px] tracking-[-0.026px] text-[#626262] dark:text-[#B4B4B4]">
              Invite a member to start collaborating on Acme. Manage members and
              set their access level.{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-[rgba(0,0,0,0.15)] dark:decoration-[#6E6E6E]"
              >
                Learn more about inviting members
              </a>
            </span>
          </div>

          <div className="flex flex-col w-full">
            <header className="flex items-center justify-between w-full h-[28px] mb-[16px]">
              <div className="flex items-center h-[28px] min-h-[28px] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] focus-within:border-[#202020] dark:focus-within:border-[#EEEEEE] transition-all overflow-hidden">
                <span className="flex items-center justify-center w-[30px] min-w-[30px] h-[16px] ml-[8px]">
                  <Search
                    className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4]"
                    strokeWidth={2}
                  />
                </span>
                <input
                  type="text"
                  placeholder="Type to search"
                  autoComplete="off"
                  autoCapitalize="none"
                  autoCorrect="off"
                  spellCheck="false"
                  className="w-[166px] h-full px-[10px] text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE] bg-transparent outline-none placeholder:text-[#BBBBBB] dark:placeholder:text-[#B4B4B4]"
                />
              </div>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <button
                    type="button"
                    className="flex items-center justify-center h-[28px] px-[10px] py-[6px] text-[13px] font-[500] leading-[19px] text-[#fdfdfd] dark:text-[#191919] bg-[#202020] dark:bg-[#EEEEEE] hover:bg-[#3D3D3D] dark:hover:bg-[#D4D4D4] rounded-full whitespace-nowrap transition-colors"
                  >
                    Invite members
                  </button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Overlay className="fixed inset-0 bg-[#00000033] z-[100001] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                  <Dialog.Content
                    className="fixed left-[50%] top-[50%] z-[100001] flex flex-col w-[384px] max-h-[981px] p-[16px] bg-white dark:bg-[#222222] border border-[#202020] dark:border-[#3D3D3D] shadow-[0_0_1px_0_rgba(24,26,27,0.04),0_3px_6px_0_rgba(24,26,27,0.08),0_9px_24px_0_rgba(24,26,27,0.16),0_0_0_1px_rgba(141,141,141,0.24)] dark:shadow-[0_0_1px_0_rgba(0,0,0,0.04),0_3px_6px_0_rgba(0,0,0,0.08),0_9px_24px_0_rgba(0,0,0,0.24),0_0_0_1px_rgba(200,200,200,0.24)] translate-x-[-50%] translate-y-[-50%] overflow-y-auto overflow-x-hidden duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
                    style={{ borderRadius: "4px" }}
                  >
                    <form className="flex flex-col gap-[16px] w-[352px] flex-shrink-0">
                      <Dialog.Title className="text-[20px] font-[500] leading-[30px] tracking-[-0.38px] text-[#202020] dark:text-[#EEEEEE] font-['Uxum_Grotesque',sans-serif]">
                        Invite to your workspace
                      </Dialog.Title>
                      <Dialog.Description className="sr-only">
                        Add a new member to your workspace
                      </Dialog.Description>

                      <div className="flex flex-col gap-[4px] h-[48px]">
                        <label className="text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4]">
                          Email
                        </label>
                        <div className="flex items-center h-[28px] min-h-[28px] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] focus-within:border-[#202020] dark:focus-within:border-[#EEEEEE] transition-all overflow-hidden">
                          <input
                            type="email"
                            placeholder="name@company.com"
                            name="email"
                            autoComplete="off"
                            autoCapitalize="none"
                            autoCorrect="off"
                            spellCheck="false"
                            className="w-full h-full px-[10px] text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE] bg-transparent outline-none placeholder:text-[#BBBBBB] dark:placeholder:text-[#B4B4B4]"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-[4px] h-[48px]">
                        <label className="text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4]">
                          Invite as
                        </label>
                        <Select.Root defaultValue="admin">
                          <Select.Trigger className="flex items-center justify-between w-full h-[28px] px-[10px] py-[6px] text-[13px] font-[400] leading-[19px] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#222222] border border-[#bbbbbb] dark:border-[#606060] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] outline-none focus:border-[#202020] dark:focus:border-[#EEEEEE]">
                            <Select.Value />
                            <Select.Icon>
                              <ChevronDown
                                className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4]"
                                strokeWidth={2}
                              />
                            </Select.Icon>
                          </Select.Trigger>
                          <Select.Portal>
                            <Select.Content
                              position="popper"
                              className="z-[100002] overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 w-[var(--radix-select-trigger-width)]"
                            >
                              <Select.Viewport className="flex flex-col p-[4px] bg-white dark:bg-[#222222] border border-[#bbbbbb] dark:border-[#606060] rounded-none shadow-[0_4px_12px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
                                <Select.Item
                                  value="admin"
                                  className="flex items-center justify-between w-full px-[8px] py-[6px] text-[#202020] dark:text-[#EEEEEE] rounded-none cursor-pointer outline-none data-[highlighted]:bg-[#F3F4F6] dark:data-[highlighted]:bg-[#333333]"
                                >
                                  <div className="flex flex-col gap-[2px] pointer-events-none">
                                    <span className="text-[14px] font-[500] leading-[20px]">
                                      <Select.ItemText>Admin</Select.ItemText>
                                    </span>
                                    <span className="text-[13px] font-[400] leading-[18px] text-[#626262] dark:text-[#B4B4B4]">
                                      Can manage billing information and workspace settings
                                    </span>
                                  </div>
                                  <Select.ItemIndicator className="flex items-center justify-center w-[16px] h-[16px] mr-[8px]">
                                    <Check className="w-[16px] h-[16px] text-[#202020] dark:text-[#EEEEEE]" strokeWidth={2} />
                                  </Select.ItemIndicator>
                                </Select.Item>
                                <Select.Item
                                  value="member"
                                  className="flex items-center justify-between w-full px-[8px] py-[6px] text-[#202020] dark:text-[#EEEEEE] rounded-none cursor-pointer outline-none data-[highlighted]:bg-[#F3F4F6] dark:data-[highlighted]:bg-[#333333]"
                                >
                                  <div className="flex flex-col gap-[2px] pointer-events-none">
                                    <span className="text-[14px] font-[500] leading-[20px]">
                                      <Select.ItemText>Member</Select.ItemText>
                                    </span>
                                    <span className="text-[13px] font-[400] leading-[18px] text-[#626262] dark:text-[#B4B4B4]">
                                      Can’t manage billing and workspace settings
                                    </span>
                                  </div>
                                  <Select.ItemIndicator className="flex items-center justify-center w-[16px] h-[16px] mr-[8px]">
                                    <Check className="w-[16px] h-[16px] text-[#202020] dark:text-[#EEEEEE]" strokeWidth={2} />
                                  </Select.ItemIndicator>
                                </Select.Item>
                              </Select.Viewport>
                            </Select.Content>
                          </Select.Portal>
                        </Select.Root>
                      </div>

                      <div className="flex items-center justify-between gap-[8px] w-[calc(100%+32px)] h-[53px] mt-[24px] px-[16px] py-[12px] bg-white dark:bg-[#222222] border-t border-[#d9d9d9] dark:border-[#3D3D3D] -mx-[16px] -mb-[16px] sticky bottom-[-16px]">
                        <div className="flex items-center gap-[8px]" />
                        <div className="flex items-center gap-[8px]">
                          <Dialog.Close asChild>
                            <button
                              type="button"
                              className="flex items-center justify-center h-[28px] px-[10px] py-[6px] text-[13px] font-[500] leading-[19px] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#222222] border border-[#bbbbbb] dark:border-[#606060] shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-colors rounded-full"
                            >
                              Cancel
                            </button>
                          </Dialog.Close>
                          <button
                            type="submit"
                            className="flex items-center justify-center h-[28px] px-[10px] py-[6px] text-[13px] font-[500] leading-[19px] text-[#fdfdfd] dark:text-[#191919] bg-[#202020] dark:bg-[#EEEEEE] border border-transparent hover:bg-[#3D3D3D] dark:hover:bg-[#D4D4D4] transition-colors rounded-full"
                          >
                            Send invite
                          </button>
                        </div>
                      </div>
                    </form>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
            </header>

            <span className="text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4] mb-[4px]">
              3 members
            </span>

            <ul className="flex flex-col w-auto -mx-[24px]">
              {/* Member 1: Admin */}
              <li className="flex items-center gap-[12px] w-full min-h-[70px] px-[24px] py-[16px] border-b border-transparent hover:bg-[#F9F9F9] dark:hover:bg-[#1A1A1A] transition-colors group">
                <div className="flex items-center justify-center w-[32px] h-[32px] flex-shrink-0">
                  <span className="flex items-center justify-center w-[32px] h-[32px] text-[14px] font-[400] leading-[18px] tracking-[-0.026px] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#191919] border border-[#202020] dark:border-[#EEEEEE] rounded-full overflow-hidden">
                    A
                  </span>
                </div>
                <div className="flex flex-col gap-[2px] flex-1">
                  <span className="text-[13px] font-[500] leading-[18px] tracking-[-0.026px] text-[#202020] dark:text-[#EEEEEE]">
                    John Doe{" "}
                    <span className="font-[400] text-[#626262] dark:text-[#B4B4B4]">
                      (You)
                    </span>
                  </span>
                  <span className="text-[13px] font-[400] leading-[18px] tracking-[-0.026px] text-[#626262] dark:text-[#B4B4B4] truncate">
                    john@acme.com ·{" "}
                    <span className="text-[#626262] dark:text-[#B4B4B4]">
                      Paid seat
                    </span>
                  </span>
                </div>
                <div className="flex items-start w-[144px] h-[28px] flex-shrink-0">
                  <div className="flex items-center gap-[4px] w-full h-[28px]">
                    <button className="flex items-center justify-between w-[77px] h-[28px] px-[10px] py-[6px] text-[13px] font-[400] leading-[19px] text-[#626262] dark:text-[#B4B4B4] hover:bg-[#EEEEEE] dark:hover:bg-[#333333] rounded-full transition-colors whitespace-nowrap">
                      Admin
                      <span className="flex items-center justify-center w-[16px] h-[16px] ml-[2px]">
                        <ChevronDown
                          className="w-[16px] h-[16px]"
                          strokeWidth={2}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </li>

              {/* Member 2: Member */}
              <li className="flex items-center gap-[12px] w-full min-h-[70px] px-[24px] py-[16px] border-b border-transparent hover:bg-[#F9F9F9] dark:hover:bg-[#1A1A1A] transition-colors group">
                <div className="flex items-center justify-center w-[32px] h-[32px] flex-shrink-0">
                  <span className="flex items-center justify-center w-[32px] h-[32px] text-[14px] font-[400] leading-[18px] tracking-[-0.026px] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#191919] border border-[#202020] dark:border-[#EEEEEE] rounded-full overflow-hidden">
                    J
                  </span>
                </div>
                <div className="flex flex-col gap-[2px] flex-1">
                  <span className="text-[13px] font-[500] leading-[18px] tracking-[-0.026px] text-[#202020] dark:text-[#EEEEEE]">
                    Jane Smith
                  </span>
                  <span className="text-[13px] font-[400] leading-[18px] tracking-[-0.026px] text-[#626262] dark:text-[#B4B4B4] truncate">
                    jane@acme.com ·{" "}
                    <span className="text-[#626262] dark:text-[#B4B4B4]">
                      Paid seat
                    </span>
                  </span>
                </div>
                <div className="flex items-start w-[144px] h-[28px] flex-shrink-0">
                  <div className="flex items-center gap-[4px] w-full h-[28px]">
                    <button className="flex items-center justify-between w-[89px] h-[28px] px-[10px] py-[6px] text-[13px] font-[400] leading-[19px] text-[#626262] dark:text-[#B4B4B4] hover:bg-[#EEEEEE] dark:hover:bg-[#333333] rounded-full transition-colors whitespace-nowrap">
                      Member
                      <span className="flex items-center justify-center w-[16px] h-[16px] ml-[2px]">
                        <ChevronDown
                          className="w-[16px] h-[16px]"
                          strokeWidth={2}
                        />
                      </span>
                    </button>
                  </div>
                </div>
              </li>

              {/* Member 3: Member */}
              <li className="flex items-center gap-[12px] w-full min-h-[70px] px-[24px] py-[16px] border-b border-transparent hover:bg-[#F9F9F9] dark:hover:bg-[#1A1A1A] transition-colors group">
                <div className="flex items-center justify-center w-[32px] h-[32px] flex-shrink-0">
                  <span className="flex items-center justify-center w-[32px] h-[32px] text-[14px] font-[400] leading-[18px] tracking-[-0.026px] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#191919] border border-[#202020] dark:border-[#EEEEEE] rounded-full overflow-hidden">
                    J
                  </span>
                </div>
                <div className="flex flex-col gap-[2px] flex-1">
                  <span className="text-[13px] font-[500] leading-[18px] tracking-[-0.026px] text-[#202020] dark:text-[#EEEEEE]">
                    mike@acme.com
                  </span>
                  <span className="text-[13px] font-[400] leading-[18px] tracking-[-0.026px] text-[#626262] dark:text-[#B4B4B4] truncate">
                    mike@acme.com ·{" "}
                    <span className="text-[#626262] dark:text-[#B4B4B4]">
                      Paid seat
                    </span>
                  </span>
                </div>
                <div className="flex items-start w-[144px] h-[28px] flex-shrink-0">
                  <div className="flex items-center gap-[4px] w-full h-[28px]">
                    <button className="flex items-center justify-between w-[89px] h-[28px] px-[10px] py-[6px] text-[13px] font-[400] leading-[19px] text-[#626262] dark:text-[#B4B4B4] hover:bg-[#EEEEEE] dark:hover:bg-[#333333] rounded-full transition-colors whitespace-nowrap">
                      Member
                      <span className="flex items-center justify-center w-[16px] h-[16px] ml-[2px]">
                        <ChevronDown
                          className="w-[16px] h-[16px]"
                          strokeWidth={2}
                        />
                      </span>
                    </button>
                    <span className="flex items-center justify-center w-[14px] h-[28px] ml-auto text-[#626262] dark:text-[#B4B4B4]">
                      <Check className="w-[14px] h-[14px]" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
