import { useState, useEffect, useRef } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import BNews from './projectImages/BNews.png'
import FinFlow from './projectImages/FinFlow.png'
import veriqos from './projectImages/veriqos.png'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const categoryLabel = {
    web: 'Web Dev',
    design: 'UI/UX Design',
    'ui/ux': 'App UI',
  }[project.category] || project.category

  return (
    <div
      ref={ref}
      style={{
        background: '#0a0a0a',
        border: '1px solid var(--border-subtle)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.28)' }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
      onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
      role="button"
      aria-label={`View ${project.title}`}
    >
      {/* Image / placeholder */}
      <div style={{ aspectRatio: '16/10', position: 'relative', overflow: 'hidden', background: '#111' }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
          />
        ) : (
          <div style={{
            width: '100%', height: '100%',
            background: project.gradient || '#1a1a1a',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{ fontSize: '2.5rem' }}>{project.emoji || '💻'}</span>
          </div>
        )}

        {/* Overlay with link icon */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(10,10,10,0.5) 0%, transparent 60%)',
        }} />
        <div style={{
          position: 'absolute', top: 12, right: 12,
          background: 'rgba(10,10,10,0.8)',
          border: '1px solid rgba(201,169,110,0.15)',
          padding: '3px 10px',
          fontSize: '10px',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)',
          letterSpacing: '0.06em',
        }}>
          {project.year}
        </div>
        <div style={{
          position: 'absolute', bottom: 12, right: 12,
          width: 30, height: 30,
          background: 'var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="12" height="12" fill="none" stroke="#0a0a0a" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            {categoryLabel}
          </span>
          <span style={{ color: 'var(--border-subtle)', fontSize: '10px' }}>·</span>
          <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
            {project.duration}
          </span>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.15rem', fontWeight: 500, marginBottom: 10,
          color: 'var(--text-primary)',
          letterSpacing: '-0.01em',
        }}>
          {project.title}
        </h3>

        <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.7, marginBottom: 18, flex: 1 }}>
          {project.fullDescription}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {project.tags.map((tag) => (
            <span key={tag} className="badge" style={{ fontSize: '10px', padding: '3px 8px' }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Balu Riders Website & Branding',
      category: 'web',
      fullDescription: 'Designed and delivered the complete brand identity and website UI/UX in Figma. Built a scalable design system and created all visual assets for digital and print media.',
      gradient: 'linear-gradient(135deg, #1a1208, #181006)',
      emoji: '🏍️',
      tags: ['Figma', 'UI/UX', 'Branding', 'Design System'],
      duration: 'Freelance', client: 'Balu Riders', year: '2026', url: 'https://baluriders.com',
    },
    {
      id: 2,
      title: 'Personal Portfolio Website',
      category: 'web',
      fullDescription: 'Responsive personal portfolio built with React. Features scroll animations, dark theme, project showcase, and a working contact form via EmailJS.',
      gradient: 'linear-gradient(135deg, #1a1a1a, #2a2a2a)',
      emoji: '🚀',
      tags: ['React', 'Tailwind CSS', 'Responsive', 'Animations'],
      duration: '2 weeks', client: 'Personal Project', year: '2025', url: '#',
    },
    {
      id: 3,
      title: 'FinFlow – Personal Finance Mobile App',
      category: 'ui/ux',
      fullDescription: 'Designed a modern personal finance mobile app focusing on clean UI and intuitive UX. Created wireframes and high-fidelity prototypes for expense tracking and budgeting.',
      image: FinFlow,
      tags: ['Figma', 'Mobile UI', 'Prototyping', 'Design System'],
      duration: 'Personal', client: 'Portfolio', year: '2026', url: '#',
    },
    {
      id: 4,
      title: 'LibraryHub',
      category: 'web',
      fullDescription: 'Library Management System in React — book listing, search/filter functionality, category management, and a fully responsive UI.',
      gradient: 'linear-gradient(135deg, #141414, #1e1e1e)',
      emoji: '📚',
      tags: ['React', 'JavaScript', 'CSS', 'Responsive'],
      duration: '2 weeks', client: 'Personal Project', year: '2025', url: 'https://library-hub-web.netlify.app/',
    },
    {
      id: 5,
      title: 'BNews – News Mobile App UI',
      category: 'ui/ux',
      fullDescription: 'Modern news mobile app focused on readability and smooth user experience. Category-based news browsing, trending highlights, search functionality, and personalized feed.',
      image: BNews,
      tags: ['Figma', 'UI Design', 'Typography', 'Mobile App'],
      duration: 'Personal', client: 'Portfolio', year: '2026', url: '#',
    },
    {
      id: 6,
      title: 'Vet Consultation Online',
      category: 'design',
      fullDescription: 'End-to-end user experience for an online pet consultation platform. Created wireframes and interactive flows for appointment booking and service discovery.',
      gradient: 'linear-gradient(135deg, #101a13, #0f1a1e)',
      emoji: '🐾',
      tags: ['Figma', 'UI/UX', 'Healthcare', 'Prototyping'],
      duration: 'Contract', client: 'DigiQuest', year: '2025', url: 'https://www.figma.com/design/5AH8d659NJWQbqsyhdZXq0/DigiVet?node-id=0-1',
    },
    {
      id: 7,
      title: 'GreenLand Hospital',
      category: 'design',
      fullDescription: 'Comprehensive UI/UX for GreenLand Hospital — patient booking, doctor profiles, services showcase. Designed for accessibility and trust.',
      gradient: 'linear-gradient(135deg, #0f1a10, #0a160a)',
      emoji: '🏥',
      tags: ['Figma', 'UI/UX', 'Healthcare', 'Wireframing'],
      duration: '3 months', client: 'DigiQuest Consultancy', year: '2025',
      url: 'https://www.figma.com/design/r4aHEbkxxACEDLMWK080KC/Green-Land-Hospital?node-id=0-1',
    },
    {
      id: 8,
      title: 'Veriqos Technologies Portfolio',
      category: 'design',
      fullDescription: 'End-to-end user experience for a corporate portfolio website. Utilized Figma Auto Layout and design systems to ensure consistency and scalability across pages.',
      image: veriqos,
      tags: ['Figma', 'UI/UX', 'Corporate', 'Web Design'],
      duration: 'Contract', client: 'Veriqos', year: '2026', url: 'https://www.figma.com/design/1I3ID4GaU6RbVmnkyNe6Wo/Veriqos?node-id=0-1',
    },
    {
      id: 9,
      title: 'Vishwa Hindu MahaSangh',
      category: 'design',
      fullDescription: 'Official website design with consistent visual identity — promotional posters, social media graphics, and marketing materials across all channels.',
      gradient: 'linear-gradient(135deg, #1a1208, #181006)',
      emoji: '🏛️',
      tags: ['Figma', 'Canva', 'UI/UX', 'Graphic Design', 'Branding'],
      duration: '2 weeks', client: 'Yogi Foundation', year: '2025',
      url: 'https://www.figma.com/design/aOm6SXOJ1pCIYDbvB4AiUh/',
    },
    {
      id: 10,
      title: 'Niramaya Yoga & Wellness',
      category: 'web',
      fullDescription: 'User-centric interfaces for Home, Sessions, and Booking flows. Developed structured user flows and built scalable design systems using Figma components.',
      gradient: 'linear-gradient(135deg, #181208, #140e06)',
      emoji: '🧘',
      tags: ['Figma', 'UI/UX', 'Web Design', 'Auto Layout'],
      duration: 'Contract', client: 'Niramaya', year: '2025', url: '#',
    },
    {
      id: 11,
      title: 'Learn-X Library Website',
      category: 'web',
      fullDescription: 'Online Library Management Website in HTML, CSS, and JavaScript — book listing, category organization, search, and a responsive interface.',
      gradient: 'linear-gradient(135deg, #181208, #140e06)',
      emoji: '📖',
      tags: ['HTML', 'CSS', 'JavaScript'],
      duration: '2 weeks', client: 'Personal Project', year: '2024',
      url: 'https://tech-learn0.netlify.app/',
    },
  ]


  const categories = [
    { id: 'all', label: 'All', count: projects.length },
    { id: 'web', label: 'Web Dev', count: projects.filter(p => p.category === 'web').length },
    { id: 'design', label: 'UI/UX Design', count: projects.filter(p => p.category === 'design').length },
    { id: 'ui/ux', label: 'App UI', count: projects.filter(p => p.category === 'ui/ux').length },
  ]

  const filtered = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  const processSteps = [
    { step: '01', title: 'Research', desc: 'Understanding user needs, business goals, and the competitive landscape before any design decisions.', num: '01' },
    { step: '02', title: 'Design', desc: 'Wireframes to high-fidelity — designed in Figma with the implementation constraints already in mind.', num: '02' },
    { step: '03', title: 'Prototype', desc: 'Interactive prototypes to validate flows and test assumptions before writing a line of code.', num: '03' },
    { step: '04', title: 'Ship & Iterate', desc: 'Test with real users, gather honest feedback, and improve. Good design is never finished.', num: '04' },
  ]

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ paddingTop: 80, fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}
    >
      {/* Ambient bg */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: 600, height: 600, background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 500, height: 500, background: 'radial-gradient(circle, rgba(138,117,96,0.03) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      {/* ═══ HERO ═══ */}
      <section style={{ padding: '80px 0 60px', position: 'relative' }}>
        <div className="container-xl">
          <ScrollReveal className="reveal">
            <div className="section-num">03 — Work</div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 500,
              marginBottom: 16,
              letterSpacing: '-0.03em',
              lineHeight: 1.0,
              color: 'var(--text-primary)',
            }}>
              Selected projects.<br />
              <span style={{ color: 'var(--accent)', fontWeight: 300, fontStyle: 'italic' }}>11 things I've shipped.</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: 500, lineHeight: 1.8, marginBottom: 48 }}>
              A mix of client work and personal projects across web development and UI/UX design.
              Each one taught me something I couldn't learn from a course.
            </p>

            {/* Filter pills */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`filter-pill ${selectedCategory === cat.id ? 'active' : ''}`}
                  aria-pressed={selectedCategory === cat.id}
                  style={{ cursor: 'pointer' }}
                >
                  {cat.label}
                  <span style={{
                    marginLeft: 6,
                    padding: '0px 6px',
                    fontSize: '10px',
                    fontFamily: 'var(--font-mono)',
                    color: selectedCategory === cat.id ? 'var(--accent)' : 'var(--text-muted)',
                  }}>
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ PROJECTS GRID ═══ */}
      <section style={{ padding: '0 0 60px', position: 'relative' }}>
        <div className="container-xl">
          <div className="projects-grid">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} className="reveal" delay={`delay-${(i % 3) * 100}`}>
                <ProjectCard project={project} index={i} />
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-muted)' }}>
              No projects found for this category.
            </div>
          )}
        </div>
      </section>

      {/* ═══ PROCESS ═══ */}
      <section style={{ padding: '60px 0 100px', position: 'relative' }}>
        <div className="container-xl">
          <ScrollReveal className="reveal" style={{ marginBottom: 48 }}>
            <div className="section-num">— Process</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
              How I work
            </h2>
          </ScrollReveal>

          <div className="process-grid">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} className="reveal" delay={`delay-${i * 100}`}>
                <div style={{
                  padding: 'clamp(24px, 4vw, 36px) clamp(20px, 3vw, 28px)',
                  background: '#0a0a0a',
                  border: '1px solid var(--border-subtle)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: 200,
                  transition: 'background 0.3s ease, border-color 0.3s ease',
                  height: '100%',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#111'; e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
                >
                  {/* Watermark number */}
                  <div style={{
                    position: 'absolute', top: 16, right: 20,
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: 600,
                    color: 'rgba(201,169,110,0.04)', lineHeight: 1, userSelect: 'none',
                  }}>
                    {step.num}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px',
                    color: 'var(--accent)', marginBottom: 14, letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}>
                    Step {step.step}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 500, marginBottom: 10, color: 'var(--text-primary)' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.8 }}>
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
