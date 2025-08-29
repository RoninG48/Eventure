import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"

export function UpcomingSchedule() {
  const upcomingEvents = [
    {
      id: 1,
      title: "AI Workshop",
      time: "07:30 PM",
      date: "Today",
      location: "CS Lab A",
      category: "technical",
      status: "confirmed",
    },
    {
      id: 2,
      title: "Cultural Fest",
      time: "11:30 PM",
      date: "Mar 20",
      location: "Main Auditorium",
      category: "cultural",
      status: "confirmed",
    },
    {
      id: 3,
      title: "Basketball Tournament",
      time: "02:30 PM",
      date: "Mar 22",
      location: "Sports Complex",
      category: "sports",
      status: "waitlist",
    },
    {
      id: 4,
      title: "Web Dev Bootcamp",
      time: "09:00 AM",
      date: "Mar 25",
      location: "Lab Complex",
      category: "technical",
      status: "waitlist",
    },
  ]

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

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          Upcoming Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="border-l-4 border-blue-600 pl-4 py-2">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-gray-900">{event.title}</h4>
                <Badge className={getStatusColor(event.status)} size="sm">
                  {event.status}
                </Badge>
              </div>
              <div className="space-y-1 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  <span>
                    {event.date} at {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3" />
                  <span>{event.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
