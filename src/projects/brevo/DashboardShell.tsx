import React, { useState } from "react";
import {
  Home,
  Users,
  Building2,
  Briefcase,
  ListTodo,
  Package,
  Megaphone,
  Workflow,
  Mail,
  MessageSquare,
  ShoppingBag,
  X,
  Search,
  Menu,
  ChevronRight,
  Sparkles,
  Activity,
  CircleHelp,
  Settings,
  Bell,
  ChevronDown,
} from "lucide-react";

interface DashboardShellProps {
  children?: React.ReactNode;
}

export default function DashboardShell({ children }: DashboardShellProps) {
  const [activeItem, setActiveItem] = useState("Contacts");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", icon: Home, id: "home" },
    { name: "CRM", icon: Users, id: "crm" },
    { name: "Contacts", icon: Users, id: "contacts", active: true }, // Using generic Users for now, or maybe default user
    { name: "Companies", icon: Building2, id: "companies" },
    { name: "Deals", icon: Briefcase, id: "deals" },
    { name: "Tasks", icon: ListTodo, id: "tasks" },
    { name: "Custom objects", icon: Package, id: "custom_objects" },
    { name: "Marketing", icon: Megaphone, id: "marketing" },
    { name: "Automations", icon: Workflow, id: "automations" },
    { name: "Transactional", icon: Mail, id: "transactional" },
    { name: "Conversations", icon: MessageSquare, id: "conversations" },
    { name: "Commerce", icon: ShoppingBag, id: "commerce" },
  ];

  return (
    <div className="min-h-screen bg-white flex font-sans text-[#1b1b1b] overflow-hidden">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-[232px] bg-[#F9FFF6] border-r-2 border-[#D8EFE8] z-50 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        {/* Logo Area */}
        <div className="h-[44px] flex items-center px-5 mb-2 mt-2 justify-between">
          <a href="#" className="flex items-center">
            <img
              src="/placeholder-logos/wayline-dark.svg"
              alt="Wayline Logo"
              className="h-8"
            />
          </a>
          {/* Mobile Close Button */}
          <button
            className="lg:hidden p-1 text-gray-500 hover:text-gray-700"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Desktop Close/Collapse Button (Visual only per capture) */}
        <button className="absolute top-4 right-5 p-1 text-gray-500 hover:text-gray-700 hidden lg:block">
          <X size={20} strokeWidth={2} />
        </button>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2 custom-scrollbar">
          <ul className="space-y-[2px]">
            {navItems.map((item) => (
              <li key={item.id} className="px-2">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveItem(item.name);
                    // Optional: Close menu on selection for mobile
                    // setIsMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-2xl text-[16px] transition-colors
                    ${
                      item.name === activeItem
                        ? "bg-[#C0FFA5] font-bold text-[#1b1b1b]"
                        : "text-[#1b1b1b] hover:bg-black/5 font-normal"
                    }`}
                >
                  <item.icon size={20} strokeWidth={1.5} />
                  <span>{item.name}</span>
                  {/* Nesting Indication for Lists/Segments/Companies which were nested in capture */}
                </a>

                {/* Hardcoded nested items for Contacts/CRM per capture structure */}
                {item.name === "CRM" && activeItem === "CRM" && (
                  <ul className="pl-9 mt-1 space-y-1">
                    {/* Sub items would go here */}
                  </ul>
                )}

                {item.name === "Contacts" && (
                  <ul className="ml-0 mt-[2px] mb-2">
                    <li className="pl-4 pr-2">
                      <a
                        href="#"
                        className="flex items-center gap-4 px-3 py-2 rounded-xl hover:bg-black/5 text-[#1b1b1b] text-[16px]"
                      >
                        {/* Lists */}
                        <ChevronRight size={16} className="opacity-0" />{" "}
                        {/* Spacer */}
                        <span>Lists</span>
                      </a>
                    </li>
                    <li className="pl-4 pr-2">
                      <a
                        href="#"
                        className="flex items-center gap-4 px-3 py-2 rounded-xl hover:bg-black/5 text-[#1b1b1b] text-[16px]"
                      >
                        {/* Segments */}
                        <ChevronRight size={16} className="opacity-0" />
                        <span>Segments</span>
                      </a>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Layout Area */}
      <div className="flex-1 lg:ml-[232px] flex flex-col min-w-0 transition-all duration-300">
        {/* Header */}
        <header className="h-[56px] bg-white border-b border-white flex items-center justify-between px-4 lg:px-8 sticky top-0 z-40">
          {/* Left: Hamburger + Breadcrumbs */}
          <div className="flex items-center gap-2">
            <button
              className="lg:hidden p-2 -ml-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
            {/* Breadcrumb would go here */}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-1">
            {/* Ask AI Button - Hidden on very small screens, shown on sm+ */}
            <button
              type="button"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-[#E1F1FF] rounded-xl text-[13px] hover:bg-[#d0eaff] transition-colors mr-2 border border-transparent"
              style={{
                backgroundImage:
                  "radial-gradient(at 100% 97.9%, rgb(239, 238, 252) 0%, rgba(0, 0, 0, 0) 50%), radial-gradient(at 29.51% 100%, rgb(247, 247, 253) 0%, rgba(0, 0, 0, 0) 50%)",
              }}
            >
              <Sparkles size={14} className="text-black" />
              <span className="font-normal text-black">Ask AI</span>
            </button>

            {/* Usage and Plan - Hidden on mobile */}
            <button className="hidden md:flex items-center gap-2 px-2 py-1.5 hover:bg-gray-100 rounded-lg transition-colors text-gray-700">
              <Activity size={16} strokeWidth={2} />
              <span className="text-[14px] font-medium">Usage and plan</span>
            </button>

            {/* Help - Hidden on mobile */}
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-xl text-gray-700 transition-colors">
              <CircleHelp size={20} strokeWidth={1.5} />
            </button>

            {/* Settings - Hidden on mobile */}
            <button className="hidden md:block p-2 hover:bg-gray-100 rounded-xl text-gray-700 transition-colors">
              <Settings size={20} strokeWidth={1.5} />
            </button>

            {/* Notification */}
            <button className="p-2 hover:bg-gray-100 rounded-xl text-gray-700 transition-colors relative">
              <Bell size={20} strokeWidth={1.5} />
              {/* Dot if needed */}
            </button>

            {/* Company Profile - Compact on mobile */}
            <button className="flex items-center gap-2 px-2 py-1.5 ml-1 hover:bg-gray-100 rounded-xl transition-all">
              <div className="w-5 h-5 bg-gray-900 rounded-full flex items-center justify-center text-white p-1">
                <Building2 size={12} className="text-white" />
              </div>
              <span className="hidden sm:inline text-[14px] font-medium text-gray-800">
                DEVIAS IO SRL
              </span>
              <ChevronDown size={14} className="text-gray-500" />
            </button>
          </div>
        </header>

        {/* Content Hole */}
        <main className="p-4 lg:p-8 flex-1 overflow-x-hidden">
          <div id="content-hole" className="h-full">
            {children || (
              <div className="w-full h-[600px] border-4 border-dashed border-gray-200 rounded-xl flex items-center justify-center text-gray-400 font-medium">
                Content Area (Wait for Phase 2)
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
