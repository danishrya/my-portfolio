'use client'

import { useState, useEffect } from 'react'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Events' },
    { id: 'contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id: string) => {
    setActiveSection(id)
    setMenuOpen(false)
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500
      ${scrolled
        ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/8'
        : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo */}
        <button
          onClick={() => handleClick('hero')}
          className="flex items-center gap-3 group"
        >
          <div className="w-6 h-6 border border-white/30 group-hover:border-white/70 transition-colors flex items-center justify-center">
            <div className="w-2 h-2 bg-white" />
          </div>
          <span className="text-xs font-mono text-white/60 tracking-[0.25em] uppercase group-hover:text-white/90 transition-colors">
            Danish
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`relative px-4 py-2 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-200
                ${activeSection === item.id
                  ? 'text-white'
                  : 'text-white/35 hover:text-white/70'
                }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-white" />
              )}
            </button>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => handleClick('contact')}
            className="text-xs font-mono text-black bg-white px-5 py-2.5 tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-200"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
          <span className={`block w-6 h-[1px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-[1px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>

      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#050505] border-t border-white/8">
          <div className="px-6 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={`w-full text-left py-3 text-xs font-mono tracking-[0.2em] uppercase transition-colors border-b border-white/5 last:border-0
                  ${activeSection === item.id ? 'text-white' : 'text-white/35 hover:text-white/70'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}