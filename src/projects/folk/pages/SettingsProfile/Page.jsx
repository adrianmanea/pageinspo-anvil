import React, { useState, useEffect } from "react";
import { Plus, ChevronDown } from "lucide-react";
import * as Select from "@radix-ui/react-select";

const themeOptions = [
  { value: "system", label: "System preference" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
];

export default function Page() {
  const [selectedTheme, setSelectedTheme] = useState("system");

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
    <div className="flex flex-col flex-1 w-full bg-white dark:bg-[#191919] text-[#202020] dark:text-[#EEEEEE] font-sans h-full min-h-screen">
      <header className="flex items-center gap-[8px] h-[48px] px-[24px] pr-[16px] border-b border-[#D9D9D9] dark:border-[#3D3D3D] flex-shrink-0">
        <div className="flex items-center gap-[12px] flex-1">
          <h1 className="text-[20px] font-[500] leading-[30px] tracking-[-0.38px] text-[#202020] dark:text-[#EEEEEE]">
            Profile
          </h1>
        </div>
      </header>
      <div className="flex-1 w-full overflow-y-auto">
        {/* Trial Banner */}
        <div className="flex flex-col sm:flex-row sm:items-center w-full px-[12px] py-[8px] gap-[12px] sm:gap-[16px] bg-[rgba(0,0,0,0.055)] dark:bg-[rgba(255,255,255,0.063)]">
          <div className="flex-1 w-full text-left">
            <span className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
              Free trial ends in 6 days, upgrade to keep using Acme.
            </span>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center w-full sm:w-auto h-[28px] px-[10px] text-[13px] font-[500] text-[#FDFDFD] dark:text-[#191919] bg-[#202020] dark:bg-[#EEEEEE] rounded-full border border-transparent whitespace-nowrap hover:bg-[#3D3D3D] dark:hover:bg-[#D4D4D4] transition-colors"
          >
            Upgrade to Premium
          </a>
        </div>

        <div className="p-[16px] sm:p-[24px] sm:pb-[40px] max-w-[672px] w-full">
          {/* Header Title */}
          <div className="flex items-center justify-between mb-[24px]">
            <span className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
              Manage your personal information
            </span>
          </div>

          {/* Form Section */}
          <section className="w-full">
            <div className="flex flex-col gap-[32px] mb-[24px]">
              {/* Avatar Upload */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[24px]">
                <div className="relative w-[56px] h-[56px] bg-[#E1E1E1] dark:bg-[#353535] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                  <input
                    id="avatar-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                  />
                  <label
                    htmlFor="avatar-upload"
                    className="cursor-pointer w-full h-full flex items-center justify-center relative group"
                  >
                    <div className="absolute inset-0 bg-[#202020] dark:bg-[#EEEEEE] opacity-0 group-hover:opacity-[0.15] transition-opacity" />
                    <Plus className="w-[28px] h-[28px] text-[#626262] dark:text-[#B4B4B4]" />
                  </label>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label
                    htmlFor="avatar-upload"
                    className="inline-flex items-center justify-center h-[28px] px-[10px] w-fit text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] cursor-pointer hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-colors"
                  >
                    Upload picture
                  </label>
                  <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                    JPG, GIF or PNG. Recommended size is 256x256px
                  </span>
                </div>
              </div>

              {/* First Name Input */}
              <div className="flex flex-col gap-[4px] max-w-[448px] w-full">
                <label
                  htmlFor="firstName"
                  className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]"
                >
                  First name
                </label>
                <div className="flex items-center h-[28px] w-full bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] overflow-hidden focus-within:border-[#202020] dark:focus-within:border-[#EEEEEE] transition-all">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="w-full h-full px-[10px] text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE] bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Last Name Input */}
              <div className="flex flex-col gap-[4px] max-w-[448px] w-full">
                <label
                  htmlFor="lastName"
                  className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]"
                >
                  Last name
                </label>
                <div className="flex items-center h-[28px] w-full bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] overflow-hidden focus-within:border-[#202020] dark:focus-within:border-[#EEEEEE] transition-all">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="w-full h-full px-[10px] text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE] bg-transparent outline-none"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-[4px] w-full">
                <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                  Email address
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center gap-[8px] sm:gap-[12px] min-h-[28px] items-start">
                  <span className="text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE] break-all">
                    john@acme.com
                  </span>
                  <button className="inline-flex items-center justify-center flex-shrink-0 h-[28px] px-[10px] text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-colors">
                    Change email
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* App Settings Section */}
          <section className="w-full mt-[24px]">
            <header className="flex items-center py-[16px] border-b border-[#D9D9D9] dark:border-[#3D3D3D]">
              <div className="flex flex-col gap-[2px]">
                <h2 className="text-[20px] font-[500] text-[#202020] dark:text-[#EEEEEE] tracking-[-0.38px]">
                  App settings
                </h2>
                <p className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
                  Manage your preferences for the Acme app
                </p>
              </div>
            </header>

            <ul className="flex flex-col w-full">
              {/* Desktop App Link Setting */}
              <li className="flex sm:items-center py-[16px] gap-[24px]">
                <div className="flex w-full items-start justify-between gap-[16px] flex-col sm:flex-row sm:items-center">
                  <div className="flex flex-col w-full">
                    <span className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
                      Open links in desktop app
                    </span>
                    <p className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
                      You must have the{" "}
                      <a
                        href="https://acme.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-black/15 dark:decoration-[#6E6E6E] hover:decoration-black/40 dark:hover:decoration-[#999999] transition-colors mx-[4px]"
                      >
                        MacOS or Windows app
                      </a>{" "}
                      installed
                    </p>
                  </div>
                  {/* Switch Toggle */}
                  <div className="flex items-center justify-end flex-shrink-0 h-full py-[4px]">
                    <button
                      role="switch"
                      aria-checked="false"
                      className="relative w-[32px] h-[20px] bg-[#BBBBBB] dark:bg-[#353535] rounded-full p-[2px] shadow-[inset_0_0_0_1px_#BBBBBB] dark:shadow-[inset_0_0_0_1px_#606060] transition-colors"
                    >
                      <span className="block w-[14px] h-[14px] bg-white rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] transition-transform translate-x-[1px]" />
                    </button>
                  </div>
                </div>
              </li>

              {/* Appearance Setting */}
              <li className="flex sm:items-center py-[16px] gap-[24px] border-t border-[#E1E1E1] dark:border-[#3D3D3D]">
                <div className="flex w-full sm:items-center items-start justify-between flex-col sm:flex-row gap-[16px] sm:gap-[8px]">
                  <div className="flex flex-col w-full">
                    <span className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
                      Appearance
                    </span>
                    <p className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
                      Customize the look of Acme on your device.
                    </p>
                  </div>
                  <div className="flex items-center justify-end flex-shrink-0">
                    <Select.Root
                      value={selectedTheme}
                      onValueChange={setSelectedTheme}
                    >
                      <Select.Trigger className="inline-flex items-center justify-between h-[28px] px-[10px] gap-[4px] text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-colors outline-none">
                        <Select.Value />
                        <Select.Icon>
                          <ChevronDown className="w-[16px] h-[16px] text-[#202020] dark:text-[#EEEEEE] -mr-[2px]" />
                        </Select.Icon>
                      </Select.Trigger>

                      <Select.Portal>
                        <Select.Content
                          position="popper"
                          sideOffset={8}
                          align="start"
                          className="z-[100000] w-[151px] bg-white dark:bg-[#222222] py-[8px] shadow-[0_0_1px_0_rgba(24,26,27,0.04),0_3px_6px_0_rgba(24,26,27,0.08),0_9px_24px_0_rgba(24,26,27,0.16)] dark:shadow-[0_0_1px_0_rgba(0,0,0,0.04),0_3px_6px_0_rgba(0,0,0,0.08),0_9px_24px_0_rgba(0,0,0,0.24)] border border-[rgba(141,141,141,0.24)] dark:border-[rgba(200,200,200,0.24)]"
                        >
                          <Select.Viewport>
                            {themeOptions.map((option) => (
                              <Select.Item
                                key={option.value}
                                value={option.value}
                                className="flex items-center w-[calc(100%-16px)] h-[28px] mx-[8px] px-[8px] py-[4px] text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] whitespace-nowrap border border-transparent hover:bg-[rgba(0,0,0,0.055)] dark:hover:bg-[rgba(255,255,255,0.063)] rounded-[4px] transition-colors outline-none data-[highlighted]:bg-[rgba(0,0,0,0.055)] dark:data-[highlighted]:bg-[rgba(255,255,255,0.063)] cursor-default"
                              >
                                <Select.ItemText>
                                  <span className="flex-1 text-left">
                                    {option.label}
                                  </span>
                                </Select.ItemText>
                              </Select.Item>
                            ))}
                          </Select.Viewport>
                        </Select.Content>
                      </Select.Portal>
                    </Select.Root>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
