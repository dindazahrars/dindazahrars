'use client';

import { organizations } from '@/data/portfolio';

export default function Organization() {
  return (
    <section id="organization" className="py-20 px-4 relative overflow-hidden">
      {/* Paint Splash Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Paint Splatters */}
        <div className="absolute top-40 left-1/4 w-48 h-48 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-float">
            <circle cx="100" cy="100" r="50" fill="url(#orgPaint1)" />
            <circle cx="140" cy="80" r="25" fill="url(#orgPaint1)" opacity="0.7" />
            <circle cx="70" cy="130" r="20" fill="url(#orgPaint1)" opacity="0.6" />
            <defs>
              <radialGradient id="orgPaint1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        {/* Sparkles */}
        <div className="absolute top-1/4 right-1/4 text-cyan-400 text-xl opacity-60 animate-twinkle">✨</div>
        <div className="absolute bottom-1/3 left-1/3 text-blue-400 text-lg opacity-50 animate-twinkle" style={{ animationDelay: '0.5s' }}>⭐</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Paint Stroke */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-4">
            {/* Paint Stroke Behind Title */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 -z-10">
              <svg viewBox="0 0 400 80" className="w-full max-w-xl">
                <ellipse cx="200" cy="40" rx="180" ry="30" fill="url(#orgTitleStroke)" />
                <defs>
                  <linearGradient id="orgTitleStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold glow-text relative">
              <span className="text-4xl mr-2">🌍</span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                Organisasi
              </span>
            </h2>
          </div>
          
          <p className="text-slate-300 text-lg">
            Organisasi yang saat ini saya ikuti
          </p>
        </div>

        {/* Organization Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {organizations.map((org, index) => (
            <div
              key={org.id}
              className="group relative"
              style={{
                animation: `slideIn 0.6s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Card with Paint Border Effect */}
              <div className="relative glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-cyan-400/30 overflow-hidden">
                
                {/* Paint Splash on Hover */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <circle cx="70" cy="30" r="30" fill="url(#cardPaint)" />
                    <circle cx="50" cy="50" r="20" fill="url(#cardPaint)" opacity="0.7" />
                    <defs>
                      <radialGradient id="cardPaint">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>

                {/* Icon with Paint Drip */}
                <div className="relative inline-block mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${org.color} flex items-center justify-center text-4xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    {org.icon}
                  </div>
                  {/* Paint Drip */}
                  <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-0 bg-gradient-to-b ${org.color.split(' ')[0].replace('from-', 'from-')} to-transparent rounded-full group-hover:h-6 transition-all duration-500`}></div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all">
                  {org.name}
                </h3>
                
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-400/40 rounded-full text-sm text-cyan-300 font-semibold">
                    {org.role}
                  </span>
                  <span className="flex items-center gap-1 text-slate-400 text-sm">
                    <span className="text-cyan-400">📅</span>
                    {org.period}
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {org.description}
                </p>

                {/* Decorative Paint Stroke */}
                <div className="relative h-1 bg-slate-800 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                </div>

                {/* Corner Decoration */}
                <div className="absolute bottom-4 right-4 text-4xl opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  {org.icon}
                </div>
              </div>

              {/* Floating Sparkle on Hover */}
              <div className="absolute -top-2 -right-2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity animate-bounce">
                ✨
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Section */}
        <div className="relative">
          {/* Paint Palette Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <svg viewBox="0 0 300 100" className="w-full max-w-md">
              <ellipse cx="150" cy="50" rx="140" ry="40" fill="url(#achievementPaint)" />
              <defs>
                <linearGradient id="achievementPaint" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Achievement Badge */}
          <div className="relative text-center">
            <div className="inline-flex items-center gap-4 glass-card rounded-full px-8 py-4 border-2 border-cyan-400/30 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                <span className="text-2xl">✨</span>
              </div>
              <div className="text-left">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                  {organizations.length}
                </div>
                <div className="text-slate-300 text-sm font-medium">
                  Organisasi Aktif
                </div>
              </div>
              <div className="text-3xl animate-pulse">🌟</div>
            </div>
          </div>
        </div>

        {/* Fun Fact */}
        <div className="mt-8 text-center">
          <p className="text-slate-400 text-sm italic">
            "Belajar, berkembang, dan berkontribusi bersama komunitas" 💙
          </p>
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
  );
}