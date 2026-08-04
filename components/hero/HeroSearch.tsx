"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Anton } from "next/font/google";

import SearchInput from "./SearchInput";
import SearchSuggestions from "./SearchSuggestions";
import SearchBackground from "./SearchBackground";
import SearchResult from "./SearchResult";

const anton = Anton({
    subsets: ["latin"],
    weight: "400",
});

export default function HeroSearch() {
    const [query, setQuery] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState("");

    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSearch(value?: string) {
        const question = value ?? query;

        if (!question.trim()) return;

        setQuery(question);
        setCurrentQuestion(question);
        setShowResult(true);
        setLoading(true);

        try {
            const response = await fetch("/api/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    question,
                }),
            });

            const data = await response.json();

            setAnswer(data.answer);
            setQuery("");
        } catch (error) {
            console.error(error);

            setAnswer(
                "Sorry, something went wrong while contacting my AI assistant."
            );
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F5F2] px-6">

            <div className="absolute inset-0 bg-[#F7F5F2]/70 backdrop-blur-[2px]" />

            <SearchBackground />

            <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">

                {!showResult && (
                    <div className="relative flex items-center justify-center">

                        {/* Breathing glow */}
                        <motion.div
                            className="
                                absolute
                                h-32
                                w-32
                                rounded-full
                                bg-[#FF5A2F]
                                blur-2xl
                            "
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.35, 0.45, 0.15],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />

                        {/* Logo */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                                scale: [1, 1.01, 1],
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
                                width={90}
                                height={90}
                                priority
                                className="relative z-10 mx-auto"
                            />
                        </motion.div>

                    </div>
                )}

                <h1
                    className={`${anton.className} text-6xl uppercase leading-[0.9] tracking-tight transition-all duration-500 md:text-8xl lg:text-7xl`}
                >
                    <span className="text-[#111111]">JAYSON</span>{" "}
                    <span className="text-[#FF5A2F]">FIGUEROA</span>
                </h1>

                {!showResult && (
                    <p
                        className="
                            mt-6
                            max-w-2xl
                            text-xl
                            text-[#6B6B6B]
                            transition-all
                            duration-500
                        "
                    >
                        Full Stack Software Engineer building scalable web
                        applications, AI-powered experiences, and modern
                        digital products.
                    </p>
                )}

                <div
                    className={`
                        w-full
                        transition-all
                        duration-500
                        ${showResult ? "mt-8" : "mt-12"}
                    `}
                >
                    <SearchInput
                        query={query}
                        setQuery={setQuery}
                        onSearch={handleSearch}
                    />
                </div>

                {!showResult && (
                    <SearchSuggestions
                        onSelect={handleSearch}
                    />
                )}

                <SearchResult
                    open={showResult}
                    query={currentQuestion}
                    answer={answer}
                    loading={loading}
                    onClose={() => {
                        setShowResult(false);
                        setAnswer("");
                    }}
                />

            </div>

        </section>
    );
}