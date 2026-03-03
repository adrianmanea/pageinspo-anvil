import React from "react";

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
      <div className="relative z-10 grid w-full max-w-[800px] grid-cols-1 md:grid-cols-[400px_400px] overflow-hidden rounded-[12px] bg-[#FFFFFF] shadow-[0_0_1px_rgba(24,26,27,0.04),0_3px_6px_rgba(24,26,27,0.08),0_9px_24px_rgba(24,26,27,0.16),0_0_0_1px_rgba(141,141,141,0.24)]">
        {/* Left Column */}
        <div className="flex flex-col w-full md:w-[400px] min-h-[506px] p-[16px] sm:p-[24px]">
          <div
            data-step="INVITED_WELCOME"
            className="flex flex-col gap-[32px] sm:gap-[40px] py-[16px] sm:py-[32px] w-full max-w-[368px] mx-auto md:mx-0"
          >
            <header className="flex flex-col gap-[24px] mt-[16px] w-full max-w-[304px] mx-auto">
              <a
                href="/logout"
                className="absolute top-[24px] left-[24px] flex w-[65px] h-[28px] items-center justify-center rounded-full border border-[#BBBBBB] bg-[#FFFFFF] px-[10px] py-[6px] text-[13px] font-[500] leading-[19px] text-[#202020] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] transition-colors hover:bg-[#F9FAFB] md:fixed md:bottom-[24px] md:top-auto"
              >
                Logout
              </a>

              <div className="flex flex-col gap-[4px] text-center w-full">
                <h1 className="w-full text-[28px] sm:text-[32px] font-[500] leading-[32px] sm:leading-[35px] tracking-[-0.61px] text-[#202020] whitespace-pre-line font-['Uxum_Grotesque',sans-serif]">
                  Welcome to Acme, the sales assistant your team never had
                </h1>
                <span className="sr-only">
                  Setup your workspace to get started with Acme.
                </span>
              </div>
            </header>

            <div className="flex flex-col w-full max-w-[304px] mx-auto text-center px-[8px] sm:px-0">
              <span className="mb-[16px] text-[14px] sm:text-[15px] font-[400] leading-[18px] tracking-[-0.03px] text-[#626262]">
                Acme does the busy work for you, so you can focus on growing
                your business.
              </span>
              <span className="text-[14px] sm:text-[15px] font-[400] leading-[18px] tracking-[-0.03px] text-[#626262]">
                Go ahead and explore the app.
              </span>
            </div>

            <footer className="flex flex-col gap-[24px] w-full max-w-[304px] mx-auto">
              <div className="flex flex-col w-full">
                <button className="flex w-full h-[40px] items-center justify-center rounded-full border border-transparent bg-[#202020] px-[10px] py-[6px] text-[15px] font-[500] leading-[19px] text-[#FDFDFD] transition-colors hover:bg-[#333333]">
                  Get started
                </button>
              </div>
              <ol
                aria-label="Onboarding progress"
                className="flex flex-row gap-[8px] w-[48px] h-[6px] mx-auto"
              >
                <li
                  aria-current="step"
                  className="h-[6px] w-[6px] rounded-full bg-[#8C8C8C]"
                >
                  <span className="sr-only">Welcome to Acme</span>
                </li>
                <li className="h-[6px] w-[6px] rounded-full bg-[#E9E9E9]">
                  <span className="sr-only">Your profile</span>
                </li>
                <li className="h-[6px] w-[6px] rounded-full bg-[#E9E9E9]">
                  <span className="sr-only">Connect your accounts</span>
                </li>
                <li className="h-[6px] w-[6px] rounded-full bg-[#E9E9E9]">
                  <span className="sr-only">Install Acme extension</span>
                </li>
              </ol>
            </footer>
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden md:flex flex-col w-[400px] min-h-[506px]">
          <div
            className="flex items-center justify-center w-[400px] h-[506px] py-[80px] px-[40px] bg-[#F7F3EF] bg-repeat"
            style={{
              backgroundImage:
                'url("https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/images/glass-tile.png")',
            }}
          >
            <div className="flex items-center justify-center w-full h-full">
              <img
                title="Product preview"
                alt="Product preview"
                src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/images/login-product-preview.webp"
                className="w-full h-auto max-h-full object-contain rounded-[8px] shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
