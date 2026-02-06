import React, { useState, useEffect } from "react";
import {
    ChevronLeft,
    Podcast,
    Newspaper,
    Sparkles,
    Users,
    Megaphone,
    MoreHorizontal,
    Search,
    Home,
    Settings,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Brand Icons
const InstagramIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
);

const GoogleIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" /></svg>
);

const YoutubeIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
);

const RedditIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" /></svg>
);

const XIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" /></svg>
);

const FacebookIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.797 1.603-2.797 2.898v1.074h3.44l-1.054 3.667h-2.386l.004 7.98C21.027 21.91 24 17.326 24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.326 2.973 9.91 8.04 10.191l-.939 1.5Z" /></svg>
);

const LinkedinIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h5v-8.306c0-4.613 5.432-5.17 5.432 0v8.306h5v-10.5c0-5.386-5.791-5.592-7.77-2.957l-2.694-2.543z" /></svg>
);

const options = [
    { id: "instagram", label: "Instagram", icon: InstagramIcon },
    { id: "google", label: "Google", icon: GoogleIcon },
    { id: "podcast", label: "Podcast", icon: Podcast },
    { id: "newsletter", label: "Newsletter", icon: Newspaper },
    { id: "ai", label: "AI", icon: Sparkles },
    { id: "youtube", label: "Youtube", icon: YoutubeIcon },
    { id: "reddit", label: "Reddit", icon: RedditIcon },
    { id: "x", label: "X.com", icon: XIcon },
    { id: "friends", label: "Friends / Coworker", icon: Users },
    { id: "facebook", label: "Facebook", icon: FacebookIcon },
    { id: "billboard", label: "Billboard / Outside", icon: Megaphone },
    { id: "linkedin", label: "LinkedIn", icon: LinkedinIcon },
    { id: "other", label: "Other", icon: MoreHorizontal },
];

export default function OnboardingStep3PageShadcn() {
    const [theme, setTheme] = useState(() => {
        if (typeof window !== "undefined") {
            return new URLSearchParams(window.location.search).get("theme");
        }
        return null;
    });

    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    // isDark calculation (optional if using strictly CSS vars)
    // const isDark = theme === "dark";

    return (
        <div className="min-h-screen flex flex-col items-center bg-background py-8 gap-6 px-4 sm:px-6 lg:px-8 font-sans text-foreground">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-0.5 bg-muted z-50">
                <div className="h-full bg-primary rounded-r-full w-[37.5%]" />
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
                <Card className="flex flex-col lg:flex-row w-full max-w-[1130px] lg:h-[692px] overflow-hidden border-border p-0 shadow-none">
                    {/* Left Side - Form */}
                    <div className="flex flex-col w-full lg:w-[564px] lg:min-w-[564px] h-full">
                        <div className="p-8 lg:p-[72px] flex justify-center h-full">
                            <div className="flex flex-col items-center w-full max-w-[420px]">
                                {/* Header with Back Button */}
                                <div className="flex flex-col gap-4 w-full mb-7">
                                    <div className="w-full">
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="w-7 h-7 -ml-2 text-foreground hover:bg-muted"
                                        >
                                            <ChevronLeft className="h-4 w-4" />
                                        </Button>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-xl font-semibold tracking-tight text-foreground">
                                            How did you hear about us?
                                        </h1>
                                        <p className="text-sm font-medium text-muted-foreground leading-tight">
                                            Please select below where you found out about Attio. This step is optional.
                                        </p>
                                    </div>
                                </div>

                                {/* Options Grid */}
                                <div className="flex flex-wrap content-start gap-3 w-full mb-auto">
                                    {options.map((option) => (
                                        <Button
                                            key={option.id}
                                            variant="outline"
                                            onClick={() => setSelectedOption(option.id)}
                                            className={`h-7 px-2.5 rounded-lg text-xs font-medium border transition-all ${selectedOption === option.id
                                                    ? "bg-foreground text-background border-transparent hover:bg-foreground/90 hover:text-background"
                                                    : "bg-card text-foreground border-transparent hover:bg-card hover:border-border shadow-sm"
                                                }`}
                                        >
                                            <option.icon
                                                className={`mr-1.5 h-3.5 w-3.5 ${selectedOption === option.id
                                                        ? "text-background"
                                                        : "text-foreground"
                                                    }`}
                                            />
                                            {option.label}
                                        </Button>
                                    ))}
                                </div>

                                {/* Footer Buttons */}
                                <div className="flex flex-col w-full gap-3 mt-7">
                                    <Button className="w-full h-9 bg-blue-600 hover:bg-blue-700 text-white shadow-sm font-medium">
                                        Continue
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="w-full h-9 text-muted-foreground hover:bg-muted hover:text-foreground"
                                    >
                                        Skip
                                    </Button>
                                </div>
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
                                                <div className="text-base font-semibold text-foreground tracking-tight">
                                                    Acme
                                                </div>
                                                <div className="ml-auto w-4.5 h-4.5">
                                                    {/* Simple chevron fallback using lucide since custom svg was simple */}
                                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.5 6.75L9 11.25L4.5 6.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <Separator className="bg-border" />

                                        {/* Sidebar Menu */}
                                        <div className="px-3 py-4 flex flex-col gap-0.5">
                                            {/* Search */}
                                            <div className="flex items-center gap-2.5 px-2 py-1 h-7 bg-background border border-border rounded-md shadow-sm mb-1">
                                                <Search className="w-3.5 h-3.5 text-muted-foreground" />
                                                <div className="w-16 h-2 bg-muted rounded-full" />
                                                <div className="ml-auto px-1 border border-border rounded text-[9px] text-muted-foreground font-medium flex items-center h-[18px]">
                                                    ⌘K
                                                </div>
                                            </div>

                                            {/* Menu Items (Placeholder logic) */}
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 h-[26px]">
                                                <Home className="w-3.5 h-3.5 text-foreground" />
                                                <div className="w-[85px] h-2 bg-muted rounded-full" />
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 h-[26px]">
                                                <Users className="w-3.5 h-3.5 text-foreground" />
                                                <div className="w-[63px] h-2 bg-muted rounded-full" />
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 h-[26px]">
                                                <Settings className="w-3.5 h-3.5 text-foreground" />
                                                <div className="w-[47px] h-2 bg-muted rounded-full" />
                                            </div>
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 h-[26px]">
                                                <MoreHorizontal className="w-3.5 h-3.5 text-foreground" />
                                                <div className="w-[54px] h-2 bg-muted rounded-full" />
                                            </div>

                                            {/* Lists Section */}
                                            <div className="mt-4.5 ml-[18px] border-l border-border pl-0">
                                                <div className="flex items-center gap-1.5 px-3 py-1.5 h-[26px]">
                                                    <div className="w-3.5 h-3.5 rounded bg-muted" />
                                                    <div className="w-[55px] h-2 bg-muted rounded-full" />
                                                </div>
                                                <div className="flex items-center gap-1.5 px-3 py-1.5 h-[26px]">
                                                    <div className="w-3.5 h-3.5 rounded bg-muted" />
                                                    <div className="w-[45px] h-2 bg-muted rounded-full" />
                                                </div>
                                            </div>
                                        </div>
                                    </aside>

                                    {/* Content Area */}
                                    <div className="flex-1 flex flex-col bg-background rounded-r-xl">
                                        {/* Header */}
                                        <div className="flex items-center justify-between px-4 py-3 h-12">
                                            <div className="flex items-center gap-1">
                                                {/* Icon for People */}
                                                <div className="flex items-center justify-center w-5 h-5 bg-red-100 dark:bg-red-900/20 rounded-md border border-border/50 shadow-sm">
                                                    <Users className="w-3 h-3 text-red-600 dark:text-red-400" />
                                                </div>
                                                <div className="w-16 h-2 bg-muted rounded-full" />
                                            </div>
                                            {/* Right actions */}
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 rounded-full bg-muted" />
                                                <div className="w-px h-3.5 bg-muted" />
                                                <MoreHorizontal className="w-3.5 h-3.5 text-muted-foreground" />
                                            </div>
                                        </div>

                                        {/* Toolbar / Filters */}
                                        <div className="flex items-center gap-2 px-4 pb-2 border-b border-border">
                                            <div className="w-20 h-7 rounded-md bg-muted/50 border border-border" />
                                            <div className="w-20 h-7 rounded-md bg-muted/50 border border-border" />
                                            <div className="w-7 h-7 rounded-md bg-muted/50 border border-border ml-auto" />
                                            <div className="w-16 h-7 rounded-md bg-blue-600" />
                                        </div>

                                        {/* Table Mockup */}
                                        <div className="flex-1 p-4">
                                            {/* Header Row */}
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-4 h-4 border border-border rounded" />
                                                <div className="w-[200px] h-2 bg-muted rounded-full" />
                                                <div className="w-[150px] h-2 bg-muted rounded-full" />
                                                <div className="w-[100px] h-2 bg-muted rounded-full" />
                                            </div>

                                            {/* Rows */}
                                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center gap-3 py-3 border-b border-border"
                                                >
                                                    <div className="w-4 h-4 border border-border rounded" />
                                                    <div className="w-6 h-6 rounded-full bg-muted" />
                                                    <div className="w-40 h-2 bg-muted rounded-full" />
                                                    <div className="w-24 h-2 bg-muted rounded-full" />
                                                    <div className="w-20 h-2 bg-muted rounded-full" />
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
