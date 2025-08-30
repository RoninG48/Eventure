"use client"

import * as React from "react"

/*
Color palette used (exactly 4 colors total):
- Brand Blue: #1341A9
- Accent Yellow: #FDC700
- White: #FFFFFF
- Neutral Near-Black: #111827
*/

type Category = "All" | "Technical" | "Cultural" | "Sports" | "Academic" | "Workshop"

type ImageItem = {
  id: string
  title: string
  category: Exclude<Category, "All">
  date: string
  src: string
  width: number
  height: number
}

const CATEGORIES: Category[] = ["All", "Technical", "Cultural", "Sports", "Academic", "Workshop"]

// You can replace src with your real image paths in /public
const ITEMS: ImageItem[] = [
  {
    id: "1",
    title: "AI & ML Workshop",
    category: "Technical",
    date: "2024-03-15",
    src: "/students-coding-workshop.png",
    width: 960,
    height: 720,
  },
  {
    id: "2",
    title: "Cultural Fest Stage",
    category: "Cultural",
    date: "2024-03-20",
    src: "/stage-performance-lights.png",
    width: 960,
    height: 720,
  },
  {
    id: "3",
    title: "Basketball Tournament",
    category: "Sports",
    date: "2024-03-22",
    src: "/college-basketball-game.png",
    width: 960,
    height: 720,
  },
  {
    id: "4",
    title: "Robotics Demo",
    category: "Technical",
    date: "2024-02-05",
    src: "/robotics-closeup.png",
    width: 720,
    height: 960,
  },
  {
    id: "5",
    title: "Folk Dance Night",
    category: "Cultural",
    date: "2024-01-28",
    src: "/folk-dance-performance.png",
    width: 720,
    height: 960,
  },
  {
    id: "6",
    title: "Athletics Meet",
    category: "Sports",
    date: "2024-02-12",
    src: "/track-and-field-university.png",
    width: 960,
    height: 720,
  },
  {
    id: "7",
    title: "Academic Seminar",
    category: "Academic",
    date: "2024-02-20",
    src: "/lecture-hall-seminar.png",
    width: 960,
    height: 720,
  },
  {
    id: "8",
    title: "Project Showcase",
    category: "Workshop",
    date: "2024-03-02",
    src: "/student-project-posters.png",
    width: 720,
    height: 960,
  },
  {
    id: "9",
    title: "Music Night",
    category: "Cultural",
    date: "2024-02-10",
    src: "/university-music-night-stage.png",
    width: 960,
    height: 720,
  },
  {
    id: "10",
    title: "Coding Sprint",
    category: "Technical",
    date: "2024-01-18",
    src: "/coding-sprint-hackathon.png",
    width: 960,
    height: 720,
  },
  {
    id: "11",
    title: "Basketball Finals",
    category: "Sports",
    date: "2024-03-24",
    src: "/team-trophy-celebration.png",
    width: 720,
    height: 960,
  },
  {
    id: "12",
    title: "Paper Presentations",
    category: "Academic",
    date: "2024-03-08",
    src: "/panel-discussion-research.png",
    width: 960,
    height: 720,
  },
]

export default function GalleryGrid() {
  const [active, setActive] = React.useState<Category>("All")
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null)

  const filtered = React.useMemo(
    () => (active === "All" ? ITEMS : ITEMS.filter((i) => i.category === active)),
    [active],
  )

  const open = (idx: number) => setLightboxIndex(idx)
  const close = () => setLightboxIndex(null)

  const showPrev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + filtered.length) % filtered.length))
  }
  const showNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filtered.length))
  }

  // Keyboard navigation for lightbox
  React.useEffect(() => {
    if (lightboxIndex === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIndex, filtered.length])

  return (
    <div className="flex flex-col gap-8">
      {/* Controls */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const selected = active === cat
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  selected ? "text-black" : "text-[#111827]"
                }`}
                style={{
                  backgroundColor: selected ? "#FDC700" : "#FFFFFF",
                  borderColor: selected ? "#FDC700" : "rgba(0,0,0,0.1)",
                }}
                aria-pressed={selected}
              >
                {cat}
              </button>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <button
            className="rounded-md px-4 py-2 text-sm font-medium text-white"
            style={{ backgroundColor: "#1341A9" }}
          >
            Upload Photo
          </button>
          <button
            className="rounded-md border px-4 py-2 text-sm font-medium"
            style={{
              borderColor: "rgba(0,0,0,0.1)",
              color: "#111827",
              backgroundColor: "#FFFFFF",
            }}
          >
            Download All
          </button>
        </div>
      </div>

      {/* Grid */}
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {filtered.map((item, idx) => (
          <li key={item.id} className="group relative overflow-hidden rounded-lg">
            <button
              onClick={() => open(idx)}
              className="block w-full focus:outline-none"
              aria-label={`Open ${item.title}`}
            >
              <img
                src={item.src || "/placeholder.svg?height=720&width=960&query=event%20photo"}
                alt={`${item.title} (${item.category})`}
                width={item.width}
                height={item.height}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
              {/* Hover overlay */}
              <div
                className="pointer-events-none absolute inset-0 flex flex-col justify-end p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
              >
                <div className="flex flex-col gap-1">
                  <span
                    className="inline-flex w-fit rounded px-2 py-0.5 text-xs font-semibold text-black"
                    style={{ backgroundColor: "#FDC700" }}
                  >
                    {item.category}
                  </span>
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="text-xs text-white/80">{new Date(item.date).toLocaleDateString()}</p>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox items={filtered} index={lightboxIndex} onClose={close} onPrev={showPrev} onNext={showNext} />
      )}
    </div>
  )
}

function Lightbox({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: ImageItem[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const item = items[index]

  // Prevent background scroll while modal is open
  React.useEffect(() => {
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [])

  return (
    <div role="dialog" aria-modal="true" aria-label={`${item.title} preview`} className="fixed inset-0 z-50">
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.6)" }} onClick={onClose} />
      <div className="absolute inset-0 mx-auto flex max-w-5xl items-center justify-center px-4">
        <div className="relative w-full rounded-lg bg-white p-2 md:p-4">
          <div
            className="flex items-center justify-between gap-3 border-b pb-2"
            style={{ borderColor: "rgba(0,0,0,0.1)" }}
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold" style={{ color: "#111827" }}>
                {item.title}
              </p>
              <p className="text-xs" style={{ color: "rgba(17,24,39,0.7)" }}>
                {item.category} · {new Date(item.date).toLocaleDateString()}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                onClick={onPrev}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-white"
                style={{ backgroundColor: "#1341A9" }}
                aria-label="Previous image"
              >
                Prev
              </button>
              <button
                onClick={onNext}
                className="rounded-md px-3 py-1.5 text-sm font-medium text-white"
                style={{ backgroundColor: "#1341A9" }}
                aria-label="Next image"
              >
                Next
              </button>
              <button
                onClick={onClose}
                className="rounded-md border px-3 py-1.5 text-sm font-medium"
                style={{
                  borderColor: "rgba(0,0,0,0.1)",
                  color: "#111827",
                  backgroundColor: "#FFFFFF",
                }}
                aria-label="Close"
              >
                Close
              </button>
            </div>
          </div>
          <div className="mt-3">
            <img
              src={item.src || "/placeholder.svg?height=720&width=960&query=event%20photo"}
              alt={`${item.title} large`}
              width={item.width}
              height={item.height}
              className="mx-auto h-auto max-h-[70vh] w-full rounded object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
