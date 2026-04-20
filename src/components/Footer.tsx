import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-24 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/2 px-8 py-10 md:px-12 md:py-14">

            {/* glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-white/3 blur-3xl" />

            <div className="relative z-10 grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">

              {/* LEFT */}
              <div>
                <p className="mb-4 text-sm uppercase tracking-[0.24em] text-white/35">
                  Emma Grigoryan
                </p>

                <h3 className="max-w-3xl text-3xl font-semibold leading-[1.02] tracking-[-0.03em] md:text-5xl">
                  Building{' '}
                  <span className="arapey text-emerald-400 text-[1.2em] font-normal">
                    digital systems
                  </span>{' '}
                  with structure, clarity and visual intention.
                </h3>
              </div>

              {/* RIGHT */}
              <div className="space-y-3 md:text-right">
                <a
                  href="mailto:emmrian27@gmail.com?subject=Project%20Inquiry&body=Hi%20Emma,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0ABest,"
                  className="block text-white/70 transition hover:text-emerald-400"
                >
                  emmrian27@gmail.com
                </a>

                <a
                  href="https://linkedin.com/in/emma-grig"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-white/70 transition hover:text-emerald-400"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/emmrian"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-white/70 transition hover:text-emerald-400"
                >
                  GitHub
                </a>

                <a
                  href="https://behance.net/emmrian"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-white/70 transition hover:text-emerald-400"
                >
                  Behance
                </a>
              </div>
            </div>

            {/* bottom line */}
            <div className="relative z-10 mt-10 border-t border-white/10 pt-5">
              <div className="flex flex-col gap-2 text-sm text-white/35 md:flex-row md:items-center md:justify-between">
                <p>Frontend Developer · Brand & Digital Systems · Yerevan</p>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </footer>
  )
}