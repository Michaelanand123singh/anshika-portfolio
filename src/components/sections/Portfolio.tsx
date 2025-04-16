import React, { useState } from 'react';
import { projects } from '../../data/projects';
import PortfolioItem from '../ui/PortfolioItem';

type FilterCategory = 'all' | 'ui-design' | 'web-design' | 'app-design';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  
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
  
  const filters: { id: FilterCategory; label: string }[] = [
    { id: 'all', label: 'All Work' },
    { id: 'ui-design', label: 'UI Design' },
    { id: 'web-design', label: 'Web Design' },
    { id: 'app-design', label: 'App Design' },
  ];
  
  return (
    <section id="portfolio" className="py-20 bg-dark">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Check out some of my recent projects that showcase my design skills and approach.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                activeFilter === filter.id
                  ? 'bg-primary text-white'
                  : 'bg-dark-lighter text-gray-300 hover:bg-gray-800'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <PortfolioItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;