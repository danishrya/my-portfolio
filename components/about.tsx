'use client'

export default function About() {
  const highlights = [
    {
      icon: '01',
      title: 'Problem Solver',
      description: 'Breaking complex challenges into clean, scalable solutions with systematic precision.',
    },
    {
      icon: '02',
      title: 'Fast Learner',
      description: 'Continuously adapting and mastering modern technologies with focused discipline.',
    },
    {
      icon: '03',
      title: 'Creative Engineer',
      description: 'Blending design thinking with robust system architecture for meaningful products.',
    },
    {
      icon: '04',
      title: 'Team Collaborator',
      description: 'Building impactful products through clear communication and strong collaboration.',
    },
    {
      icon: '05',
      title: 'Strategic Thinker',
      description: 'Designing scalable solutions with long-term vision and sustainable architecture.',
    },
    {
      icon: '06',
      title: 'Performance Focused',
      description: 'Optimizing for speed, efficiency, and seamless user experience at every layer.',
    },
  ]

  return (
    <section className="relative min-h-screen py-24 px-6 bg-[#0a0a0a] overflow-hidden">

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="relative max-w-7xl mx-auto space-y-28 z-10">

        {/* HEADER — editorial style */}
        <div className="flex items-end justify-between border-b border-white/10 pb-8">
          <div className="space-y-3">
            <p className="text-xs font-mono text-white/30 tracking-[0.3em] uppercase">Section / 01</p>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none">
              About
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-xs font-mono text-white/20 tracking-widest">Muhammad Danish Ardyanda</p>
            <p className="text-xs font-mono text-white/20 tracking-widest">Software Engineering · Grade 11</p>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-5 gap-16">

          {/* Left Text — 3 cols */}
          <div className="md:col-span-3 space-y-7 text-white/50 text-base leading-[1.9] font-light">
            <p>
              My name is <span className="text-white font-medium">Muhammad Danish Ardyanda</span>. I'm currently 
              in 11th grade at IDN Boarding School, majoring in Software Engineering 
              (RPL — Rekayasa Perangkat Lunak). I've been building and sharpening my skills here for about 2–3 years.
            </p>

            <p>
              I started from absolute zero — never touched a laptop regularly, didn't know what coding was. 
              Adapting to a boarding school environment while learning to debug code simultaneously 
              was the real challenge. The kind that teaches you more than any curriculum does.
            </p>

            <p>
              Now, <span className="text-white font-medium">Alhamdulillah</span>, I've reached an intermediate level in multiple stacks 
              and had the opportunity to represent my school in an international student exchange program in Malaysia.
            </p>

            <p>
              Starting from zero and growing into who I am today is the most meaningful part of my journey. 
              I'm still learning, improving, and preparing to become a professional developer.
            </p>

            {/* Quote block */}
            <div className="border-l-2 border-white/20 pl-6 py-1 mt-8">
              <p className="text-white/70 text-lg italic font-light leading-relaxed">
                "From not knowing what a laptop was, to building full-stack systems in two years."
              </p>
            </div>
          </div>

          {/* Stats — 2 cols */}
          <div className="md:col-span-2 space-y-4">
            {[
              { value: '2+', label: 'Years of Experience', desc: 'Consistent learning since day one' },
              { value: '20+', label: 'Projects Completed', desc: 'Web, mobile, and backend systems' },
              { value: '5+', label: 'Events & Training', desc: 'Teaching, speaking, contributing' },
            ].map((stat, i) => (
              <div key={i} className="group border border-white/8 hover:border-white/20 transition-all duration-300 p-8">
                <div className="text-5xl font-black text-white tracking-tight mb-1">{stat.value}</div>
                <p className="text-white text-sm font-semibold tracking-wide mb-1">{stat.label}</p>
                <p className="text-white/30 text-xs font-mono">{stat.desc}</p>
              </div>
            ))}
          </div>

        </div>

        {/* HIGHLIGHTS */}
        <div className="space-y-10">

          <div className="flex items-center gap-6">
            <div className="w-8 h-[1px] bg-white/30" />
            <h3 className="text-xs font-mono text-white/40 tracking-[0.3em] uppercase">
              What I bring to the table
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative p-8 bg-[#0a0a0a] hover:bg-white/4 transition-all duration-400 cursor-default"
              >
                {/* Number */}
                <div className="text-xs font-mono text-white/20 mb-6 tracking-widest">
                  {item.icon}
                </div>

                <h4 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-white/90 transition-colors">
                  {item.title}
                </h4>

                <p className="text-white/40 text-sm leading-relaxed font-light">
                  {item.description}
                </p>

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/40 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}