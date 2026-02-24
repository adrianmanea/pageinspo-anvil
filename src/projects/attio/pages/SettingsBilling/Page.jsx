import React, { useState, useEffect } from "react";
import {
  CreditCard,
  HelpCircle,
  Clock,
  Users,
  Database,
  ChevronRight,
  Zap,
  Info,
  Pencil,
  Plus,
  ChevronDown,
} from "lucide-react";

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
    <div className="flex flex-col w-full min-h-screen bg-white dark:bg-[#15181C] font-['Inter'] items-center">
      {/* Top Bar */}
      <div className="flex w-full h-[49px] min-h-[49px] px-[12px] justify-between items-center border-b-[1px] border-[#EEEFF1] dark:border-[#27282B]">
        <ol className="flex max-w-full items-center gap-[4px] overflow-hidden">
          <li className="flex items-center">
            <div className="flex relative items-center gap-[4px] rounded-[4px] px-[4px] py-[2px]">
              <CreditCard className="w-[14px] h-[14px] text-current dark:text-[#FFFFFF] dark:opacity-75" />
              <span className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1] whitespace-nowrap overflow-hidden text-ellipsis">
                Billing
              </span>
            </div>
          </li>
        </ol>
        <button className="flex w-[28px] h-[28px] p-[7px] justify-center items-center gap-[6px] rounded-[8px] hover:bg-[#EEEFF1] dark:hover:bg-[#232529]">
          <div className="flex w-[14px] h-[14px] justify-center items-center">
            <HelpCircle className="w-[14px] h-[14px] text-current dark:text-[#FFFFFF]" />
          </div>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex w-full flex-col items-center">
        <div className="flex w-full max-w-[768px] py-[72px] px-[24px] flex-col items-center gap-[40px]">
          {/* Header */}
          <div className="flex w-full flex-col items-start gap-[16px]">
            <div className="flex w-full justify-between items-center gap-[16px]">
              <div className="flex flex-col items-stretch gap-[2px]">
                <div className="flex items-center gap-[8px]">
                  <div className="text-[24px] font-[600] leading-[28px] tracking-[-0.48px] text-[#242529] dark:text-[#EEEFF1]">
                    Billing
                  </div>
                </div>
                <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                  Explore plans and manage your subscription, usage, and billing
                  information
                </div>
              </div>
            </div>
            <span className="flex w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]" />
          </div>

          <div className="flex w-full flex-col items-stretch gap-[40px]">
            <div className="flex flex-col items-stretch gap-[20px]">
              {/* Alert Bar */}
              <div
                role="alert"
                className="flex w-full min-h-[44px] px-[12px] py-[8px] justify-between items-center gap-[24px] bg-[#F8F9FA] dark:bg-[#2F3033] border-[1px] border-[#EEEFF1] dark:border-[#27282B] rounded-[12px]"
              >
                <div className="flex items-center gap-[6px]">
                  <div className="flex w-[20px] h-[20px] items-center">
                    <Clock className="w-[14px] h-[14px] text-current dark:text-[#A2A4A7]" />
                  </div>
                  <div className="flex flex-col items-start pr-[8px] gap-[2px]">
                    <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#505154] dark:text-[#A2A4A7] whitespace-nowrap overflow-hidden text-ellipsis">
                      There are about 5 hours left on your trial
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-[4px]">
                  <div className="flex items-center gap-[8px]">
                    <button className="flex px-[8px] py-[4px] justify-center items-center gap-[6px] bg-[#266DF0] dark:bg-[#266DF0] hover:bg-[#1D5AD6] dark:hover:bg-[#1D5AD6] rounded-[10px] h-[34px]">
                      <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#FFFFFF] dark:text-[#FFFFFF] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                        Add billing details
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Plans section */}
              <div className="flex w-full flex-col items-stretch gap-[40px]">
                <div className="flex flex-col items-stretch gap-[16px]">
                  <div className="flex w-full justify-between items-center gap-[16px]">
                    <div className="flex flex-col gap-[0px]">
                      <div className="text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#242529] dark:text-[#EEEFF1]">
                        Current plan
                      </div>
                      <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                        Starts February 24th, 2026
                      </div>
                    </div>
                  </div>

                  <div className="block w-full p-[8px] bg-[#FFFFFF] dark:bg-[#1A1D21] rounded-[12px] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#27282B]">
                    <div className="flex w-full h-[40px] justify-between items-center gap-[4px]">
                      <div className="flex flex-col items-start gap-[4px]">
                        <div className="flex items-center gap-[6px]">
                          <div className="flex w-[40px] h-[40px] justify-center items-center border-[1px] border-[#EEEFF1] dark:border-[#27282B] rounded-[8px] relative">
                            <div className="block absolute right-[0.666667px] bottom-[0.666667px] w-[38px] h-[38px] rounded-[8px] overflow-hidden">
                              <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[40px] h-[40px]"
                              >
                                <g clipPath="url(#clip0_795_2669)">
                                  {/* dynamic fill for rect */}
                                  <rect
                                    width="40"
                                    height="40"
                                    className="fill-[#FFFFFF] dark:fill-[#1A1D21]"
                                  />
                                  <path
                                    d="M40 15.9494L0 15.9494"
                                    className="stroke-[rgba(0,0,0,0.05)] dark:stroke-[rgba(255,255,255,0.05)]"
                                    strokeWidth="0.5"
                                    strokeDasharray="1 1"
                                  />
                                  <path
                                    d="M40 24.0506H0"
                                    className="stroke-[rgba(0,0,0,0.05)] dark:stroke-[rgba(255,255,255,0.05)]"
                                    strokeWidth="0.5"
                                    strokeDasharray="1 1"
                                  />
                                  <path
                                    d="M12.9114 -4.17233e-07L12.9114 40"
                                    className="stroke-[rgba(0,0,0,0.05)] dark:stroke-[rgba(255,255,255,0.05)]"
                                    strokeWidth="0.5"
                                    strokeDasharray="1 1"
                                  />
                                  <path
                                    d="M27.0886 0L27.0886 40"
                                    className="stroke-[rgba(0,0,0,0.05)] dark:stroke-[rgba(255,255,255,0.05)]"
                                    strokeWidth="0.5"
                                    strokeDasharray="1 1"
                                  />
                                  <path
                                    d="M34.1423 -0.000732422V39.9993"
                                    className="stroke-[rgba(0,0,0,0.05)] dark:stroke-[rgba(255,255,255,0.05)]"
                                    strokeWidth="0.5"
                                  />
                                  <path
                                    d="M5.85938 -0.000732422V39.9993"
                                    className="stroke-[rgba(0,0,0,0.05)] dark:stroke-[rgba(255,255,255,0.05)]"
                                    strokeWidth="0.5"
                                  />
                                  <path
                                    d="M0.000976562 5.8577H40.001"
                                    className="stroke-[rgba(0,0,0,0.05)] dark:stroke-[rgba(255,255,255,0.05)]"
                                    strokeWidth="0.5"
                                  />
                                  <path
                                    d="M0.000976562 34.4206H40.001"
                                    className="stroke-[rgba(0,0,0,0.05)] dark:stroke-[rgba(255,255,255,0.05)]"
                                    strokeWidth="0.5"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_795_2669">
                                    <rect
                                      width="40"
                                      height="40"
                                      className="fill-[#FFFFFF] dark:fill-[#1A1D21]"
                                    />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div className="block relative w-[30px] h-[24px] z-[1]">
                              <svg
                                width="30"
                                height="25"
                                viewBox="0 0 30 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-[30px] h-[25px]"
                              >
                                <path
                                  d="M7.99852 4.00541L14.0745 0.533435C14.3858 0.355535 14.768 0.355535 15.0793 0.533435L21.1553 4.00541C21.4708 4.1857 21.6655 4.52124 21.6655 4.88464V11.8106C21.6655 12.174 21.4708 12.5095 21.1553 12.6898L15.0793 16.1618C14.768 16.3397 14.3858 16.3397 14.0745 16.1618L7.99852 12.6898C7.683 12.5095 7.48828 12.174 7.48828 11.8106V4.88464C7.48828 4.52124 7.683 4.1857 7.99852 4.00541Z"
                                  className="fill-[#FFFFFF] stroke-[#CDCFD1] dark:fill-[#1A1D21] dark:stroke-[#46474A]"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M14.577 8.34722L7.70996 4.42317M14.577 8.34722L21.4765 4.40466M14.577 8.34722V16.1953"
                                  className="stroke-[#CDCFD1] dark:stroke-[#46474A]"
                                  strokeWidth="0.506329"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M15.0874 8.0557L21.1633 4.58373C21.4747 4.40583 21.8569 4.40583 22.1682 4.58373L28.2441 8.0557C28.5596 8.236 28.7544 8.57153 28.7544 8.93493V15.8609C28.7544 16.2243 28.5596 16.5598 28.2441 16.7401L22.1682 20.2121C21.8569 20.39 21.4747 20.39 21.1633 20.2121L15.0874 16.7401C14.7719 16.5598 14.5771 16.2243 14.5771 15.8609V8.93493C14.5771 8.57153 14.7719 8.236 15.0874 8.0557Z"
                                  className="fill-[#E5EEFF] stroke-[#266DF0] dark:fill-[#1D2E55] dark:stroke-[#4E8CFC]"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  opacity="0.4"
                                  d="M21.6659 12.3976L14.7988 8.47358M21.6659 12.3976L28.5654 8.45508M21.6659 12.3976V20.2457"
                                  className="stroke-[#266DF0] dark:stroke-[#4E8CFC]"
                                  strokeWidth="0.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M0.910142 8.0557L6.98609 4.58373C7.29742 4.40583 7.67961 4.40583 7.99093 4.58373L14.0669 8.0557C14.3824 8.236 14.5771 8.57153 14.5771 8.93493V15.8609C14.5771 16.2243 14.3824 16.5598 14.0669 16.7401L7.99093 20.2121C7.67961 20.39 7.29741 20.39 6.98609 20.2121L0.910141 16.7401C0.594622 16.5598 0.399902 16.2243 0.399902 15.8609V8.93493C0.399902 8.57153 0.594623 8.236 0.910142 8.0557Z"
                                  className="fill-[#E5EEFF] stroke-[#266DF0] dark:fill-[#1D2E55] dark:stroke-[#4E8CFC]"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  opacity="0.4"
                                  d="M7.48867 12.3976L0.621582 8.47358M7.48867 12.3976L14.3881 8.45508M7.48867 12.3976V20.2457"
                                  className="stroke-[#266DF0] dark:stroke-[#4E8CFC]"
                                  strokeWidth="0.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M7.99852 12.1061L14.0745 8.63414C14.3858 8.45624 14.768 8.45624 15.0793 8.63414L21.1553 12.1061C21.4708 12.2864 21.6655 12.6219 21.6655 12.9853V19.9113C21.6655 20.2747 21.4708 20.6102 21.1553 20.7905L15.0793 24.2625C14.768 24.4404 14.3858 24.4404 14.0745 24.2625L7.99852 20.7905C7.683 20.6102 7.48828 20.2747 7.48828 19.9113V12.9853C7.48828 12.6219 7.683 12.2864 7.99852 12.1061Z"
                                  className="fill-[#E5EEFF] stroke-[#266DF0] dark:fill-[#1D2E55] dark:stroke-[#4E8CFC]"
                                  strokeWidth="0.8"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  opacity="0.4"
                                  d="M14.5766 16.4482L7.70947 12.5241M14.5766 16.4482L21.476 12.5056M14.5766 16.4482V24.2963"
                                  className="stroke-[#266DF0] dark:stroke-[#4E8CFC]"
                                  strokeWidth="0.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="flex flex-col items-start">
                            <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                              Pro
                            </div>
                            <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                              $86.00/mo per seat, billed monthly
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Usage Section */}
                <div className="flex flex-col items-start gap-[16px]">
                  <div className="flex w-full justify-between items-center gap-[16px]">
                    <div className="flex flex-col gap-[0px]">
                      <div className="text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#242529] dark:text-[#EEEFF1]">
                        Usage
                      </div>
                      <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                        Manage your seats and credits
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-[12px] w-full">
                    {/* Seats Block */}
                    <div className="block p-[16px] bg-[#FFFFFF] dark:bg-[#1A1D21] rounded-[16px] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#27282B]">
                      <div className="flex items-center gap-[6px]">
                        <div className="flex w-[14px] h-[14px] justify-center items-center bg-[#266DF0] border-[1px] border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] rounded-[30%]">
                          <Users className="w-[14px] h-[14px] text-[#FFFFFF] dark:text-[#FFFFFF]" />
                        </div>
                        <div className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#242529] dark:text-[#EEEFF1]">
                          Seats
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch gap-[4px] my-[6px]">
                        <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.4)] dark:text-[#A2A4A7]">
                          <span className="text-[#505154] dark:text-[#A2A4A7]">
                            2
                          </span>
                          {" / 2"}
                        </div>
                        <div className="block relative w-full h-[4px] bg-[#EEEFF1] dark:bg-[#242529] rounded-[4px] overflow-hidden">
                          <div className="block w-full h-[4px] bg-[#F97514] dark:bg-[#C95908]" />
                        </div>
                      </div>
                      <div className="flex mt-[16px] items-center gap-[8px]">
                        <button className="flex px-[8px] py-[4px] justify-center items-center gap-[6px] bg-transparent border border-[#E5E7EB] dark:border-[#27282B] hover:bg-[#EEEFF1] dark:hover:bg-[#232529] rounded-[8px] h-[28px]">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                            Manage seats
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Records Block */}
                    <div className="block p-[16px] bg-[#FFFFFF] dark:bg-[#1A1D21] rounded-[16px] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#27282B]">
                      <div className="flex items-center gap-[6px]">
                        <div className="flex w-[14px] h-[14px] justify-center items-center bg-[#00B9EB] border-[1px] border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] rounded-[30%]">
                          <Database className="w-[14px] h-[14px] text-[#FFFFFF] dark:text-[#FFFFFF]" />
                        </div>
                        <div className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#242529] dark:text-[#EEEFF1]">
                          Records
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch gap-[4px] my-[6px]">
                        <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.4)] dark:text-[#A2A4A7]">
                          <span className="text-[#505154] dark:text-[#A2A4A7]">
                            10
                          </span>
                          {" / 1,000,000"}
                        </div>
                        <div className="block relative w-full h-[4px] bg-[#EEEFF1] dark:bg-[#242529] rounded-[4px] overflow-hidden">
                          <div className="block h-[4px] bg-[#00D17E] dark:bg-[#00D17E] w-[1%]" />
                        </div>
                      </div>
                      <div className="flex mt-[16px] items-center gap-[8px]">
                        <button className="flex px-[8px] py-[4px] justify-center items-center gap-[6px] bg-transparent border border-[#E5E7EB] dark:border-[#27282B] hover:bg-[#EEEFF1] dark:hover:bg-[#232529] rounded-[8px] h-[28px]">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                            Usage
                          </div>
                          <div className="flex w-[14px] h-[14px] justify-center items-center">
                            <ChevronRight className="w-[14px] h-[14px] text-current dark:text-[#EEEFF1]" />
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Credits Block */}
                    <div className="block p-[16px] bg-[#FFFFFF] dark:bg-[#1A1D21] rounded-[16px] shadow-[inset_0_0_0_1px_#EEEFF1] dark:shadow-[inset_0_0_0_1px_#27282B]">
                      <div className="flex items-center gap-[6px]">
                        <div className="flex w-[14px] h-[14px] justify-center items-center bg-[#9B69FF] border-[1px] border-[rgba(0,0,0,0.05)] dark:border-[rgba(255,255,255,0.05)] rounded-[30%]">
                          <Zap className="w-[14px] h-[14px] text-[#FFFFFF] dark:text-[#FFFFFF]" />
                        </div>
                        <div className="text-[14px] font-[600] leading-[20px] tracking-[-0.28px] text-[#242529] dark:text-[#EEEFF1]">
                          Credits
                        </div>
                        <Info className="w-[14px] h-[14px] text-current dark:text-[#EEEFF1] opacity-50" />
                      </div>
                      <div className="flex flex-col items-stretch gap-[4px] my-[6px]">
                        <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.4)] dark:text-[#A2A4A7]">
                          <span className="text-[#505154] dark:text-[#A2A4A7]">
                            0
                          </span>
                          {" / 10,000"}
                        </div>
                        <div className="block relative w-full h-[4px] bg-[#EEEFF1] dark:bg-[#242529] rounded-[4px] overflow-hidden">
                          <div className="block h-[4px] bg-[#00D17E] dark:bg-[#00D17E] w-[0%]" />
                        </div>
                      </div>
                      <div className="flex mt-[16px] items-center gap-[8px]">
                        <button className="flex px-[8px] py-[4px] justify-center items-center gap-[6px] bg-transparent border border-[#E5E7EB] dark:border-[#27282B] hover:bg-[#EEEFF1] dark:hover:bg-[#232529] rounded-[8px] h-[28px]">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                            Usage
                          </div>
                          <div className="flex w-[14px] h-[14px] justify-center items-center">
                            <ChevronRight className="w-[14px] h-[14px] text-current dark:text-[#EEEFF1]" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Billing Details Section */}
                <div className="flex flex-col items-start gap-[16px]">
                  <div className="flex w-full justify-between items-center gap-[16px]">
                    <div className="flex flex-col gap-[0px]">
                      <div className="text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#242529] dark:text-[#EEEFF1]">
                        Billing details
                      </div>
                      <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                        Manage your payment methods and billing information.
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full justify-between items-stretch gap-[16px]">
                    {/* Address Card */}
                    <div className="flex flex-1 flex-col items-start gap-[16px] p-[12px_16px_16px] bg-transparent border-[1px] border-[#EEEFF1] dark:border-[#27282B] rounded-[16px]">
                      <div className="flex w-full justify-between items-start gap-[4px]">
                        <div className="flex flex-col items-start">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                            Address
                          </div>
                          <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                            Update your billing address
                          </div>
                        </div>
                        <button className="flex w-[28px] h-[28px] p-[7px] justify-center items-center gap-[6px] bg-transparent border border-[#E5E7EB] dark:border-[#27282B] hover:bg-[#EEEFF1] dark:hover:bg-[#232529] rounded-[8px] h-[28px]">
                          <div className="flex w-[14px] h-[14px] justify-center items-center">
                            <Pencil className="w-[14px] h-[14px] text-current dark:text-[#EEEFF1]" />
                          </div>
                        </button>
                      </div>

                      <div className="flex w-full items-start gap-[4px]">
                        <div className="flex w-1/2 flex-col items-start overflow-hidden">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                            Email
                          </div>
                        </div>
                        <div className="flex w-1/2 flex-col items-start overflow-hidden">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1] whitespace-nowrap overflow-hidden text-ellipsis w-full">
                            adrian.manea@devias.io
                          </div>
                        </div>
                      </div>
                      <span className="block w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]" />

                      <div className="flex w-full items-start gap-[4px]">
                        <div className="flex w-1/2 flex-col items-start overflow-hidden">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                            Company name
                          </div>
                        </div>
                        <div className="flex w-1/2 flex-col items-start overflow-hidden">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1] whitespace-nowrap overflow-hidden text-ellipsis w-full">
                            Acme
                          </div>
                        </div>
                      </div>
                      <span className="block w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]" />

                      <div className="flex w-full items-start gap-[4px]">
                        <div className="flex w-1/2 flex-col items-start overflow-hidden">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                            Address
                          </div>
                        </div>
                        <div className="flex w-1/2 flex-col items-start overflow-hidden">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1] whitespace-nowrap overflow-hidden text-ellipsis w-full">
                            Canada
                          </div>
                        </div>
                      </div>
                      <span className="block w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]" />

                      <div className="flex w-full items-start gap-[4px]">
                        <div className="flex w-1/2 flex-col items-start overflow-hidden">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                            GST/HST number
                          </div>
                        </div>
                        <div className="flex w-1/2 flex-col items-start overflow-hidden">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.4)] dark:text-[#A2A4A7] whitespace-nowrap overflow-hidden text-ellipsis w-full">
                            Add GST/HST number...
                          </div>
                        </div>
                      </div>
                      <span className="block w-full h-[1px] bg-[#EEEFF1] dark:bg-[#27282B]" />

                      <div className="flex w-full items-start gap-[4px]">
                        <div className="flex w-1/2 flex-col items-start overflow-hidden">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                            QST number
                          </div>
                        </div>
                        <div className="flex w-1/2 flex-col items-start overflow-hidden">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.4)] dark:text-[#A2A4A7] whitespace-nowrap overflow-hidden text-ellipsis w-full">
                            Add QST number...
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Payment methods Card */}
                    <div className="flex flex-1 flex-col items-start gap-[16px] p-[12px_16px_16px] bg-transparent border-[1px] border-[#EEEFF1] dark:border-[#27282B] rounded-[16px]">
                      <div className="flex w-full justify-between items-start gap-[4px]">
                        <div className="flex flex-col items-start">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                            Payment methods
                          </div>
                          <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                            Manage cards used for subscriptions
                          </div>
                        </div>
                        <button className="flex px-[8px] py-[4px] justify-center items-center gap-[6px] bg-transparent border border-[#E5E7EB] dark:border-[#27282B] hover:bg-[#EEEFF1] dark:hover:bg-[#232529] rounded-[8px] h-[28px]">
                          <div className="flex w-[14px] h-[14px] justify-center items-center">
                            <Plus className="w-[14px] h-[14px] text-current dark:text-[#EEEFF1]" />
                          </div>
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                            Add card
                          </div>
                        </button>
                      </div>

                      <div className="flex w-full flex-col items-center gap-[12px] pt-[24px]">
                        <div className="flex w-[48px] h-[48px] justify-center items-center rounded-full bg-[#F8F9FA] dark:bg-[#2F3033] border border-dashed border-[#D1D5DB] dark:border-[#46474A]">
                          <CreditCard className="w-[20px] h-[20px] text-[rgba(0,0,0,0.4)] dark:text-[#A2A4A7]" />
                        </div>
                        <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[rgba(0,0,0,0.4)] dark:text-[#A2A4A7] text-center">
                          You don't have any payment methods
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Invoices Section */}
                <div className="flex flex-col items-start gap-[16px]">
                  <div className="flex w-full justify-between items-center gap-[16px]">
                    <div className="flex flex-col gap-[0px]">
                      <div className="text-[16px] font-[600] leading-[20px] tracking-[-0.32px] text-[#242529] dark:text-[#EEEFF1]">
                        Invoices
                      </div>
                    </div>
                  </div>

                  <div className="block w-full bg-[#FFFFFF] dark:bg-[#1A1D21] border-[1px] border-[#EEEFF1] dark:border-[#27282B] rounded-[12px]">
                    <div className="flex flex-col">
                      <div className="grid grid-cols-[1fr_120px_100px_48px] px-[14px] py-[10px] items-center gap-[12px] bg-[#FFFFFF] dark:bg-[#1A1D21] border-b-[0.666667px] border-[#EEEFF1] dark:border-[#27282B] rounded-t-[12px]">
                        <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                          Invoice
                        </div>
                        <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                          Amount
                        </div>
                        <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                          Status
                        </div>
                        <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]"></div>
                      </div>

                      <div className="grid grid-cols-[1fr_120px_100px_48px] px-[14px] py-[10px] items-center gap-[12px] min-h-[44px]">
                        <div className="flex flex-col overflow-hidden">
                          <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1] whitespace-nowrap overflow-hidden text-ellipsis">
                            Acme - Oct '24
                          </div>
                          <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[rgba(0,0,0,0.55)] dark:text-[#A2A4A7]">
                            Oct 22, 2024
                          </div>
                        </div>
                        <div className="text-[14px] font-[500] leading-[20px] tracking-[-0.14px] text-[#242529] dark:text-[#EEEFF1]">
                          $0.00
                        </div>
                        <div className="flex items-center">
                          <div className="inline-flex px-[6px] py-[2px] items-center gap-[4px] bg-[#F8F9FA] dark:bg-[#2F3033] rounded-[6px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
                            <span className="block w-[6px] h-[6px] bg-[#505154] dark:bg-[#A2A4A7] rounded-full"></span>
                            <div className="text-[12px] font-[500] leading-[16px] tracking-[-0.12px] text-[#505154] dark:text-[#A2A4A7]">
                              Draft
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end pr-[4px]">
                          <div className="flex w-[20px] h-[20px] justify-center items-center text-[rgba(0,0,0,0.4)] dark:text-[#A2A4A7]">
                            <ChevronDown className="w-[14px] h-[14px] transform -rotate-90 text-[rgba(0,0,0,0.4)] dark:text-[#A2A4A7]" />
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
