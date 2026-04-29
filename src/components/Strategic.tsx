export default function Strategic() {
  return (
    <section className="px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Title */}
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]">
            What I Bring
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">

          {[
            {
              title: 'Brand Awareness',
              text: 'Understanding how design decisions connect to positioning, perception and business identity.',
            },
            {
              title: 'System Thinking',
              text: 'Building structured, scalable interfaces — from multilingual logic to UI architecture.',
            },
            {
              title: 'Design Foundation',
              text: 'Strong sense of visual hierarchy, spacing and clarity from a branding background.',
            },
            {
              title: 'Continuous Growth',
              text: 'Actively developing in React, TypeScript and Python to expand into full system thinking.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-emerald-400/40 hover:bg-white/[0.04]"
            >
              {/* subtle glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl bg-emerald-400/5 blur-xl" />
              </div>

              <h3 className="text-lg font-medium text-white mb-3">
                {item.title}
              </h3>

              <p className="text-white/60 leading-[1.7] text-sm">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}