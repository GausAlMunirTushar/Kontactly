"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Users, UserPlus, Calendar, Tag, Clock, FolderSyncIcon as Sync } from "lucide-react"

export function DashboardOverview() {
  const stats = [
    {
      title: "Total Contacts",
      value: "1,234",
      change: "+12%",
      changeType: "positive" as const,
      icon: Users,
    },
    {
      title: "Added This Month",
      value: "89",
      change: "+23%",
      changeType: "positive" as const,
      icon: UserPlus,
    },
    {
      title: "Upcoming Reminders",
      value: "15",
      change: "3 today",
      changeType: "neutral" as const,
      icon: Calendar,
    },
    {
      title: "Active Tags",
      value: "24",
      change: "+2 new",
      changeType: "positive" as const,
      icon: Tag,
    },
  ]

  const recentContacts = [
    { name: "Sarah Johnson", email: "sarah@techcorp.com", company: "TechCorp", added: "2 hours ago" },
    { name: "Ahmed Rahman", email: "ahmed@startup.bd", company: "StartupBD", added: "5 hours ago" },
    { name: "Emily Chen", email: "emily@growthco.com", company: "GrowthCo", added: "1 day ago" },
    { name: "Michael Brown", email: "michael@property.com", company: "PropertyPro", added: "2 days ago" },
  ]

  const upcomingReminders = [
    { contact: "Sarah Johnson", task: "Follow up on proposal", due: "Today, 2:00 PM" },
    { contact: "Ahmed Rahman", task: "Schedule demo call", due: "Tomorrow, 10:00 AM" },
    { contact: "Emily Chen", task: "Send pricing information", due: "Dec 8, 3:00 PM" },
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your contacts.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span
                  className={
                    stat.changeType === "positive"
                      ? "text-green-600"
                      : stat.changeType === "negative"
                        ? "text-red-600"
                        : "text-muted-foreground"
                  }
                >
                  {stat.change}
                </span>
                {" from last month"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Recent Contacts */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Contacts</CardTitle>
            <CardDescription>Contacts you've added recently</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentContacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.email}</p>
                    <p className="text-xs text-muted-foreground">{contact.company}</p>
                  </div>
                  <div className="text-xs text-muted-foreground">{contact.added}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions & Reminders */}
        <div className="col-span-3 space-y-4">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start">
                <UserPlus className="mr-2 h-4 w-4" />
                Add New Contact
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Sync className="mr-2 h-4 w-4" />
                Sync with Google
              </Button>
              <Button variant="outline" className="w-full justify-start bg-transparent">
                <Calendar className="mr-2 h-4 w-4" />
                Set Reminder
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Reminders */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                Upcoming Reminders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingReminders.map((reminder, index) => (
                  <div key={index} className="space-y-1">
                    <p className="text-sm font-medium">{reminder.contact}</p>
                    <p className="text-xs text-muted-foreground">{reminder.task}</p>
                    <Badge variant="outline" className="text-xs">
                      {reminder.due}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Sync Status */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sync className="mr-2 h-4 w-4" />
            Google Contacts Sync
          </CardTitle>
          <CardDescription>Last synced 2 hours ago</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm">Sync Status: Active</p>
              <Progress value={100} className="w-64" />
              <p className="text-xs text-muted-foreground">1,234 contacts synced</p>
            </div>
            <Button variant="outline">Sync Now</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
