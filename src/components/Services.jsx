export default function Services() {
  const items = [
    {
      title: 'Interactive 3D Web',
      desc: 'Spline-powered hero scenes and product interactions that feel alive.',
    },
    {
      title: 'Brand Websites',
      desc: 'Minimal, high-performance sites that tell your story with clarity.',
    },
    {
      title: 'Showreels & Demos',
      desc: 'Snappy motion, crisp visuals, and polished micro-interactions.',
    },
  ]

  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-white">Services</h2>
          <p className="text-sm text-white/60 max-w-md">A focused set of offerings designed to produce standout digital moments with minimal overhead.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item.title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20">
              <h3 className="text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="mt-4 text-xs uppercase tracking-widest text-white/50 group-hover:text-white/70">Learn more</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
