import React, { useState, useEffect } from 'react';
import ContactForm from '../ui/ContactForm';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }
    
    // Handle mouse movement for premium glow effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const socialLinks = [
    {
      name: 'Gmail',
      href: 'mailto:anshhikagupta555@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
        </svg>
      ),
      gradient: 'from-red-500 to-orange-500'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/anshikagupta76?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      gradient: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/anshhika.design?igsh=MTI2eXY3dms4bDJ0cw==',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      gradient: 'from-pink-500 via-purple-500 to-orange-500'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@anshhika.design',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
        </svg>
      ),
      gradient: 'from-red-600 to-red-700'
    }
  ];

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-teal-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-600/10 to-teal-600/10 rounded-full blur-3xl animate-pulse delay-2000" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%239C92AC' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container-section relative z-10">
        {/* Premium Header with Staggered Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="relative inline-block">
            {/* Glowing background for title */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-teal-600/20 blur-xl rounded-2xl" />
            
            <h2 className="relative text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Contact <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Me</span>
            </h2>
          </div>
          
          <p className={`text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Have a project in mind or want to discuss a collaboration? I'd love to hear from you! 
            Let's create something amazing together.
          </p>
          
          {/* Decorative elements */}
          <div className={`flex justify-center items-center space-x-4 mt-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information Side */}
          <div className={`lg:w-1/2 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative group">
              {/* Premium glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-teal-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Get In Touch
                </h3>
                
                <div className="space-y-8">
                  {/* Social Connect Section */}
                  <div className="group/item">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 relative">
                        <div className="bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-teal-600/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                          </svg>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 blur-lg" />
                      </div>
                      <div className="ml-6">
                        <h4 className="text-xl font-semibold text-white mb-4">Connect With Me</h4>
                        <div className="flex flex-wrap gap-3">
                          {socialLinks.map((social, index) => (
                            <a
                              key={social.name}
                              href={social.href}
                              target={social.href.startsWith('http') ? '_blank' : undefined}
                              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className={`
                                group/social relative p-3 rounded-xl transition-all duration-300 
                                hover:scale-110 hover:-translate-y-1
                                bg-white/5 backdrop-blur-sm border border-white/10 
                                hover:bg-gradient-to-r hover:${social.gradient}
                                hover:border-transparent hover:shadow-lg
                              `}
                              style={{
                                animationDelay: `${index * 100}ms`
                              }}
                              aria-label={social.name}
                            >
                              {/* Icon glow */}
                              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${social.gradient} opacity-0 group-hover/social:opacity-20 transition-opacity duration-300 blur`} />
                              
                              <div className="relative text-gray-300 group-hover/social:text-white transition-colors duration-300">
                                {social.icon}
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Email Section */}
                  <div className="group/item">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 relative">
                        <div className="bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-teal-600/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 blur-lg" />
                      </div>
                      <div className="ml-6">
                        <h4 className="text-xl font-semibold text-white mb-2">Email</h4>
                        <a 
                          href="mailto:anshhikagupta555@gmail.com"
                          className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                        >
                          anshhikagupta555@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  {/* Location Section */}
                  <div className="group/item">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 relative">
                        <div className="bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-teal-600/20 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 blur-lg" />
                      </div>
                      <div className="ml-6">
                        <h4 className="text-xl font-semibold text-white mb-2">Location</h4>
                        <p className="text-gray-300">New Delhi, Delhi, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Side */}
          <div className={`lg:w-1/2 transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative group h-full">
              {/* Premium glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-600/20 via-purple-600/20 to-blue-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              
              <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl h-full">
                <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Send Me a Message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
        
        {/* Premium Bottom Decoration */}
        <div className={`
          flex justify-center items-center space-x-6 mt-20 transition-all duration-1000 delay-1000
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-pulse delay-300" />
            <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full animate-pulse delay-700" />
          </div>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Contact;