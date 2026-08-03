"use client";

import { JourneyItem } from "./types";

interface Props {
    items: JourneyItem[];
    active: number;
    onSelect: (index: number) => void;
}

export default function Timeline({
    items,
    active,
    onSelect,
}: Props) {
    return (
        <div className="relative w-60">

            <div className="absolute left-3.75 top-6 bottom-6 w-0.5 bg-neutral-300" />

            <div className="space-y-8">

                {items.map((item, index) => {

                    const isActive = active === index;

                    return (
                        <button
                            key={item.id}
                            onClick={() => onSelect(index)}
                            className="group flex items-center gap-5 text-left"
                        >
                            <div
                                className={`
                                    z-10
                                    h-8
                                    w-8
                                    rounded-full
                                    border-4
                                    transition-all
                                    duration-500

                                    ${
                                        isActive
                                            ? "border-[#FF5A2F] bg-[#FF5A2F] scale-110"
                                            : "border-neutral-300 bg-white group-hover:border-[#FF5A2F]"
                                    }
                                `}
                            />

                            <div>

                                <p
                                    className={`
                                        text-2xl
                                        font-black
                                        transition

                                        ${
                                            isActive
                                                ? "text-[#FF5A2F]"
                                                : "text-black"
                                        }
                                    `}
                                >
                                    {item.year}
                                </p>

                                <p className="text-sm text-neutral-500">
                                    {item.company}
                                </p>

                            </div>

                        </button>
                    );
                })}
            </div>

        </div>
    );
}