import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ScrollReveal from '../components/ScrollReveal'

// ─── EmailJS Configuration ─────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_ofeir0l'
const EMAILJS_TEMPLATE_ID = 'template_yrrc12r'
const EMAILJS_PUBLIC_KEY  = 'q2rlJtXfPUvWd-gbn'
// ───────────────────────────────────────────────────────────────────

function FloatInput({ id, name, label, type = 'text', value, onChange, required, isTextarea }) {
  const Tag = isTextarea ? 'textarea' : 'input'
  return (
    <div className="form-group">
      <Tag
        id={id}
        name={name}
        type={isTextarea ? undefined : type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        rows={isTextarea ? 6 : undefined}
        className={`form-input ${isTextarea ? 'textarea-input' : ''}`}
        aria-label={label}
        style={{ fontFamily: 'var(--font-body)' }}
      />
      <label htmlFor={id} className="form-label">{label}</label>
    </div>
  )
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending]     = useState(false)
  const [error, setError]         = useState(null)
  const [faqOpen, setFaqOpen]     = useState(null)
  const formRef = useRef(null)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    formData.name,
          email:   formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
        EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 6000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setError('Something went wrong. Email me directly at guptaritika569@gmail.com')
    } finally {
      setSending(false)
    }
  }

  const faqs = [
    { q: 'What does a typical project look like with you?', a: 'We start with a discovery call — you tell me what you\'re building and why it matters. I scope the work, share a proposal, and we iterate from there. No surprise pivots.' },
    { q: 'What\'s your design process?', a: 'Research first, always. I map user goals against business goals before touching Figma. Wireframes → feedback → high-fidelity → handoff. The prototype you see is one the team can actually build.' },
    { q: 'Do you work with clients outside India?', a: 'Yes — most of my project communication happens async. I adapt to your timezone for calls and use tools like Notion and Figma for transparent progress tracking.' },
    { q: 'How do you price projects?', a: 'Scope and timeline drive pricing. I offer fixed-price project quotes and hourly arrangements for ongoing work. Reach out with what you\'re building and I\'ll send a tailored estimate.' },
    { q: 'What happens after the project is delivered?', a: 'I offer a 2-week support window on all projects — bug fixes, design adjustments, handoff questions. Extended retainers are available for ongoing work.' },
  ]

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ paddingTop: 80, fontFamily: 'var(--font-body)', color: 'var(--text-primary)' }}
    >
      {/* Ambient bg */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(201,169,110,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0,
          width: 500, height: 500,
          background: 'radial-gradient(circle, rgba(138,117,96,0.03) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
      </div>

      {/* ═══ HERO EMAIL — editorial large text ═══ */}
      <section style={{ padding: '80px 0 60px', position: 'relative' }}>
        <div className="container-xl">
          <ScrollReveal className="reveal">
            <div className="section-num">04 — Contact</div>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              color: 'var(--text-secondary)',
              marginBottom: 8,
              lineHeight: 1.2,
            }}>
              Have a project in mind?
            </h1>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              marginBottom: 40,
            }}>
              Write to me at
            </div>

            {/* Big hero email link */}
            <a
              href="mailto:guptaritika569@gmail.com"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 5vw, 4rem)',
                fontWeight: 600,
                letterSpacing: '-0.03em',
                color: 'var(--accent)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(201,169,110,0.25)',
                paddingBottom: '4px',
                transition: 'color 0.2s ease, border-color 0.2s ease',
                lineHeight: 1.1,
                fontStyle: 'italic',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#e8c992'
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--accent)'
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.25)'
              }}
            >
              guptaritika569@gmail.com
            </a>

            <p style={{
              color: 'var(--text-muted)',
              fontSize: '13px',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.06em',
              marginTop: 20,
            }}>
              OR USE THE FORM BELOW — I RESPOND WITHIN 24 HOURS
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="container-xl">
        <div className="editorial-divider" />
      </div>

      {/* ═══ CONTACT BODY ═══ */}
      <section style={{ padding: '60px 0 80px', position: 'relative' }}>
        <div className="container-xl">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)',
            gap: '80px',
            alignItems: 'start',
          }}>

            {/* LEFT: Contact info */}
            <ScrollReveal className="reveal-left">
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 500,
                marginBottom: 8,
                letterSpacing: '-0.01em',
                color: 'var(--text-primary)',
              }}>
                Ways to reach me
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: 40, fontSize: '14px', lineHeight: 1.8 }}>
                I'm reachable Mon–Fri, 10AM–7PM IST.
                For urgent requests, email works fastest.
              </p>

              {/* Contact rows — clean table style */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 48 }}>
                {[
                  { label: 'Email', value: 'guptaritika569@gmail.com', href: 'mailto:guptaritika569@gmail.com' },
                  { label: 'Phone', value: '+91 9554929098', href: 'tel:+919554929098' },
                  { label: 'Location', value: 'Noida, UP, India — Remote available', href: null },
                ].map(({ label, value, href }) => {
                  const Wrapper = href ? 'a' : 'div'
                  return (
                    <Wrapper
                      key={label}
                      href={href || undefined}
                      target={href?.startsWith('mailto') ? undefined : href ? '_blank' : undefined}
                      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        padding: '16px 0',
                        borderBottom: '1px solid var(--border-subtle)',
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: href ? 'pointer' : 'default',
                        transition: 'color 0.2s ease',
                      }}
                      onMouseEnter={(e) => { if (href) e.currentTarget.style.color = 'var(--accent)' }}
                      onMouseLeave={(e) => { if (href) e.currentTarget.style.color = 'inherit' }}
                    >
                      <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.08em', textTransform: 'uppercase', paddingTop: 2 }}>{label}</span>
                      <span style={{ fontSize: '14px', color: 'var(--text-secondary)', textAlign: 'right', maxWidth: '60%', lineHeight: 1.5 }}>{value}</span>
                    </Wrapper>
                  )
                })}
              </div>

              {/* Social links */}
              <div>
                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
                  Online
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {[
                    { name: 'Website', href: 'https://www.guptaritika.in/' },
                    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ritika-gupta-523597220' },
                    { name: 'GitHub', href: 'https://github.com/ritikagupta9554' },
                    { name: 'Email', href: 'mailto:guptaritika569@gmail.com' },
                  ].map(({ name, href }) => (
                    <a
                      key={name}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      aria-label={name}
                      style={{
                        padding: '8px 16px',
                        border: '1px solid var(--border-subtle)',
                        fontSize: '11px',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        transition: 'color 0.2s ease, border-color 0.2s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'rgba(201,169,110,0.35)' }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border-subtle)' }}
                    >
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT: Form */}
            <ScrollReveal className="reveal-right">
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 500,
                marginBottom: 32,
                letterSpacing: '-0.01em',
                color: 'var(--text-primary)',
              }}>
                Send a message
              </h2>

              {submitted ? (
                <div style={{
                  padding: '48px 32px',
                  textAlign: 'left',
                  border: '1px solid rgba(109,189,139,0.2)',
                  background: 'rgba(109,189,139,0.03)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2rem',
                    fontWeight: 400,
                    marginBottom: 12,
                    color: '#6dbd8b',
                    letterSpacing: '-0.02em',
                  }}>
                    Message received.
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.8 }}>
                    I'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <FloatInput id="name" name="name" label="Full Name *" value={formData.name} onChange={handleChange} required />
                  <FloatInput id="email" name="email" label="Email Address *" type="email" value={formData.email} onChange={handleChange} required />
                  <FloatInput id="subject" name="subject" label="Subject *" value={formData.subject} onChange={handleChange} required />
                  <FloatInput id="message" name="message" label="Your Message *" value={formData.message} onChange={handleChange} required isTextarea />

                  <button
                    type="submit"
                    className="btn-primary"
                    id="send-message-btn"
                    disabled={sending}
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      marginTop: 8,
                      opacity: sending ? 0.75 : 1,
                      cursor: sending ? 'not-allowed' : 'pointer',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                      {sending ? (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            style={{ animation: 'spin-slow 1s linear infinite' }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>

                  {error && (
                    <div style={{
                      padding: '14px 16px',
                      background: 'rgba(239,68,68,0.05)',
                      border: '1px solid rgba(239,68,68,0.2)',
                      fontSize: '13px',
                      color: '#fca5a5',
                      lineHeight: 1.6,
                    }}>
                      {error}
                    </div>
                  )}
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ padding: '60px 0 100px', position: 'relative' }}>
        <div className="container-xl" style={{ maxWidth: 800 }}>
          <ScrollReveal className="reveal" style={{ marginBottom: 48 }}>
            <div className="section-num">05 — Common Questions</div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}>
              What people usually ask
            </h2>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} className="reveal" delay={`delay-${i * 75}`}>
                <div
                  style={{
                    overflow: 'hidden',
                    cursor: 'pointer',
                    borderBottom: '1px solid var(--border-subtle)',
                    transition: 'border-color 0.3s ease',
                    borderBottomColor: faqOpen === i ? 'rgba(201,169,110,0.25)' : 'var(--border-subtle)',
                  }}
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  role="button"
                  aria-expanded={faqOpen === i}
                >
                  <div style={{
                    padding: '22px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 16,
                  }}>
                    <h3 style={{
                      fontSize: '15px',
                      fontWeight: 500,
                      color: faqOpen === i ? 'var(--accent)' : 'var(--text-primary)',
                      transition: 'color 0.3s ease',
                      fontFamily: 'var(--font-body)',
                      margin: 0,
                    }}>
                      {faq.q}
                    </h3>
                    <div style={{
                      width: 24, height: 24,
                      border: '1px solid var(--border-subtle)',
                      flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s ease',
                      borderColor: faqOpen === i ? 'rgba(201,169,110,0.35)' : 'var(--border-subtle)',
                      color: faqOpen === i ? 'var(--accent)' : 'var(--text-muted)',
                    }}>
                      <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        style={{ transform: faqOpen === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s ease' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div style={{
                    maxHeight: faqOpen === i ? 200 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }}>
                    <p style={{
                      padding: '0 0 22px',
                      color: 'var(--text-secondary)',
                      fontSize: '14px',
                      lineHeight: 1.85,
                      fontFamily: 'var(--font-body)',
                    }}>
                      {faq.a}
                    </p>
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

export default Contact
