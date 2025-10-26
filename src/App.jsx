import { useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('bg-neutral-950');
  }, []);

  return (
    <div className="text-white bg-neutral-950 min-h-screen antialiased">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white text-lg">YourName.dev</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <div className="h-5 w-px bg-white/10" />
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="mailto:hello@yourname.dev" className="hover:text-white transition-colors" aria-label="Email"><Mail size={18} /></a>
          </nav>
        </div>
      </header>

      <main className="relative">
        <section id="home" className="pt-16"><Hero /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="border-t border-white/10 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p>Built with React, Vite, Tailwind, and MERN vibes.</p>
        </div>
      </footer>
    </div>
  );
}
