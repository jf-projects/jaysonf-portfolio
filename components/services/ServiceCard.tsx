"use client";

import { Service } from "./type";

interface Props {
    service: Service;
}

export default function ServiceCard({
    service,
}: Props) {
    return (
        <section
            id={service.id}
            className="
                scroll-mt-32
                rounded-[42px]
                bg-[#FFF7EA]
                p-10
                shadow-sm
            "
        >
            {/* Title */}

            <h3
                className="
                    text-3xl md:text-4xl
                    font-black
                    text-[#121212]
                "
            >
                {service.title}
            </h3>

            {/* Description */}

            <p
                className="
                    mt-6
                    max-w-4xl
                    ttext-base leading-8
                    text-neutral-700
                "
            >
                {service.description}
            </p>

            {/* Technologies */}

            <div
                className="
                    mt-8
                    flex
                    flex-wrap
                    gap-3
                "
            >
                {service.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="
                            rounded-full
                            border
                            border-neutral-300
                            bg-white
                            px-4 py-1.5 text-xs
                            font-medium
                            transition
                            hover:border-[#FF5A2F]
                            hover:bg-[#FF5A2F]
                            hover:text-white
                        "
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Featured Projects */}

            <div className="mt-10">

                <p
                    className="
                        mb-5
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.3em]
                        text-[#FF5A2F]
                    "
                >
                    Featured Projects
                </p>

                <div className="flex flex-wrap gap-4">

                    {service.projects.map((project) => (
                        <button
                            key={project}
                            className="
                                rounded-full
                                bg-[#121212]
                                px-5 py-2 text-xs
                                font-medium
                                text-white
                                transition
                                hover:bg-[#FF5A2F]
                            "
                        >
                            {project}
                        </button>
                    ))}

                </div>

            </div>
        </section>
    );
}