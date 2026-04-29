export default function WorkWithMe() {
  return (
    <section className="px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">

        {/* TITLE */}
        <h2 className="text-4xl md:text-6xl font-semibold mb-10 tracking-[-0.03em]">
          Work With Me
        </h2>

        {/* INTRO */}
        <p className="text-white/60 max-w-2xl mb-14 leading-[1.7] text-lg">
          I’m open to frontend roles, brand identity projects and collaborations focused on clear,
          well-designed digital products.
        </p>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* FRONTEND */}
          <div className="group border border-white/10 p-6 rounded-xl transition hover:border-emerald-400/40 hover:bg-white/[0.02]">
            <p className="text-xs text-white/40 mb-3 uppercase tracking-[0.2em]">
              Service
            </p>
            <h3 className="text-lg font-semibold mb-3">
              Frontend Presence
            </h3>
            <p className="text-white/60 leading-[1.7]">
              Websites and interfaces built with clarity, structure and refined visual direction.
            </p>
          </div>

          {/* BRAND */}
          <div className="group border border-white/10 p-6 rounded-xl transition hover:border-emerald-400/40 hover:bg-white/[0.02]">
            <p className="text-xs text-white/40 mb-3 uppercase tracking-[0.2em]">
              Service
            </p>
            <h3 className="text-lg font-semibold mb-3">
              Brand Identity
            </h3>
            <p className="text-white/60 leading-[1.7]">
              Logo design, brand concept, full branding.
            </p>
          </div>

          {/* COMBINED */}
          <div className="group border border-white/10 p-6 rounded-xl transition hover:border-emerald-400/40 hover:bg-white/[0.02]">
            <p className="text-xs text-white/40 mb-3 uppercase tracking-[0.2em]">
              Service
            </p>
            <h3 className="text-lg font-semibold mb-3">
              Brand-to-Platform
            </h3>
            <p className="text-white/60 leading-[1.7]">
              From brand identity to a structured digital product — aligning design, content and frontend into one cohesive system.
            </p>
          </div>

        </div>

        {/* FOOTNOTE */}
        <p className="mt-16 text-white/50 max-w-2xl leading-[1.6]">
          Based in Yerevan — available for remote work worldwide.
        </p>

      </div>
    </section>
  )
}