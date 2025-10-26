import Spline from '@splinetool/react-spline';
import { Rocket, Download } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[92vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(12,12,12,0.2),rgba(7,7,7,0.7)_60%,rgba(7,7,7,0.95))]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/70 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur">
            <span className="text-emerald-400">MERN</span> • Web Developer
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            I build modern, scalable web apps with MongoDB, Express, React, and Node.
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            Clean code, thoughtful UX, and performant APIs. Crafting interactive experiences that feel delightful and ship fast.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-neutral-900 font-medium hover:opacity-90 transition shadow">
              <Rocket size={18} /> View Projects
            </a>
            <a href="/resume.pdf" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 border border-white/10 text-white hover:bg-white/15 transition">
              <Download size={18} /> Download Resume
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-2 text-xs text-white/60">
            <span className="px-2 py-1 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">MongoDB</span>
            <span className="px-2 py-1 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">Express</span>
            <span className="px-2 py-1 rounded bg-sky-400/10 text-sky-300 border border-sky-400/20">React</span>
            <span className="px-2 py-1 rounded bg-lime-400/10 text-lime-300 border border-lime-400/20">Node.js</span>
            <span className="px-2 py-1 rounded bg-fuchsia-400/10 text-fuchsia-300 border border-fuchsia-400/20">TypeScript</span>
            <span className="px-2 py-1 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">REST & GraphQL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
