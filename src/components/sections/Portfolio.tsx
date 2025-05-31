import React, { useState, useEffect } from 'react';
import { projects } from '../../data/projects';
import PortfolioItem from '../ui/PortfolioItem';

type FilterCategory = 'all' | 'ui-design' | 'web-design' | 'app-design';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [isVisible, setIsVisible] = useState(false);
  const [animateProjects, setAnimateProjects] = useState(false);
  
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
    
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      observer.observe(portfolioSection);
    }
    
    return () => observer.disconnect();
  }, []);
  
  // Animate projects when filter changes
  useEffect(() => {
    setAnimateProjects(false);
    const timer = setTimeout(() => setAnimateProjects(true), 150);
    return () => clearTimeout(timer);
  }, [activeFilter]);
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => {
        if (activeFilter === 'ui-design') {
          return project.technologies.some(tech => ['Figma', 'Adobe XD', 'Sketch'].includes(tech));
        } else if (activeFilter === 'web-design') {
          return project.technologies.some(tech => ['HTML', 'CSS', 'JavaScript', 'React'].includes(tech));
        } else if (activeFilter === 'app-design') {
          return project.technologies.some(tech => ['Figma', 'Sketch', 'Prototyping'].includes(tech));
        }
        return false;
      });
  
  const filters: { id: FilterCategory; label: string; icon: string; count: number }[] = [
    { 
      id: 'all', 
      label: 'All Work', 
      icon: '🎨', 
      count: projects.length 
    },
    { 
      id: 'ui-design', 
      label: 'UI Design', 
      icon: '✨', 
      count: projects.filter(p => p.technologies.some(tech => ['Figma', 'Adobe XD', 'Sketch'].includes(tech))).length 
    },
    { 
      id: 'web-design', 
      label: 'Web Design', 
      icon: '🌐', 
      count: projects.filter(p => p.technologies.some(tech => ['HTML', 'CSS', 'JavaScript', 'React'].includes(tech))).length 
    },
    { 
      id: 'app-design', 
      label: 'App Design', 
      icon: '📱', 
      count: projects.filter(p => p.technologies.some(tech => ['Figma', 'Sketch', 'Prototyping'].includes(tech))).length 
    },
  ];
  
  return (
    <section id="portfolio" className="relative py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-teal-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
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
              My <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">Portfolio</span>
            </h2>
          </div>
          
          <p className={`text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Explore a curated collection of my creative works that showcase innovative design solutions, 
            cutting-edge technologies, and thoughtful user experiences.
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
        
        {/* Premium Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                group relative px-8 py-4 rounded-2xl text-sm font-medium
                transition-all duration-500 hover:scale-105 hover:-translate-y-1
                ${activeFilter === filter.id
                  ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white shadow-2xl shadow-purple-500/25'
                  : 'bg-white/5 backdrop-blur-sm text-gray-300 hover:bg-white/10 hover:text-white border border-white/10 hover:border-white/20'
                }
              `}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Button glow effect */}
              <div className={`
                absolute inset-0 rounded-2xl transition-opacity duration-500
                ${activeFilter === filter.id 
                  ? 'bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-teal-600/20 opacity-100' 
                  : 'bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100'
                }
              `} />
              
              <span className="relative z-10 flex items-center space-x-3">
                <span className="text-lg">{filter.icon}</span>
                <span>{filter.label}</span>
                <span className={`
                  px-2 py-1 rounded-full text-xs font-bold
                  ${activeFilter === filter.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-700 text-gray-300 group-hover:bg-gray-600'
                  }
                `}>
                  {filter.count}
                </span>
              </span>
              
              {/* Active indicator */}
              {activeFilter === filter.id && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse" />
              )}
            </button>
          ))}
        </div>
        
        {/* Results Counter with Animation */}
        <div className={`text-center mb-12 transition-all duration-500 ${
          animateProjects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
            <span className="text-gray-300 font-medium">
              Showing <span className="text-white font-bold">{filteredProjects.length}</span> projects
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-pulse delay-500" />
          </div>
        </div>
        
        {/* Premium Project Grid */}
        <div className={`
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10
          transition-all duration-700 ease-out
          ${animateProjects ? 'opacity-100' : 'opacity-0'}
        `}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`
                transform transition-all duration-700 ease-out
                ${animateProjects 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
                }
              `}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              {/* Enhanced Portfolio Item Wrapper */}
              <div className="group relative">
                {/* Hover glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-teal-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative">
                  <PortfolioItem project={project} />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* No Results State with Premium Styling */}
        {filteredProjects.length === 0 && (
          <div className={`
            text-center py-20 transition-all duration-500
            ${animateProjects ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600/20 to-gray-500/20 blur-xl rounded-2xl" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No Projects Found</h3>
                <p className="text-gray-400 max-w-md mx-auto">
                  No projects match the selected filter. Try selecting a different category to explore more work.
                </p>
              </div>
            </div>
          </div>
        )}
        
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

export default Portfolio;