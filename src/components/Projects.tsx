export default function Projects() {
  return (
    <section className="px-6 py-24 text-white">
      <div className="max-w-6xl">

        <h2 className="text-4xl md:text-6xl font-semibold mb-16 tracking-[-0.03em]">
          Selected Work
        </h2>

        <div className="space-y-16">

          {/* PressClubs */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              PressClubs.tv — Multilingual Platform Architecture
            </h3>

            <p className="text-white/60 max-w-3xl leading-[1.6]">
              Re-architected a 3-language WordPress platform to improve content
              separation, platform stability and visual consistency. Led both
              CMS restructuring and brand direction.
            </p>

            <a
              href="https://pressclubs.tv"
              target="_blank"
              className="text-emerald-400 mt-3 inline-block"
            >
              View Project →
            </a>
          </div>

          {/* Async Race */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Async Race — Interactive SPA
            </h3>

            <p className="text-white/60 max-w-3xl leading-[1.6]">
              Built a React + TypeScript application with dynamic state
              management, race simulation and structured UI logic using Redux Toolkit.
            </p>

            <a
              href="https://async-race-pi.vercel.app/"
              target="_blank"
              className="text-emerald-400 mt-3 inline-block"
            >
              View Project →
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}