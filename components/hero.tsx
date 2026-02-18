'use client'

import { Button } from '../ui/button'
import { ArrowRight, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = []
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
      })
    }

    let animId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`
        ctx.fill()
      })

      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 100) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(255,255,255,${0.08 * (1 - d / 100)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })
      animId = requestAnimationFrame(animate)
    }
    animate()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-2 bg-[#080808] overflow-hidden">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/20" />

      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04)_0%,transparent_70%)]" />

      <div className="relative max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-20 items-center z-10">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          <div className="flex items-center gap-3">
            <div className="w-8 h-[1px] bg-white/50" />
            <p className="text-xs font-mono tracking-[0.3em] text-white/50 uppercase">
              Portfolio · 2025
            </p>
          </div>

          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-white tracking-tight">
              DANISH
            </h1>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] text-white/10 tracking-tight">
              ARDYANDA
            </h1>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-[2px] h-24 bg-gradient-to-b from-white to-transparent mt-1 flex-shrink-0" />
            <p className="text-base text-white/50 max-w-md leading-relaxed font-light">
              Vocational software engineering student building web, mobile, and backend applications. 
              Turning ideas into systems that actually work.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-2">
            <button
              onClick={() => setActiveSection('projects')}
              className="group flex items-center gap-2 px-6 py-3 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-all duration-200"
            >
              View Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setActiveSection('contact')}
              className="flex items-center gap-2 px-6 py-3 border border-white/20 text-white text-sm font-bold tracking-widest uppercase hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            >
              Contact
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3 pt-4">
            {[
              { icon: Github, link: 'https://github.com/danishrya', label: 'GH' },
              { icon: Linkedin, link: 'https://www.linkedin.com/in/muhammad-danish-ardyanda/', label: 'LI' },
              { icon: Mail, link: 'mailto:mdanishardyanda@gmail.com', label: 'ML' },
            ].map((item, i) => {
              const Icon = item.icon
              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 flex items-center justify-center border border-white/15 hover:border-white/60 hover:bg-white/8 transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </a>
              )
            })}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center">

          {/* Image frame */}
          <div className="relative w-full max-w-sm">

            {/* Decorative lines behind */}
            <div className="absolute -top-6 -right-6 w-full h-full border border-white/10" />
            <div className="absolute -top-3 -right-3 w-full h-full border border-white/6" />

            {/* Main image */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
              <img
                src="/image/danish.png"
                alt="Danish"
                className="w-full h-full object-cover object-top grayscale contrast-110"
              />
              {/* Scanline overlay */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)`,
                }}
              />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
            </div>

            {/* Status badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#080808] border border-white/20 px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                <span className="text-xs font-mono text-white/70 tracking-widest uppercase">Available for work</span>
              </div>
            </div>

            {/* Year tag */}
            <div className="absolute -top-4 right-0 bg-[#080808] border border-white/20 px-4 py-2">
              <span className="text-xs font-mono text-white/50 tracking-widest">2025</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs font-mono text-white/20 tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}