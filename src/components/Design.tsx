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

        <Reveal>
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/40">
            Visual Work
          </p>

          <h2 className="mb-10 text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
            Visual Systems & Web Design
          </h2>

          <p className="mb-14 max-w-3xl leading-[1.6] text-white/60">
            Selected work spanning brand identity, packaging and website design -
            the same visual thinking that informs how I approach frontend today.
          </p>
        </Reveal>

        {/* BRANDING */}
        <div className="mb-10 grid gap-6 md:grid-cols-3">

          <Reveal>
            <a
              href="https://www.behance.net/gallery/153968681/Bubble-Tea-Packaging-Design"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/2">
                <img src={d1} className="h-full w-full object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100">
                  <span>View →</span>
                </div>
              </div>

              <h3 className="mt-4 font-semibold">Bubble Tea Branding</h3>
              <p className="text-white/60 text-sm mt-1">
                Logo, packaging and visual direction.
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.05}>
            <a
              href="https://www.behance.net/gallery/247883807/Premium-Honey-Sticks-Branding"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/2">
                <img src={d2} className="h-full w-full object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100">
                  <span>View →</span>
                </div>
              </div>

              <h3 className="mt-4 font-semibold">Brand Identity & Packaging</h3>
              <p className="text-white/60 text-sm mt-1">
                Complete branding system and packaging design.
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href="https://www.behance.net/gallery/226416025/LOGO-DESIGN-FOR-CHEESE-BRAND"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/2">
                <img src={d3} className="h-full w-full object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100">
                  <span>View →</span>
                </div>
              </div>

              <h3 className="mt-4 font-semibold">Full Brand Identity</h3>
              <p className="text-white/60 text-sm mt-1">
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
              <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10 bg-white/2">
                <img src={web3} className="h-full w-full object-cover transition group-hover:scale-105" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100">
                  <span>View Website →</span>
                </div>
              </div>

              <h3 className="mt-4 font-semibold">SUNSPA Lounge Website</h3>
              <p className="text-white/60 text-sm mt-1">
                Website design, branding and visual direction implemented in a live project.
              </p>
            </a>
          </Reveal>

          {/* ITM */}
          <Reveal delay={0.06}>
            <div className="group">
              <div className="relative h-80 overflow-hidden rounded-2xl border border-white/10 bg-white/2">

                <img
                  src={web1}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100">
                  <span>Design Concept</span>
                </div>

              </div>

              <h3 className="mt-4 font-semibold">ITM Solutions Website</h3>
              <p className="text-white/60 text-sm mt-1">
                Website design concept and interface direction for a corporate platform.
              </p>
            </div>
          </Reveal>

        </div>

      </div>
    </section>
  )
}