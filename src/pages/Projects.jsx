import { useState, useEffect } from 'react'

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      category: 'web',
      description: 'Modern portfolio with smooth animations',
      fullDescription: 'Built a responsive personal portfolio website using React and Tailwind CSS. Features smooth scroll animations, dark theme, project showcase, and contact form. Fully responsive across all devices.',
      color: 'bg-gradient-to-br from-purple-400 to-pink-500',
      tags: ['React', 'Tailwind CSS', 'Responsive', 'Animations'],
      duration: '2 weeks',
      client: 'Personal Project',
      year: '2025',
      url: '#'
    },
  {
  id: 2,
  title: 'LibraryHub',
  category: 'web',
  description: 'Online library management and book tracking',
  fullDescription: 'Developed a Library Management System using React to manage books, categories, and availability. Features include book listing, search and filter functionality, and a responsive UI for smooth user interaction.',
  color: 'bg-gradient-to-br from-indigo-400 to-purple-500',
  tags: ['React', 'JavaScript', 'CSS', 'Responsive Design'],
  duration: '2 weeks',
  client: 'Personal Project',
  year: '2025',
  url: 'https://library-hub-web.netlify.app/'
},

    {
  id: 3,
  title: 'Vet Consultation Online',
  category: 'web',
  description: 'Online veterinary consultation and appointment platform',
  fullDescription: 'Designed and developed a responsive web application for online veterinary consultations. Created complete UI/UX design in Figma and implemented it using React. Features appointment booking interfaces, service listings, and interactive UI components with focus on usability and performance.',
  color: 'bg-gradient-to-br from-emerald-400 to-teal-500',
  tags: ['Figma', 'UI/UX Design', 'React', 'JavaScript', 'CSS'],
  duration: '3 months',
  client: 'DigiQuest Consultancy Services Pvt. Ltd.',
  year: '2025',
  url: 'https://www.figma.com/design/5AH8d659NJWQbqsyhdZXq0/DigiVet?node-id=0-1&t=PURzfExwBGTgRPsM-1'
},

    {
  id: 4,
  title: 'GreenLand Hospital',
  category: 'design',
  description: 'Modern hospital website UI/UX design',
  fullDescription: 'Designed comprehensive UI/UX for GreenLand Hospital website using Figma. Created user-friendly interfaces for patient appointment booking, doctor profiles, services showcase, and contact information. Focused on accessibility and clean, medical-appropriate design aesthetics.',
  color: 'bg-gradient-to-br from-green-400 to-emerald-500',
  tags: ['Figma', 'UI/UX Design', 'Healthcare', 'Wireframing'],
  duration: '3 months',
  client: 'DigiQuest Consultancy Services Pvt. Ltd.',
  year: '2025',
  url: 'https://www.figma.com/design/r4aHEbkxxACEDLMWK080KC/Green-Land-Hospital?node-id=0-1&t=xamPXbg2FBCZMWuQ-1'
},

    {
  id: 5,
  title: 'Veriqos Technologies Portfolio',
  category: 'design',
  description: 'Corporate portfolio website design',
  fullDescription: 'Designed a complete portfolio website for Veriqos Technologies using Figma. Created modern, professional layouts showcasing company services, projects, team, and contact sections. Developed comprehensive design system with consistent branding and responsive components.',
  color: 'bg-gradient-to-br from-blue-400 to-cyan-500',
  tags: ['Figma', 'UI/UX Design', 'Corporate Design', 'Design System'],
  duration: '1 month',
  client: 'Whizlancer Infotech Pvt. Ltd.',
  year: '2025',
  url: 'https://www.figma.com/design/1I3ID4GaU6RbVmnkyNe6Wo/Veriqos?node-id=0-1&t=4v3Q4NQtmLDbic9w-1'
},

    {
  id: 6,
  title: 'Vishwa Hindu MahaSangh Website',
  category: 'design',
  description: 'Foundation website and promotional materials',
  fullDescription: 'Designed the official website for Vishwa Hindu MahaSangh using Figma and Canva. Created various promotional posters, social media graphics, and marketing materials for foundation events. Established consistent visual identity across all digital and print media.',
  color: 'bg-gradient-to-br from-orange-400 to-red-500',
  tags: ['Figma', 'Canva', 'UI/UX Design', 'Graphic Design', 'Branding'],
  duration: '2 weeks',
  client: 'Yogi Foundation',
  year: '2025',
  url: 'https://www.figma.com/design/aOm6SXOJ1pCIYDbvB4AiUh/%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%8D%E0%A4%B5-%E0%A4%B9%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A5%82-%E0%A4%AE%E0%A4%B9%E0%A4%BE%E0%A4%B8%E0%A4%82%E0%A4%98?node-id=98-295&t=PURzfExwBGTgRPsM-1'
},

    // {
    //   id: 4,
    //   title: 'Task Management App',
    //   category: 'web',
    //   description: 'Organize your daily tasks',
    //   fullDescription: 'Built a to-do list application with React featuring add, edit, delete, and mark complete functionality. Implements local storage for data persistence and drag-and-drop for task reordering.',
    //   color: 'bg-gradient-to-br from-green-400 to-emerald-500',
    //   tags: ['React', 'Local Storage', 'Drag & Drop'],
    //   duration: '1 week',
    //   client: 'Personal Project',
    //   year: '2025'
    // },
    // {
    //   id: 5,
    //   title: 'Restaurant Landing Page',
    //   category: 'web',
    //   description: 'Beautiful restaurant website',
    //   fullDescription: 'Designed and developed a modern restaurant landing page with menu showcase, online reservation form, and location map. Fully responsive with smooth animations and optimized images.',
    //   color: 'bg-gradient-to-br from-pink-400 to-rose-500',
    //   tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    //   duration: '4 days',
    //   client: 'Practice Project',
    //   year: '2024'
    // },
    // {
    //   id: 6,
    //   title: 'Movie Search App',
    //   category: 'web',
    //   description: 'Browse and search movies',
    //   fullDescription: 'Built a movie search application using React and TMDB API. Features movie search, detailed information, ratings, and responsive card layout. Implements debouncing for optimized API calls.',
    //   color: 'bg-gradient-to-br from-indigo-400 to-purple-500',
    //   tags: ['React', 'API Integration', 'Search'],
    //   duration: '5 days',
    //   client: 'Personal Project',
    //   year: '2025'
    // },
   {
  id: 8,
  title: 'Learn-X – Online Library Management Website',
  category: 'web',
  description: 'Online library management system',
  fullDescription: 'Developed an Online Library Management Website using HTML, CSS, and JavaScript. Features include book listing, category-wise organization, search functionality, and a responsive, user-friendly interface.',
  color: 'bg-gradient-to-br from-amber-400 to-orange-500',
  tags: ['HTML', 'CSS', 'JavaScript',],
  duration: '2 weeks',
  client: 'Personal Project',
  year: '2024',
  url: 'https://tech-learn0.netlify.app/'
},

    // {
    //   id: 8,
    //   title: 'Blog Website Template',
    //   category: 'web',
    //   description: 'Clean blog layout design',
    //   fullDescription: 'Developed a responsive blog template with article cards, sidebar, categories, and pagination. Focus on typography and readability with mobile-first approach.',
    //   color: 'bg-gradient-to-br from-violet-400 to-purple-500',
    //   tags: ['HTML', 'CSS', 'Responsive', 'Typography'],
    //   duration: '3 days',
    //   client: 'Practice Project',
    //   year: '2024'
    // },
    // {
    //   id: 9,
    //   title: 'Quiz Application',
    //   category: 'web',
    //   description: 'Interactive quiz with scoring',
    //   fullDescription: 'Built an interactive quiz application with multiple-choice questions, timer, score tracking, and results page. Implements state management and conditional rendering in React.',
    //   color: 'bg-gradient-to-br from-amber-400 to-orange-500',
    //   tags: ['React', 'State Management', 'Interactive'],
    //   duration: '1 week',
    //   client: 'Personal Project',
    //   year: '2022'
    // }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'design', name: 'UI/UX Design' }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

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
            Projects
          </div>
          <h1 className="text-5xl mb-3 md:text-7xl font-bold mb-4">
            Featured
            <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-slate-400  max-w-3xl mx-auto mb-8">
            A curated selection of my recent work across web and mobile platforms. Each project represents a unique challenge and an opportunity to create meaningful user experiences.
          </p>
          
          {/* Category Filter */}
          <div className="flex gap-4 justify-center flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50'
                    : 'border border-slate-700 hover:bg-slate-800'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group cursor-pointer"
                onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
              >
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/50 backdrop-blur-xl hover:border-slate-700 transition-all hover:scale-105">
                  <div className={`w-full aspect-[4/3] ${project.color} relative`}>
                    <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-all"></div>
                    <div className="absolute top-4 right-4 px-3 py-1 bg-slate-950/80 backdrop-blur-sm rounded-full text-xs">
                      {project.year}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-purple-400">{project.category === 'web' ? '🌐 Web' : '📱 Mobile'}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-sm text-slate-500">{project.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>
                    <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                      {project.fullDescription}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-slate-900/50 border border-slate-700 rounded-full text-xs text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-slate-500">
                      Client: <span className="text-slate-400">{project.client}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">My Design Process</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A structured approach to creating exceptional user experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800">
              <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center text-purple-400 mb-6 text-3xl">
                🔍
              </div>
              <h3 className="text-2xl font-bold mb-4">1. Research</h3>
              <p className="text-slate-400 leading-relaxed">
                Understanding user needs, business goals, and market landscape through research, interviews, and competitive analysis.
              </p>
            </div>
            <div className="p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800">
              <div className="w-16 h-16 bg-pink-500/10 border border-pink-500/20 rounded-2xl flex items-center justify-center text-pink-400 mb-6 text-3xl">
                ✏️
              </div>
              <h3 className="text-2xl font-bold mb-4">2. Design</h3>
              <p className="text-slate-400 leading-relaxed">
                Creating wireframes, mockups, and high-fidelity designs that solve user problems while aligning with brand identity.
              </p>
            </div>
            <div className="p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800">
              <div className="w-16 h-16 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center justify-center text-orange-400 mb-6 text-3xl">
                🎨
              </div>
              <h3 className="text-2xl font-bold mb-4">3. Prototype</h3>
              <p className="text-slate-400 leading-relaxed">
                Building interactive prototypes to validate design decisions and test user flows before development begins.
              </p>
            </div>
            <div className="p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800">
              <div className="w-16 h-16 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 text-3xl">
                ✅
              </div>
              <h3 className="text-2xl font-bold mb-4">4. Validate</h3>
              <p className="text-slate-400 leading-relaxed">
                Testing with real users, gathering feedback, and iterating on designs to ensure optimal user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">Client Testimonials</h2>
            <p className="text-xl text-slate-400">What clients say about working with me</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                "Exceptional designer who truly understands user needs. The e-commerce redesign exceeded our expectations and significantly improved our conversion rates."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full"></div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-sm text-slate-400">CEO, Fashion Retailer Inc.</div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                "Outstanding work on our mobile banking app. The design is both beautiful and secure, and our users love the intuitive interface."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full"></div>
                <div>
                  <div className="font-semibold">Michael Chen</div>
                  <div className="text-sm text-slate-400">Product Director, National Bank</div>
                </div>
              </div>
            </div>
            <div className="p-8 bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-800">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                "A pleasure to work with! Delivered a stunning fitness app that our users find engaging and motivating. Highly recommended."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full"></div>
                <div>
                  <div className="font-semibold">Emily Rodriguez</div>
                  <div className="text-sm text-slate-400">Founder, FitLife Technologies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


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

export default Projects
