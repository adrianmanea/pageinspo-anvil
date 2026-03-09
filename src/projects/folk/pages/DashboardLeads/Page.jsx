import React, { useState, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { X, Star, Users, MoreHorizontal, Plus } from "lucide-react";

// Expose React globally so the dynamically loaded UMD build of Recharts uses the identical bundled instance
window.React = React;
window.ReactDOM = ReactDOM;

const creationDateData = [{ date: "Feb 26", leads: 10 }];

const statusData = [
  { name: "Follow-up", value: 2, fill: "#33A7FF" },
  { name: "Lead", value: 2, fill: "#DB57AB" },
  { name: "Closed-won", value: 2, fill: "#FFC233" },
  { name: "Closed-lost", value: 2, fill: "#61D19B" },
  { name: "No value", value: 1, fill: "#F8833A" },
  { name: "Qualified", value: 1, fill: "#9C65CD" },
];

function WidgetCard({ title, children }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-[305px] border border-[#d9d9d9] bg-white p-[20px] group">
      <div className="flex flex-col h-full w-full">
        <div
          className="flex justify-between items-center h-[28px] shrink-0"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="text-[13px] font-medium text-[#202020]">
            {title}
          </span>
          <div
            className={`flex gap-[8px] transition-opacity duration-200 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <button className="flex h-[28px] items-center justify-center px-[10px] bg-white border border-[#bbbbbb] rounded-full shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] text-[13px] font-medium text-[#202020]">
              Edit
            </button>
            <button className="flex h-[28px] w-[28px] items-center justify-center bg-white border border-[#bbbbbb] rounded-full shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] text-[#626262]">
              <MoreHorizontal size={14} />
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

function SimpleStat({ value }) {
  return (
    <span className="text-[20px] font-medium tracking-tight text-[#202020]">
      {value}
    </span>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col h-screen w-full bg-[#FAFAFA] text-[#202020] font-sans antialiased">
      {/* Top Header */}
      <header className="flex h-[48px] shrink-0 items-center justify-between px-[24px] pr-[16px] border-b border-[#d9d9d9] bg-white">
        <div className="flex items-center gap-[12px] h-full">
          <button className="flex h-[28px] w-[28px] items-center justify-center rounded-full text-[#626262]">
            <X size={16} />
          </button>
          <form className="h-[30px] flex items-center">
            <input
              type="text"
              value="Leads dashboard"
              readOnly
              className="w-[163px] text-[20px] font-medium leading-[30px] tracking-tight text-[#202020] bg-transparent outline-none truncate"
            />
          </form>
          <button className="flex h-[28px] w-[28px] items-center justify-center rounded-full text-[#626262]">
            <Star size={16} />
          </button>
          <div className="flex flex-row items-center gap-[4px] text-[13px] text-[#626262]">
            <span className="flex items-center">
              <span className="mr-[4px] text-[16px]">🤑</span>
              Leads
            </span>
            <span className="mx-[2px]">·</span>
            <span className="flex items-center">
              <span className="mr-[4px] flex items-center justify-center h-[16px] w-[16px]">
                <Users size={13} />
              </span>
              People
            </span>
          </div>
        </div>
        <div className="flex items-center gap-[8px]">
          <button className="flex h-[28px] items-center justify-center px-[10px] rounded-full bg-[#202020] text-white text-[13px] font-medium shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] hover:bg-[#323232]">
            Add chart
          </button>
          <button className="flex h-[28px] w-[28px] items-center justify-center rounded-full text-[#626262]">
            <MoreHorizontal size={16} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-auto p-[24px]">
        <div className="mx-auto w-full max-w-[1536px] grid grid-cols-2 gap-[24px]">
          <WidgetCard title="Number of leads">
            <SimpleStat value="10" />
          </WidgetCard>

          <WidgetCard title="Conversion rate">
            <SimpleStat value="22%" />
          </WidgetCard>

          <WidgetCard title="Leads by creation date">
            <div className="w-full h-full pt-[20px]">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 715 224"
                style={{ display: "block" }}
              >
                {/* Grid Lines */}
                <g>
                  <line
                    strokeDasharray="1 6"
                    stroke="#cecece"
                    fill="none"
                    x1="24"
                    y1="194"
                    x2="707"
                    y2="194"
                  />
                  <line
                    strokeDasharray="1 6"
                    stroke="#cecece"
                    fill="none"
                    x1="24"
                    y1="133.333"
                    x2="707"
                    y2="133.333"
                  />
                  <line
                    strokeDasharray="1 6"
                    stroke="#cecece"
                    fill="none"
                    x1="24"
                    y1="72.666"
                    x2="707"
                    y2="72.666"
                  />
                  <line
                    strokeDasharray="1 6"
                    stroke="#cecece"
                    fill="none"
                    x1="24"
                    y1="12"
                    x2="707"
                    y2="12"
                  />
                </g>
                {/* Bar */}
                <g>
                  <path
                    d="M 351,72.666 h 28 v 121.333 h -28 Z"
                    fill="#33A7FF"
                  />
                </g>
                {/* X Axis */}
                <g>
                  <line
                    x1="24"
                    y1="194"
                    x2="707"
                    y2="194"
                    stroke="#cecece"
                    fill="none"
                  />
                  <text
                    fontSize="13"
                    x="365.5"
                    y="212"
                    textAnchor="middle"
                    fill="#626262"
                  >
                    Feb 26
                  </text>
                </g>
                {/* Y Axis Labels */}
                <g>
                  <text
                    fontSize="13"
                    x="16"
                    y="198"
                    textAnchor="end"
                    fill="#626262"
                  >
                    0
                  </text>
                  <text
                    fontSize="13"
                    x="16"
                    y="137.333"
                    textAnchor="end"
                    fill="#626262"
                  >
                    5
                  </text>
                  <text
                    fontSize="13"
                    x="16"
                    y="76.666"
                    textAnchor="end"
                    fill="#626262"
                  >
                    10
                  </text>
                  <text
                    fontSize="13"
                    x="16"
                    y="16"
                    textAnchor="end"
                    fill="#626262"
                  >
                    15
                  </text>
                </g>
              </svg>
            </div>
          </WidgetCard>

          <WidgetCard title="Leads by status">
            <div className="flex flex-row items-center w-full h-full ps-[30px] pe-[10px]">
              <>
                <div className="relative h-[224px] w-[224px] flex-shrink-0 flex items-center justify-center">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="139.75 0 224 224"
                    style={{ display: "block" }}
                  >
                    <path
                      fill="#33A7FF"
                      d="M 251.75,31.75 A 80.25,80.25,0,0,1,327.536,85.608 L 312.378,90.886 A 64.2,64.2,0,0,0,251.75,47.8 Z"
                    />
                    <path
                      fill="#DB57AB"
                      d="M 327.985,86.935 A 80.25,80.25,0,0,1,300.491,175.751 L 290.743,163.001 A 64.2,64.2,0,0,0,312.738,91.948 Z"
                    />
                    <path
                      fill="#FFC233"
                      d="M 299.371,176.592 A 80.25,80.25,0,0,1,206.411,178.215 L 215.479,164.972 A 64.2,64.2,0,0,0,289.847,163.674 Z"
                    />
                    <path
                      fill="#61D19B"
                      d="M 205.262,177.414 A 80.25,80.25,0,0,1,174.686,89.610 L 190.099,94.088 A 64.2,64.2,0,0,0,214.560,164.331 Z"
                    />
                    <path
                      fill="#F8833A"
                      d="M 175.088,88.269 A 80.25,80.25,0,0,1,203.008,48.248 L 212.756,60.998 A 64.2,64.2,0,0,0,190.421,93.015 Z"
                    />
                    <path
                      fill="#9C65CD"
                      d="M 204.128,47.407 A 80.25,80.25,0,0,1,250.349,31.762 L 250.629,47.809 A 64.2,64.2,0,0,0,213.652,60.325 Z"
                    />
                  </svg>
                  {/* Center text for the donut chart */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[20px] font-medium text-[#202020]">
                      10
                    </span>
                  </div>
                </div>

                {/* Legend */}
                <div className="flex-1 flex flex-col justify-center pl-[24px] gap-[8px] h-full overflow-y-auto">
                  {statusData.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-[8px] text-[13px] text-[#202020]"
                    >
                      <div
                        className="h-[16px] w-[16px] flex-shrink-0"
                        style={{ backgroundColor: item.fill }}
                      />
                      <span className="truncate" title={item.name}>
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </>
            </div>
          </WidgetCard>

          <WidgetCard title="Number of deals closed">
            <SimpleStat value="2" />
          </WidgetCard>

          <WidgetCard title="Generated revenue">
            <SimpleStat value="$132,000.00" />
          </WidgetCard>

          {/* Add chart block */}
          <button className="flex items-center justify-center h-[305px] border border-[#d9d9d9] bg-white shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] text-[#626262] hover:bg-gray-50 transition-colors">
            <Plus size={24} />
          </button>
        </div>
      </main>
    </div>
  );
}
