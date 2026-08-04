import { InputHTMLAttributes, ReactNode } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode;
};

export default function InputField({
    icon,
    className = "",
    ...props
}: InputFieldProps) {
    return (
        <div className="relative">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-400">
                {icon}
            </div>

            <input
                {...props}
                className={`
                    h-16
                    w-full
                    rounded-2xl
                    border
                    border-neutral-700
                    bg-[#1A1A1A]
                    py-4
                    pl-14
                    pr-6
                    text-white
                    placeholder:text-neutral-500
                    outline-none
                    transition-all
                    duration-300
                    focus:border-[#FF5A2F]
                    ${className}
                `}
            />
        </div>
    );
}