"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
    "Full Stack Development",
    "AI Integration",
    "REST API Development",
    "Database Architecture",
    "Laravel & Next.js",
    "Cloud Deployment",
];

const stats = [
    {
        value: "5+",
        label: "Years Experience",
    },
    {
        value: "20+",
        label: "Projects Built",
    },
    {
        value: "10+",
        label: "Technologies",
    },
    {
        value: "Remote",
        label: "Ready",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="bg-[#F8F5F0] py-32"
        >
            <div className="mx-auto max-w-7xl px-8">

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* LEFT */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                    >

                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#FF5A2F]">
                            ABOUT
                        </p>

                        <h2 className="text-6xl font-black leading-tight text-[#121212]">
                            5+ Years of Building Software That Solves Real Problems.
                        </h2>

                        <p className="mt-8 text-xl leading-9 text-[#666]">
                            I&apos;m a Full Stack Software Engineer specializing in
                            Laravel, Next.js, AI integrations, and scalable
                            business applications. I enjoy turning complex
                            requirements into clean, maintainable products.
                        </p>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2">

                            {highlights.map((item, index) => (

                                <motion.div
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.08,
                                        duration: 0.4,
                                    }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="rounded-full bg-[#FF5A2F]/10 p-2">
                                        <Check
                                            size={16}
                                            className="text-[#FF5A2F]"
                                        />
                                    </div>

                                    <span className="font-medium text-[#222]">
                                        {item}
                                    </span>

                                </motion.div>

                            ))}

                        </div>

                    </motion.div>

                    {/* RIGHT */}

                    <motion.div
                        className="grid grid-cols-2 gap-6"
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                    >

                        {stats.map((stat) => (

                            <motion.div
                                key={stat.label}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 40,
                                    },
                                    show: {
                                        opacity: 1,
                                        y: 0,
                                    },
                                }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                }}
                                transition={{
                                    duration: 0.4,
                                }}
                                className="
                                    rounded-[32px]
                                    border
                                    border-[#E7E3DD]
                                    bg-white
                                    p-10
                                    shadow-sm
                                "
                            >
                                <h3 className="text-6xl font-black text-[#FF5A2F]">
                                    {stat.value}
                                </h3>

                                <p className="mt-4 text-lg font-medium text-[#444]">
                                    {stat.label}
                                </p>

                            </motion.div>

                        ))}

                    </motion.div>

                </div>

            </div>
        </section>
    );
}