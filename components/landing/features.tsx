import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  FolderSyncIcon as Sync,
  Bell,
  Tags,
  Search,
  Shield,
  Download,
  Smartphone,
  Globe,
  Zap,
  Calendar,
  FileText,
} from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Sync,
      title: "Google Contacts Sync",
      description:
        "Seamlessly sync with Google Contacts. Import, export, and keep everything in perfect harmony.",
      badge: "Popular",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Share contacts with your team, assign ownership, and collaborate effectively.",
      badge: "Pro",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description:
        "Never miss a follow-up. Set reminders and get notified across all devices.",
      badge: null,
    },
    {
      icon: Tags,
      title: "Advanced Tagging",
      description:
        "Organize contacts with custom tags and groups. Filter and find anyone instantly.",
      badge: null,
    },
    {
      icon: Search,
      title: "Powerful Search",
      description:
        "Find contacts by name, email, phone, company, or any custom field in seconds.",
      badge: null,
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption, role-based access, and audit logs keep your data safe.",
      badge: "Enterprise",
    },
    {
      icon: Download,
      title: "Import & Export",
      description:
        "Import from CSV, Excel, or vCard. Export your data anytime in multiple formats.",
      badge: null,
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description:
        "Access your contacts anywhere with our responsive design and PWA support.",
      badge: null,
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description:
        "Available in multiple languages including English and Bangla.",
      badge: "New",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Built with modern tech stack for blazing fast performance and reliability.",
      badge: null,
    },
    {
      icon: Calendar,
      title: "Birthday Reminders",
      description:
        "Never forget important dates. Get notified about birthdays and anniversaries.",
      badge: null,
    },
    {
      icon: FileText,
      title: "Detailed Notes",
      description:
        "Add rich notes, interaction history, and custom fields to every contact.",
      badge: null,
    },
  ];

  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to manage contacts
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Powerful features designed for individuals, teams, and businesses of
            all sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative group hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  {feature.badge && (
                    <Badge
                      variant={
                        feature.badge === "Popular" ? "default" : "secondary"
                      }
                    >
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
