export default function About() {
  return (
    <section className="px-6 py-28 text-white">
      <div className="mx-auto max-w-6xl">

        {/* Title */}
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] leading-[1.05]">
            More than frontend —{' '}
            <span className="arapey text-white text-5xl md:text-7xl font-normal">
              a structured perspective
            </span>
          </h2>
        </div>

        {/* Content shifted right */}
        <div className="mt-16 grid md:grid-cols-[0.8fr_1fr]">
          
          {/* empty spacer (creates asymmetry) */}
          <div className="hidden md:block" />

          {/* actual text */}
          <div className="space-y-6 text-white/70 text-lg leading-[1.7] font-light">
            
            <p>
              I approach frontend development as a bridge between business strategy,
              brand identity and technical execution. My background in Advertising
              and Public Relations shapes how I think about structure, perception
              and user experience.
            </p>

            <p>
              Before focusing on frontend, I worked with brand identity, logo design
              and visual systems. That experience continues to influence how I build
              interfaces — with clarity, hierarchy and intention.
            </p>

            <p>
              I’ve worked on multilingual platforms, including re-architecting a
              3-language WordPress CMS for better structure and stability. I also
              build interactive frontend applications using React, TypeScript and
              modern development tools.
            </p>

            <p>
              Alongside frontend, I have developed a foundation in Python to deepen my
              understanding of backend logic and system-level thinking.
            </p>

          </div>

        </div>
      </div>
    </section>
  )
}