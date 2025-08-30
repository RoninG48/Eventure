import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, CheckCircle } from "lucide-react"

export function StudentStats() {
  const stats = [
    {
      icon: Calendar,
      value: "5",
      label: "Registered Events",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Clock,
      value: "3",
      label: "Upcoming This Week",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      icon: CheckCircle,
      value: "12",
      label: "Events Attended",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 justify-center">
              <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 text-center">{stat.value}</p>
                <p className="text-sm text-gray-600 text-center">{stat.label}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
