'use client'

import React, { useState } from 'react'
import { Mail, Linkedin, Github, Instagram, ArrowUpRight, Send } from 'lucide-react'

export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mdanishardyanda@gmail.com',
      href: 'mailto:mdanishardyanda@gmail.com'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'muhammad-danish-ardyanda',
      href: 'https://linkedin.com/in/muhammad-danish-ardyanda'
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'danishrya',
      href: 'https://github.com/danishrya'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@dnishrya',
      href: 'https://instagram.com/dnishrya'
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section className="relative min-h-screen py-24 px-6 bg-[#050505] overflow-hidden">

      {/* Noise/grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative max-w-6xl mx-auto space-y-20 z-10">

        {/* HEADER */}
        <div className="flex items-end justify-between border-b border-white/10 pb-8">
          <div className="space-y-3">
            <p className="text-xs font-mono text-white/30 tracking-[0.3em] uppercase">Section / 05</p>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none">
              Contact
            </h2>
          </div>
          <p className="hidden md:block text-xs font-mono text-white/20 tracking-widest text-right">
            Let's build something
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* LEFT — Form */}
          <div className="border border-white/10 p-10 md:p-14 space-y-8">

            <div>
              <p className="text-xs font-mono text-white/30 tracking-[0.3em] uppercase mb-2">Send a message</p>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                Got a project or just want to say hello? I'd love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="space-y-1">
                <label className="text-xs font-mono text-white/25 tracking-widest uppercase">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Muhammad Danish"
                  className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm font-light placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors duration-200"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-white/25 tracking-widest uppercase">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm font-light placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors duration-200"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-white/25 tracking-widest uppercase">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className="w-full bg-transparent border-b border-white/15 py-3 text-white text-sm font-light placeholder:text-white/20 focus:outline-none focus:border-white/50 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="group flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-200 mt-4"
              >
                <Send className="w-3.5 h-3.5" />
                Send Message
              </button>

              {submitted && (
                <div className="border border-white/15 p-4 text-xs font-mono text-white/60 tracking-wide">
                  ✓ Message sent. I'll get back to you shortly.
                </div>
              )}

            </form>
          </div>

          {/* RIGHT — Contact links */}
          <div className="border border-white/10 border-l-0 p-10 md:p-14 space-y-6">

            <div>
              <p className="text-xs font-mono text-white/30 tracking-[0.3em] uppercase mb-2">Other channels</p>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                Prefer a direct line? Find me on these platforms.
              </p>
            </div>

            <div className="space-y-0">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon
                return (
                  <a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-6 border-b border-white/8 hover:bg-white/[0.02] transition-all duration-200 px-1"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-9 h-9 border border-white/12 flex items-center justify-center group-hover:border-white/30 transition-colors">
                        <IconComponent className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-white/25 tracking-widest uppercase mb-0.5">
                          {method.title}
                        </p>
                        <p className="text-white/70 text-sm font-light group-hover:text-white transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors" />
                  </a>
                )
              })}
            </div>

          </div>

        </div>

        {/* FOOTER */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/8 pt-10 gap-4">
          <p className="text-xs font-mono text-white/20 tracking-widest">
            © 2025 — Muhammad Danish Ardyanda. All rights reserved.
          </p>
          <p className="text-xs font-mono text-white/15 tracking-widest">
            Built with Next.js · React · Tailwind CSS
          </p>
        </div>

      </div>
    </section>
  )
}