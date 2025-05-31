import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  // Education details with structured data
  const education = {
    degree: "B.Com (Hons)",
    institution: "Delhi University",
    yearCompleted: "2021 - 2024",
    fieldOfStudy: "UI/UX Design"
  };

  // Experience details with structured data
  const experience = {
    years: "1+",
    field: "UI/UX Design",
    skills: ["User Research", "Wireframing", "Prototyping", "Visual Design"]
  };

  // Stats for premium display
  const stats = [
    { number: "20+", label: "Projects Completed", icon: "📱" },
    { number: "15+", label: "Happy Clients", icon: "😊" },
    { number: "1+", label: "Years Experience", icon: "🚀" },
    { number: "95%", label: "Client Satisfaction", icon: "⭐" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Scroll handler function - extract to avoid inline function creation on each render
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Schema.org structured data
  const schemaData = {
    "@context": "http://schema.org",
    "@type": "Person",
    "name": "Anshika Gupta",
    "jobTitle": "UX/UI Designer",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": education.institution,
      "sameAs": "https://www.nid.edu/" // Replace with actual URL
    },
    "knowsAbout": ["User Experience Design", "Interface Design", "Prototyping", "User Research"],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "UX/UI Designer",
      "occupationField": experience.field,
      "experienceYears": experience.years
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden"
      aria-label="About Anshika Gupta"
      itemScope 
      itemType="http://schema.org/Person"
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Interactive mouse glow */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-teal-600/10 rounded-full blur-3xl transition-all duration-300 pointer-events-none"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            opacity: isVisible ? 0.6 : 0
          }}
        />
        
        {/* Geometric patterns */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45 animate-spin-slow" />
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rotate-12 animate-bounce-slow" />
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rotate-45 animate-pulse" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Premium Header */}
        <header className={`mb-20 text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-4" itemProp="name">
              About <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Me</span>
            </h2>
            
            {/* Animated underline */}
            <div className="h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-full transform scale-x-0 animate-scale-x origin-center" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <p className="text-xl text-gray-400 mt-6 max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences that blend creativity with functionality
          </p>
        </header>
        
        <div className="flex flex-col xl:flex-row items-center gap-16">
          {/* Premium Profile Section */}
          <div className={`xl:w-1/2 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="relative group">
              {/* Profile Image Container */}
              <figure className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-teal-600/20 p-1">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-black">
                  <img
                    src="/anshika-photo.jpg"
                    alt="Anshika Gupta - UI/UX Designer based in India"
                    className="w-full h-auto rounded-3xl transition-all duration-700 group-hover:scale-105 group-hover:rotate-1"
                    width="600"
                    height="600"
                    loading="lazy"
                    itemProp="image"
                  />
                  
                  {/* Premium overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-bounce delay-300" />
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full animate-pulse delay-700" />
                </div>
                
                <figcaption className="sr-only">Portrait photo of Anshika Gupta</figcaption>
              </figure>

              {/* Floating stats cards */}
              <div className="absolute -right-8 top-16 bg-black/80 backdrop-blur-xl rounded-2xl p-4 border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-300 hidden lg:block">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">1+</div>
                  <div className="text-xs text-gray-400">Years Exp</div>
                </div>
              </div>
              
              <div className="absolute -left-8 bottom-16 bg-black/80 backdrop-blur-xl rounded-2xl p-4 border border-white/10 transform -rotate-3 hover:rotate-0 transition-transform duration-300 hidden lg:block">
                <div className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text text-transparent">50+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Premium Content Section */}
          <div className={`xl:w-1/2 transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div itemProp="description" className="space-y-6">
              {/* Main description with premium styling */}
              <div className="relative">
                <p className="text-lg text-gray-300 leading-relaxed mb-6 relative z-10">
                  Hi, I'm <span className="text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text font-semibold" itemProp="givenName">Anshika</span> <span className="text-transparent bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text font-semibold" itemProp="familyName">Gupta</span>, a professional
                  <span className="text-transparent bg-gradient-to-r from-teal-400 to-purple-400 bg-clip-text font-semibold" itemProp="jobTitle"> UX/UI Designer</span> with a passion for creating dynamic and responsive user interfaces. 
                  I have extensive experience in user research, interaction design, prototyping, and visual design.
                </p>
              </div>
            </div>
            
            {/* Premium Stats Grid */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
            
            {/* Education and Experience with premium cards */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div 
                className={`p-8 rounded-2xl bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-transparent backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ animationDelay: '1.2s' }}
                itemProp="alumniOf" 
                itemScope 
                itemType="http://schema.org/EducationalOrganization"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">🎓</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <div className="text-gray-300 space-y-2">
                  <p className="font-semibold text-purple-300" itemProp="degree">{education.degree}</p>
                  <p itemProp="name">{education.institution}</p>
                  <p className="text-sm text-gray-400">{education.yearCompleted}</p>
                  <meta itemProp="endDate" content={education.yearCompleted} />
                </div>
              </div>
              
              <div 
                className={`p-8 rounded-2xl bg-gradient-to-br from-teal-600/10 via-blue-600/10 to-transparent backdrop-blur-sm border border-teal-500/20 hover:border-teal-400/40 transition-all duration-300 hover:scale-105 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ animationDelay: '1.4s' }}
                itemProp="hasOccupation" 
                itemScope 
                itemType="http://schema.org/Occupation"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-xl">💼</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Experience</h3>
                </div>
                <div className="text-gray-300 space-y-2">
                  <p className="font-semibold text-teal-300"><span itemProp="experienceYears">{experience.years}</span> Years</p>
                  <p itemProp="occupationField">{experience.field}</p>
                </div>
                <div className="hidden" aria-hidden="true">
                  <ul itemProp="skills">
                    {experience.skills.map((skill, index) => (
                      <li key={index} itemProp="skill">{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Premium Call to Action Buttons */}
            <div className={`mt-12 flex flex-wrap gap-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`} style={{ animationDelay: '1.6s' }}>
              <a 
                href="#portfolio" 
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
                onClick={(e) => handleSmoothScroll(e, '#portfolio')}
              >
                <span className="relative z-10 flex items-center">
                  View My Work
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-blue-700 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a 
                href="#contact" 
                className="group relative px-8 py-4 bg-transparent border-2 border-purple-500/50 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/25"
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                <span className="relative z-10 flex items-center">
                  Contact Me
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">✉</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Schema.org data for SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} 
      />
      
      {/* Custom animations styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0px) rotate(12deg); }
            50% { transform: translateY(-10px) rotate(12deg); }
          }
          
          @keyframes scale-x {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }
          
          .animate-spin-slow {
            animation: spin-slow 20s linear infinite;
          }
          
          .animate-bounce-slow {
            animation: bounce-slow 3s ease-in-out infinite;
          }
          
          .animate-scale-x {
            animation: scale-x 1s ease-out forwards;
          }
        `
      }} />
    </section>
  );
};

export default About;