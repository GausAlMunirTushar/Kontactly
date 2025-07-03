import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, UserPlus, Calendar, FolderSyncIcon as Sync, CheckCircle2 } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your contacts.</p>
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Contact
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Contacts</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Added This Week</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8</span> from last week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Follow-ups Due</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-orange-600">3 overdue</span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sync Status</CardTitle>
            <Sync className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium">Synced</span>
            </div>
            <p className="text-xs text-muted-foreground">Last sync: 2 hours ago</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Contact Growth Chart */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Contact Growth</CardTitle>
            <CardDescription>Your contact growth over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="h-[200px] flex items-end justify-between space-x-2">
              {[65, 78, 82, 95, 88, 92].map((height, i) => (
                <div key={i} className="flex flex-col items-center space-y-2">
                  <div className="w-8 bg-primary rounded-t" style={{ height: `${height}%` }} />
                  <span className="text-xs text-muted-foreground">{["Jan", "Feb", "Mar", "Apr", "May", "Jun"][i]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Tags */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Top Tags</CardTitle>
            <CardDescription>Most used contact tags</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "VIP", count: 234, color: "bg-red-500" },
              { name: "Clients", count: 189, color: "bg-blue-500" },
              { name: "Prospects", count: 156, color: "bg-green-500" },
              { name: "Partners", count: 98, color: "bg-purple-500" },
              { name: "Team", count: 67, color: "bg-orange-500" },
            ].map((tag) => (
              <div key={tag.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${tag.color}`} />
                  <span className="text-sm font-medium">{tag.name}</span>
                </div>
                <Badge variant="secondary">{tag.count}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates to your contacts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                action: "Added new contact",
                contact: "Sarah Johnson",
                time: "2 minutes ago",
                avatar: "SJ",
              },
              {
                action: "Updated contact info",
                contact: "Mike Chen",
                time: "1 hour ago",
                avatar: "MC",
              },
              {
                action: "Tagged as VIP",
                contact: "Emma Wilson",
                time: "3 hours ago",
                avatar: "EW",
              },
              {
                action: "Synced from Google",
                contact: "12 contacts",
                time: "5 hours ago",
                avatar: "G",
              },
            ].map((activity, i) => (
              <div key={i} className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">{activity.avatar}</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.action}</span>{" "}
                    <span className="text-muted-foreground">{activity.contact}</span>
                  </p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Upcoming Follow-ups */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Follow-ups</CardTitle>
            <CardDescription>Don't miss these important connections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                name: "Alex Rodriguez",
                company: "TechCorp Inc.",
                date: "Today, 2:00 PM",
                priority: "high",
                avatar: "AR",
              },
              {
                name: "Lisa Park",
                company: "Design Studio",
                date: "Tomorrow, 10:00 AM",
                priority: "medium",
                avatar: "LP",
              },
              {
                name: "David Kim",
                company: "StartupXYZ",
                date: "Dec 8, 3:00 PM",
                priority: "low",
                avatar: "DK",
              },
            ].map((followup, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="text-xs">{followup.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">{followup.name}</p>
                    <p className="text-xs text-muted-foreground">{followup.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">{followup.date}</p>
                  <Badge
                    variant={
                      followup.priority === "high"
                        ? "destructive"
                        : followup.priority === "medium"
                          ? "default"
                          : "secondary"
                    }
                    className="text-xs"
                  >
                    {followup.priority}
                  </Badge>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full bg-transparent">
              <Calendar className="mr-2 h-4 w-4" />
              View All Follow-ups
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
