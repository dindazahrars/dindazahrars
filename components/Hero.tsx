'use client'

import { Sparkles, Code2, Rocket, Heart } from 'lucide-react'
import Image from 'next/image'
import { personalInfo } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-32">
      {/* Paint Splash Background - Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Paint Blobs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Paint Splatter SVG - Top Right */}
        <div className="absolute top-10 right-20 w-64 h-64 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-float">
            <circle cx="100" cy="100" r="60" fill="url(#paint1)" />
            <circle cx="140" cy="80" r="30" fill="url(#paint1)" opacity="0.7" />
            <circle cx="70" cy="130" r="25" fill="url(#paint1)" opacity="0.6" />
            <circle cx="130" cy="140" r="20" fill="url(#paint1)" opacity="0.5" />
            <defs>
              <radialGradient id="paint1">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#a855f7" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Paint Splatter SVG - Bottom Left */}
        <div className="absolute bottom-20 left-20 w-56 h-56 opacity-15">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-float" style={{ animationDelay: '1s' }}>
            <circle cx="100" cy="100" r="50" fill="url(#paint2)" />
            <circle cx="60" cy="90" r="28" fill="url(#paint2)" opacity="0.7" />
            <circle cx="140" cy="120" r="22" fill="url(#paint2)" opacity="0.6" />
            <defs>
              <radialGradient id="paint2">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#3b82f6" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Subtle Sparkles - Far from logo area */}
        <div className="absolute top-32 left-32 text-pink-400 text-2xl opacity-60 animate-twinkle">✨</div>
        <div className="absolute top-40 right-32 text-purple-400 text-2xl opacity-50 animate-twinkle" style={{ animationDelay: '0.5s' }}>⭐</div>
        <div className="absolute bottom-32 left-40 text-blue-400 text-2xl opacity-60 animate-twinkle" style={{ animationDelay: '1s' }}>💫</div>
        <div className="absolute bottom-40 right-40 text-pink-400 text-xl opacity-50 animate-twinkle" style={{ animationDelay: '1.5s' }}>✨</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 text-center lg:text-left">

            {/* Text Content */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 relative">
              {/* Paint Stroke Behind Name */}
              <div className="absolute inset-0 flex items-center justify-center lg:justify-start opacity-30 -z-10">
              </div>
              <span className="glow-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Dinda Zahra Rama Sabila
              </span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 flex-wrap">
              <Code2 className="text-purple-400" size={24} />
              <h2 className="text-2xl md:text-3xl text-slate-300 font-medium">
                Software Engineering Student
              </h2>
              <span className="text-2xl">🎨</span>
            </div>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              ✨ Painting the web with{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-purple-400 font-semibold">Laravel</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-purple-400/20 -rotate-1 rounded"></span>
              </span>
              ,{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-pink-400 font-semibold">Next.js</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-pink-400/20 rotate-1 rounded"></span>
              </span>
              , and{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-400 font-semibold">Supabase</span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-400/20 -rotate-1 rounded"></span>
              </span>
              {' '}✨
            </p>

            {/* Status Badge with Paint Dot */}
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full mb-8 border-2 border-green-400/20">
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-slate-300 font-medium">Open for Internship Opportunities</span>
              <span className="text-lg">🚀</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center gap-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Rocket className="relative group-hover:translate-x-1 transition-transform" size={20} />
                <span className="relative">View My Projects</span>
                <Sparkles className="relative" size={18} />
              </a>
              <a
                  href="/cv/cv_dinda.pdf"
                  target="_blank"             
                  rel="noopener noreferrer"  
                 
                  className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                >
                  View CV 
                </a>
            </div>

            {/* Tech Stack Icons with Paint Palette Style */}
            <div className="relative inline-block">
              <p className="text-slate-400 text-sm font-medium mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <span className="text-lg">🎨</span>
                My Tech Palette
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {[
                  { name: 'Laravel', color: 'hover:border-red-400' },
                  { name: 'Next.js', color: 'hover:border-slate-400' },
                  { name: 'React', color: 'hover:border-cyan-400' },
                  { name: 'MySQL', color: 'hover:border-blue-400' },
                  { name: 'Supabase', color: 'hover:border-green-400' },
                  { name: 'Tailwind CSS', color: 'hover:border-cyan-400' },
                  { name: 'TypeScript', color: 'hover:border-blue-400' },
                  { name: 'Git', color: 'hover:border-orange-400' }
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className={`relative glass-card px-4 py-2 rounded-full text-sm font-medium text-slate-300 hover:text-purple-400 ${tech.color} hover:scale-105 transition-all duration-300 cursor-default border-2 border-transparent`}
                  >
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="relative w-72 h-80 md:w-80 md:h-[420px] rounded-[2.5rem] overflow-hidden border-4 border-white/10 z-20 shadow-2xl">
                <Image 
                  src="/images/photo.png" 
                  alt={personalInfo.name} 
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Logo Badge (Logo MOVED HERE) */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#1a1b2e] border-2 border-white/10 rounded-2xl p-4 shadow-2xl z-30 animate-float flex items-center justify-center">
                <Image 
                  src="/images/logo.png" 
                  alt="DZ Logo"
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Background Glows for Image */}
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-600/30 blur-[80px] rounded-full z-10"></div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-pink-600/20 blur-[80px] rounded-full z-10"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(0.8);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}