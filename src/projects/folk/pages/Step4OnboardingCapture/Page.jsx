import React from "react";
import { ArrowLeft } from "lucide-react";

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
          data-step="GET_EXTENSION"
          className="flex flex-col gap-[32px] sm:gap-[40px] px-[0px] py-[16px] sm:p-[32px] w-full max-w-[480px] mx-auto"
        >
          {/* Header */}
          <header className="flex flex-col gap-[24px] mt-[8px] sm:mt-[16px] w-full relative">
            <button className="absolute -left-[8px] -top-[32px] sm:-left-[16px] sm:-top-[32px] md:-left-[32px] md:-top-[32px] flex h-[28px] items-center justify-center rounded-full px-[10px] py-[6px] text-[13px] font-[500] leading-[19px] text-[#626262] transition-colors hover:bg-[rgba(0,0,0,0.055)] z-10">
              <span className="mr-[6px] -ml-[2px] flex h-[16px] w-[16px] items-center justify-center">
                <ArrowLeft className="h-[16px] w-[16px]" />
              </span>
              Back
            </button>
            <a
              href="/logout"
              className="absolute top-0 right-0 sm:fixed sm:bottom-[24px] sm:right-[24px] sm:top-auto flex h-[28px] items-center justify-center rounded-full border border-[#BBBBBB] bg-[#FFFFFF] px-[10px] py-[6px] text-[13px] font-[500] leading-[19px] text-[#202020] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] transition-colors hover:bg-[#F5F5F5] z-10"
            >
              Logout
            </a>

            <div className="flex flex-col gap-[4px] text-center w-full max-w-[334px] mx-auto mt-[16px] sm:mt-0">
              <h1 className="w-full text-[28px] sm:text-[32px] font-[500] leading-[32px] sm:leading-[35.2px] tracking-[-0.608px] text-[#202020] whitespace-pre-line font-['Uxum_Grotesque',sans-serif]">
                {"Instantly capture\ncontacts from LinkedIn"}
              </h1>
              <span className="sr-only">
                Setup your workspace to get started with Acme.
              </span>
            </div>
          </header>

          {/* Marketing Image Preview */}
          <div className="flex w-full flex-col justify-between">
            <picture className="block w-full">
              <img
                src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/images/login-product-preview.webp"
                alt="Product preview"
                className="block w-full max-w-full rounded-[8px] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)]"
              />
            </picture>
          </div>

          {/* Action Buttons & Footer */}
          <footer className="flex flex-col gap-[24px] w-full">
            <div className="flex flex-col w-full max-w-[304px] mx-auto gap-[16px]">
              <div className="flex flex-col gap-[16px] w-full">
                <button className="flex w-full h-[40px] items-center justify-center rounded-full border border-transparent bg-[#202020] px-[10px] py-[6px] text-[15px] font-[500] leading-[19px] text-[#FDFDFD] transition-colors hover:bg-[#3D3D3D]">
                  Download AcmeX
                </button>
                <button className="flex w-full h-[40px] items-center justify-center rounded-full border border-transparent bg-transparent px-[10px] py-[6px] text-[15px] font-[500] leading-[19px] text-[#626262] transition-colors hover:bg-[rgba(0,0,0,0.055)]">
                  I'll do this later
                </button>
              </div>
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
              <li className="h-[6px] w-[6px] rounded-full bg-[#E9E9E9]">
                <span className="sr-only">Connect your accounts</span>
              </li>
              <li
                aria-current="step"
                className="h-[6px] w-[6px] rounded-full bg-[#8C8C8C]"
              >
                <span className="sr-only">Install Acme extension</span>
              </li>
            </ol>
          </footer>
        </div>
      </div>
    </div>
  );
}
