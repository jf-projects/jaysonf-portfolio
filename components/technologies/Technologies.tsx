import Image from "next/image";

const technologies = [
    { name: "Laravel", logo: "/logos/laravel.svg", color: "#FF2D20" },
    { name: "Next.js", logo: "/logos/nextdotjs.svg", color: "#000000" },
    { name: "React", logo: "/logos/react.svg", color: "#61DAFB" },
    { name: "TypeScript", logo: "/logos/typescript.svg", color: "#3178C6" },
    { name: "JavaScript", logo: "/logos/javascript.svg", color: "#F7DF1E" },
    { name: "Node.js", logo: "/logos/nodedotjs.svg", color: "#339933" },
    { name: "PHP", logo: "/logos/php.svg", color: "#777BB4" },
    { name: "MySQL", logo: "/logos/mysql.svg", color: "#4479A1" },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", color: "#4169E1" },
    { name: "Cloudinary", logo: "/logos/cloudinary.svg", color: "#3448C5" },
    { name: "Jquery", logo: "/logos/jquery.svg", color: "#0769AD" },
    { name: "Supabase", logo: "/logos/supabase.svg", color: "#3ECF8E" },
    { name: "Bootstrap", logo: "/logos/bootstrap.svg", color: "#7952B3" },
    { name: "Jira", logo: "/logos/jira.svg", color: "#0052CC" },
    { name: "Git", logo: "/logos/git.svg", color: "#F05032" },
    { name: "GitHub", logo: "/logos/github.svg", color: "#181717" },
    { name: "Vercel", logo: "/logos/vercel.svg", color: "#000000" },
    { name: "Tailwind", logo: "/logos/tailwindcss.svg", color: "#06B6D4" },
    { name: "Prisma", logo: "/logos/prisma.svg", color: "#2D3748" },
    { name: "Postman", logo: "/logos/postman.svg", color: "#FF6C37" },
    { name: "Redis", logo: "/logos/redis.svg", color: "#FF6C37" },

];

export default function Technologies() {
    return (
        <section className="overflow-hidden bg-[#F8F5F0] py-20">

            <div className="mb-12 text-center">

                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#FF5A2F]">
                    TECHNOLOGIES
                </p>

                <h2 className="mt-3 text-5xl font-black text-[#121212]">
                    Built With Modern Tools
                </h2>

            </div>

            <div className="relative">

                {/* Left Fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-40 bg-linear-to-r from-[#F8F5F0] to-transparent" />

                {/* Right Fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-40 bg-linear-to-l from-[#F8F5F0] to-transparent" />

                <div className="marquee">

                    {[...technologies, ...technologies].map((tech, index) => (
                        <div
                            key={index}
                            className="group flex items-center gap-4 rounded-full bg-white px-8 py-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            <Image
                                src={tech.logo}
                                alt={tech.name}
                                width={50}
                                height={50}
                                className="
                                    opacity-60
                                    transition-all
                                    duration-300
                                    group-hover:opacity-100
                                    group-hover:scale-110
                                    group-hover:filter-[invert(48%)_sepia(93%)_saturate(2826%)_hue-rotate(346deg)_brightness(102%)_contrast(101%)]
                                "
                            />

                            <span
                                className={`
                                font-semibold
                                text-[#444]
                                transition-colors
                                duration-300
                                group-hover:text-[#FF5A2F]
                                `}
                            >
                                {tech.name}
                            </span>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}