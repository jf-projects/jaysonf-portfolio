"use client";

import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section
            id="contact"
            className="bg-[#F7F5F2] py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mb-20 text-center"
                >
                    <span className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-medium text-[#FF5A2F]">
                        Let&apos;s Connect
                    </span>

                    <h2 className="mt-6 text-5xl font-black text-[#111111] md:text-6xl">
                        Ready to build
                        <br />
                        something amazing?
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500">
                        Whether you need a website, AI integration,
                        or a full-stack application,
                        I&apos;d love to hear about your project.
                    </p>
                </motion.div>

                {/* Main Grid */}

                <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">

                    <ContactInfo />

                    <ContactForm />

                </div>

            </div>
        </section>
    );
}