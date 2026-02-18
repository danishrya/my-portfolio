'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react'

export default function Experience() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [openedSlide, setOpenedSlide] = useState<number | null>(null)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const eventExperiences = [
    {
      id: 1,
      year: 'Dec 2025',
      title: 'Student Exchange Program',
      subtitle: 'Malaysia — International Exposure',
      description: 'Participated in an international student exchange program, expanding global perspective in technology and education.',
      fullDescription:
        'Participated in a student exchange program in Malaysia where I had the opportunity to experience a different educational environment and culture. During the program, I delivered a session on building scalable web applications and shared insights about modern development practices. This experience helped me improve my communication skills, confidence in public speaking, and broadened my understanding of global technology trends.',
      image: '/image/putrajaya.jpeg',
      tag: 'International',
    },
    {
      id: 2,
      year: 'Sep 2024',
      title: 'Website Trainer',
      subtitle: 'SMK Global Prima Islamic School',
      description: 'Conducted comprehensive frontend development training for students.',
      fullDescription:
        `Conducted a comprehensive website development training session for students at SMK Global Prima Islamic School. Introduced modern frontend development using HTML & CSS, focusing on component structure, responsive layouts, and UI best practices. Guided students through hands-on exercises to build functional web interfaces while emphasizing clean code and practical implementation.`,
      image: '/image/sept-2024.jpg',
      tag: 'Teaching',
    },
    {
      id: 3,
      year: 'Nov 2024',
      title: 'GDG Event',
      subtitle: 'Indonesia Dev Community',
      description: 'Mentored teams during community event introducing Gemini AI and developer tools.',
      fullDescription:
        `Served as a mentor during a community event organized by the Indonesia Dev Community. Provided technical guidance to multiple teams, assisting in debugging applications, improving UI/UX flow, and refining backend API structures. Helped participants optimize performance, structure scalable solutions, and deliver functional prototypes within tight deadlines.`,
      image: '/image/may-2025.jpg',
      tag: 'Community',
    },
    {
      id: 4,
      year: '2026',
      title: 'Client Meeting — Ujikom',
      subtitle: 'Project Requirements & Planning',
      description: 'Engaged with a client to define project requirements and establish development roadmap.',
      fullDescription:
        `Engaged in a client meeting to discuss project requirements, timelines, and deliverables for an upcoming web development project. Collaborated with the client to understand their vision, provided technical insights, and outlined a development roadmap to ensure successful project execution. This experience enhanced client communication skills and the ability to translate technical concepts into actionable plans.`,
      image: '/image/meeting-client.jpg',
      tag: 'Client Work',
    },
    {
      id: 5,
      year: '2025',
      title: 'Website Trainer',
      subtitle: 'SMA Mekar Arum',
      description: 'Speaker on frontend development fundamentals for high school students.',
      fullDescription:
        `Conducted a frontend development training session for high school students at SMA Mekar Arum. The session covered fundamental web development concepts including HTML, CSS, responsive design, and an introduction to modern frameworks. Students were guided through hands-on practice to build simple, interactive web interfaces while understanding UI structure and best practices.`,
      image: '/image/mekar-arum.jpg',
      tag: 'Teaching',
    },
    {
      id: 6,
      year: '2024',
      title: 'Website Trainer',
      subtitle: 'SMA Mekar Arum',
      description: 'Second session on web development, covering core HTML/CSS fundamentals.',
      fullDescription:
        `Conducted a second frontend development training session for high school students at SMA Mekar Arum. Revisited and deepened concepts from the first session — HTML, CSS, responsive design — and introduced practical project-based learning. Students built real interactive web interfaces, reinforcing best practices for clean code and structured UI development.`,
      image: '/image/nov-2024.jpg',
      tag: 'Teaching',
    },
  ]

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      if (!isHovered) {
        setActiveSlide((prev) =>
          prev === eventExperiences.length - 1 ? 0 : prev + 1
        )
      }
    }, 5000)
  }

  const stopSlider = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    if (!openedSlide) startSlider()
    return () => stopSlider()
  }, [openedSlide, isHovered])

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === eventExperiences.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? eventExperiences.length - 1 : prev - 1))
  }

  return (
    <section className="min-h-screen bg-[#080808] text-white py-24 px-6 overflow-hidden">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex items-end justify-between border-b border-white/10 pb-8">
          <div className="space-y-3">
            <p className="text-xs font-mono text-white/30 tracking-[0.3em] uppercase">Section / 04</p>
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-none">
              Events
            </h2>
          </div>
          <p className="hidden md:block text-xs font-mono text-white/20 tracking-widest text-right">
            Teaching · Speaking · Community
          </p>
        </div>
      </div>

      {/* SLIDER */}
      <div className="max-w-6xl mx-auto relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

        {/* Slide track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {eventExperiences.map((event) => (
              <div key={event.id} className="min-w-full">

                {/* Card — editorial split layout */}
                <div
                  className={`relative border border-white/10 overflow-hidden cursor-pointer transition-all duration-300
                    hover:border-white/25`}
                  onClick={() => {
                    const isOpen = openedSlide === event.id
                    setOpenedSlide(isOpen ? null : event.id)
                    if (!isOpen) stopSlider()
                  }}
                >
                  <div className="grid md:grid-cols-2">

                    {/* Image side */}
                    <div className="relative h-72 md:h-[480px] overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808] opacity-60 md:opacity-80" />
                    </div>

                    {/* Content side */}
                    <div className="p-10 md:p-16 flex flex-col justify-between bg-[#0d0d0d]">
                      <div className="space-y-6">

                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono text-white/30 tracking-[0.3em] uppercase">
                            {event.year}
                          </span>
                          <span className="text-xs font-mono text-white/25 border border-white/12 px-3 py-1 tracking-widest">
                            {event.tag}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-3xl md:text-4xl font-black text-white leading-tight mb-3">
                            {event.title}
                          </h3>
                          <p className="text-white/40 font-mono text-sm tracking-wide">
                            {event.subtitle}
                          </p>
                        </div>

                        <p className="text-white/50 text-sm leading-relaxed font-light max-w-sm">
                          {event.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 mt-8 text-xs font-mono text-white/30 hover:text-white/60 transition-colors">
                        <span className="tracking-widest uppercase">Read more</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </div>
                    </div>

                  </div>
                </div>

                {/* DETAIL PANEL */}
                {openedSlide === event.id && (
                  <div className="mt-px border border-white/10 border-t-0 bg-[#0a0a0a]">
                    <div className="p-10 md:p-14 space-y-6">
                      <p className="text-xs font-mono text-white/30 tracking-[0.3em] uppercase mb-4">Full Details</p>
                      <p className="text-white/60 leading-relaxed text-sm font-light max-w-2xl">
                        {event.fullDescription}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setOpenedSlide(null)
                          startSlider()
                        }}
                        className="text-xs font-mono text-white/40 border border-white/12 px-6 py-2.5 hover:border-white/30 hover:text-white/70 transition-all duration-200 tracking-widest uppercase mt-4"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>
        </div>

        {/* Navigation bar */}
        <div className="flex items-center justify-between mt-8">

          {/* Dots */}
          <div className="flex gap-2">
            {eventExperiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`transition-all duration-300 ${
                  activeSlide === index
                    ? 'w-8 h-[2px] bg-white'
                    : 'w-4 h-[2px] bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 border border-white/15 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              <ChevronLeft className="w-4 h-4 text-white/50" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 border border-white/15 flex items-center justify-center hover:border-white/40 hover:bg-white/5 transition-all duration-200"
            >
              <ChevronRight className="w-4 h-4 text-white/50" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-xs font-mono text-white/25">
            {String(activeSlide + 1).padStart(2, '0')} / {String(eventExperiences.length).padStart(2, '0')}
          </div>

        </div>

      </div>
    </section>
  )
}