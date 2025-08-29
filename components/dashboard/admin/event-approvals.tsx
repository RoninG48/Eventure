"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Calendar, MapPin, Users, Clock, Check, X, Eye, MessageSquare } from "lucide-react"
import { useState } from "react"

export function EventApprovals() {
  const [pendingEvents, setPendingEvents] = useState([
    {
      id: 1,
      title: "Web Development Bootcamp",
      organizer: "Coding Society",
      submittedBy: "John Doe",
      date: "Mon, Mar 25, 09:00 AM",
      venue: "Lab Complex",
      category: "technical",
      capacity: 30,
      registrationFee: "₹500",
      submittedDate: "Mar 10, 2024",
      priority: "high",
      description: "3-day intensive bootcamp covering modern web development technologies and frameworks.",
      fullDescription:
        "This comprehensive 3-day bootcamp will cover HTML5, CSS3, JavaScript ES6+, React.js, Node.js, and MongoDB. Participants will build real-world projects and learn industry best practices. Prerequisites: Basic programming knowledge. Materials: Laptop required.",
      requirements: "Laptop with minimum 8GB RAM, Code editor installed",
      contactEmail: "john.doe@christuniversity.in",
      expectedAttendees: 25,
    },
    {
      id: 2,
      title: "Photography Workshop",
      organizer: "Art Club",
      submittedBy: "Sarah Wilson",
      date: "Thu, Mar 28, 02:00 PM",
      venue: "Art Studio",
      category: "cultural",
      capacity: 25,
      registrationFee: "₹300",
      submittedDate: "Mar 12, 2024",
      priority: "medium",
      description: "Learn professional photography techniques and photo editing skills.",
      fullDescription:
        "A workshop focused on teaching professional photography skills and photo editing using Adobe Lightroom and Photoshop.",
      requirements: "DSLR camera, Basic knowledge of photography",
      contactEmail: "sarah.wilson@christuniversity.in",
      expectedAttendees: 15,
    },
    {
      id: 3,
      title: "Startup Pitch Competition",
      organizer: "Entrepreneurship Cell",
      submittedBy: "Mike Johnson",
      date: "Sat, Mar 30, 10:00 AM",
      venue: "Main Auditorium",
      category: "academic",
      capacity: 200,
      registrationFee: "₹100",
      submittedDate: "Mar 8, 2024",
      priority: "high",
      description: "Students present their startup ideas to a panel of industry experts.",
      fullDescription:
        "An opportunity for students to showcase their startup ideas and receive feedback from industry experts.",
      requirements: "Pitch deck prepared, Business plan ready",
      contactEmail: "mike.johnson@christuniversity.in",
      expectedAttendees: 100,
    },
  ])

  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [feedbackText, setFeedbackText] = useState("")
  const [showDetailsModal, setShowDetailsModal] = useState(false)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
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
      case "academic":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleViewDetails = (eventId: number) => {
    const event = pendingEvents.find((e) => e.id === eventId)
    setSelectedEvent(event)
    setShowDetailsModal(true)
    console.log(`[v0] Viewing details for event ${eventId}`)
  }

  const handleApprove = (eventId: number) => {
    if (confirm("Are you sure you want to approve this event?")) {
      setPendingEvents(pendingEvents.filter((event) => event.id !== eventId))
      console.log(`[v0] Approved event ${eventId}`)
      alert("Event approved successfully!")
    }
  }

  const handleReject = (eventId: number) => {
    if (confirm("Are you sure you want to reject this event? This action cannot be undone.")) {
      setPendingEvents(pendingEvents.filter((event) => event.id !== eventId))
      console.log(`[v0] Rejected event ${eventId}`)
      alert("Event rejected successfully!")
    }
  }

  const handleRequestChanges = (eventId: number) => {
    const event = pendingEvents.find((e) => e.id === eventId)
    setSelectedEvent(event)
    setFeedbackText("")
    setShowFeedbackModal(true)
    console.log(`[v0] Requesting changes for event ${eventId}`)
  }

  const handleSubmitFeedback = () => {
    if (!feedbackText.trim()) {
      alert("Please provide feedback before submitting.")
      return
    }

    console.log(`[v0] Submitting feedback for event ${selectedEvent?.id}: ${feedbackText}`)
    alert("Feedback sent to organizer successfully!")
    setShowFeedbackModal(false)
    setFeedbackText("")
    setSelectedEvent(null)
  }

  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl">Event Approvals</CardTitle>
            <Badge className="bg-yellow-100 text-yellow-800">{pendingEvents.length} Pending</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {pendingEvents.map((event) => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{event.title}</h3>
                      <Badge className={getPriorityColor(event.priority)}>{event.priority} priority</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">by {event.organizer}</p>
                    <p className="text-xs text-gray-500">
                      Submitted by {event.submittedBy} on {event.submittedDate}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getCategoryColor(event.category)}>{event.category}</Badge>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{event.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>Capacity: {event.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>Fee: {event.registrationFee}</span>
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
                    className="bg-green-600 hover:bg-green-700 flex items-center gap-1"
                    onClick={() => handleApprove(event.id)}
                  >
                    <Check className="w-3 h-3" />
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex items-center gap-1 text-red-600 hover:text-red-700 bg-transparent"
                    onClick={() => handleReject(event.id)}
                  >
                    <X className="w-3 h-3" />
                    Reject
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-transparent flex items-center gap-1"
                    onClick={() => handleRequestChanges(event.id)}
                  >
                    <MessageSquare className="w-3 h-3" />
                    Request Changes
                  </Button>
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
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="font-medium">Date & Time</Label>
                  <p className="text-sm">{selectedEvent.date}</p>
                </div>
                <div>
                  <Label className="font-medium">Venue</Label>
                  <p className="text-sm">{selectedEvent.venue}</p>
                </div>
                <div>
                  <Label className="font-medium">Capacity</Label>
                  <p className="text-sm">{selectedEvent.capacity} participants</p>
                </div>
                <div>
                  <Label className="font-medium">Registration Fee</Label>
                  <p className="text-sm">{selectedEvent.registrationFee}</p>
                </div>
              </div>

              <div>
                <Label className="font-medium">Full Description</Label>
                <p className="text-sm mt-1">{selectedEvent.fullDescription}</p>
              </div>

              <div>
                <Label className="font-medium">Requirements</Label>
                <p className="text-sm mt-1">{selectedEvent.requirements}</p>
              </div>

              <div>
                <Label className="font-medium">Contact</Label>
                <p className="text-sm mt-1">{selectedEvent.contactEmail}</p>
              </div>

              <div className="flex gap-2 pt-4">
                <Button
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    handleApprove(selectedEvent.id)
                    setShowDetailsModal(false)
                  }}
                >
                  Approve Event
                </Button>
                <Button
                  variant="outline"
                  className="text-red-600 hover:text-red-700 bg-transparent"
                  onClick={() => {
                    handleReject(selectedEvent.id)
                    setShowDetailsModal(false)
                  }}
                >
                  Reject Event
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowDetailsModal(false)
                    handleRequestChanges(selectedEvent.id)
                  }}
                >
                  Request Changes
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={showFeedbackModal} onOpenChange={setShowFeedbackModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Request Changes</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label className="font-medium">Event: {selectedEvent?.title}</Label>
              <p className="text-sm text-gray-600">Provide feedback for the organizer</p>
            </div>

            <div>
              <Label htmlFor="feedback">Feedback & Suggestions</Label>
              <Textarea
                id="feedback"
                placeholder="Please provide specific feedback on what needs to be changed or improved..."
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                className="mt-1"
                rows={4}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleSubmitFeedback}>Send Feedback</Button>
              <Button
                variant="outline"
                onClick={() => {
                  setShowFeedbackModal(false)
                  setFeedbackText("")
                }}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
