import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Services from './components/Services'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <CTA />
        <footer className="py-12 text-center text-xs text-white/50">
          © {new Date().getFullYear()} VJX STUDIO — Minimal 3D Agency
        </footer>
      </main>
    </div>
  )
}

export default App
