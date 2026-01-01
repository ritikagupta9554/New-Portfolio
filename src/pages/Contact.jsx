import { useState, useEffect } from 'react'

function Contact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-16 relative overflow-hidden">
      {/* Animated Background with Cursor */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
        />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse delay-75" />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Let's Work
            <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Together
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-6">
            I'm always excited to discuss new projects, creative ideas, or opportunities to bring your vision to life. Whether you need UI/UX design, frontend development, or a complete solution, let's connect and create something exceptional.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <p className="text-slate-400 mb-12 leading-relaxed">
                Feel free to reach out through any of the following channels. I typically respond within 24 hours on business days.
              </p>
              
              <div className="space-y-6">
                <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800 hover:border-purple-500/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-slate-400">guptaritika569@gmail.com</p>
                      <p className="text-sm text-slate-500 mt-2">Best for detailed inquiries and project discussions</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800 hover:border-pink-500/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pink-500/10 border border-pink-500/20 rounded-xl flex items-center justify-center text-pink-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-slate-400">+91 9554929098</p>
                      <p className="text-sm text-slate-500 mt-2">Available Mon-Fri, 10AM-7PM IST</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800 hover:border-orange-500/50 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-slate-400">Gorakhpur, UP, India</p>
                      <p className="text-sm text-slate-500 mt-2">Available for remote work globally</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/ritika-gupta-523597220" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500/20 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/ritikagupta9554" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500/20 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  {/* <a href="#" className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500/20 transition-all">
                  
                  </a> */}
                  <a href="mailto:ritikagupta9554@gmail.com" className="w-12 h-12 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center hover:bg-purple-500/10 hover:border-purple-500/20 transition-all">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Send Message
                </button>

                <p className="text-sm text-slate-400 text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-400">
              Quick answers to common questions about working with me
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold mb-3">What is your typical project timeline?</h3>
              <p className="text-slate-400 leading-relaxed">
                Project timelines vary based on scope and complexity. A typical web design project takes 4-8 weeks, while a mobile app design can take 6-12 weeks. I'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold mb-3">What is your design process?</h3>
              <p className="text-slate-400 leading-relaxed">
                I follow a user-centered design approach: Research & Discovery → Strategy & Planning → Design & Prototype → Test & Iterate. This ensures the final product meets both user needs and business goals.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold mb-3">Do you work with clients remotely?</h3>
              <p className="text-slate-400 leading-relaxed">
                Yes! I work with clients worldwide. I use video calls, project management tools, and collaborative design platforms to ensure smooth communication and project delivery regardless of location.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold mb-3">What are your rates?</h3>
              <p className="text-slate-400 leading-relaxed">
                I offer both hourly and project-based pricing depending on the scope. Rates vary based on project complexity and timeline. Contact me for a customized quote based on your specific needs.
              </p>
            </div>
            <div className="p-6 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800">
              <h3 className="text-xl font-bold mb-3">Do you offer ongoing support after project completion?</h3>
              <p className="text-slate-400 leading-relaxed">
                Yes, I offer maintenance and support packages for completed projects. This includes minor updates, bug fixes, and design improvements to ensure your product continues to perform optimally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
