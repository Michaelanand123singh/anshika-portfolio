import React from 'react';
import { Project } from '../../types/project';
import Card from './Card';

interface PortfolioItemProps {
  project: Project;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-xl">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <div className="mt-4 flex gap-2">
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  className="text-sm px-3 py-1 bg-primary rounded-full text-white"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              )}
              {project.codeLink && (
                <a 
                  href={project.codeLink} 
                  className="text-sm px-3 py-1 bg-dark-lighter rounded-full text-white"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PortfolioItem;