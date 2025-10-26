import { Code, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-semibold">About Me</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              Write a concise bio here. Mention your experience building end-to-end products with the MERN stack, areas of focus (e.g., design systems, real-time apps, dashboards), and what you value (maintainability, testing, DX).
            </p>
            <div className="mt-6 flex items-center gap-3 text-white/70">
              <MapPin size={18} className="text-white/60" />
              <span>Based in Your City • Open to remote and onsite</span>
            </div>
            <div className="mt-6 p-4 rounded-xl border border-white/10 bg-white/5">
              <div className="flex items-center gap-2 text-sm text-white/80"><Code size={16} /> Tech Focus</div>
              <ul className="mt-3 space-y-2 text-sm text-white/70 list-disc pl-5">
                <li>Reusable component libraries with React + Tailwind</li>
                <li>API design with Express, Node, and MongoDB aggregation</li>
                <li>Authentication, authorization, and role-based access</li>
                <li>Full CI/CD with Docker and cloud deployment</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="grid sm:grid-cols-2 gap-5">
              <Card title="Services" items={[
                'Full-stack web app development (MERN)',
                'Designing scalable REST/GraphQL APIs',
                'UI engineering & design systems',
                'Performance audits & optimization',
              ]} />
              <Card title="Highlights" items={[
                'Shipped X+ production apps',
                'Improved Lighthouse scores to 95+',
                'Reduced API latency by Y%',
                'Led team of Z engineers',
              ]} />
              <Card title="Methods" items={[
                'Clean architecture, modular monorepos',
                'Type-safe backends, schema validation',
                'Testing: unit, integration, e2e',
                'Accessible, responsive, internationalized UIs',
              ]} />
              <Card title="Toolbox" items={[
                'React, Vite, Next.js, TanStack',
                'Node, Express, MongoDB, Prisma/Mongoose',
                'Tailwind, Radix, shadcn/ui',
                'Docker, GitHub Actions, Vercel, AWS',
              ]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ title, items }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-5">
      <h3 className="font-medium text-white/90">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-white/70 list-disc pl-5">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
