import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/90 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Ritika Gupta
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`hover:text-purple-400 transition-colors ${isActive('/') ? 'text-purple-400' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-purple-400 transition-colors ${isActive('/about') ? 'text-purple-400' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/projects" 
              className={`hover:text-purple-400 transition-colors ${isActive('/projects') ? 'text-purple-400' : ''}`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-purple-400 transition-colors ${isActive('/contact') ? 'text-purple-400' : ''}`}
            >
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-800">
            <div className="flex flex-col gap-4">
              <Link 
                to="/" 
                className={`hover:text-purple-400 transition-colors ${isActive('/') ? 'text-purple-400' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`hover:text-purple-400 transition-colors ${isActive('/about') ? 'text-purple-400' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/projects" 
                className={`hover:text-purple-400 transition-colors ${isActive('/projects') ? 'text-purple-400' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className={`hover:text-purple-400 transition-colors ${isActive('/contact') ? 'text-purple-400' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
