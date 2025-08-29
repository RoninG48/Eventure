import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"

interface VenueCalendarProps {
  venueId: string
}

export function VenueCalendar({ venueId }: VenueCalendarProps) {
  const bookings = [
    {
      id: 1,
      eventName: "AI Workshop",
      date: "Mar 15, 2024",
      time: "07:30 PM - 09:30 PM",
      organizer: "Tech Club",
      status: "confirmed",
      attendees: 42,
    },
    {
      id: 2,
      eventName: "Cultural Performance",
      date: "Mar 18, 2024",
      time: "06:00 PM - 08:00 PM",
      organizer: "Cultural Committee",
      status: "confirmed",
      attendees: 156,
    },
    {
      id: 3,
      eventName: "Guest Lecture",
      date: "Mar 22, 2024",
      time: "02:00 PM - 04:00 PM",
      organizer: "Academic Department",
      status: "pending",
      attendees: 89,
    },
    {
      id: 4,
      eventName: "Graduation Ceremony",
      date: "Mar 28, 2024",
      time: "10:00 AM - 02:00 PM",
      organizer: "Administration",
      status: "confirmed",
      attendees: 450,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          Booking Calendar
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm text-gray-600 mb-4">
            <p>Showing upcoming bookings for this venue</p>
          </div>

          {bookings.map((booking) => (
            <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">{booking.eventName}</h4>
                  <p className="text-sm text-gray-600">by {booking.organizer}</p>
                </div>
                <Badge className={getStatusColor(booking.status)} size="sm">
                  {booking.status}
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  <span>{booking.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  <span>{booking.time}</span>
                </div>
              </div>

              <div className="mt-2 text-sm text-gray-600">
                <span className="font-medium">Expected Attendees:</span> {booking.attendees}
              </div>
            </div>
          ))}

          <div className="text-center pt-4">
            <Button variant="outline" size="sm" className="bg-transparent">
              View Full Calendar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
