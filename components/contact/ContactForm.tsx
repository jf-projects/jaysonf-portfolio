"use client";

import { motion } from "framer-motion";
import {
    User,
    Mail,
    Building2,
    MapPin,
    Pencil,
    DollarSign,
    MessageSquare,
    Send,
} from "lucide-react";

import InputField from "./InputField";

export default function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[42px] bg-[#111111] p-8 shadow-[0_30px_80px_rgba(0,0,0,.25)] md:p-10"
        >
            <form className="space-y-5">

                {/* Name */}

                <InputField
                    icon={<User size={18} />}
                    placeholder="Full Name"
                />

                {/* Email + Company */}

                <div className="grid gap-5 md:grid-cols-2">

                    <InputField
                        icon={<Mail size={18} />}
                        type="email"
                        placeholder="Email Address"
                    />

                    <InputField
                        icon={<Building2 size={18} />}
                        placeholder="Company"
                    />

                </div>

                {/* Location */}

                <InputField
                    icon={<MapPin size={18} />}
                    placeholder="Location"
                />

                {/* Subject */}

                <InputField
                    icon={<Pencil size={18} />}
                    placeholder="Project Subject"
                />

                {/* Budget */}

                <div className="relative">

                    <DollarSign
                        size={18}
                        className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400"
                    />

                    <select
                        className="h-16 w-full appearance-none rounded-2xl border border-neutral-700 bg-[#1A1A1A] pl-14 pr-6 text-white outline-none transition-all duration-300 focus:border-[#FF5A2F]"
                    >
                        <option>$1,000 - $3,000</option>
                        <option>$3,000 - $5,000</option>
                        <option>$5,000 - $10,000</option>
                        <option>$10,000+</option>
                        <option>Let&apos;s Discuss</option>
                    </select>

                </div>

                {/* Message */}

                <div className="relative">

                    <MessageSquare
                        size={18}
                        className="absolute left-5 top-6 text-neutral-400"
                    />

                    <textarea
                        rows={6}
                        placeholder="Tell me about your project..."
                        className="
                        w-full
                        rounded-2xl
                        border
                        border-neutral-700
                        bg-[#1A1A1A]
                        py-5
                        pl-14
                        pr-6
                        text-white
                        placeholder:text-neutral-500
                        outline-none
                        transition-all
                        duration-300
                        focus:border-[#FF5A2F]
                        resize-none
                    "
                    />

                </div>

                {/* Submit */}

                <motion.button
                    whileHover={{
                        y: -3,
                        scale: 1.02,
                    }}
                    whileTap={{
                        scale: 0.98,
                    }}
                    type="submit"
                    className="
                    group
                    flex
                    h-16
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-2xl
                    bg-linear-to-r
                    from-[#FF7A3D]
                    to-[#FF5A2F]
                    text-lg
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:shadow-[0_15px_40px_rgba(255,90,47,.35)]
                "
                >
                    Start the Conversation

                    <Send
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                </motion.button>

            </form>
        </motion.div>
    );
}