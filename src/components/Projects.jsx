import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description:
      'Brief project summary. What problem it solves, your role, and key outcomes. Highlight MERN stack usage and any standout features (realtime, auth, dashboards).',
    tech: ['React', 'Node', 'Express', 'MongoDB', 'Tailwind'],
    live: '#',
    repo: '#',
    image: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Project Two',
    description:
      'Another showcase. Emphasize performance, UX, or scalability achievements. Mention testing, CI/CD, and deployment details if relevant.',
    tech: ['React', 'TypeScript', 'Node', 'GraphQL'],
    live: '#',
    repo: '#',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Project Three',
    description:
      'Focus on business impact or metrics. Include data viz, admin panels, or real-time features that demonstrate depth across the stack.',
    tech: ['Next.js', 'Express', 'MongoDB', 'Redis'],
    live: '#',
    repo: '#',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold">Featured Projects</h2>
          <p className="mt-2 text-white/70">Hand-picked work that reflects my approach and capabilities.</p>
        </div>
        <a href="#contact" className="hidden sm:inline-block text-sm text-white/80 hover:text-white">Have an idea? Let’s talk →</a>
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <article key={idx} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-white/70 border border-white/10">{t}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <a href={p.live} className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white" target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> Live
                </a>
                <a href={p.repo} className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white" target="_blank" rel="noreferrer">
                  <Github size={16} /> Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
