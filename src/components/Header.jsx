import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const btnRef = useRef(null)

  const isActive = (path) => location.pathname === path

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  // Magnetic effect for Hire Me button
  useEffect(() => {
    const btn = btnRef.current
    if (!btn) return
    const onMove = (e) => {
      const rect = btn.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      const dist = Math.sqrt(x * x + y * y)
      if (dist < 80) {
        btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
      }
    }
    const onLeave = () => {
      btn.style.transform = 'translate(0, 0)'
    }
    window.addEventListener('mousemove', onMove)
    btn.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      btn.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-500 ${scrolled ? 'glass-nav-scrolled' : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-xl">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link
              to="/"
              className="group relative"
              aria-label="Ritika Gupta - Home"
              style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', minHeight: 'auto' }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-primary)' }}
              >
                Ritika Gupta
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="desktop-nav">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="relative group text-sm font-medium transition-colors duration-300"
                  style={{
                    color: isActive(to) ? 'var(--accent)' : 'var(--text-muted)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '13px',
                    letterSpacing: '0.02em',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    minHeight: 'auto',
                    padding: '4px 0',
                  }}
                  aria-current={isActive(to) ? 'page' : undefined}
                  onMouseEnter={(e) => { if (!isActive(to)) e.currentTarget.style.color = 'var(--text-secondary)' }}
                  onMouseLeave={(e) => { if (!isActive(to)) e.currentTarget.style.color = 'var(--text-muted)' }}
                >
                  {label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px transition-all duration-300 ${isActive(to) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    style={{ background: 'var(--accent)' }}
                  />
                </Link>
              ))}

              {/* Hire Me — Magnetic Button */}
              <div ref={btnRef} className="btn-magnetic" style={{ transition: 'transform 0.3s ease' }}>
                <Link
                  to="/contact"
                  className="btn-primary"
                  id="hire-me-btn"
                  aria-label="Hire Ritika Gupta"
                >
                  <span>Hire Me →</span>
                </Link>
              </div>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-nav-toggle flex-col gap-1.5 p-2 group"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              style={{ cursor: 'pointer', background: 'none', border: 'none' }}
            >
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: 'white',
                  transform: mobileMenuOpen ? 'translateY(8px) rotate(45deg)' : 'none',
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: 'white',
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: 'white',
                  transform: mobileMenuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <div
        className="md:hidden mobile-nav-overlay"
        style={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'all' : 'none',
          transition: 'opacity 0.4s ease',
          zIndex: 998,
        }}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Close button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6"
          style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
          aria-label="Close navigation menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Links */}
        {navLinks.map(({ to, label }, i) => (
          <Link
            key={to}
            to={to}
            className={`mobile-nav-link ${isActive(to) ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
            style={{
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(30px)',
              transition: `transform 0.4s ease ${i * 80}ms, opacity 0.4s ease ${i * 80}ms`,
              opacity: mobileMenuOpen ? 1 : 0,
            }}
          >
            {label}
          </Link>
        ))}

        <Link
          to="/contact"
          className="btn-primary"
          onClick={() => setMobileMenuOpen(false)}
          style={{
            transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(30px)',
            transition: 'transform 0.4s ease 320ms, opacity 0.4s ease 320ms',
            opacity: mobileMenuOpen ? 1 : 0,
            marginTop: '8px',
          }}
        >
          <span>Hire Me →</span>
        </Link>
      </div>
    </>
  )
}

export default Header
