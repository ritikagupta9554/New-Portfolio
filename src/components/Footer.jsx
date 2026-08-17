import { Link } from 'react-router-dom'

function Footer() {
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Work' },
    { to: '/contact', label: 'Contact' },
  ]

  const socials = [
    { name: 'Website', href: 'https://www.guptaritika.in/' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ritika-gupta-523597220' },
    { name: 'GitHub', href: 'https://github.com/ritikagupta9554' },
     { name: 'Email', href: 'mailto:codewithritika.dev@gmail.com' },
  ]

  return (
    <footer style={{ position: 'relative', background: '#0a0a0a', fontFamily: 'var(--font-body)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container-xl" style={{ padding: 'clamp(36px, 6vw, 56px) clamp(16px, 4vw, 32px) clamp(24px, 4vw, 32px)' }}>
        {/* Main grid */}
        <div className="footer-grid">

          {/* Brand */}
          <div>
            <Link
              to="/"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                marginBottom: 14,
                textDecoration: 'none',
                letterSpacing: '-0.02em',
              }}
            >
              Ritika Gupta
            </Link>
            <p style={{ color: 'var(--text-muted)', fontSize: '13px', lineHeight: 1.8, maxWidth: 320, marginBottom: 28 }}>
              UI/UX Designer and Graphic Designer. Focused on enhancing usability, accessibility, and overall user experience through research-driven design.
            </p>

            {/* Social links — text only */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {socials.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={name}
                  style={{
                    padding: '6px 14px',
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
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--accent)'
                    e.currentTarget.style.borderColor = 'rgba(201,169,110,0.35)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--text-muted)'
                    e.currentTarget.style.borderColor = 'var(--border-subtle)'
                  }}
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>
              Navigation
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    style={{
                      color: 'var(--text-muted)',
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      fontFamily: 'var(--font-body)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach */}
          <div>
            <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 20 }}>
              Reach
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href="mailto:codewithritika.dev@gmail.com"
                style={{ color: 'var(--text-muted)', fontSize: '13px', textDecoration: 'none', transition: 'color 0.2s ease', cursor: 'pointer', wordBreak: 'break-all' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-muted)' }}
              >
                codewithritika.dev@gmail.com
              </a>
             
              <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>Noida, India</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar">
          <p style={{ color: 'var(--text-muted)', fontSize: '12px', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', margin: 0 }}>
            © 2026 Ritika Gupta — Designed &amp; built by me.
          </p>
          <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
            <div className="status-dot" style={{ width: 5, height: 5 }} />
            <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
              OPEN TO WORK
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
