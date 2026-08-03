import { Type, FunctionDeclaration } from "@google/genai";

export const portfolioTools: {
    functionDeclarations: FunctionDeclaration[];
}[] = [
    {
        functionDeclarations: [
            {
                name: "searchAbout",
                description:
                    "Retrieve Jayson Figueroa's personal profile information including his professional summary, background, career overview, location, interests, and introduction. ALWAYS use this tool when users ask who Jayson is, his background, biography, profile, introduction, or general information about him. Do not answer these questions from assumptions.",
                parameters: {
                    type: Type.OBJECT,
                    properties: {
                        query: {
                            type: Type.STRING,
                            description:
                                "Optional keyword related to the information the user wants to know. Leave empty when requesting general information about Jayson.",
                        },
                    },
                },
            },
            {
                name: "searchProjects",
                description:
                    "Retrieve information about Jayson Figueroa's portfolio projects, including project names, descriptions, technologies used, his role, and development responsibilities. ALWAYS use this tool when users ask about projects, applications, websites, systems, previous work, portfolio examples, or technologies used in a specific project. Use a keyword when searching for a specific project or technology.",
                parameters: {
                    type: Type.OBJECT,
                    properties: {
                        query: {
                            type: Type.STRING,
                            description:
                                "Optional keyword such as project name, technology, framework, programming language, or feature. Leave empty when the user wants to see all projects.",
                        },
                    },
                },
            },
            {
                name: "searchExperience",
                description:
                    "Retrieve Jayson Figueroa's professional work experience including companies, positions, employment periods, locations, technologies used, responsibilities, and career history. ALWAYS use this tool when users ask about work experience, previous jobs, companies worked for, professional background, career history, roles, responsibilities, or employment experience. Never say work experience is unavailable without checking this tool.",
                parameters: {
                    type: Type.OBJECT,
                    properties: {
                        query: {
                            type: Type.STRING,
                            description:
                                "Optional keyword such as company name, job title, technology, responsibility, or role. Leave empty for general work experience questions.",
                        },
                    },
                },
            },
            {
                name: "searchSkills",
                description:
                    "Retrieve Jayson Figueroa's technical skills including programming languages, frontend frameworks, backend technologies, databases, cloud platforms, AI tools, and developer tools. ALWAYS use this tool when users ask about technologies, tech stack, programming skills, frameworks, languages, databases, or tools Jayson knows. Do not guess technologies that are not returned by this tool.",
                parameters: {
                    type: Type.OBJECT,
                    properties: {
                        query: {
                            type: Type.STRING,
                            description:
                                "Optional technology keyword such as Laravel, React, Next.js, PHP, TypeScript, database, or cloud platform. Leave empty when requesting all skills.",
                        },
                    },
                },
            },
            {
                name: "searchServices",
                description:
                    "Retrieve software development services offered by Jayson Figueroa including web development, backend development, API development, frontend development, database solutions, AI integration, and software consulting. ALWAYS use this tool when users ask what services Jayson provides, what he can build, or how he can help with a software project.",
                parameters: {
                    type: Type.OBJECT,
                    properties: {
                        query: {
                            type: Type.STRING,
                            description:
                                "Optional service keyword such as web development, API, backend, frontend, AI integration, or consulting. Leave empty for all services.",
                        },
                    },
                },
            },
            {
                name: "searchContact",
                description:
                    "Retrieve Jayson Figueroa's contact information including email address, phone number, LinkedIn profile, GitHub profile, portfolio website, and location. ALWAYS use this tool when users ask how to contact Jayson, request contact details, ask for phone number, email, social links, or ways to reach him. Never invent or provide placeholder contact information.",
                parameters: {
                    type: Type.OBJECT,
                    properties: {},
                },
            },
        ],
    },
];