import React, { useState } from "react";
import {
  Users,
  User,
  HelpCircle,
  ExternalLink,
  Settings,
  ClipboardList,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen font-['Open_Sans',_'Helvetica_Neue',_Helvetica,_Arial,_sans-serif] text-[13px] font-[400] leading-[13px] text-[#565656] bg-white">
      {/* ── Header ── */}
      <header className="relative min-w-[1000px] bg-white border-b-[2.67px] border-white">
        <nav className="h-[75px] bg-[rgb(80,134,183)] flex items-center">
          <ul className="flex items-center w-full pr-[25px]">
            {/* Logo / Home */}
            <li className="relative w-[255px] max-w-[255px] mt-[16px] shrink-0 text-center text-white mr-auto">
              <a
                href="#!/landing"
                className="block relative w-[255px] h-[52px] px-[10px] text-[11px] font-[600] leading-[13px] text-[#B8D0E5] whitespace-nowrap"
              >
                {/* Logo placeholder - text fallback */}
                <div className="flex items-center justify-center h-full">
                  <span className="text-[22px] font-[300] tracking-tight text-[#B8D0E5]">
                    iClassPro
                  </span>
                </div>
                <span className="sr-only">Home</span>
              </a>
            </li>

            {/* Nav items */}
            <NavItem label="Families" href="#!/families" />
            <NavItem label="Students" href="#!/students" />
            <NavItem label="Classes" href="#!/classes" />
            <NavItem label="Appointments" href="#!/appointments" />
            <NavItem label="Camps" href="#!/camps" />
            <NavItem label="Enrollments" href="#!/enrollments" />
            <NavItem label="Skills" href="#!/skills" />
            <NavItem label="Parties" href="#!/parties" />
            <NavItem label="Calendar" href="#!/calendar" />
            <NavItem label="Staff" href="#!/staff" />
            <NavItem label="Time Clock" href="#!/time-clock" />
            <NavItem label="Reports" href="#!/reports" />
            <NavItem label="Transactions" href="#!/transactions" />
            <NavItem label="Autopilot" href="#!/autopilot/landing" />

            {/* User Profile Avatar */}
            <li
              className="relative w-[40px] h-[40px] mt-[16px] mb-[16px] ml-[16px] shrink-0 rounded-full overflow-hidden shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]"
              style={{
                backgroundImage: `url("https://cdn.iclasspro.com/images/header-images/avatar-icon.svg")`,
                backgroundSize: "cover",
              }}
            >
              <button
                className="w-[40px] h-[40px] cursor-pointer"
                aria-label="User Profile"
              />
            </li>
          </ul>
        </nav>
      </header>

      {/* ── Angular Area / Dashboard Content ── */}
      <div className="mb-[35px] leading-[18.57px]">
        <div className="max-w-[1600px] px-[15px]">
          <div className="flex flex-wrap -mx-[15px]">
            <div className="w-full max-w-full px-[15px] flex-[0_0_100%]">
              {/* ── Page Title Row ── */}
              <div className="mb-[30px]">
                <div
                  id="page-title"
                  className="relative flex flex-wrap items-center min-h-[40px] mt-[15px] mb-[15px]"
                >
                  <div className="flex flex-wrap -mx-[15px] mt-[-15px] flex-1">
                    {/* Dashboard Title - 25% */}
                    <div className="max-w-[25%] flex-[0_0_25%] mt-[15px] px-[15px]">
                      <h2 className="inline-block ml-[50px] pl-[15px] text-[26px] font-[100] leading-[40px] text-[rgb(80,134,183)] whitespace-nowrap border-l border-[rgb(80,134,183)]">
                        Dashboard
                      </h2>
                    </div>

                    {/* Secondary Nav Tabs - 50% */}
                    <div className="max-w-[50%] flex-[0_0_50%] mt-[15px] px-[15px] text-center">
                      <nav aria-label="secondary" className="inline-block">
                        <ul className="relative z-[3] whitespace-nowrap shadow-[rgb(210,210,210)_0px_-1px_0px_0px_inset] table">
                          <li role="presentation" className="table-cell relative">
                            <a
                              href="#!/dashboard"
                              className="flex relative p-[15px] justify-center items-center text-[13px] font-[600] leading-[18.57px] text-[rgb(0,111,171)] whitespace-nowrap shadow-[rgb(0,111,171)_0px_-1px_0px_0px_inset]"
                            >
                              Dashboard
                            </a>
                          </li>
                          <li role="presentation" className="table-cell relative">
                            <a
                              href="#!/quicksight"
                              className="flex relative p-[15px] justify-center items-center text-[13px] font-[600] leading-[18.57px] text-[#565656] whitespace-nowrap hover:text-[rgb(0,111,171)]"
                            >
                              Pro Insights
                            </a>
                          </li>
                          <li role="presentation" className="table-cell relative">
                            <a
                              href="#!/marketing-journey"
                              className="flex relative p-[15px] justify-center items-center text-[13px] font-[600] leading-[18.57px] text-[#565656] whitespace-nowrap hover:text-[rgb(0,111,171)]"
                            >
                              Marketing Journey
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>

                    {/* Edit Dashboard - 25% */}
                    <div className="max-w-[25%] flex-[0_0_25%] mt-[15px] px-[15px]">
                      <div className="flex flex-wrap -mx-[15px] justify-end">
                        <div className="relative px-[15px]">
                          <span className="inline-flex">
                            <button
                              type="button"
                              id="edit-dashboard"
                              className="flex relative w-[40px] h-[40px] min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] mr-[2px] justify-center items-center text-[13px] font-[600] leading-[18.57px] text-[#565656] bg-white border border-[rgb(197,197,197)] rounded-full"
                              title="Edit Dashboard"
                            >
                              <span
                                aria-hidden="true"
                                className="block w-[38.67px] h-[38.67px] pr-[5px] font-[600] text-center text-[rgb(80,134,183)]"
                              >
                                <Settings className="w-[18px] h-[18px] mx-auto mt-[10px]" />
                              </span>
                              <span className="sr-only">Edit Dashboard</span>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Widgets Area (Gridstack) ── */}
              <div className="relative flex flex-wrap -mx-[15px]">
                <div className="w-full max-w-full px-[15px] flex-[0_0_100%]">
                  <div className="flex flex-wrap -mx-[15px]">
                    <div className="w-full max-w-full px-[15px] flex-[0_0_100%]">
                      {/* Grid Container */}
                      <div className="relative" style={{ minHeight: "600px" }}>
                        {/* ── Row 1: List Widgets ── */}

                        {/* Accounts Created */}
                        <div
                          className="inline-block align-top"
                          style={{ width: "33.33%", padding: "15px" }}
                        >
                          <ListWidget
                            title="Accounts Created"
                            items={[
                              { count: "1", label: "Today" },
                              { count: "0", label: "Yesterday" },
                              { count: "2", label: "This Month" },
                            ]}
                          />
                        </div>

                        {/* Drops & Transfers */}
                        <div
                          className="inline-block align-top"
                          style={{ width: "33.33%", padding: "15px" }}
                        >
                          <ListWidget
                            title="Drops & Transfers"
                            items={[
                              { count: "0", label: "Today" },
                              { count: "0", label: "Yesterday" },
                              { count: "4", label: "This Month" },
                            ]}
                          />
                        </div>

                        {/* Enrollments */}
                        <div
                          className="inline-block align-top"
                          style={{ width: "33.33%", padding: "15px" }}
                        >
                          <ListWidget
                            title="Enrollments"
                            items={[
                              { count: "366", label: "Today" },
                              { count: "366", label: "Yesterday" },
                              { count: "368", label: "This Month" },
                              { count: "368", label: "Last Month" },
                            ]}
                          />
                        </div>

                        {/* ── Row 2: KPI Widgets ── */}

                        {/* Active Families */}
                        <div
                          className="inline-block align-top"
                          style={{ width: "33.33%", padding: "15px" }}
                        >
                          <KpiWidget
                            icon={
                              <Users className="text-white w-[24px] h-[24px]" />
                            }
                            iconTitle="Active Families"
                            value="170"
                            title="Active Families"
                            changeText="+1 over last 30 Days"
                            changeColor="rgb(110, 197, 115)"
                            stats={[
                              {
                                value: "173",
                                label: "Past 30 Days, Last Year",
                              },
                              { value: "172", label: "Previous 30 Days" },
                              { value: "173", label: "Past 30 Days" },
                            ]}
                          />
                        </div>

                        {/* Active Students */}
                        <div
                          className="inline-block align-top"
                          style={{ width: "33.33%", padding: "15px" }}
                        >
                          <KpiWidget
                            icon={
                              <User className="text-white w-[24px] h-[24px]" />
                            }
                            iconTitle="Active Students"
                            value="335"
                            title="Active Students"
                            changeText="+1 over last 30 Days"
                            changeColor="rgb(110, 197, 115)"
                            stats={[
                              {
                                value: "328",
                                label: "Past 30 Days, Last Year",
                              },
                              { value: "337", label: "Previous 30 Days" },
                              { value: "338", label: "Past 30 Days" },
                            ]}
                          />
                        </div>

                        {/* Active Enrollments */}
                        <div
                          className="inline-block align-top"
                          style={{ width: "33.33%", padding: "15px" }}
                        >
                          <KpiWidget
                            icon={
                              <Users className="text-white w-[24px] h-[24px]" />
                            }
                            iconTitle="Active Enrollments"
                            value="371"
                            title="Active Enrollments"
                            changeText="-1 over last 30 Days"
                            changeColor="rgb(204, 60, 60)"
                            stats={[
                              {
                                value: "346",
                                label: "Past 30 Days, Last Year",
                              },
                              { value: "375", label: "Previous 30 Days" },
                              { value: "374", label: "Past 30 Days" },
                            ]}
                          />
                        </div>

                        {/* Spacer for next row alignment */}
                        <div className="w-full" />

                        {/* ── Row 3: Event Widgets ── */}

                        {/* Trials */}
                        <div
                          className="inline-block align-top"
                          style={{ width: "22.22%", padding: "15px" }}
                        >
                          <EventWidget
                            bgColor="rgb(255, 255, 255)"
                            textColor="rgb(86, 86, 86)"
                            title="0 Trials"
                            titleWeight="400"
                            subtitle="This Week"
                            iconChar="*"
                            iconColor="#565656"
                          />
                        </div>

                        {/* Wait Listed */}
                        <div
                          className="inline-block align-top"
                          style={{ width: "22.22%", padding: "15px" }}
                        >
                          <EventWidget
                            bgColor="rgb(0, 111, 171)"
                            textColor="rgb(255, 255, 255)"
                            title="18 Wait Listed"
                            titleWeight="700"
                            subtitle="This Week"
                            iconChar="W"
                            iconColor="#FFFFFF"
                            iconBorderColor="#FFFFFF"
                          />
                        </div>

                        {/* Make Ups */}
                        <div
                          className="inline-block align-top"
                          style={{ width: "22.22%", padding: "15px" }}
                        >
                          <EventWidget
                            bgColor="rgb(255, 255, 255)"
                            textColor="rgb(86, 86, 86)"
                            title="0 Make Ups"
                            titleWeight="400"
                            subtitle="This Week"
                            iconChar="M"
                            iconColor="#565656"
                          />
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

      {/* ── Footer ── */}
      <footer
        className="fixed bottom-0 w-full h-[35px] z-[7000] text-white leading-[13px]"
        style={{ backgroundColor: "rgba(52, 52, 52, 0.92)" }}
      >
        <ul className="block h-[35px] pl-[20px] leading-[35px]">
          <li className="inline-block relative w-[24px] h-[35px] ml-[20px] leading-[35px]">
            <a title="Background Tasks" className="cursor-pointer">
              <span
                className="inline-block relative w-[24px] h-[24px] text-center"
                style={{
                  backgroundImage: `url("https://cdn.iclasspro.com/images/taskbar-icon-sprite.svg")`,
                  backgroundPosition: "0px 0px",
                }}
              />
            </a>
          </li>
          <li className="inline-block relative w-[24px] h-[35px] ml-[20px] leading-[35px]">
            <a title="Scheduled Emails" className="cursor-pointer">
              <span
                className="inline-block relative w-[24px] h-[24px] text-center"
                style={{
                  backgroundImage: `url("https://cdn.iclasspro.com/images/taskbar-icon-sprite.svg")`,
                  backgroundPosition: "0px -553px",
                }}
              />
            </a>
          </li>
        </ul>
        <ul className="absolute right-0 top-0 h-[34px] leading-[34px] text-[11px]">
          <li className="px-[10px] text-[10px] font-[600] leading-[34px] opacity-50">
            © 2026 iClassPro Inc., All Rights Reserved. (10)
          </li>
        </ul>
      </footer>
    </div>
  );
}

/* ── Sub-Components ── */

function NavItem({ label, href }) {
  return (
    <li className="relative h-[44px] mt-[16px] shrink-0">
      <a
        href={href}
        className="block relative h-[44px] pt-[30px] px-[15px] text-[11px] font-[600] leading-[13px] text-center text-[#B8D0E5] whitespace-nowrap hover:text-white transition-colors"
      >
        {label}
      </a>
    </li>
  );
}

function ListWidget({ title, items }) {
  return (
    <div className="flex flex-col relative bg-white border border-[rgb(210,210,210)] shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
      {/* Header */}
      <h3 className="px-[15px] py-[10px] text-[13px] font-[700] text-white bg-[#5086B7] border-b border-[rgb(210,210,210)] text-center">
        {title}
      </h3>

      {/* Body */}
      <div className="flex flex-col px-[15px]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex items-center py-[10px] ${
              index < items.length - 1 ? "border-b border-[#EEEEEE]" : ""
            }`}
          >
            <span className="w-[40px] font-[700] text-[13px] text-[#565656]">
              {item.count}
            </span>
            <span className="text-[13px] text-[#565656]">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KpiWidget({
  icon,
  iconTitle,
  value,
  title,
  changeText,
  changeColor,
  stats,
}) {
  return (
    <div className="flex flex-col relative bg-white border border-[rgb(210,210,210)] text-center text-[#565656] group">
      {/* Hover buttons */}
      <span className="flex opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          type="button"
          title="Help"
          className="flex absolute top-[12px] right-[36px] w-[20px] h-[20px] min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] z-[9] justify-center items-center text-[12px] font-[600] text-[#565656] bg-[#F9F9F9] border border-[rgb(210,210,210)] rounded-full"
        >
          <HelpCircle className="w-[12px] h-[12px] text-[rgb(80,134,183)]" />
        </button>
      </span>
      <span className="flex opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          type="button"
          title="Open"
          className="flex absolute top-[12px] right-[12px] w-[20px] h-[20px] min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] z-[9] justify-center items-center text-[12px] font-[600] text-[#565656] bg-[#F9F9F9] border border-[rgb(210,210,210)] rounded-full"
        >
          <ExternalLink className="w-[12px] h-[12px] text-[rgb(80,134,183)]" />
        </button>
      </span>

      {/* Circle Icon */}
      <div className="absolute top-[-17px] left-1/2 -translate-x-1/2 z-[1]">
        <div
          className="inline-flex relative w-[50px] h-[50px] m-[3px] justify-center items-center bg-[rgb(80,134,183)] rounded-full text-white"
          title={iconTitle}
        >
          {icon}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative flex-1 min-h-[1px] pt-[45px] px-[30px]">
        <div className="pt-[45px] text-center">
          <span className="text-[35px] font-[700] leading-[50px] text-[#565656]">
            {value}
          </span>
          <h2 className="text-[20px] font-[400] leading-[22px] text-[#565656] mb-[30px]">
            {title}
            <br />
            <small
              className="text-[11px] font-[700] italic leading-[12.1px] pt-[5px] inline-block"
              style={{ color: changeColor }}
            >
              {changeText}
            </small>
          </h2>
        </div>
      </div>

      {/* Bottom Stats Bar */}
      <div className="flex relative min-h-[60px] p-[13px] bg-[#F9F9F9] border-t border-[rgb(210,210,210)] text-center text-[#565656] leading-[15.6px]">
        <div className="flex-1 px-[15px]">
          <div className="flex flex-wrap -mx-[15px] items-center">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`flex-[0_0_33.3333%] max-w-[33.3333%] px-[15px] text-center ${
                  i < stats.length - 1 ? "border-r border-[rgb(210,210,210)]" : ""
                }`}
              >
                <strong className="text-[13px] font-[700] leading-[15.6px] text-[#565656]">
                  {stat.value}
                </strong>
                <br />
                <span className="text-[11px] font-[400] italic leading-[13.2px] text-[#565656] pt-[5px] inline-block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EventWidget({
  bgColor,
  textColor,
  title,
  titleWeight,
  subtitle,
  iconChar,
  iconColor,
  iconBorderColor,
}) {
  return (
    <div
      className="flex flex-col relative h-[90px] border border-[rgb(210,210,210)] group"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Hover buttons */}
      <span className="flex opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          type="button"
          title="Help"
          className="flex absolute top-[12px] right-[36px] w-[20px] h-[20px] min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] z-[9] justify-center items-center text-[12px] font-[600] text-[#565656] bg-[#F9F9F9] border border-[rgb(210,210,210)] rounded-full"
        >
          <HelpCircle className="w-[12px] h-[12px] text-[rgb(80,134,183)]" />
        </button>
      </span>
      <span className="flex opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          type="button"
          title="Open"
          className="flex absolute top-[12px] right-[12px] w-[20px] h-[20px] min-w-[20px] min-h-[20px] max-w-[20px] max-h-[20px] z-[9] justify-center items-center text-[12px] font-[600] text-[#565656] bg-[#F9F9F9] border border-[rgb(210,210,210)] rounded-full"
        >
          <ExternalLink className="w-[12px] h-[12px] text-[rgb(80,134,183)]" />
        </button>
      </span>

      {/* Content */}
      <div className="relative flex-1 min-h-[1px] p-[30px] overflow-hidden">
        <div className="flex justify-center items-center whitespace-nowrap">
          <span
            aria-hidden="true"
            className="flex justify-center items-center w-[20px] h-[20px] mr-[15px] shrink-0 text-[14px] leading-[18px]"
            style={{
              color: iconColor,
              fontWeight: 400,
              border: iconBorderColor ? `1px solid ${iconBorderColor}` : "none",
              borderRadius: "50%",
            }}
          >
            {iconChar}
          </span>
          <div>
            <h1
              className="text-[16px] leading-[17.6px] whitespace-nowrap"
              style={{ fontWeight: titleWeight, color: textColor }}
            >
              {title}
            </h1>
            <small
              className="text-[11px] font-[400] leading-[15.71px]"
              style={{ color: textColor }}
            >
              <em className="italic">{subtitle}</em>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
