"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    project: any;
    active: boolean;
    onClick: () => void;
};

export default function ProjectCard({
    project,
    active,
    onClick,
}: Props) {
    return (
        <motion.div
            layout
            onClick={onClick}
            transition={{
                layout: {
                    type: "spring",
                    stiffness: 45,
                    damping: 22,
                    mass: 1.8,
                },
            }}
            className={`
                cursor-pointer
                overflow-hidden
                rounded-[42px]
                transition-colors
                ${active
                    ? "flex-8 bg-[#111111]"
                    : "flex-1 bg-[#FF5A2F]"
                }
            `}
        >
            <motion.div
                layout
                className="h-155"
            >
                {/* COLLAPSED */}

                {!active && (
                    <motion.div
                        initial={false}
                        whileHover={{
                            scale: 1.03,
                        }}
                        transition={{
                            duration: 0.35,
                        }}
                        className="
                            flex
                            h-full
                            items-start
                            justify-center
                            pt-14
                        "
                    >
                        <span
                            className="
                                select-none
                                text-5xl
                                font-black
                                text-black
                            "
                        >
                            {project.short}
                        </span>
                    </motion.div>
                )}

                {/* EXPANDED */}

                <AnimatePresence mode="wait">
                    {active && (
                        <motion.div
                            key={project.id}
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: -10,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.25,
                                ease: "easeOut",
                            }}
                            className="
                                flex
                                h-full
                                flex-col
                                justify-between
                                p-14
                                text-white
                            "
                        >
                            {/* TITLE */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 15,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.4,
                                }}
                            >
                                <h2 className="text-center text-4xl font-black lg:text-5xl">
                                    {project.title}
                                </h2>
                            </motion.div>

                            {/* CONTENT */}

                            <div className="flex items-center gap-12">

                                {/* LEFT */}

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: -25,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    transition={{
                                        duration: 0.7,
                                        delay: 0.55,
                                    }}
                                    className="flex-1"
                                >
                                    <p
                                        className="
                                            text-lg
                                            leading-8
                                            text-neutral-300
                                        "
                                    >
                                        {project.description}
                                    </p>

                                    <div className="mt-8 flex flex-wrap gap-3">

                                        {project.tech.map(
                                            (
                                                tech: string,
                                                index: number
                                            ) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{
                                                        opacity: 0,
                                                        y: 10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    transition={{
                                                        delay:
                                                            0.75 +
                                                            index * 0.08,
                                                        duration: 0.35,
                                                    }}
                                                    className="
                                                        rounded-full
                                                        bg-white/10
                                                        px-4
                                                        py-1.5
                                                        text-xs
                                                        font-medium
                                                    "
                                                >
                                                    {tech}
                                                </motion.span>
                                            )
                                        )}
                                    </div>

                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            y: 10,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            delay: 1,
                                            duration: 0.4,
                                        }}
                                        className="mt-10 flex gap-4"
                                    >
                                        <button
                                            className="
                                                rounded-full
                                                bg-[#FF5A2F]
                                                px-6
                                                py-3
                                                text-sm
                                                font-semibold
                                                transition
                                                hover:scale-105
                                            "
                                        >
                                            View Project
                                        </button>

                                        <button
                                            className="
                                                rounded-full
                                                border
                                                border-white/20
                                                px-6
                                                py-3
                                                text-sm
                                                transition
                                                hover:bg-white/10
                                            "
                                        >
                                            GitHub
                                        </button>
                                    </motion.div>
                                </motion.div>

                                {/* IMAGE */}

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        x: 60,
                                        scale: 0.97,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                        scale: 1,
                                    }}
                                    transition={{
                                        duration: 0.9,
                                        delay: 0.5,
                                        ease: "easeOut",
                                    }}
                                    className="
                                        relative
                                        hidden
                                        h-85
                                        w-130
                                        overflow-hidden
                                        rounded-3xl
                                        border
                                        border-white/10
                                        shadow-2xl
                                        lg:block
                                    "
                                >

                                    <Image
                                        src={project.image}
                                        alt="Developer"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </motion.div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}