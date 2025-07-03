"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LayoutDashboard,
  Users,
  Tags,
  Calendar,
  Settings,
  UserPlus,
  Download,
  Upload,
  UsersIcon,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Contacts",
    href: "/contacts",
    icon: Users,
  },
  {
    name: "Tags",
    href: "/tags",
    icon: Tags,
  },
  {
    name: "Follow-ups",
    href: "/reminders",
    icon: Calendar,
  },
  {
    name: "Team",
    href: "/team",
    icon: UsersIcon,
  },
];

const tools = [
  {
    name: "Import Contacts",
    href: "/contacts/import",
    icon: Upload,
  },
  {
    name: "Export Contacts",
    href: "/contacts/export",
    icon: Download,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-card border-r">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/dashboard" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">K</span>
          </div>
          <span className="text-xl font-bold">Kontactly</span>
        </Link>
      </div>

      <ScrollArea className="flex-1 px-3 py-4">
        <div className="space-y-1">
          <div className="px-3 py-2">
            <Button className="w-full justify-start" size="sm">
              <UserPlus className="mr-2 h-4 w-4" />
              Add Contact
            </Button>
          </div>

          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className={cn(
                      "w-full justify-start py-1",
                      isActive && "bg-secondary"
                    )}
                    size="sm"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              );
            })}
          </div>

          <div className="px-3 py-2">
            <h4 className="text-sm font-medium text-muted-foreground mb-2">
              Tools
            </h4>
            <div className="space-y-1">
              {tools.map((item) => (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start"
                    size="sm"
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>

      <div className="border-t p-3">
        <Link href="/settings">
          <Button
            variant={pathname === "/settings" ? "secondary" : "ghost"}
            className="w-full justify-start"
            size="sm"
          >
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </Link>
      </div>
    </div>
  );
}
