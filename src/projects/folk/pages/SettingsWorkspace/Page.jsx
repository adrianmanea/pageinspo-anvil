import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";

const usageCards = [
  {
    label: "Messages",
    href: "https://acme.com",
    used: 0,
    max: 1000,
    usedDisplay: "0/1,000",
    remainingDisplay: "1,000",
  },
  {
    label: "Sender domains",
    href: "https://acme.com",
    used: 0,
    max: 1,
    usedDisplay: "0/1",
    remainingDisplay: "1",
  },
  {
    label: "Enrichments",
    href: "https://acme.com",
    used: 0,
    max: 500,
    usedDisplay: "0/500",
    remainingDisplay: "500",
  },
  {
    label: "Research credits",
    href: "https://acme.com",
    used: 0,
    max: 50,
    usedDisplay: "0/50",
    remainingDisplay: "50",
  },
  {
    label: "AI fields",
    href: "https://acme.com",
    used: 0,
    max: 500,
    usedDisplay: "0/500",
    remainingDisplay: "500",
  },
  {
    label: "Workflow executions",
    href: null,
    used: 0,
    max: 50,
    usedDisplay: "0/50",
    remainingDisplay: "50",
  },
  {
    label: "Email accounts sync",
    href: null,
    used: 0,
    max: 1,
    usedDisplay: "0/1",
    remainingDisplay: "1",
  },
];

function UsageCard({ card }) {
  const percentage = card.max > 0 ? (card.used / card.max) * 100 : 0;

  return (
    <li className="flex flex-col gap-[8px] p-[16px] bg-white dark:bg-[#222222] border border-[#D9D9D9] dark:border-[#3D3D3D] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] overflow-hidden">
      {/* Title */}
      <span className="text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4]">
        {card.href ? (
          <a
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[rgba(0,0,0,0.15)] dark:decoration-[#6E6E6E] hover:decoration-[rgba(0,0,0,0.4)] transition-colors"
          >
            {card.label}
          </a>
        ) : (
          card.label
        )}
      </span>

      {/* Stats */}
      <dl className="flex flex-col gap-[4px]">
        {/* Used */}
        <div className="flex items-center gap-[8px]">
          <div
            aria-hidden="true"
            className="w-[6px] h-[6px] bg-[#202020] dark:bg-[#EEEEEE] flex-shrink-0"
          />
          <dt className="text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4]">
            Used
          </dt>
          <dd className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
            {card.usedDisplay}
          </dd>
        </div>
        {/* Remaining */}
        <div className="flex items-center gap-[8px]">
          <div
            aria-hidden="true"
            className="w-[6px] h-[6px] bg-[#E1E1E1] dark:bg-[#353535] flex-shrink-0"
          />
          <dt className="text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4]">
            Remaining
          </dt>
          <dd className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
            {card.remainingDisplay}
          </dd>
        </div>
      </dl>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Progress bar */}
      <div className="relative w-full h-[4px]">
        <div className="relative w-full h-[4px] bg-[#E1E1E1] dark:bg-[#353535]">
          <div
            role="meter"
            aria-valuemin={0}
            aria-valuemax={card.max}
            aria-valuenow={card.used}
            aria-valuetext={card.usedDisplay}
            aria-label="Used"
            className="absolute h-[4px] bg-[#202020] dark:bg-[#EEEEEE] shadow-none dark:shadow-[0_0_0_4px_#191919]"
            style={{
              width: `${percentage}%`,
              opacity: percentage > 0 ? 1 : 0,
            }}
          />
        </div>
      </div>
    </li>
  );
}

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
            Workspace
          </h1>
        </div>
      </header>
      <div className="flex-1 w-full overflow-y-auto">
        {/* Main Content Area */}
        <div className="w-full max-w-[1024px] px-[16px] sm:px-[24px] pt-[24px] pb-[40px] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between gap-[16px]">
            <span className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
              Manage your workspace information
            </span>
          </div>

          {/* Section: Workspace Details */}
          <section className="mt-[24px]">
            <div className="flex flex-col gap-[32px] my-[24px]">
              {/* Avatar Upload Row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-[16px] sm:gap-[24px]">
                <div className="relative w-[56px] h-[56px] bg-[#E1E1E1] dark:bg-[#353535] flex items-center justify-center overflow-hidden flex-shrink-0">
                  <input
                    id="workspace-icon-upload"
                    type="file"
                    accept="image/*"
                    aria-label="Avatar upload"
                    className="hidden"
                  />
                  <label
                    htmlFor="workspace-icon-upload"
                    aria-label="Upload an image"
                    className="cursor-pointer w-full h-full flex items-center justify-center relative group"
                  >
                    <div className="absolute inset-0 bg-[#202020] dark:bg-[#EEEEEE] opacity-0 group-hover:opacity-[0.15] dark:group-hover:opacity-0 transition-opacity" />
                    <Plus className="w-[28px] h-[28px] text-[#626262] dark:text-[#B4B4B4]" />
                  </label>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label
                    htmlFor="workspace-icon-upload"
                    className="inline-flex items-center justify-center h-[28px] px-[10px] w-fit text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] rounded-full shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] cursor-pointer hover:bg-gray-50 dark:hover:bg-[#2C2C2C] transition-colors whitespace-nowrap"
                  >
                    Upload workspace icon
                  </label>
                  <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
                    JPG, GIF or PNG. Recommended size is 256x256px
                  </span>
                </div>
              </div>

              {/* Workspace Name Input */}
              <form className="w-full">
                <div className="flex flex-col gap-[4px]">
                  <label
                    htmlFor="workspace-name"
                    className="text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4]"
                  >
                    Workspace name
                  </label>
                  <div className="flex items-center h-[28px] min-h-[28px] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] focus-within:border-[#202020] dark:focus-within:border-[#EEEEEE] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] overflow-hidden transition-all">
                    <input
                      id="workspace-name"
                      name="name"
                      type="text"
                      autoComplete="off"
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck="false"
                      className="w-full h-[24px] px-[10px] py-[4px] text-[13px] font-[400] leading-[16px] text-[#202020] dark:text-[#EEEEEE] bg-transparent border-none outline-none placeholder:text-[#BBBBBB] dark:placeholder:text-[#606060]"
                    />
                  </div>
                </div>
              </form>
            </div>
          </section>

          {/* Section: Plan Usage */}
          <section className="mt-[24px]">
            <header className="flex items-center gap-[12px] py-[16px]">
              <h2 className="text-[20px] font-[500] text-[#202020] dark:text-[#EEEEEE] tracking-[-0.38px]">
                You are currently on a Premium plan free trial
              </h2>
            </header>

            <ul
              aria-label="Feature usage"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[16px] pt-[16px] mb-[20px]"
            >
              {usageCards.map((card, index) => (
                <UsageCard key={index} card={card} />
              ))}
            </ul>

            <span className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
              Messages and enrichments limits renew by 24 March 2026
            </span>
          </section>

          {/* Section: Data Deletion */}
          <section className="mt-[24px]">
            <header className="flex flex-col sm:flex-row sm:items-center gap-[16px] py-[16px]">
              <div className="flex flex-col gap-[2px] flex-1">
                <h2 className="text-[20px] font-[500] text-[#202020] dark:text-[#EEEEEE] tracking-[-0.38px]">
                  Data deletion
                </h2>
                <p className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
                  If you would like to permanently delete this workspace and all
                  of the data in it, click on "Delete workspace"
                </p>
              </div>
              <div className="flex items-center">
                <button className="flex items-center justify-center h-[28px] px-[10px] py-[6px] text-[13px] font-[500] text-[#FDFDFD] dark:text-[#191919] bg-[#DC3E42] hover:bg-[#c73539] dark:bg-[#EC5D5E] dark:hover:bg-[#d95253] rounded-full border border-transparent transition-colors whitespace-nowrap">
                  Delete workspace
                </button>
              </div>
            </header>
          </section>
        </div>
      </div>
    </div>
  );
}
