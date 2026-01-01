import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="mt-10 min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Animated Background */}
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
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mx-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                Available for freelance work
              </div>
              
              <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
                  <span className="inline-block hover:scale-105 transition-transform">Hi, I'm</span>{' '}
                  <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
                   Ritika Gupta
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-2">
                  Frontend Developer & UI/UX Designer
                </h2>
              </div>

              <p className="text-xl text-slate-300 leading-relaxed">
                I design and build <span className="text-purple-400 font-semibold">beautiful, modern web applications</span> with 9 months of combined experience in UI/UX design and frontend development, creating seamless user experiences from concept to code.
              </p>

              <div className="flex flex-wrap gap-3 text-sm">
                {['Figma', 'Canva', 'UI/UX Design', 'React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Java', 'SQL', 'Git'].map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg backdrop-blur-sm hover:border-purple-500/50 transition-all">
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap pt-4">
                <Link 
                  to="/projects" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold overflow-hidden transition-all hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105"
                >
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-4 border-2 border-slate-700 rounded-full font-semibold hover:bg-slate-800/50 hover:border-purple-500/50 transition-all backdrop-blur-sm"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="relative animate-fade-in-delayed">
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-2xl rotate-12 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-500/20 rounded-2xl -rotate-12 animate-float-delayed" />
              
              <div className="relative w-full aspect-square">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl opacity-20 blur-3xl animate-pulse" />
                
                {/* Main card */}
                <div className="relative w-full h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-3xl border border-slate-700/50 overflow-hidden group">
                  {/* Grid pattern overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
                  
                  <div className="relative h-full flex flex-col items-center justify-center p-8">
                    {/* Avatar with gradient ring */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative w-48 h-48 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-7xl transform group-hover:scale-110 transition-transform duration-300">
                        RG
                      </div>
                      {/* Orbiting dots */}
                      <div className="absolute inset-0 animate-spin-slow">
                        <div className="absolute top-0 left-1/2 w-3 h-3 bg-purple-400 rounded-full -translate-x-1/2" />
                      </div>
                      <div className="absolute inset-0 animate-spin-slow-reverse">
                        <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-pink-400 rounded-full -translate-x-1/2" />
                      </div>
                    </div>
                    
                    <div className="text-center space-y-2">
                      <p className="text-slate-300 text-lg font-medium">Ritika Gupta</p>
                      <p className="text-slate-400 text-sm">Frontend Developer & UI/UX Designer</p>
                      <div className="flex gap-2 justify-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" />
                        <span className="w-2 h-2 bg-pink-500 rounded-full animate-bounce delay-75" />
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-150" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 px-6 border-y border-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '9', label: 'Months Experience', description: 'Combined UI/UX design and development', gradient: 'from-purple-400 to-pink-500', delay: 'delay-0' },
              { number: '15+', label: 'Projects Completed', description: 'Design and development projects', gradient: 'from-blue-400 to-cyan-500', delay: 'delay-100' },
              { number: '3', label: 'Companies', description: 'Professional experience across organizations', gradient: 'from-green-400 to-emerald-500', delay: 'delay-200' },
              { number: '10+', label: 'Technologies', description: 'Design tools and frontend frameworks', gradient: 'from-orange-400 to-red-500', delay: 'delay-300' }
            ].map((stat, idx) => (
              <div key={idx} className={`text-center group hover:scale-105 transition-all duration-300 ${stat.delay}`}>
                <div className="relative inline-block mb-3">
                  <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity`} />
                  <div className={`relative text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                </div>
                <div className="text-slate-300 font-semibold mb-2">{stat.label}</div>
                <p className="text-slate-500 text-sm leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6">
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Frontend development services to bring your ideas to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                ),
                title: 'Web Development',
                description: 'Building responsive and interactive websites using modern HTML, CSS, and JavaScript. Clean code that works seamlessly across all devices.',
                color: 'purple',
                features: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design']
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                ),
                title: 'React Development',
                description: 'Creating dynamic single-page applications with React. Component-based architecture for scalable and maintainable code.',
                color: 'pink',
                features: ['React.js', 'Hooks', 'State Management', 'Component Design']
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: 'UI Implementation',
                description: 'Translating designs into pixel-perfect interfaces with Tailwind CSS and modern styling techniques for beautiful user experiences.',
                color: 'orange',
                features: ['Tailwind CSS', 'UI Libraries', 'Animations', 'Styling']
              }
            ].map((service, idx) => (
              <div 
                key={idx}
                className="group relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-${service.color}-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 bg-${service.color}-500/10 border border-${service.color}-500/20 rounded-2xl flex items-center justify-center text-${service.color}-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-${service.color}-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-slate-400">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-${service.color}-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-purple-900/20 to-slate-900/50" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Floating decoration elements */}
          <div className="absolute -top-12 -left-12 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />
          <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-75" />
          
          <div className="relative z-10 space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm backdrop-blur-sm">
                Let's Work Together
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Project?
              </span>
            </h2>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate to create something amazing together. I'm always excited to work on new and challenging projects that push creative boundaries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link 
                to="/contact" 
                className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg overflow-hidden transition-all hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              <Link
                to="/projects"
                className="px-12 py-5 border-2 border-slate-700 rounded-full font-semibold text-lg hover:bg-slate-800/50 hover:border-purple-500/50 transition-all backdrop-blur-sm"
              >
                View Portfolio
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="pt-12 flex flex-wrap gap-8 justify-center items-center text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Quick Response</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Flexible Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
