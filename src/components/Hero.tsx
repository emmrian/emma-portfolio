import { motion } from 'motion/react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-6 text-white">
      {/* Magic wand */}
      <motion.div
        className="absolute right-[10%] top-[38%] hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div
          className="relative h-28 w-[2px] bg-white/40"
          animate={{ rotate: [0, -6, 4, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-emerald-400 blur-[4px]"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        <motion.div
          className="absolute -top-4 right-3 h-20 w-20"
          animate={{ rotate: 360 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="absolute h-1 w-1 rounded-full bg-emerald-400 blur-[1px]" />
          <div className="absolute right-6 top-4 h-1 w-1 rounded-full bg-white/70" />
          <div className="absolute right-10 top-2 h-1 w-1 rounded-full bg-emerald-300" />
        </motion.div>
      </motion.div>

      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center md:grid-cols-[1fr_0.35fr]">
        <motion.div
          className="max-w-5xl py-16 md:py-0"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-5 text-xs font-light uppercase tracking-[0.24em] text-white/35 sm:text-sm md:tracking-[0.28em]">
            Frontend Developer
          </p>

          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl md:text-6xl md:leading-[1.05] xl:text-[5.6rem]">
            I translate brand{' '}
            <span className="md:whitespace-nowrap">
              vision into{' '}
              <span
                className="arapey text-[3.7rem] font-normal leading-none text-emerald-400 sm:text-[4.5rem] md:text-[5.6rem] xl:text-[6.2rem]"
                style={{ textShadow: '0 0 26px rgba(16,185,129,0.32)' }}
              >
                digital systems
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base font-light leading-[1.65] text-white/60 md:mt-8 md:text-lg">
            Product-oriented frontend developer with a background in branding and digital systems.
            I design and build structured, scalable interfaces.
          </p>

          <div className="mt-9 flex items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:border-emerald-400/35 hover:bg-white/[0.08]"
            >
              Contact
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>

        <div className="hidden md:block" />
      </div>
    </section>
  )
}