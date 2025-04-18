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
    
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    
    // Set initial scroll state
    handleScroll();
    
    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
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
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`
            rounded-full 
            ${scrolled ? 'bg-black/60 backdrop-blur-lg shadow-lg' : 'bg-transparent'} 
            py-3 px-6 
            transition-all duration-300
            my-2
          `}
        >
          <div className="flex justify-between items-center">
            {/* Logo with Schema.org structured data */}
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="font-display font-bold text-white flex items-center gap-2 transition-transform hover:scale-105 duration-300"
              aria-label="Go to homepage"
              itemProp="url"
            >
              <span 
                className="text-2xl gradient-text" 
                itemProp="name"
                role="img" 
                aria-label="Website logo"
              >
                Anshika Gupta
              </span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block" aria-label="Main navigation">
              <ul className="flex space-x-8 items-center">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className={`py-2 inline-block transition-all duration-300 hover:scale-105 ${
                        activeSection === link.href 
                          ? 'text-primary-light font-medium' 
                          : 'text-white hover:text-primary-light'
                      }`}
                      aria-label={link.ariaLabel}
                      aria-current={activeSection === link.href ? 'page' : undefined}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <ThemeToggle />
                </li>
              </ul>
            </nav>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <ThemeToggle />
              <button 
                className="ml-4 text-white focus:outline-none p-2 rounded-full hover:bg-dark-light" 
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <div className="w-6 flex flex-col space-y-1.5">
                  <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`block h-0.5 w-full bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className={`
          md:hidden 
          bg-dark-light 
          mt-2 
          rounded-2xl 
          mx-4 
          shadow-lg 
          overflow-hidden 
          transition-all 
          duration-300
          ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
        `}
        aria-hidden={!isOpen}
      >
        <div className="py-3 px-6">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href}
                  className={`block py-3 px-4 rounded-lg transition-colors duration-200 ${
                    activeSection === link.href 
                      ? 'bg-dark/30 text-primary-light font-medium' 
                      : 'text-white hover:bg-dark/30'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  aria-label={link.ariaLabel}
                  aria-current={activeSection === link.href ? 'page' : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;