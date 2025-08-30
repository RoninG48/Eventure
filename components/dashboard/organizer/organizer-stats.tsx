import { Card, CardContent } from "@/components/ui/card"
import { CalendarCheck, Clock, Users, CheckCircle } from "lucide-react"

export function OrganizerStats() {
  const stats = [
    {
      icon: CalendarCheck,
      value: "15",
      label: "Total Events",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Clock,
      value: "3",
      label: "Events Pending",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      icon: Users,
      value: "1,247",
      label: "Total Registrations",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: CheckCircle,
      value: "12",
      label: "Events Approved",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-2">
              <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
