import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

interface NavLink {
  name: string;
  href: string;
  ariaLabel?: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Array of navigation links with SEO-friendly aria labels
  const navLinks: NavLink[] = [
    { name: 'Home', href: '#home', ariaLabel: 'Navigate to home section' },
    { name: 'About', href: '#about', ariaLabel: 'Learn more about us' },
    { name: 'Skills', href: '#skills', ariaLabel: 'View our skills and expertise' },
    { name: 'Portfolio', href: '#portfolio', ariaLabel: 'Browse our project portfolio' },
    { name: 'Contact', href: '#contact', ariaLabel: 'Get in touch with us' },
  ];
  
  useEffect(() => {
    // Handle scroll event to detect when page is scrolled
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Determine active section based on scroll position
      const sections = navLinks.map(link => link.href);
      
      // Find the current section in view
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in view (with some buffer)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    // Handle mouse movement for premium glow effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Set initial scroll state
    handleScroll();
    
    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(href);
    }
    setIsOpen(false);
  };
  
  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      {/* Premium gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-teal-600/10 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`
            relative
            rounded-2xl 
            ${scrolled 
              ? 'bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-xl shadow-2xl border border-white/10' 
              : 'bg-gradient-to-r from-transparent via-black/20 to-transparent backdrop-blur-sm'
            } 
            py-4 px-8 
            transition-all duration-500 ease-out
            my-3
            hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)]
            group
          `}
          style={{
            boxShadow: scrolled 
              ? `0 25px 50px -12px rgba(0,0,0,0.4), 0 0 30px rgba(139, 92, 246, 0.1)` 
              : 'none'
          }}
        >
          {/* Premium animated border */}
          <div className={`
            absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-teal-500/20 
            opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
            ${scrolled ? 'block' : 'hidden'}
          `} />
          
          <div className="relative flex justify-between items-center">
            {/* Premium Logo with enhanced styling */}
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="relative font-display font-bold text-white flex items-center gap-3 transition-all hover:scale-110 duration-500 group/logo"
              aria-label="Go to homepage"
              itemProp="url"
            >
              {/* Logo glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 rounded-full opacity-0 group-hover/logo:opacity-30 blur-lg transition-opacity duration-500" />
              
              <span 
                className="relative text-3xl bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent font-extrabold tracking-tight" 
                itemProp="name"
                role="img" 
                aria-label="Website logo"
              >
                Anshika Gupta
              </span>
              
              {/* Animated dot */}
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
            </a>
            
            {/* Desktop Navigation with premium styling */}
            <nav className="hidden md:block" aria-label="Main navigation">
              <ul className="flex space-x-2 items-center">
                {navLinks.map((link, index) => (
                  <li key={link.name} className="relative group/nav">
                    <a 
                      href={link.href} 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className={`
                        relative px-6 py-3 rounded-xl font-medium transition-all duration-300 
                        hover:scale-105 hover:-translate-y-0.5
                        ${activeSection === link.href 
                          ? 'text-white bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 shadow-lg shadow-purple-500/25' 
                          : 'text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm'
                        }
                      `}
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                      aria-label={link.ariaLabel}
                      aria-current={activeSection === link.href ? 'page' : undefined}
                    >
                      {/* Premium hover effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-teal-600/20 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-300" />
                      
                      <span className="relative z-10">{link.name}</span>
                      
                      {/* Active indicator */}
                      {activeSection === link.href && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
                      )}
                    </a>
                  </li>
                ))}
                <li className="ml-4">
                  <div className="p-2 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                    <ThemeToggle />
                  </div>
                </li>
              </ul>
            </nav>
            
            {/* Premium Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <ThemeToggle />
              </div>
              <button 
                className="relative p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white focus:outline-none transition-all duration-300 hover:scale-105 group/burger" 
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {/* Premium burger animation */}
                <div className="w-6 flex flex-col space-y-1.5">
                  <span className={`
                    block h-0.5 w-full bg-gradient-to-r from-purple-400 to-blue-400 rounded-full
                    transition-all duration-300 origin-center
                    ${isOpen ? 'rotate-45 translate-y-2' : 'group-hover/burger:scale-110'}
                  `} />
                  <span className={`
                    block h-0.5 w-full bg-gradient-to-r from-blue-400 to-teal-400 rounded-full
                    transition-all duration-300
                    ${isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100 group-hover/burger:scale-110'}
                  `} />
                  <span className={`
                    block h-0.5 w-full bg-gradient-to-r from-teal-400 to-purple-400 rounded-full
                    transition-all duration-300 origin-center
                    ${isOpen ? '-rotate-45 -translate-y-2' : 'group-hover/burger:scale-110'}
                  `} />
                </div>
                
                {/* Button glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-teal-600/20 opacity-0 group-hover/burger:opacity-100 transition-opacity duration-300 -z-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Premium Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`
          md:hidden 
          bg-gradient-to-br from-black/90 via-gray-900/90 to-black/90
          backdrop-blur-xl
          mt-2 
          rounded-2xl 
          mx-4 
          shadow-2xl 
          border border-white/10
          overflow-hidden 
          transition-all 
          duration-500 ease-out
          ${isOpen ? 'max-h-96 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'}
        `}
        style={{
          boxShadow: isOpen ? '0 25px 50px -12px rgba(0,0,0,0.6), 0 0 30px rgba(139, 92, 246, 0.15)' : 'none'
        }}
        aria-hidden={!isOpen}
      >
        <div className="py-6 px-6">
          <ul className="space-y-2">
            {navLinks.map((link, index) => (
              <li key={link.name} className="relative group/mobile">
                <a 
                  href={link.href}
                  className={`
                    relative block py-4 px-6 rounded-xl font-medium
                    transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5
                    ${activeSection === link.href 
                      ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white shadow-lg shadow-purple-500/25' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }
                  `}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  aria-label={link.ariaLabel}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                >
                  {/* Mobile hover effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-teal-600/10 opacity-0 group-hover/mobile:opacity-100 transition-opacity duration-300" />
                  
                  <span className="relative z-10 flex items-center justify-between">
                    {link.name}
                    {activeSection === link.href && (
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    )}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Premium bottom border */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      </div>
    </header>
  );
};

export default Navbar;