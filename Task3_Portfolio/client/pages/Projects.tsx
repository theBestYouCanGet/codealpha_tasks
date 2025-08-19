import Navigation from "../components/Navigation";

export default function Projects() {
  const projects = [
    {
      title: "Gallery Website",
      category: "Website",
      description: "A clean and responsive image gallery website showcasing photography with smooth hover effects and organized layouts.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/d3d6d9edff6e27a6dc1969a8c4d37448f0a96820?width=600",
      alt: "Gallery project screenshot",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      link: "#",
  github: "https://github.com/theBestYouCanGet/CodeAlpha_LandingPage"
    },
    {
      title: "Basic Calculator",
      category: "Tool",
      description: "A simple calculator application that performs basic arithmetic operations with a clean, user-friendly interface.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/9a045b3253b60183cc6cf7db308c03c72cfbe2ea?width=600",
      alt: "Calculator project screenshot",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      link: "#",
  github: "https://github.com/theBestYouCanGet/CodeAlpha_Calculator"
    },
    {
      title: "Music Player",
      category: "Website",
      description: "A music player interface with custom controls, playlist display, and responsive design for an enjoyable listening experience.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2eca2c159f12056eead9afa7087be17875b560f2?width=600",
      alt: "Music Player project screenshot",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      link: "#",
      github: "https://github.com/theBestYouCanGet/CodeAlpha_MusicPlayer"
    },
    {
      title: "Portfolio Website",
      category: "Portfolio",
      description: "A modern, responsive portfolio website designed with Figma and built with the help of AI to showcase projects and skills.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/aae437c08c204d941a111065361b19df3472430d?width=600",
      alt: "Portfolio project screenshot",
      technologies: ["Figma", "React", "TypeScript"],
      link: "#",
      github: "https://github.com/theBestYouCanGet/CodeAlpha_Portfolio"
    }
  ];

  // ...existing code...
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">Featured Work</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            My
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"> Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12">
            A collection of projects that showcase my skills in HTML5, CSS3, and JavaScript, 
            along with my latest portfolio built with modern design tools.
          </p>
          {/* Filter buttons */}
          {/* Filter buttons removed as requested */}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Image container */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                    
                    {/* Overlay buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900/90 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-slate-800 transition-all duration-300 hover:scale-105"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>Code</span>
                      </button>
                    </div>
                  </div>

                  {/* Project details */}
                  <div className="p-8">
                    {/* Category */}
                    <div className="inline-flex items-center px-3 py-1 bg-purple-500/20 border border-purple-400/30 rounded-full mb-4">
                      <span className="text-purple-300 text-sm font-medium">{project.category}</span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-sm text-gray-300 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border border-white/10 rounded-3xl p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Have a project in mind?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to work on new challenges and bring innovative ideas to life. 
              Let's discuss how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = "tel:+212708189710"}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Schedule a Call</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
