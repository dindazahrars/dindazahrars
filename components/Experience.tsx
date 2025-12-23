'use client';

import { useState } from 'react';
import { experiences } from '@/data/portfolio';
import Image from 'next/image';

export default function Experience() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);

  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 glow-text">
            📌 <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Pengalaman
            </span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Perjalanan saya dalam berbagai kegiatan organisasi dan kepanitiaan
          </p>
        </div>

        {/* Experience Grid - 4 KOLOM */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Certificate Image */}
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden bg-slate-800/50">
                {exp.certificate ? (
                  <Image
                    src={exp.certificate}
                    alt={`Sertifikat ${exp.title}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    onClick={() => setSelectedCertificate(exp.certificate)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-6xl">
                    {exp.icon}
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm font-medium">
                    🔍 Klik untuk zoom
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                {/* Icon & Title */}
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{exp.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-purple-300 font-medium">
                      {exp.role}
                    </p>
                  </div>
                </div>

                {/* Organization & Date */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-400">{exp.organization}</span>
                  <span className="text-pink-400 font-medium">{exp.date}</span>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-full text-xs text-purple-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats - FIX ANGKA */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
              {experiences.length}
            </div>
            <div className="text-slate-300 text-sm">Total Pengalaman</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text mb-2">
              2+
            </div>
            <div className="text-slate-300 text-sm">Organisasi</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text mb-2">
              2+
            </div>
            <div className="text-slate-300 text-sm">Tahun Aktif</div>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text mb-2">
              {experiences.length}+
            </div>
            <div className="text-slate-300 text-sm">Sertifikat</div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={() => setSelectedCertificate(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors text-4xl"
            >
              ✕
            </button>

            {/* Certificate Image */}
            <div className="relative w-full h-[80vh] rounded-lg overflow-hidden">
              <Image
                src={selectedCertificate}
                alt="Sertifikat"
                fill
                className="object-contain"
              />
            </div>

            {/* Download Button */}
            <a
              href={selectedCertificate}
              download
              className="absolute -bottom-16 left-1/2 -translate-x-1/2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:scale-105 transition-transform"
            >
              📥 Download Sertifikat
            </a>
          </div>
        </div>
      )}

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