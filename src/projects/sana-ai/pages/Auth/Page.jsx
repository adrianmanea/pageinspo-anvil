import React, { useState, useEffect } from "react";
import { Hexagon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return new URLSearchParams(window.location.search).get("theme");
    }
    return null;
  });

  const [authState, setAuthState] = useState("email");
  const [emailValue, setEmailValue] = useState("");
  const [codeValue, setCodeValue] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setAuthState("code");
  };

  const handleCodeChange = (e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 6);
    setCodeValue(val);
  };

  const handleBack = () => {
    setAuthState("email");
    setCodeValue("");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#131314] text-[rgb(10,18,23)] dark:text-[rgb(232,232,232)] font-sans flex flex-col transition-opacity duration-150">
      {/* Header wrapper with relative positioning for absolute child content centering */}
      <div className="flex flex-col min-h-screen p-[22px_4vw] xl:p-[22px_62px_22px] w-full transition-all duration-500 relative">
        <div className="flex items-center justify-between h-[44px] absolute top-[22px] left-[4vw] right-[4vw] xl:left-[62px] xl:right-[62px] z-50">
          <a
            href="#"
            className="flex items-center justify-center w-[44px] h-[44px] rounded-full z-21"
          >
            <Hexagon
              size={24}
              className="text-[#0a1217] dark:text-[#e8e8e8]"
              fill="currentColor"
            />
          </a>

          <nav className="absolute left-1/2 -translate-x-1/2 h-[44px] z-24 dark:hidden hidden md:block">
            <ul className="flex bg-[rgb(245,245,245)] rounded-full h-[44px] transition-colors duration-200">
              <li className="flex">
                <a
                  href="#overview"
                  className="inline-flex text-[rgba(10,18,23,0.6)] hover:text-[rgb(10,18,23)] font-[500] text-[13px] h-[44px] px-[16px] pl-[24px] rounded-l-full items-center transition-colors whitespace-nowrap"
                >
                  Overview
                </a>
              </li>
              <li className="flex">
                <a
                  href="#pricing"
                  className="inline-flex text-[rgba(10,18,23,0.6)] hover:text-[rgb(10,18,23)] font-[500] text-[13px] h-[44px] px-[16px] items-center transition-colors whitespace-nowrap"
                >
                  Pricing
                </a>
              </li>
              <li className="flex">
                <a
                  href="#privacy-and-terms"
                  className="inline-flex text-[rgba(10,18,23,0.6)] hover:text-[rgb(10,18,23)] font-[500] text-[13px] h-[44px] px-[16px] items-center transition-colors whitespace-nowrap"
                >
                  Privacy and terms
                </a>
              </li>
              <li className="flex">
                <a
                  href="#faq"
                  className="inline-flex text-[rgba(10,18,23,0.6)] hover:text-[rgb(10,18,23)] font-[500] text-[13px] h-[44px] px-[24px] pr-[16px] rounded-r-full items-center transition-colors whitespace-nowrap"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <main className="flex flex-1 gap-[4%] lg:gap-[9%] max-w-[1700px] mx-auto w-full mt-[68px]">
          {/* Left Form */}
          <section className="flex flex-col justify-center items-center w-full lg:flex-1 min-w-0">
            <div
              className={`flex flex-col w-full mx-auto ${authState === "email" ? "max-w-[400px] dark:max-w-[450px]" : "max-w-[400px]"}`}
            >
              {authState === "email" ? (
                <div className="flex flex-col mb-[24px] sm:mb-[32px] w-full text-center px-[4vw] sm:px-0">
                  <h1 className="flex flex-col text-[28px] sm:text-[34px] font-[500] leading-[1.3] sm:leading-[1.4] mb-[16px] sm:mb-[24px]">
                    Welcome to Acme
                    <span className="text-[rgba(10,18,23,0.6)] dark:text-[rgba(232,232,232,0.6)] block mt-[4px] sm:mt-0">
                      Your AI agent for work
                    </span>
                  </h1>
                  <p className="text-[15px] sm:text-[16px] dark:text-[rgba(232,232,232,0.4)] leading-[1.5]">
                    <span className="text-[rgba(10,18,23,0.6)] dark:text-inherit">
                      Sign in or sign up for free
                      <br />
                      with your work email
                    </span>
                  </p>
                </div>
              ) : (
                <div className="flex flex-col mb-[24px] sm:mb-[32px] w-full text-center items-center px-[4vw] sm:px-0">
                  <h1 className="flex flex-col text-[22px] sm:text-[24px] font-[500] leading-[33.6px] mb-[4px]">
                    We sent you a code
                  </h1>
                  <p className="text-[15px] sm:text-[16px] text-[rgba(10,18,23,0.6)] dark:text-[rgba(232,232,232,0.6)] max-w-[470px]">
                    Please wait
                  </p>
                </div>
              )}

              <div className="flex flex-col w-full relative">
                {/* Google Sign in */}
                <div
                  className={`flex flex-col gap-[12px] w-full items-center transition-opacity duration-300 ${authState !== "email" ? "opacity-0 overflow-hidden inert absolute left-0 top-0 pointer-events-none" : "relative"}`}
                >
                  <button className="w-full flex items-center justify-center gap-[12px] h-[44px] bg-white dark:bg-[#131314] dark:hover:bg-[#1e1e1e] border border-[#dadce0] dark:border-transparent font-[500] text-[14px] text-[#3c4043] dark:text-[#e8eaed] rounded-full hover:bg-[rgba(10,18,23,0.05)] transition-colors">
                    <FcGoogle size={16} />
                    Continue with Google
                  </button>

                  <div className="flex justify-center text-[14px] font-[500] text-[rgba(10,18,23,0.25)] dark:text-[rgba(232,232,232,0.25)] h-[20px] leading-[20px]">
                    or
                  </div>
                </div>

                {authState === "email" ? (
                  <div className="flex flex-col w-full items-center mt-[12px]">
                    <form
                      className="flex flex-col w-full"
                      onSubmit={handleEmailSubmit}
                    >
                      <input
                        type="email"
                        placeholder="name@work-email.com"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        className="flex items-center border-[1px] border-[rgba(10,18,23,0.15)] dark:border-[rgba(232,232,232,0.15)] rounded-[24px] text-[14px] font-[500] min-h-[48px] px-[24px] py-[12px] bg-transparent focus:outline-none transition-colors w-full"
                      />

                      {/* Dark mode text notification */}
                      <p className="hidden dark:block mt-[8px] mb-[12px] p-[12px_16px] sm:p-[12px_42px_12px_16px] bg-[rgb(30,31,32)] rounded-[12px] text-[13px] leading-[1.3] text-left">
                        <b className="font-[500]">Using your work email </b>
                        will make it easier for you to collaborate with your
                        team.
                      </p>

                      <button
                        type="submit"
                        className={`flex items-center justify-center border-transparent rounded-[24px] text-[14px] font-[500] min-h-[44px] px-[24px] py-[12px] mt-[8px] ${emailValue.length > 0 ? "bg-[#131314] text-white hover:bg-[#1e1e1e] dark:bg-[rgb(232,232,232)] dark:text-[rgb(19,19,20)]" : "bg-[rgba(10,18,23,0.04)] dark:bg-[rgb(43,43,44)] text-[rgba(10,18,23,0.4)] dark:text-[rgb(88,88,88)] cursor-not-allowed"} transition-colors w-full`}
                        disabled={emailValue.length === 0}
                      >
                        <span className="dark:hidden">
                          Enter your work email
                        </span>
                        <span className="hidden dark:block">
                          Continue anyway
                        </span>
                      </button>
                    </form>
                  </div>
                ) : (
                  <div className="flex flex-col w-full items-center mt-[12px]">
                    <form className="flex flex-col w-full items-center">
                      <label className="block w-full max-w-[400px] relative transition-all duration-200 border-[0.666667px] border-solid border-[rgba(10,18,23,0.15)] dark:border-[rgba(232,232,232,0.15)] rounded-full focus-within:border-[rgba(10,18,23,0.6)] dark:focus-within:border-[rgba(232,232,232,0.6)] hover:border-[rgba(10,18,23,0.2)] dark:hover:border-[rgba(232,232,232,0.2)] bg-transparent cursor-text">
                        <div className="absolute overflow-hidden w-[1px] h-[1px] whitespace-nowrap cursor-default">
                          Enter one time code
                        </div>
                        <input
                          name="code"
                          type="text"
                          inputMode="numeric"
                          autoComplete="one-time-code"
                          value={codeValue}
                          onChange={handleCodeChange}
                          className="absolute inset-0 w-full h-full opacity-0 outline-none"
                          maxLength={6}
                        />
                        <div
                          role="presentation"
                          className="w-full min-h-[48px] grid grid-cols-6 px-[20px] sm:px-[42px] items-center pointer-events-none"
                        >
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              className="flex justify-center items-center h-full"
                            >
                              {i < codeValue.length ? (
                                <span className="text-[14px] font-[500] leading-[19.6px] text-black dark:text-white">
                                  {codeValue[i]}
                                </span>
                              ) : (
                                <span className="text-[rgba(10,18,23,0.25)] dark:text-[rgba(232,232,232,0.25)] text-[14px] font-[500] leading-[19.6px]">
                                  0
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </label>

                      <button
                        type="button"
                        className="mx-auto text-[rgba(10,18,23,0.4)] dark:text-[rgba(232,232,232,0.4)] hover:text-[#0a1217] dark:hover:text-[#e8e8e8] text-[12px] font-[500] px-[12px] py-[6px] transition-colors mt-[8px]"
                      >
                        Resend code
                      </button>

                      <div className="flex gap-[8px] mt-[32px] w-full justify-center">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="flex items-center justify-center min-w-min h-[44px] px-[20px] py-[12px] rounded-full text-[14px] font-[500] border border-[rgba(0,0,0,0)] dark:border-[#3c4043] bg-[#131314] text-white dark:bg-transparent dark:text-[#e8e8e8] dark:hover:bg-[#1e1e1e] transition-colors"
                        >
                          Back
                        </button>
                        <button
                          disabled={codeValue.length < 6}
                          className={`flex-1 flex items-center justify-center h-[44px] px-[24px] py-[12px] rounded-full text-[14px] font-[500] border border-transparent transition-colors ${codeValue.length === 6 ? "bg-[#131314] text-white hover:bg-[#1e1e1e] dark:bg-[rgb(232,232,232)] dark:text-[rgb(19,19,20)]" : "bg-[rgba(10,18,23,0.04)] dark:bg-[rgb(43,43,44)] text-[rgba(10,18,23,0.4)] dark:text-[rgb(88,88,88)]"}`}
                        >
                          Continue
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* TOS text */}
              <p
                className={`mt-[32px] text-[13px] leading-[1.5] text-[rgba(10,18,23,0.4)] dark:text-[rgba(232,232,232,0.4)] text-center w-full mx-auto ${authState !== "email" ? "hidden" : ""}`}
              >
                By signing up to a free account or Team workspace, you agree to
                the{" "}
                <a
                  href="#"
                  className="underline hover:text-[rgba(10,18,23,0.7)] dark:hover:text-[rgba(232,232,232,0.7)] transition-colors"
                  style={{ textDecorationColor: "var(--tw-text-opacity)" }}
                >
                  MSA
                </a>
                ,{" "}
                <a
                  href="#"
                  className="underline hover:text-[rgba(10,18,23,0.7)] dark:hover:text-[rgba(232,232,232,0.7)] transition-colors"
                  style={{ textDecorationColor: "var(--tw-text-opacity)" }}
                >
                  Product Terms
                </a>
                ,{" "}
                <a
                  href="#"
                  className="underline hover:text-[rgba(10,18,23,0.7)] dark:hover:text-[rgba(232,232,232,0.7)] transition-colors"
                  style={{ textDecorationColor: "var(--tw-text-opacity)" }}
                >
                  Policies
                </a>
                ,{" "}
                <a
                  href="#"
                  className="underline hover:text-[rgba(10,18,23,0.7)] dark:hover:text-[rgba(232,232,232,0.7)] transition-colors"
                  style={{ textDecorationColor: "var(--tw-text-opacity)" }}
                >
                  Privacy Notice
                </a>
                , and{" "}
                <a
                  href="#"
                  className="underline hover:text-[rgba(10,18,23,0.7)] dark:hover:text-[rgba(232,232,232,0.7)] transition-colors"
                  style={{ textDecorationColor: "var(--tw-text-opacity)" }}
                >
                  Cookie Notice
                </a>
                . By signing up to an Enterprise workspace, you agree to the{" "}
                <a
                  href="#"
                  className="underline hover:text-[rgba(10,18,23,0.7)] dark:hover:text-[rgba(232,232,232,0.7)] transition-colors"
                  style={{ textDecorationColor: "var(--tw-text-opacity)" }}
                >
                  Policies
                </a>
                ,{" "}
                <a
                  href="#"
                  className="underline hover:text-[rgba(10,18,23,0.7)] dark:hover:text-[rgba(232,232,232,0.7)] transition-colors"
                  style={{ textDecorationColor: "var(--tw-text-opacity)" }}
                >
                  Privacy Notice
                </a>
                , and{" "}
                <a
                  href="#"
                  className="underline hover:text-[rgba(10,18,23,0.7)] dark:hover:text-[rgba(232,232,232,0.7)] transition-colors"
                  style={{ textDecorationColor: "var(--tw-text-opacity)" }}
                >
                  Cookie Notice
                </a>
                .
              </p>
            </div>
          </section>

          {/* Right Hero Image */}
          <section className="hidden lg:flex items-center justify-center bg-[rgb(23,24,26)] rounded-[18px] lg:flex-[1.2] overflow-hidden relative max-h-[calc(100vh-112px)] w-full min-w-0">
            <div className="relative w-full h-full flex items-center justify-center p-[4%]">
              <img
                src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/images/login-product-preview.webp"
                alt="Hero"
                className="block w-full h-auto max-h-full aspect-[4/3] object-cover rounded-[12px] shadow-2xl transition-all"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
