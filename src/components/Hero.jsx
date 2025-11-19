import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/10 to-slate-950/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <p className="pointer-events-none text-xs uppercase tracking-[0.35em] text-white/70">VJX STUDIO</p>
          <h1 className="pointer-events-none mt-4 text-4xl sm:text-6xl font-semibold leading-tight text-white">
            Minimal 3D experiences for forward-thinking brands
          </h1>
          <p className="pointer-events-none mt-6 text-white/70 max-w-xl">
            We craft interactive, futuristic web experiences with performance at the core. Clean. Precise. Memorable.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-medium">
              See Work
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg border border-white/20 text-white px-4 py-2 text-sm font-medium">
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
