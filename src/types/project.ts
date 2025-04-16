export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    demoLink?: string;
    codeLink?: string;
    technologies: string[];
  }