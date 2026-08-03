"use client";

import { ReactNode } from "react";

interface InputFieldProps {
    icon: ReactNode;
    placeholder: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({
    icon,
    placeholder,
    type = "text",
    value,
    onChange,
}: InputFieldProps) {
    return (
        <div className="relative">

            {/* Icon */}

            <div className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400">
                {icon}
            </div>

            {/* Input */}

            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    h-16
                    w-full
                    rounded-2xl
                    border
                    border-neutral-700
                    bg-[#1A1A1A]
                    pl-14
                    pr-6
                    text-white
                    placeholder:text-neutral-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#FF5A2F]
                    focus:ring-4
                    focus:ring-[#FF5A2F]/20
                "
            />

        </div>
    );
}