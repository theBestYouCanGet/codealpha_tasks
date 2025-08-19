import Navigation from "../components/Navigation";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Navigation />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left column - Content */}
            <div>
              {/* Status badge */}
              <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-white/90 text-sm font-medium">About Me</span>
              </div>
              {/* Main heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Turning Ideas Into
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent block">
                  Digital Reality
                </span>
              </h1>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Hi! I'm <span className="text-cyan-400 font-semibold">Akbi Mustapha</span>, a passionate frontend developer 
                  with a keen eye for design and a love for creating seamless user experiences. I specialize in modern 
                  web technologies and believe in the power of clean, efficient code.
                </p>
                <p>
                  My journey in web development started with curiosity and has grown into a genuine passion for crafting 
                  digital solutions that make a difference. I combine technical expertise with creative problem-solving 
                  to deliver results that exceed expectations.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest design trends, contributing to open-source 
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>
              {/* CTA */}
              <div className="mt-10">
                <button 
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                  onClick={() => window.location.href = "mailto:akbimstafa02@gmail.com"}
                >
                  <span>Let's Collaborate</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
            {/* Right column - Image */}
            <div className="relative">
              <div className="relative">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-lg opacity-75 animate-pulse"></div>
                {/* Image container */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-1 border border-white/20">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden">
                    <img 
                      src="https://api.builder.io/api/v1/image/assets/TEMP/b36dab1fc4030b035851f650686b562473c1297a?width=1062"
                      alt="Akbi Mustapha"
                      className="w-full h-[500px] lg:h-[600px] object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
                {/* Floating code element */}
                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-4 shadow-2xl animate-bounce">
                  <div className="text-white text-xs font-mono">
                    <div>const developer = {`{`}</div>
                    <div className="ml-2">name: "Mustapha Akbi",</div>
                    <div className="ml-2">passion: "Frontend"</div>
                    <div>{`}`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
            What Drives Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💡",
                title: "Innovation",
                description: "Always exploring new technologies and creative solutions to push the boundaries of what's possible."
              },
              {
                icon: "🎯",
                title: "Precision",
                description: "Attention to detail in every pixel, every line of code, and every user interaction."
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description: "Building strong relationships with clients and teams to create amazing products together."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
