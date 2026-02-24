import React, { useState, useEffect } from "react";

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
    <div className="flex flex-col w-full min-h-screen bg-[#FFFFFF] dark:bg-transparent font-['Inter'] items-center">
      {/* Top Bar */}
      <div className="flex w-full h-[49px] min-h-[49px] px-[12px] justify-between items-center border-b-[0.666667px] border-[#EEEFF1] dark:border-[#27282B]">
        <ol className="flex max-w-full items-center gap-[4px] overflow-hidden">
          <li className="flex items-center">
            <div className="flex relative items-center gap-[4px] rounded-[4px]">
              <div className="flex px-[4px] py-[2px] items-center gap-[6px]">
                <svg className="w-[14px] h-[14px]">
                  <use href="https://app.attio.com/web-assets/assets/icon-defs/0f9a03be3e69cc1f.svg#icon" />
                </svg>
                <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1] whitespace-nowrap overflow-hidden text-ellipsis">
                  Ask Attio usage
                </span>
              </div>
            </div>
          </li>
        </ol>
        <button className="flex w-[28px] h-[28px] p-[7px] justify-center items-center gap-[6px] rounded-[8px] text-[rgba(0,0,0,1)] dark:text-white">
          <div className="flex w-[14px] h-[14px] justify-center items-center">
            <svg className="w-[14px] h-[14px]">
              <use href="https://app.attio.com/web-assets/assets/icon-defs/56abfcf34cedbdce.svg#icon" />
            </svg>
          </div>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full max-w-[768px] py-[72px] px-[24px] flex-col items-center gap-[40px]">
          {/* Header */}
          <div className="flex w-full justify-between items-center gap-[16px]">
            <div className="flex flex-col gap-[2px]">
              <div className="flex items-center gap-[8px]">
                <div className="text-[24px] font-[600] leading-[28px] tracking-[-0.48px] text-[#242529] dark:text-[#EEEFF1]">
                  Ask Attio usage
                </div>
              </div>
              <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                View and configure use for Ask Attio
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-stretch gap-[40px]">
            <div className="flex flex-col gap-[16px]">
              {/* Credits available block */}
              <div className="block bg-[#FFFFFF] dark:bg-[#1A1D21] rounded-[16px] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#27282B]">
                <div className="flex p-[16px] justify-between items-center gap-[4px]">
                  <div className="flex flex-col items-start gap-[6px] flex-1">
                    <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                      Credits available per member
                    </div>
                    <div className="flex items-baseline gap-[6px]">
                      <div className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529] dark:text-[#EEEFF1]">
                        1,000
                      </div>
                      <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.29)]">
                        Resets on Mar 17, 2026
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-[6px] flex-1">
                    <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                      Members using Ask Attio
                    </div>
                    <div className="flex items-baseline gap-[4px]">
                      <div className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529] dark:text-[#EEEFF1]">
                        0
                      </div>
                      <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.29)]">
                        / 1
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-start gap-[6px] flex-1">
                    <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                      Members reached personal limit
                    </div>
                    <div className="flex items-baseline gap-[4px]">
                      <div className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529] dark:text-[#EEEFF1]">
                        0
                      </div>
                      <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.29)]">
                        / 1
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              {/* Workspace Credits used block */}
              <div className="block bg-[#FFFFFF] dark:bg-[#1A1D21] rounded-[12px] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#27282B]">
                <div className="flex px-[12px] py-[10px] flex-col items-start gap-[10px]">
                  <div className="flex px-[4px] flex-col items-start gap-[4px]">
                    <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                      Workspace credits used for Ask Attio
                    </div>
                  </div>
                  <div className="flex w-full h-[28px] relative items-center">
                    <div className="flex w-full h-[28px] bg-[#F8F9FA] dark:bg-[#15181C] border-[0.666667px] border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] rounded-[6px]" />
                  </div>
                  <div className="flex pl-[4px] items-start gap-[4px]">
                    <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                      0
                    </div>
                    <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                      / 10,000 workspace credit limit
                    </div>
                  </div>
                </div>

                <div className="flex w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]" />

                <div className="flex px-[16px] py-[10px] justify-between items-center gap-[4px]">
                  <div className="flex flex-col items-start">
                    <div className="flex justify-center items-center gap-[6px]">
                      <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                        Set a limit
                      </div>
                      <svg className="w-[14px] h-[14px]">
                        <use href="https://app.attio.com/web-assets/assets/icon-defs/36eefe86f01b76b0.svg#icon" />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center gap-[12px]">
                    <div className="flex flex-col items-center gap-[4px]">
                      <form className="block">
                        <div className="inline-flex min-h-[28px] px-[6px] items-center gap-[6px] rounded-[8px] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#27282B]">
                          <input
                            min="0"
                            max="10000"
                            type="number"
                            defaultValue="10000"
                            className="flex w-[41px] h-[28px] bg-transparent text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1] outline-none"
                          />
                        </div>
                      </form>
                    </div>
                    <button className="flex w-[30px] h-[20px] my-[4px] bg-[#266DF0] rounded-[16px] relative flex-shrink-0">
                      <span className="block w-[16px] h-[16px] bg-[#FFFFFF] rounded-full translate-x-[12px] translate-y-[2px]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Members List Table */}
              <div className="block font-['Inter'] text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                <div className="block">
                  <div className="block">
                    {/* Table Header */}
                    <div className="flex flex-col gap-[16px] sticky bg-[#FFFFFF] dark:bg-[#1A1D21] -mt-[16px] pt-[16px] z-[1]">
                      <div
                        className="grid px-[14px] py-[12px] gap-[12px] items-center bg-[#FFFFFF] dark:bg-[#1A1D21] border-t-[0.666667px] border-r-[0.666667px] border-l-[0.666667px] border-[#EEEFF1] dark:border-[#27282B] rounded-t-[12px] shadow-[inset_0_-1px_0_0_#EEEFF1] dark:shadow-[inset_0_-1px_0_0_#27282B]"
                        style={{ gridTemplateColumns: "1fr 250px" }}
                      >
                        <div className="flex items-center gap-[6px]">
                          <svg className="w-[14px] h-[14px]">
                            <use href="https://app.attio.com/web-assets/assets/icon-defs/c894fcc768162fe4.svg#icon" />
                          </svg>
                          <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                            Member
                          </div>
                        </div>
                        <div className="flex items-center gap-[6px]">
                          <svg className="w-[14px] h-[14px]">
                            <use href="https://app.attio.com/web-assets/assets/icon-defs/9c18b17242f493d4.svg#icon" />
                          </svg>
                          <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)]">
                            Usage
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Table Body */}
                    <div className="block border-r-[0.666667px] border-l-[0.666667px] border-b-[0.666667px] border-[#EEEFF1] dark:border-[#27282B] rounded-b-[12px]">
                      <div
                        className="grid h-[40px] px-[14px] gap-[12px] items-center shadow-[0_-1px_0_0_#EEEFF1,0_1px_0_0_#EEEFF1] dark:shadow-[0_-1px_0_0_#27282B,0_1px_0_0_#27282B]"
                        style={{ gridTemplateColumns: "1fr 250px" }}
                      >
                        <div className="flex items-center gap-[8px]">
                          <span className="flex w-[16px] h-[16px] justify-center items-center rounded-full bg-[#266DF0]">
                            <span className="text-[10px] font-[500] leading-[10px] tracking-[-0.14px] text-[#E5EEFF] uppercase">
                              J
                            </span>
                          </span>
                          <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1] whitespace-nowrap">
                            John Doe (You)
                          </span>
                          <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[rgba(255,255,255,0.55)] whitespace-nowrap overflow-hidden text-ellipsis">
                            adrian.manea@devias.io
                          </span>
                        </div>
                        <div className="flex flex-col items-start gap-[4px]">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.4)] dark:text-[rgba(255,255,255,0.29)]">
                            0
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
      </div>
    </div>
  );
}
