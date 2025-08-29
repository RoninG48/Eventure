"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, MapPin, Users, Eye, CalendarPlus, X } from "lucide-react"
import { useState } from "react"

export function RegisteredEvents() {
  const [registeredEvents, setRegisteredEvents] = useState([
    {
      id: 1,
      title: "AI & Machine Learning Workshop",
      organizer: "Tech Club",
      date: "Fri, Mar 15, 07:30 PM",
      location: "Computer Science Lab A",
      category: "technical",
      status: "confirmed",
      attendees: "42/50",
      description: "Learn AI fundamentals with hands-on coding sessions.",
      fullDescription:
        "This comprehensive workshop covers machine learning algorithms, neural networks, and practical AI applications. Participants will work on real projects using Python and TensorFlow.",
      requirements: "Laptop with Python installed, Basic programming knowledge",
      contactEmail: "techclub@christuniversity.in",
    },
    {
      id: 2,
      title: "Annual Cultural Fest - Expressions 2024",
      organizer: "Cultural Committee",
      date: "Wed, Mar 20, 11:30 PM",
      location: "Main Auditorium",
      category: "cultural",
      status: "confirmed",
      attendees: "387/500",
      description: "Evening of music, dance, drama, and art performances.",
      fullDescription:
        "Join us for a spectacular evening showcasing the diverse talents of our students through music, dance, drama, and visual arts.",
      requirements: "No special requirements, just bring your enthusiasm!",
      contactEmail: "cultural@christuniversity.in",
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      organizer: "Coding Society",
      date: "Mon, Mar 25, 09:00 AM",
      location: "Lab Complex",
      category: "technical",
      status: "waitlist",
      attendees: "28/30",
      description: "3-day intensive bootcamp on modern web technologies.",
      fullDescription:
        "Learn HTML5, CSS3, JavaScript, React, and Node.js in this intensive 3-day bootcamp with hands-on projects.",
      requirements: "Laptop, Code editor, Basic HTML/CSS knowledge",
      contactEmail: "coding@christuniversity.in",
    },
  ])

  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [showDetailsModal, setShowDetailsModal] = useState(false)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "waitlist":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "technical":
        return "bg-blue-100 text-blue-800"
      case "cultural":
        return "bg-purple-100 text-purple-800"
      case "sports":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleViewDetails = (eventId: number) => {
    const event = registeredEvents.find((e) => e.id === eventId)
    setSelectedEvent(event)
    setShowDetailsModal(true)
    console.log(`[v0] Viewing details for event ${eventId}`)
  }

  const handleAddToCalendar = (eventId: number) => {
    const event = registeredEvents.find((e) => e.id === eventId)
    console.log(`[v0] Adding event ${eventId} to calendar`)
    alert(`Event "${event?.title}" added to your calendar!`)
  }

  const handleCancelRegistration = (eventId: number) => {
    const event = registeredEvents.find((e) => e.id === eventId)
    if (confirm(`Are you sure you want to cancel your registration for "${event?.title}"?`)) {
      setRegisteredEvents(registeredEvents.filter((e) => e.id !== eventId))
      console.log(`[v0] Cancelled registration for event ${eventId}`)
      alert("Registration cancelled successfully!")
    }
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">My Registered Events</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {registeredEvents.map((event) => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{event.title}</h3>
                    <p className="text-sm text-gray-600">by {event.organizer}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                    <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{event.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                    <span>{event.attendees} registered</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-1 bg-transparent"
                    onClick={() => handleViewDetails(event.id)}
                  >
                    <Eye className="w-3 h-3" />
                    View Details
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-1 bg-transparent"
                    onClick={() => handleAddToCalendar(event.id)}
                  >
                    <CalendarPlus className="w-3 h-3" />
                    Add to Calendar
                  </Button>
                  {event.status === "confirmed" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 hover:text-red-700 bg-transparent flex items-center gap-1"
                      onClick={() => handleCancelRegistration(event.id)}
                    >
                      <X className="w-3 h-3" />
                      Cancel Registration
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={showDetailsModal} onOpenChange={setShowDetailsModal}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Event Details</DialogTitle>
          </DialogHeader>
          {selectedEvent && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">{selectedEvent.title}</h3>
                <p className="text-sm text-gray-600">by {selectedEvent.organizer}</p>
                <Badge className={getStatusColor(selectedEvent.status)} variant="secondary">
                  {selectedEvent.status}
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-medium">Date & Time</p>
                  <p className="text-sm">{selectedEvent.date}</p>
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm">{selectedEvent.location}</p>
                </div>
                <div>
                  <p className="font-medium">Attendees</p>
                  <p className="text-sm">{selectedEvent.attendees}</p>
                </div>
                <div>
                  <p className="font-medium">Category</p>
                  <Badge className={getCategoryColor(selectedEvent.category)}>{selectedEvent.category}</Badge>
                </div>
              </div>

              <div>
                <p className="font-medium">Description</p>
                <p className="text-sm mt-1">{selectedEvent.fullDescription}</p>
              </div>

              <div>
                <p className="font-medium">Requirements</p>
                <p className="text-sm mt-1">{selectedEvent.requirements}</p>
              </div>

              <div>
                <p className="font-medium">Contact</p>
                <p className="text-sm mt-1">{selectedEvent.contactEmail}</p>
              </div>

              <div className="flex gap-2 pt-4">
                <Button className="flex items-center gap-2" onClick={() => handleAddToCalendar(selectedEvent.id)}>
                  <CalendarPlus className="w-4 h-4" />
                  Add to Calendar
                </Button>
                {selectedEvent.status === "confirmed" && (
                  <Button
                    variant="outline"
                    className="text-red-600 hover:text-red-700 bg-transparent flex items-center gap-2"
                    onClick={() => {
                      handleCancelRegistration(selectedEvent.id)
                      setShowDetailsModal(false)
                    }}
                  >
                    <X className="w-4 h-4" />
                    Cancel Registration
                  </Button>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
