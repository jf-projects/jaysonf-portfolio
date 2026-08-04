"use client";

import { useState } from "react";
import Link from "next/link";
import { Anton } from "next/font/google";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const anton = Anton({
    subsets: ["latin"],
    weight: "400",
});

const navigation = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    // { label: "Assistant", href: "#assistant" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#F8F5F0]/80 backdrop-blur-md">

            <div className="mx-auto flex h-22.5 max-w-360 items-center justify-between px-8">

                {/* Logo */}
                <Link
                    href="/"
                    className={`${anton.className} text-3xl tracking-tight text-[#121212]`}
                >
                    J<span className="text-[#FF5A2F]">F</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-10 lg:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="text-[16px] font-medium text-[#121212] transition-colors hover:text-[#FF5A2F]"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/file/Jayson-Figueroa-CV.pdf"
                        target="_blank"
                        download
                    >
                        <Button
                            className="
                            hidden
                            rounded-full
                            bg-[#FFC247]
                            px-8
                            py-6
                            text-black
                            shadow-lg
                            transition-all
                            hover:-translate-y-0.5
                            hover:bg-[#FFB000]
                            lg:flex
                        "
                        >

                            Download Resume
                        </Button>
                    </Link>


                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="lg:hidden"
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
                    lg:hidden
                    overflow-hidden
                    transition-all
                    duration-300
                    ${mobileOpen
                        ? "max-h-125 border-t border-black/5"
                        : "max-h-0"
                    }
                `}
            >
                <nav className="bg-[#F8F5F0] px-6 py-6 shadow-xl">

                    <div className="flex flex-col gap-2">

                        {navigation.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="
                                    rounded-xl
                                    px-4
                                    py-3
                                    text-base
                                    font-medium
                                    text-[#121212]
                                    transition-all
                                    hover:bg-[#FF5A2F]/10
                                    hover:text-[#FF5A2F]
                                "
                            >
                                {item.label}
                            </Link>
                        ))}

                    </div>
                    <Link
                        href="/file/Jayson-Figueroa-CV.pdf"
                        target="_blank"
                        download
                    >
                        <Button
                            className="
                            mt-6
                            w-full
                            rounded-full
                            bg-[#FFC247]
                            py-6
                            text-black
                            shadow-lg
                            transition-all
                            hover:bg-[#FFB000]
                        "
                        >

                            Download Resume
                        </Button>
                    </Link>

                </nav>
            </div>

        </header>
    );
}