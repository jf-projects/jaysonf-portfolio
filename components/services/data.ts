import { Service } from "./type";

export const services: Service[] = [
    {
        id: "web-apps",
        title: "Web Applications",
        description:
            "Custom business systems, CRMs, ERP platforms, and client portals built with modern technologies.",

        technologies: [
            "Laravel",
            "Next.js",
            "React",
            "MySQL",
            "Tailwind",
        ],

        projects: [
            "Closed By Carla",
            "Uniform Customizer",
            "Real Estate CMS",
        ],
    },

    {
        id: "ai",
        title: "AI Integration",
        description:
            "AI assistants, document search, chatbots, and intelligent automation powered by OpenAI.",

        technologies: [
            "OpenAI",
            "Embeddings",
            "RAG",
            "Vector Search",
        ],

        projects: [
            "Portfolio Assistant",
            "Property Assistant",
        ],
    },

    {
        id: "api",
        title: "Backend APIs",
        description:
            "REST APIs, authentication, payments, and third-party integrations.",

        technologies: [
            "Node.js",
            "Laravel",
            "Supabase",
            "JWT",
        ],

        projects: [
            "Authentication API",
            "Property API",
        ],
    },

    {
        id: "automation",
        title: "Automation",
        description:
            "Automate repetitive business tasks with workflows, webhooks, scheduled jobs, and integrations.",

        technologies: [
            "n8n",
            "Cron",
            "Email",
            "Webhooks",
        ],

        projects: [
            "Lead Automation",
            "Email Automation",
        ],
    },

    {
        id: "dashboard",
        title: "Dashboards",
        description:
            "Interactive dashboards with analytics, KPIs, reporting, and real-time insights.",

        technologies: [
            "React",
            "Charts",
            "Prisma",
            "Postgres",
        ],

        projects: [
            "Sales Dashboard",
            "Analytics Portal",
        ],
    },

    {
        id: "cms",
        title: "Content Management",
        description:
            "Flexible CMS solutions using Strapi or custom admin panels tailored to your workflow.",

        technologies: [
            "Strapi",
            "Next.js",
            "REST",
            "Upload",
        ],

        projects: [
            "Property CMS",
            "Portfolio CMS",
        ],
    },
];