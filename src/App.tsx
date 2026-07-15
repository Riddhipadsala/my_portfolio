import { useState } from 'react'
import profile from './assets/Riddhi_pic.jpeg';
import { Helmet } from 'react-helmet-async';

function App() {
  const [navOpen, setNavOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ]

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
    alert('Message received! Thank you for reaching out.')
  }

  return (
    <>
    <Helmet>
      <title>Riddhi Padsala | Laravel Developer </title>
      <meta name="description" content="portfolio for the full stack laravel developer" />
      <meta name="keywords" content="laravel, React, PHP, Nodejs, Riddhi Padsala, portfolio, Full stack Developer, Full stack laravel developer" />
      <meta name="author" content="Riddhi Padsala" />   
    </Helmet>
    <div className="bg-slate-950 text-slate-100 antialiased">
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_32%),linear-gradient(180deg,_#020617_0%,_#050f24_100%)]">
        <header className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:px-8 lg:px-12">
          {/* Navigation */}
          <nav className="sticky top-0 z-10 rounded-3xl border border-slate-800 bg-slate-900/90 px-6 py-4 shadow-lg shadow-slate-950/20 backdrop-blur transition">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <a href="#home" className="text-xl font-semibold tracking-tight text-white">Riddhi Padsala</a>
                  <p className="text-xs text-slate-400">Full Stack Laravel Developer</p>
                </div>
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 text-slate-300 transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-400 sm:hidden"
                  aria-expanded={navOpen}
                  aria-label="Toggle navigation"
                  onClick={() => setNavOpen((open) => !open)}
                >
                  <span className="sr-only">Toggle navigation</span>
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {navOpen ? (
                      <path d="M18 6L6 18M6 6l12 12" />
                    ) : (
                      <path d="M4 7h16M4 12h16M4 17h16" />
                    )}
                  </svg>
                </button>
              </div>

              <div className={`${navOpen ? 'block' : 'hidden'} sm:block`}>
                <div className="flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:items-center sm:gap-8">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setNavOpen(false)}
                      className="rounded-2xl px-4 py-2 transition hover:text-white hover:bg-slate-900/70 sm:px-0 sm:py-0"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Hero Section */}
          <section id="home" className="grid gap-10 py-3 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div className="space-y-6 sm:space-y-8">
              <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-cyan-300 shadow-sm shadow-cyan-500/10">
                Full Stack Laravel Developer
              </p>
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl">
                  Building Modern Web Experiences with Clean Code
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Experienced Full Stack Developer passionate about creating intelligent systems and scalable web applications. Expertise in React, Laravel, Node.js, and Express.js with strong skills in frontend UI design and backend API development.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-400">
                  View projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:text-white">
                  Let's connect
                </a>
                    <a href="https://www.linkedin.com/in/riddhi-padsala-67601b2ab/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:text-white">
                      <span className="relative z-10 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                        LinkedIn
                      </span>
                    </a>
              </div>
            </div>

            <div className="relative isolate flex items-center justify-center overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-2 shadow-2xl shadow-slate-950/30 sm:p-10">
              <div className="absolute inset-x-0 top-0 bg-cyan-500/10 blur-3xl" aria-hidden="true"></div>
              <div className="relative mx-auto w-full max-w-[32rem]">
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-950/90 p-3 shadow-[0_0_60px_rgba(56,189,248,0.18)] sm:p-4">
                  <div className="overflow-hidden rounded-[1.75rem] bg-slate-900">
                    <img src={profile} alt="Riddhi Padsala - Full Stack Laravel Developer" className="h-[28rem] w-full object-cover object-center sm:h-[22rem]" />
                  </div>
                </div>
                <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/90 p-5 text-center text-slate-300 shadow-xl shadow-slate-950/20 sm:mt-8">
                  <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Developer</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Riddhi Padsala</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-400">Surat, India • Available for freelance work</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-16 top-12 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl"></div>
            </div>
          </section>
        </header>

        <main className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
          {/* About Section */}
          <section id="about" className="space-y-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20 sm:p-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">About</p>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Full Stack Laravel Developer</h2>
              </div>
            </div>
            <p className="max-w-4xl text-base leading-8 text-slate-300">
              Full Stack Developer specializing in Laravel and modern web technologies with experience in building dynamic web applications and REST APIs. Skilled in Laravel, PHP, React, Node.js, JavaScript, MySQL, and AI-integrated solutions. I enjoy creating practical and user-friendly digital solutions that solve real-world problems.
            </p>
          </section>

          {/* Education Section */}
          <section id="education" className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/15">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">🎓 Education</p>
                <h2 className="mt-3 text-3xl font-bold text-white">Academic background</h2>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-slate-700/50 bg-gradient-to-br from-slate-900/50 to-slate-950/50 p-6 backdrop-blur">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white leading-snug">Bachelor of computer application</h3>
                  <p className="mt-3 text-lg text-cyan-300 font-semibold">Sutex Bank College Of Computer application & Science</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 px-4 py-3 text-center">
                  <p className="text-xs text-slate-400 uppercase tracking-[0.28em]">CGPA</p>
                  <p className="text-2xl font-bold text-cyan-300">8.6 +</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 border-t border-slate-700/50 pt-4">
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span>2023 – 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>Surat, Gujarat, India</span>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/15">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Technical Skills</p>
                <h2 className="mt-3 text-3xl font-bold text-white">Core development areas</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/10">
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Languages</p>
                <p className="mt-4 space-y-2 text-slate-400">
                  <div>PHP</div>
                  <div>JavaScript</div>
                  <div>TypeScript</div>
                  <div>Python</div>
                  <div>HTML/CSS</div>
                </p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/10">
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Web Development</p>
                <p className="mt-4 space-y-2 text-slate-400">
                  <div>Laravel / PHP</div>
                  <div>React.js</div>
                  <div>Node.js / Express.js</div>
                  <div>Tailwind CSS</div>
                  <div>RESTful APIs</div>
                </p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/10">
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Databases & Tools</p>
                <p className="mt-4 space-y-2 text-slate-400">
                  <div>MySQL</div>
                  <div>MongoDB</div>
                  <div>Supabase</div>
                  <div>Git & GitHub</div>
                  <div>Docker</div>
                </p>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/15">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Experience</p>
                <h2 className="mt-3 text-3xl font-bold text-white">Professional journey</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-6">
              <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/10 transition hover:-translate-y-1">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Full Stack Laravel Developer - Internship - job</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">PlanicsDev Infotech</h3>
                  </div>
                  <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">2025 - Present</span>
                </div>
                <p className="mt-5 text-slate-400 leading-7">Developing responsive web applications using Laravel and PHP. Building REST APIs, integrating third-party services, and optimizing frontend performance with React.js and Tailwind CSS.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">Laravel</span>
                  <span className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">React</span>
                  <span className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">API Development</span>
                </div>
              </article>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mt-16 space-y-8">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/15">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-cyan-300 flex items-center gap-2">
                    <span>🚀</span> Featured Projects
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-white">My Best Work</h2>
                  <p className="mt-2 text-slate-400">Showcasing innovative solutions built with modern technologies</p>
                </div>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Project 1 Card */}
              <article className="group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 shadow-xl shadow-slate-950/20 transition-all duration-500 hover:-translate-y-3 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                <div className="relative overflow-hidden bg-slate-800 h-48">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.3),_transparent_50%),linear-gradient(180deg,_rgba(15,23,42,0.7),_rgba(15,23,42,0.95))] group-hover:from-cyan-500/20 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-center">
                      <p className="text-sm text-cyan-300 font-semibold tracking-[0.28em] uppercase">React + Node.js</p>
                      <p className="text-3xl mt-2">⚡</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="rounded-full bg-cyan-500/20 border border-cyan-500/50 backdrop-blur px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-300 font-semibold">React, Node, Supabase</span>
                  </div>
                </div>

                <div className="relative space-y-6 p-8">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">Akshardham Management System</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-7">A React and Node.js-based management system developed for handling operations with efficient backend and responsive interface using Supabase for data management.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-slate-700 bg-slate-950/50 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300">React.js</span>
                      <span className="rounded-full border border-slate-700 bg-slate-950/50 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300">Node.js</span>
                      <span className="rounded-full border border-slate-700 bg-slate-950/50 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300">Supabase</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group/btn relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105">
                      <span className="relative z-10 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </article>

              {/* Project 2 Card */}
              <article className="group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-950 shadow-xl shadow-slate-950/20 transition-all duration-500 hover:-translate-y-3 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                <div className="relative overflow-hidden bg-slate-800 h-48">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.3),_transparent_50%),linear-gradient(180deg,_rgba(15,23,42,0.7),_rgba(15,23,42,0.95))] group-hover:from-purple-500/20 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-center">
                      <p className="text-sm text-purple-300 font-semibold tracking-[0.28em] uppercase">Laravel + PHP</p>
                      <p className="text-3xl mt-2">🔥</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="rounded-full bg-purple-500/20 border border-purple-500/50 backdrop-blur px-4 py-2 text-xs uppercase tracking-[0.28em] text-purple-300 font-semibold">Laravel, PHP, MySQL</span>
                  </div>
                </div>

                <div className="relative space-y-6 p-8">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">HireChef Platform</h3>
                    <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300 leading-7">A Laravel-based platform for chef hiring and management with modern UI and backend functionality including AI chatbot integrated with Flowise AI tool.</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-slate-700 bg-slate-950/50 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300">Laravel</span>
                      <span className="rounded-full border border-slate-700 bg-slate-950/50 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300">PHP</span>
                      <span className="rounded-full border border-slate-700 bg-slate-950/50 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300">MySQL</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group/btn relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105">
                      <span className="relative z-10 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        View Code
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </section>

          {/* Resume Section */}
          <section id="resume" className="mt-20">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 sm:p-10 shadow-xl shadow-slate-950/20">

              {/* Heading */}
              <div className="text-center mb-10">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
                  Resume
              </p>

              <h2 className="mt-4 text-4xl font-bold text-white">
                  My Resume & CV
              </h2>

              <p className="mt-4 max-w-2xl mx-auto text-slate-400 leading-7">
                  Download my latest resume to know more about my experience, projects,
                  technical skills, and development journey.
              </p>
              </div>

              {/* Resume Card */}
              <div className="max-w-xl mx-auto">

              <a
                  href="/assets/Riddhi_Padsala_Resume.pdf" 
                              download="Riddhi_Padsala_Resume.pdf"
                  className="group block rounded-[2rem] border border-slate-700 bg-gradient-to-br from-slate-950 to-slate-900 p-10 transition duration-500 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20"
              >

                  <div className="flex justify-center mb-6">
                  <div className="h-24 w-24 rounded-3xl flex items-center justify-center bg-cyan-500/10 border border-cyan-500/30">
                      <span className="text-5xl">📄</span>
                  </div>
                  </div>

                  <div className="text-center">
                  <h3 className="text-2xl font-bold text-white">
                      Download Resume
                  </h3>

                  <p className="mt-4 text-slate-400 leading-7">
                      View my complete profile including projects, internship experience,
                      technical expertise, and academic background.
                  </p>
                  </div>

                  <button
                  type="button"
                  className="mt-8 w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-3 text-sm font-semibold text-white transition group-hover:shadow-lg group-hover:shadow-cyan-500/40"
                  >
                  ⬇ Download PDF
                  </button>

              </a>
              </div>

              {/* Bottom Text */}
              <div className="mt-10 text-center">
              <a
                  href="#contact"
                  className="text-cyan-300 text-sm hover:text-cyan-200 transition"
              >
                  Need more details? Contact me →
              </a>
              </div>

          </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Contact</p>
                  <h2 className="mt-3 text-3xl font-bold text-white">Let's build something together.</h2>
                </div>
                <p className="max-w-2xl text-base leading-8 text-slate-300">
                  Have a project idea, a website refresh, or a web app challenge? I'm happy to help you turn it into a polished, user-friendly experience.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5 text-slate-300 shadow-sm shadow-slate-950/10">
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Email</p>
                    <p className="mt-3 text-lg font-semibold text-white">riddhipadsala52@gmail.com</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5 text-slate-300 shadow-sm shadow-slate-950/10">
                    <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Phone</p>
                    <p className="mt-3 text-lg font-semibold text-white">+91 84900 08540</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/20">
                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Quick Message</p>
                <div className="mt-6 space-y-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    placeholder="Your name"
                    required
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 transition focus:border-cyan-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Your email"
                    required
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 transition focus:border-cyan-500 focus:outline-none"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    placeholder="Your message"
                    rows={4}
                    required
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-100 placeholder-slate-500 transition focus:border-cyan-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-16 border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>©2025 Riddhi Padsala. Built with ☕ and 🧑‍💻.</p>
            <div className="mt-4 flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/riddhi-padsala-67601b2ab/" target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-300">LinkedIn</a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-300">GitHub</a>
              <a href="mailto:riddhpadsala52@gmail.com" className="transition hover:text-cyan-300">Email</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
    </>
  )
}

export default App
