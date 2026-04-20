import d1 from '../assets/design/design1.jpg'
import d2 from '../assets/design/design2.jpg'
import d3 from '../assets/design/design3.jpg'
import web1 from '../assets/design/webdesign1.jpg'
import web3 from '../assets/design/webdesign3.jpg'
import Reveal from './Reveal'

export default function Design() {
  return (
    <section id="design" className="px-6 py-24 text-white">
      <div className="max-w-6xl">

        {/* HEADER */}
        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/40">
            Visual Work
          </p>

          <h2 className="mb-10 text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
            Visual Systems & Web Design
          </h2>

          <p className="mb-14 max-w-3xl leading-[1.6] text-white/60">
            Selected work spanning brand identity, packaging and website design —
            the same visual thinking that informs how I approach frontend today.
          </p>
        </Reveal>

        {/* BRANDING */}
        <div className="mb-10 grid gap-6 md:grid-cols-3">

          {/* CARD 1 */}
          <Reveal>
            <a
              href="https://www.behance.net/gallery/153968681/Bubble-Tea-Packaging-Design"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <img
                  src={d1}
                  alt="Bubble Tea Branding"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                  <span className="text-sm text-white">View →</span>
                </div>
              </div>

              <h3 className="mt-4 font-semibold">Bubble Tea Branding</h3>
              <p className="mt-1 text-sm text-white/60">
                Logo, packaging and visual direction.
              </p>
            </a>
          </Reveal>

          {/* CARD 2 */}
          <Reveal delay={0.05}>
            <a
              href="https://www.behance.net/gallery/247883807/Premium-Honey-Sticks-Branding"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <img
                  src={d2}
                  alt="Brand Identity and Packaging"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                  <span className="text-sm text-white">View →</span>
                </div>
              </div>

              <h3 className="mt-4 font-semibold">Brand Identity & Packaging</h3>
              <p className="mt-1 text-sm text-white/60">
                Complete branding system and packaging design.
              </p>
            </a>
          </Reveal>

          {/* CARD 3 */}
          <Reveal delay={0.1}>
            <a
              href="https://www.behance.net/gallery/226416025/LOGO-DESIGN-FOR-CHEESE-BRAND"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <img
                  src={d3}
                  alt="Full Brand Identity"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                  <span className="text-sm text-white">View →</span>
                </div>
              </div>

              <h3 className="mt-4 font-semibold">Full Brand Identity</h3>
              <p className="mt-1 text-sm text-white/60">
                Brand system and packaging direction.
              </p>
            </a>
          </Reveal>

        </div>

        {/* WEB DESIGN */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* SUNSPA */}
          <Reveal>
            <a
              href="https://sunspalounge.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <img
                  src={web3}
                  alt="SUNSPA Lounge Website"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                  <span className="text-sm text-white">View Website →</span>
                </div>
              </div>

              <h3 className="mt-4 font-semibold">SUNSPA Lounge Website</h3>
              <p className="mt-1 text-sm text-white/60">
                Website design, branding and visual direction implemented in a live project.
              </p>
            </a>
          </Reveal>

          {/* ITM */}
          <Reveal delay={0.06}>
            <div className="group">
              <div className="relative h-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                <img
                  src={web1}
                  alt="ITM Solutions concept"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                  <span className="text-sm text-white">Design Concept</span>
                </div>
              </div>

              <h3 className="mt-4 font-semibold">ITM Solutions Website</h3>
              <p className="mt-1 text-sm text-white/60">
                Website design concept and interface direction for a corporate platform.
              </p>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  )
}