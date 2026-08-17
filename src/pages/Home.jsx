import { Link } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import ScrollReveal from '../components/ScrollReveal'

// Typewriter hook
function useTypewriter(words, speed = 80, pause = 2200) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? t.slice(0, -1) : current.slice(0, t.length + 1)
        )
      }, deleting ? speed / 2 : speed)
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}

// Animated counter
function useCounter(target, duration = 1800, trigger = true) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, trigger])
  return count
}

function StatCard({ number, suffix, label, index }) {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef(null)
  const count = useCounter(parseInt(number), 1600, triggered)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${index * 120}ms` }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(3rem, 5vw, 5.5rem)',
        fontWeight: 300,
        lineHeight: 1,
        color: 'var(--text-primary)',
        letterSpacing: '-0.03em',
        marginBottom: 8,
      }}>
        {count}{suffix}
      </div>
      <div style={{
        fontSize: '12px',
        fontFamily: 'var(--font-mono)',
        color: 'var(--accent)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>
        {label}
      </div>
    </div>
  )
}

function Home() {
  const titleWords = ['UI/UX Designer', 'Graphic Designer', 'Visual Thinker']
  const typedText = useTypewriter(titleWords, 70, 2200)
  const profileRef = useRef(null)

  // 3D tilt on profile card
  useEffect(() => {
    const card = profileRef.current
    if (!card) return
    const onMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2)
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2)
      card.style.transform = `perspective(800px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) scale3d(1.01, 1.01, 1.01)`
    }
    const onLeave = () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    }
    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    return () => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const skills = ['Figma', 'Canva', 'Wireframing', 'Prototyping', 'UI/UX Design', 'Graphic Design']

  const services = [
    {
      icon: (
        <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Pixel-perfect, responsive websites built with React and modern CSS. Code that\'s as clean as the design it renders.',
      tags: ['Figma', 'Canva', 'UI Layouts', 'Landing Pages'],
      num: '01',
    },
    {
      icon: (
        <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'UI/UX Design',
      description: 'Interfaces that feel inevitable in hindsight. From research to high-fidelity prototype — designed in Figma, tested on real users.',
      tags: ['Figma', 'Canva', 'Prototyping', 'Design Systems'],
      num: '02',
    },
    {
      icon: (
        <svg width="26" height="26" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Graphic Design',
      description: 'Creating strong visual identities — from logos and branding to social media creatives, brochures, and catalogs.',
      tags: ['Branding', 'Social Media', 'Logos', 'Print'],
      num: '03',
    },
  ]

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ paddingTop: 80, fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}
    >
      {/* Ambient bg */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: '5%', right: '-5%',
          width: 700, height: 700,
          background: 'radial-gradient(circle, rgba(201,169,110,0.05) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '15%', left: '-8%',
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(138,117,96,0.04) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }} />
      </div>

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section className="relative" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', padding: '40px 0 80px' }}>
        <div className="container-xl w-full">

          {/* Editorial asymmetric grid: text takes 60%, card takes 40% */}
          <div className="editorial-hero-grid">

            {/* LEFT: Text block — NOT centered */}
            <div className="animate-fade-in">

              {/* Availability tag */}
              <div className="status-badge" style={{ marginBottom: 32 }}>
                <span className="status-dot" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em' }}>
                  OPEN TO WORK — REMOTE &amp; ON-SITE
                </span>
              </div>

              {/* Big editorial name — no gradient, no gimmick */}
              <div style={{ marginBottom: 24 }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                  fontWeight: 400,
                  color: 'var(--text-muted)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: 12,
                  fontStyle: 'italic',
                }}>
                  I'm
                </div>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
                  fontWeight: 600,
                  lineHeight: 0.92,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                  margin: 0,
                  wordBreak: 'break-word',
                }}>
                  Ritika<br />
                  <span style={{ color: 'var(--accent)', fontWeight: 300, fontStyle: 'italic' }}>Gupta.</span>
                </h1>
              </div>

              {/* Typewriter role */}
              <div style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
                color: 'var(--text-secondary)',
                marginBottom: 28,
                fontWeight: 400,
                minHeight: '1.8rem',
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 4,
                fontFamily: 'var(--font-mono)',
                letterSpacing: '0.02em',
              }}>
                <span style={{ color: 'var(--accent)', marginRight: 8 }}>—</span>
                <span>{typedText}</span>
                <span className="typewriter-cursor" />
              </div>

              <p style={{
                fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.85,
                marginBottom: 36,
                maxWidth: 480,
              }}>
                UI/UX Designer &amp; Frontend Developer. I design pixel-perfect interfaces in Figma and bring them to life with React, creating seamless user experiences from concept to code.
              </p>

              {/* Skill tags — restrained, mono */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 36 }}>
                {skills.map((skill) => (
                  <span key={skill} className="badge">{skill}</span>
                ))}
              </div>

              {/* CTA buttons */}
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link to="/projects" className="btn-primary btn-magnetic" id="view-projects-btn">
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    View Work
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </Link>
                <Link to="/contact" className="btn-outline btn-magnetic" id="contact-me-btn">
                  <span>Say Hello</span>
                </Link>
              </div>
            </div>

            {/* RIGHT: Profile card — solid dark, amber border */}
            <div
              ref={profileRef}
              className="tilt-card animate-fade-in-delayed"
              style={{ width: '100%', maxWidth: 420, margin: '0 auto', transition: 'transform 0.2s ease' }}
            >
              <div
                className="solid-card"
                style={{
                  padding: 'clamp(28px, 5vw, 48px) clamp(20px, 4vw, 36px)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  borderColor: 'rgba(201,169,110,0.18)',
                }}
              >
                {/* Subtle grid pattern */}
                <div className="bg-grid-pattern absolute inset-0 opacity-100 pointer-events-none" />

                <div style={{ position: 'relative' }}>
                  {/* Avatar — simple amber frame, no orbiting dots */}
                  <div style={{ position: 'relative', display: 'inline-block', marginBottom: 24 }}>
                    <div style={{
                      width: 'clamp(90px, 15vw, 120px)', height: 'clamp(90px, 15vw, 120px)',
                      background: '#1a1710',
                      border: '1px solid rgba(201,169,110,0.3)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      color: 'var(--accent)',
                      position: 'relative',
                    }}>
                      RG
                    </div>
                    {/* Available indicator */}
                    <div style={{
                      position: 'absolute', bottom: 6, right: 6,
                      width: 14, height: 14,
                      background: '#6dbd8b',
                      borderRadius: '50%',
                      border: '2px solid #141414',
                    }} />
                  </div>

                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.3rem, 3vw, 1.6rem)',
                    fontWeight: 500,
                    marginBottom: 4,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}>
                    Ritika Gupta
                  </h2>
                  <p style={{
                    color: 'var(--accent)',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: 24,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                  }}>
                    UI/UX Designer · Frontend Dev
                  </p>

                  {/* Info rows */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 1, textAlign: 'left' }}>
                    {[
                      { key: 'Location', val: 'Noida, UP, India' },
                      { key: 'Education', val: 'B.Tech in IT' },
                      { key: 'Experience', val: '1.5+ Years' },
                      { key: 'Status', val: 'Open to Work' },
                    ].map(({ key, val }) => (
                      <div key={key} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '10px 0',
                        borderBottom: '1px solid rgba(201,169,110,0.06)',
                        fontSize: '13px',
                      }}>
                        <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{key}</span>
                        <span style={{ color: 'var(--text-secondary)' }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════ STATS ═══════════════════ */}
      <section style={{ padding: '40px 0', position: 'relative' }}>
        <div className="container-xl">
          <div className="editorial-divider" style={{ marginBottom: 48 }} />
          <div className="stats-grid">
            {[
              { number: 1, suffix: '+', label: 'Years Experience' },
              { number: 15, suffix: '+', label: 'Projects Completed' },
              { number: 3, suffix: '', label: 'Companies' },
              { number: 10, suffix: '+', label: 'Technologies' },
            ].map((stat, i) => (
              <StatCard key={stat.label} {...stat} index={i} />
            ))}
          </div>
          <div className="editorial-divider" style={{ marginTop: 48 }} />
        </div>
      </section>

      {/* ═══════════════════ SERVICES ═══════════════════ */}
      <section style={{ padding: '60px 0' }}>
        <div className="container-xl">
          <ScrollReveal className="reveal" style={{ marginBottom: 48 }}>
            <div className="section-num">02 — Services</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              maxWidth: 480,
              lineHeight: 1.1,
              margin: 0,
            }}>
              What I bring<br />
              <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>to your project.</span>
            </h2>
          </ScrollReveal>

          <div className="services-grid">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} className="reveal" delay={`delay-${i * 100}`}>
                <div
                  className="solid-card"
                  style={{
                    padding: 'clamp(28px, 4vw, 40px) clamp(20px, 3vw, 32px)',
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#0a0a0a',
                    minHeight: 280,
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#111' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#0a0a0a' }}
                >
                  {/* Step number — watermark */}
                  <div style={{
                    position: 'absolute', top: 24, right: 28,
                    fontFamily: 'var(--font-display)',
                    fontSize: '5rem',
                    fontWeight: 600,
                    color: 'rgba(201,169,110,0.04)',
                    lineHeight: 1,
                    userSelect: 'none',
                    letterSpacing: '-0.04em',
                  }}>
                    {service.num}
                  </div>

                  {/* Icon */}
                  <div style={{
                    width: 48, height: 48,
                    border: '1px solid rgba(201,169,110,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: 28,
                    color: 'var(--accent)',
                  }}>
                    {service.icon}
                  </div>

                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 500,
                    marginBottom: 14,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}>
                    {service.title}
                  </h3>

                  <p style={{
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                    fontSize: '0.875rem',
                    marginBottom: 24,
                    flex: 1,
                  }}>
                    {service.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {service.tags.map((tag) => (
                      <span key={tag} className="badge">{tag}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {/* Bottom border of service grid */}
          <div className="editorial-divider" />
        </div>
      </section>

      {/* ═══════════════════ CTA ═══════════════════ */}
      <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="container-xl" style={{ position: 'relative' }}>
          <ScrollReveal className="reveal">
            <div className="section-num">03 — Let's Build</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
              fontWeight: 500,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              lineHeight: 1,
              maxWidth: 700,
              marginBottom: 32,
            }}>
              Have a project<br />
              <span style={{ color: 'var(--accent)', fontStyle: 'italic', fontWeight: 300 }}>
                in mind?
              </span>
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              maxWidth: 440,
              lineHeight: 1.8,
              marginBottom: 48,
            }}>
              I take on select freelance projects. If you're building something that needs
              thoughtful design and solid code — I'd like to hear about it.
            </p>

            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
              <Link to="/contact" className="btn-primary btn-magnetic" id="cta-get-in-touch">
                <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  Start a Conversation
                  <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link to="/projects" className="btn-outline btn-magnetic" id="cta-view-portfolio">
                <span>See Portfolio</span>
              </Link>
            </div>

            {/* Simple indicators */}
            <div style={{ display: 'flex', gap: 40, marginTop: 64, flexWrap: 'wrap' }}>
              {[
                { label: 'Response time', val: '< 24 hours' },
                { label: 'Availability', val: 'Remote + On-site' },
                { label: 'Current status', val: 'Open to work' },
              ].map(({ label, val }) => (
                <div key={label}>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{val}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

export default Home
