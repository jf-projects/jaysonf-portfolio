"use client";

import { useState } from "react";

import ProjectCard from "./ProjectCard";
import { projects } from "./project";

export default function Projects() {

    const [active, setActive] = useState(0);

    return (

        <section
            id="projects"
            className="bg-[#F8F5F0] py-32"
        >

            <div className="mx-auto max-w-375 px-8">

                <div className="mb-20 text-center">

                    <p
                        className="
                mb-5
                text-sm
                font-bold
                uppercase
                tracking-[0.45em]
                text-[#FF5A2F]
            "
                    >
                        FEATURED PROJECTS
                    </p>

                    <h2
                        className="
                text-6xl
                font-black
                text-[#121212]
                md:text-7xl
            "
                    >
                        Selected Work
                    </h2>

                </div>

                <div
                    className="
                        flex
                        gap-5
                    "
                >

                    {projects.map((project, index) => (

                        <ProjectCard

                            key={project.id}

                            project={project}

                            active={active === index}

                            onClick={() => setActive(index)}

                        />

                    ))}

                </div>

            </div>

        </section>

    );
}