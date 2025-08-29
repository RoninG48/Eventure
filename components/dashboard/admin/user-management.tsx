"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Users, Search, UserPlus, Shield, Edit, Trash2 } from "lucide-react"

export function UserManagement() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@christuniversity.in",
      role: "student",
      status: "active",
      joinDate: "Jan 15, 2024",
      eventsAttended: 12,
      lastActive: "2 hours ago",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@christuniversity.in",
      role: "organizer",
      status: "active",
      joinDate: "Sep 10, 2023",
      eventsAttended: 45,
      lastActive: "1 day ago",
    },
    {
      id: 3,
      name: "Mike Wilson",
      email: "mike.wilson@christuniversity.in",
      role: "admin",
      status: "active",
      joinDate: "Mar 5, 2023",
      eventsAttended: 78,
      lastActive: "5 minutes ago",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily.davis@christuniversity.in",
      role: "student",
      status: "inactive",
      joinDate: "Nov 20, 2023",
      eventsAttended: 3,
      lastActive: "2 weeks ago",
    },
    {
      id: 5,
      name: "Alex Chen",
      email: "alex.chen@christuniversity.in",
      role: "organizer",
      status: "pending",
      joinDate: "Mar 12, 2024",
      eventsAttended: 0,
      lastActive: "Never",
    },
  ])

  const getRoleColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-red-100 text-red-800"
      case "organizer":
        return "bg-blue-100 text-blue-800"
      case "student":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "inactive":
        return "bg-gray-100 text-gray-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "suspended":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleEditUser = (userId: number) => {
    console.log(`[v0] Editing user ${userId}`)
    // Open edit user modal or navigate to edit page
  }

  const handleChangeRole = (userId: number) => {
    console.log(`[v0] Changing role for user ${userId}`)
    // Open role change modal
  }

  const handleSuspendUser = (userId: number) => {
    if (confirm("Are you sure you want to suspend this user?")) {
      setUsers(users.map((user) => (user.id === userId ? { ...user, status: "suspended" } : user)))
      console.log(`[v0] Suspended user ${userId}`)
    }
  }

  const handleApproveUser = (userId: number) => {
    setUsers(users.map((user) => (user.id === userId ? { ...user, status: "active" } : user)))
    console.log(`[v0] Approved user ${userId}`)
  }

  const handleDeleteUser = (userId: number) => {
    if (confirm("Are you sure you want to delete this user? This action cannot be undone.")) {
      setUsers(users.filter((user) => user.id !== userId))
      console.log(`[v0] Deleted user ${userId}`)
    }
  }

  const handleAddUser = () => {
    console.log("[v0] Opening add user form")
    // Open add user modal or navigate to add user page
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              User Management
            </CardTitle>
            <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2" onClick={handleAddUser}>
              <UserPlus className="w-4 h-4" />
              Add User
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input placeholder="Search users by name or email..." className="pl-10" />
            </div>
          </div>

          <div className="space-y-4">
            {users.map((user) => (
              <div key={user.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{user.name}</h3>
                      <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                      <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{user.eventsAttended}</p>
                    <p className="text-xs text-gray-600">Events Attended</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Joined:</span> {user.joinDate}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Last Active:</span> {user.lastActive}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Status:</span> {user.status}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-1 bg-transparent"
                    onClick={() => handleEditUser(user.id)}
                  >
                    <Edit className="w-3 h-3" />
                    Edit
                  </Button>
                  {user.role !== "admin" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-1 bg-transparent"
                      onClick={() => handleChangeRole(user.id)}
                    >
                      <Shield className="w-3 h-3" />
                      Change Role
                    </Button>
                  )}
                  {user.status === "active" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-1 text-yellow-600 hover:text-yellow-700 bg-transparent"
                      onClick={() => handleSuspendUser(user.id)}
                    >
                      Suspend
                    </Button>
                  )}
                  {user.status === "pending" && (
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleApproveUser(user.id)}
                    >
                      Approve
                    </Button>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-1 text-red-600 hover:text-red-700 bg-transparent"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
