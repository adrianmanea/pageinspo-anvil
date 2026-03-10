import React, { useState, useEffect } from "react";
import { CheckCircle, XCircle, Settings } from "lucide-react";

const plans = [
  {
    name: "Standard",
    planKey: "PREMIUM",
    bgColor: "bg-[#F2E2FC] dark:bg-[#3D224E]",
    price: "$24",
    billedYearly: "Billed yearly ($288)",
    description:
      "For teams who need a simple CRM to streamline sales",
    buttonLabel: "Upgrade to Standard",
    highlighted: false,
    limits: [
      { text: "2,000 emails", suffix: "/member/month", enabled: true },
      { text: "500 enrichments", suffix: "/month", enabled: true },
      { text: "1 email domain", suffix: "", enabled: true },
      { text: "1 account sync", suffix: "/member", enabled: true },
      { text: "2,000 ai fields", suffix: "/month", enabled: true },
      { text: "200 research credits", suffix: "/month", enabled: true },
    ],
    advanced: [
      { text: "Dashboards", enabled: false },
      { text: "Objects", enabled: false },
      { text: "Email sequences", enabled: false },
      { text: "API", enabled: false },
    ],
    admin: [
      { text: "Advanced roles & permissions", enabled: false },
      { text: "Migration service", enabled: false },
      { text: "Priority support", enabled: false },
    ],
  },
  {
    name: "Premium",
    planKey: "UNLIMITED",
    bgColor: "bg-[#FBDCEF] dark:bg-[#4B143D]",
    price: "$48",
    billedYearly: "Billed yearly ($576)",
    description:
      "For businesses who need a CRM that supports advanced collaboration and multi-channel workflows",
    buttonLabel: "Upgrade to Premium",
    highlighted: true,
    limits: [
      { text: "5,000 emails", suffix: "/member/month", enabled: true },
      { text: "1,000 enrichments", suffix: "/month", enabled: true },
      { text: "3 email domains", suffix: "", enabled: true },
      { text: "5 accounts sync", suffix: "/member", enabled: true },
      { text: "5,000 ai fields", suffix: "/month", enabled: true },
      { text: "200 research credits", suffix: "/month", enabled: true },
    ],
    advanced: [
      { text: "Dashboards", enabled: true },
      { text: "Objects", enabled: true },
      { text: "Email sequences", enabled: true },
      { text: "API", enabled: true },
    ],
    admin: [
      { text: "Advanced roles & permissions", enabled: true },
      { text: "Migration service", enabled: true },
      { text: "Priority support", enabled: true },
    ],
  },
  {
    name: "Custom",
    planKey: "CUSTOM",
    bgColor: "bg-white dark:bg-[#222222]",
    price: "From  $80",
    billedYearly: "Billed yearly ($960)",
    description:
      "For businesses who need a CRM that offers greater control and scalability",
    buttonLabel: "Get a demo",
    highlighted: false,
    isCustom: true,
    limits: [
      { text: "Custom emails", suffix: "/member/month", enabled: true, isCustomIcon: true },
      { text: "Custom enrichments", suffix: "/month", enabled: true, isCustomIcon: true },
      { text: "Custom email domains", suffix: "", enabled: true, isCustomIcon: true },
      { text: "Custom accounts sync", suffix: "/member", enabled: true, isCustomIcon: true },
      { text: "Custom ai fields", suffix: "/month", enabled: true, isCustomIcon: true },
      { text: "Custom research credits", suffix: "/month", enabled: true, isCustomIcon: true },
    ],
    advanced: [
      { text: "Dashboards", enabled: true },
      { text: "Objects", enabled: true },
      { text: "Email sequences", enabled: true },
      { text: "API", enabled: true },
    ],
    admin: [
      { text: "Advanced roles & permissions", enabled: true },
      { text: "Migration service", enabled: true },
      { text: "Priority support", enabled: true },
    ],
  },
];

const featureGroups = [
  {
    heading: "Key features",
    rows: [
      { feature: "People & Companies", standard: true, premium: true, custom: true },
      { feature: "Group & Views", standard: true, premium: true, custom: true },
      { feature: "Pipeline management", standard: true, premium: true, custom: true },
      { feature: "Import/Export CSV", standard: true, premium: true, custom: true },
      { feature: "Auto-merge contacts", standard: true, premium: true, custom: true },
      { feature: "Template library", standard: true, premium: true, custom: true },
      { feature: "folkX: Chrome extension", standard: true, premium: true, custom: true },
      { feature: "Zapier & Make apps", standard: false, premium: true, custom: true },
      { feature: "Rest API", standard: false, premium: true, custom: true },
      { feature: "Email sync", standard: "1 /member", premium: "5 /member", custom: "Custom" },
      { feature: "Objects", standard: false, premium: true, custom: true },
      { feature: "Dashboards", standard: false, premium: true, custom: true },
    ],
  },
  {
    heading: "Intelligence",
    rows: [
      { feature: "Find emails (enrichment)", standard: "500 /month", premium: "1,000 /month", custom: "Custom" },
      { feature: "AI field", standard: "2,000 /month", premium: "5,000 /month", custom: "Custom" },
      { feature: "Relationship intelligence", subtitle: "Last interaction, # of interactions, strongest connection, etc.", standard: true, premium: true, custom: true },
      { feature: "Follow-up assistant", standard: true, premium: true, custom: true },
      { feature: "Research assistant", standard: "200 /month", premium: "200 /month", custom: "Custom" },
      { feature: "Workflow assistant", standard: "1,500 /month", premium: "10,000 /month", custom: "Custom" },
      { feature: "Recap assistant", standard: true, premium: true, custom: true },
    ],
  },
  {
    heading: "Messages and sequences",
    rows: [
      { feature: "Messages", standard: "2,000 /member/month", premium: "5,000 /member/month", custom: "Custom" },
      { feature: "Sequences", standard: false, premium: true, custom: true },
      { feature: "Save and use templates", standard: true, premium: true, custom: true },
      { feature: "LinkedIn and Gmail templates", standard: true, premium: true, custom: true },
      { feature: "Campaign analytics", standard: true, premium: true, custom: true },
      { feature: "Custom domains", standard: "1", premium: "3", custom: "Custom" },
    ],
  },
  {
    heading: "Collaboration & Admin",
    rows: [
      { feature: "Advanced roles & permissions", standard: false, premium: true, custom: true },
      { feature: "Members", standard: "Unlimited", premium: "Unlimited", custom: "Unlimited" },
      { feature: "SSO", standard: "Google", premium: "Google", custom: "Google" },
      { feature: "Interactions sharing", standard: "Last 30 interactions", premium: true, custom: true },
      { feature: "Share lists", standard: true, premium: true, custom: true },
      { feature: "Mentions & Notes", standard: true, premium: true, custom: true },
      { feature: "Reminders", standard: true, premium: true, custom: true },
    ],
  },
  {
    heading: "Support",
    rows: [
      { feature: "Priority support", standard: true, premium: true, custom: true },
      { feature: "Dedicated customer success manager", standard: false, premium: true, custom: true },
      { feature: "Migration service", standard: false, premium: true, custom: true },
    ],
  },
];

function FeatureIcon({ value }) {
  if (value === true) {
    return <CheckCircle className="w-[16px] h-[16px] text-[#626262] dark:text-[#B4B4B4]" />;
  }
  if (value === false) {
    return <XCircle className="w-[16px] h-[16px] text-[#D9D9D9] dark:text-[#3D3D3D]" />;
  }
  return (
    <span className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
      {value}
    </span>
  );
}

function PlanCard({ plan }) {
  return (
    <article className="flex flex-col bg-white dark:bg-[#222222] border border-[#D9D9D9] dark:border-[#3D3D3D] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)]">
      {/* Plan Header */}
      <div className={`flex flex-col p-[16px_24px] ${plan.bgColor}`}>
        <header>
          <h3 className="text-[20px] font-[500] leading-[30px] tracking-[-0.38px] text-[#202020] dark:text-[#EEEEEE]">
            {plan.name}
          </h3>
          <p className="max-w-[240px] min-h-[56px] mt-[8px] text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE]">
            {plan.description}
          </p>
        </header>
        <div className="mt-[16px]">
          <p className="flex items-center gap-[8px]">
            <span className="text-[20px] font-[500] leading-[30px] tracking-[-0.38px] mt-[4px] text-[#202020] dark:text-[#EEEEEE]">
              {plan.price}
            </span>
            <span className="flex flex-col text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE]">
              <span>per member</span>
              <span>per month</span>
            </span>
          </p>
          <p className="mt-[16px] text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE]">
            {plan.billedYearly}
          </p>
        </div>
        <div className="mt-[24px]">
          {plan.isCustom ? (
            <a
              href="#"
              className="inline-flex w-full h-[28px] px-[10px] py-[6px] justify-center items-center text-[13px] font-[500] whitespace-nowrap bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] rounded-full shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] cursor-pointer text-[#202020] dark:text-[#EEEEEE] hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-colors"
            >
              {plan.buttonLabel}
            </a>
          ) : plan.highlighted ? (
            <button className="inline-flex w-full h-[28px] px-[10px] py-[6px] justify-center items-center text-[13px] font-[500] whitespace-nowrap text-[#FDFDFD] dark:text-[#191919] bg-[#202020] dark:bg-[#EEEEEE] border border-transparent rounded-full cursor-pointer hover:bg-[#3D3D3D] dark:hover:bg-[#D4D4D4] transition-colors">
              {plan.buttonLabel}
            </button>
          ) : (
            <button className="inline-flex w-full h-[28px] px-[10px] py-[6px] justify-center items-center text-[13px] font-[500] whitespace-nowrap bg-white dark:bg-[#222222] border border-[#BBBBBB] dark:border-[#606060] rounded-full shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] cursor-pointer text-[#202020] dark:text-[#EEEEEE] hover:bg-[#F5F5F5] dark:hover:bg-[#2A2A2A] transition-colors">
              {plan.buttonLabel}
            </button>
          )}
        </div>
      </div>

      {/* Limits */}
      <span className="flex mt-[16px] px-[24px] text-[13px] font-[500] capitalize text-[#626262] dark:text-[#B4B4B4]">
        Limits
      </span>
      <ul className="flex flex-col gap-[12px] mt-[16px] mb-[16px] px-[24px]">
        {plan.limits.map((item, i) => (
          <li key={i} className="flex items-start gap-[6px]">
            {item.isCustomIcon ? (
              <Settings className="w-[16px] h-[16px] flex-shrink-0 text-[#202020] dark:text-[#EEEEEE]" />
            ) : (
              <CheckCircle className="w-[16px] h-[16px] flex-shrink-0 text-[#202020] dark:text-[#EEEEEE]" />
            )}
            <span className="text-[13px] font-[400] text-[#202020] dark:text-[#EEEEEE]">
              {item.text}
              {item.suffix && (
                <span> {item.suffix}</span>
              )}
            </span>
          </li>
        ))}
      </ul>

      {/* Advanced */}
      <span
        className={`flex mt-[16px] px-[24px] text-[13px] font-[500] capitalize ${
          plan.advanced.some((a) => !a.enabled)
            ? "text-[#8C8C8C] dark:text-[#6E6E6E]"
            : "text-[#626262] dark:text-[#B4B4B4]"
        }`}
      >
        advanced
      </span>
      <ul className="flex flex-col gap-[12px] mt-[16px] mb-[16px] px-[24px]">
        {plan.advanced.map((item, i) => (
          <li
            key={i}
            className={`flex items-start gap-[6px] ${
              !item.enabled
                ? "text-[#8C8C8C] dark:text-[#6E6E6E] line-through"
                : ""
            }`}
          >
            {item.enabled ? (
              <CheckCircle className="w-[16px] h-[16px] flex-shrink-0 text-[#202020] dark:text-[#EEEEEE]" />
            ) : (
              <XCircle className="w-[16px] h-[16px] flex-shrink-0 text-[#8C8C8C] dark:text-[#6E6E6E]" />
            )}
            <span className={`text-[13px] font-[400] ${!item.enabled ? "" : "text-[#202020] dark:text-[#EEEEEE]"}`}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Admin */}
      <span
        className={`flex mt-[16px] px-[24px] text-[13px] font-[500] capitalize ${
          plan.admin.some((a) => !a.enabled)
            ? "text-[#8C8C8C] dark:text-[#6E6E6E]"
            : "text-[#626262] dark:text-[#B4B4B4]"
        }`}
      >
        admin
      </span>
      <ul className="flex flex-col gap-[12px] mt-[16px] mb-[16px] px-[24px]">
        {plan.admin.map((item, i) => (
          <li
            key={i}
            className={`flex items-start gap-[6px] ${
              !item.enabled
                ? "text-[#8C8C8C] dark:text-[#6E6E6E] line-through"
                : ""
            }`}
          >
            {item.enabled ? (
              <CheckCircle className="w-[16px] h-[16px] flex-shrink-0 text-[#202020] dark:text-[#EEEEEE]" />
            ) : (
              <XCircle className="w-[16px] h-[16px] flex-shrink-0 text-[#8C8C8C] dark:text-[#6E6E6E]" />
            )}
            <span className={`text-[13px] font-[400] ${!item.enabled ? "" : "text-[#202020] dark:text-[#EEEEEE]"}`}>
              {item.text}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ComparisonTable() {
  return (
    <section
      aria-label="Feature comparison"
      className="mt-[32px] border border-[#D9D9D9] dark:border-[#3D3D3D] shadow-[0_1px_1px_0_rgba(0,0,0,0.06)] dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.24)] bg-white dark:bg-[#222222] overflow-x-auto"
    >
      {/* Table Header */}
      <div className="grid grid-cols-4 min-w-[700px]">
        {/* Toggle cell */}
        <div className="flex items-center p-[8px_16px] min-h-[64px]">
          <div className="flex gap-[20px]">
            <button className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] cursor-pointer whitespace-nowrap">
              Annually
            </button>
            <button className="text-[13px] font-[500] text-[#626262] dark:text-[#B4B4B4] cursor-pointer whitespace-nowrap">
              Monthly
            </button>
          </div>
        </div>
        {/* Standard */}
        <div className="flex items-center gap-[8px] p-[8px_16px] min-h-[64px] border-l border-[#D9D9D9] dark:border-[#3D3D3D]">
          <span className="inline-flex items-center h-[20px] px-[8px] text-[13px] font-[500] bg-[#F2E2FC] dark:bg-[rgba(255,255,255,0.21)] rounded-full whitespace-nowrap text-[#202020] dark:text-[#EEEEEE]">
            Standard
          </span>
          <p className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
            $24
            <span className="ml-[4px] text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
              /member/month
            </span>
          </p>
        </div>
        {/* Premium */}
        <div className="flex items-center gap-[8px] p-[8px_16px] min-h-[64px] border-l border-[#D9D9D9] dark:border-[#3D3D3D]">
          <span className="inline-flex items-center h-[20px] px-[8px] text-[13px] font-[500] bg-[#FBDCEF] dark:bg-[rgba(255,255,255,0.21)] rounded-full whitespace-nowrap text-[#202020] dark:text-[#EEEEEE]">
            Premium
          </span>
          <p className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
            $48
            <span className="ml-[4px] text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
              /member/month
            </span>
          </p>
        </div>
        {/* Custom */}
        <div className="flex items-center gap-[8px] p-[8px_16px] min-h-[64px] border-l border-[#D9D9D9] dark:border-[#3D3D3D]">
          <span className="inline-flex items-center h-[20px] px-[8px] text-[13px] font-[500] bg-[rgba(0,0,0,0.118)] dark:bg-[rgba(255,255,255,0.21)] rounded-full whitespace-nowrap text-[#202020] dark:text-[#EEEEEE]">
            Custom
          </span>
          <p className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
            $80
            <span className="ml-[4px] text-[12px] font-[500] text-[#626262] dark:text-[#B4B4B4]">
              /member/month
            </span>
          </p>
        </div>
      </div>

      {/* Feature Groups */}
      {featureGroups.map((group, gi) => (
        <div key={gi} className="border-t border-[#D9D9D9] dark:border-[#3D3D3D] min-w-[700px]">
          {/* Group heading row */}
          <div className="grid grid-cols-4">
            <div className="p-[12px_16px]">
              <h3 className="text-[12px] font-[500] leading-[16px] tracking-[-0.024px] text-[#626262] dark:text-[#B4B4B4]">
                {group.heading}
              </h3>
            </div>
            <div className="border-l border-[#D9D9D9] dark:border-[#3D3D3D]" />
            <div className="border-l border-[#D9D9D9] dark:border-[#3D3D3D]" />
            <div className="border-l border-[#D9D9D9] dark:border-[#3D3D3D]" />
          </div>
          {/* Feature rows */}
          {group.rows.map((row, ri) => (
            <div key={ri} className="grid grid-cols-4">
              <div className="p-[12px_16px]">
                <p className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
                  {row.feature}
                </p>
                {row.subtitle && (
                  <p className="text-[12px] font-[400] text-[#626262] dark:text-[#B4B4B4] mt-[2px]">
                    {row.subtitle}
                  </p>
                )}
              </div>
              <div className="flex items-center p-[12px_16px] border-l border-[#D9D9D9] dark:border-[#3D3D3D]">
                <FeatureIcon value={row.standard} />
              </div>
              <div className="flex items-center p-[12px_16px] border-l border-[#D9D9D9] dark:border-[#3D3D3D]">
                <FeatureIcon value={row.premium} />
              </div>
              <div className="flex items-center p-[12px_16px] border-l border-[#D9D9D9] dark:border-[#3D3D3D]">
                <FeatureIcon value={row.custom} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </section>
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
    <div className="flex flex-col flex-1 w-full bg-white dark:bg-[#191919] text-[#202020] dark:text-[#EEEEEE] font-sans min-h-screen">
      {/* Top Header */}
      <header className="flex items-center gap-[8px] h-[48px] px-[24px] pr-[16px] border-b border-[#D9D9D9] dark:border-[#3D3D3D] flex-shrink-0">
        <div className="flex items-center gap-[12px] flex-1">
          <h1 className="text-[20px] font-[500] leading-[30px] tracking-[-0.38px] text-[#202020] dark:text-[#EEEEEE]">
            Plans
          </h1>
        </div>
      </header>

      <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden w-full">
        {/* Trial Banner */}
        <div className="flex items-center gap-[16px] px-[12px] py-[8px] bg-[rgba(0,0,0,0.055)] dark:bg-[rgba(255,255,255,0.063)]">
          <p className="flex-1 text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE]">
            Free trial ends in 2 days, upgrade to keep using folk.
          </p>
        </div>

        {/* Content */}
        <div className="w-full max-w-[1024px] px-[16px] sm:px-[24px] pt-[24px] pb-[40px]">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-start justify-between gap-[8px] mb-[48px]">
          <div>
            <h2 className="text-[20px] font-[500] leading-[30px] tracking-[-0.38px] text-[#202020] dark:text-[#EEEEEE] mb-[4px]">
              You are currently on a Premium plan free trial
            </h2>
            <p className="text-[13px] font-[400] text-[#626262] dark:text-[#B4B4B4]">
              3 workspace members
            </p>
          </div>
          <div className="flex flex-wrap gap-[4px]">
            <a
              href="#"
              className="inline-flex h-[28px] px-[10px] py-[6px] items-center text-[13px] font-[500] text-[#626262] dark:text-[#B4B4B4] rounded-full whitespace-nowrap cursor-pointer hover:text-[#202020] dark:hover:text-[#EEEEEE] transition-colors"
            >
              Manage members
            </a>
          </div>
        </header>

        {/* Payment Toggle */}
        <section className="mt-[24px]">
          <div className="flex gap-[20px] h-[48px] items-baseline">
            <button className="text-[13px] font-[500] text-[#202020] dark:text-[#EEEEEE] cursor-pointer whitespace-nowrap">
              Pay yearly (20% discount)
            </button>
            <button className="text-[13px] font-[500] text-[#626262] dark:text-[#B4B4B4] cursor-pointer whitespace-nowrap">
              Pay monthly
            </button>
          </div>

          {/* Plan Cards */}
          <ul
            aria-label="Pricing plans"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] mt-[16px]"
          >
            {plans.map((plan) => (
              <li key={plan.name}>
                <PlanCard plan={plan} />
              </li>
            ))}
          </ul>

          {/* Feature Comparison Table */}
          <ComparisonTable />
        </section>
        </div>
      </div>
    </div>
  );
}
