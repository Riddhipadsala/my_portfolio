import { useState } from 'react'
import profile from './assets/Riddhi_pic.jpeg'

function App() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="bg-slate-950 text-slate-100 antialiased">
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_32%),linear-gradient(180deg,_#020617_0%,_#050f24_100%)]">
        <header className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:px-8 lg:px-12">
            <nav className="sticky top-0 z-10 rounded-3xl border border-slate-800 bg-slate-900/80 px-6 py-3 shadow-lg shadow-slate-950/20 backdrop-blur transition">
              <div className="flex items-center justify-between gap-4">
                <a href="#home" className="text-xl font-semibold tracking-tight text-white">MyPortfolio</a>
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

              <div className={`${navOpen ? 'block' : 'hidden'} mt-4 flex flex-col gap-3 text-sm text-slate-300 sm:flex-row sm:flex-wrap sm:items-center sm:justify-end sm:gap-20 sm:mt-0 sm:block`}>
                <a href="#about" className="rounded-2xl px-4 py-2 transition hover:text-white hover:bg-slate-900/70 sm:px-0 sm:py-0">About</a>
                <a href="#skills" className="rounded-2xl px-4 py-2 transition hover:text-white hover:bg-slate-900/70 sm:px-0 sm:py-0">Skills</a>
                <a href="#projects" className="rounded-2xl px-4 py-2 transition hover:text-white hover:bg-slate-900/70 sm:px-0 sm:py-0">Projects</a>
                <a href="#contact" className="rounded-2xl px-4 py-2 transition hover:text-white hover:bg-slate-900/70 sm:px-0 sm:py-0">Contact</a>
              </div>
            </nav>

            <section id="home" className="grid gap-10 py-3 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                <div className="space-y-6 sm:space-y-8">
                    <p className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-sm text-cyan-300 shadow-sm shadow-cyan-500/10">
                        Hello, I’m a Full Stack Developer with a focus on modern, accessible sites.
                    </p>
                    <div className="space-y-4">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl xl:text-6xl">
            Building Modern Web Experiences with Clean Code & Smart Design                        </h1>
                        <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                            I design and develop responsive websites with clean interactions, accessible layouts, and polished styling using Laravel, ReactJs, nodeJS, python, Tailwind, and modern frontend tooling.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-medium text-slate-950 transition hover:bg-cyan-400">
                            View projects
                        </a>
                        <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:text-white">
                            Let’s connect
                        </a>
                    </div>
                </div>

                <div className="relative isolate flex items-center justify-center overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-2 shadow-2xl shadow-slate-950/30 sm:p-10">
                    <div className="absolute inset-x-0 top-0 bg-cyan-500/10 blur-3xl" aria-hidden="true"></div>
                    <div className="relative mx-auto w-full max-w-[32rem]">
                        <div className="relative overflow-hidden rounded-[2rem] border border-slate-700 bg-slate-950/90 p-3 shadow-[0_0_60px_rgba(56,189,248,0.18)] sm:p-4">
                            <div className="overflow-hidden rounded-[1.75rem] bg-slate-900">
                                <img src={profile} alt="Profile picture of Riddhi Padsala" className="h-[28rem] w-full object-cover object-center sm:h-[22rem]" />
                            </div>
                        </div>
                        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/90 p-5 text-center text-slate-300 shadow-xl shadow-slate-950/20 sm:mt-8">
                            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Profile</p>
                            <h2 className="mt-3 text-2xl font-semibold text-white">Riddhi Padsala</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-400">Full Stack Developer crafting modern experiences with Laravel, Tailwind, and responsive design.</p>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute -right-16 top-12 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl"></div>
                </div>
            </section>
        </header>

        <main className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
            <section id="about" className="space-y-8 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20 sm:p-10">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">About</p>
                        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Full Stack Developer</h2>
                    </div>
                    <div className="rounded-full border border-slate-700 bg-slate-950/90 px-5 py-3 text-sm text-slate-300">Based in Surat · Available for freelance work</div>
                </div>
                <p className="max-w-4xl text-base leading-8 text-slate-300">
                   Full Stack Developer specializing in Laravel and modern web technologies. experience in building dynamic web applications and REST APIs. Skilled in Laravel, PHP, ReactJs, nodeJS, JavaScript, MySQL, and AI-integrated solutions using Flowise AI. I enjoy creating practical and user-friendly digital solutions.  </p>
            </section>

            <section id="skills" className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/15">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Technology</p>
                        <h2 className="mt-3 text-3xl font-bold text-white">Core development areas</h2>
                    </div>
                    <p className="max-w-xl text-sm text-slate-400">A modern stack built for fast user experiences, scalable backend systems, and reliable data management.</p>
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-3">
                    <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/10">
                        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Frontend</p>
                        <p className="mt-4 text-slate-400">
                            React Js <br />
                            Tailwind CSS <br />
                            HTML5 & CSS3 <br />
                            JavaScript (ES6+) <br />
                            Responsive Design <br />
                            Performance Optimization <br />
                            jQuery <br />
                            AJAX <br />
                            Laravel Blade Templating
                        </p>
                    </div>
                    <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/10">
                        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Backend</p>
                        <p className="mt-4 text-slate-400">
                            Laravel <br />
                            PHP <br />
                            NodeJS <br />
                            ExpressJS <br />
                            Python <br />
                            MVC Architecture <br />
                            API integration <br />
                            Error Handling & Debugging <br />
                            RESTful APIs
                        </p>
                    </div>
                    <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/10">
                        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Database</p>
                        <p className="mt-4 text-slate-400">
                            MySQL <br />
                            MongoDB <br />
                            Supabase
                        </p>
                    </div>
                </div>
            </section>

            <section id="experience" className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/15">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Experience</p>
                        <h2 className="mt-3 text-3xl font-bold text-white">Professional experience</h2>
                    </div>
                </div>
                <div className="mt-8 grid gap-6">
                    <article className="rounded-3xl border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/10 transition hover:-translate-y-1">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">[8 month] included intership</p>
                                <h3 className="mt-3 text-2xl font-semibold text-white">PlanicsDev Infotech</h3>
                            </div>
                            <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">2026 - Previous</span>
                        </div>
                        <p className="mt-5 text-slate-400 leading-7">Delivered responsive web applications, API integrations, and performance improvements for client-facing products using Laravel, PHP, and modern frontend tooling.</p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <span className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">Laravel</span>
                            <span className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">API Integrations</span>
                            <span className="rounded-2xl border border-slate-800 bg-slate-900 px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">Responsive UI</span>
                        </div>
                    </article>
                </div>
            </section>

            <section id="projects" className="mt-16 space-y-8">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/15">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Projects</p>
                            <h2 className="mt-3 text-3xl font-bold text-white">Selected work</h2>
                        </div>
                        <p className="text-sm text-slate-400">Modern Laravel applications built for performance, usability, and polished design.</p>
                    </div>
                </div>
                <div className="grid gap-6 lg:grid-cols-2">
                    <article className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 shadow-xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-950/95">
                        <div className="relative overflow-hidden bg-slate-800">
                            <div className="h-26 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_40%),linear-gradient(180deg,_rgba(15,23,42,0.8),_rgba(15,23,42,0.95))] p-6">
                                <div className="flex h-full items-end justify-between rounded-[1.75rem] border border-slate-700 bg-slate-950/80 p-4 shadow-inner shadow-slate-950/20">
                                    <div className="space-y-2 text-slate-300">
                                        <p className="text-lg font-semibold text-white">Akshardham Management System</p>
                                    </div>
                                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-300">ReacJS, NodeJs</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 p-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold text-white">Akshardham Management System</h3>
                                <p className="text-slate-400">A ReactJs, nodeJS and supabase based management system developed for handling and managing operations with efficient backend and responsive interface.</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">ReactJs</span>
                                <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">NodeJs</span>
                                <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">Supabase</span>
                                <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">JavaScript</span>
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-4 sm:justify-start">
                                <a href="https://github.com/ektajethva/MyAkshardham" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-400">
                                    View Code
                                </a>
                                <span className="text-sm text-slate-500">Full-stack Web Application</span>
                            </div>
                        </div>
                    </article>
                    <article className="group overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 shadow-xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-950/95">
                        <div className="relative overflow-hidden bg-slate-800">
                            <div className="h-26 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.2),_transparent_40%),linear-gradient(180deg,_rgba(15,23,42,0.8),_rgba(15,23,42,0.95))] p-6">
                                <div className="flex h-full items-end justify-between rounded-[1.75rem] border border-slate-700 bg-slate-950/80 p-4 shadow-inner shadow-slate-950/20">
                                    <div className="space-y-2 text-slate-300">
                                        <p className="text-lg font-semibold text-white">HireChef Platform</p>
                                    </div>
                                    <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-cyan-300">Laravel</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 p-8">
                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold text-white">HireChef Platform</h3>
                                <p className="text-slate-400">A Laravel-based platform for chef hiring and management with modern UI and backend functionality.</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">Laravel</span>
                                <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">PHP</span>
                                <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">MySQL</span>
                                <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">AJAX</span>
                                <span className="rounded-full border border-slate-700 bg-slate-950/80 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-300">Jquery</span>
                            </div>
                            <div className="flex flex-wrap items-center justify-between gap-4 sm:justify-start">
                                <a href="https://github.com/Riddhipadsala/hirechef" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:bg-cyan-400">
                                    View Code
                                </a>
                                <span className="text-sm text-slate-500">Full-stack Laravel application</span>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section id="contact" className="mt-16 rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-lg shadow-slate-950/20 sm:p-10">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                    <div className="space-y-4">
                        <div>
                            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Contact</p>
                            <h2 className="mt-3 text-3xl font-bold text-white">Let’s build something together.</h2>
                        </div>
                        <p className="max-w-2xl text-base leading-8 text-slate-300">
                            Have a project idea, a website refresh, or a web app challenge? I’m happy to help you turn it into a polished, user-friendly experience.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5 text-slate-300 shadow-sm shadow-slate-950/10">
                                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Email</p>
                                <p className="mt-3 text-lg font-semibold text-white">riddhpadsala52@gmail.com</p>
                            </div>
                            <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-5 text-slate-300 shadow-sm shadow-slate-950/10">
                                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Phone</p>
                                <p className="mt-3 text-lg font-semibold text-white">+91 84900 08540</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/20">
                        <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Quick connect</p>
                        <div className="mt-6 space-y-4">
                            <a href="mailto:riddhpadsala52@gmail.com" className="flex items-center justify-between rounded-3xl bg-white/95 px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-white">
                                Send an email
                                <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-slate-950">Fast reply</span>
                            </a>
                            <a href="https://www.linkedin.com/in/riddhi-padsala-67601b2ab?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-900 px-5 py-4 text-sm font-semibold text-white transition hover:border-cyan-500/40 hover:bg-slate-950">
                                Connect on LinkedIn
                                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">Profile</span>
                            </a>
                            <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-slate-300">
                                <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Availability</p>
                                <p className="mt-3 text-sm text-slate-200">Currently accepting freelance and contract work for web development projects.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
      </div>
    </body>
    </>
  )
}

export default App
