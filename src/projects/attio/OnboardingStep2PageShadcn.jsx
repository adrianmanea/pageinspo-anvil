import React, { useState, useEffect } from "react";
import {
    ChevronLeft,
    ChevronDown,
    Search,
    Home,
    Users,
    Settings,
    MoreHorizontal,
    Filter,
    Plus,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function OnboardingStep2PageShadcn() {
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

    // Replicating logic for theme boolean
    // const isDark = theme === "dark"; // Not strictly needed if we use CSS variables, but good for logic if needed.

    return (
        <div className="min-h-screen flex flex-col items-center bg-background py-8 gap-6 px-4 sm:px-6 lg:px-8 font-sans text-foreground">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-0.5 bg-muted z-50">
                <div className="h-full bg-primary rounded-r-full w-1/4" />
            </div>

            {/* Logo */}
            <div className="flex items-center gap-1 w-24 h-6 mb-2">
                <a href="/" className="flex items-center justify-center">
                    <img
                        alt="Grapho logo"
                        src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/component-assets/grapho-dark.svg"
                        className="w-24 h-6 dark:hidden"
                    />
                    <img
                        alt="Grapho logo"
                        src="https://hynfzdmpqbjpuanliuqv.supabase.co/storage/v1/object/public/component-assets/grapho-light.svg"
                        className="w-24 h-6 hidden dark:block"
                    />
                </a>
            </div>

            {/* Main Card Container */}
            <div className="flex-1 flex items-center justify-center w-full">
                {/* Card */}
                <Card className="flex flex-col lg:flex-row w-full max-w-[1130px] lg:h-[692px] overflow-hidden border-border p-0 shadow-none">
                    {/* Left Side - Form */}
                    <div className="flex flex-col w-full lg:w-[564px] lg:min-w-[564px] h-full">
                        <div className="p-8 lg:p-[72px] flex justify-center h-full">
                            <div className="flex flex-col items-center gap-8 w-full max-w-[420px]">
                                {/* Header with Back Button */}
                                <div className="flex flex-col gap-4 w-full">
                                    <div className="w-full">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="w-7 h-7 -ml-2 text-foreground hover:bg-muted"
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-semibold tracking-tight text-foreground">
                                            Create your workspace
                                        </h1>
                                    </div>
                                </div>

                                {/* Logo Upload Section */}
                                <div className="flex items-center gap-5 w-full">
                                    {/* Logo Placeholder */}
                                    <div className="flex items-center justify-center w-14 h-14 bg-muted/50 border border-dashed border-border rounded-xl text-3xl font-medium text-muted-foreground uppercase cursor-pointer hover:bg-muted transition-colors">
                                        A
                                    </div>

                                    <div className="flex flex-col items-start gap-1">
                                        <div className="text-base font-semibold leading-tight text-foreground">
                                            Company logo
                                        </div>
                                        <div className="text-xs font-medium text-muted-foreground">
                                            We support PNGs, JPEGs and GIFs under 10MB.
                                            <br />
                                            Recommended size is 400x400px.
                                        </div>
                                    </div>
                                </div>

                                {/* Form Fields */}
                                <form className="flex flex-col gap-7 w-full">
                                    <div className="flex flex-col gap-4">
                                        {/* Company Name */}
                                        <div className="grid gap-1.5">
                                            <Label className="pl-1 text-xs text-muted-foreground" htmlFor="company-name">
                                                Company name
                                            </Label>
                                            <Input
                                                id="company-name"
                                                placeholder="Enter your company name..."
                                                className="h-[34px] bg-transparent border-input focus-visible:ring-primary shadow-sm"
                                            />
                                        </div>

                                        {/* Workspace Handle */}
                                        <div className="grid gap-1.5">
                                            <Label className="pl-1 text-xs text-muted-foreground" htmlFor="workspace-handle">
                                                Workspace handle
                                            </Label>
                                            <div className="flex items-center w-full h-[34px] px-2 rounded-md border border-input shadow-sm focus-within:ring-1 focus-within:ring-ring focus-within:border-primary">
                                                <span className="text-sm font-medium text-muted-foreground tracking-tight">
                                                    app.attio.com/
                                                </span>
                                                <input
                                                    id="workspace-handle"
                                                    placeholder="my-workspace"
                                                    className="flex-1 bg-transparent text-sm font-medium text-foreground placeholder:text-muted-foreground outline-none ml-0.5 border-none h-full p-0 focus-visible:ring-0"
                                                />
                                            </div>
                                        </div>

                                        {/* Billing Country */}
                                        <div className="grid gap-1.5">
                                            <Label className="pl-1 text-xs text-muted-foreground">
                                                Billing country
                                            </Label>
                                            <Button
                                                variant="outline"
                                                type="button"
                                                className="flex items-center justify-between w-full h-8 px-2 border-input bg-transparent font-medium text-foreground hover:bg-transparent"
                                            >
                                                <span className="text-sm font-medium">Romania</span>
                                                <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Continue Button */}
                                    <Button type="submit" className="w-full h-9 bg-blue-600 hover:bg-blue-700 text-white shadow-sm font-medium">
                                        {/* Used specific blue to match 'brand' color, or use 'default' variant if primary is mapped to blue */}
                                        Continue
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - App Preview */}
                    <div className="hidden lg:flex flex-col w-[564px] min-w-[564px] h-full bg-background border-l border-border/40">
                        <div className="relative w-full h-full p-16 px-[64px] bg-muted/30 overflow-hidden">
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
                                <div className="flex h-full rounded-xl overflow-hidden shadow-2xl bg-background border border-border/10">
                                    {/* Sidebar */}
                                    <aside className="flex flex-col w-[272px] h-full bg-muted/20 border-r border-border">
                                        {/* Sidebar Header */}
                                        <div className="p-3">
                                            <div className="flex items-center gap-3 px-3 h-8 rounded-md hover:bg-muted transition-colors cursor-default">
                                                <div className="flex items-center justify-center w-5 h-5 border border-dashed border-border rounded bg-background text-muted-foreground text-[10px] font-medium uppercase">
                                                    A
                                                </div>
                                                <div className="text-sm font-medium text-foreground">
                                                    Workspace
                                                </div>
                                                <ChevronDown className="ml-auto w-3.5 h-3.5 text-muted-foreground/60" />
                                            </div>
                                        </div>

                                        <Separator className="bg-border" />

                                        {/* Sidebar Menu */}
                                        <div className="px-3 py-2 flex flex-col gap-0.5">
                                            {/* Search */}
                                            <div className="flex items-center gap-2.5 px-2 py-1 h-7 bg-background border border-border rounded-md shadow-sm mb-1">
                                                <Search className="w-3.5 h-3.5 text-muted-foreground" />
                                                <div className="w-16 h-1.5 bg-muted rounded-full" />
                                                <div className="ml-auto px-1 border border-border rounded text-[9px] text-muted-foreground font-medium flex items-center h-[18px]">
                                                    ⌘K
                                                </div>
                                            </div>

                                            {/* Quick Actions (Home) */}
                                            <div className="flex items-center gap-2.5 px-2 h-7 hover:bg-muted/50 rounded-md cursor-default">
                                                <Home className="w-3.5 h-3.5 text-muted-foreground" />
                                                <div className="w-10 h-1.5 bg-muted rounded-full" />
                                            </div>

                                            {/* People (Active) */}
                                            <div className="flex items-center gap-2.5 px-2 h-7 bg-muted/50 rounded-md">
                                                <Users className="w-3.5 h-3.5 text-foreground" />
                                                <div className="text-[13px] font-medium text-foreground">
                                                    People
                                                </div>
                                            </div>

                                            {/* Settings */}
                                            <div className="flex items-center gap-2.5 px-2 h-7 hover:bg-muted/50 rounded-md cursor-default opacity-60">
                                                <Settings className="w-3.5 h-3.5 text-muted-foreground" />
                                                <div className="w-12 h-1.5 bg-muted rounded-full" />
                                            </div>
                                        </div>
                                    </aside>

                                    {/* Content Area */}
                                    <div className="flex-1 flex flex-col bg-background">
                                        {/* Header */}
                                        <header className="flex items-center justify-between px-4 h-12 border-b border-border">
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center justify-center w-5 h-5 bg-blue-600 rounded-md shadow-sm">
                                                    <Users className="w-3 h-3 text-white" />
                                                </div>
                                                <span className="text-sm font-medium text-foreground">
                                                    People
                                                </span>
                                            </div>
                                            {/* Avatars */}
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-[10px] text-white font-medium border border-background">
                                                    J
                                                </div>
                                                <div className="w-px h-3.5 bg-border" />
                                                <MoreHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
                                            </div>
                                        </header>

                                        {/* Toolbar */}
                                        <div className="flex items-center justify-between px-3 py-2 border-b border-border bg-muted/10">
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center gap-2 px-2 h-7 bg-background border border-border rounded-md shadow-sm">
                                                    <Filter className="w-3 h-3 text-muted-foreground" />
                                                    <div className="w-10 h-1.5 bg-muted rounded-full" />
                                                </div>
                                                <div className="flex items-center gap-2 px-2 h-7 bg-background border border-border rounded-md shadow-sm">
                                                    <div className="w-12 h-1.5 bg-muted rounded-full" />
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 px-2 h-7 bg-blue-600 rounded-md shadow-sm">
                                                <Plus className="w-3 h-3 text-white" />
                                                <div className="w-8 h-1.5 bg-white/40 rounded-full" />
                                            </div>
                                        </div>

                                        {/* Table Content */}
                                        <div className="flex-1 bg-background">
                                            {/* Table Header */}
                                            <div className="flex items-center h-9 px-4 border-b border-border">
                                                <div className="w-4 h-4 border border-border rounded mr-3" />
                                                <div className="w-16 h-1.5 bg-muted rounded-full" />
                                            </div>

                                            {/* Row 1 - Active/Selected */}
                                            <div className="flex items-center h-10 px-4 border-b border-border bg-muted/5">
                                                <div className="flex items-center justify-center w-4 h-4 bg-blue-600 rounded mr-3">
                                                    <Users className="w-2.5 h-2.5 text-white" />
                                                </div>
                                                <div className="w-6 h-6 rounded-full bg-muted mr-3" />
                                                <div className="w-20 h-1.5 bg-muted rounded-full mr-8" />
                                                <div className="w-32 h-1.5 bg-muted rounded-full" />
                                            </div>

                                            {/* Other Rows */}
                                            {[1, 2, 3, 4, 5].map((i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center h-10 px-4 border-b border-border"
                                                >
                                                    <div className="w-4 h-4 border border-border rounded mr-3 opacity-50" />
                                                    <div className="w-6 h-6 rounded-full bg-muted mr-3 opacity-50" />
                                                    <div className="w-20 h-1.5 bg-muted rounded-full mr-8 opacity-50" />
                                                    <div className="w-24 h-1.5 bg-muted rounded-full opacity-30" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
