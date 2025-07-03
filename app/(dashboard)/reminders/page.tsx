"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Calendar, Plus, Clock, AlertCircle, CheckCircle2, MoreHorizontal, Bell, Phone, Mail } from "lucide-react"

const reminders = [
  {
    id: 1,
    contact: "Sarah Johnson",
    company: "TechCorp Inc.",
    avatar: "SJ",
    type: "Follow-up Call",
    dueDate: "2024-12-07",
    dueTime: "14:00",
    priority: "high",
    status: "pending",
    notes: "Discuss Q1 project timeline and budget allocation",
  },
  {
    id: 2,
    contact: "Mike Chen",
    company: "StartupXYZ",
    avatar: "MC",
    type: "Send Proposal",
    dueDate: "2024-12-08",
    dueTime: "10:00",
    priority: "medium",
    status: "pending",
    notes: "Send updated proposal with new pricing structure",
  },
  {
    id: 3,
    contact: "Emma Wilson",
    company: "Design Studio",
    avatar: "EW",
    type: "Check-in Email",
    dueDate: "2024-12-10",
    dueTime: "09:00",
    priority: "low",
    status: "pending",
    notes: "Monthly check-in to see how the project is progressing",
  },
  {
    id: 4,
    contact: "Alex Rodriguez",
    company: "Rodriguez Consulting",
    avatar: "AR",
    type: "Meeting Follow-up",
    dueDate: "2024-12-05",
    dueTime: "16:00",
    priority: "high",
    status: "overdue",
    notes: "Follow up on contract terms discussed in last meeting",
  },
]

const completedReminders = [
  {
    id: 5,
    contact: "Lisa Park",
    company: "Marketing Pro",
    avatar: "LP",
    type: "Send Contract",
    completedDate: "2024-12-05",
    priority: "medium",
    status: "completed",
  },
  {
    id: 6,
    contact: "David Kim",
    company: "Tech Solutions",
    avatar: "DK",
    type: "Quarterly Review",
    completedDate: "2024-12-04",
    priority: "high",
    status: "completed",
  },
]

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "destructive"
    case "medium":
      return "default"
    case "low":
      return "secondary"
    default:
      return "secondary"
  }
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "overdue":
      return <AlertCircle className="h-4 w-4 text-red-500" />
    case "pending":
      return <Clock className="h-4 w-4 text-orange-500" />
    case "completed":
      return <CheckCircle2 className="h-4 w-4 text-green-500" />
    default:
      return <Clock className="h-4 w-4" />
  }
}

export default function RemindersPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)

  const pendingReminders = reminders.filter((r) => r.status === "pending")
  const overdueReminders = reminders.filter((r) => r.status === "overdue")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Follow-ups & Reminders</h1>
          <p className="text-muted-foreground">Stay on top of your important contacts and tasks</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Reminder
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Reminder</DialogTitle>
              <DialogDescription>Set a follow-up reminder for a contact</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="contact">Contact</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a contact" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sarah">Sarah Johnson</SelectItem>
                    <SelectItem value="mike">Mike Chen</SelectItem>
                    <SelectItem value="emma">Emma Wilson</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Reminder Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="call">Follow-up Call</SelectItem>
                    <SelectItem value="email">Send Email</SelectItem>
                    <SelectItem value="meeting">Schedule Meeting</SelectItem>
                    <SelectItem value="proposal">Send Proposal</SelectItem>
                    <SelectItem value="checkin">Check-in</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="priority">Priority</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="low">Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" placeholder="Add any additional notes..." className="min-h-[80px]" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsCreateDialogOpen(false)}>Create Reminder</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Reminders</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{reminders.length}</div>
            <p className="text-xs text-muted-foreground">Active reminders</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Due Today</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Need attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overdue</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{overdueReminders.length}</div>
            <p className="text-xs text-muted-foreground">Requires immediate action</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{completedReminders.length}</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </div>

      {/* Reminders Tabs */}
      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending">Pending ({pendingReminders.length})</TabsTrigger>
          <TabsTrigger value="overdue">Overdue ({overdueReminders.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedReminders.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="space-y-4">
          {pendingReminders.map((reminder) => (
            <Card key={reminder.id}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder-user.jpg" alt={reminder.contact} />
                      <AvatarFallback>{reminder.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{reminder.contact}</h3>
                        <Badge variant="outline">{reminder.company}</Badge>
                      </div>
                      <p className="text-sm font-medium text-primary">{reminder.type}</p>
                      <p className="text-sm text-muted-foreground">{reminder.notes}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{reminder.dueDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{reminder.dueTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={getPriorityColor(reminder.priority)}>{reminder.priority}</Badge>
                    {getStatusIcon(reminder.status)}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Mark Complete
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Phone className="mr-2 h-4 w-4" />
                          Call Contact
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Mail className="mr-2 h-4 w-4" />
                          Send Email
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="mr-2 h-4 w-4" />
                          Reschedule
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="overdue" className="space-y-4">
          {overdueReminders.map((reminder) => (
            <Card key={reminder.id} className="border-red-200">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder-user.jpg" alt={reminder.contact} />
                      <AvatarFallback>{reminder.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{reminder.contact}</h3>
                        <Badge variant="outline">{reminder.company}</Badge>
                        <Badge variant="destructive">Overdue</Badge>
                      </div>
                      <p className="text-sm font-medium text-primary">{reminder.type}</p>
                      <p className="text-sm text-muted-foreground">{reminder.notes}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span className="text-red-600">{reminder.dueDate}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span className="text-red-600">{reminder.dueTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={getPriorityColor(reminder.priority)}>{reminder.priority}</Badge>
                    {getStatusIcon(reminder.status)}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <CheckCircle2 className="mr-2 h-4 w-4" />
                          Mark Complete
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="mr-2 h-4 w-4" />
                          Reschedule
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedReminders.map((reminder) => (
            <Card key={reminder.id} className="opacity-75">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder-user.jpg" alt={reminder.contact} />
                      <AvatarFallback>{reminder.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold">{reminder.contact}</h3>
                        <Badge variant="outline">{reminder.company}</Badge>
                      </div>
                      <p className="text-sm font-medium text-muted-foreground line-through">{reminder.type}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <CheckCircle2 className="h-4 w-4 text-green-600" />
                          <span>Completed on {reminder.completedDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-green-600">
                    Completed
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
