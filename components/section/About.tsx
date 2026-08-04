"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Anton } from "next/font/google";

const anton = Anton({
    subsets: ["latin"],
    weight: "400",
});

const lines = [
    "$ whoami",
    "Jayson Figueroa",
    "",
    "$ role",
    "Full Stack Software Engineer",
    "",
    "$ stack",
    "Laravel  •  Next.js  •  React  •  Node.js  •  AI Integration",
    "TypeScript  •  MySQL  •  PostgreSQL  •  Supabase  •  Redis",
    "",
    "$ years_experience",
    "7 Years in Software Development",
    "",
    "$ current_focus",
    "Building scalable business applications",
    "Developing AI-powered experiences",
    "",
    "$ available",
    "✔ Open for Remote",
    "✔ Open for Freelance",
    "",
    "$ _",
];

export default function About() {
    const [displayed, setDisplayed] = useState<string[]>([]);
    const [lineIndex, setLineIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    const terminalRef = useRef<HTMLDivElement>(null);

    const isInView = useInView(terminalRef, {
        once: true,
        amount: 0.5,
    });

    useEffect(() => {
        if (!isInView) return;

        if (lineIndex >= lines.length) return;

        const current = lines[lineIndex];

        const timer = setTimeout(() => {
            if (charIndex < current.length) {
                const next = [...displayed];

                next[lineIndex] =
                    current.substring(0, charIndex + 1);

                setDisplayed(next);
                setCharIndex(charIndex + 1);
            } else {
                setDisplayed((prev) => [...prev, ""]);
                setLineIndex(lineIndex + 1);
                setCharIndex(0);
            }
        }, current.startsWith("$") ? 25 : 12);

        return () => clearTimeout(timer);
    }, [isInView, charIndex, lineIndex, displayed]);

    return (
        <section
            id="about"
            className="bg-[#F8F5F0] py-32"
        >
            <div className="mx-auto max-w-6xl px-8">

                <div className="mb-12 text-center">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#FF5A2F]">
                        ABOUT
                    </p>

                    <h2
                        className={`${anton.className} mb-10 text-5xl md:text-6xl text-[#121212]`}
                    >
                        Meet the Engineer
                    </h2>
                </div>

                <div
                    ref={terminalRef}
                    className="overflow-hidden rounded-3xl border border-neutral-800 bg-[#111111] shadow-2xl"
                >
                    {/* Header */}

                    <div className="flex items-center justify-between border-b border-neutral-800 bg-[#1B1B1B] px-5 py-3">

                        <div className="flex gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                        </div>

                        <span className="font-mono text-xs text-neutral-500">
                            jayson@portfolio
                        </span>

                        <div className="w-8" />

                    </div>

                    {/* Terminal */}

                    <div className="min-h-105 px-8 py-8 font-mono text-sm leading-7">

                        {displayed.map((line, index) => (

                            <div
                                key={index}
                                className={
                                    line.startsWith("$")
                                        ? "text-[#FF5A2F]"
                                        : "text-neutral-300"
                                }
                            >
                                {line}
                            </div>

                        ))}

                        {/* Blinking cursor while typing */}

                        {isInView && lineIndex < lines.length && (
                            <span className="animate-pulse text-[#FF5A2F]">
                                █
                            </span>
                        )}

                    </div>

                </div>

            </div>
        </section>
    );
}