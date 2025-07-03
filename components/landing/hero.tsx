import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Users, Zap, Shield } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            <Zap className="mr-2 h-3 w-3" />
            New: Google Contacts Sync Available
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Smart Contact Management
            <span className="text-primary block">Made Simple</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Organize, sync, and manage your contacts with powerful features. Connect with Google, set reminders,
            collaborate with teams, and never lose touch again.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" asChild>
              <Link href="/auth/register">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">10,000+ Users</h3>
              <p className="text-sm text-muted-foreground">Trust Kontactly</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">99.9% Uptime</h3>
              <p className="text-sm text-muted-foreground">Reliable Service</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold">Bank-Level Security</h3>
              <p className="text-sm text-muted-foreground">Your Data Protected</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
