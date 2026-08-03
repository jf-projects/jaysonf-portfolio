export interface Project {
    id: string;
    name: string;
    description: string;
    role: string;
    technologies: string[];
    responsibilities: string[];
    challenges?: string[];
    url?: string;
    github?: string;
}

export interface Experience {
    company: string;
    position: string;
    period: string;
    location: string;
    responsibilities: string[];
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface Service {
    title: string;
    description: string;
    technologies: string[];
}

export interface Contact {
    email: string;
    phone: string;
    location: string;
    portfolio: string;
    github: string;
    linkedin: string;
}