"use client";

import Image from "next/image";
import {
    Mail,
    ArrowUp,
} from "lucide-react";
import { motion } from 'framer-motion';

import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-[#111111] text-white">

            <div className="mx-auto max-w-4xl px-6 py-16 text-center">

                {/* Owl */}
                <div className="relative mx-auto flex h-32 w-32 items-center justify-center">

                    {/* Breathing glow */}
                    <motion.div
                        className="
                            absolute
                            h-28
                            w-28
                            rounded-full
                            bg-[#FF5A2F]
                            blur-2xl
                        "
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.2, 0.45, 0.2],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    {/* Logo */}
                    <motion.div
                        className="relative z-10"
                        animate={{
                            y: [0, -4, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Image
                            src="/images/fxhead.png"
                            alt="Jayson Figueroa"
                            width={70}
                            height={70}
                            priority
                        />
                    </motion.div>

                </div>



                {/* Heading */}

                <h2 className="mt-5 text-3xl font-bold">
                    Looks like you&apos;ve reached the end.
                </h2>

                <p className="mt-2 text-neutral-400">
                    Still curious? Ask my AI assistant anything.
                </p>

                {/* CTA */}

                <button
                    onClick={scrollToTop}
                    className="
                        mt-6
                        inline-flex
                        items-center
                        gap-2
                        rounded-full
                        bg-[#FF5A2F]
                        px-6
                        py-3
                        font-semibold
                        transition-all
                        duration-300
                        hover:scale-105
                    "
                >
                    Ask a Question
                    <ArrowUp className="h-4 w-4" />
                </button>

                {/* Divider */}

                <div className="my-10 h-px bg-white/10" />

                {/* Links */}

                <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400">

                    <a href="#home" className="transition hover:text-[#FF5A2F]">
                        Home
                    </a>

                    <a href="#about" className="transition hover:text-[#FF5A2F]">
                        About
                    </a>

                    <a href="#projects" className="transition hover:text-[#FF5A2F]">
                        Projects
                    </a>

                    <a href="#experience" className="transition hover:text-[#FF5A2F]">
                        Experience
                    </a>

                    <a href="#contact" className="transition hover:text-[#FF5A2F]">
                        Contact
                    </a>

                </div>

                {/* Socials */}

                <div className="mt-8 flex justify-center gap-6">

                    <a href="https://github.com/jf-projects">
                        <FaGithub className="h-5 w-5 text-neutral-500 transition hover:text-[#FF5A2F]" />
                    </a>

                    <a href="https://www.linkedin.com/in/jayson-figueroa-165753294/">
                        <FaLinkedin className="h-5 w-5 text-neutral-500 transition hover:text-[#FF5A2F]" />
                    </a>

                    <a href="#contact">
                        <Mail className="h-5 w-5 text-neutral-500 transition hover:text-[#FF5A2F]" />
                    </a>

                </div>

                {/* Bottom */}

                <p className="mt-10 text-xs text-neutral-600">
                    © {new Date().getFullYear()} Jayson Figueroa • Built with Next.js & Tailwind CSS
                </p>

            </div>

        </footer>
    );
}