import {
  ArrowLeft,
  User,
  Bell,
  Monitor,
  Link2,
  Mail,
  Blocks,
  Code,
  Building,
  Users,
  Shield,
  CreditCard,
  ExternalLink,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

import { useState, useEffect } from "react";

const navGroups = [
  {
    title: "Account",
    items: [
      { name: "Profile", icon: User, href: "#", active: true },
      { name: "Notifications", icon: Bell, href: "#", active: false },
      { name: "Sessions", icon: Monitor, href: "#", active: false },
    ],
  },
  {
    title: "Features",
    items: [
      { name: "Connected accounts", icon: Link2, href: "#", active: false },
      { name: "Senders", icon: Mail, href: "#", active: false },
      { name: "Integrations", icon: Blocks, href: "#", active: false },
      { name: "API", icon: Code, href: "#", active: false },
    ],
  },
  {
    title: "Organization",
    items: [
      { name: "Workspace", icon: Building, href: "#", active: false },
      { name: "Members", icon: Users, href: "#", active: false },
      { name: "Security", icon: Shield, href: "#", active: false },
      { name: "Plans", icon: CreditCard, href: "#", active: false },
    ],
  },
];

const footerLinks = [
  { name: "Migrate from another CRM", href: "#", external: false },
  { name: "Get chrome extension", href: "#", external: true },
  { name: "Download desktop app", href: "#", external: true },
  { name: "Share folk, earn money", href: "#", external: true },
];

export default function SettingsShell({
  children,
  title = "Personal details",
}) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return new URLSearchParams(window.location.search).get("theme");
    }
    return null;
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="flex min-h-screen w-full bg-[#FFFFFF] dark:bg-[#1a1d21] text-[#202020] dark:text-[#EEEEEE] font-sans">
      {/* Mobile Sidebar Toggle (visible only on small screens) */}
      <div className="md:hidden fixed top-0 left-0 z-[40] flex h-[48px] items-center px-[12px] bg-white dark:bg-[#1a1d21] border-b border-[#D9D9D9] dark:border-[#3D3D3D] w-full">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="flex items-center justify-center w-[28px] h-[28px] rounded-full hover:bg-[rgba(0,0,0,0.055)] dark:hover:bg-[rgba(255,255,255,0.063)] transition-colors text-[#626262] dark:text-[#B4B4B4]"
        >
          <Menu className="w-[16px] h-[16px]" />
        </button>
        <span className="ml-[12px] text-[16px] font-[500] text-[#202020] dark:text-[#EEEEEE] truncate">
          {title}
        </span>
      </div>

      {/* Floating Help Button */}
      <div className="fixed bottom-[12px] right-[12px] z-[30]">
        <button className="flex items-center justify-center w-[32px] h-[32px] bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] rounded-full shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] text-[#202020] dark:text-[#EEEEEE] hover:bg-gray-50 dark:hover:bg-[#2A2A2A] transition-colors">
          <MessageCircle className="w-[16px] h-[16px]" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-[45]"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-0 left-0 h-screen w-[240px] flex-col border-r border-[#D9D9D9] dark:border-[#3D3D3D] bg-white dark:bg-[#1a1d21] flex-shrink-0 z-[50] transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        } flex`}
      >
        <header className="flex items-center h-[48px] px-[6px] border-b border-[#D9D9D9] dark:border-[#3D3D3D]">
          <button className="flex items-center justify-center h-[28px] px-[8px] py-[6px] text-[13px] font-[500] text-[#626262] dark:text-[#B4B4B4] bg-transparent rounded-full hover:bg-[rgba(0,0,0,0.055)] dark:hover:bg-[rgba(255,255,255,0.063)] transition-colors">
            <ArrowLeft className="w-[16px] h-[16px] mr-[4px]" />
            Back
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden ml-auto flex items-center justify-center w-[28px] h-[28px] rounded-full hover:bg-[rgba(0,0,0,0.055)] dark:hover:bg-[rgba(255,255,255,0.063)] transition-colors text-[#626262] dark:text-[#B4B4B4]"
          >
            <X className="w-[16px] h-[16px]" />
          </button>
        </header>

        <nav className="flex flex-col flex-1 pb-[16px] overflow-y-auto">
          <div className="flex flex-col gap-[16px] pt-[16px]">
            {navGroups.map((group, idx) => (
              <section key={idx} className="flex flex-col px-[8px] gap-[1px]">
                <div className="flex items-center px-[8px] mb-[4px] h-[16px]">
                  <h3 className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4] tracking-tight">
                    {group.title}
                  </h3>
                </div>
                {group.items.map((item, itemIdx) => (
                  <a
                    key={itemIdx}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center h-[28px] px-[8px] py-[6px] gap-[8px] text-[13px] rounded-[4px] border border-transparent transition-colors ${
                      item.active
                        ? "bg-[rgba(0,0,0,0.055)] dark:bg-[rgba(255,255,255,0.063)] text-[#202020] dark:text-[#EEEEEE] font-[500]"
                        : "text-[#626262] dark:text-[#B4B4B4] font-[400] hover:bg-[rgba(0,0,0,0.055)] dark:hover:bg-[rgba(255,255,255,0.063)]"
                    }`}
                  >
                    <item.icon
                      className={`w-[16px] h-[16px] ${
                        item.active
                          ? "text-[#202020] dark:text-[#EEEEEE]"
                          : "text-[#626262] dark:text-[#B4B4B4]"
                      }`}
                    />
                    {item.name}
                  </a>
                ))}
              </section>
            ))}

            <section className="flex flex-col px-[8px] gap-[1px]">
              {footerLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center h-[28px] px-[8px] py-[6px] gap-[8px] text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4] hover:bg-[rgba(0,0,0,0.055)] dark:hover:bg-[rgba(255,255,255,0.063)] rounded-[4px] transition-colors"
                  target={link.external ? "_blank" : "_self"}
                  rel="noreferrer"
                >
                  {link.name}
                  {link.external && (
                    <ExternalLink className="w-[16px] h-[16px] ml-auto text-[#626262] dark:text-[#B4B4B4]" />
                  )}
                </a>
              ))}
            </section>
          </div>

          <footer className="mt-auto px-[6px] pt-[10px]">
            <a
              href="#"
              className="inline-flex items-center justify-center h-[28px] px-[10px] py-[6px] text-[13px] font-[500] text-[#626262] dark:text-[#B4B4B4] rounded-full border border-transparent hover:bg-[rgba(0,0,0,0.055)] dark:hover:bg-[rgba(255,255,255,0.063)] transition-colors"
            >
              Logout
            </a>
          </footer>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col pt-[48px] md:pt-0 overflow-x-hidden">
        {/* Top Header */}
        <header className="hidden md:flex items-center h-[48px] px-[24px] border-b border-[#D9D9D9] dark:border-[#3D3D3D] bg-white dark:bg-[#1a1d21] sticky top-0 z-10 w-full">
          <h1 className="text-[20px] font-[500] text-[#202020] dark:text-[#EEEEEE] tracking-[-0.38px]">
            {title}
          </h1>
        </header>

        {/* Dynamic Page Content Slot */}
        <div className="flex-1 overflow-x-hidden flex flex-col">
          {children || (
            <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-8 bg-white dark:bg-[#1a1d21]">
              <div className="flex flex-col items-center gap-[24px] max-w-[400px]">
                <div className="w-[215px] h-[140px] text-[#EEEFF1] dark:text-[#27282B]">
                  <svg
                    width="215"
                    height="140"
                    viewBox="0 0 215 140"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="215"
                      height="140"
                      className="fill-white dark:fill-transparent"
                    />
                    <path
                      d="M64 0L64 140"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="M151 0L151 140"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="M215 24H0"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="M215 50H0"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="M215 88H0"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="M215 114H0"
                      stroke="currentColor"
                      strokeWidth="0.8"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="M199 0L199 140"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    />
                    <path
                      d="M16 0L16 140"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    />
                    <path
                      d="M0 16L215 16"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    />
                    <path
                      d="M0 124L215 124"
                      stroke="currentColor"
                      strokeWidth="0.8"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-center gap-[8px] text-center">
                  <h2 className="text-[20px] font-[600] leading-[24px] tracking-[-0.4px] text-[#242529] dark:text-[#EEEFF1]">
                    Welcome to Acme
                  </h2>
                  <p className="text-[14px] font-[500] leading-[20px] tracking-[-0.28px] text-[#505154] dark:text-[#9FA1A7]">
                    Select an item from the sidebar to get started.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
