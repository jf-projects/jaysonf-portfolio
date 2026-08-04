"use client";

import Image from "next/image";
import {
    Mail,
    MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { motion } from "framer-motion";

export default function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="relative overflow-hidden rounded-[42px] bg-white p-10 shadow-[0_25px_60px_rgba(0,0,0,.08)]"
        >

            {/* Decorative Background */}

            <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-orange-100 blur-3xl opacity-50" />

            {/* Content */}

            <div className="relative z-10">

                <h3 className="text-6xl font-black leading-none text-[#111111]">

                    Let&apos;s build

                    <span className="block text-[#FF5A2F]">
                        something
                    </span>

                    amazing.

                </h3>

                <p className="mt-8 max-w-md text-lg leading-8 text-neutral-600">
                    I&apos;m currently open to remote work,
                    freelance opportunities,
                    startup collaborations,
                    and exciting software projects.

                    Let&apos;s create something people love using.
                </p>

                {/* Contact Items */}

                <div className="mt-12 space-y-6">

                    <InfoItem
                        icon={<Mail size={22} />}
                        title="Email"
                        value="jfigprojects@gmail.com"
                    />

                    <InfoItem
                        icon={<FaGithub size={22} />}
                        title="GitHub"
                        value="github.com/jf-projects"
                    />

                    <InfoItem
                        icon={<FaLinkedin size={22} />}
                        title="LinkedIn"
                        value="https://www.linkedin.com/in/jf-projects/"
                    />

                    <InfoItem
                        icon={<MapPin size={22} />}
                        title="Location"
                        value="Philippines • Open to Remote"
                    />

                </div>

            </div>

            {/* Character */}

            <div className="pointer-events-none absolute bottom-2 right-0">

                <Image
                    src="/images/fox3.png"
                    alt="Fox"
                    width={500}
                    height={500}
                    className="select-none"
                />

            </div>

        </motion.div>
    );
}

interface ItemProps {
    icon: React.ReactNode;
    title: string;
    value: string;
}

function InfoItem({
    icon,
    title,
    value,
}: ItemProps) {
    return (
        <div className="flex items-center gap-5">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-[#FF5A2F]">

                {icon}

            </div>

            <div>

                <h4 className="font-semibold text-[#111111]">
                    {title}
                </h4>

                <p className="text-neutral-500">
                    {value}
                </p>

            </div>

        </div>
    );
}