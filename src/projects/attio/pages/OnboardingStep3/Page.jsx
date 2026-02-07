import React, { useState, useEffect } from "react";
import { ChevronLeft, Podcast, Newspaper, Sparkles, Users, Megaphone, MoreHorizontal, Search, Home, Settings, Filter, Plus } from "lucide-react";

export default function OnboardingStep3Page() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return new URLSearchParams(window.location.search).get("theme");
    }
    return null;
  });

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // Brand Icons as components for cleaner usage
  const InstagramIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
  );
  
  const GoogleIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
  );

  const YoutubeIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  );

  const RedditIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>
  );

  const XIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
  );

  const FacebookIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.797 1.603-2.797 2.898v1.074h3.44l-1.054 3.667h-2.386l.004 7.98C21.027 21.91 24 17.326 24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.326 2.973 9.91 8.04 10.191l-.939 1.5Z"/></svg>
  );

  const LinkedinIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 5.432-5.17 5.432 0v8.306h5v-10.5c0-5.386-5.791-5.592-7.77-2.957l-2.694-2.543z"/></svg>
  );

  const options = [
    { id: "instagram", label: "Instagram", icon: InstagramIcon },
    { id: "google", label: "Google", icon: GoogleIcon },
    { id: "podcast", label: "Podcast", icon: Podcast },
    { id: "newsletter", label: "Newsletter", icon: Newspaper },
    { id: "ai", label: "AI", icon: Sparkles },
    { id: "youtube", label: "Youtube", icon: YoutubeIcon },
    { id: "reddit", label: "Reddit", icon: RedditIcon },
    { id: "x", label: "X.com", icon: XIcon },
    { id: "friends", label: "Friends / Coworker", icon: Users },
    { id: "facebook", label: "Facebook", icon: FacebookIcon },
    { id: "billboard", label: "Billboard / Outside", icon: Megaphone },
    { id: "linkedin", label: "LinkedIn", icon: LinkedinIcon },
    { id: "other", label: "Other", icon: MoreHorizontal },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center bg-white dark:bg-[#1b1d21] pt-[32px] pb-[24px] gap-[24px] px-4 sm:px-6 lg:px-8"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] bg-[#E6E7EA] dark:bg-[#313337] z-50">
        <div
          className="h-[2px] bg-[#232529] dark:bg-[#EEEFF1] rounded-[4px]"
          style={{ width: "37.5%" }}
        />
      </div>

      {/* Logo */}
      <div className="flex items-center gap-[4px] w-[96px] h-[24px]">
        <a href="/" className="flex items-center justify-center">
          <img
            alt="Grapho logo"
            src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/component-assets/grapho-dark.svg"
            className="w-[96px] h-[24px] dark:hidden"
          />
          <img
             alt="Grapho logo"
             src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/component-assets/grapho-light.svg"
             className="w-[96px] h-[24px] hidden dark:block"
          />
        </a>
      </div>

      {/* Main Card Container */}
      <div className="flex-1 flex items-center justify-center w-full">
        {/* Card */}
        <div className="flex flex-col lg:flex-row w-full max-w-[1130px] lg:h-[692px] border border-[#EEEFF1] dark:border-[#27282B] rounded-[20px] overflow-hidden">
          {/* Left Side - Form */}
          <div className="flex flex-col w-full lg:w-[564px] lg:min-w-[564px] lg:max-w-[564px] h-auto lg:h-[690px]">
            <div className="p-[32px] lg:p-[72px] flex justify-center h-full">
              <div className="flex flex-col items-center w-full max-w-[420px]">
                
                {/* Header with Back Button */}
                <div className="flex flex-col gap-[16px] w-full mb-[28px]">
                  <div className="w-full">
                     <button
                        type="button"
                        className="flex items-center justify-center w-[28px] h-[28px] rounded-[8px] text-[#000000] dark:text-[#9FA1A7] hover:bg-[#F3F4F6] dark:hover:bg-[#232529] transition-colors -ml-[7px]"
                     >
                        <ChevronLeft size={16} />
                     </button>
                  </div>
                  <div className="flex flex-col gap-[8px]">
                     <h1 className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#232529] dark:text-[#EEEFF1]">
                        How did you hear about us?
                     </h1>
                     <p className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#75777C] dark:text-[#86888D]">
                        Please select below where you found out about Attio. This step is optional.
                     </p>
                  </div>
                </div>

                {/* Options Grid */}
                <div className="flex flex-wrap content-start gap-[12px] w-full mb-auto">
                    {options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => setSelectedOption(option.id)}
                            className={`flex items-center justify-center gap-[6px] px-[6px] py-[4px] h-[28px] rounded-[8px] border transition-all
                                ${selectedOption === option.id 
                                    ? "bg-[#232529] dark:bg-[#EEEFF1] text-white dark:text-[#232529] border-transparent" 
                                    : "bg-white dark:bg-[#202225] border-transparent hover:border-[#EEEFF1] dark:hover:border-[#27282B] shadow-[rgba(24,39,75,0.18)_0px_0px_2px_0px,rgba(24,39,75,0.04)_0px_1px_3px_0px] text-[#232529] dark:text-[#EEEFF1]"
                                }`
                            }
                        >
                            <option.icon className={selectedOption === option.id ? "text-white dark:text-[#232529] w-[14px] h-[14px]" : "text-[#232529] dark:text-[#EEEFF1] w-[14px] h-[14px]"} />
                            <span className="text-[12px] font-[500] leading-[16px] whitespace-nowrap px-[2px]">
                                {option.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-col w-full gap-[12px] mt-[28px]">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-[6px] w-full h-[36px] px-[12px] py-[8px] bg-[#266DF0] rounded-[10px] text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-white shadow-[rgba(35,37,41,0.1)_0px_0px_0px_1px_inset,rgba(38,109,240,0.12)_0px_2px_4px_-2px,rgba(38,109,240,0.08)_0px_3px_6px_-2px] dark:shadow-[rgba(244,245,246,0.1)_0px_0px_0px_1px_inset,rgba(38,109,240,0.12)_0px_2px_4px_-2px,rgba(38,109,240,0.08)_0px_3px_6px_-2px] hover:bg-[#0E55D9] transition-colors"
                  >
                    Continue
                  </button>
                  <button
                     type="button"
                     className="flex items-center justify-center gap-[6px] w-full h-[36px] px-[12px] py-[8px] bg-transparent rounded-[10px] text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[rgba(35,37,41,0.6)] dark:text-[rgba(238,239,241,0.6)] hover:bg-[#F3F4F6] dark:hover:bg-[#232529] transition-colors"
                  >
                     Skip
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - App Preview */}
          <div
            className="hidden lg:flex flex-col w-[564px] min-w-[564px] max-w-[564px] h-[690px] bg-white dark:bg-[#1B1D21]"
            style={{
              borderLeft: "1px solid rgba(35, 37, 41, 0.05)",
            }}
          >
            <div className="relative w-full h-full p-[96px_64px] bg-[#FBFBFB] dark:bg-[#202225] overflow-hidden">
               {/* Scaled App Preview */}
               <div
                  className="origin-top-left"
                  style={{
                     transform: "scale(0.555)",
                     width: "1440px",
                     height: "900px",
                  }}
               >
                  {/* Main Container */}
                  <div className="flex h-full rounded-[12px] overflow-hidden shadow-[rgba(0,0,0,0)_0px_437px_122px_0px,rgba(0,0,0,0.02)_0px_280px_112px_0px,rgba(0,0,0,0.05)_0px_157px_94px_0px,rgba(0,0,0,0.1)_0px_17px_38px_0px]">
                    
                    {/* Sidebar */}
                    <div className="flex flex-col w-[272px] h-full bg-[#FBFBFB] dark:bg-[#17191C] border-r border-[rgba(0,0,0,0.05)] dark:border-[#27282B] rounded-l-[12px]">
                      
                      {/* Sidebar Header */}
                      <div className="p-[12px]">
                        <div className="flex items-center gap-[12px] px-[12px] h-[32px] rounded-[6px] hover:bg-black/5 dark:hover:bg-white/5 cursor-default transition-colors">
                            <div className="flex items-center justify-center w-[20px] h-[20px] border border-dashed border-[rgba(35,37,41,0.06)] dark:border-[rgba(255,255,255,0.06)] rounded-[4px] bg-[#FFFFFF] dark:bg-[#202225] text-[#9FA1A7] dark:text-[#5C5E63] text-[10px] font-medium uppercase">
                              A
                            </div>
                            <div className="text-[16px] font-[600] text-[#232529] dark:text-[#EEEFF1] tracking-[-0.32px]">
                              Acme
                            </div>
                            <div className="ml-auto w-[18px] h-[18px]">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.5 6.75L9 11.25L4.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#232529] dark:text-[#EEEFF1]"/>
                                </svg>
                            </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="h-[1px] bg-[#EEEFF1] dark:bg-[#27282B] w-full" />

                      {/* Sidebar Menu */}
                      <div className="px-[12px] py-[16px] flex flex-col gap-[2px]">
                         {/* Search */}
                         <div className="flex items-center gap-[10px] px-[8px] py-[4px] h-[28px] bg-white dark:bg-[#1B1D21] border border-[rgba(0,0,0,0.04)] dark:border-[#27282B] rounded-[6px] shadow-sm mb-[4px]">
                             <Search size={14} className="text-[#9FA1A7]" />
                             <div className="w-[60px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                             <div className="ml-auto flex items-center gap-1 border border-[#EEEFF1] dark:border-[#27282B] rounded-[4px] px-1 h-[18px]">
                                <span className="text-[9px] text-[#9FA1A7] font-medium">⌘K</span>
                             </div>
                         </div>
                         
                         {/* Menu Items logic from capture: It seems they have custom SVGs, but I'll use placeholders + Lucide */}
                         <div className="flex items-center gap-[6px] px-[12px] py-[6px] h-[26px]">
                             <Home size={14} className="text-[#232529] dark:text-[#EEEFF1]" />
                             <div className="w-[85px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                         </div>
                         <div className="flex items-center gap-[6px] px-[12px] py-[6px] h-[26px]">
                             <Users size={14} className="text-[#232529] dark:text-[#EEEFF1]" />
                             <div className="w-[63px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                         </div>
                         <div className="flex items-center gap-[6px] px-[12px] py-[6px] h-[26px]">
                             <Settings size={14} className="text-[#232529] dark:text-[#EEEFF1]" />
                             <div className="w-[47px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                         </div>
                         <div className="flex items-center gap-[6px] px-[12px] py-[6px] h-[26px]">
                             <MoreHorizontal size={14} className="text-[#232529] dark:text-[#EEEFF1]" />
                             <div className="w-[54px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                         </div>

                         {/* Lists Section */}
                         <div className="mt-[18px] ml-[18px] border-l border-[#D1D3D6] dark:border-[#27282B]">
                            <div className="flex items-center gap-[6px] px-[12px] py-[6px] h-[26px]">
                                <div className="w-[14px] h-[14px] rounded-[4px] bg-[#EEEFF1] dark:bg-[#27282B]" />
                                <div className="w-[55px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                            </div>
                            <div className="flex items-center gap-[6px] px-[12px] py-[6px] h-[26px]">
                                <div className="w-[14px] h-[14px] rounded-[4px] bg-[#EEEFF1] dark:bg-[#27282B]" />
                                <div className="w-[45px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                            </div>
                         </div>
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 flex flex-col bg-white dark:bg-[#1B1D21] rounded-r-[12px]">
                      {/* Header */}
                      <div className="flex items-center justify-between px-[16px] py-[12px] h-[48px]">
                         <div className="flex items-center gap-[4px]">
                            {/* Icon for People */}
                            <div className="flex items-center justify-center w-[20px] h-[20px] bg-[#FBEBEB] rounded-[6px] border border-[rgba(0,0,0,0.05)] shadow-sm">
                               <Users size={12} className="text-[#D32F2F]" />
                            </div>
                            <div className="w-[60px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                         </div>
                         {/* Right actions */}
                         <div className="flex items-center gap-[8px]">
                             <div className="w-[20px] h-[20px] rounded-full bg-[#EEEFF1] dark:bg-[#27282B]" />
                             <div className="w-[1px] h-[14px] bg-[#EEEFF1] dark:bg-[#27282B]" />
                             <MoreHorizontal size={14} className="text-[#9FA1A7]" />
                         </div>
                      </div>

                      {/* Toolbar / Filters */}
                      <div className="flex items-center gap-[8px] px-[16px] pb-[8px] border-b border-[#EEEFF1] dark:border-[#27282B]">
                         <div className="w-[80px] h-[28px] rounded-[6px] bg-[#FBFBFB] dark:bg-[#202225] border border-[#EEEFF1] dark:border-[#27282B]" />
                         <div className="w-[80px] h-[28px] rounded-[6px] bg-[#FBFBFB] dark:bg-[#202225] border border-[#EEEFF1] dark:border-[#27282B]" />
                         <div className="w-[28px] h-[28px] rounded-[6px] bg-[#FBFBFB] dark:bg-[#202225] border border-[#EEEFF1] dark:border-[#27282B] ml-auto" />
                         <div className="w-[60px] h-[28px] rounded-[6px] bg-[#266DF0]" />
                      </div>
                      
                      {/* Table Mockup */}
                      <div className="flex-1 p-[16px]">
                         {/* Header Row */}
                         <div className="flex items-center gap-[12px] mb-[16px]">
                             <div className="w-[16px] h-[16px] border border-[#EEEFF1] dark:border-[#27282B] rounded-[4px]" />
                             <div className="w-[200px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                             <div className="w-[150px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                             <div className="w-[100px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                         </div>
                         
                         {/* Rows */}
                         {[1, 2, 3, 4, 5, 6].map((i) => (
                             <div key={i} className="flex items-center gap-[12px] py-[12px] border-b border-[#EEEFF1] dark:border-[#27282B]">
                                 <div className="w-[16px] h-[16px] border border-[#EEEFF1] dark:border-[#27282B] rounded-[4px]" />
                                 <div className="w-[24px] h-[24px] rounded-full bg-[#EEEFF1] dark:bg-[#27282B]" />
                                 <div className="w-[160px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                                 <div className="w-[100px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                                 <div className="w-[80px] h-[8px] bg-[#EEEFF1] dark:bg-[#27282B] rounded-[4px]" />
                             </div>
                         ))}
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
