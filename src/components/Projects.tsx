export default function Projects() {
  return (
    <section className="px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Title */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-semibold mb-20 tracking-[-0.03em]">
            Selected Work
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-20 max-w-3xl">

          {/* PressClubs */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              PressClubs.tv — Multilingual Platform Architecture
            </h3>

            <p className="text-white/60 leading-[1.7] mb-4">
              Re-architected a 3-language WordPress platform to improve content
              separation, platform stability and visual consistency. Led both
              CMS restructuring and brand direction.
            </p>

            <a
              href="https://pressclubs.tv"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 text-sm transition hover:underline"
            >
              View Project →
            </a>
          </div>

          {/* Async Race */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              Async Race — Interactive SPA
            </h3>

            <p className="text-white/60 leading-[1.7] mb-4">
              Built a React + TypeScript application with dynamic state
              management, race simulation and structured UI logic using Redux Toolkit.
            </p>

            <a
              href="https://async-race-pi.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 text-sm transition hover:underline"
            >
              View Project →
            </a>
          </div>

          {/* SUNSPA */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">
              SUNSPA Lounge — Brand Identity and Frontend Presence
            </h3>

            <p className="text-white/60 leading-[1.7] mb-4">
              Live website built from brand direction and visual system into a functional frontend experience.
            </p>

            <a
              href="https://sunspalounge.com/"
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 text-sm transition hover:underline"
            >
              View Project →
            </a>
          </div>

        </div>

        {/* FINAL LINE */}
        <div className="mt-16 max-w-3xl">
          <p className="text-white/70 text-base leading-[1.6]">
            <span className="font-semibold text-white">
              Explore more work
            </span>{' '}
            — see GitHub and Behance links below.
          </p>
        </div>

      </div>
    </section>
  )
}