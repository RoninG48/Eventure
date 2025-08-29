"use client"

import { Button } from "@/components/ui/button"
import { Settings, Users, BarChart3 } from "lucide-react"
import { useRouter } from "next/navigation"

export function AdminHeader() {
  const router = useRouter()

  const handleReportsClick = () => {
    console.log("[v0] Navigating to reports")
    router.push("/dashboard/admin/reports")
  }

  const handleUsersClick = () => {
    console.log("[v0] Navigating to user management")
    router.push("/dashboard/admin/users")
  }

  const handleSettingsClick = () => {
    console.log("[v0] Navigating to system settings")
    router.push("/dashboard/admin/settings")
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">Manage events, users, and system settings</p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" className="flex items-center gap-2 bg-transparent" onClick={handleReportsClick}>
          <BarChart3 className="w-4 h-4" />
          Reports
        </Button>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent" onClick={handleUsersClick}>
          <Users className="w-4 h-4" />
          User Management
        </Button>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent" onClick={handleSettingsClick}>
          <Settings className="w-4 h-4" />
          System Settings
        </Button>
      </div>
    </div>
  )
}
