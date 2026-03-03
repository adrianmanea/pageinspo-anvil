import React, { useState, useEffect } from "react";
import { Mail } from "lucide-react";

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
    <main className="flex flex-1 flex-col overflow-hidden bg-white dark:bg-[#1a1d21] h-full w-full font-sans text-[#1F2937] dark:text-[#EEEFF1]">
      {/* Scrollable Content Area */}
      <div className="flex flex-1 flex-col items-center overflow-y-auto px-[24px]">
        <div className="flex w-full max-w-[768px] flex-col gap-[40px] pb-[72px] pt-[72px]">
          {/* Page Header */}
          <div className="flex flex-col gap-[2px] mb-[40px]">
            <div className="flex items-center gap-[8px]">
              <h1 className="text-[24px] font-[600] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.48px] leading-[28px]">
                Email and calendar accounts
              </h1>
            </div>
            <p className="text-[14px] text-[#505154] dark:text-[rgba(255,255,255,0.55)] leading-[20px] tracking-[-0.14px]">
              Manage and sync your email and calendar accounts to stay organized
            </p>
          </div>

          <div className="w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]" />

          {/* Connected Accounts Section */}
          <section className="flex flex-col gap-[16px]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[16px] font-[600] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.32px] leading-[20px] mb-[4px]">
                  Connected accounts
                </h2>
                <p className="text-[14px] text-[#505154] dark:text-[rgba(255,255,255,0.55)] leading-[20px] tracking-[-0.14px]">
                  We take your privacy very seriously. Read our{" "}
                  <a
                    href="#"
                    className="underline decoration-[#0000001a] dark:decoration-[#ffffff26] hover:decoration-[#0000004d] dark:hover:decoration-[#ffffff80] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>

            {/* Account Connect Buttons */}
            <div className="p-[8px] border border-dashed border-[#E6E7EA] dark:border-[#2F3033] rounded-[12px] bg-[#FBFBFB] dark:bg-[#15181C] flex flex-col sm:flex-row items-center w-full gap-[8px]">
              <button className="flex-1 h-[32px] flex items-center justify-center gap-[6px] bg-white dark:bg-[#202225] text-[#242529] dark:text-[#EEEFF1] text-[14px] font-[500] rounded-[9px] shadow-[0px_0px_2px_0px_rgba(28,40,64,0.18),0px_1px_3px_0px_rgba(24,41,75,0.04)] dark:shadow-[0px_0px_2px_0px_rgba(0,0,0,0.4),0px_1px_3px_0px_rgba(0,0,0,0.4)] hover:bg-[#FBFBFB] dark:hover:bg-[#27282B] transition-colors">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-[14px]">Connect Google Account</span>
              </button>
              <button className="flex-1 h-[32px] flex items-center justify-center gap-[6px] bg-white dark:bg-[#202225] text-[#242529] dark:text-[#EEEFF1] text-[14px] font-[500] rounded-[9px] shadow-[0px_0px_2px_0px_rgba(28,40,64,0.18),0px_1px_3px_0px_rgba(24,41,75,0.04)] dark:shadow-[0px_0px_2px_0px_rgba(0,0,0,0.4),0px_1px_3px_0px_rgba(0,0,0,0.4)] hover:bg-[#FBFBFB] dark:hover:bg-[#27282B] transition-colors">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="#f35325" d="M1 1h10v10H1z" />
                  <path fill="#81bc06" d="M12 1h10v10H12z" />
                  <path fill="#05a6f0" d="M1 12h10v10H1z" />
                  <path fill="#ffba08" d="M12 12h10v10H12z" />
                </svg>
                <span className="text-[14px]">Connect Microsoft Account</span>
              </button>
            </div>
          </section>

          {/* Forwarding Address Section */}
          <section className="flex flex-col gap-[16px]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[16px] font-[600] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.32px] leading-[20px] mb-[4px]">
                  Forwarding address
                </h2>
                <p className="text-[14px] text-[#505154] dark:text-[rgba(255,255,255,0.55)] leading-[20px] tracking-[-0.14px]">
                  Learn more about{" "}
                  <a
                    href="#"
                    className="underline decoration-[#0000001a] dark:decoration-[#ffffff26] hover:decoration-[#0000004d] dark:hover:decoration-[#ffffff80] transition-colors"
                  >
                    forwarding email
                  </a>
                </p>
              </div>
            </div>

            {/* Email Address Display */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between min-h-[56px] p-[12px] sm:px-[8px] sm:pr-[16px] bg-white dark:bg-[#1A1D21] rounded-[12px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] gap-[12px] sm:gap-0 overflow-hidden">
              <div className="flex flex-row items-center gap-[12px]">
                <div className="w-[40px] h-[40px] flex items-center justify-center bg-black dark:bg-[#000000] border border-black dark:border-black rounded-[8px] text-white dark:text-[#9E9EFF]">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1]">
                    acmessrl@attio.email
                  </span>
                  <span className="text-[12px] font-[500] text-[#505154] dark:text-[#A2A4A7]">
                    Email
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-[12px]">
                {/* Status Badge */}
                <div className="flex items-center gap-[4px] px-[6px] py-[2px] bg-[#F8F9FA] dark:bg-[#2F3033] border border-[#EEEFF1] dark:border-[#46474A] rounded-[6px]">
                  <div className="w-[6px] h-[6px] rounded-full bg-[#16A34A] dark:bg-[#9E9EFF]"></div>
                  {/* Note: The "In Sync" badge icon in the capture (line 141) has color rgb(158, 158, 255) in dark mode, which is #9E9EFF. I am simulating the dot here but the capture has an icon. I will use the capture color for the dot and text. Capture says text color is rgb(205, 207, 209) which is #CDCFD1 for text "In Sync" line 145 */}
                  <span className="text-[12px] font-[500] text-[#505154] dark:text-[#CDCFD1]">
                    In Sync
                  </span>
                </div>

                {/* Menu Button */}
                <button className="h-[28px] w-[28px] flex items-center justify-center rounded-[8px] hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 3.5C8.82843 3.5 9.5 2.82843 9.5 2C9.5 1.17157 8.82843 0.5 8 0.5C7.17157 0.5 6.5 1.17157 6.5 2C6.5 2.82843 7.17157 3.5 8 3.5Z"
                      fill="currentColor"
                      className="text-[#242529] dark:text-[#A2A4A7]"
                    />
                    <path
                      d="M8 9.5C8.82843 9.5 9.5 8.82843 9.5 8C9.5 7.17157 8.82843 6.5 8 6.5C7.17157 6.5 6.5 7.17157 6.5 8C6.5 8.82843 7.17157 9.5 8 9.5Z"
                      fill="currentColor"
                      className="text-[#242529] dark:text-[#A2A4A7]"
                    />
                    <path
                      d="M8 15.5C8.82843 15.5 9.5 14.8284 9.5 14C9.5 13.1716 8.82843 12.5 8 12.5C7.17157 12.5 6.5 13.1716 6.5 14C6.5 14.8284 7.17157 15.5 8 15.5Z"
                      fill="currentColor"
                      className="text-[#242529] dark:text-[#A2A4A7]"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* Watermark Section */}
          <section className="flex flex-col gap-[16px]">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-[16px] font-[600] text-[#242529] dark:text-[#EEEFF1] tracking-[-0.32px] leading-[20px] mb-[4px]">
                  Attio watermark
                </h2>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-[12px] sm:p-[10px] sm:px-[16px] bg-white dark:bg-[#1A1D21] rounded-[12px] shadow-[rgb(238,239,241)_0px_0px_0px_1px_inset] dark:shadow-[rgb(39,40,43)_0px_0px_0px_1px_inset] gap-[12px]">
              <div className="flex flex-col">
                <span className="text-[14px] font-[500] text-[#242529] dark:text-[#EEEFF1] leading-[20px] tracking-[-0.14px]">
                  Enable Attio watermark
                </span>
                <span className="text-[12px] font-[500] text-[#505154] dark:text-[rgba(255,255,255,0.55)] leading-[16px] tracking-[-0.12px]">
                  Automatically add “Sent with Attio” to the end of emails sent
                  from Attio.
                </span>
              </div>

              {/* Toggle Switch */}
              <button className="w-[24px] h-[16px] bg-[#266DF0] rounded-[16px] relative transition-colors focus:outline-none focus:ring-2 focus:ring-[#266DF0] focus:ring-offset-2 dark:focus:ring-offset-[#15181C]">
                <span className="absolute left-[9px] top-[1px] w-[14px] h-[14px] bg-white rounded-full shadow-sm transition-transform"></span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
