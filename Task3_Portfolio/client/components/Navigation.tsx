import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/skills", label: "Skills" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden bg-black/50 backdrop-blur-sm text-white p-3 rounded-lg"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Desktop navigation */}
      <nav className="fixed top-1/2 right-8 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`group relative w-4 h-4 rounded-full transition-all duration-300 ${
              isActive(item.path) ? "bg-white" : "bg-white/30 hover:bg-white/60"
            }`}
            title={item.label}
          >
            {/* Tooltip */}
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Mobile navigation menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu */}
        <div
          className={`absolute top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-md transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-center h-full px-8 space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium transition-colors duration-300 ${
                  isActive(item.path) 
                    ? "text-cyan-400" 
                    : "text-white hover:text-cyan-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Contact info */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <a 
                href="mailto:akbimstafa02@gmail.com" 
                className="text-white/80 hover:text-white text-sm transition-colors duration-300"
              >
                akbimstafa02@gmail.com
              </a>
              <p className="text-white/80 text-sm mt-2">+212708189710</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
