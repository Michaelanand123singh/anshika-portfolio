export interface Project {
    id: number;
    title: string;
    description: string;
    src: string;
    demoLink?: string;
    codeLink?: string;
    technologies: string[];
  }