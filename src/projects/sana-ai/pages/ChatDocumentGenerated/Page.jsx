import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronRight,
  Copy,
  ThumbsUp,
  ThumbsDown,
  Volume2,
  FileText,
  RotateCcw,
  Share,
  Plus,
  ArrowUp,
  Sparkles,
  Search,
  X,
  RefreshCw,
  MoreHorizontal,
  Download,
} from "lucide-react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const financialData = [
  {
    Year: 2021,
    Net_sales: 140800,
    Operating_profit: 58644,
    Net_profit: 47757,
    Op_margin: 41.7,
    Net_margin: 33.9,
    Share_price: 368,
  },
  {
    Year: 2022,
    Net_sales: 176954,
    Operating_profit: 74809,
    Net_profit: 55525,
    Op_margin: 42.3,
    Net_margin: 31.4,
    Share_price: 469,
  },
  {
    Year: 2023,
    Net_sales: 232261,
    Operating_profit: 102574,
    Net_profit: 83683,
    Op_margin: 44.2,
    Net_margin: 36.0,
    Share_price: 698,
  },
  {
    Year: 2024,
    Net_sales: 290403,
    Operating_profit: 128339,
    Net_profit: 100988,
    Op_margin: 44.2,
    Net_margin: 34.8,
    Share_price: 624,
  },
  {
    Year: 2025,
    Net_sales: 309064,
    Operating_profit: 127658,
    Net_profit: 102434,
    Op_margin: 41.3,
    Net_margin: 33.1,
    Share_price: 325,
  },
];

function SalesProfitChart() {
  return (
    <div className="my-[16px] border border-[#0A121714] dark:border-[#e8e8e814] rounded-[16px] p-[16px]">
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={financialData} barGap={2} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" stroke="#0A12170d" />
          <XAxis dataKey="Year" tick={{ fontSize: 12, fill: "#0A121799" }} />
          <YAxis
            tick={{ fontSize: 12, fill: "#0A121799" }}
            tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip formatter={(v) => v.toLocaleString()} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Bar
            dataKey="Net_sales"
            name="Net Sales (DKK m)"
            fill="#3b82f6"
            radius={[2, 2, 0, 0]}
          />
          <Bar
            dataKey="Operating_profit"
            name="Operating Profit (DKK m)"
            fill="#f97316"
            radius={[2, 2, 0, 0]}
          />
          <Bar
            dataKey="Net_profit"
            name="Net Profit (DKK m)"
            fill="#22c55e"
            radius={[2, 2, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function MarginsChart() {
  return (
    <div className="my-[16px] border border-[#0A121714] dark:border-[#e8e8e814] rounded-[16px] p-[16px]">
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={financialData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#0A12170d" />
          <XAxis dataKey="Year" tick={{ fontSize: 12, fill: "#0A121799" }} />
          <YAxis
            tick={{ fontSize: 12, fill: "#0A121799" }}
            domain={[25, 50]}
            unit="%"
          />
          <Tooltip formatter={(v) => `${v}%`} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Line
            type="monotone"
            dataKey="Op_margin"
            name="Operating Margin (%)"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="Net_margin"
            name="Net Margin (%)"
            stroke="#f97316"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function SharePriceChart() {
  return (
    <div className="my-[16px] border border-[#0A121714] dark:border-[#e8e8e814] rounded-[16px] p-[16px]">
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={financialData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#0A12170d" />
          <XAxis dataKey="Year" tick={{ fontSize: 12, fill: "#0A121799" }} />
          <YAxis tick={{ fontSize: 12, fill: "#0A121799" }} unit=" DKK" />
          <Tooltip formatter={(v) => `${v} DKK`} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Line
            type="monotone"
            dataKey="Share_price"
            name="Closing Share Price (DKK)"
            stroke="#8b5cf6"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function FinancialTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-[14px] border-collapse">
        <thead>
          <tr className="border-b border-[#0A121714] dark:border-[#e8e8e814]">
            <th className="text-left py-[8px] px-[12px] font-[600] text-[#0A1217] dark:text-[#e8e8e8] whitespace-nowrap">
              Year
            </th>
            <th className="text-left py-[8px] px-[12px] font-[600] text-[#0A1217] dark:text-[#e8e8e8] whitespace-nowrap">
              Net_sales_DKK_m
            </th>
            <th className="text-left py-[8px] px-[12px] font-[600] text-[#0A1217] dark:text-[#e8e8e8] whitespace-nowrap">
              Operating_profit_DKK_m
            </th>
            <th className="text-left py-[8px] px-[12px] font-[600] text-[#0A1217] dark:text-[#e8e8e8] whitespace-nowrap">
              Net_profit_DKK_m
            </th>
            <th className="text-left py-[8px] px-[12px] font-[600] text-[#0A1217] dark:text-[#e8e8e8] whitespace-nowrap">
              Operating_margin_pct
            </th>
            <th className="text-left py-[8px] px-[12px] font-[600] text-[#0A1217] dark:text-[#e8e8e8] whitespace-nowrap">
              Net_margin_pct
            </th>
            <th className="text-left py-[8px] px-[12px] font-[600] text-[#0A1217] dark:text-[#e8e8e8] whitespace-nowrap">
              Closing_share_price_DKK
            </th>
          </tr>
        </thead>
        <tbody>
          {financialData.map((row) => (
            <tr key={row.Year} className="border-b border-[#0A12170a] dark:border-[#e8e8e80a]">
              <td className="py-[8px] px-[12px] text-[#0A1217] dark:text-[#e8e8e8]">{row.Year}</td>
              <td className="py-[8px] px-[12px] text-[#0A1217] dark:text-[#e8e8e8]">
                {row.Net_sales}
              </td>
              <td className="py-[8px] px-[12px] text-[#0A1217] dark:text-[#e8e8e8]">
                {row.Operating_profit}
              </td>
              <td className="py-[8px] px-[12px] text-[#0A1217] dark:text-[#e8e8e8]">
                {row.Net_profit}
              </td>
              <td className="py-[8px] px-[12px] text-[#0A1217] dark:text-[#e8e8e8]">
                {row.Op_margin}
              </td>
              <td className="py-[8px] px-[12px] text-[#0A1217] dark:text-[#e8e8e8]">
                {row.Net_margin}
              </td>
              <td className="py-[8px] px-[12px] text-[#0A1217] dark:text-[#e8e8e8]">
                {row.Share_price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DocumentContent() {
  return (
    <div className="text-[16px] leading-[1.6] text-[#0A1217] dark:text-[#e8e8e8]">
      <h2 className="font-[700] text-[20px] leading-[1.4] mb-[8px]">
        1. Scope and data basis
      </h2>
      <p className="mb-[12px]">
        <strong>Objective.</strong> Provide a concise financial analysis of Novo
        Nordisk based on recent reported results, focusing on growth,
        profitability and market valuation.
      </p>
      <p className="mb-[16px]">
        <strong>Note on data.</strong> The charts and CSV generated with Python
        above are illustrative and not pulled live from Novo Nordisk filings.
        For investment or reporting use, always reconcile against the latest
        annual report, interim reports and official investor presentations.
      </p>

      <div className="mb-[8px]">
        <div className="flex items-baseline justify-between mb-[8px]">
          <h2 className="font-[700] text-[18px] leading-[1.4]">
            novo_nordisk_5y_financials.csv (all 5 rows)
          </h2>
        </div>
        <FinancialTable />
      </div>

      <h2 className="font-[700] text-[20px] leading-[1.4] mt-[24px] mb-[8px]">
        2. Revenue and profit development
      </h2>
      <p className="mb-[12px]">
        <strong>Strong top‑line growth.</strong> Over the 2021–2025 illustrative
        period in the dataset, net sales trend upward each year, with the
        steepest increase between 2021 and 2024. This mirrors Novo Nordisk's
        real‑world pattern of very strong GLP‑1–driven growth in recent years.
      </p>
      <p className="mb-[12px]">
        <strong>Profit growth outpacing sales (through 2024).</strong> Operating
        and net profit both rise faster than sales from 2021 through 2024 in the
        dataset, implying operating leverage: fixed costs are spread over a
        larger revenue base, and the product mix tilts toward higher‑margin
        obesity and diabetes therapies.
      </p>
      <p className="mb-[12px]">
        <strong>2025 flattening in profits.</strong> In the final (illustrative)
        year, net sales still rise but operating profit is roughly flat and net
        profit grows only marginally. This pattern is consistent with potential
        headwinds such as capacity investments, higher R&D and SG&A to support
        new launches, or currency effects.
      </p>
      <SalesProfitChart />

      <h2 className="font-[700] text-[20px] leading-[1.4] mt-[24px] mb-[8px]">
        3. Profitability and margins
      </h2>
      <p className="mb-[12px]">
        <strong>High and resilient margins.</strong> Operating margin in the
        dataset stays around the low‑to‑mid‑40% range, while net margin is
        around the mid‑30% range. This is indicative of a very profitable,
        innovation‑driven pharma business with strong pricing power and scale
        benefits.
      </p>
      <p className="mb-[12px]">
        <strong>Margin expansion then slight compression.</strong> Margins
        expand from 2021 to 2023, then are stable in 2024 and dip in 2025. That
        pattern would be consistent with a company coming off a period of
        extraordinary operating leverage and then investing heavily in capacity
        and pipeline while facing possible pricing or reimbursement pressure.
      </p>
      <MarginsChart />

      <h2 className="font-[700] text-[20px] leading-[1.4] mt-[24px] mb-[8px]">
        4. Share‑price dynamics (DKK)
      </h2>
      <p className="mb-[12px]">
        <strong>Strong rerating into 2023.</strong> The share‑price series shows
        a large climb between 2021 and 2023, reflecting how equity markets have
        priced in Novo Nordisk's leadership in GLP‑1–based obesity and diabetes
        therapies and the associated growth and cash‑flow outlook.
      </p>
      <p className="mb-[12px]">
        <strong>Pull‑back after the peak.</strong> After peaking in 2023, the
        price declines in 2024–2025 in the dataset. This kind of pattern can
        result from a combination of lofty starting valuation, rising
        expectations that are difficult to exceed, rotation within
        healthcare/equities, or concerns about competition, capacity, policy and
        patent cliffs.
      </p>
      <SharePriceChart />

      <h2 className="font-[700] text-[20px] leading-[1.4] mt-[24px] mb-[8px]">
        5. Strategic and qualitative considerations (conceptual)
      </h2>
      <p className="mb-[8px]">
        <strong>Growth drivers.</strong> Novo Nordisk's real‑world growth is
        driven mainly by:
      </p>
      <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
        <li>GLP‑1 portfolio in diabetes (e.g., semaglutide‑based therapies)</li>
        <li>Rapidly growing obesity franchise</li>
        <li>Expansion into new indications and geographies</li>
        <li>Ongoing life‑cycle management and pipeline development</li>
      </ul>
      <p className="mb-[8px]">
        <strong>Key risks and sensitivities.</strong> When interpreting the
        financials and share‑price behavior, investors typically watch:
      </p>
      <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
        <li>Manufacturing capacity constraints and large‑scale capex</li>
        <li>
          Competitive landscape in GLP‑1/obesity (new entrants, pricing
          dynamics)
        </li>
        <li>Regulatory and reimbursement changes in major markets (US, EU)</li>
        <li>
          Pipeline execution (new indications, cardiovascular and metabolic
          outcomes)
        </li>
      </ul>

      <h2 className="font-[700] text-[20px] leading-[1.4] mt-[24px] mb-[8px]">
        6. How to extend this analysis with real data
      </h2>
      <p className="mb-[8px]">
        To turn this into a fully investment‑grade analysis, you would
        typically:
      </p>
      <ol className="list-decimal pl-[24px] mb-[12px] space-y-[4px]">
        <li>
          Pull the latest five‑year historical financial statements (income
          statement, balance sheet, cash‑flow) from Novo Nordisk's annual
          reports and interim filings.
        </li>
        <li>
          Rebuild the dataset so that net sales, operating profit, net profit
          and margins exactly match reported figures in DKK.
        </li>
        <li>
          Add:
          <ul className="list-disc pl-[20px] mt-[4px] space-y-[2px]">
            <li>EPS, DPS and payout ratio</li>
            <li>Free cash flow and capex</li>
            <li>Net cash / net debt and leverage ratios</li>
          </ul>
        </li>
        <li>
          Overlay valuation metrics (P/E, EV/EBIT, EV/EBITDA, P/FCF) using
          current share price and market cap.
        </li>
        <li>
          Segment the analysis by therapy area (diabetes, obesity, rare
          diseases) and geography to see where growth and margins are strongest.
        </li>
      </ol>
      <p>
        If you would like, I can next: (a) rebuild these charts using exact
        figures from the latest Novo Nordisk annual report, or (b) add
        forward‑looking scenarios (bull/base/bear) for revenues, margins and
        valuation multiples.
      </p>
    </div>
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
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#131314] flex w-full">
      {/* ===== LEFT: Chat Area ===== */}
      <div className="w-full lg:w-[38%] flex-shrink-0 flex flex-col min-h-screen relative">
        {/* Top Navigation Bar */}
        <div className="sticky top-0 z-[10] px-[16px] sm:px-[24px] py-[8px] bg-[#FFFFFF] dark:bg-[#131314]">
          <nav className="flex items-center justify-between min-h-[44px]">
            <div className="flex items-center gap-[4px]">
              <button
                className="flex items-center gap-[6px] px-[16px] py-[6px] h-[36px] text-[14px] font-[700] rounded-full cursor-pointer bg-transparent hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] transition-all duration-[200ms] text-[#0A1217] dark:text-[#e8e8e8]"
                type="button"
              >
                All
                <ChevronDown className="w-[16px] h-[16px] text-[#0A121799] dark:text-[#e8e8e899]" />
              </button>
            </div>
            <div className="flex items-center gap-[8px]">
              <button className="flex items-center px-[16px] py-[6px] h-[36px] text-[14px] font-[700] rounded-full cursor-pointer border border-[#0A121714] dark:border-[#e8e8e824] hover:border-[#0A121733] dark:hover:border-[#e8e8e840] bg-transparent text-[#0A1217] dark:text-[#e8e8e8] transition-all duration-[200ms]">
                Help
              </button>
            </div>
          </nav>
        </div>

        {/* Scrollable Chat Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[868px] w-full mx-auto px-[16px] sm:px-[32px] pt-[16px] pb-[200px]">
            <div className="group">
              {/* User Message */}
              <div className="flex flex-row-reverse items-end gap-[12px]">
                <div className="flex items-center justify-center flex-shrink-0 rounded-full bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.1)] overflow-hidden w-[40px] h-[40px]">
                  <div className="uppercase text-[22px] text-[#FFF] font-[700] leading-none">
                    a
                  </div>
                </div>
                <div className="flex-1 flex justify-end">
                  <div className="bg-[#0A12170d] dark:bg-[#e8e8e80d] rounded-[20px] px-[20px] py-[12px] max-w-[80%]">
                    <p className="text-[16px] whitespace-pre-wrap break-words text-[#0A1217] dark:text-[#e8e8e8]">
                      Create a financial analysis for Novo Nordisk and plot data
                      in graphs
                    </p>
                  </div>
                </div>
              </div>

              {/* "Done" status button */}
              <div className="h-[16px]" />
              <button className="relative w-full min-h-[36px] flex items-center opacity-[0.7] hover:opacity-100 cursor-pointer transition-opacity">
                <div className="flex items-center gap-[4px]">
                  <p className="text-[16px] text-[#0A1217] dark:text-[#e8e8e8]">Done</p>
                  <ChevronRight className="w-[14px] h-[14px] text-[#0A1217] dark:text-[#e8e8e8] -mb-[2px]" />
                </div>
              </button>

              {/* Document Preview Card */}
              <div className="h-[4px]" />
              <div className="mt-[8px] max-w-[382px] bg-[#0A12170d] dark:bg-[#e8e8e80d] rounded-[16px] cursor-pointer">
                <div className="max-w-[543px] p-[16px] flex flex-row gap-[16px]">
                  {/* Thumbnail */}
                  <div className="relative rounded-[4px] w-[64px] min-h-[80px] flex-shrink-0">
                    <div className="w-full h-full bg-[#FFFFFF] dark:bg-[#1e1e1f] overflow-hidden rounded-[4px] p-[2px] border border-[#80808019] dark:border-[#e8e8e814]">
                      <div className="p-[4px] text-[6px] leading-tight overflow-hidden">
                        <p className="font-[700] text-[7px] mb-[2px] text-[#0A1217] dark:text-[#e8e8e8]">
                          1. Scope and data basis
                        </p>
                        <p className="text-[5px] text-[#0A121799] dark:text-[#e8e8e899]">
                          Objective. Provide a concise financial analysis...
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Card Text */}
                  <div className="flex flex-1 flex-col gap-0 overflow-hidden">
                    <p className="font-[700] text-[14px] leading-tight mb-0 text-[#0A1217] dark:text-[#e8e8e8]">
                      Financial Analysis – Novo Nordisk (NVO)
                    </p>
                    <p className="text-[14px] text-[#0A121799] dark:text-[#e8e8e899] mb-0">
                      Updated today at 11:25
                    </p>
                    <p className="text-[14px] text-[#0A121766] dark:text-[#e8e8e866] line-clamp-2 mb-0">
                      Objective. Provide a concise financial analysis of Novo
                      Nordisk based on recent reported results, focusing on
                      growth, profitability and market valuation. Note on data.
                      The charts and CSV generated with Python above are
                      illustrative and not pulled live from Novo Nordisk
                      filings.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Response */}
              <div className="h-[4px]" />
              <div className="mt-[8px]">
                <div className="text-[16px] leading-[1.6] text-[#0A1217] dark:text-[#e8e8e8]">
                  <p className="mb-[12px]">
                    Here's how to interpret what you see and how I've structured
                    the analysis in the doc I created for you.
                  </p>

                  <h2 className="font-[700] text-[20px] leading-[1.4] mb-[8px]">
                    1. What the graphs and table show
                  </h2>
                  <p className="mb-[8px]">
                    <strong>Underlying dataset.</strong> The Python tool
                    produced a small 5‑year dataset (2021–2025) with:
                  </p>
                  <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
                    <li>Net sales, operating profit, net profit (DKK m)</li>
                    <li>Operating and net profit margins (%)</li>
                    <li>Closing share price in DKK</li>
                  </ul>
                  <p className="mb-[12px]">
                    These values are illustrative, not pulled live from Novo
                    Nordisk's filings. They are shaped to resemble the company's
                    real pattern of strong growth and high margins, but exact
                    numbers will differ from the official annual report.
                  </p>
                  <p className="mb-[12px]">
                    You can inspect the full table in the document via the
                    embedded CSV.
                  </p>

                  <h2 className="font-[700] text-[20px] leading-[1.4] mb-[8px]">
                    2. Revenue and profit trends
                  </h2>
                  <p className="mb-[8px]">
                    <strong>Sales and profit growth.</strong>
                    <br />
                    From 2021 to 2024 in the generated data:
                  </p>
                  <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
                    <li>Net sales rise each year.</li>
                    <li>
                      Operating profit and net profit also increase, with
                      steeper growth than sales over 2021–2023.
                    </li>
                  </ul>
                  <p className="mb-[4px]">Interpretation:</p>
                  <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
                    <li>
                      This pattern is consistent with Novo Nordisk's real‑world
                      GLP‑1–driven expansion in diabetes and obesity therapies,
                      where high‑margin products and increasing scale create
                      operating leverage.
                    </li>
                    <li>
                      By 2024–2025, profits in the illustrative data begin to
                      flatten relative to sales, which would be consistent with
                      heavier investments (manufacturing capacity, R&D, SG&A)
                      and potential pricing or FX headwinds.
                    </li>
                  </ul>
                  <p className="mb-[12px]">
                    You can see this visually in the grouped bar chart "Net
                    sales and profits (2021–2025)" in the doc.
                  </p>

                  <h2 className="font-[700] text-[20px] leading-[1.4] mb-[8px]">
                    3. Profitability and margins
                  </h2>
                  <p className="mb-[8px]">
                    <strong>Level of margins.</strong>
                    <br />
                    The margins chart shows:
                  </p>
                  <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
                    <li>Operating margin in the low‑to‑mid‑40% range.</li>
                    <li>Net margin in the low‑to‑mid‑30% range.</li>
                  </ul>
                  <p className="mb-[4px]">Interpretation:</p>
                  <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
                    <li>
                      These are very high for a large pharma company, reflecting
                      strong pricing power, high‑value innovative products, and
                      economies of scale.
                    </li>
                    <li>
                      The gradual expansion of margins from 2021 to 2023
                      suggests that incremental revenue is coming with
                      relatively low incremental cost.
                    </li>
                  </ul>
                  <p className="mb-[8px]">
                    <strong>Movement over time.</strong>
                  </p>
                  <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
                    <li>
                      Margins rise into 2023, are roughly flat in 2024, then
                      decline slightly in 2025.
                    </li>
                    <li>
                      A realistic interpretation would be: after a phase of
                      extraordinary operating leverage, Novo Nordisk invests
                      more heavily (capex for capacity, commercialization, R&D),
                      and/or faces some pressure on pricing or mix.
                    </li>
                  </ul>
                  <p className="mb-[12px]">
                    This behavior is visible in the "Profit margins (2021–2025)"
                    line chart.
                  </p>

                  <h2 className="font-[700] text-[20px] leading-[1.4] mb-[8px]">
                    4. Share‑price dynamics
                  </h2>
                  <p className="mb-[4px]">The share‑price chart shows:</p>
                  <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
                    <li>
                      A strong rerating from 2021 to 2023 (sharp climb in the
                      line).
                    </li>
                    <li>A pull‑back through 2024–2025 from that peak.</li>
                  </ul>
                  <p className="mb-[4px]">Interpretation:</p>
                  <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
                    <li>
                      The run‑up resembles what happens when the market prices
                      in a high‑growth, high‑margin profile and a dominant
                      position in an important therapeutic area (GLP‑1 for
                      obesity/diabetes).
                    </li>
                    <li>
                      The subsequent decline is what you might see when:
                      <ul className="list-disc pl-[20px] mt-[4px] space-y-[2px]">
                        <li>The starting valuation becomes very demanding,</li>
                        <li>
                          The market worries about capacity constraints,
                          competition, regulation, or
                        </li>
                        <li>
                          There is a general rotation in markets even if
                          fundamentals remain strong.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mb-[12px]">
                    In other words, the chart is a stylized example of
                    "fundamentals still strong, but expectations and valuation
                    adjusting".
                  </p>

                  <h2 className="font-[700] text-[20px] leading-[1.4] mb-[8px]">
                    5. Strategic angle behind the numbers
                  </h2>
                  <p className="mb-[8px]">
                    <strong>
                      Core real‑world growth drivers for Novo Nordisk
                      (conceptual, not from the synthetic dataset):
                    </strong>
                  </p>
                  <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
                    <li>Expansion of GLP‑1–based therapies in diabetes.</li>
                    <li>Rapidly growing obesity franchise.</li>
                    <li>Geographic expansion and new indications.</li>
                    <li>
                      Strong pipeline and life‑cycle management of key drugs.
                    </li>
                  </ul>
                  <p className="mb-[8px]">
                    <strong>
                      Typical risks that would show up in the financials and
                      share price:
                    </strong>
                  </p>
                  <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
                    <li>Manufacturing capacity and large capex projects.</li>
                    <li>
                      Competitive pressure in GLP‑1/obesity (pricing, market
                      share).
                    </li>
                    <li>Regulatory/reimbursement changes in the US and EU.</li>
                    <li>Patent expiries and pipeline execution risk.</li>
                  </ul>
                  <p className="mb-[12px]">
                    The patterns in your graphs (rising sales and profits, high
                    margins, rich but volatile share price) are exactly what you
                    would expect for a company in this position.
                  </p>

                  <h2 className="font-[700] text-[20px] leading-[1.4] mb-[8px]">
                    6. How you can upgrade this to a real, investment‑grade
                    analysis
                  </h2>
                  <p className="mb-[8px]">
                    If you want this to be fully grounded in actual numbers
                    (recommended for serious work), the next steps would be:
                  </p>
                  <ol className="list-decimal pl-[24px] mb-[12px] space-y-[4px]">
                    <li>
                      Pull the latest Novo Nordisk annual report and interim
                      reports.
                    </li>
                    <li>
                      Rebuild the dataset with:
                      <ul className="list-disc pl-[20px] mt-[4px] space-y-[2px]">
                        <li>
                          Exact net sales, operating profit, net profit for the
                          last 5–10 years.
                        </li>
                        <li>EPS, dividends, payout ratio.</li>
                        <li>Free cash flow, capex, net cash/debt.</li>
                      </ul>
                    </li>
                    <li>
                      Re‑run the Python analysis with those real figures,
                      regenerating:
                      <ul className="list-disc pl-[20px] mt-[4px] space-y-[2px]">
                        <li>Revenue/profit bar chart.</li>
                        <li>Margin trend chart.</li>
                        <li>EPS and FCF charts if desired.</li>
                      </ul>
                    </li>
                    <li>
                      Add valuation metrics based on today's share price (P/E,
                      EV/EBIT, EV/EBITDA, P/FCF).
                    </li>
                  </ol>
                  <p className="mb-[12px]">
                    I've already created a structured document for you with:
                  </p>
                  <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
                    <li>The CSV table of the 5‑year synthetic data.</li>
                    <li>All three interactive Plotly charts embedded.</li>
                    <li>
                      Written sections explaining revenue/profits, margins,
                      share price behavior, and strategic context.
                    </li>
                  </ul>
                  <p className="mb-[4px]">If you'd like, tell me:</p>
                  <ul className="list-disc pl-[24px] mb-[12px] space-y-[4px]">
                    <li>
                      Whether you want to base the next version on{" "}
                      <em>actual reported</em> Novo Nordisk numbers, and
                    </li>
                    <li>
                      Which currency (DKK, EUR, USD) and which metrics matter
                      most to you (e.g., EPS, FCF, valuation),
                    </li>
                  </ul>
                  <p>and I'll extend the analysis accordingly.</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="h-[16px]" />
              <div className="flex flex-wrap items-center gap-[4px]">
                <ActionButton
                  icon={<Copy className="w-[16px] h-[16px]" />}
                  label="Copy"
                />
                <ActionButton
                  icon={<ThumbsUp className="w-[16px] h-[16px]" />}
                  label="Upvote"
                />
                <ActionButton
                  icon={<ThumbsDown className="w-[16px] h-[16px]" />}
                  label="Downvote"
                />
                <ActionButton
                  icon={<Volume2 className="w-[16px] h-[16px]" />}
                  label="Read out"
                />
                <ActionButton
                  icon={<FileText className="w-[16px] h-[16px]" />}
                  label="Edit as Doc"
                />
                <ActionButton
                  icon={<RotateCcw className="w-[16px] h-[16px]" />}
                  label="Retry"
                />
                <ActionButton
                  icon={<Share className="w-[16px] h-[16px]" />}
                  label="Share via email"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Chat Input */}
        <div className="absolute bottom-0 left-0 right-0 z-[10] pointer-events-none">
          <div className="w-full pointer-events-auto">
            <div className="flex justify-center">
              <div className="w-full max-w-[868px] px-[16px] sm:px-[32px]">
                <div className="relative w-full self-center flex flex-col gap-[12px] pointer-events-auto bg-[#FFFFFF] dark:bg-[#131314] rounded-t-[32px]">
                  <form>
                    <div className="relative flex">
                      <div className="absolute left-[12px] bottom-[10px] z-[1]">
                        <button
                          className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-full bg-transparent font-[400] transition-colors duration-[150ms] hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] focus:outline-none cursor-pointer"
                          type="button"
                        >
                          <Plus className="w-[20px] h-[20px] text-[#0A1217] dark:text-[#e8e8e8]" />
                        </button>
                      </div>
                      <textarea
                        id="simple-chat-input"
                        placeholder="What would you like to do?"
                        rows="1"
                        className="flex-1 border-none outline-none text-[#0A1217] dark:text-[#e8e8e8] text-[16px] leading-[1.5] placeholder:text-[#0A121799] dark:placeholder:text-[#e8e8e899] pr-[56px] py-[16px] rounded-[32px] w-full bg-[#0A12170d] dark:bg-[#e8e8e80d] resize-none max-h-[200px] overflow-y-auto min-h-[56px] pl-[56px]"
                      />
                      <div className="absolute right-[12px] bottom-[10px] z-[1]">
                        <button
                          disabled
                          aria-label="Send message"
                          type="button"
                          className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#0A121766] dark:bg-[#e8e8e866] text-[#FFFFFF] dark:text-[#131314] cursor-not-allowed opacity-50 transition-colors duration-[150ms]"
                        >
                          <ArrowUp className="w-[16px] h-[16px]" />
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="flex gap-[4px] sm:gap-[8px] items-center mt-[8px]">
                    <button
                      className="inline-flex h-[36px] items-center rounded-full pr-[14px] pl-[12px] font-[400] text-[14px] transition-colors duration-[150ms] focus:outline-none cursor-pointer bg-transparent hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d]"
                      type="button"
                    >
                      <div className="flex items-center gap-[8px]">
                        <Search className="w-[16px] h-[16px] text-[#0A121766] dark:text-[#e8e8e866]" />
                        <span className="text-[#0A1217] dark:text-[#e8e8e8] text-[14px]">
                          Sources
                        </span>
                      </div>
                    </button>
                    <div className="flex grow" />
                    <button
                      className="flex items-center gap-[6px] py-[6px] h-[36px] text-[14px] rounded-full cursor-pointer border border-transparent bg-transparent px-[16px] pl-[12px] font-[400] hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] text-[#0A1217] dark:text-[#e8e8e8] transition-all duration-[200ms]"
                      type="button"
                    >
                      <Sparkles className="w-[16px] h-[16px] text-[#0A121766] dark:text-[#e8e8e866]" />
                      <span className="truncate">Default</span>
                    </button>
                  </div>
                </div>
                <div className="text-[12px] text-center text-[#0A121780] dark:text-[#e8e8e880] pb-[8px] bg-[#FFFFFF] dark:bg-[#131314] w-full">
                  Sana can make mistakes. Double check important info.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Border between panels ===== */}
      <div className="hidden lg:block w-[1px] bg-[#0A121714] dark:bg-[#e8e8e814] flex-shrink-0" />

      {/* ===== RIGHT: Document Side Panel ===== */}
      <aside className="hidden lg:flex flex-1 h-screen sticky top-0 overflow-hidden bg-[linear-gradient(90deg,#FFF_0%,#F7F7F7_10%)] dark:bg-[linear-gradient(90deg,#131314_0%,#1a1a1b_10%)]">
        <div className="h-screen flex flex-col overflow-hidden w-full">
          {/* Document Top Toolbar */}
          <div className="w-full sticky top-0 left-0 right-0 z-[11] px-[16px] py-[8px] backdrop-blur-xl">
            <div className="relative z-[10] w-full">
              <div className="flex flex-row justify-between items-center gap-[8px] xl:gap-[12px] w-full min-h-[52px] pl-[12px]">
                {/* Left toolbar items */}
                <div className="flex items-center gap-[12px] min-w-0 flex-1">
                  {/* Close + Refresh group */}
                  <div className="inline-flex items-center bg-[#0A121707] dark:bg-[#e8e8e80a] rounded-full gap-0 h-[36px]">
                    <div className="h-[28px] overflow-hidden rounded-full mx-[4px]">
                      <button className="inline-flex text-[14px] font-[500] h-[28px] gap-[6px] items-center px-[10px] cursor-pointer rounded-full transition-all hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d]">
                        <X className="w-[16px] h-[16px] text-[#0A1217] dark:text-[#e8e8e8]" />
                      </button>
                    </div>
                    <div className="w-[1px] mx-0 h-[16px] bg-[#0A12170d] dark:bg-[#e8e8e814]" />
                    <div className="h-[28px] overflow-hidden rounded-full mx-[4px]">
                      <button className="inline-flex text-[14px] font-[500] h-[28px] gap-[6px] items-center px-[10px] cursor-pointer rounded-full transition-all hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d]">
                        <RefreshCw className="w-[16px] h-[16px] text-[#0A1217] dark:text-[#e8e8e8]" />
                      </button>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="pl-[4px] min-w-0 flex-1 overflow-hidden">
                    <div className="flex flex-col min-w-0 w-full">
                      <div className="relative inline-block max-w-full">
                        <input
                          readOnly
                          className="bg-transparent text-[14px] font-[700] text-[#0A1217] dark:text-[#e8e8e8] hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] hover:ring-2 hover:ring-[#0A12170d] dark:hover:ring-[#e8e8e814] outline-none focus:ring-2 focus:ring-[#0A12170d] dark:focus:ring-[#e8e8e814] pr-[16px] rounded-[4px] transition-all duration-[200ms] w-full"
                          value="Financial Analysis – Novo Nordisk (NVO)"
                        />
                      </div>
                      <p className="text-[14px] text-[#0A121799] dark:text-[#e8e8e899] truncate max-w-full">
                        Updated today at 11:23
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right toolbar items */}
                <div className="flex items-center gap-[8px] xl:gap-[12px] py-[8px] flex-shrink-0">
                  {/* Format toolbar group */}
                  <div className="inline-flex items-center bg-[#0A121707] dark:bg-[#e8e8e80a] rounded-full gap-0 h-[36px]">
                    <div className="h-[28px] overflow-hidden rounded-full mx-[4px]">
                      <button className="inline-flex text-[14px] font-[500] h-[28px] gap-[6px] items-center px-[10px] cursor-pointer rounded-full transition-all hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d]">
                        <Download className="w-[16px] h-[16px] text-[#0A1217] dark:text-[#e8e8e8]" />
                      </button>
                    </div>
                    <div className="w-[1px] mx-0 h-[16px] bg-[#0A12170d] dark:bg-[#e8e8e814]" />
                    <div className="h-[28px] overflow-hidden rounded-full mx-[4px]">
                      <button className="inline-flex text-[14px] font-[500] h-[28px] gap-[6px] items-center px-[10px] cursor-pointer rounded-full transition-all hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d]">
                        <Sparkles className="w-[16px] h-[16px] text-[#0A1217] dark:text-[#e8e8e8]" />
                      </button>
                    </div>
                    <div className="w-[1px] mx-0 h-[16px] bg-[#0A12170d] dark:bg-[#e8e8e814]" />
                    <div className="h-[28px] overflow-hidden rounded-full mx-[4px]">
                      <button className="inline-flex text-[14px] font-[500] h-[28px] gap-[6px] items-center px-[10px] cursor-pointer rounded-full transition-all hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d]">
                        <Share className="w-[16px] h-[16px] text-[#0A1217] dark:text-[#e8e8e8]" />
                      </button>
                    </div>
                    <div className="w-[1px] mx-0 h-[16px] bg-[#0A12170d] dark:bg-[#e8e8e814]" />
                    <div className="h-[28px] overflow-hidden rounded-full mx-[4px]">
                      <button className="inline-flex text-[14px] font-[500] h-[28px] gap-[6px] items-center px-[10px] cursor-pointer rounded-full transition-all hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d]">
                        <MoreHorizontal className="w-[16px] h-[16px] text-[#0A1217] dark:text-[#e8e8e8]" />
                      </button>
                    </div>
                  </div>

                  {/* Open in Google Docs */}
                  <button className="hidden xl:flex items-center gap-[6px] py-[6px] h-[36px] text-[14px] font-[700] rounded-full cursor-pointer bg-[#0A12170d] dark:bg-[#e8e8e80d] hover:bg-[#0A121714] dark:hover:bg-[#e8e8e814] text-[#0A1217] dark:text-[#e8e8e8] px-[16px] pl-[12px] transition-all duration-[200ms]">
                    <FileText className="w-[16px] h-[16px] text-[#0A121766] dark:text-[#e8e8e866]" />
                    <span className="whitespace-nowrap">
                      Open in Google Docs
                    </span>
                  </button>

                  {/* Share */}
                  <button className="flex items-center px-[16px] py-[6px] h-[36px] text-[14px] font-[700] rounded-full cursor-pointer bg-[#0A1217] dark:bg-[#e8e8e8] hover:bg-[#0A1217e6] dark:hover:bg-[#e8e8e8e6] text-[#FFFFFF] dark:text-[#131314] transition-all duration-[200ms]">
                    Share
                  </button>
                </div>
              </div>
            </div>
            <div className="absolute top-full left-[1px] right-0 h-[1px] transition-colors bg-transparent" />
          </div>

          {/* Document Body */}
          <div className="flex-1 flex flex-col items-center justify-start overflow-y-auto px-[12px] xl:px-[24px] pb-[32px] pt-[16px]">
            <div className="w-full relative bg-[#FFFFFF] dark:bg-[#1e1e1f] rounded-[16px] border border-[#0A12170a] dark:border-[#e8e8e814] max-w-[820px]">
              <div className="p-[32px] sm:p-[60px] sm:pt-[56px] w-full h-full">
                <div className="flex flex-col h-full min-h-screen">
                  <div className="mx-auto w-full max-w-[1000px]">
                    <DocumentContent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function ActionButton({ icon, label }) {
  return (
    <button
      className="flex items-center justify-center w-[30px] h-[30px] rounded-full cursor-pointer bg-transparent hover:bg-[#0A12170d] dark:hover:bg-[#e8e8e80d] text-[#0A1217cc] dark:text-[#e8e8e8cc] hover:text-[#0A1217] dark:hover:text-[#e8e8e8] transition-all duration-[200ms]"
      aria-label={label}
    >
      {icon}
    </button>
  );
}
