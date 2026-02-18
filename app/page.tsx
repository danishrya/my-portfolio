'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import About from '@/components/about'
import Skills from '@/components/skills'
import Projects from '@/components/projects'
import Experience from '@/components/experience'
import Contact from '@/components/contact'

type Section = 'hero' | 'about' | 'skills' | 'projects' | 'experience' | 'contact'

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>('hero')

  return (
    <main className="bg-[#050505] min-h-screen py-12">

      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <section id="hero">
        <Hero setActiveSection={setActiveSection} />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </main>
  )
}