import Navigation from "../components/Navigation";

export default function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
          <path d="M12.5 87.5L50 100L87.5 87.5L100 0H0M12.5 12.5H87.5V25H31.25L37.5 37.5H81.25L75 75H25V62.5H62.5V50H25" fill="#E34F26"/>
        </svg>
      ),
      category: "Frontend"
    },
    {
      name: "CSS3",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
          <path d="M12.5 8.33334L19.075 82.6417L50 91.6667L81.1167 82.6458L87.5 8.33334H12.5ZM67.9167 69.675L50.0292 74.6917H50L32.0958 69.675L30.8583 56.4792H39.6417L40.2667 62.8375L49.9958 65.5L59.7458 62.8333L60.7667 50.125H30.475L29.6958 41.7667H61.5292L62.2542 33.4083H28.85L28.1167 25.05H71.8917L67.9167 69.675Z" fill="#1572B6"/>
        </svg>
      ),
      category: "Frontend"
    },
    {
      name: "JavaScript",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
          <path d="M6.25 6.25H93.75V93.75H6.25V6.25Z" fill="#F7DF1E"/>
          <path d="M65.0282 74.6094C65.7749 76.1228 66.9335 77.3948 68.3708 78.2793C69.808 79.1638 71.4657 79.6248 73.1532 79.6094C76.5595 79.6094 78.7376 77.9062 78.7376 75.5469C78.7376 72.7344 76.5001 71.7281 72.7501 70.0875L70.6938 69.2062C64.7563 66.6781 60.8188 63.5125 60.8188 56.8187C60.8188 50.6531 65.5064 45.9562 72.8595 45.9562C75.2397 45.7848 77.6178 46.3177 79.6973 47.4886C81.7767 48.6594 83.4656 50.4165 84.5532 52.5406L78.1251 56.65C77.706 55.5969 76.9769 54.6959 76.0344 54.0664C75.0918 53.4369 73.9803 53.1086 72.847 53.125C72.3525 53.0755 71.8531 53.1295 71.3806 53.2837C70.9082 53.4379 70.473 53.6887 70.1029 54.0204C69.7327 54.352 69.4357 54.7571 69.2308 55.2098C69.0259 55.6626 68.9175 56.1531 68.9126 56.65C68.9126 59.1156 70.4407 60.1156 73.9688 61.65L76.0251 62.5312C83.0126 65.5281 86.9626 68.5812 86.9626 75.4469C86.9626 82.85 81.147 86.9062 73.3376 86.9062C70.2951 87.0981 67.262 86.4065 64.6035 84.9145C61.945 83.4225 59.7745 81.1939 58.3532 78.4969L65.0282 74.6094ZM35.9813 75.3219C37.272 77.6125 38.447 79.55 41.272 79.55C43.972 79.55 45.6782 78.4937 45.6782 74.3844V46.425H53.9001V74.4937C53.9001 83.0062 48.9001 86.8812 41.622 86.8812C39.0493 87.0219 36.4943 86.3807 34.2929 85.0421C32.0914 83.7035 30.3465 81.7301 29.2876 79.3812L35.9813 75.3219Z" fill="black"/>
        </svg>
      ),
      category: "Frontend"
    },
    {
      name: "VS Code",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
          <path d="M0.950073 34.875C0.950073 34.875 -1.48326 33.0958 1.43757 30.7292L8.25007 24.5708C8.25007 24.5708 10.1959 22.5 12.2584 24.3042L75.0959 72.3958V95.4542C75.0959 95.4542 75.0667 99.0792 70.4709 98.6792L0.950073 34.875Z" fill="#0066CC"/>
          <path d="M17.15 49.7375L0.949969 64.6208C0.949969 64.6208 -0.716697 65.8708 0.949969 68.1083L8.4708 75.025C8.4708 75.025 10.2583 76.9625 12.8958 74.7542L30.0666 61.5958L17.15 49.7375ZM45.5833 49.8583L75.2916 26.9333L75.0958 3.99584C75.0958 3.99584 73.825 -1.0125 69.5958 1.59584L30.0666 37.9583L45.5833 49.8583Z" fill="#0066CC"/>
          <path d="M70.4668 98.7083C72.1918 100.492 74.2834 99.9083 74.2834 99.9083L97.4335 88.3792C100.396 86.3375 99.9793 83.8042 99.9793 83.8042V14.95C99.9793 11.925 96.9168 10.8792 96.9168 10.8792L76.8501 1.1C72.4668 -1.6375 69.5959 1.59584 69.5959 1.59584C69.5959 1.59584 73.2876 -1.09166 75.096 3.99584V95.0375C75.096 95.6625 74.9626 96.275 74.7001 96.8292C74.1709 97.9083 73.0251 98.9125 70.2751 98.4958L70.4668 98.7083Z" fill="#0066CC"/>
        </svg>
      ),
      category: "Tools"
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
          <path d="M49.9999 8.33334C44.5282 8.33334 39.11 9.41108 34.0548 11.505C28.9995 13.599 24.4062 16.6681 20.5371 20.5372C12.7231 28.3512 8.33325 38.9493 8.33325 50C8.33325 68.4167 20.2916 84.0417 36.8333 89.5833C38.9166 89.9167 39.5833 88.625 39.5833 87.5V80.4583C28.0416 82.9583 25.5833 74.875 25.5833 74.875C23.6666 70.0417 20.9583 68.75 20.9583 68.75C17.1666 66.1667 21.2499 66.25 21.2499 66.25C25.4166 66.5417 27.6249 70.5417 27.6249 70.5417C31.2499 76.875 37.3749 75 39.7499 74C40.1249 71.2917 41.2083 69.4583 42.3749 68.4167C33.1249 67.375 23.4166 63.7917 23.4166 47.9167C23.4166 43.2917 24.9999 39.5833 27.7083 36.625C27.2916 35.5833 25.8333 31.25 28.1249 25.625C28.1249 25.625 31.6249 24.5 39.5833 29.875C42.8749 28.9583 46.4583 28.5 49.9999 28.5C53.5416 28.5 57.1249 28.9583 60.4166 29.875C68.3749 24.5 71.8749 25.625 71.8749 25.625C74.1666 31.25 72.7083 35.5833 72.2916 36.625C74.9999 39.5833 76.5833 43.2917 76.5833 47.9167C76.5833 63.8333 66.8333 67.3333 57.5416 68.375C59.0416 69.6667 60.4166 72.2083 60.4166 76.0833V87.5C60.4166 88.625 61.0833 89.9583 63.2083 89.5833C79.7499 84 91.6666 68.4167 91.6666 50C91.6666 44.5283 90.5889 39.1101 88.4949 34.0549C86.401 28.9996 83.3318 24.4063 79.4627 20.5372C75.5936 16.6681 71.0003 13.599 65.9451 11.505C60.8898 9.41108 55.4717 8.33334 49.9999 8.33334Z" fill="#24292E"/>
        </svg>
      ),
      category: "Tools"
    },
    {
      name: "Figma",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none">
          <path d="M50 50a12.5 12.5 0 1 1 25 0 12.5 12.5 0 0 1-25 0z" fill="#1abcfe"/>
          <path d="M25 75a12.5 12.5 0 0 1 12.5-12.5H50v12.5a12.5 12.5 0 1 1-25 0z" fill="#0acf83"/>
          <path d="M50 25v25h12.5a12.5 12.5 0 0 0 0-25H50z" fill="#ff7262"/>
          <path d="M25 37.5A12.5 12.5 0 0 0 37.5 50H50V25H37.5A12.5 12.5 0 0 0 25 37.5z" fill="#f24e1e"/>
          <path d="M25 62.5A12.5 12.5 0 0 0 37.5 75H50V50H37.5A12.5 12.5 0 0 0 25 62.5z" fill="#a259ff"/>
        </svg>
      ),
      category: "Design"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/90 text-sm font-medium">Available for work</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Skills &
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> Tools</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I use to bring ideas to life with clean, efficient, and modern solutions.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="pb-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container */}
                  <div className="flex items-center justify-center w-16 h-16 bg-white/10 rounded-xl mb-6 group-hover:bg-white/20 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  
                  {/* Skill name */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {skill.name}
                  </h3>
                  
                  {/* Category badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full">
                    <span className="text-blue-300 text-sm font-medium">{skill.category}</span>
                  </div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

  // ...existing code...
    </div>
  );
}
