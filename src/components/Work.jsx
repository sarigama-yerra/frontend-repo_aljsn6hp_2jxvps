export default function Work() {
  const projects = [
    { title: 'Neon Grid', tag: 'WebGL • Concept', img: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Monolith', tag: 'Brand • Motion', img: 'https://images.unsplash.com/photo-1520975922131-c0f1dc9f2c40?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Pulse', tag: '3D • Interaction', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop' },
  ]
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-white">Selected Work</h2>
          <a href="#contact" className="text-sm text-white/70 hover:text-white">All projects →</a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <a key={p.title} href="#" className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-xs text-white/60">{p.tag}</div>
                <div className="text-white text-lg font-medium">{p.title}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
