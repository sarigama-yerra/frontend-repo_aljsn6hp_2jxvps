import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="inline-flex items-center gap-2">
              <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-cyan-400 to-blue-600 shadow-md" />
              <span className="text-sm tracking-widest text-white/90">VJX STUDIO</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/20 transition-colors">
                Start a Project
              </a>
            </nav>

            <button className="md:hidden text-white/80" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block text-white/80" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-lg bg-white/10 px-3 py-2 text-white" onClick={() => setOpen(false)}>
                Start a Project
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
