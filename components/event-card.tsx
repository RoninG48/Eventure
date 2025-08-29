"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface Event {
  id: number
  title: string
  organizer: string
  description: string
  date: string
  location: string
  registered: number
  capacity: number
  deadline: string
  category: string
  status?: string
}

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const [isRegistering, setIsRegistering] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const router = useRouter()

  const handleRegister = async () => {
    setIsRegistering(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsRegistered(true)
    setIsRegistering(false)
    // Show success message or redirect
    console.log(`[v0] Registered for event: ${event.title}`)
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "technical":
        return "bg-yellow-500"
      case "cultural":
        return "bg-yellow-500"
      case "sports":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusColor = (status?: string) => {
    if (status === "Few spots left!") {
      return "bg-orange-500"
    }
    return "bg-green-500"
  }

  const progressPercentage = (event.registered / event.capacity) * 100

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white relative">
        <div className="flex gap-2 mb-4">
          <Badge className={`${getCategoryColor(event.category)} text-black font-medium`}>{event.category}</Badge>
          {event.status && (
            <Badge className={`${getStatusColor(event.status)} text-white font-medium`}>{event.status}</Badge>
          )}
        </div>
        <h3 className="text-xl font-bold mb-2 text-balance">{event.title}</h3>
        <p className="text-blue-100 text-sm">by {event.organizer}</p>
      </div>

      <CardContent className="p-6">
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.description}</p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-blue-600" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users className="w-4 h-4 text-blue-600" />
            <span>
              {event.registered}/{event.capacity} registered
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>Deadline: {event.deadline}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${progressPercentage}%` }} />
          </div>
        </div>

        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
          onClick={handleRegister}
          disabled={isRegistering || isRegistered}
        >
          {isRegistering ? "Registering..." : isRegistered ? "Registered ✓" : "Register Now"}
        </Button>
      </CardContent>
    </Card>
  )
}
