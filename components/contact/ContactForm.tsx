"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    User,
    Mail,
    Pencil,
    MessageSquare,
    Send,
    Phone,
} from "lucide-react";

import InputField from "./InputField";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        phone: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState<{
        type: "success" | "error" | "";
        message: string;
    }>({
        type: "",
        message: "",
    });

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {
        e.preventDefault();

        setLoading(true);
        setStatus({
            type: "",
            message: "",
        });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            setStatus({
                type: "success",
                message: data.message,
            });

            setForm({
                name: "",
                email: "",
                subject: "",
                message: "",
                phone: "",

            });
        } catch (error) {
            setStatus({
                type: "error",
                message:
                    error instanceof Error
                        ? error.message
                        : "Something went wrong.",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[42px] bg-[#111111] p-8 shadow-[0_30px_80px_rgba(0,0,0,.25)] md:p-10"
        >
            <div className="mb-8">
                <h3 className="text-3xl font-bold text-white">
                    Let&apos;s Work Together
                </h3>

                <p className="mt-3 text-neutral-400">
                    Have a project in mind or looking for a Full Stack
                    Developer? Send Jayson a message and he&apos;ll get back
                    to you as soon as possible.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >
                <InputField
                    icon={<User size={18} />}
                    name="name"
                    placeholder="Full Name"
                    required
                    value={form.name}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            name: e.target.value,
                        })
                    }
                />

                <InputField
                    icon={<Mail size={18} />}
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    value={form.email}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            email: e.target.value,
                        })
                    }
                />

                <InputField
                    icon={<Phone size={18} />}
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            phone: e.target.value,
                        })
                    }
                />

                <InputField
                    icon={<Pencil size={18} />}
                    name="subject"
                    placeholder="Project Subject"
                    required
                    value={form.subject}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            subject: e.target.value,
                        })
                    }
                />

                <div className="relative">
                    <MessageSquare
                        size={18}
                        className="absolute left-5 top-6 text-neutral-400"
                    />

                    <textarea
                        rows={6}
                        required
                        name="message"
                        value={form.message}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                message: e.target.value,
                            })
                        }
                        placeholder="Tell me about your project..."
                        className="
                            w-full
                            resize-none
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
                        "
                    />
                </div>

                {status.message && (
                    <div
                        className={`rounded-xl p-4 text-sm ${status.type === "success"
                            ? "bg-green-500/10 text-green-400"
                            : "bg-red-500/10 text-red-400"
                            }`}
                    >
                        {status.message}
                    </div>
                )}

                <motion.button
                    whileHover={{
                        y: -3,
                        scale: 1.02,
                    }}
                    whileTap={{
                        scale: 0.98,
                    }}
                    disabled={loading}
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
                        disabled:cursor-not-allowed
                        disabled:opacity-60
                    "
                >
                    {loading
                        ? "Sending..."
                        : "Start the Conversation"}

                    <Send
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                </motion.button>
            </form>
        </motion.div>
    );
}