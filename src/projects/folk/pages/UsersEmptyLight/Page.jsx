import React, { useState, useEffect } from "react";
import {
  Star,
  MoreHorizontal,
  Plus,
  Mail,
  EyeOff,
  SlidersHorizontal,
  ArrowUpDown,
  Search,
  ChevronDown,
  Table,
  Columns3,
  Building2,
  FlaskConical,
  MessageSquare,
  Cloud,
  FileSpreadsheet,
  Zap,
  Database,
  Link,
} from "lucide-react";
import AddCompanyDialog from "./AddCompanyDialog";

const COLUMNS = [
  "People",
  "Urls",
  "Phone numbers",
  "Emails",
  "Addresses",
  "Funding raised",
  "Last funding date",
  "Foundation year",
  "Employee range",
  "Industry",
  "Owner",
  "Priority",
  "Service",
  "Status",
];

const SUPABASE_IMG =
  "https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/images";

function AvatarStack({ labels, size = 16 }) {
  return (
    <div className="flex items-center">
      {labels.map((label, i) => (
        <div
          key={i}
          className="flex items-center justify-center rounded-full bg-[#FFFFFF] dark:bg-[#191919] border-[0.667px] border-[#FFFFFF] dark:border-[#191919]"
          style={{
            width: size + 3,
            height: size + 3,
            padding: 1,
            zIndex: labels.length - i,
            marginLeft: i > 0 ? -6 : 0,
          }}
        >
          <span
            className="flex items-center justify-center rounded-full bg-[#FFFFFF] dark:bg-[#191919] border-[0.667px] border-[#202020] dark:border-[#B4B4B4] text-[9px] text-[#202020] dark:text-[#B4B4B4]"
            style={{ width: size, height: size }}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}

function IconButton({ label, children, className = "" }) {
  return (
    <button
      aria-label={label}
      className={`flex items-center justify-center w-[28px] h-[28px] rounded-full border-[0.667px] border-transparent text-[#626262] dark:text-[#B4B4B4] cursor-pointer hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-colors ${className}`}
    >
      {children}
    </button>
  );
}

function PillButton({ children, disabled = false, variant = "outline", className = "" }) {
  const base =
    "flex items-center justify-center h-[28px] px-[10px] py-[6px] rounded-full border-[0.667px] font-[500] text-[14px] leading-[19px] whitespace-nowrap cursor-pointer select-none transition-colors";
  const variants = {
    outline: `bg-[#FFFFFF] dark:bg-[#222222] border-[#BBBBBB] dark:border-[#606060] text-[#202020] dark:text-[#EEEEEE] shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A]`,
    dark: `bg-[#202020] dark:bg-[#EEEEEE] border-transparent text-[#FDFDFD] dark:text-[#191919] hover:bg-[#3D3D3D] dark:hover:bg-[#D4D4D4]`,
  };
  return (
    <button
      disabled={disabled}
      className={`${base} ${variants[variant]} ${disabled ? "opacity-[0.24] !cursor-default hover:bg-transparent dark:hover:bg-transparent" : ""} ${className}`}
    >
      {children}
    </button>
  );
}

function ColumnHeader({ label }) {
  return (
    <div className="w-[200px] h-[32px] flex items-center px-[8px] border-r-[0.667px] border-[#D9D9D9] dark:border-[#3D3D3D] flex-shrink-0 cursor-pointer hover:bg-[#F9F9F9] dark:hover:bg-[#222222] transition-colors">
      <span className="text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4] whitespace-nowrap overflow-hidden text-ellipsis">
        {label}
      </span>
    </div>
  );
}

function EmptyCard({ icons, description, buttonLabel, showDropdownIcon = false }) {
  return (
    <div className="flex flex-col items-center gap-[24px] p-[24px_32px] border-[0.667px] border-[#D9D9D9] dark:border-[#3D3D3D] w-[224px]">
      <header className="flex flex-col items-center">
        <div className="flex justify-center mb-[16px]">{icons}</div>
        <p className="font-[500] text-[14px] text-[#202020] dark:text-[#EEEEEE] text-center max-w-[134px]">
          {description}
        </p>
      </header>
      <PillButton variant="dark">
        {buttonLabel}
        {showDropdownIcon && (
          <span className="flex items-center justify-center w-[16px] h-[16px] ml-[4px] -mr-[2px]">
            <ChevronDown className="w-[16px] h-[16px] text-[#FDFDFD] dark:text-[#191919]" />
          </span>
        )}
      </PillButton>
    </div>
  );
}

function LogoCircle({ children, zIndex = 1 }) {
  return (
    <div
      className="flex items-center justify-center w-[32px] h-[32px] rounded-full bg-[#FFFFFF] dark:bg-[#191919] border-[0.667px] border-[#202020] dark:border-[#3D3D3D] overflow-hidden -mx-[4px] shadow-[0_0_0_2px_rgb(255,255,255)] dark:shadow-[0_0_0_2px_rgb(25,25,25)]"
      style={{ zIndex }}
    >
      {children}
    </div>
  );
}

function ImgCircle({ src, zIndex = 1 }) {
  return (
    <div
      className="w-[32px] h-[32px] rounded-full overflow-hidden -mx-[4px] shadow-[0_0_0_2px_rgb(255,255,255)] dark:shadow-[0_0_0_2px_rgb(25,25,25)]"
      style={{ zIndex }}
    >
      <img
        src={src}
        alt=""
        className="w-[32px] h-[32px] rounded-full object-cover bg-[#FFFFFF] dark:bg-[#191919]"
      />
    </div>
  );
}

function RoundActionButton({ label, children }) {
  return (
    <button
      aria-label={label}
      className="flex items-center justify-center w-[28px] h-[28px] rounded-full bg-[#FFFFFF] dark:bg-[#222222] border-[0.667px] border-[#BBBBBB] dark:border-[#606060] shadow-[0_1px_1px_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_rgba(0,0,0,0.24)] cursor-pointer hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-colors"
    >
      {children}
    </button>
  );
}

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
    <div className="flex flex-col min-h-screen bg-[#FFFFFF] dark:bg-[#191919] text-[#202020] dark:text-[#EEEEEE]">
      {/* Header */}
      <header className="flex items-center justify-between h-[48px] px-[24px] border-b-[0.667px] border-[#D9D9D9] dark:border-[#3D3D3D]">
        {/* Left: Emoji + Title + Star */}
        <div className="flex items-center gap-[0px]">
          <button className="flex items-center justify-center w-[28px] h-[28px] rounded-full text-[20px] hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-colors cursor-pointer">
            🗣️
          </button>
          <span className="text-[20px] font-[500] leading-[30px] tracking-[-0.38px] ml-[4px]">
            Clients
          </span>
          <IconButton label="Add to favorites" className="ml-[0px]">
            <Star className="w-[16px] h-[16px]" />
          </IconButton>
        </div>

        {/* Right: Members + Share + More */}
        <div className="flex items-center gap-[8px]">
          <AvatarStack labels={["A", "J", "J"]} />
          <PillButton variant="dark">Share</PillButton>
          <IconButton label="Import, export, duplicate…">
            <MoreHorizontal className="w-[16px] h-[16px]" />
          </IconButton>
        </div>
      </header>

      {/* Tab bar */}
      <div className="flex items-center h-[48px] px-[24px] border-b-[0.667px] border-[#D9D9D9] dark:border-[#3D3D3D]">
        <div className="flex items-end gap-[20px] h-full mr-[8px]">
          {/* Active tab */}
          <a href="#" className="flex items-center justify-center gap-[4px] h-full font-[500] text-[#202020] dark:text-[#EEEEEE] border-b-[2px] border-[#202020] dark:border-[#EEEEEE] cursor-pointer select-none">
            <Table className="w-[16px] h-[16px] text-[#202020] dark:text-[#EEEEEE]" />
            <span className="text-[14px] whitespace-nowrap">All clients</span>
          </a>
          {/* Inactive tab */}
          <a href="#" className="flex items-center justify-center gap-[4px] h-full font-[500] text-[#626262] dark:text-[#B4B4B4] border-b-[2px] border-transparent hover:text-[#202020] dark:hover:text-[#EEEEEE] hover:border-[#D9D9D9] dark:hover:border-[#3D3D3D] cursor-pointer select-none transition-colors">
            <Columns3 className="w-[16px] h-[16px]" />
            <span className="text-[14px] whitespace-nowrap">Pipeline</span>
          </a>
        </div>
        <IconButton label="Create new view">
          <Plus className="w-[16px] h-[16px]" />
        </IconButton>
      </div>

      {/* Action bar */}
      <div className="flex items-center justify-between h-[68px] px-[24px] py-[20px]">
        {/* Left actions */}
        <section className="flex items-center gap-[8px]">
          <PillButton>
            <span className="flex items-center justify-center w-[16px] h-[16px] mr-[6px] -ml-[2px]">
              <Plus className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4]" />
            </span>
            Add companies
          </PillButton>
          <PillButton disabled>
            <span className="flex items-center justify-center w-[16px] h-[16px] mr-[6px] -ml-[2px]">
              <Mail className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4]" />
            </span>
            Email all
          </PillButton>
          <PillButton>
            <span className="flex items-center justify-center w-[16px] h-[16px] mr-[6px] -ml-[2px]">
              <FlaskConical className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4]" />
            </span>
            Research all
          </PillButton>
        </section>

        {/* Right actions */}
        <section className="flex items-center gap-[6px]">
          <PillButton>
            <span className="flex items-center justify-center w-[16px] h-[16px] mr-[6px] -ml-[2px]">
              <EyeOff className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4]" />
            </span>
            6
          </PillButton>
          <RoundActionButton label="Filter view">
            <SlidersHorizontal className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4]" />
          </RoundActionButton>
          <RoundActionButton label="Sorted by Company name">
            <ArrowUpDown className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4]" />
          </RoundActionButton>
          <RoundActionButton label="Search">
            <Search className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4]" />
          </RoundActionButton>
        </section>
      </div>

      {/* Table area */}
      <div className="flex flex-col flex-1 ml-[24px] border-t-[0.667px] border-[#D9D9D9] dark:border-[#3D3D3D] overflow-hidden">
        {/* Scrollable table container */}
        <div className="overflow-x-auto overflow-y-hidden flex-shrink-0">
          <div
            className="grid"
            style={{
              gridTemplateColumns: "minmax(0, 1fr) 32px",
              minWidth: `${200 + COLUMNS.length * 200 + 32}px`,
            }}
          >
            {/* Table header row */}
            <div
              className="grid"
              style={{
                gridTemplateColumns: `200px ${COLUMNS.length * 200}px`,
                gridTemplateRows: "32px 40px",
              }}
            >
              {/* Sticky first column header */}
              <div className="sticky left-0 z-[30] flex items-center h-[32px] bg-[#FFFFFF] dark:bg-[#191919] border-r-[0.667px] border-b-[0.667px] border-[#D9D9D9] dark:border-[#3D3D3D] px-[10px] gap-[8px]">
                <input
                  type="checkbox"
                  disabled
                  className="w-[16px] h-[16px] rounded-[3px] border-[0.667px] border-[#CECECE] dark:border-[#4A4A4A] bg-[#FFFFFF] dark:bg-[#191919] cursor-not-allowed"
                />
                <label className="text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4] whitespace-nowrap overflow-hidden text-ellipsis cursor-default">
                  0 companies
                </label>
              </div>

              {/* Column headers */}
              <div className="flex h-[32px] border-b-[0.667px] border-[#D9D9D9] dark:border-[#3D3D3D] bg-[#FFFFFF] dark:bg-[#191919]">
                {COLUMNS.map((col) => (
                  <ColumnHeader key={col} label={col} />
                ))}
              </div>

              {/* Add company row - spans both columns */}
              <div className="col-span-2 sticky left-0">
                <AddCompanyDialog>
                  <button className="flex items-center h-[40px] px-[10px] gap-[8px] text-[#626262] dark:text-[#B4B4B4] cursor-pointer bg-[#FFFFFF] dark:bg-[#191919] w-full hover:bg-[#F9F9F9] dark:hover:bg-[#222222] transition-colors">
                    <Plus className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4]" />
                    <span className="font-[500] text-[14px] text-[#626262] dark:text-[#B4B4B4]">Add company</span>
                  </button>
                </AddCompanyDialog>
              </div>
            </div>

            {/* Add column button */}
            <div className="sticky right-0 z-[10] flex items-start justify-center w-[32px] h-[32px] bg-[#FFFFFF] dark:bg-[#191919] border-l-[0.667px] border-[#D9D9D9] dark:border-[#3D3D3D] pt-[8px] cursor-pointer hover:bg-[#F9F9F9] dark:hover:bg-[#222222] transition-colors">
              <Plus className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4]" />
            </div>
          </div>
        </div>

        {/* Empty state */}
        <div className="flex flex-col items-center py-[80px] px-[24px] overflow-auto">
          <span className="text-[20px] font-[500] leading-[30px] tracking-[-0.38px] text-[#202020] dark:text-[#EEEEEE] text-center mb-[16px]">
            Let's add your first companies
          </span>

          <div className="flex justify-center gap-[16px] mb-[32px]">
            {/* Card 1: Add from existing */}
            <EmptyCard
              icons={
                <>
                  <ImgCircle src={`${SUPABASE_IMG}/google.png`} zIndex={3} />
                  <ImgCircle src={`${SUPABASE_IMG}/airbnb.png`} zIndex={2} />
                  <ImgCircle src={`${SUPABASE_IMG}/dell.png`} zIndex={1} />
                </>
              }
              description="Add from your existing companies"
              buttonLabel="Add companies"
              showDropdownIcon
            />

            {/* Card 2: Sync contacts */}
            <EmptyCard
              icons={
                <>
                  <LogoCircle zIndex={3}>
                    <Mail className="w-[20px] h-[20px] text-[#626262] dark:text-[#B4B4B4]" />
                  </LogoCircle>
                  <LogoCircle zIndex={2}>
                    <Cloud className="w-[20px] h-[20px] text-[#626262] dark:text-[#B4B4B4]" />
                  </LogoCircle>
                  <LogoCircle zIndex={1}>
                    <MessageSquare className="w-[20px] h-[20px] text-[#626262] dark:text-[#B4B4B4]" />
                  </LogoCircle>
                </>
              }
              description="Sync your contacts, emails, and calendar"
              buttonLabel="Connect account"
              showDropdownIcon
            />

            {/* Card 3: Import */}
            <EmptyCard
              icons={
                <>
                  <LogoCircle zIndex={4}>
                    <FileSpreadsheet className="w-[20px] h-[20px] text-[#626262] dark:text-[#B4B4B4]" />
                  </LogoCircle>
                  <LogoCircle zIndex={3}>
                    <Zap className="w-[20px] h-[20px] text-[#626262] dark:text-[#B4B4B4]" />
                  </LogoCircle>
                  <LogoCircle zIndex={2}>
                    <Database className="w-[20px] h-[20px] text-[#626262] dark:text-[#B4B4B4]" />
                  </LogoCircle>
                  <LogoCircle zIndex={1}>
                    <Link className="w-[20px] h-[20px] text-[#626262] dark:text-[#B4B4B4]" />
                  </LogoCircle>
                </>
              }
              description="Import from a file, an integration, or a CRM"
              buttonLabel="Import companies"
              showDropdownIcon
            />

            {/* Card 4: Create manually */}
            <AddCompanyDialog>
              <button className="group flex flex-col items-center gap-[24px] p-[24px_32px] border-[0.667px] border-[#D9D9D9] dark:border-[#3D3D3D] w-[224px] cursor-pointer hover:bg-[#F9F9F9] dark:hover:bg-[#222222] transition-colors">
                <header className="flex flex-col items-center">
                  <div className="flex justify-center mb-[16px]">
                    <div
                      className="w-[32px] h-[32px] rounded-full overflow-hidden -mx-[4px] shadow-[0_0_0_2px_rgb(255,255,255)] dark:shadow-[0_0_0_2px_rgb(25,25,25)]"
                      style={{ zIndex: 1 }}
                    >
                      <span className="inline-flex w-[32px] h-[32px] items-center justify-center bg-[#FFFFFF] dark:bg-[#191919] border-[0.667px] border-[#E1E1E1] dark:border-[#3D3D3D] rounded-full">
                        <Building2 className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4]" />
                      </span>
                    </div>
                  </div>
                  <p className="font-[500] text-[14px] text-[#202020] dark:text-[#EEEEEE] text-center max-w-[134px]">
                    Create a company manually
                  </p>
                </header>
                <span className="flex items-center justify-center h-[28px] px-[10px] py-[6px] rounded-full border-[0.667px] font-[500] text-[14px] leading-[19px] whitespace-nowrap bg-[#202020] dark:bg-[#EEEEEE] border-transparent text-[#FDFDFD] dark:text-[#191919] group-hover:bg-[#3D3D3D] dark:group-hover:bg-[#D4D4D4] transition-colors">
                  Create company
                </span>
              </button>
            </AddCompanyDialog>
          </div>

          <span className="text-[14px] text-[#626262] dark:text-[#B4B4B4] text-center">
            Need help to get started?{" "}
            <a
              href="#"
              className="text-[#626262] dark:text-[#B4B4B4] underline decoration-[rgba(0,0,0,0.15)] dark:decoration-[#6E6E6E] cursor-pointer hover:text-[#202020] dark:hover:text-[#EEEEEE] transition-colors"
            >
              Watch tutorials
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
