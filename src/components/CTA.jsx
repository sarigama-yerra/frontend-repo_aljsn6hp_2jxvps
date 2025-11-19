export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-10 backdrop-blur">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white">Have a vision? Let's shape it.</h3>
              <p className="mt-2 text-white/70 max-w-xl">Tell us about your product, brand, or idea. We'll reply within 24 hours with a crisp plan and timeline.</p>
            </div>
            <a href="mailto:hello@vjx.studio" className="inline-flex items-center rounded-lg bg-white px-5 py-3 text-slate-900 font-medium shadow-sm hover:shadow transition">hello@vjx.studio</a>
          </div>
        </div>
      </div>
    </section>
  )
}
