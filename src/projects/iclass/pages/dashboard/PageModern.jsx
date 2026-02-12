import React from "react";
import {
  Users,
  User,
  ExternalLink,
  Settings,
  ClipboardList,
  TrendingUp,
  TrendingDown,
  Activity,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle2,
  ChevronRight,
  Menu,
  Bell
} from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

export default function PageModern() {
  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-600 selection:bg-blue-100">
      {/* ── Modern Navigation ── */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-8">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-light tracking-tight text-slate-800">
                  <span className="font-semibold text-blue-600">iClass</span>Pro
                </span>
              </div>
              
              {/* Desktop Nav */}
              <div className="hidden xl:flex space-x-1">
                <ModernNavItem label="Dashboard" href="#!/dashboard-modern" active />
                <ModernNavItem label="Families" href="#!/families" />
                <ModernNavItem label="Students" href="#!/students" />
                <ModernNavItem label="Classes" href="#!/classes" />
                <ModernNavItem label="Enrollments" href="#!/enrollments" />
                <ModernNavItem label="Staff" href="#!/staff" />
                <ModernNavItem label="Reports" href="#!/reports" />
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-full transition-colors relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
                 <div className="text-right hidden sm:block">
                    <p className="text-sm font-medium text-slate-900">Admin User</p>
                    <p className="text-xs text-slate-500">View Profile</p>
                 </div>
                 <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 p-0.5 shadow-lg shadow-blue-500/20 cursor-pointer">
                    <div className="h-full w-full rounded-full bg-white flex items-center justify-center text-blue-600 font-bold">
                        A
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Main Content ── */}
      <main className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
                <p className="text-slate-500 mt-1">Welcome back! Here's what's happening today.</p>
            </div>
            <div className="flex items-center gap-3">
                <span className="text-sm text-slate-500 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <button className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <Settings className="w-4 h-4 mr-2" />
                    Customize
                </button>
            </div>
        </div>

        {/* ── Section 1: Core KPIs (Middle Row in original, bumped to top for importance) ── */}
        <section>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ModernKpiCard 
                    title="Active Families" 
                    value="170" 
                    trend="+1" 
                    trendPositive={true}
                    icon={<Users className="w-6 h-6 text-white" />}
                    color="blue"
                    stats={[
                        { label: "vs Last Year", value: "173" },
                        { label: "vs Last Month", value: "172" },
                    ]}
                />
                 <ModernKpiCard 
                    title="Active Students" 
                    value="335" 
                    trend="+1" 
                    trendPositive={true}
                    icon={<User className="w-6 h-6 text-white" />}
                    color="indigo"
                    stats={[
                        { label: "vs Last Year", value: "328" },
                        { label: "vs Last Month", value: "337" },
                    ]}
                />
                 <ModernKpiCard 
                    title="Active Enrollments" 
                    value="371" 
                    trend="-1" 
                    trendPositive={false}
                    icon={<Activity className="w-6 h-6 text-white" />}
                    color="emerald"
                    stats={[
                        { label: "vs Last Year", value: "346" },
                        { label: "vs Last Month", value: "375" },
                    ]}
                />
            </div>
        </section>

        {/* ── Section 2: Visual Charts (Replaced Text Lists) ── */}
        <section>
             <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-slate-400" />
                <h2 className="text-lg font-semibold text-slate-800">Performance Trends</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* 2/3 Width: Enrollment Trends Area Chart */}
                <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                    <div className="flex justify-between items-center mb-6">
                         <div>
                            <h3 className="text-base font-semibold text-slate-800">Enrollment Growth</h3>
                            <p className="text-sm text-slate-500">Active enrollments over the last 6 months</p>
                        </div>
                        <select className="text-sm border-slate-200 rounded-md text-slate-500 focus:ring-blue-500 focus:border-blue-500">
                            <option>Last 6 Months</option>
                            <option>Year to Date</option>
                        </select>
                    </div>
                    <div className="h-[300px] w-full">
                        <EnrollmentTrendsChart />
                    </div>
                </div>

                {/* 1/3 Width: Weekly Activity Bar Chart */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                     <div className="mb-6">
                        <h3 className="text-base font-semibold text-slate-800">Weekly Activity</h3>
                        <p className="text-sm text-slate-500">New accounts vs drops</p>
                    </div>
                    <div className="h-[300px] w-full">
                        <WeeklyActivityChart />
                    </div>
                </div>
            </div>
        </section>


        {/* ── Section 3: Attention Items (Events) ── */}
        <section>
             <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-5 h-5 text-slate-400" />
                <h2 className="text-lg font-semibold text-slate-800">Attention Items</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <ModernEventCard 
                    count="0" 
                    label="Trials" 
                    subtext="Scheduled This Week" 
                    type="neutral"
                />
                <ModernEventCard 
                    count="18" 
                    label="Wait Listed" 
                    subtext="Pending This Week" 
                    type="action"
                />
                <ModernEventCard 
                    count="0" 
                    label="Make Ups" 
                    subtext="Scheduled This Week" 
                    type="neutral"
                />
            </div>
        </section>

      </main>
      
      {/* ── Modern Footer ── */}
      <footer className="mt-12 bg-white border-t border-slate-200 py-8">
         <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
             <p className="text-sm text-slate-400">© 2026 iClassPro Inc. All rights reserved.</p>
             <div className="flex gap-6">
                 <a href="#" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">Support</a>
                 <a href="#" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">Privacy Policy</a>
                 <a href="#" className="text-sm text-slate-500 hover:text-slate-800 transition-colors">Terms of Service</a>
             </div>
         </div>
      </footer>
    </div>
  );
}

/* ── Components ── */

function ModernNavItem({ label, href, active }) {
    return (
        <a 
            href={href} 
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all ${
                active 
                ? 'bg-blue-50 text-blue-700' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
            }`}
        >
            {label}
        </a>
    )
}

function ModernKpiCard({ title, value, trend, trendPositive, icon, color, stats }) {
    const bgColors = {
        blue: "bg-blue-500",
        indigo: "bg-indigo-500",
        emerald: "bg-emerald-500"
    };

    const shadowColors = {
        blue: "shadow-blue-500/20",
        indigo: "shadow-indigo-500/20",
        emerald: "shadow-emerald-500/20"
    };

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
               {/* Decorative background icon */}
               <div className="text-9xl text-slate-900">{icon}</div> 
            </div>

            <div className="flex justify-between items-start mb-4">
                <div className={`p-3 rounded-xl ${bgColors[color]} ${shadowColors[color]} shadow-lg`}>
                    {icon}
                </div>
                <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${
                    trendPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                    {trendPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {trend}
                </div>
            </div>

            <div>
                <h3 className="text-slate-500 text-sm font-medium mb-1">{title}</h3>
                <div className="text-3xl font-bold text-slate-900">{value}</div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                    <div key={i}>
                        <div className="text-xs text-slate-400">{stat.label}</div>
                        <div className="text-sm font-semibold text-slate-700">{stat.value}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

/* New Chart Components */

function EnrollmentTrendsChart() {
    const data = [
        { name: 'Aug', enrollments: 320 },
        { name: 'Sep', enrollments: 345 },
        { name: 'Oct', enrollments: 350 },
        { name: 'Nov', enrollments: 340 },
        { name: 'Dec', enrollments: 360 },
        { name: 'Jan', enrollments: 371 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorEnrollments" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748B', fontSize: 12 }} 
                    dy={10}
                />
                <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748B', fontSize: 12 }}
                />
                <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                    type="monotone" 
                    dataKey="enrollments" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorEnrollments)" 
                />
            </AreaChart>
        </ResponsiveContainer>
    );
}

function WeeklyActivityChart() {
    const data = [
        { name: 'Mon', created: 2, drops: 1 },
        { name: 'Tue', created: 4, drops: 0 },
        { name: 'Wed', created: 3, drops: 1 },
        { name: 'Thu', created: 5, drops: 2 },
        { name: 'Fri', created: 4, drops: 0 },
        { name: 'Sat', created: 6, drops: 1 },
        { name: 'Sun', created: 1, drops: 0 },
    ];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748B', fontSize: 12 }} 
                    dy={10}
                />
                <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#64748B', fontSize: 12 }}
                />
                <Tooltip 
                     cursor={{ fill: '#F1F5F9' }}
                     contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Legend 
                     verticalAlign="top" 
                     align="right"
                     iconType="circle"
                     wrapperStyle={{ paddingBottom: '20px', fontSize: '12px' }}
                />
                <Bar dataKey="created" name="New Accounts" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={8} />
                <Bar dataKey="drops" name="Drops" fill="#EF4444" radius={[4, 4, 0, 0]} barSize={8} />
            </BarChart>
        </ResponsiveContainer>
    );
}

function ModernEventCard({ count, label, subtext, type }) {
    const isAction = type === 'action';
    
    return (
        <div className={`rounded-2xl p-6 shadow-sm border transition-all cursor-pointer group ${
            isAction 
            ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:shadow-blue-200' 
            : 'bg-white border-slate-100 hover:border-blue-200 hover:shadow-md'
        }`}>
            <div className="flex justify-between items-start">
                <div>
                    <div className={`text-4xl font-bold mb-1 ${isAction ? 'text-white' : 'text-slate-900'}`}>
                        {count}
                    </div>
                    <div className={`font-semibold ${isAction ? 'text-blue-100' : 'text-slate-700'}`}>
                        {label}
                    </div>
                    <div className={`text-xs mt-1 ${isAction ? 'text-blue-200' : 'text-slate-400'}`}>
                        {subtext}
                    </div>
                </div>
                <div className={`p-2 rounded-full ${
                    isAction ? 'bg-white/20 text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600'
                } transition-colors`}>
                    <ChevronRight className="w-5 h-5" />
                </div>
            </div>
            
             {/* Progress bar simulation for visual interest */}
            <div className={`w-full h-1 mt-6 rounded-full overflow-hidden ${
                isAction ? 'bg-black/20' : 'bg-slate-100'
            }`}>
                 <div className={`h-full rounded-full ${
                     isAction ? 'bg-white/50' : 'bg-blue-500'
                 }`} style={{ width: count > 0 ? '60%' : '5%' }}></div>
            </div>
        </div>
    )
}
