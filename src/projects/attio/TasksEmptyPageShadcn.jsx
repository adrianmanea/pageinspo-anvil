import React, { useState, useEffect } from "react";
import {
    Bell,
    Search,
    CheckSquare,
    FileText,
    Mail,
    Phone,
    BarChart2,
    Zap,
    Database,
    Users,
    ChevronDown,
    ChevronRight,
    Plus,
    Settings,
    PanelLeftClose,
    PanelLeftOpen,
    CircleHelp,
    ArrowUpDown,
    Filter,
    GraduationCap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils"; // Assuming standard Shadcn utils

export default function TasksEmptyPageShadcn() {
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

    const [collapsedSections, setCollapsedSections] = useState({
        automations: false,
        favorites: false,
        records: false,
        lists: false,
    });
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSection = (section) => {
        setCollapsedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const NavItem = ({ icon: Icon, label, active, onClick, hasChevron, isCollapsed, onChevronClick, children }) => (
        <div className="flex flex-col gap-0.5">
            <Button
                variant="ghost"
                size="sm"
                onClick={onClick}
                className={cn(
                    "w-full justify-start h-7 px-2 font-medium text-sm text-foreground",
                    active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
                    "transition-colors"
                )}
            >
                <div className="flex items-center gap-1.5 w-full">
                    {hasChevron && (
                        <div
                            className="w-3.5 h-3.5 flex items-center justify-center cursor-pointer hover:bg-muted/50 rounded"
                            onClick={(e) => {
                                e.stopPropagation();
                                onChevronClick && onChevronClick();
                            }}
                        >
                            {isCollapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                        </div>
                    )}
                    {!hasChevron && Icon && <Icon className={cn("h-3.5 w-3.5", active ? "text-foreground" : "text-muted-foreground")} />}
                    <span className="truncate flex-1 text-left">{label}</span>
                </div>
            </Button>
            {children}
        </div>
    );

    return (
        <div className="flex w-full h-screen bg-background font-sans text-xs overflow-hidden">
            {/* Sidebar Hover Trigger Zone & Container */}
            <div
                className={cn(
                    "fixed inset-y-0 left-0 z-50 group flex pointer-events-none transition-all duration-300 ease-in-out",
                    !isSidebarOpen ? "w-2" : "w-[275px]"
                )}
            >
                {/* Hover Trigger (only active when closed) */}
                {!isSidebarOpen && (
                    <div className="absolute inset-y-0 left-0 w-2 bg-transparent pointer-events-auto" />
                )}

                {/* Sidebar */}
                <nav
                    className={cn(
                        "pointer-events-auto flex flex-col w-[275px] min-w-[275px] h-full bg-muted/20 border-r border-border overflow-hidden transition-transform duration-300 ease-in-out",
                        isSidebarOpen ? "translate-x-0" : "-translate-x-full group-hover:translate-x-0"
                    )}
                >
                    {/* Header (Acme) */}
                    <div className="flex items-center h-12 px-3 border-b border-border relative z-20">
                        <Button variant="ghost" className="flex items-center gap-3 w-full h-full p-0 hover:bg-transparent justify-start">
                            <div className="flex items-center justify-center w-6 h-6 rounded-[30%] bg-orange-600 text-white text-sm font-medium uppercase">
                                A
                            </div>
                            <span className="flex-1 text-base font-semibold text-foreground truncate text-left">
                                Acme
                            </span>
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsSidebarOpen(false)}
                            className="absolute right-3 top-3 h-6 w-6 text-muted-foreground hover:text-foreground"
                        >
                            <PanelLeftClose className="w-4.5 h-4.5" />
                        </Button>
                    </div>

                    {/* Search & Quick Actions */}
                    <div className="flex flex-col px-3 py-2.5 gap-2">
                        <div className="flex items-center gap-1.5">
                            <Button
                                variant="outline"
                                className="flex-1 h-7 px-1.5 bg-background shadow-sm justify-start gap-1.5 hover:bg-accent border-transparent shadow-[inset_0_0_0_1px_rgba(0,0,0,0),0_0_2px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.05)] dark:border-border dark:shadow-none"
                            >
                                <Zap className="h-3.5 w-3.5 text-muted-foreground" />
                                <span className="text-sm font-medium text-foreground truncate flex-1 text-left">
                                    Quick actions
                                </span>
                                <kbd className="inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                                    <span className="text-xs">Ctrl K</span>
                                </kbd>
                            </Button>
                            <Button variant="outline" size="icon" className="w-[50px] h-7 bg-background shadow-sm hover:bg-accent gap-1.5 border-transparent shadow-[inset_0_0_0_1px_rgba(0,0,0,0),0_0_2px_0_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.05)] dark:border-border dark:shadow-none">
                                <Search className="h-3.5 w-3.5 text-foreground" />
                                <kbd className="inline-flex h-5 w-5 items-center justify-center rounded border bg-muted px-1 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                                    /
                                </kbd>
                            </Button>
                        </div>
                    </div>
                    <Separator className="mb-2 bg-border/40" />

                    {/* Scrollable Nav Area */}
                    <ScrollArea className="flex-1 px-2">
                        <div className="flex flex-col gap-3 pb-4">
                            {/* Main Nav Links */}
                            <div className="flex flex-col gap-0.5">
                                <NavItem icon={Bell} label="Notifications" />
                                <NavItem icon={CheckSquare} label="Tasks" active />
                                <NavItem icon={FileText} label="Notes" />
                                <NavItem icon={Mail} label="Emails" />
                                <NavItem icon={Phone} label="Calls" />
                                <NavItem icon={BarChart2} label="Reports" />

                                {/* Automations */}
                                <div className="flex flex-col gap-0.5">
                                    <NavItem
                                        label="Automations"
                                        hasChevron
                                        isCollapsed={collapsedSections.automations}
                                        onChevronClick={() => toggleSection('automations')}
                                        onClick={() => toggleSection('automations')}
                                    />
                                    {!collapsedSections.automations && (
                                        <div className="relative flex flex-col pl-7 gap-0.5 mt-0.5">
                                            <div className="absolute left-[15px] top-0 bottom-1 w-px bg-border" />
                                            <Button variant="ghost" size="sm" className="justify-start h-7 pl-2 text-muted-foreground hover:text-foreground">
                                                <Zap className="mr-2 h-3.5 w-3.5" />
                                                Sequences
                                            </Button>
                                            <Button variant="ghost" size="sm" className="justify-start h-7 pl-2 text-muted-foreground hover:text-foreground">
                                                <Zap className="mr-2 h-3.5 w-3.5" />
                                                Workflows
                                            </Button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Favorites */}
                            <div className="flex flex-col gap-0.5">
                                <NavItem
                                    label="Favorites"
                                    hasChevron
                                    isCollapsed={collapsedSections.favorites}
                                    onChevronClick={() => toggleSection('favorites')}
                                    onClick={() => toggleSection('favorites')}
                                // Custom small chevron for this section in original, matching generically here
                                />
                                {!collapsedSections.favorites && (
                                    <div className="pl-3 ml-3.5 pt-0.5">
                                        <Button variant="outline" size="sm" className="w-full justify-center h-7 border-dashed border-border bg-background text-muted-foreground hover:text-foreground">
                                            <Plus className="mr-1.5 h-3.5 w-3.5" />
                                            New folder
                                        </Button>
                                    </div>
                                )}
                            </div>

                            {/* Records */}
                            <div className="flex flex-col gap-0.5">
                                <NavItem
                                    label="Records"
                                    hasChevron
                                    isCollapsed={collapsedSections.records}
                                    onChevronClick={() => toggleSection('records')}
                                    onClick={() => toggleSection('records')}
                                />
                                {!collapsedSections.records && (
                                    <div className="flex flex-col pl-3 ml-3.5 gap-0.5 pt-0.5">
                                        <Button variant="ghost" size="sm" className="justify-start h-7 pl-2 text-foreground">
                                            <Database className="mr-2 h-3.5 w-3.5 text-blue-500" />
                                            Companies
                                        </Button>
                                        <Button variant="ghost" size="sm" className="justify-start h-7 pl-2 text-foreground">
                                            <Users className="mr-2 h-3.5 w-3.5 text-blue-500" />
                                            People
                                        </Button>
                                    </div>
                                )}
                            </div>

                            {/* Lists */}
                            <div className="flex flex-col gap-0.5">
                                <NavItem
                                    label="Lists"
                                    hasChevron
                                    isCollapsed={collapsedSections.lists}
                                    onChevronClick={() => toggleSection('lists')}
                                    onClick={() => toggleSection('lists')}
                                />
                                {!collapsedSections.lists && (
                                    <div className="pl-3 ml-3.5 pt-0.5">
                                        <Button variant="outline" size="sm" className="w-full justify-center h-7 border-dashed border-border bg-background text-muted-foreground hover:text-foreground">
                                            <Plus className="mr-1.5 h-3.5 w-3.5" />
                                            New list
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </ScrollArea>

                    {/* Getting Started - Sticky Pill */}
                    <div className="p-2 pt-0 mt-auto pointer-events-none sticky bottom-0 flex justify-center z-10">
                        <Button variant="secondary" size="sm" className="pointer-events-auto h-8 rounded-full shadow-sm bg-background border border-border hover:bg-accent text-foreground gap-2">
                            <span className="font-medium">Getting started</span>
                            <span className="text-muted-foreground">14%</span>
                        </Button>
                    </div>

                    {/* Footer (Invite & Trial) */}
                    <div className="flex flex-col border-t border-border p-2 gap-1 bg-muted/20">
                        <Button variant="ghost" size="sm" className="justify-start h-7 px-2 font-medium">
                            <Users className="mr-2 h-3.5 w-3.5 text-muted-foreground" />
                            Invite team members
                        </Button>

                        <Separator className="my-0.5" />

                        <div className="flex items-center h-7 px-1 gap-1.5">
                            <div className="flex items-center justify-center w-6 h-6 rounded-md border border-border bg-transparent">
                                <Zap className="w-3.5 h-3.5 text-orange-500" />
                            </div>
                            <span className="flex-1 text-sm font-medium text-orange-500 truncate">7 days left on trial!</span>
                            <Button size="sm" className="px-1.5 h-5 text-xs bg-blue-600 hover:bg-blue-700 text-white font-medium">
                                Keep Pro
                            </Button>
                        </div>
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <main
                className={cn(
                    "flex-1 min-w-0 bg-background flex flex-col h-screen overflow-hidden transition-all duration-300 ease-in-out",
                    isSidebarOpen ? "ml-[275px]" : "ml-0"
                )}
            >
                {/* Header - Row 1 */}
                <div className="flex items-center justify-between h-[49px] min-h-[49px] px-3 border-b border-border bg-background z-20 sticky top-0">
                    <div className="flex items-center gap-1">
                        {!isSidebarOpen && (
                            <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)} className="w-6 h-6 text-muted-foreground hover:text-foreground">
                                <PanelLeftOpen className="w-4.5 h-4.5" />
                            </Button>
                        )}

                        <Button variant="ghost" size="sm" className="h-auto py-0.5 px-1 hover:bg-accent gap-1.5 font-medium text-foreground">
                            <CheckSquare className="w-3.5 h-3.5" />
                            Tasks
                        </Button>
                    </div>

                    <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-muted-foreground font-medium">
                        <CircleHelp className="w-3.5 h-3.5" />
                        Help
                    </Button>
                </div>

                {/* Header - Row 2 */}
                <div className="flex items-center justify-between h-[49px] min-h-[49px] px-3 border-b border-border bg-background z-10 sticky top-[49px]">
                    {/* Left Group */}
                    <div className="flex items-center gap-2">
                        <Button
                            size="sm"
                            className="h-7 gap-1.5 bg-blue-600 hover:bg-blue-700 border-blue-600 text-white shadow-sm font-medium"
                        >
                            <ArrowUpDown className="w-3.5 h-3.5" />
                            Sorted by <span className="opacity-90">Due date</span>
                        </Button>

                        <Button
                            variant="outline"
                            size="sm"
                            className="h-7 gap-1.5 bg-card hover:bg-accent text-muted-foreground font-medium shadow-sm"
                        >
                            <Filter className="w-3.5 h-3.5" />
                            Filter
                        </Button>
                    </div>

                    {/* Right Group */}
                    <div className="flex items-center gap-2">
                        <Button
                            variant="outline"
                            size="sm"
                            className="h-7 gap-1.5 bg-card hover:bg-accent text-foreground font-medium shadow-sm"
                        >
                            <Settings className="w-3.5 h-3.5" />
                            View settings
                        </Button>

                        <Button
                            size="sm"
                            className="h-7 gap-1.5 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm"
                        >
                            <Plus className="w-3.5 h-3.5" />
                            New task
                        </Button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center p-8 bg-background">
                    <div className="flex flex-col items-center gap-6 max-w-[400px]">
                        {/* Illustration */}
                        <div className="w-[215px] h-[140px] text-muted-foreground/20">
                            <svg width="215" height="140" viewBox="0 0 215 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="215" height="140" className="fill-background" />
                                <path d="M64 0L64 140" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                                <path d="M151 0L151 140" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                                <path d="M215 24H0" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                                <path d="M215 50H0" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                                <path d="M215 88H0" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                                <path d="M215 114H0" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 3" />
                                <path d="M199 0L199 140" stroke="currentColor" strokeWidth="0.8" />
                                <path d="M16 0L16 140" stroke="currentColor" strokeWidth="0.8" />
                                <path d="M0 16L215 16" stroke="currentColor" strokeWidth="0.8" />
                                <path d="M0 124L215 124" stroke="currentColor" strokeWidth="0.8" />
                                {/* Tasks cards simulation */}
                                <g opacity="0.8">
                                    <path d="M84.8 59.4L87.4 56.6" className="stroke-muted-foreground" strokeWidth="0.6" strokeLinecap="round" />
                                    <rect width="27.6" height="3.6" rx="1.4" transform="matrix(0.866 -0.5 0 1 92.4 52.8)" className="stroke-muted-foreground" strokeWidth="0.6" />
                                    <rect width="27.6" height="3.6" rx="1.4" transform="matrix(0.866 -0.5 0 1 92.4 65.9)" className="stroke-muted-foreground" strokeWidth="0.6" />
                                    <rect width="27.6" height="3.6" rx="1.4" transform="matrix(0.866 -0.5 0 1 92.4 79.0)" className="stroke-muted-foreground" strokeWidth="0.6" />
                                    <rect width="27.6" height="3.6" rx="1.4" transform="matrix(0.866 -0.5 0 1 92.4 92.1)" className="stroke-muted-foreground" strokeWidth="0.6" />
                                    {/* Card Content */}
                                    <path d="M131.7 26.7C131.7 26.6 131.6 26.5 131.5 26.5L129 25C128.9 25 128.8 25 128.7 25C128.4 25 128 25.2 127.3 25.6L86 49.5C85.3 49.9 84.9 50.1 84.6 50.4C84.4 50.7 84.2 51 84.1 51.3C84 51.7 84 52.1 84 52.9V110.9C84 111.7 84 112.1 84.1 112.4C84.2 112.5 84.2 112.6 84.3 112.6L86.9 114.1C87 114.1 87.1 114.1 87.2 114.1C87.4 114.1 87.8 113.9 88.5 113.5L129.9 89.6C130.6 89.2 130.9 89 131.2 88.7C131.4 88.4 131.6 88.1 131.7 87.8C131.9 87.4 131.9 87 131.9 86.1V28.2C131.9 27.4 131.9 27 131.7 26.7Z" className="fill-background stroke-muted-foreground" strokeWidth="1" />
                                    <path d="M111.8 31.8C112.2 32.1 112.9 32.1 113.6 31.7L116.8 29.9C118.9 28.7 120.6 29.6 120.6 32C120.6 32.4 120.3 32.9 119.9 33.1L96 47C95.6 47.2 95.3 47 95.3 46.6C95.3 44.2 97 41.3 99.1 40L102.3 38.2C103.7 37.4 104.8 35.5 104.8 33.9C104.8 31.9 106.2 29.4 107.9 28.4C109.7 27.4 111.1 28.2 111.1 30.2C111.1 31.8 112.2 32.5 113.6 31.7Z" className="fill-background stroke-muted-foreground" strokeWidth="0.6" />
                                </g>
                            </svg>
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col items-center gap-2 text-center">
                            <h2 className="text-xl font-semibold tracking-tight text-foreground">Tasks</h2>
                            <p className="text-sm font-medium text-muted-foreground">
                                No tasks yet! Create your first task to get started.
                            </p>
                        </div>

                        {/* CTA Button */}
                        <Button className="h-8 bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm gap-1.5">
                            <Plus className="w-3.5 h-3.5" />
                            New task
                        </Button>

                        <div className="h-5" />

                        {/* Learn More Card */}
                        <div className="flex flex-col gap-2 w-[309px] self-center">
                            <span className="text-xs font-medium text-muted-foreground self-start">Learn more</span>
                            <a href="#" className="flex items-center gap-3 p-2 rounded-2xl border border-border bg-card hover:bg-accent transition-colors group">
                                <div className="w-14 h-14 rounded-xl border border-border bg-muted/50 flex items-center justify-center overflow-hidden">
                                    <GraduationCap className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-sm font-semibold text-foreground">Notes, tasks and email sending</span>
                                    <span className="text-sm text-muted-foreground">Acme Academy</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
