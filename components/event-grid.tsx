import { EventCard } from "@/components/event-card"

export function EventGrid() {
  const events = [
    {
      id: 1,
      title: "AI & Machine Learning Workshop",
      organizer: "Tech Club",
      description:
        "Learn the fundamentals of AI and ML with hands-on coding sessions. Perfect for beginners and intermediate developers.",
      date: "Fri, Mar 15, 07:30 PM",
      location: "Computer Science Lab A",
      registered: 42,
      capacity: 50,
      deadline: "15/03/2024",
      category: "technical",
      status: "Few spots left!",
    },
    {
      id: 2,
      title: "Annual Cultural Fest - Expressions 2024",
      organizer: "Cultural Committee",
      description:
        "Join us for a spectacular evening of music, dance, drama, and art performances by talented students.",
      date: "Wed, Mar 20, 11:30 PM",
      location: "Main Auditorium",
      registered: 387,
      capacity: 500,
      deadline: "19/03/2024",
      category: "cultural",
    },
    {
      id: 3,
      title: "Inter-College Basketball Tournament",
      organizer: "Sports Committee",
      description:
        "Compete with the best teams from colleges across the city. Registration includes team organization.",
      date: "Fri, Mar 22, 02:30 PM",
      location: "Sports Complex",
      registered: 14,
      capacity: 16,
      deadline: "21/03/2024",
      category: "sports",
      status: "Few spots left!",
    },
    {
      id: 4,
      title: "Web Development Bootcamp",
      organizer: "Coding Society",
      description: "Intensive 3-day bootcamp covering modern web development technologies and frameworks.",
      date: "Mon, Mar 25, 09:00 AM",
      location: "Lab Complex",
      registered: 28,
      capacity: 30,
      deadline: "23/03/2024",
      category: "technical",
      status: "Few spots left!",
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-gray-600">{events.length} events found</p>
        <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
          <option>Sort: Upcoming</option>
          <option>Sort: Popular</option>
          <option>Sort: Deadline</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}
