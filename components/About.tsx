'use client'

import { Code, Database, Palette, Zap, Heart, Sparkles, Laptop, Globe } from 'lucide-react'

export default function About() {
  const technicalSkills = [
    { name: 'Laravel & PHP', level: 90, color: 'from-red-500 to-orange-500', icon: Code },
    { name: 'Next.js & React', level: 85, color: 'from-purple-500 to-pink-500', icon: Zap },
    { name: 'MySQL', level: 88, color: 'from-blue-500 to-cyan-500', icon: Database },
    { name: 'Supabase', level: 80, color: 'from-green-500 to-emerald-500', icon: Database },
    { name: 'Tailwind CSS', level: 90, color: 'from-cyan-500 to-blue-500', icon: Palette },
    { name: 'TypeScript', level: 80, color: 'from-blue-600 to-indigo-600', icon: Code },
  ]

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Fast Learner',
    'Creative Thinking',
    'Time Management',
    'Communication',
    'Adaptability',
    'Detail-Oriented'
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="glow-text bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Description */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-3xl hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="text-pink-400" size={28} />
                <h3 className="text-2xl font-semibold text-purple-400">Hello! I'm Dinda</h3>
              </div>
              
              <p className="text-slate-300 leading-relaxed mb-4">
                Saya mahasiswi <span className="text-purple-400 font-semibold">Software Engineering</span> yang passionate dalam 
                membangun aplikasi web yang cantik dan fungsional. Saya senang mengeksplorasi teknologi baru dan menciptakan 
                solusi yang user-friendly.
              </p>

              <p className="text-slate-300 leading-relaxed mb-4">
                Dengan pengalaman di <span className="text-pink-400 font-semibold">full-stack development</span>, 
                saya fokus pada pembuatan aplikasi dengan <span className="text-purple-400 font-semibold">Laravel</span> untuk backend 
                yang robust dan <span className="text-pink-400 font-semibold">Next.js</span> untuk frontend yang modern dan responsive.
              </p>

              <p className="text-slate-300 leading-relaxed">
                Saat ini saya sedang mencari <span className="text-green-400 font-semibold">kesempatan magang</span> untuk 
                mengaplikasikan skill yang saya miliki dan terus belajar dari profesional di industri.
              </p>
            </div>

            {/* Interests */}
            <div className="glass-card p-6 rounded-3xl">
              <h4 className="text-xl font-semibold text-pink-400 mb-4 flex items-center gap-2">
                <Laptop size={24} />
                What I Love
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Globe className="text-purple-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-300 text-sm">Building full-stack web applications from scratch</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="text-pink-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-300 text-sm">Creating beautiful UI/UX with modern design trends</p>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <p className="text-slate-300 text-sm">Learning new technologies and best practices</p>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-card p-6 rounded-3xl">
              <h4 className="text-xl font-semibold text-purple-400 mb-4 flex items-center gap-2">
                <Sparkles size={20} />
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-sm text-slate-300 hover:scale-105 transition-transform duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Technical Skills */}
          <div className="space-y-6">
            <div className="glass-card p-8 rounded-3xl hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-pink-400 mb-6 flex items-center gap-2">
                <Code size={28} />
                Technical Skills
              </h3>

              {technicalSkills.map((skill) => (
                <div key={skill.name} className="mb-6 last:mb-0">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <skill.icon className="text-purple-400" size={20} />
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                    </div>
                    <span className="text-purple-400 font-semibold">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-3 bg-slate-700/50 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg`}
                      style={{ 
                        width: `${skill.level}%`,
                        boxShadow: `0 0 10px rgba(167, 139, 250, 0.5)`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills */}
            <div className="glass-card p-6 rounded-3xl">
              <h4 className="text-xl font-semibold text-purple-400 mb-4">Also Familiar With</h4>
              <div className="grid grid-cols-2 gap-3">
                {['Git & GitHub', 'REST API', 'Figma', 'VS Code', 'Python', 'Bootstrap', 'Photoshop', 'Capcut'].map((tool) => (
                  <div
                    key={tool}
                    className="px-3 py-2 bg-slate-700/30 border border-slate-600/30 rounded-lg text-sm text-slate-300 text-center hover:border-purple-400/50 transition-all duration-300"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
