import { Project } from "../types";


const projects: Project[] = [
    {
        id: "prolook-customizer",
        name: "Prolook Customizer",
        role: "Backend Software Engineer",
        description:
            "A sports apparel customization platform that allows users to design uniforms with live previews and manage custom product orders.",

        technologies: [
            "Laravel",
            "PHP",
            "JavaScript",
            "jQuery",
            "MySQL",
            "HTML",
            "CSS",
            "Fabric.js",
        ],

        responsibilities: [
            "Designed, developed, and maintained RESTful APIs consumed by the frontend application.",
            "Integrated third-party APIs and external services to extend platform functionality.",
            "Developed backend modules for product management, order processing, and business workflows.",
            "Designed and optimized MySQL database schemas, queries, and application performance.",
            "Implemented business logic, validation, and secure data processing within the Laravel application.",
            "Collaborated with frontend developers to define API contracts and support new features.",
            "Maintained and enhanced existing backend services while troubleshooting production issues.",
        ],
    },
    {
        id: "alli-sports-customizer",
        name: "Alli Sports Customizer",
        role: "Backend Software Engineer",

        description:
            "A custom apparel ordering platform with interactive product customization, built on a reusable backend architecture that supports multiple apparel brands.",

        technologies: [
            "Laravel",
            "PHP",
            "JavaScript",
            "MySQL",
            "jQuery",
        ],

        responsibilities: [
            "Designed, developed, and maintained RESTful APIs for frontend applications.",
            "Integrated third-party APIs and external services.",
            "Built reusable backend modules and shared business logic to support multiple apparel brands.",
            "Developed a configurable architecture that significantly reduced development time when launching new brand websites.",
            "Implemented business logic for product customization, ordering, and product management.",
            "Optimized database queries and application performance.",
            "Maintained production systems, resolved bugs, and implemented new features.",
        ],
    },
    {
        id: "alli-sports-customizer",
        name: "Alli Sports Customizer",
        role: "Backend Software Engineer",

        description:
            "A custom apparel ordering platform with interactive product customization capabilities.",

        technologies: [
            "Laravel",
            "PHP",
            "JavaScript",
            "MySQL",
            "jQuery",
        ],

        responsibilities: [
            "Designed, developed, and maintained RESTful APIs for frontend applications.",
            "Integrated third-party APIs and external services.",
            "Built reusable backend modules and shared business logic to support multiple apparel brands.",
            "Developed a configurable architecture that significantly reduced development time when launching new brand websites.",
            "Implemented business logic for product customization, ordering, and product management.",
            "Optimized database queries and application performance.",
            "Maintained production systems, resolved bugs, and implemented new features.",
        ],
    },
    {
        id: "personal-portfolio",
        name: "Personal Portfolio",
        role: "Full Stack Developer",
        description:
            "An AI-powered developer portfolio showcasing projects, skills, experience and services.",

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Gemini AI",
            "API Routes",
        ],

        responsibilities: [
            "Designed the user interface and experience.",
            "Built reusable React components.",
            "Integrated Gemini AI assistant.",
            "Created AI tools for portfolio search.",
            "Implemented server-side API routes.",
        ],
    },
    {
        id: "real-estate-website",
        name: "Real Estate Management System",
        role: "Full Stack Software Engineer",

        description:
            "A real estate management system for property agents that streamlines property listings, customer management, payment tracking, reporting, and day-to-day operations through a modern web application.",

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "DaisyUI",
            "Supabase",
            "PostgreSQL",
            "Redis",
        ],

        responsibilities: [
            "Designed and developed responsive user interfaces using Next.js and React.",
            "Built reusable UI components to ensure consistency and maintainability across the application.",
            "Developed modules for customer management, property management, payment tracking, and reporting.",
            "Integrated Supabase for authentication, database operations, and real-time data management.",
            "Designed and implemented PostgreSQL database structures for properties, customers, transactions, and reports.",
            "Optimized application performance through caching strategies using Redis.",
            "Collaborated on system architecture and implemented new features based on business requirements.",
            "Maintained and enhanced the application by resolving bugs, improving usability, and optimizing performance.",
        ],
    },
    {
        id: "closed-by-carla",
        name: "Closed By Carla",
        role: "Full Stack Developer",

        description:
            "A luxury real estate platform built with Next.js that showcases property listings, integrates AI-powered assistance, and automatically gathers property data through web scraping to provide an enhanced user experience.",

        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "OpenAI",
            "Node.js",
            "Playwright",
        ],

        responsibilities: [
            "Designed and developed a responsive frontend using Next.js, React, and Tailwind CSS.",
            "Built reusable UI components to maintain a consistent and scalable design system.",
            "Implemented premium landing pages, property listings, and modern navigation.",
            "Integrated an AI assistant to answer questions about properties and services.",
            "Developed web scraping solutions using Playwright to collect property information from external real estate websites.",
            "Processed and transformed scraped data for use within the application.",
            "Maintained and enhanced application performance, responsiveness, and user experience.",
        ],
    }
];


export default projects;