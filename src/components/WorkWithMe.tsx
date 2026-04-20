export default function WorkWithMe() {
  return (
    <section className="px-6 py-24 text-white">
      <div className="max-w-6xl">


        {/* TITLE */}
        <h2 className="text-4xl md:text-6xl font-semibold mb-10 tracking-[-0.03em]">
          Work With Me
        </h2>

        {/* INTRO */}
        <p className="text-white/60 max-w-2xl mb-14 leading-[1.6] text-lg">
          I’m open to frontend roles, brand identity projects and collaborations focused on clear,
          well-designed digital products. You can explore my tech and design work through the links below.
        </p>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* FRONTEND */}
          <div className="group border border-white/10 p-6 rounded-xl transition hover:border-emerald-400/40 hover:bg-white/2">
            <p className="text-xs text-white/40 mb-3 uppercase tracking-[0.2em]">
              SERVICE
            </p>
            <h3 className="text-lg font-semibold mb-3">
              Premium Frontend Presence
            </h3>
            <p className="text-white/60 leading-[1.6]">
              High-end single-page websites and interfaces built with clarity,
              structure and refined visual direction.
            </p>
          </div>

          {/* BRAND */}
          <div className="group border border-white/10 p-6 rounded-xl transition hover:border-emerald-400/40 hover:bg-white/2">
            <p className="text-xs text-white/40 mb-3 uppercase tracking-[0.2em]">
              SERVICE
            </p>
            <h3 className="text-lg font-semibold mb-3">
              Brand-to-Platform Sprint
            </h3>
            <p className="text-white/60 leading-[1.6]">
              From brand identity to a structured digital product - aligning
              design, content and frontend into one cohesive system.
            </p>
          </div>

          {/* ARCHITECTURE */}
          <div className="group border border-white/10 p-6 rounded-xl transition hover:border-emerald-400/40 hover:bg-white/2">
            <p className="text-xs text-white/40 mb-3 uppercase tracking-[0.2em]">
              SERVICE
            </p>
            <h3 className="text-lg font-semibold mb-3">
              Architecture
            </h3>
            <p className="text-white/60 leading-[1.6]">
              Clean, scalable architecture for multilingual platforms and CMS
              systems - designed for clarity and long-term use.
            </p>
          </div>

        </div>

        {/* FOOTNOTE */}
        <p className="mt-14 text-white/50 max-w-2xl leading-[1.6]">
          Based in Yerevan - available for remote work worldwide.
        </p>

      </div>
    </section>
  )
}