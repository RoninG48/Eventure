import { Navigation } from "@/components/navigation"
import GalleryGrid from "@/components/gallery/gallery-grid"

export const metadata = {
  title: "Gallery • Eventure",
  description: "Relive moments from events, workshops, and activities around campus.",
}

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
        <Navigation />
      <section className="w-full bg-[#1341A9] text-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-2xl">
            <h1 className="text-pretty text-4xl font-semibold leading-tight md:text-5xl">
              Campus{" "}
              <span className="inline-block rounded px-1.5 py-0.5 text-black" style={{ backgroundColor: "#FDC700" }}>
                Gallery
              </span>
            </h1>
            <p className="mt-4 max-w-xl leading-relaxed text-white/90">
              Photos from technical workshops, cultural fests, sports meets, and academic seminars—captured across
              Christ University.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <GalleryGrid />
      </section>
    </main>
  )
}
