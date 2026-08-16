import { useState, useEffect, useRef } from 'react'
import ScrollReveal from '../components/ScrollReveal'

// Animated skill bar
function SkillBar({ name, level, delay }) {
  const [triggered, setTriggered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); observer.disconnect() } },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontFamily: 'var(--font-body)' }}>
        <span style={{ fontSize: '13px', fontWeight: 400, color: 'var(--text-secondary)' }}>{name}</span>
        <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.06em' }}>{level}%</span>
      </div>
      <div style={{
        height: 1, background: 'rgba(201,169,110,0.08)', overflow: 'hidden',
      }}>
        <div
          className="skill-bar-fill"
          style={{
            width: triggered ? `${level}%` : '0%',
            transitionDelay: delay || '0ms',
            height: '100%',
          }}
        />
      </div>
    </div>
  )
}

function About() {
  const skills = {
    'Design & UI/UX': [
      { name: 'Figma (Auto Layout, Components)', level: 92 },
      { name: 'Wireframing & Prototyping', level: 90 },
      { name: 'User Flows & Information Architecture', level: 88 },
      { name: 'Design Systems & UI Kits', level: 86 },
      { name: 'Canva & Graphic Design', level: 88 },
    ],
    'UX & Research': [
      { name: 'User Flows / Wireframes', level: 85 },
      { name: 'Prototyping', level: 88 },
      { name: 'Usability Testing', level: 80 },
    ],
    'Other': [
      { name: 'Responsive Design', level: 90 },
      { name: 'Design Systems', level: 85 },
      { name: 'Git / GitHub', level: 75 },
    ],
  }

  const [activeSkillTab, setActiveSkillTab] = useState('Design')

  const experience = [
    {
      role: 'UI/UX Designer & Graphic Designer',
      company: 'Yogi Foundation',
      location: 'Gorakhpur, UP, India',
      duration: 'Aug 2025 — Present (11+ Mos)',
      bullets: [
        'Designed the complete Vishwa Hindu MahaSangh website UI/UX in Figma with clean visual hierarchy',
        'Created promotional posters, brochures, catalogs, product creatives, and digital communication materials',
        'Created logo designs, branding concepts, and marketing creatives ensuring brand consistency',
        'Developed video and reel frame concepts by planning content layout and visual storytelling',
        'Designed responsive landing pages and campaign-based interfaces focused on accessibility and mobile users',
        'Created user flows, wireframes, and interaction designs across platforms using Figma and Canva',
      ],
    },
    {
      role: 'UI/UX Designer & Frontend Developer',
      company: 'DigiQuest Consultancy Services Pvt. Ltd',
      location: 'India',
      duration: 'Feb 2025 — Jul 2025 (6 Mos)',
      bullets: [
        'Designed and developed the Vet Consultation Online platform (Figma UI/UX & React implementation)',
        'Created comprehensive UI/UX designs for GreenLand Hospital website using Figma',
        'Built and maintained scalable design systems using Figma Auto Layout, reusable components, and variants',
        'Translated business requirements into wireframes, user flows, and interactive high-fidelity prototypes',
        'Implemented responsive, accessible interfaces using React and modern CSS in an Agile team setting',
      ],
    },
    {
      role: 'UI/UX Designer',
      company: 'Whizlancer Infotech Pvt. Ltd',
      location: 'India (Remote)',
      duration: '1 Month',
      bullets: [
        'Designed end-to-end user experience for Veriqos Technologies corporate portfolio website',
        'Created modern, professional UI layouts and structured user flows for company overview and case studies',
        'Developed design systems with Auto Layout, consistent typography, and responsive component tokens',
        'Delivered production-ready high-fidelity mockups and interactive prototypes with smooth developer handoff',
      ],
    },
  ]

  const principles = [
    {
      num: '01',
      title: 'Clean Code & Structure',
      desc: 'Writing maintainable, well-structured code that follows best practices. Prioritizing readability and organization to ensure seamless scalability and developer collaboration.',
    },
    {
      num: '02',
      title: 'Responsive & Accessible',
      desc: 'Building applications that work flawlessly across all devices and screen sizes. A mobile-first mindset ensures optimal user experiences everywhere.',
    },
    {
      num: '03',
      title: 'Continuous Learning',
      desc: 'Committed to staying current with emerging design patterns and frontend tooling. Constantly refining skills to deliver modern, research-driven solutions.',
    },
  ]

  const education = [
    {
      degree: 'B.Tech in Information Technology',
      institution: 'Buddha Institute of Technology',
      period: '2022 – 2025',
      location: 'Gorakhpur, UP, India',
      desc: 'Pursuing Bachelor\'s degree with focus on Information Technology, web development, software engineering, and UI design. Active in coding clubs and creative design workshops.',
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'Government Girls Polytechnic',
      period: '2018 – 2021',
      location: 'Gorakhpur, UP, India',
      desc: 'Completed comprehensive diploma program covering programming fundamentals, database management, web technologies, and software development.',
    },
    {
      degree: 'Class 10th',
      institution: 'Sant Pushpa Inter College',
      period: '2018',
      location: 'Gorakhpur, UP, India',
      desc: 'Completed secondary education with a strong academic foundation in science and computer fundamentals.',
    },
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'HR Manager',
      company: 'Yogi Foundation',
      quote: '"Ritika\'s creative vision and dedication were outstanding. She designed our Vishwa Hindu MahaSangh website beautifully and created stunning promotional materials. Her attention to detail and ability to understand our vision made collaboration seamless."',
    },
    {
      name: 'Rajesh Kumar',
      role: 'Technical Lead',
      company: 'DigiQuest Consultancy Services',
      quote: '"Ritika impressed us with her dual expertise in design and development. She delivered pixel-perfect UI designs for Vet Consultation Online and GreenLand Hospital, then seamlessly implemented them in React. A talented professional who bridges design and code effortlessly."',
    },
    {
      name: 'Amit Verma',
      role: 'Project Manager',
      company: 'Whizlancer Infotech',
      quote: '"Working with Ritika was a pleasure. She designed the Veriqos Technologies portfolio with modern aesthetics and professional layouts. Her communication was clear, deliverables were on time, and the final design exceeded our expectations."',
    },
  ]

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ paddingTop: 80, fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}
    >
      {/* Ambient bg */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{ position: 'absolute', top: '15%', left: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-10%', width: 500, height: 500, background: 'radial-gradient(circle, rgba(138,117,96,0.03) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      {/* ═══ HERO ═══ */}
      <section style={{ padding: '80px 0 60px', position: 'relative' }}>
        <div className="container-xl">
          {/* Asymmetric: text-heavy left, visual right */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '80px', alignItems: 'center' }}>

            {/* Left: text */}
            <ScrollReveal className="reveal-left">
              <div className="section-num">02 — About Me</div>
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                fontWeight: 500,
                marginBottom: 24,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
              }}>
                Design that earns trust.<br />
                <span style={{ color: 'var(--accent)', fontWeight: 300, fontStyle: 'italic' }}>Code that holds up.</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: 18, fontSize: '0.95rem', maxWidth: 500 }}>
                I'm a passionate UI/UX Designer &amp; Frontend Developer with 1.5+ years of hands-on experience designing and building modern, responsive web and mobile applications. Based in Gorakhpur / Noida, UP, India.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.9, fontSize: '0.9rem', maxWidth: 500 }}>
                Over the past year, I've worked across branding, healthcare, education, corporate portfolios, and personal finance apps—crafting scalable design systems in Figma and implementing them with React and Tailwind CSS.
              </p>
            </ScrollReveal>

            {/* Right: compact stats */}
            <ScrollReveal className="reveal-right">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { val: '1.5+', label: 'Years experience' },
                  { val: '15+', label: 'Projects completed' },
                  { val: '3', label: 'Companies' },
                  { val: '10+', label: 'Technologies' },
                ].map(({ val, label }, i) => (
                  <div key={label} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '20px 0',
                    borderBottom: '1px solid var(--border-subtle)',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.8rem',
                      fontWeight: 300,
                      letterSpacing: '-0.04em',
                      color: i === 0 ? 'var(--accent)' : 'var(--text-primary)',
                      lineHeight: 1,
                    }}>{val}</span>
                    <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ CORE PRINCIPLES ═══ */}
      <section style={{ padding: '60px 0' }}>
        <div className="container-xl">
          <div className="editorial-divider" style={{ marginBottom: 56 }} />
          <ScrollReveal className="reveal" style={{ marginBottom: 40 }}>
            <div className="section-num">— Philosophy</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
              How I approach my craft
            </h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {principles.map((p, i) => (
              <ScrollReveal key={p.title} className="reveal" delay={`delay-${i * 100}`}>
                <div
                  className="solid-card"
                  style={{
                    padding: '36px 28px',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--accent)',
                    letterSpacing: '0.12em',
                    marginBottom: 16,
                  }}>
                    {p.num}
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.3rem',
                    fontWeight: 500,
                    marginBottom: 12,
                    color: 'var(--text-primary)',
                  }}>
                    {p.title}
                  </h3>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '13px',
                    lineHeight: 1.8,
                    margin: 0,
                  }}>
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="editorial-divider" style={{ marginTop: 56 }} />
        </div>
      </section>

      {/* ═══ SKILLS & TOOLKIT ═══ */}
      <section style={{ padding: '60px 0' }}>
        <div className="container-xl">
          <ScrollReveal className="reveal" style={{ marginBottom: 48 }}>
            <div className="section-num">— Toolkit</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
              Skills &amp; proficiency
            </h2>
          </ScrollReveal>

          {/* Skill tabs */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
            {Object.keys(skills).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveSkillTab(tab)}
                className={`skill-tab ${activeSkillTab === tab ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Skill bars */}
          <ScrollReveal className="reveal">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '0 60px',
              maxWidth: 860,
            }}>
              {skills[activeSkillTab].map(({ name, level }, i) => (
                <SkillBar key={name} name={name} level={level} delay={`${i * 100}ms`} />
              ))}
            </div>
          </ScrollReveal>

          {/* Tool badges grid */}
          <ScrollReveal className="reveal" style={{ marginTop: 56 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))', gap: 1 }}>
              {[
                { name: 'Figma' }, { name: 'Canva' }, { name: 'Wireframing' }, { name: 'Prototyping' },
                { name: 'Design Systems' }, { name: 'User Flows' }, { name: 'React.js' }, { name: 'JavaScript' },
                { name: 'Tailwind CSS' }, { name: 'HTML5 / CSS3' }, { name: 'Git & GitHub' }, { name: 'VS Code' },
              ].map(({ name }) => (
                <div
                  key={name}
                  style={{
                    padding: '18px 8px',
                    textAlign: 'center',
                    background: '#0a0a0a',
                    border: '1px solid var(--border-subtle)',
                    transition: 'background 0.2s ease, border-color 0.2s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#141414'; e.currentTarget.style.borderColor = 'rgba(201,169,110,0.25)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
                >
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.06em' }}>{name}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══ EXPERIENCE TIMELINE ═══ */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-xl">
          <ScrollReveal className="reveal" style={{ marginBottom: 56 }}>
            <div className="section-num">— Experience</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
              Where I've worked
            </h2>
          </ScrollReveal>

          <div style={{ maxWidth: 800, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {experience.map((exp, i) => (
              <ScrollReveal key={exp.company} className="reveal" delay={`delay-${i * 100}`}>
                <div style={{
                  display: 'flex',
                  gap: 0,
                  borderBottom: i < experience.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  paddingBottom: 40,
                  marginBottom: 40,
                }}>
                  {/* Timeline connector */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 28, paddingTop: 4 }}>
                    <div className="timeline-dot" />
                    {i < experience.length - 1 && <div className="timeline-line" />}
                  </div>

                  {/* Content */}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)', margin: 0 }}>{exp.role}</h3>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {exp.duration}
                      </span>
                    </div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', marginBottom: 20, textTransform: 'uppercase' }}>
                      {exp.company} — {exp.location}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {exp.bullets.map((b) => (
                        <li key={b} style={{ display: 'flex', gap: 12, color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.7 }}>
                          <span style={{ color: 'var(--accent)', marginTop: 2, flexShrink: 0, fontSize: '10px' }}>—</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EDUCATION ═══ */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-xl">
          <ScrollReveal className="reveal" style={{ marginBottom: 56 }}>
            <div className="section-num">— Education</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
              Academic background
            </h2>
          </ScrollReveal>
          <div style={{ maxWidth: 800, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {education.map((edu, i) => (
              <ScrollReveal key={edu.degree} className="reveal" delay={`delay-${i * 100}`}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                  padding: '28px 0',
                  borderBottom: i < education.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                  gap: 24,
                  flexWrap: 'wrap',
                }}>
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 500, marginBottom: 4, color: 'var(--text-primary)' }}>{edu.degree}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', marginBottom: 10, textTransform: 'uppercase' }}>
                      {edu.institution} — {edu.location}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '13px', lineHeight: 1.7, maxWidth: 520 }}>{edu.desc}</p>
                  </div>
                  <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--accent)', letterSpacing: '0.08em', flexShrink: 0, textTransform: 'uppercase' }}>
                    {edu.period}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section style={{ padding: '80px 0 100px' }}>
        <div className="container-xl">
          <ScrollReveal className="reveal" style={{ marginBottom: 56 }}>
            <div className="section-num">— Testimonials</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--text-primary)', margin: 0 }}>
              Client &amp; colleague reviews
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} className="reveal" delay={`delay-${i * 150}`}>
                <div style={{
                  padding: '36px 32px',
                  background: '#0a0a0a',
                  border: '1px solid var(--border-subtle)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 0.3s ease, background 0.3s ease',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.2)'; e.currentTarget.style.background = '#111' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.background = '#0a0a0a' }}
                >
                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 3, marginBottom: 24 }}>
                    {[...Array(5)].map((_, si) => (
                      <svg key={si} width="12" height="12" viewBox="0 0 20 20" fill="var(--accent)">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.875rem', flex: 1, fontStyle: 'italic', marginBottom: 28 }}>
                    {t.quote}
                  </p>

                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text-primary)', marginBottom: 2 }}>{t.name}</div>
                    <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{t.role} — {t.company}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
