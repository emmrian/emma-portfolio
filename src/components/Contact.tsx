import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 text-white">
      <div className="max-w-6xl grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <Reveal>
          <div className="relative">

            {/* decorative word */}
            <div className="arapey text-[80px] md:text-[110px] leading-none text-white/5 absolute -top-10 left-0 select-none pointer-events-none">
              contact
            </div>

            <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.03em] relative z-10">
              Contacts
            </h2>

            <div className="mt-6 h-px w-16 bg-emerald-400/60" />

            <p className="text-white/40 text-sm mt-6 max-w-xs leading-[1.6]">
              Open to communication, collaboration and new opportunities.
            </p>

          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal delay={0.08}>
          <div className="flex flex-col gap-5">

            {/* EMAIL */}
            <a
              href="mailto:emmrian27@gmail.com?subject=Project%20Inquiry&body=Hi%20Emma,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0ABest,"
              className="group relative overflow-hidden rounded-xl border border-white/10 p-6 bg-white/2 transition duration-300 hover:border-emerald-400/40 hover:bg-white/4"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-emerald-400/4" />

              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                Email
              </p>

              <p className="text-white text-lg font-medium group-hover:text-emerald-400 transition">
                emmrian27@gmail.com →
              </p>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/emma-grig"
              target="_blank"
              className="group relative overflow-hidden rounded-xl border border-white/10 p-6 bg-white/2 transition duration-300 hover:border-emerald-400/40 hover:bg-white/4"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-emerald-400/4" />

              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                LinkedIn
              </p>

              <p className="text-white text-lg font-medium group-hover:text-emerald-400 transition">
                linkedin.com/in/emma-grig →
              </p>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/emmrian"
              target="_blank"
              className="group relative overflow-hidden rounded-xl border border-white/10 p-6 bg-white/2 transition duration-300 hover:border-emerald-400/40 hover:bg-white/4"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-emerald-400/4" />

              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                GitHub
              </p>

              <p className="text-white text-lg font-medium group-hover:text-emerald-400 transition">
                github.com/emmrian →
              </p>
            </a>

            {/* BEHANCE */}
            <a
              href="https://behance.net/emmrian"
              target="_blank"
              className="group relative overflow-hidden rounded-xl border border-white/10 p-6 bg-white/2 transition duration-300 hover:border-emerald-400/40 hover:bg-white/4"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-emerald-400/4" />

              <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                Behance
              </p>

              <p className="text-white text-lg font-medium group-hover:text-emerald-400 transition">
                behance.net/emmrian →
              </p>
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  )
}