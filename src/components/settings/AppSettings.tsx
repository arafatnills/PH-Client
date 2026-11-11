"use client";

import { Bell, Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export function AppSettings() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 p-4 md:p-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">App Settings</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your app preferences and configurations. These settings apply
          to your account across all roles.
        </p>
      </div>

      <Separator />

      {/* Settings Sections */}
      <div className="flex flex-col gap-6">
        {/* ১. Appearance Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Monitor className="h-5 w-5 text-primary" />
              Appearance
            </CardTitle>
            <CardDescription>
              Customize the look and feel of the application.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4 shadow-sm">
              <div className="space-y-0.5">
                <Label className="text-base font-medium">Dark Mode</Label>
                <p className="text-sm text-muted-foreground">
                  Switch between light and dark themes.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="h-4 w-4 text-muted-foreground" />
                <Switch
                  checked={theme === "dark"}
                  onCheckedChange={(checked) =>
                    setTheme(checked ? "dark" : "light")
                  }
                />
                <Moon className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* ২. Example Future Section (Notifications) -  */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Bell className="h-5 w-5 text-primary" />
              Notifications{" "}
              <span className="text-xs bg-muted px-2 py-1 rounded-full ml-2">
                Coming Soon
              </span>
            </CardTitle>
            <CardDescription>
              Choose what updates you want to receive.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 opacity-50 pointer-events-none">
            <div className="flex items-center justify-between rounded-lg border p-4 shadow-sm">
              <div className="space-y-0.5">
                <Label className="text-base font-medium">Email Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Receive important updates via email.
                </p>
              </div>
              <Switch checked={false} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
