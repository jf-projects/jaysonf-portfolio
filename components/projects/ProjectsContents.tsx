/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
    project: any;
};

export default function ProjectContent({
    project,
}: Props) {

    return (
        <div
            className="
                flex-1
                rounded-[42px]
                bg-[#111]
                p-16
                text-white
            "
        >

            <AnimatePresence mode="wait">

                <motion.div
                    key={project.id}
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: -20,
                    }}
                    transition={{
                        duration: .45,
                    }}
                >

                    <h2 className="text-7xl font-black">
                        {project.title}
                    </h2>

                    <p className="mt-10 max-w-3xl text-2xl leading-10 text-neutral-300">
                        {project.description}
                    </p>

                    <div className="mt-12 flex flex-wrap gap-3">

                        {project.tech.map((tech: string) => (

                            <span
                                key={tech}
                                className="
                                    rounded-full
                                    bg-white/10
                                    px-5
                                    py-2
                                "
                            >
                                {tech}
                            </span>

                        ))}

                    </div>

                </motion.div>

            </AnimatePresence>

        </div>
    );
}