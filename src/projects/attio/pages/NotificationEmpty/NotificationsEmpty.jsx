import React, { useState, useEffect } from "react";
import { Bell } from "lucide-react";

export default function NotificationDemo() {
  const [isOpen, setIsOpen] = useState(true); // Open by default for preview
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
    <div className="w-full font-sans text-sm">
      {/* Conceptual Header */}
      <header className="w-full h-[64px] bg-[#FFFFFF] dark:bg-[#1A1D21] border-b border-[#E5E5E5] dark:border-[#2C313A] px-[24px] flex items-center justify-between transition-colors">
        <div className="flex items-center gap-[24px]">
          {/* Skeleton Logo/Links */}
          <div className="w-[100px] h-[24px] bg-[#F5F5F5] dark:bg-[#2C313A] rounded-[4px]"></div>
          <div className="w-[60px] h-[16px] bg-[#FAFAFA] dark:bg-[#262B33] rounded-[2px] hidden md:block"></div>
          <div className="w-[60px] h-[16px] bg-[#FAFAFA] dark:bg-[#262B33] rounded-[2px] hidden md:block"></div>
        </div>

        {/* Trigger */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-[36px] h-[36px] flex items-center justify-center rounded-full hover:bg-[#F5F5F5] dark:hover:bg-[#2C313A] transition-colors relative group"
          >
            <Bell className="w-[18px] h-[18px] text-[#666666] dark:text-[#A3A3A3] group-hover:dark:text-[#E5E5E5]" />
          </button>

          {/* Notification Panel */}
          {isOpen && (
            <div className="absolute right-0 top-[100%] mt-[8px] w-[calc(100vw-48px)] sm:w-[342px] bg-[#FFFFFF] dark:bg-[#1A1D21] rounded-[12px] shadow-[0px_8px_24px_rgba(0,0,0,0.12)] dark:shadow-[0px_8px_24px_rgba(0,0,0,0.5)] border border-[#E5E5E5] dark:border-[#383E47] z-50 flex flex-col overflow-hidden transition-colors">
              <div className="flex flex-col">
                {/* Header */}
                <div className="px-[16px] pt-[16px] pb-[12px]">
                  <div className="text-[14px] font-[600] text-[#1A1A1A] dark:text-[#E5E5E5]">
                    Notifications
                  </div>
                </div>

                {/* Tabs */}
                <div className="px-[16px]">
                  <div className="flex gap-[16px] border-b border-[#F0F0F0] dark:border-[#383E47]">
                    <button className="pb-[8px] text-[13px] font-[500] text-[#1A1A1A] dark:text-[#E5E5E5] border-b-[2px] border-[#1A1A1A] dark:border-[#E5E5E5]">
                      Notifications (0)
                    </button>
                    <button className="pb-[8px] text-[13px] font-[500] text-[#A3A3A3] dark:text-[#737373] hover:text-[#1A1A1A] dark:hover:text-[#E5E5E5] transition-colors border-b-[2px] border-transparent">
                      Requests (0)
                    </button>
                  </div>
                </div>

                {/* Empty State Content */}
                <div className="flex flex-col">
                  <div>
                    <div className="flex flex-col items-center">
                      <svg
                        width="342"
                        height="320"
                        viewBox="0 0 342 320"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="dark:opacity-100 max-w-full h-auto"
                      >
                        <path
                          d="M106 18V302M38 18V302M242 18V302M310 18V302M174 18V302M0 52H342M0 95H342M0 138H342M0 181H342M0 224H342M0 266H342"
                          stroke="url(#paint0_radial_503_150330)"
                          strokeMiterlimit="10"
                        />
                        <rect
                          x="106"
                          y="109.024"
                          width="136"
                          height="46.0238"
                          rx="9"
                          className="fill-[#FFFFFF] dark:fill-[#1A1D21] stroke-[#99A2AF] dark:stroke-[#505967]"
                          strokeWidth="0.75"
                          strokeMiterlimit="10"
                        />
                        <rect
                          opacity="0.4"
                          x="111.479"
                          y="114.503"
                          width="125"
                          height="35.0658"
                          rx="6"
                          className="stroke-[#99A2AF] dark:stroke-[#505967]"
                          strokeWidth="0.75"
                          strokeMiterlimit="10"
                        />
                        <rect
                          opacity="0.1"
                          x="118.054"
                          y="121.078"
                          width="21.9161"
                          height="21.9161"
                          rx="6"
                          className="fill-[#99A2AF] dark:fill-[#505967]"
                        />
                        <path
                          d="M130.296 136.438C130.033 136.884 129.556 137.183 129.01 137.183C128.464 137.183 127.987 136.884 127.724 136.438"
                          className="stroke-[#99A2AF] dark:stroke-[#505967]"
                          strokeOpacity="0.4"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M125.769 130.177V131.51C125.769 132.388 125.497 133.245 124.99 133.962V133.962C124.699 134.376 124.994 134.946 125.5 134.946H132.52C133.026 134.946 133.321 134.376 133.029 133.962V133.962C132.523 133.245 132.251 132.388 132.251 131.51V130.177"
                          className="stroke-[#99A2AF] dark:stroke-[#505967]"
                          strokeOpacity="0.4"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M132.251 130.177C132.251 128.365 130.8 126.897 129.01 126.897C127.22 126.897 125.769 128.365 125.769 130.177"
                          className="stroke-[#99A2AF] dark:stroke-[#505967]"
                          strokeOpacity="0.4"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          opacity="0.2"
                          x="145.449"
                          y="123.269"
                          width="44.928"
                          height="5.47903"
                          rx="2.73951"
                          className="fill-[#99A2AF] dark:fill-[#505967]"
                        />
                        <rect
                          opacity="0.2"
                          x="145.449"
                          y="135.323"
                          width="77.8022"
                          height="5.47903"
                          rx="2.73951"
                          className="fill-[#99A2AF] dark:fill-[#505967]"
                        />
                        <rect
                          x="106"
                          y="164"
                          width="136"
                          height="46.0238"
                          rx="9"
                          className="fill-[#FFFFFF] dark:fill-[#1A1D21]"
                        />
                        <g opacity="0.6">
                          <rect
                            x="106"
                            y="164"
                            width="136"
                            height="46.0238"
                            rx="9"
                            className="fill-[#FFFFFF] dark:fill-[#1A1D21] stroke-[#99A2AF] dark:stroke-[#505967]"
                            strokeWidth="0.75"
                            strokeMiterlimit="10"
                          />
                          <rect
                            opacity="0.4"
                            x="111.479"
                            y="169.479"
                            width="125"
                            height="35.0658"
                            rx="6"
                            className="stroke-[#99A2AF] dark:stroke-[#505967]"
                            strokeWidth="0.75"
                            strokeMiterlimit="10"
                          />
                          <rect
                            opacity="0.1"
                            x="118.054"
                            y="176.054"
                            width="21.9161"
                            height="21.9161"
                            rx="6"
                            className="fill-[#99A2AF] dark:fill-[#505967]"
                          />
                          <path
                            d="M130.296 191.407C130.033 191.854 129.556 192.153 129.01 192.153C128.464 192.153 127.987 191.854 127.724 191.407"
                            className="stroke-[#99A2AF] dark:stroke-[#505967]"
                            strokeOpacity="0.4"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M125.769 185.146V186.48C125.769 187.358 125.497 188.215 124.99 188.932V188.932C124.699 189.346 124.994 189.916 125.5 189.916H132.52C133.026 189.916 133.321 189.346 133.029 188.932V188.932C132.523 188.215 132.251 187.358 132.251 186.48V185.146"
                            className="stroke-[#99A2AF] dark:stroke-[#505967]"
                            strokeOpacity="0.4"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M132.251 185.147C132.251 183.335 130.8 181.867 129.01 181.867C127.22 181.867 125.769 183.335 125.769 185.147"
                            className="stroke-[#99A2AF] dark:stroke-[#505967]"
                            strokeOpacity="0.4"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <rect
                            opacity="0.2"
                            x="145.449"
                            y="178.245"
                            width="44.928"
                            height="5.47903"
                            rx="2.73951"
                            className="fill-[#99A2AF] dark:fill-[#505967]"
                          />
                          <rect
                            opacity="0.2"
                            x="145.449"
                            y="190.299"
                            width="77.8022"
                            height="5.47903"
                            rx="2.73951"
                            className="fill-[#99A2AF] dark:fill-[#505967]"
                          />
                        </g>
                        <rect
                          x="106"
                          y="220"
                          width="136"
                          height="46.0238"
                          rx="9"
                          className="fill-[#FFFFFF] dark:fill-[#1A1D21]"
                        />
                        <g opacity="0.4">
                          <rect
                            x="106"
                            y="220"
                            width="136"
                            height="46.0238"
                            rx="9"
                            className="fill-[#FFFFFF] dark:fill-[#1A1D21] stroke-[#99A2AF] dark:stroke-[#505967]"
                            strokeWidth="0.75"
                            strokeMiterlimit="10"
                          />
                          <rect
                            opacity="0.4"
                            x="111.479"
                            y="225.479"
                            width="125"
                            height="35.0658"
                            rx="6"
                            className="stroke-[#99A2AF] dark:stroke-[#505967]"
                            strokeWidth="0.75"
                            strokeMiterlimit="10"
                          />
                          <rect
                            opacity="0.1"
                            x="118.054"
                            y="232.054"
                            width="21.9161"
                            height="21.9161"
                            rx="6"
                            className="fill-[#99A2AF] dark:fill-[#505967]"
                          />
                          <path
                            d="M130.286 247.397C130.023 247.844 129.546 248.143 129 248.143C128.454 248.143 127.977 247.844 127.714 247.397"
                            className="stroke-[#99A2AF] dark:stroke-[#505967]"
                            strokeOpacity="0.4"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M125.759 241.136V242.47C125.759 243.348 125.487 244.205 124.98 244.922V244.922C124.689 245.336 124.984 245.906 125.49 245.906H132.51C133.016 245.906 133.311 245.336 133.019 244.922V244.922C132.513 244.205 132.241 243.348 132.241 242.47V241.136"
                            className="stroke-[#99A2AF] dark:stroke-[#505967]"
                            strokeOpacity="0.4"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M132.241 241.136C132.241 239.325 130.79 237.857 129 237.857C127.21 237.857 125.759 239.325 125.759 241.136"
                            className="stroke-[#99A2AF] dark:stroke-[#505967]"
                            strokeOpacity="0.4"
                            strokeWidth="0.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <rect
                            opacity="0.2"
                            x="145.449"
                            y="234.245"
                            width="44.928"
                            height="5.47903"
                            rx="2.73951"
                            className="fill-[#99A2AF] dark:fill-[#505967]"
                          />
                          <rect
                            opacity="0.2"
                            x="145.449"
                            y="246.299"
                            width="77.8022"
                            height="5.47903"
                            rx="2.73951"
                            className="fill-[#99A2AF] dark:fill-[#505967]"
                          />
                        </g>
                        <g filter="url(#filter0_dd_503_150330)">
                          <path
                            d="M106 67.4C106 62.3595 106 59.8393 106.981 57.9141C107.844 56.2206 109.221 54.8438 110.914 53.9809C112.839 53 115.36 53 120.4 53L230.8 53C234.72 53 236.681 53 238.178 53.763C239.495 54.4341 240.566 55.5049 241.237 56.8221C242 58.3194 242 60.2796 242 64.2V84.6238C242 89.6643 242 92.1845 241.019 94.1097C240.156 95.8032 238.779 97.18 237.086 98.0429C235.161 99.0238 232.64 99.0238 227.6 99.0238H120.4C115.36 99.0238 112.839 99.0238 110.914 98.0429C109.221 97.18 107.844 95.8032 106.981 94.1097C106 92.1845 106 89.6643 106 84.6238V67.4Z"
                            className="fill-[#FFFFFF] dark:fill-[#1A1D21]"
                          />
                          <path
                            d="M106 67.4C106 62.3595 106 59.8393 106.981 57.9141C107.844 56.2206 109.221 54.8438 110.914 53.9809C112.839 53 115.36 53 120.4 53L230.8 53C234.72 53 236.681 53 238.178 53.763C239.495 54.4341 240.566 55.5049 241.237 56.8221C242 58.3194 242 60.2796 242 64.2V84.6238C242 89.6643 242 92.1845 241.019 94.1097C240.156 95.8032 238.779 97.18 237.086 98.0429C235.161 99.0238 232.64 99.0238 227.6 99.0238H120.4C115.36 99.0238 112.839 99.0238 110.914 98.0429C109.221 97.18 107.844 95.8032 106.981 94.1097C106 92.1845 106 89.6643 106 84.6238V67.4Z"
                            className="stroke-[#266DF0] dark:stroke-[#4E8CFC]"
                            strokeWidth="0.75"
                          />
                        </g>
                        <rect
                          opacity="0.4"
                          x="111.479"
                          y="58.479"
                          width="125"
                          height="35.0658"
                          rx="6"
                          className="stroke-[#266DF0] dark:stroke-[#4E8CFC]"
                          strokeWidth="0.75"
                        />
                        <rect
                          x="118.054"
                          y="65.054"
                          width="21.9161"
                          height="21.9161"
                          rx="6"
                          className="fill-[#266DF0]/10 dark:fill-[#4E8CFC]/20"
                        />
                        <rect
                          x="145.449"
                          y="67.2454"
                          width="44.928"
                          height="5.47903"
                          rx="2.73951"
                          className="fill-[#266DF0]/10 dark:fill-[#4E8CFC]/20"
                        />
                        <rect
                          x="145.449"
                          y="79.2993"
                          width="77.8022"
                          height="5.47903"
                          rx="2.73951"
                          className="fill-[#266DF0]/10 dark:fill-[#4E8CFC]/20"
                        />
                        <path
                          d="M130.286 80.3975C130.023 80.8441 129.546 81.1428 129 81.1428C128.454 81.1428 127.977 80.8441 127.714 80.3975"
                          className="stroke-[#266DF0] dark:stroke-[#FFFFFF]"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M125.759 74.1365V75.4698C125.759 76.348 125.487 77.2047 124.98 77.9222V77.9222C124.689 78.3357 124.984 78.9064 125.49 78.9064H132.51C133.016 78.9064 133.311 78.3357 133.019 77.9222V77.9222C132.513 77.2047 132.241 76.348 132.241 75.4698V74.1365"
                          className="stroke-[#266DF0] dark:stroke-[#FFFFFF]"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M132.241 74.1365C132.241 72.3254 130.79 70.8572 129 70.8572C127.21 70.8572 125.759 72.3254 125.759 74.1365"
                          className="stroke-[#266DF0] dark:stroke-[#FFFFFF]"
                          strokeWidth="0.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="242"
                          cy="53"
                          r="6"
                          className="fill-[#266DF0] dark:fill-[#4E8CFC]"
                        />
                        <path
                          d="M242.721 50.6364V55H241.931V51.4055H241.905L240.885 52.0575V51.3331L241.969 50.6364H242.721Z"
                          className="fill-[#FFFFFF] dark:fill-[#1A1D21]"
                        />
                        <defs>
                          <filter
                            id="filter0_dd_503_150330"
                            x="81.625"
                            y="36.625"
                            width="184.75"
                            height="94.7739"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="8" />
                            <feGaussianBlur
                              stdDeviation="12"
                              result="blurredShadow1"
                            />
                            <feFlood
                              floodColor="#266DF0"
                              floodOpacity="0.08"
                              result="shadowColor1"
                            />
                            <feComposite
                              in="shadowColor1"
                              in2="blurredShadow1"
                              operator="in"
                              result="coloredShadow1"
                            />
                            <feBlend
                              mode="normal"
                              in="coloredShadow1"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_503_150330"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="6" />
                            <feGaussianBlur
                              stdDeviation="6"
                              result="blurredShadow2"
                            />
                            <feFlood
                              floodColor="#266DF0"
                              floodOpacity="0.12"
                              result="shadowColor2"
                            />
                            <feComposite
                              in="shadowColor2"
                              in2="blurredShadow2"
                              operator="in"
                              result="coloredShadow2"
                            />
                            <feBlend
                              mode="normal"
                              in="coloredShadow2"
                              in2="effect1_dropShadow_503_150330"
                              result="effect2_dropShadow_503_150330"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect2_dropShadow_503_150330"
                              result="shape"
                            />
                          </filter>
                          <radialGradient
                            id="paint0_radial_503_150330"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(171 160) rotate(90) scale(162 188.914)"
                          >
                            {/* We can dynamically inject stroke color inside path depending on document classes via currentColor, or let css var handle it. But standard inline css is simpler with className. The radial gradient colors are updated below */}
                            <stop
                              className="stop-color-[#BCC3CE] dark:stop-color-[#383E47]"
                              stopColor="currentColor"
                            />
                            <stop
                              offset="1"
                              className="stop-color-[#BCC3CE] dark:stop-color-[#383E47]"
                              stopColor="currentColor"
                              stopOpacity="0"
                            />
                          </radialGradient>
                          <style>
                            {
                              "\n          #paint0_radial_503_150330 stop {\n            stop-color: #BCC3CE;\n          }\n          .dark #paint0_radial_503_150330 stop {\n            stop-color: #383E47;\n          }\n        "
                            }
                          </style>
                        </defs>
                      </svg>

                      <div className="flex flex-col items-center px-[32px] pb-[32px] mt-[-24px]">
                        <div className="flex flex-col items-center mb-[20px] text-center gap-[4px]">
                          <div className="text-[14px] font-[500] text-[#1A1A1A] dark:text-[#E5E5E5] transition-colors">
                            You don't have any notifications
                          </div>
                          <div className="text-[13px] font-[400] text-[#737373] dark:text-[#A3A3A3] leading-[20px] transition-colors">
                            We'll notify you about important updates and any
                            time you're mentioned on Attio.
                          </div>
                        </div>
                        <button
                          type="button"
                          className="inline-flex items-center justify-center px-[12px] py-[6px] bg-[#FFFFFF] dark:bg-[#2C313A] border border-[#E5E5E5] dark:border-[#383E47] rounded-[6px] text-[13px] font-[500] text-[#1A1A1A] dark:text-[#E5E5E5] shadow-[0px_1px_2px_rgba(0,0,0,0.04)] dark:shadow-none hover:bg-[#F5F5F5] dark:hover:bg-[#383E47] transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E5E5E5] dark:focus:ring-[#505967]"
                        >
                          Notifications Settings
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}
