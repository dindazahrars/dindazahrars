'use client';

const skills = [
  {
    category: "Frontend Development",
    icon: "🎨",
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "HTML5", level: 90, icon: "🌐" },
      { name: "CSS3", level: 85, icon: "🎨" },
      { name: "JavaScript", level: 80, icon: "⚡" },
      { name: "React.js", level: 75, icon: "⚛️" },
      { name: "Next.js", level: 70, icon: "▲" },
      { name: "Tailwind CSS", level: 85, icon: "💨" },
    ]
  },
  {
    category: "Backend Development",
    icon: "⚙️",
    color: "from-blue-500 to-cyan-500",
    items: [
      { name: "Node.js", level: 70, icon: "🟢" },
      { name: "PHP", level: 75, icon: "🐘" },
      { name: "MySQL", level: 80, icon: "🗄️" },
      { name: "MongoDB", level: 65, icon: "🍃" },
    ]
  },
  {
    category: "Design & Tools",
    icon: "🛠️",
    color: "from-green-500 to-emerald-500",
    items: [
      { name: "Figma", level: 85, icon: "🎨" },
      { name: "Git & GitHub", level: 80, icon: "📦" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "Canva", level: 85, icon: "🖼️" },
    ]
  },
  {
    category: "Soft Skills",
    icon: "💡",
    color: "from-orange-500 to-red-500",
    items: [
      { name: "Leadership", level: 85, icon: "👑" },
      { name: "Teamwork", level: 90, icon: "🤝" },
      { name: "Communication", level: 85, icon: "💬" },
      { name: "Problem Solving", level: 80, icon: "🧩" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 glow-text">
            💻 <span className="bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
              Skills & Expertise
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Keahlian dan teknologi yang saya kuasai
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, catIndex) => (
            <div
              key={catIndex}
              className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.6s ease-out ${catIndex * 0.2}s both`
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-3xl`}>
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    {/* Skill Name */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-slate-200 font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-purple-400 font-bold">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animation: `progressBar 1.5s ease-out ${skillIndex * 0.1}s both`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              20+
            </div>
            <div className="text-slate-300 text-sm mt-1">Skills</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
              4
            </div>
            <div className="text-slate-300 text-sm mt-1">Categories</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">⭐</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text">
              85%
            </div>
            <div className="text-slate-300 text-sm mt-1">Avg Level</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-4xl mb-2">🚀</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text">
              2+
            </div>
            <div className="text-slate-300 text-sm mt-1">Years</div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes progressBar {
          from {
            width: 0%;
          }
        }
      `}</style>
    </section>
  );
}