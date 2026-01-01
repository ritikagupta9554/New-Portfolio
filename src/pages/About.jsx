import { useState, useEffect } from 'react'

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

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
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse delay-75" />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="w-full aspect-[4/5] bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 opacity-20 blur-3xl absolute inset-0 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative w-full aspect-[4/5] bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-2xl rounded-3xl border border-slate-700/50 overflow-hidden">
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
                <div className="absolute inset-0 flex items-center justify-center text-9xl group-hover:scale-110 transition-transform duration-300">
                  🎨
                </div>
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl animate-float" />
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-float-delayed" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm backdrop-blur-sm">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                About Me
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                About
                <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent animate-gradient-x">
                  Ritika Gupta
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                I'm a passionate <span className="text-purple-400 font-semibold">UI/UX Designer & Frontend Developer</span> with 9 months of combined professional experience designing and building modern, responsive web applications. Based in Gorakhpur, UP, India, I bridge the gap between design and development, creating seamless user experiences from concept to code.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed">
                I specialize in UI/UX design using Figma and Canva, and bringing those designs to life with React and modern CSS frameworks. My focus is on creating <span className="text-pink-400 font-semibold">beautiful, user-centric interfaces</span> backed by clean, maintainable code.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">9</div>
                  <div className="text-sm text-slate-400 mt-1">Months</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">15+</div>
                  <div className="text-sm text-slate-400 mt-1">Projects</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">10+</div>
                  <div className="text-sm text-slate-400 mt-1">Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6">
              Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">My Design Philosophy</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Core principles that guide every project I work on
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 mb-6 text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                �
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Clean Code</h3>
              <p className="text-slate-400 leading-relaxed">
                Writing maintainable, well-structured code that follows best practices. I prioritize code readability and organization to ensure scalability and ease of collaboration.
              </p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-pink-500/10 border border-pink-500/20 rounded-2xl flex items-center justify-center text-pink-400 mb-6 text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                📱
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors">Responsive Design</h3>
              <p className="text-slate-400 leading-relaxed">
                Building applications that work flawlessly across all devices and screen sizes. Mobile-first approach ensures optimal user experience everywhere.
              </p>
            </div>
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center text-orange-400 mb-6 text-3xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                🚀
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-400 transition-colors">Continuous Learning</h3>
              <p className="text-slate-400 leading-relaxed">
                Technology evolves rapidly, and I'm committed to staying current. I actively learn new frameworks, tools, and best practices to deliver modern solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Approach */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">My Approach</span>
              </h2>
              <div className="space-y-6">
                <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-800/30 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 font-bold group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-purple-400 transition-colors">Planning & Structure</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Understanding project requirements, breaking down features into components, and planning the application structure for optimal organization.
                    </p>
                  </div>
                </div>
                <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-800/30 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 font-bold group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-pink-500/20 transition-all">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-pink-400 transition-colors">Development & Coding</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Writing clean, semantic HTML and CSS, implementing interactive features with JavaScript, and building dynamic components with React.
                    </p>
                  </div>
                </div>
                <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-800/30 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 font-bold group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/20 transition-all">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-orange-400 transition-colors">Responsive Implementation</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Ensuring the application works seamlessly across all devices using responsive design techniques, mobile-first approach, and thorough testing.
                    </p>
                  </div>
                </div>
                <div className="group flex gap-4 p-4 rounded-xl hover:bg-slate-800/30 transition-all">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 border border-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400 font-bold group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-cyan-500/20 transition-all">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-cyan-400 transition-colors">Testing & Optimization</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Debugging issues, optimizing performance, testing across browsers, and refining code for better maintainability and efficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                <span className="bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-transparent">Core Strengths</span>
              </h2>
              <div className="space-y-4">
                <div className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-purple-400 transition-colors">Frontend Development</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Proficient in HTML5, CSS3, and JavaScript ES6+. Building interactive, accessible web applications with clean, maintainable code.
                  </p>
                </div>
                <div className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg group-hover:text-pink-400 transition-colors">React Development</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Building dynamic single-page applications using React, implementing hooks, managing state, and creating reusable component libraries.
                  </p>
                </div>
                <div className="group p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 rounded-xl flex items-center justify-center text-orange-400">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-lg">Responsive & Modern CSS</h3>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Expert in Tailwind CSS, Flexbox, Grid, and modern CSS techniques. Creating pixel-perfect, responsive layouts that work across all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6">
              Toolkit
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Tools</h2>
            <p className="text-xl text-slate-400">Technologies and software I use to bring ideas to life</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Figma', icon: '🎨' },
              { name: 'Canva', icon: '✨' },
              { name: 'HTML5', icon: '📄' },
              { name: 'CSS3', icon: '💅' },
              { name: 'JavaScript', icon: '⚡' },
              { name: 'React', icon: '⚛️' },
              { name: 'Tailwind CSS', icon: '🌊' },
              { name: 'Java', icon: '☕' },
              { name: 'SQL', icon: '🗄️' },
              { name: 'Git', icon: '📦' },
              { name: 'GitHub', icon: '🐙' },
              { name: 'VS Code', icon: '💻' }
            ].map((skill, idx) => (
              <div 
                key={skill.name} 
                className="group aspect-square bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all flex items-center justify-center p-6 hover:scale-105 hover:-translate-y-1 cursor-pointer"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <div className="text-center">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                  <div className="text-sm font-semibold text-slate-400 group-hover:text-purple-400 transition-colors">{skill.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6">
              Experience
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Work History</h2>
            <p className="text-xl text-slate-400">My professional journey and key accomplishments</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 text-2xl group-hover:scale-110 transition-all">
                  �
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold group-hover:text-purple-400 transition-colors">UI/UX Designer</h3>
                    <span className="text-slate-400 text-sm">5 Months</span>
                  </div>
                  <p className="text-purple-400 mb-3 font-medium">Yogi Foundation • Gorakhpur, UP (Work From Office)</p>
                  <ul className="text-slate-400 leading-relaxed space-y-2 list-disc list-inside">
                    <li>Designed the Vishwa Hindu MahaSangh Website using Figma</li>
                    <li>Created various promotional posters and marketing materials for foundation events</li>
                    <li>Collaborated with team members to establish consistent branding guidelines</li>
                    <li>Designed social media graphics and digital content using Canva</li>
                    <li>Worked on multiple design projects supporting foundation initiatives</li>
                    <li>Maintained visual consistency across all digital assets</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 rounded-2xl flex items-center justify-center text-pink-400 text-2xl group-hover:scale-110 transition-all">
                  💻
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold group-hover:text-pink-400 transition-colors">UI/UX Designer & Frontend Developer</h3>
                    <span className="text-slate-400 text-sm">3 Months</span>
                  </div>
                  <p className="text-pink-400 mb-3 font-medium">DigiQuest Consultancy Services Pvt Ltd • India (Work From Office)</p>
                  <ul className="text-slate-400 leading-relaxed space-y-2 list-disc list-inside">
                    <li>Designed and developed Vet Consultation Online platform (UI/UX design and React development)</li>
                    <li>Created UI/UX designs for GreenLand Hospital website using Figma</li>
                    <li>Implemented responsive designs using React and modern CSS frameworks</li>
                    <li>Collaborated with clients to understand requirements and deliver custom solutions</li>
                    <li>Created wireframes, prototypes, and high-fidelity mockups</li>
                    <li>Ensured consistent design language and smooth user experience across all projects</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-2xl flex items-center justify-center text-orange-400 text-2xl group-hover:scale-110 transition-all">
                  🎓
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-2xl font-bold group-hover:text-orange-400 transition-colors">UI/UX Designer</h3>
                    <span className="text-slate-400 text-sm">1 Month</span>
                  </div>
                  <p className="text-orange-400 mb-3 font-medium">Whizlancer Infotech Pvt. Ltd • India (Work From Home)</p>
                  <ul className="text-slate-400 leading-relaxed space-y-2 list-disc list-inside">
                    <li>Designed complete portfolio website for Veriqos Technologies</li>
                    <li>Created modern, professional UI layouts using Figma</li>
                    <li>Developed design system and style guide for consistent branding</li>
                    <li>Collaborated remotely with the development team</li>
                    <li>Delivered high-fidelity mockups and interactive prototypes</li>
                    <li>Ensured responsive design principles across all screen sizes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6">
              Credentials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 text-2xl group-hover:scale-110 group-hover:rotate-3 transition-all">
                  🎓
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">B.Tech in Information Technology</h3>
                  <p className="text-purple-400 mb-3 font-medium">Buddha Institute of Technology • Gorakhpur, UP, India • 2022-2025</p>
                  <p className="text-slate-400 leading-relaxed">
                    Pursuing Bachelor's degree with focus on Information Technology, web development, programming fundamentals, and software engineering. Active in coding clubs and design workshops.
                  </p>
                </div>
              </div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20 rounded-2xl flex items-center justify-center text-pink-400 text-2xl group-hover:scale-110 group-hover:rotate-3 transition-all">
                  📜
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-pink-400 transition-colors">Diploma in Information Technology</h3>
                  <p className="text-pink-400 mb-3 font-medium">Government Girls Polytechnic • Gorakhpur, UP, India • 2018-2021</p>
                  <p className="text-slate-400 leading-relaxed">
                    Completed comprehensive diploma program covering programming fundamentals, database management, web technologies, and software development. Built strong foundation in IT concepts.
                  </p>
                </div>
              </div>
            </div>
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-2xl flex items-center justify-center text-orange-400 text-2xl group-hover:scale-110 group-hover:rotate-3 transition-all">
                  🏆
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-orange-400 transition-colors">Class 10th</h3>
                  <p className="text-orange-400 mb-3 font-medium">Sant Pushpa Inter College • Gorakhpur, UP, India • 2018</p>
                  <p className="text-slate-400 leading-relaxed">
                    Completed secondary education with strong academic foundation. Developed early interest in technology and computer science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="relative py-16 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm mb-6">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Reviews</h2>
            <p className="text-xl text-slate-400">What people say about my work</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Yogi Foundation Testimonial */}
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-purple-500/20 to-purple-500/10 border border-purple-500/30 rounded-full flex items-center justify-center text-2xl">
                  🙏
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Priya Sharma</h3>
                  <p className="text-sm text-purple-400">HR Manager</p>
                  <p className="text-xs text-slate-500">Yogi Foundation</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-400 leading-relaxed">
                "Ritika's creative vision and dedication were outstanding. She designed our Vishwa Hindu MahaSangh website beautifully and created stunning promotional materials. Her attention to detail and ability to understand our vision made the collaboration seamless. Highly professional!"
              </p>
            </div>

            {/* DigiQuest Consultancy Testimonial */}
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-500/20 to-pink-500/10 border border-pink-500/30 rounded-full flex items-center justify-center text-2xl">
                  💼
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Rajesh Kumar</h3>
                  <p className="text-sm text-pink-400">Technical Lead</p>
                  <p className="text-xs text-slate-500">DigiQuest Consultancy</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-400 leading-relaxed">
                "Ritika impressed us with her dual expertise in design and development. She delivered pixel-perfect UI designs for both Vet Consultation Online and GreenLand Hospital, then seamlessly implemented them in React. A talented professional who bridges design and code effortlessly."
              </p>
            </div>

            {/* Whizlancer Infotech Testimonial */}
            <div className="group p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-500/10 border border-orange-500/30 rounded-full flex items-center justify-center text-2xl">
                  ⭐
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Amit Verma</h3>
                  <p className="text-sm text-orange-400">Project Manager</p>
                  <p className="text-xs text-slate-500">Whizlancer Infotech</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-400 leading-relaxed">
                "Working remotely with Ritika was a pleasure. She designed the Veriqos Technologies portfolio with modern aesthetics and professional layouts. Her communication was clear, deliverables were on time, and the final design exceeded our expectations. Would definitely hire again!"
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
