import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32 text-white">
      <div className="mx-auto max-w-6xl grid items-start gap-20 md:grid-cols-[0.9fr_1.1fr]">

        {/* LEFT */}
        <Reveal>
          <div className="relative">

            <div className="arapey pointer-events-none absolute -top-10 left-0 select-none text-[80px] leading-none text-white/5 md:text-[110px]">
              contact
            </div>

            <h2 className="relative z-10 text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
              Contacts
            </h2>

            <div className="mt-6 h-[1px] w-16 bg-emerald-400/60" />

            <p className="mt-6 max-w-xs text-sm leading-[1.6] text-white/40">
              Reach out via email for project inquiries and details.
            </p>
          </div>
        </Reveal>

        {/* RIGHT */}
        <Reveal delay={0.08}>
          <div className="flex flex-col gap-5 self-start">

            <a
              href="mailto:emmrian27@gmail.com?subject=Project%20Inquiry&body=Hi%20Emma,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0ABest,"
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-emerald-400/40 hover:bg-white/[0.04]"
            >
              <div className="absolute inset-0 bg-emerald-400/[0.04] opacity-0 transition group-hover:opacity-100" />
              <p className="mb-2 text-xs uppercase tracking-wider text-white/40">
                Email
              </p>
              <p className="text-lg font-medium text-white transition group-hover:text-emerald-400">
                emmrian27@gmail.com →
              </p>
            </a>

            <a
              href="https://linkedin.com/in/emma-grig"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-emerald-400/40 hover:bg-white/[0.04]"
            >
              <div className="absolute inset-0 bg-emerald-400/[0.04] opacity-0 transition group-hover:opacity-100" />
              <p className="mb-2 text-xs uppercase tracking-wider text-white/40">
                LinkedIn
              </p>
              <p className="text-lg font-medium text-white transition group-hover:text-emerald-400">
                linkedin.com/in/emma-grig →
              </p>
            </a>

            <a
              href="https://github.com/emmrian"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-emerald-400/40 hover:bg-white/[0.04]"
            >
              <div className="absolute inset-0 bg-emerald-400/[0.04] opacity-0 transition group-hover:opacity-100" />
              <p className="mb-2 text-xs uppercase tracking-wider text-white/40">
                GitHub
              </p>
              <p className="text-lg font-medium text-white transition group-hover:text-emerald-400">
                github.com/emmrian →
              </p>
            </a>

            <a
              href="https://behance.net/emmrian"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:border-emerald-400/40 hover:bg-white/[0.04]"
            >
              <div className="absolute inset-0 bg-emerald-400/[0.04] opacity-0 transition group-hover:opacity-100" />
              <p className="mb-2 text-xs uppercase tracking-wider text-white/40">
                Behance
              </p>
              <p className="text-lg font-medium text-white transition group-hover:text-emerald-400">
                behance.net/emmrian →
              </p>
            </a>

          </div>
        </Reveal>

      </div>
    </section>
  )
}