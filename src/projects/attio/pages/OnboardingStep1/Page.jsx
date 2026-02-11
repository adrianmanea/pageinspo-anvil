import React, { useState, useEffect } from "react";
import { Upload } from "lucide-react";

export default function OnboardingStep1Page() {
  const [subscribeToNews, setSubscribeToNews] = useState(false);
  
  // Use vanilla URLSearchParams to avoid React Router dependency for standalone build
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
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
    <div
      className="min-h-screen flex flex-col items-center bg-white dark:bg-[#1b1d21] pt-[32px] pb-[24px] gap-[24px] px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[#E6E7EA] dark:bg-[#313337] z-50">
        <div
          className="h-[2px] bg-[#232529] dark:bg-[#EEEFF1] rounded-[4px]"
          style={{ width: "12.5%" }}
        />
      </div>

      {/* Logo */}
      <div className="flex items-center gap-[4px] w-[96px] h-[24px]">
        <a href="/" className="flex items-center justify-center">
          <img
            alt="Grapho logo"
            src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/component-assets/grapho-dark.svg"
            className="w-[96px] h-[24px] dark:hidden"
          />
          <img
            alt="Grapho logo"
            src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/component-assets/grapho-light.svg"
            className="w-[96px] h-[24px] hidden dark:block"
          />
        </a>
      </div>

      {/* Main Card Container */}
      <div className="flex-1 flex items-center justify-center w-full">
        {/* Card */}
        <div className="flex flex-col lg:flex-row w-full max-w-[1130px] lg:h-[692px] border border-[#EEEFF1] dark:border-[#27282B] rounded-[20px] overflow-hidden">
          {/* Left Side - Form */}
          <div className="flex flex-col w-full lg:w-[564px] lg:min-w-[564px] lg:max-w-[564px] h-auto lg:h-[690px]">
            <div className="p-[32px] lg:p-[72px] flex justify-center">
              <div className="flex flex-col items-center gap-[32px] w-full max-w-[420px]">
                {/* Title */}
                <div className="w-full">
                  <h1 className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#232529] dark:text-[#EEEFF1]">
                    Let's get to know you
                  </h1>
                </div>

                {/* Profile Picture Section */}
                <div className="flex items-center gap-[20px] w-full">
                  {/* Avatar Placeholder */}
                  <span className="flex items-center justify-center w-[64px] h-[64px] rounded-full bg-[#266DF0] text-[36px] font-[500] text-[#E5EEFF] uppercase" />

                  {/* Upload Controls */}
                  <div className="flex flex-col items-start gap-[12px]">
                    <div className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1]">
                      Profile picture
                    </div>
                    <div className="flex items-center gap-[12px]">
                      {/* Upload Button */}
                      <button
                        type="button"
                        className="flex items-center justify-center gap-[6px] px-[12px] py-[8px] pl-[10px] bg-white dark:bg-[#1B1D21] rounded-[10px] text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] shadow-[rgba(24,39,75,0.18)_0px_0px_2px_0px,rgba(24,39,75,0.04)_0px_1px_3px_0px] dark:shadow-[rgb(49,51,55)_0px_0px_0px_1px_inset,rgb(0,0,0)_0px_0px_2px_0px,rgba(0,0,0,0.08)_0px_1px_3px_0px]"
                      >
                        <Upload className="w-[14px] h-[14px] text-black dark:text-white" />
                        Upload image
                      </button>
                      {/* Remove Button: disabled state, opacity 0.4 */}
                      <button
                        type="button"
                        disabled
                        className="flex items-center justify-center gap-[6px] px-[12px] py-[8px] bg-white dark:bg-[#1B1D21] rounded-[10px] text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] opacity-40 shadow-[rgba(24,39,75,0.18)_0px_0px_2px_0px,rgba(24,39,75,0.04)_0px_1px_3px_0px] dark:shadow-[rgb(49,51,55)_0px_0px_0px_1px_inset,rgb(0,0,0)_0px_0px_2px_0px,rgba(0,0,0,0.08)_0px_1px_3px_0px]"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="text-[11px] font-[500] leading-[16px] tracking-[-0.22px] text-[#5C5E63] dark:text-[#9FA1A7]">
                      *.png, *.jpeg files up to 10MB at least 400px by 400px
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-[28px] w-full">
                  <div className="flex flex-col gap-[16px]">
                    {/* First Name Field */}
                    <div className="flex flex-col gap-[4px]">
                      <div className="pl-[4px]">
                        <label className="text-[12px] font-[500] leading-[16px] text-[#75777C] dark:text-[#86888D]">
                          First name
                        </label>
                      </div>
                      <div className="flex items-center gap-[6px] w-full h-[34px] min-h-[34px] px-[10px] rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow">
                        <input
                          placeholder="Enter your first name..."
                          name="firstName"
                          className="flex-1 bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] placeholder:text-[#5C5E63] dark:placeholder:text-[#9FA1A7] outline-none"
                        />
                      </div>
                    </div>

                    {/* Last Name Field */}
                    <div className="flex flex-col gap-[4px]">
                      <div className="pl-[4px]">
                        <label className="text-[12px] font-[500] leading-[16px] text-[#75777C] dark:text-[#86888D]">
                          Last name
                        </label>
                      </div>
                      <div className="flex items-center gap-[6px] w-full h-[34px] min-h-[34px] px-[10px] rounded-[10px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] focus-within:shadow-[rgb(38,109,240)_0px_0px_0px_1px_inset,rgba(38,109,240,0.2)_0px_0px_0px_3px] transition-shadow">
                        <input
                          placeholder="Enter your last name..."
                          name="lastName"
                          className="flex-1 bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] placeholder:text-[#5C5E63] dark:placeholder:text-[#9FA1A7] outline-none"
                        />
                      </div>
                    </div>

                    {/* Email Field (Disabled) */}
                    <div className="flex flex-col gap-[4px]">
                      <div className="pl-[4px]">
                        <label className="text-[12px] font-[500] leading-[16px] text-[#75777C] dark:text-[#86888D]">
                          Email
                        </label>
                      </div>
                      <div className="flex items-center gap-[6px] w-full h-[34px] min-h-[34px] px-[10px] rounded-[10px] opacity-40 shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset]">
                        <input
                          disabled
                          value="hello@pageinspo.com"
                          className="flex-1 bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1] outline-none cursor-not-allowed"
                        />
                      </div>
                    </div>

                    {/* Separator + Toggle */}
                    <div className="flex flex-col gap-[16px] mt-[4px]">
                      <span className="w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]" />
                      <div className="flex items-center gap-[4px]">
                        <div className="flex flex-col gap-[4px] flex-1">
                          <div className="text-[12px] font-[500] leading-[16px] text-[#232529] dark:text-[#EEEFF1]">
                            Subscribe to product update emails
                          </div>
                          <div className="text-[11px] font-[500] leading-[16px] tracking-[-0.22px] text-[#5C5E63] dark:text-[#9FA1A7]">
                            Get the latest updates about features and product
                            updates.
                          </div>
                        </div>
                        {/* Toggle Switch */}
                        <button
                          type="button"
                          role="switch"
                          aria-checked={subscribeToNews}
                          onClick={() => setSubscribeToNews(!subscribeToNews)}
                          className={`relative w-[24px] h-[16px] rounded-[16px] ${
                            subscribeToNews
                              ? "bg-[#266DF0]"
                              : "bg-[rgba(0,0,0,0.1)] dark:bg-[rgba(255,255,255,0.1)]"
                          }`}
                        >
                          <span
                            className={`block w-[14px] h-[14px] bg-white dark:bg-[#EEEFF1] rounded-full absolute top-[1px] transition-transform shadow-[rgb(209,211,214)_0px_0px_0px_1px] dark:shadow-[rgb(69,71,74)_0px_0px_0px_1px] ${
                              subscribeToNews
                                ? "translate-x-[8.5px]"
                                : "translate-x-[1.5px]"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Continue Button */}
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-[6px] w-full h-[36px] px-[12px] py-[8px] bg-[#266DF0] rounded-[10px] text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-white shadow-[rgba(35,37,41,0.1)_0px_0px_0px_1px_inset,rgba(38,109,240,0.12)_0px_2px_4px_-2px,rgba(38,109,240,0.08)_0px_3px_6px_-2px] dark:shadow-[rgba(244,245,246,0.1)_0px_0px_0px_1px_inset,rgba(38,109,240,0.12)_0px_2px_4px_-2px,rgba(38,109,240,0.08)_0px_3px_6px_-2px]"
                  >
                    Continue
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Side - App Preview */}
          <div
            className="hidden lg:flex flex-col w-[564px] min-w-[564px] max-w-[564px] h-[690px] bg-white dark:bg-[#1B1D21]"
            style={{
              borderLeft: "1px solid rgba(35, 37, 41, 0.05)",
            }}
          >
            <div className="relative w-full h-full p-[96px_64px] bg-[#FBFBFB] dark:bg-[#202225] overflow-hidden">
              {/* Scaled App Preview Placeholder */}
              <div
                className="origin-top-left"
                style={{
                  transform: "scale(0.555)",
                  width: "1440px",
                  height: "900px",
                }}
              >
                {/* Sidebar Preview */}
                <div className="flex h-full rounded-[12px] overflow-hidden shadow-[rgba(0,0,0,0)_0px_437px_122px_0px,rgba(0,0,0,0.02)_0px_280px_112px_0px,rgba(0,0,0,0.05)_0px_157px_94px_0px,rgba(0,0,0,0.1)_0px_17px_38px_0px]">
                  {/* Sidebar */}
                  <div className="flex flex-col w-[272px] h-full bg-[#FBFBFB] dark:bg-[#17191C] rounded-l-[12px] shadow-[rgb(238,239,241)_1px_0px_0px_0px] dark:shadow-[rgb(39,40,43)_1px_0px_0px_0px]">
                    {/* Workspace Header */}
                    <div className="flex items-center gap-[12px] p-[12px_16px_12px_12px] h-[48px]">
                      <div className="flex items-center justify-center w-[24px] h-[24px] bg-[#FBFBFB] dark:bg-[#202225] border border-dashed border-[rgba(35,37,41,0.06)] dark:border-[rgba(255,255,255,0.06)] rounded-[6px] text-[14px] font-[500] text-[#9FA1A7] dark:text-[#5C5E63] uppercase">
                        G
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <span className="text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#232529] dark:text-[#EEEFF1]">
                          Workspace
                        </span>
                      </div>
                    </div>
                    <span className="w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]" />
                    {/* Search + AI Buttons */}
                    <div className="flex items-center gap-[8px] p-[12px_8px_16px]">
                      <div className="flex items-center gap-[10px] p-[4px] w-[200px] h-[28px] bg-white dark:bg-[#1B1D21] rounded-[8px] shadow-[rgba(24,39,75,0.18)_0px_0px_2px_0px,rgba(24,39,75,0.04)_0px_1px_3px_0px] dark:shadow-[rgb(49,51,55)_0px_0px_0px_1px_inset,rgb(0,0,0)_0px_0px_2px_0px,rgba(0,0,0,0.08)_0px_1px_3px_0px]">
                        <span className="w-[100px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                      </div>
                    </div>
                    {/* Nav Items Skeleton */}
                    <div className="flex flex-col gap-[4px] flex-1">
                      {[85, 63, 47, 54].map((w, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-[6px] px-[12px] py-[6px]"
                        >
                          <span className="w-[14px] h-[14px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[2px]" />
                          <span
                            className="h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]"
                            style={{ width: `${w}px` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Main Content Area */}
                  <div className="flex-1 flex flex-col bg-white dark:bg-[#1B1D21] rounded-r-[12px]">
                    {/* Header */}
                    <div className="flex items-center justify-between px-[16px] py-[12px] h-[48px]">
                      <div className="flex items-center gap-[4px]">
                        <div className="flex items-center justify-center w-[14px] h-[14px] bg-[#266DF0] rounded-[30%]" />
                        <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#232529] dark:text-[#EEEFF1]">
                          People
                        </span>
                      </div>
                    </div>
                    <span className="w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]" />
                    {/* Toolbar Skeleton */}
                    <div className="flex items-center justify-between p-[8px_12px] h-[48px]">
                      <div className="flex items-center gap-[12px]">
                        <div className="flex items-center w-[150px] h-[32px] bg-white dark:bg-[#1B1D21] rounded-[8px] shadow-[rgba(24,39,75,0.18)_0px_0px_2px_0px,rgba(24,39,75,0.04)_0px_1px_3px_0px] dark:shadow-[rgb(49,51,55)_0px_0px_0px_1px_inset]" />
                        <div className="flex items-center w-[130px] h-[32px] bg-white dark:bg-[#1B1D21] rounded-[8px] shadow-[rgba(24,39,75,0.18)_0px_0px_2px_0px,rgba(24,39,75,0.04)_0px_1px_3px_0px] dark:shadow-[rgb(49,51,55)_0px_0px_0px_1px_inset]" />
                      </div>
                      <div className="flex items-center gap-[12px]">
                        <div className="flex items-center w-[128px] h-[32px] bg-white dark:bg-[#1B1D21] rounded-[8px] shadow-[rgba(24,39,75,0.18)_0px_0px_2px_0px,rgba(24,39,75,0.04)_0px_1px_3px_0px] dark:shadow-[rgb(49,51,55)_0px_0px_0px_1px_inset]" />
                        <div className="flex items-center w-[134px] h-[32px] bg-[#266DF0] rounded-[8px]" />
                      </div>
                    </div>
                    <span className="w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]" />
                    {/* Table Skeleton */}
                    <div className="flex-1 p-[16px]">
                      <div className="flex flex-col gap-[8px]">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-[12px] h-[32px]"
                          >
                            <span className="w-[16px] h-[16px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                            <span className="w-[120px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                            <span className="w-[80px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                            <span className="w-[60px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
