'use client'

import { useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'

interface Project {
  id: number
  title: string
  subtitle: string
  description: string
  fullDescription: string
  technologies: string[]
  icon: string
  flyer?: string
  github: string
  year: string
  category: string
}

export default function Projects() {
  const [expandedId, setExpandedId] = useState<number | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      subtitle: 'Frontend Web Marketplace',
      description: 'Modern marketplace with responsive design and intuitive user experience.',
      fullDescription:
        `Built a complete e-commerce platform using Tailwind CSS to create a clean and responsive user interface. The application includes product listings, detailed product pages, shopping cart functionality, and a smooth checkout experience. Fully responsive across devices with accessibility best practices and optimized performance for fast loading times.`,
      technologies: ['Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
      icon: '🛒',
      flyer: '../image/flyer-danish.png',
      github: 'https://github.com/danishrya/tailwind.e-commerce-punya-danish.git',
      year: '2024',
      category: 'Web',
    },
    {
      id: 2,
      title: 'E-Library System',
      subtitle: 'Digital Library Management',
      description: 'A full-featured digital library platform to browse, borrow, and manage books.',
      fullDescription:
        `Full-featured digital library platform enabling users to browse collections, search dynamically, borrow books, and monitor reading history. Includes authentication, role-based access control (admin & user), structured database management, and responsive UI design.`,
      technologies: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript'],
      icon: '📚',
      flyer: '../image/Promotional_Graphic.jpg',
      github: 'https://github.com/danishrya/library-laravel.git',
      year: '2024',
      category: 'Web',
    },
    {
      id: 3,
      title: 'Payroll System',
      subtitle: 'Automated HR Management',
      description: 'Web-based payroll management with automated salary processing.',
      fullDescription:
        `Comprehensive web-based payroll system designed to automate salary calculations, tax deductions, and employee record management. Supports multiple employees, generates dynamic pay stubs, and ensures accurate payroll processing with secure data management.`,
      technologies: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript'],
      icon: '💼',
      flyer: '../image/flyer-payroll.png',
      github: '',
      year: '2024',
      category: 'Web',
    },
    {
      id: 4,
      title: 'Invoice Manager',
      subtitle: 'Business Invoice Automation',
      description: 'Automated invoice creation and tracking system for businesses.',
      fullDescription:
        `Web-based invoice management system providing customizable templates, automated numbering, payment status tracking, and organized financial record storage with secure data handling.`,
      technologies: ['Laravel', 'PHP', 'Tailwind CSS'],
      icon: '🧾',
      flyer: '../image/flyer-invoice.png',
      github: 'https://github.com/danishrya/invoice-finalproject.git',
      year: '2025',
      category: 'Web',
    },
    {
      id: 5,
      title: 'Karirku',
      subtitle: 'Career Development Platform',
      description: 'Mobile career platform for job discovery and skills development.',
      fullDescription:
        `Mobile career development application to help users find job opportunities matching their interests and skills. Features job listings, professional profile building, certification tracking, achievement showcasing, and career training modules.`,
      technologies: ['Flutter', 'Dart'],
      icon: '👔',
      flyer: '../image/karirku.png',
      github: 'https://github.com/danishrya/karirku_application.git',
      year: '2024',
      category: 'Mobile',
    },
    {
      id: 6,
      title: 'Barking News',
      subtitle: 'Real-Time News Application',
      description: 'Modern news app delivering real-time updates with smart recommendations.',
      fullDescription:
        `Mobile news platform delivering breaking news quickly. Users can explore trending topics, search specific categories, and receive real-time updates. Features intuitive search, categorized filtering, and personalized recommendations.`,
      technologies: ['Flutter', 'Dart', 'GetX'],
      icon: '📰',
      flyer: '../image/barking-news.png',
      github: 'https://github.com/danishrya/news_app.git',
      year: '2024',
      category: 'Mobile',
    },
    {
      id: 7,
      title: 'NexToDo',
      subtitle: 'Task & Productivity Management',
      description: 'Smart task management for daily focus and productivity.',
      fullDescription:
        `Productivity-focused task management application to organize, track, and complete daily activities efficiently. Users create tasks, manage schedules by date, search tasks easily, and monitor daily progress in a clean, structured interface.`,
      technologies: ['Flutter', 'Dart', 'GetX', 'HTTP'],
      icon: '✅',
      flyer: '../image/flyer-todo.png',
      github: 'https://github.com/danishrya/todo_final.git',
      year: '2025',
      category: 'Mobile',
    },
    {
      id: 8,
      title: 'Event Ticketing',
      subtitle: 'Event Management System',
      description: 'Efficient event ticketing and attendee management platform.',
      fullDescription:
        `Web-based system simplifying event registration, ticket purchasing, and attendee management. Users browse events, register securely, generate digital tickets, and receive real-time confirmation. Admins manage listings and track ticket sales through a structured dashboard.`,
      technologies: ['Flutter', 'Dart', 'GetX', 'HTTP', 'Mobile Scanner'],
      icon: '🎟️',
      flyer: '../image/@dnishrya.png',
      github: 'https://github.com/danishrya/todo_final.git',
      year: '2025',
      category: 'Mobile',
    },
  ]

  return (
    <section className="relative min-h-screen py-24 px-6 bg-[#050505] overflow-hidden">

      {/* Dot grid bg */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative max-w-6xl mx-auto space-y-20 z-10">

        {/* HEADER */}
        <div className="flex items-end justify-between border-b border-white/10 pb-8">
          <div className="space-y-3">
            <p className="text-xs font-mono text-white/30 tracking-[0.3em] uppercase">Section / 03</p>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none">
              Projects
            </h2>
          </div>
          <p className="hidden md:block text-xs font-mono text-white/20 tracking-widest text-right">
            {projects.length} selected works
          </p>
        </div>

        {/* TABLE LIST — editorial */}
        <div className="space-y-0">
          {/* Table header */}
          <div className="hidden md:grid grid-cols-12 gap-0 border-b border-white/10 pb-4 mb-0">
            <span className="col-span-1 text-xs font-mono text-white/20 tracking-widest uppercase">No.</span>
            <span className="col-span-4 text-xs font-mono text-white/20 tracking-widest uppercase">Project</span>
            <span className="col-span-2 text-xs font-mono text-white/20 tracking-widest uppercase">Category</span>
            <span className="col-span-3 text-xs font-mono text-white/20 tracking-widest uppercase">Stack</span>
            <span className="col-span-1 text-xs font-mono text-white/20 tracking-widest uppercase">Year</span>
            <span className="col-span-1 text-xs font-mono text-white/20 tracking-widest uppercase" />
          </div>

          {/* Project rows */}
          {projects.map((project, index) => (
            <div key={project.id}>
              <button
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`w-full text-left border-b border-white/8 py-6 md:py-8 transition-all duration-200 
                  hover:bg-white/[0.03]
                  ${expandedId === project.id ? 'bg-white/[0.04]' : ''}
                `}
              >
                <div className="grid grid-cols-12 gap-4 items-center">

                  {/* Number */}
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-xs font-mono text-white/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-8 md:col-span-4">
                    <div className="flex items-center gap-3">
                      <span className="text-lg hidden sm:inline">{project.icon}</span>
                      <div>
                        <h3 className="text-white font-bold text-base md:text-lg tracking-tight leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-white/30 text-xs font-mono mt-0.5 hidden md:block">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="hidden md:block col-span-2">
                    <span className="text-xs font-mono text-white/40 border border-white/15 px-3 py-1 tracking-widest">
                      {project.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Stack preview */}
                  <div className="hidden md:block col-span-3">
                    <p className="text-xs font-mono text-white/30 tracking-wide">
                      {project.technologies.slice(0, 2).join(' · ')}
                      {project.technologies.length > 2 ? ` +${project.technologies.length - 2}` : ''}
                    </p>
                  </div>

                  {/* Year */}
                  <div className="hidden md:block col-span-1">
                    <span className="text-xs font-mono text-white/25">{project.year}</span>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-2 md:col-span-1 flex justify-end">
                    <div className={`transition-all duration-300 ${expandedId === project.id ? 'rotate-45' : ''}`}>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white/70" />
                    </div>
                  </div>

                </div>
              </button>

              {/* EXPANDED PANEL */}
              {expandedId === project.id && (
                <div className="border-b border-white/8 bg-[#0d0d0d]">
                  <div className="grid md:grid-cols-2 gap-0">

                    {/* Image */}
                    {project.flyer && (
                      <div className="overflow-hidden">
                        <img
                          src={project.flyer}
                          alt={project.title}
                          className="w-full h-64 md:h-80 object-cover grayscale opacity-70 hover:opacity-90 hover:grayscale-0 transition-all duration-700"
                        />
                      </div>
                    )}

                    {/* Details */}
                    <div className="p-10 space-y-8">
                      <div>
                        <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-3">Overview</p>
                        <p className="text-white/60 text-sm leading-relaxed font-light">
                          {project.fullDescription}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs font-mono text-white/30 tracking-widest uppercase mb-3">Stack</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span key={i} className="text-xs font-mono text-white/50 border border-white/12 px-3 py-1.5 tracking-widest">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-xs font-mono text-white border border-white/20 px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-200 tracking-widest uppercase"
                          >
                            View Code
                            <ArrowUpRight className="w-3 h-3" />
                          </a>
                        )}
                        <button
                          onClick={() => setExpandedId(null)}
                          className="flex items-center gap-2 text-xs font-mono text-white/40 border border-white/10 px-5 py-2.5 hover:border-white/30 transition-all duration-200 tracking-widest uppercase"
                        >
                          Close
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              )}

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="border border-white/8 p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-xl mb-1">Want to collaborate?</p>
            <p className="text-white/40 text-sm font-mono">Let's build something great together.</p>
          </div>
          <a
            href="mailto:mdanishardyanda@gmail.com"
            className="flex items-center gap-2 px-8 py-4 bg-white text-black text-sm font-bold tracking-widest uppercase hover:bg-white/90 transition-all duration-200"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  )
}