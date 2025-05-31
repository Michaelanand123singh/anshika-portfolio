import React, { useState, useEffect } from 'react';
import { skills } from '../../data/skills';
import SkillIcon from '../ui/SkillIcon';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  
  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger skills animation after section becomes visible
          const timer = setTimeout(() => setAnimateSkills(true), 300);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }
    
    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="skills" className="relative py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-teal-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse delay-2000" />
        
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-teal-600/20 to-purple-600/20 blur-xl rounded-2xl" />
            
            <h2 className="relative text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              My <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
            </h2>
          </div>
          
          <p className={`text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            I've mastered a diverse range of design and development tools to craft exceptional user experiences, 
            blending creativity with technical precision to bring ideas to life.
          </p>
          
          {/* Decorative elements */}
          <div className={`flex justify-center items-center space-x-4 mt-8 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-pulse" />
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
          </div>
        </div>
        
        {/* Skills Counter with Animation */}
        <div className={`text-center mb-12 transition-all duration-700 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-pulse" />
            <span className="text-gray-300 font-medium">
              Mastered <span className="text-white font-bold">{skills.length}</span> technologies
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full animate-pulse delay-500" />
          </div>
        </div>
        
        {/* Premium Skills Grid */}
        <div className={`
          grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8
          transition-all duration-700 ease-out delay-800
          ${animateSkills ? 'opacity-100' : 'opacity-0'}
        `}>
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={`
                transform transition-all duration-700 ease-out
                ${animateSkills 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
                }
              `}
              style={{
                transitionDelay: `${800 + (index * 100)}ms`
              }}
            >
              {/* Enhanced Skill Item Wrapper */}
              <div className="group relative">
                {/* Hover glow effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/20 via-teal-600/20 to-purple-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl" />
                
                {/* Skill card enhancement */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 hover:bg-white/10">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/10 via-teal-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <SkillIcon skill={skill} />
                  </div>
                  
                  {/* Floating particles effect */}
                  <div className="absolute top-2 right-2 w-1 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500" />
                  <div className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse delay-300 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Premium Skill Categories Preview */}
        <div className={`
          grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 delay-1200
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          {[
            { title: 'Design Tools', icon: '🎨', description: 'Creative software mastery' },
            { title: 'Development', icon: '💻', description: 'Coding & frameworks' },
            { title: 'Prototyping', icon: '⚡', description: 'Rapid ideation tools' }
          ].map((category, index) => (
            <div 
              key={category.title}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105"
              style={{
                transitionDelay: `${1200 + (index * 200)}ms`
              }}
            >
              {/* Category glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/10 via-teal-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center">
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{category.title}</h3>
                <p className="text-gray-400 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Premium Bottom Decoration */}
        <div className={`
          flex justify-center items-center space-x-6 mt-20 transition-all duration-1000 delay-1500
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-pulse" />
            <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full animate-pulse delay-300" />
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse delay-700" />
          </div>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Skills;