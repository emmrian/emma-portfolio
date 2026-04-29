import Reveal from './Reveal'

export default function Footer() {
  return (
    <footer className="px-6 pb-10 pt-20 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col gap-4 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Emma Grigoryan</p>

              <p>
                Frontend Developer · Brand Identity
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}