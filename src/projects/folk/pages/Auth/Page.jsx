import React, { useState, useEffect } from "react";
import { Hexagon, Layout } from "lucide-react";

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

  // Keep all standard background structure but we apply dark variants.
  return (
    <div className="min-h-screen w-full bg-[#FFFFFF] dark:bg-[#0E0E0E] font-sans text-[13px] text-[#202020] dark:text-[#EEEEEE] antialiased selection:bg-[#F3F4F6] dark:selection:bg-[#333333]">
      {/* 2-Column Main Layout Grid */}
      <div className="mx-auto grid min-h-screen w-full lg:grid-cols-2">
        {/* Left Column (Login Form) */}
        <div className="flex flex-col items-center justify-center p-[40px] lg:p-0">
          <div className="flex w-full max-w-[352px] flex-col gap-[32px] p-[20px]">
            {/* Header: Logo & Title */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="mb-[20px] flex min-h-[28px] items-center justify-center">
                <Hexagon className="h-[40px] w-[40px] text-[#202020] dark:text-[#EEEEEE]" />
              </div>
              <h1 className="text-[32px] font-[500] leading-[35.2px] tracking-[-0.026px] text-[#202020] dark:text-[#EEEEEE]">
                Get started with Acme
              </h1>
            </div>

            {/* Auth Buttons */}
            <div className="flex w-[304px] flex-col gap-[16px]">
              <a
                href="#"
                className="flex h-[40px] w-[304px] items-center justify-center rounded-[9999px] border-[0.666667px] border-transparent bg-[#202020] dark:bg-[#EEEEEE] px-[10px] py-[6px] text-[15px] font-[500] leading-[19px] tracking-[-0.026px] text-[#FDFDFD] dark:text-[#191919] transition-colors hover:bg-[#333333] dark:hover:bg-[#D9D9D9]"
              >
                <span className="ml-[-2px] mr-[6px] flex h-[16px] w-[16px] items-center justify-center">
                  <svg
                    viewBox="0 0 48 48"
                    className="h-[16px] w-[16px] text-[#FDFDFD] dark:text-[#191919]"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                    />
                    <path
                      fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                    />
                    <path
                      fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                    />
                  </svg>
                </span>
                Continue with Google
              </a>
              <button
                type="submit"
                className="flex h-[40px] w-[304px] items-center justify-center rounded-[9999px] border-[0.666667px] border-[#BBBBBB] dark:border-[#606060] bg-[#FFFFFF] dark:bg-[#222222] px-[10px] py-[6px] text-[15px] font-[500] leading-[19px] text-[#202020] dark:text-[#EEEEEE] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.06)] dark:shadow-[0px_1px_2px_0px_rgba(0,0,0,0.24)] transition-colors hover:bg-[#F9FAFB] dark:hover:bg-[#333333]"
              >
                Continue with email
              </button>

              {/* Legal Text */}
              <div className="mt-[24px] text-center text-[13px] font-[400] leading-[18px] tracking-[-0.026px] text-[#626262] dark:text-[#B4B4B4]">
                By signing up you agree to the
                <br />
                Acme{" "}
                <a
                  href="#"
                  className="font-[400] text-[#626262] dark:text-[#B4B4B4] underline decoration-[rgba(0,0,0,0.15)] dark:decoration-[#6E6E6E] hover:text-[#202020] dark:hover:text-[#FFFFFF]"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="font-[400] text-[#626262] dark:text-[#B4B4B4] underline decoration-[rgba(0,0,0,0.15)] dark:decoration-[#6E6E6E] hover:text-[#202020] dark:hover:text-[#FFFFFF]"
                >
                  Terms of Use
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Product Preview) */}
        <div className="hidden bg-[#F7F3EF] dark:bg-gradient-to-tl dark:from-[#0E0E0E] dark:via-[#0E0E0E] dark:via-[60%] dark:to-[#363636] p-[80px] lg:flex lg:flex-col lg:items-center lg:justify-center xl:p-[80px_120px]">
          {/* Glass Tile Background Image (Mocked out with inline style or class if desired, using basic Tailwind bg for now based on style capture) */}
          <div className="flex w-full max-w-[1010.67px] flex-col overflow-hidden">
            <div className="flex flex-col gap-[64px]">
              {/* Product Image */}
              <div className="relative w-full max-w-[1024px]">
                <img
                  src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/images/login-product-preview.webp"
                  alt="Product preview"
                  className="w-full rounded-[8px]"
                />
              </div>

              {/* Trusted metrics footer */}
              <div className="flex w-full max-w-[1024px] flex-col gap-[16px] pr-[32px]">
                <div className="text-[15.2px] font-[400] leading-[18px] tracking-[-0.026px] text-[#412F1D] dark:text-[#EEEEEE]">
                  Trusted by 3000+ companies around the world
                </div>

                <div className="flex flex-wrap items-center gap-[32px]">
                  {/* Product Hunt */}
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[28px] font-medium leading-[28px] tracking-[-0.026px] text-[#412F1D] dark:text-[#EEEEEE]">
                      4.9
                    </span>
                    <div className="flex flex-col justify-center gap-[2px]">
                      <div className="flex h-[16px] text-[#412F1D] dark:text-[#D9D9D9]">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            height="16"
                            viewBox="0 -960 960 960"
                            width="16"
                            fill="currentColor"
                          >
                            <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                          </svg>
                        ))}
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <div className="flex h-[16px] w-[16px] items-center justify-center">
                          <svg
                            viewBox="0 0 26 26"
                            className="h-[14px] w-[14px] rounded-full"
                          >
                            <path
                              d="M13 25.25C19.7657 25.25 25.25 19.7657 25.25 13C25.25 6.23433 19.7657 0.75 13 0.75C6.23433 0.75 0.75 6.23433 0.75 13C0.75 19.7657 6.23433 25.25 13 25.25Z"
                              fill="#FF6154"
                            />
                            <path
                              d="M14.6334 13H11.1624V9.325H14.6334C15.1208 9.325 15.5882 9.51859 15.9327 9.86319C16.2773 10.2078 16.4709 10.6752 16.4709 11.1625C16.4709 11.6498 16.2773 12.1172 15.9327 12.4618C15.5882 12.8064 15.1208 13 14.6334 13ZM14.6334 6.875H8.7124V19.125H11.1624V15.45H14.6334C15.7706 15.45 16.8611 14.9983 17.6652 14.1942C18.4692 13.3902 18.9209 12.2996 18.9209 11.1625C18.9209 10.0254 18.4692 8.93484 17.6652 8.13078C16.8611 7.32672 15.7706 6.875 14.6334 6.875Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div className="whitespace-nowrap text-[14.4px] font-[400] leading-[18px] tracking-[-0.026px] text-[#412F1D] dark:text-[#EEEEEE]">
                          Product hunt
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chrome Store */}
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[28px] font-medium leading-[28px] tracking-[-0.026px] text-[#412F1D] dark:text-[#EEEEEE]">
                      4.8
                    </span>
                    <div className="flex flex-col justify-center gap-[2px]">
                      <div className="flex h-[16px] text-[#412F1D] dark:text-[#D9D9D9]">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            height="16"
                            viewBox="0 -960 960 960"
                            width="16"
                            fill="currentColor"
                          >
                            <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                          </svg>
                        ))}
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <div className="flex h-[16px] w-[16px] items-center justify-center">
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-[14px] w-[14px] rounded-full"
                          >
                            <path
                              d="M14.0006 1.75339C14.0006 1.75339 21.2212 1.43052 25.0494 8.66246H13.3862C13.3862 8.66246 11.1851 8.59177 9.30484 11.2525C8.76473 12.3693 8.18417 13.5197 8.83568 15.7868C7.89714 14.2025 3.85303 7.18584 3.85303 7.18584C3.85303 7.18584 6.70553 2.03929 14.0005 1.75339H14.0006Z"
                              fill="#EF3F36"
                            />
                            <path
                              d="M24.6746 20.1124C24.6746 20.1124 21.3427 26.5068 13.1465 26.1906C14.1592 24.4448 18.9797 16.1264 18.9797 16.1264C18.9797 16.1264 20.1444 14.2629 18.7704 11.3096C18.0716 10.2837 17.3593 9.21068 15.0639 8.63878C16.9104 8.62206 25.0291 8.63878 25.0291 8.63878C25.0291 8.63878 28.0705 13.6743 24.6746 20.1124Z"
                              fill="#FCD900"
                            />
                            <path
                              d="M3.37702 20.163C3.37702 20.163 -0.515246 14.0914 3.85971 7.17566C4.86908 8.92146 9.68962 17.2399 9.68962 17.2399C9.68962 17.2399 10.7294 19.1774 13.9802 19.4666C15.2192 19.3758 16.5087 19.2985 18.1561 17.6065C17.2479 19.2077 13.1733 26.2042 13.1733 26.2042C13.1733 26.2042 7.27254 26.3119 3.37692 20.163H3.37702Z"
                              fill="#61BC5B"
                            />
                            <path
                              d="M13.1431 26.2512L14.7837 19.4297C14.7837 19.4297 16.5863 19.2883 18.0988 17.6368C17.1602 19.2818 13.1431 26.2512 13.1431 26.2512Z"
                              fill="#5AB055"
                            />
                            <path
                              d="M8.50488 14.078C8.50488 11.0709 10.9523 8.6322 13.9702 8.6322C16.9881 8.6322 19.4356 11.0709 19.4356 14.078C19.4356 17.0851 16.9881 19.5237 13.9702 19.5237C10.9523 19.5204 8.50488 17.0851 8.50488 14.078Z"
                              fill="white"
                            />
                            <path
                              d="M9.41992 14.078C9.41992 11.5754 11.4556 9.5437 13.9705 9.5437C16.482 9.5437 18.521 11.5721 18.521 14.078C18.521 16.5806 16.4855 18.6123 13.9705 18.6123C11.4589 18.6123 9.41992 16.5806 9.41992 14.078Z"
                              fill="url(#paint0_linear_1464_2098)"
                            />
                            <path
                              d="M25.0257 8.64232L18.2708 10.6168C18.2708 10.6168 17.2514 9.12663 15.0605 8.64232C16.9611 8.63219 25.0257 8.64232 25.0257 8.64232Z"
                              fill="#EACA05"
                            />
                            <path
                              d="M8.70405 15.5379C7.75536 13.8998 3.85303 7.18579 3.85303 7.18579L8.8559 12.117C8.8559 12.117 8.34273 13.1699 8.53523 14.6768L8.70395 15.5379H8.70405Z"
                              fill="#DF3A32"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1464_2098"
                                x1="13.9703"
                                y1="9.60773"
                                x2="13.9703"
                                y2="18.3394"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#86BBE5" />
                                <stop offset="1" stopColor="#1072BA" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="whitespace-nowrap text-[14.4px] font-[400] leading-[18px] tracking-[-0.026px] text-[#412F1D] dark:text-[#EEEEEE]">
                          Chrome store
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* G2 Review */}
                  <div className="flex items-center gap-[8px]">
                    <span className="text-[28px] font-medium leading-[28px] tracking-[-0.026px] text-[#412F1D] dark:text-[#EEEEEE]">
                      4.5
                    </span>
                    <div className="flex flex-col justify-center gap-[2px]">
                      <div className="flex h-[16px] text-[#412F1D] dark:text-[#D9D9D9]">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            height="16"
                            viewBox="0 -960 960 960"
                            width="16"
                            fill="currentColor"
                          >
                            <path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z" />
                          </svg>
                        ))}
                      </div>
                      <div className="flex items-center gap-[4px]">
                        <div className="flex h-[16px] w-[16px] items-center justify-center">
                          <svg
                            viewBox="0 0 14 14"
                            fill="none"
                            className="h-[14px] w-[14px] rounded-full"
                          >
                            <path
                              d="M7.00195 13.999C10.8679 13.999 14.002 10.8651 14.002 6.99902C14.002 3.13303 10.8679 -0.000976562 7.00195 -0.000976562C3.13596 -0.000976562 0.00195312 3.13303 0.00195312 6.99902C0.00195312 10.8651 3.13596 13.999 7.00195 13.999Z"
                              fill="#FF492C"
                            />
                            <path
                              d="M10.0317 5.36124H8.83608C8.86828 5.17364 8.98451 5.06864 9.2197 4.94964L9.43946 4.83764C9.83294 4.63604 10.0429 4.40784 10.0429 4.03544C10.0429 3.80164 9.95191 3.61684 9.77127 3.48384C9.59073 3.35084 9.37789 3.28504 9.12868 3.28504C8.93592 3.28277 8.74666 3.33678 8.58412 3.44044C8.4203 3.54124 8.2985 3.67144 8.2229 3.83384L8.56868 4.18104C8.70309 3.90944 8.89774 3.77644 9.15387 3.77644C9.37088 3.77644 9.50387 3.88844 9.50387 4.04384C9.50387 4.17404 9.43946 4.28184 9.19034 4.40784L9.04892 4.47644C8.7423 4.63184 8.52946 4.80964 8.4063 5.01124C8.28311 5.21284 8.2229 5.46624 8.2229 5.77284V5.85684H10.0317V5.36124Z"
                              fill="white"
                            />
                            <path
                              d="M9.87178 6.42773H7.89215L6.90234 8.14134H8.88193L9.87178 9.85633L10.8615 8.14134L9.87178 6.42773Z"
                              fill="white"
                            />
                            <path
                              d="M7.07401 9.28555C5.81401 9.28555 4.78782 8.25932 4.78782 6.99932C4.78782 5.73932 5.81401 4.71312 7.07401 4.71312L7.85662 3.07651C7.5989 3.02527 7.33677 2.99947 7.07401 2.99951C4.86482 2.99951 3.07422 4.79012 3.07422 6.99932C3.07422 9.20854 4.86482 10.9991 7.07401 10.9991C7.92063 11.0007 8.74561 10.7319 9.42885 10.2319L8.56365 8.73112C8.14969 9.08862 7.62099 9.28545 7.07401 9.28555Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <div className="whitespace-nowrap text-[14.4px] font-[400] leading-[18px] tracking-[-0.026px] text-[#412F1D] dark:text-[#EEEEEE]">
                          G2 review
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
