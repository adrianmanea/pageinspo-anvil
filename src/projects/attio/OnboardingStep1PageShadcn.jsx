import React, { useState, useEffect } from "react";
import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function OnboardingStep1PageShadcn() {
  const [subscribeToNews, setSubscribeToNews] = useState(false);

  // Use vanilla URLSearchParams to avoid React Router dependency for standalone build
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
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
    <div
      className="min-h-screen flex flex-col items-center bg-background pt-8 pb-6 gap-6 px-4 sm:px-6 lg:px-8 font-sans"
    >
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Progress value={12.5} className="h-[2px] w-full rounded-none" />
      </div>

      {/* Logo */}
      <div className="flex items-center gap-1 w-24 h-6">
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
        <Card className="flex flex-col lg:flex-row w-full max-w-[1130px] lg:h-[692px] overflow-hidden rounded-[20px] border-border shadow-none">
          {/* Left Side - Form */}
          <div className="flex flex-col w-full lg:w-[564px] lg:min-w-[564px] lg:max-w-[564px] h-auto lg:h-[690px]">
            <div className="p-8 lg:p-[72px] flex justify-center">
              <div className="flex flex-col items-center gap-8 w-full max-w-[420px]">
                {/* Title */}
                <div className="w-full">
                  <h1 className="text-xl font-semibold tracking-tight text-foreground">
                    Let's get to know you
                  </h1>
                </div>

                {/* Profile Picture Section */}
                <div className="flex items-center gap-5 w-full">
                  {/* Avatar Placeholder */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-4xl font-medium text-primary-foreground uppercase">
                    {/* Placeholder for initials or image */}
                  </div>

                  {/* Upload Controls */}
                  <div className="flex flex-col items-start gap-3">
                    <div className="text-sm font-semibold tracking-tight text-foreground">
                      Profile picture
                    </div>
                    <div className="flex items-center gap-3">
                      {/* Upload Button */}
                      <Button variant="outline" size="sm" className="h-[36px] shadow-sm">
                        <Upload className="mr-2 h-3.5 w-3.5" />
                        Upload image
                      </Button>
                      {/* Remove Button */}
                      <Button variant="outline" size="sm" disabled className="h-[36px] shadow-sm opacity-50">
                        Remove
                      </Button>
                    </div>
                    <div className="text-[11px] font-medium text-muted-foreground">
                      *.png, *.jpeg files up to 10MB at least 400px by 400px
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-7 w-full">
                  <div className="flex flex-col gap-4">
                    {/* First Name Field */}
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="firstName" className="pl-1 text-xs font-medium text-muted-foreground">
                        First name
                      </Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name..."
                        className="h-[34px] shadow-sm"
                      />
                    </div>

                    {/* Last Name Field */}
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="lastName" className="pl-1 text-xs font-medium text-muted-foreground">
                        Last name
                      </Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name..."
                        className="h-[34px] shadow-sm"
                      />
                    </div>

                    {/* Email Field (Disabled) */}
                    <div className="flex flex-col gap-1">
                      <Label htmlFor="email" className="pl-1 text-xs font-medium text-muted-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        disabled
                        value="hello@pageinspo.com"
                        className="h-[34px] shadow-sm opacity-50"
                      />
                    </div>

                    {/* Separator + Toggle */}
                    <div className="flex flex-col gap-4 mt-1">
                      <Separator />
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex flex-col gap-1 flex-1">
                          <Label htmlFor="subscribe" className="text-xs font-medium text-foreground cursor-pointer">
                            Subscribe to product update emails
                          </Label>
                          <span className="text-[11px] font-medium text-muted-foreground">
                            Get the latest updates about features and product updates.
                          </span>
                        </div>
                        {/* Toggle Switch */}
                        <Switch
                          id="subscribe"
                          checked={subscribeToNews}
                          onCheckedChange={setSubscribeToNews}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Continue Button */}
                  <Button type="submit" className="w-full h-9 text-sm font-medium shadow-md">
                    Continue
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Side - App Preview */}
          <div
            className="hidden lg:flex flex-col w-[564px] min-w-[564px] max-w-[564px] h-[690px] bg-background border-l border-border/50"
          >
            <div className="relative w-full h-full p-[96px_64px] bg-muted/20 overflow-hidden">
              {/* Scaled App Preview Placeholder */}
              <div
                className="origin-top-left"
                style={{
                  transform: "scale(0.555)",
                  width: "1440px",
                  height: "900px",
                }}
              >
                {/* Sidebar Preview */}
                <div className="flex h-full rounded-xl overflow-hidden shadow-2xl">
                  {/* Sidebar */}
                  <aside className="flex flex-col w-[272px] h-full bg-card border-r border-border">
                    {/* Workspace Header */}
                    <header className="flex items-center gap-3 p-[12px_16px_12px_12px] h-[48px]">
                      <div className="flex items-center justify-center w-6 h-6 bg-card border border-dashed border-border rounded-md text-sm font-medium text-muted-foreground uppercase">
                        G
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-base font-semibold tracking-tight text-foreground">
                          Workspace
                        </span>
                      </div>
                    </header>
                    <Separator />
                    {/* Search + AI Buttons */}
                    <div className="flex items-center gap-2 p-[12px_8px_16px]">
                      <div className="flex items-center gap-2.5 p-1 w-[200px] h-7 bg-background rounded-lg shadow-sm">
                        <span className="w-24 h-2 bg-muted rounded-full" />
                      </div>
                    </div>
                    {/* Nav Items Skeleton */}
                    <div className="flex flex-col gap-1 flex-1">
                      {[85, 63, 47, 54].map((w, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 px-3 py-1.5"
                        >
                          <span className="w-3.5 h-3.5 bg-muted rounded-sm" />
                          <span
                            className="h-2 bg-muted rounded-full"
                            style={{ width: `${w}px` }}
                          />
                        </div>
                      ))}
                    </div>
                  </aside>
                  {/* Main Content Area */}
                  <div className="flex-1 flex flex-col bg-background rounded-r-xl">
                    {/* Header */}
                    <header className="flex items-center justify-between px-4 py-3 h-[48px] border-b border-border">
                      <div className="flex items-center gap-1">
                        <div className="flex items-center justify-center w-3.5 h-3.5 bg-primary rounded-full" />
                        <span className="text-sm font-medium tracking-tight text-foreground">
                          People
                        </span>
                      </div>
                    </header>
                    {/* Toolbar Skeleton */}
                    <div className="flex items-center justify-between p-[8px_12px] h-[48px] border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center w-[150px] h-8 bg-background rounded-lg shadow-sm border border-border/50" />
                        <div className="flex items-center w-[130px] h-8 bg-background rounded-lg shadow-sm border border-border/50" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center w-[128px] h-8 bg-background rounded-lg shadow-sm border border-border/50" />
                        <div className="flex items-center w-[134px] h-8 bg-primary rounded-lg" />
                      </div>
                    </div>
                    {/* Table Skeleton */}
                    <div className="flex-1 p-4">
                      <div className="flex flex-col gap-2">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 h-8"
                          >
                            <span className="w-4 h-4 bg-muted rounded" />
                            <span className="w-[120px] h-2 bg-muted rounded" />
                            <span className="w-[80px] h-2 bg-muted rounded" />
                            <span className="w-[60px] h-2 bg-muted rounded" />
                          </div>
                        ))}
                      </div>
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
