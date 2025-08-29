"use client"

import { Button } from "@/components/ui/button"
import { Plus, Calendar, Settings } from "lucide-react"
import { useRouter } from "next/navigation"

export function OrganizerHeader() {
  const router = useRouter()

  const handleCreateEvent = () => {
    console.log("[v0] Navigating to create event page")
    router.push("/dashboard/organizer/create-event")
  }

  const handleEventCalendar = () => {
    console.log("[v0] Opening event calendar")
    // For now, show alert - could be implemented as a modal or separate page
    alert("Event calendar feature coming soon!")
  }

  const handleSettings = () => {
    console.log("[v0] Navigating to organizer settings")
    router.push("/dashboard/organizer/settings")
  }

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Organizer Dashboard</h1>
        <p className="text-gray-600 mt-1">Manage your events, venues, and registrations</p>
      </div>
      <div className="flex gap-3">
        <Button variant="outline" className="flex items-center gap-2 bg-transparent" onClick={handleEventCalendar}>
          <Calendar className="w-4 h-4" />
          Event Calendar
        </Button>
        <Button variant="outline" className="flex items-center gap-2 bg-transparent" onClick={handleSettings}>
          <Settings className="w-4 h-4" />
          Settings
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2" onClick={handleCreateEvent}>
          <Plus className="w-4 h-4" />
          Create Event
        </Button>
      </div>
    </div>
  )
}
