"use client";

import Image from "next/image";
import {
    Mail,
    ArrowUp,
} from "lucide-react";

import { FaGithub,FaLinkedin } from "react-icons/fa6";

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

                <Image
                    src="/images/fox3.png"
                    alt="JF Owl"
                    width={70}
                    height={70}
                    className="mx-auto"
                />

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

                    <a href="#">
                        <FaGithub className="h-5 w-5 text-neutral-500 transition hover:text-[#FF5A2F]" />
                    </a>

                    <a href="#">
                        <FaLinkedin className="h-5 w-5 text-neutral-500 transition hover:text-[#FF5A2F]" />
                    </a>

                    <a href="#">
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