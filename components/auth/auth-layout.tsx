import type React from "react"
import Link from "next/link"
import { Users, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Form */}
      <div className="flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Users className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Kontactly</span>
            </Link>
            <ModeToggle />
          </div>

          {/* Back to home */}
          <Button variant="ghost" size="sm" asChild className="mb-6">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
          </Button>

          {/* Title */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
            <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          </div>

          {/* Form */}
          {children}
        </div>
      </div>

      {/* Right side - Image/Branding */}
      <div className="hidden lg:block relative bg-gradient-to-br from-primary to-primary/80">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
        <div className="relative flex flex-col justify-center h-full px-12">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-white mb-4">Manage contacts like never before</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Sync with Google, collaborate with teams, set smart reminders, and organize your professional
              relationships with powerful features.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center text-white/90">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                <span>Google Contacts sync</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                <span>Team collaboration</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                <span>Smart reminders</span>
              </div>
              <div className="flex items-center text-white/90">
                <div className="w-2 h-2 bg-white rounded-full mr-3" />
                <span>Advanced security</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
