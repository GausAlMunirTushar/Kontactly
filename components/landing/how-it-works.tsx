import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserPlus, FolderSyncIcon as Sync, Users, Zap } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "Sign Up & Import",
      description: "Create your account and import contacts from Google, CSV, or add them manually.",
      color: "bg-blue-500",
    },
    {
      step: "02",
      icon: Sync,
      title: "Organize & Tag",
      description: "Use tags, groups, and custom fields to organize your contacts exactly how you want.",
      color: "bg-green-500",
    },
    {
      step: "03",
      icon: Users,
      title: "Collaborate & Share",
      description: "Invite team members, assign contacts, and collaborate with role-based permissions.",
      color: "bg-purple-500",
    },
    {
      step: "04",
      icon: Zap,
      title: "Automate & Grow",
      description: "Set reminders, sync with Google, and never miss important follow-ups again.",
      color: "bg-orange-500",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="outline" className="mb-4">
            How It Works
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get started in minutes</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Four simple steps to transform how you manage your contacts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="relative group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-full ${step.color} text-white`}>
                      <step.icon className="h-8 w-8" />
                    </div>
                    <div className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-background border-2 border-muted text-xs font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </CardContent>

              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-muted-foreground/20" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
