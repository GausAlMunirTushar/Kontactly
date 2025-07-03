"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, MoreHorizontal, Edit, Trash2, Tag, Users, Palette } from "lucide-react"

const tags = [
  { id: 1, name: "VIP", color: "bg-red-500", contactCount: 234 },
  { id: 2, name: "Clients", color: "bg-blue-500", contactCount: 189 },
  { id: 3, name: "Prospects", color: "bg-green-500", contactCount: 156 },
  { id: 4, name: "Partners", color: "bg-purple-500", contactCount: 98 },
  { id: 5, name: "Team", color: "bg-orange-500", contactCount: 67 },
  { id: 6, name: "Investors", color: "bg-pink-500", contactCount: 45 },
  { id: 7, name: "Vendors", color: "bg-yellow-500", contactCount: 32 },
  { id: 8, name: "Media", color: "bg-indigo-500", contactCount: 28 },
]

const colorOptions = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-yellow-500",
  "bg-indigo-500",
  "bg-gray-500",
  "bg-teal-500",
]

export default function TagsPage() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newTagName, setNewTagName] = useState("")
  const [selectedColor, setSelectedColor] = useState("bg-blue-500")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tags</h1>
          <p className="text-muted-foreground">Organize your contacts with custom tags</p>
        </div>
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Tag
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Tag</DialogTitle>
              <DialogDescription>Add a new tag to organize your contacts</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="tagName">Tag Name</Label>
                <Input
                  id="tagName"
                  placeholder="Enter tag name"
                  value={newTagName}
                  onChange={(e) => setNewTagName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Color</Label>
                <div className="flex flex-wrap gap-2">
                  {colorOptions.map((color) => (
                    <button
                      key={color}
                      className={`w-8 h-8 rounded-full ${color} ${
                        selectedColor === color ? "ring-2 ring-offset-2 ring-gray-400" : ""
                      }`}
                      onClick={() => setSelectedColor(color)}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className={`w-4 h-4 rounded-full ${selectedColor}`} />
                <Badge variant="secondary">{newTagName || "Preview"}</Badge>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsCreateDialogOpen(false)}>Create Tag</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Tags</CardTitle>
            <Tag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{tags.length}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+2</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tagged Contacts</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">849</div>
            <p className="text-xs text-muted-foreground">Out of 2,847 total</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Most Used</CardTitle>
            <Palette className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-sm font-medium">VIP</span>
            </div>
            <p className="text-xs text-muted-foreground">234 contacts</p>
          </CardContent>
        </Card>
      </div>

      {/* Tags Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tags.map((tag) => (
          <Card key={tag.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-4 h-4 rounded-full ${tag.color}`} />
                  <CardTitle className="text-lg">{tag.name}</CardTitle>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Tag
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      View Contacts
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" />
                      Delete Tag
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Contacts</span>
                  <Badge variant="secondary">{tag.contactCount}</Badge>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${tag.color}`}
                    style={{ width: `${Math.min((tag.contactCount / 250) * 100, 100)}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  {((tag.contactCount / 2847) * 100).toFixed(1)}% of all contacts
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tag Usage Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Tag Usage Analytics</CardTitle>
          <CardDescription>See how your tags are being used across your contacts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tags.slice(0, 5).map((tag, index) => (
              <div key={tag.id} className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 min-w-[120px]">
                  <span className="text-sm font-medium text-muted-foreground">#{index + 1}</span>
                  <div className={`w-3 h-3 rounded-full ${tag.color}`} />
                  <span className="text-sm font-medium">{tag.name}</span>
                </div>
                <div className="flex-1">
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${tag.color}`}
                      style={{ width: `${(tag.contactCount / tags[0].contactCount) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="min-w-[60px] text-right">
                  <span className="text-sm font-medium">{tag.contactCount}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
