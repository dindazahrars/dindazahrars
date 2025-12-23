'use client';

import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Asvada",
    image: "/images/projects/asvada.png", 
    icon: "🌐",
    tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    color: "from-purple-500 to-pink-500",
    link: "https://asvada-navasena.vercel.app/",
  },
  {
    id: 2,
    title: "Pijar Berdaya",
    image: "/images/projects/pbi.png", 
    icon: "💡",
    tags: ["React", "JavaScript", "CSS", "Frontend"],
    color: "from-orange-500 to-red-500",
    link: "https://pijarberdaya.id/",
  }
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
      <div className="absolute top-20 right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-40 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 glow-text">
            🚀 <span className="bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Beberapa project yang pernah saya kerjakan dan sudah live
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group relative"
              style={{
                animation: `slideIn 0.6s ease-out ${index * 0.2}s both`
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Live Badge */}
              <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-green-500 rounded-full text-xs font-bold text-white flex items-center gap-1 shadow-lg shadow-green-500/50">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                LIVE
              </div>

              {/* Website Preview Image */}
              <div className="relative h-56 bg-slate-800/50 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} Preview`}
                    fill
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-8xl opacity-50">
                      {project.icon}
                    </div>
                  </div>
                )}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                
                {/* Hover Overlay with Button */}
                <div className={`absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:scale-110 transition-transform shadow-lg shadow-purple-500/50"
                    onClick={(e) => e.stopPropagation()}
                  >
                    🔗 Visit Website
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 bg-slate-900/50">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                    {project.title}
                  </h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-slate-800/70 border border-purple-400/30 rounded-full text-xs text-purple-300 hover:bg-slate-700/70 hover:border-purple-400/50 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform">
            <div className="text-4xl mb-2">🚀</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              {projects.length}
            </div>
            <div className="text-slate-300 text-sm mt-1">Live Projects</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform">
            <div className="text-4xl mb-2">💻</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              {new Set(projects.flatMap(p => p.tags)).size}
            </div>
            <div className="text-slate-300 text-sm mt-1">Technologies</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-transform md:col-span-1 col-span-2">
            <div className="text-4xl mb-2">✨</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
              100%
            </div>
            <div className="text-slate-300 text-sm mt-1">Deployed</div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}