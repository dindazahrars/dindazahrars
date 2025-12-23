'use client';

import { personalInfo } from '@/data/portfolio';

const socialLinks = [
  {
    name: "Email",
    icon: "📧",
    value: personalInfo.email,
    link: `mailto:${personalInfo.email}`,
    color: "from-red-500 to-orange-500"
  },
  {
    name: "LinkedIn",
    icon: "💼",
    value: "Dinda Zahra",
    link: personalInfo.linkedin,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Instagram",
    icon: "📷",
    value: "@dindazhrs",
    link: personalInfo.instagram,
    color: "from-pink-500 to-purple-500"
  },
  {
    name: "GitHub",
    icon: "📦",
    value: "dindazahrars",
    link: "https://github.com/dindazahrars",
    color: "from-gray-500 to-slate-500"
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 glow-text">
            📞 <span className="bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
              Let's Connect!
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi saya! Saya selalu terbuka untuk diskusi, kolaborasi, atau sekadar ngobrol ☕
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-300 group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                {social.icon}
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-white mb-1">
                {social.name}
              </h3>
              <p className="text-sm text-slate-400 truncate">
                {social.value}
              </p>

              {/* Hover Effect */}
              <div className={`mt-4 h-1 bg-gradient-to-r ${social.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </a>
          ))}
        </div>

        {/* CTA Box */}
        <div className="glass-card rounded-3xl p-12 text-center glow-box">
          <div className="text-6xl mb-6">💌</div>
          <h3 className="text-3xl font-bold text-white mb-4">
            Ada Project atau Kolaborasi?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Saya terbuka untuk project baru, magang, atau kolaborasi menarik lainnya. 
            Mari kita ciptakan sesuatu yang luar biasa bersama!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform"
            >
              📧 Kirim Email
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-full text-white font-bold text-lg hover:bg-slate-700 transition-colors"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm">
            © 2025 Dinda Zahra Rama Sabila. All rights reserved.
          </p>
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
      `}</style>
    </section>
  );
}