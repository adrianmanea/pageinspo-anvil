import React, { useState, useEffect } from "react";
import { Bell, Mail } from "lucide-react";

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
    <div className="flex flex-col flex-1 w-full bg-white dark:bg-[#191919] text-[#202020] dark:text-[#EEEEEE] font-sans min-h-screen">
      <header className="flex items-center gap-[8px] h-[48px] px-[24px] pr-[16px] border-b border-[#D9D9D9] dark:border-[#3D3D3D] flex-shrink-0">
        <div className="flex items-center gap-[12px] flex-1">
          <h1 className="text-[20px] font-[500] leading-[30px] tracking-[-0.38px] text-[#202020] dark:text-[#EEEEEE]">
            Notifications
          </h1>
        </div>
      </header>
      <div className="flex-1 w-full overflow-y-auto">
        {/* Main Content Area */}
        <div className="w-full max-w-[672px] px-[16px] sm:px-[24px] pt-[24px] pb-[40px] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between gap-[16px]">
            <span className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
              Choose where and when you'll be notified
            </span>
          </div>

          {/* Section: Notify me on */}
          <section className="mt-[24px]">
            <header className="flex items-center gap-[12px] py-[16px]">
              <span className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
                Notify me on
              </span>
            </header>

            <div className="flex flex-col gap-[20px] py-[16px]">
              {/* Inbox Notice */}
              <label className="flex items-center gap-[16px]">
                <Bell className="w-[24px] h-[24px] text-[#626262] dark:text-[#B4B4B4] flex-shrink-0" />
                <div className="flex flex-col flex-1">
                  <span className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
                    Inbox
                  </span>
                  <span className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
                    You'll always receive your notification in your Acme inbox
                  </span>
                </div>
              </label>

              {/* Mail Toggle */}
              <label className="flex items-center gap-[16px] cursor-pointer">
                <Mail className="w-[24px] h-[24px] text-[#626262] dark:text-[#B4B4B4] flex-shrink-0" />
                <div className="flex flex-col flex-1">
                  <span className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
                    Mail
                  </span>
                  <span className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
                    Receive my notifications by email
                  </span>
                </div>
                <button
                  type="button"
                  role="switch"
                  aria-checked="true"
                  className="relative flex-shrink-0 w-[28px] h-[16px] box-content p-[2px] bg-[#BBBBBB] dark:bg-[#353535] rounded-full shadow-[inset_0_0_0_1px_#BBBBBB] dark:shadow-[inset_0_0_0_1px_#606060] overflow-hidden"
                >
                  <span className="block w-[14px] h-[14px] bg-white rounded-full shadow-[0_1px_1px_0_rgba(0,0,0,0.06),_0_0_0_15px_#202020] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24),_0_0_0_15px_#B4B4B4] translate-x-[13px]" />
                </button>
              </label>
            </div>
          </section>

          {/* Section: Notify me when... */}
          <section className="mt-[24px]">
            <header className="flex items-center gap-[12px] py-[16px]">
              <div className="flex items-center justify-between w-full gap-[16px]">
                <span className="flex-1 text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
                  Notify me when…
                </span>
                <span className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
                  Mail
                </span>
              </div>
            </header>

            <div className="flex flex-col mt-[8px]">
              {/* Checkbox Row */}
              {[
                {
                  label: "I\u2019m mentioned in a note",
                  ariaLabel: "email:comment.mentioned checkbox",
                },
                {
                  label: "Someone replied to one of my notes",
                  ariaLabel: "email:comment.replied checkbox",
                },
                {
                  label: "I\u2019m assigned to a contact",
                  ariaLabel: "email:contact.user-assigned checkbox",
                },
                {
                  label: "I\u2019m assigned to a object",
                  ariaLabel: "email:object.user-assigned checkbox",
                },
                {
                  label: "A reminder due date is reached",
                  ariaLabel: "email:reminder.triggered checkbox",
                },
                {
                  label: "I can follow-up with a contact",
                  ariaLabel: "email:contact.follow-up-suggested checkbox",
                },
              ].map((item, index) => (
                <label
                  key={index}
                  className="flex items-center justify-between py-[8px] cursor-pointer group"
                >
                  <span className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4] group-hover:text-[#202020] dark:group-hover:text-[#EEEEEE] transition-colors">
                    {item.label}
                  </span>
                  <input
                    type="checkbox"
                    defaultChecked
                    aria-label={item.ariaLabel}
                    className="
                      w-[16px] h-[16px] flex-shrink-0
                      appearance-none cursor-pointer
                      bg-white dark:bg-[#191919]
                      border border-[#CECECE] dark:border-[#4A4A4A]
                      bg-center bg-no-repeat
                      checked:bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M6.66667%2010.9333L4%208.26667L4.93333%207.33333L6.66667%209.06667L11.0667%204.66667L12%205.6L6.66667%2010.9333Z%22%20fill%3D%22%23202020%22%2F%3E%3C%2Fsvg%3E')]
                      dark:checked:bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M6.66667%2010.9333L4%208.26667L4.93333%207.33333L6.66667%209.06667L11.0667%204.66667L12%205.6L6.66667%2010.9333Z%22%20fill%3D%22%23eee%22%2F%3E%3C%2Fsvg%3E')]
                    "
                  />
                </label>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
