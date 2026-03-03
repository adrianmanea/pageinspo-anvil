import React from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function Page() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-[#F7F3EF] p-[16px] antialiased pointer-events-auto text-[13px] font-[400] text-[#202020]">
      {/* Blurred Dashboard Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <picture>
          <img
            src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/images/FakeProductBackground.light-DGUuCGDN.webp"
            alt="Dashboard background"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 z-10 bg-white/10 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex w-full max-w-[576px] flex-col overflow-hidden rounded-[12px] bg-[#FFFFFF] shadow-[0_0_1px_rgba(24,26,27,0.04),0_3px_6px_rgba(24,26,27,0.08),0_9px_24px_rgba(24,26,27,0.16),0_0_0_1px_rgba(141,141,141,0.24)] p-[16px]">
        <div
          data-step="SYNC_ACCOUNT"
          className="flex flex-col gap-[32px] sm:gap-[40px] px-[0px] py-[16px] sm:p-[32px] w-full max-w-[480px] mx-auto"
        >
          {/* Header */}
          <header className="flex flex-col gap-[24px] mt-[8px] sm:mt-[16px] w-full relative">
            <button className="absolute -left-[8px] -top-[32px] sm:-left-[16px] sm:-top-[32px] md:-left-[32px] md:-top-[32px] flex h-[28px] items-center justify-center rounded-full px-[10px] py-[6px] text-[13px] font-[500] leading-[19px] text-[#626262] transition-colors hover:bg-[#F9FAFB] z-10">
              <span className="mr-[6px] -ml-[2px] flex h-[16px] w-[16px] items-center justify-center">
                <ArrowLeft className="h-[16px] w-[16px]" />
              </span>
              Back
            </button>
            <a
              href="/logout"
              className="absolute top-0 right-0 sm:fixed sm:bottom-[24px] sm:right-[24px] sm:top-auto flex h-[28px] items-center justify-center rounded-full border border-[#BBBBBB] bg-[#FFFFFF] px-[10px] py-[6px] text-[13px] font-[500] leading-[19px] text-[#202020] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] transition-colors hover:bg-[#F9FAFB] z-10"
            >
              Logout
            </a>

            <div className="flex flex-col gap-[4px] text-center w-full max-w-[384px] mx-auto mt-[16px] sm:mt-0">
              <h1 className="w-full text-[28px] sm:text-[32px] font-[500] leading-[32px] sm:leading-[35px] tracking-[-0.61px] text-[#202020] whitespace-pre-line font-['Uxum_Grotesque',sans-serif]">
                Connect your accounts to sync contacts
              </h1>
              <span className="sr-only">
                Setup your workspace to get started with Acme.
              </span>
            </div>
          </header>

          {/* Benefits List */}
          <div className="flex flex-col w-full max-w-[448px] mx-auto">
            <div className="flex min-h-[48px] items-center gap-[12px] sm:gap-[16px] py-[12px] border-b border-[#D9D9D9]">
              <div className="flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center text-[#626262]">
                <CheckCircle2 className="h-[20px] w-[20px]" />
              </div>
              <span className="text-[14px] sm:text-[15px] font-[400] leading-[18px] tracking-[-0.03px] text-[#626262]">
                Acme imports contacts and interactions automatically
              </span>
            </div>

            <div className="flex min-h-[48px] items-center gap-[12px] sm:gap-[16px] py-[12px] border-b border-[#D9D9D9]">
              <div className="flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center text-[#626262]">
                <CheckCircle2 className="h-[20px] w-[20px]" />
              </div>
              <span className="text-[14px] sm:text-[15px] font-[400] leading-[18px] tracking-[-0.03px] text-[#626262]">
                Acme will keep your contacts private by default
              </span>
            </div>

            <div className="flex min-h-[48px] items-center gap-[12px] sm:gap-[16px] py-[12px] border-[#D9D9D9]">
              <div className="flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center text-[#626262]">
                <CheckCircle2 className="h-[20px] w-[20px]" />
              </div>
              <span className="text-[14px] sm:text-[15px] font-[400] leading-[18px] tracking-[-0.03px] text-[#626262]">
                Acme is secure, GDPR-compliant, and SOC II certified
              </span>
            </div>
          </div>

          {/* Connect Account Buttons & Footer */}
          <footer className="flex flex-col gap-[24px] w-full">
            <div className="flex flex-col w-full max-w-[304px] mx-auto gap-[16px]">
              <div className="flex flex-col gap-[8px] w-full">
                <button className="flex w-full h-[40px] items-center justify-between rounded-full border border-transparent bg-[#202020] px-[20px] py-[6px] transition-colors hover:bg-[#333333]">
                  <span className="flex h-[16px] w-[16px] items-center justify-center mr-[6px] -ml-[2px] bg-[#FFFFFF] rounded-sm p-[2px]">
                    <svg viewBox="0 0 48 48" className="h-full w-full">
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
                  <span className="flex-1 text-center text-[15px] font-[500] leading-[19px] text-[#FDFDFD]">
                    Connect Google account
                  </span>
                </button>

                <button className="flex w-full h-[40px] items-center justify-between rounded-full border border-transparent bg-[#202020] px-[20px] py-[6px] transition-colors hover:bg-[#333333]">
                  <span className="flex h-[16px] w-[16px] items-center justify-center mr-[6px] -ml-[2px]">
                    <svg viewBox="0 0 32 32" className="h-full w-full">
                      <rect
                        x="17"
                        y="17"
                        width="10"
                        height="10"
                        fill="#FEBA08"
                      />
                      <rect
                        x="5"
                        y="17"
                        width="10"
                        height="10"
                        fill="#05A6F0"
                      />
                      <rect
                        x="17"
                        y="5"
                        width="10"
                        height="10"
                        fill="#80BC06"
                      />
                      <rect x="5" y="5" width="10" height="10" fill="#F25325" />
                    </svg>
                  </span>
                  <span className="flex-1 text-center text-[15px] font-[500] leading-[19px] text-[#FDFDFD]">
                    Connect Microsoft account
                  </span>
                </button>

                <button className="flex w-full h-[40px] items-center justify-between rounded-full border border-transparent bg-[#202020] px-[20px] py-[6px] transition-colors hover:bg-[#333333]">
                  <span className="flex h-[16px] w-[16px] items-center justify-center mr-[6px] -ml-[2px]">
                    <svg viewBox="0 0 32 32" className="h-full w-full">
                      <path
                        fill="#BFC8D0"
                        fillRule="evenodd"
                        d="M16 31a14 14 0 1 0-12.2-7L2 31l7.3-1.7c2 1 4.3 1.7 6.7 1.7Zm0-2.2a11.8 11.8 0 1 0-9.7-5l-1 4 4-1c1.9 1.3 4.2 2 6.7 2Z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="url(#gradient-whatsapp)"
                        d="M28 16a12 12 0 0 1-18.8 9.9l-4.1 1 1-4A12 12 0 1 1 28 16Z"
                      />
                      <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M16 30a14 14 0 1 0-12.2-7L2 30l7.3-1.7c2 1 4.3 1.7 6.7 1.7Zm0-2.2a11.8 11.8 0 1 0-9.7-5l-1 4 4-1c1.9 1.3 4.2 2 6.7 2Z"
                        clipRule="evenodd"
                      />
                      <path
                        fill="#fff"
                        d="M12.5 9.5c-.3-.7-.8-.6-1.4-.6-.9 0-2.3 1-2.3 3.2 0 1.6.7 3.5 3.2 6.2 2.4 2.7 5.6 4 8.2 4a3 3 0 0 0 3.2-3c0-.4-.2-.6-.3-.6l-3-1.4c-.3-.1-.5 0-.7.2L18.2 19c-.2.2-.6 0-.7 0-.6-.2-2-.8-3.1-2-1.5-1.3-1.5-1.8-1.8-2.2-.2-.4 0-.6 0-.7l1-1.1c.1-.3 0-.7-.1-1l-1-2.5Z"
                      />
                      <defs>
                        <linearGradient
                          id="gradient-whatsapp"
                          x1="26.5"
                          x2="4"
                          y1="7"
                          y2="28"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#5BD066" />
                          <stop offset="1" stopColor="#27B43E" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="flex-1 text-center text-[15px] font-[500] leading-[19px] text-[#FDFDFD]">
                    Connect WhatsApp account
                  </span>
                </button>
              </div>

              <button className="flex w-full h-[40px] items-center justify-center rounded-full border border-transparent bg-transparent px-[10px] py-[6px] text-[15px] font-[500] leading-[19px] text-[#626262] transition-colors hover:bg-[#F9FAFB]">
                No, I like endless copy-paste
              </button>
            </div>

            {/* Progress Dots */}
            <ol
              aria-label="Onboarding progress"
              className="flex flex-row gap-[8px] w-[48px] h-[6px] mx-auto"
            >
              <li className="h-[6px] w-[6px] rounded-full bg-[#E9E9E9]">
                <span className="sr-only">Welcome to Acme</span>
              </li>
              <li className="h-[6px] w-[6px] rounded-full bg-[#E9E9E9]">
                <span className="sr-only">Your profile</span>
              </li>
              <li
                aria-current="step"
                className="h-[6px] w-[6px] rounded-full bg-[#8C8C8C]"
              >
                <span className="sr-only">Connect your accounts</span>
              </li>
              <li className="h-[6px] w-[6px] rounded-full bg-[#E9E9E9]">
                <span className="sr-only">Install Acme extension</span>
              </li>
            </ol>
          </footer>
        </div>
      </div>
    </div>
  );
}
