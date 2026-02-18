'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      index: '01',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Flutter/Dart', 'HTML · CSS'],
    },
    {
      category: 'Backend',
      index: '02',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs', 'MySQL', 'Java Spring Boot'],
    },
    {
      category: 'Tools & Platforms',
      index: '03',
      skills: ['VS Code', 'Git', 'Vercel', 'Firebase', 'GitHub'],
    },
    {
      category: 'Design & UX',
      index: '04',
      skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Design Systems'],
    },
  ]

  const proficiency = [
    { skill: 'Full Stack Development', level: 85 },
    { skill: 'Mobile Development', level: 75 },
    { skill: 'Database Design', level: 65 },
    { skill: 'UI/UX Design', level: 50 },
    { skill: 'TypeScript', level: 35 },
    { skill: 'React & Next.js', level: 25 },
  ]

  return (
    <section className="min-h-screen py-24 px-6 bg-[#080808] text-white overflow-hidden">

      {/* Subtle horizontal lines */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.8) 39px, rgba(255,255,255,0.8) 40px)`,
        }}
      />

      <div className="relative max-w-6xl mx-auto space-y-28 z-10">

        {/* HEADER */}
        <div className="flex items-end justify-between border-b border-white/10 pb-8">
          <div className="space-y-3">
            <p className="text-xs font-mono text-white/30 tracking-[0.3em] uppercase">Section / 02</p>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none">
              Skills
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-xs font-mono text-white/20 tracking-widest">Expertise & Proficiency</p>
          </div>
        </div>

        {/* SKILL CARDS — table-like layout */}
        <div className="space-y-0 border-t border-white/8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group grid md:grid-cols-12 gap-0 border-b border-white/8 hover:bg-white/[0.02] transition-all duration-300"
            >
              {/* Index + Category */}
              <div className="md:col-span-4 p-8 border-r border-white/8">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-mono text-white/20 tracking-widest">{category.index}</span>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {category.category}
                  </h3>
                </div>
              </div>

              {/* Skills tags */}
              <div className="md:col-span-8 p-8 flex flex-wrap gap-2 content-center">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-xs font-mono text-white/60 border border-white/12 
                    hover:border-white/40 hover:text-white/90
                    transition-all duration-200 tracking-widest uppercase"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* PROFICIENCY SECTION */}
        <div className="space-y-12">

          <div className="flex items-center gap-6">
            <div className="w-8 h-[1px] bg-white/30" />
            <h3 className="text-xs font-mono text-white/40 tracking-[0.3em] uppercase">
              Proficiency levels
            </h3>
          </div>

          <div className="space-y-10">
            {proficiency.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="flex justify-between items-end">
                  <span className="text-sm font-semibold text-white/70 tracking-wide">
                    {item.skill}
                  </span>
                  <span className="text-xs font-mono text-white/30">
                    {item.level.toString().padStart(2, '0')}%
                  </span>
                </div>

                {/* Track */}
                <div className="w-full h-[2px] bg-white/8 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="h-full bg-white"
                  />
                  {/* Tick mark at end */}
                  <motion.div
                    initial={{ left: 0, opacity: 0 }}
                    whileInView={{ left: `${item.level}%`, opacity: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-[5px] h-[5px] bg-white rounded-full"
                    style={{ position: 'absolute' }}
                  />
                </div>

                {/* Level label */}
                <div className="text-xs font-mono text-white/20 tracking-widest">
                  {item.level >= 80 ? 'ADVANCED' : item.level >= 60 ? 'PROFICIENT' : item.level >= 40 ? 'INTERMEDIATE' : 'DEVELOPING'}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}