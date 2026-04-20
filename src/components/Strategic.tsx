export default function Strategic() {
  return (
    <section className="px-6 py-24 text-white">
      <div className="max-w-6xl">

        <h2 className="text-4xl md:text-6xl font-semibold mb-16 tracking-[-0.03em]">
          What I Bring
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              title: 'Brand Intelligence',
              text: 'Understanding positioning, perception and how digital presence supports business identity.',
            },
            {
              title: 'Structural Thinking',
              text: 'Building systems with clarity - from multilingual content logic to scalable UI structure.',
            },
            {
              title: 'Design Advantage',
              text: 'Strong foundation in visual hierarchy, brand systems and interface clarity.',
            },
            {
              title: 'Growth Velocity',
              text: 'Fast learning curve with active development in React, TypeScript and Python foundations.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="border border-white/10 p-8 rounded-2xl hover:border-emerald-400/40 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-white/60 leading-[1.6]">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}