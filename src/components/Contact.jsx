import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold">Let’s build something great</h2>
        <p className="mt-3 text-white/70">
          Have a project in mind, need help with your MERN stack, or want a performance audit? Reach out and I’ll get back within 24–48 hours.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <a href="mailto:hello@yourname.dev" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-neutral-900 font-medium hover:opacity-90 transition shadow">
            <Mail size={18} /> hello@yourname.dev
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 border border-white/10 text-white hover:bg-white/15 transition">
            <Github size={18} /> GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 border border-white/10 text-white hover:bg-white/15 transition">
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>

        <div className="mt-10 text-left bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="font-medium text-white/90">Project Intake</h3>
          <p className="text-sm text-white/60 mt-1">Fill these details and send via email or your preferred channel.</p>
          <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-white/80">
            <li><span className="text-white/50">Project name:</span> Your awesome product</li>
            <li><span className="text-white/50">Company/Client:</span> Your company</li>
            <li className="sm:col-span-2"><span className="text-white/50">Goals:</span> What outcomes do you want? (e.g., MVP in 6 weeks, increase conversion by 20%)</li>
            <li className="sm:col-span-2"><span className="text-white/50">Scope:</span> Pages/features, integrations, roles, constraints</li>
            <li><span className="text-white/50">Timeline:</span> Start date, deadline, milestones</li>
            <li><span className="text-white/50">Budget:</span> Range or preferred engagement model</li>
            <li className="sm:col-span-2"><span className="text-white/50">Tech notes:</span> Stack preferences, existing systems, hosting</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
