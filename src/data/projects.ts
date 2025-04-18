import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Personal Portfolio',
    description: 'A modern and responsive portfolio website showcasing my design work',
    src: '/projects/personal-portfolio.png',
    demoLink: '#',
    codeLink: '#',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 2,
    title: 'furniro',
    description: 'Modern UI design for an e-commerce platform',
    src: '/projects/furniro.png',
    demoLink: 'https://www.figma.com/proto/XoDfbZ8mYPynETe6ee0jQi/Ecommerce-interior-project?node-id=1-105&t=3mniZsj7v3nkoD46-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    codeLink: '#',
    technologies: ['Figma', 'Adobe XD', 'Illustrator'],
  },
  {
    id: 3,
    title: 'Job Listing',
    description: 'Clean and intuitive UI for a fitness tracking mobile application',
    src: '/projects/job-listing.png',
    demoLink: 'https://www.figma.com/proto/2Cg2Z2sEFBzYFm4xPuIjqD/JOB-LISTING-APP?node-id=1-2&p=f&t=At0l9senwwvtUaJ4-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    codeLink: '#',
    technologies: ['Figma', 'Sketch', 'Prototyping'],
  },
  {
    id: 4,
    title: 'Darling - Jewellery website',
    description: 'Educational platform for teaching web design fundamentals',
    src: '/projects/darling.png',
    demoLink: 'https://www.figma.com/proto/gY6QsWVCg4wHfwR79zQDUN/jewellery-website?node-id=1-189&p=f&t=aH4PqcaVosuXrknO-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    codeLink: '#',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Figma'],
  },
];