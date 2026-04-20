import photo from '../assets/emma.jpg'

export default function Hero() {
  return (
    <section className="min-h-screen px-6 text-white">
      <div className="mx-auto grid min-h-screen max-w-6xl items-center md:grid-cols-[1.2fr_0.8fr] md:gap-12">
        <div className="max-w-4xl py-16 md:py-0">
          <h1 className="text-6xl font-bold leading-[0.98] tracking-[-0.04em] md:text-7xl xl:text-[7rem]">
            I translate brand vision into{' '}
            <span
              className="arapey text-emerald-400 text-[5.2rem] font-normal leading-[0.9] md:text-[6.6rem] xl:text-[7.4rem]"
              style={{
                textShadow: '0 0 26px rgba(16,185,129,0.32)',
              }}
            >
              digital systems
            </span>
          </h1>

          <div className="mt-10 max-w-3xl">
            <p className="text-lg font-light leading-[1.45] text-white/70 md:text-xl">
              Frontend Developer with a background in branding and digital systems.
              I build structured, scalable and visually intentional interfaces.
            </p>
          </div>
        </div>

        <div className="mt-10 flex md:mt-0 md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[1.75rem] bg-emerald-400/10 blur-2xl" />
            <img
              src={photo}
              alt="Emma"
              className="w-55 rounded-[1.75rem] border border-white/10 object-cover shadow-2xl md:w-65 md:-translate-x-10 xl:w-72.5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}