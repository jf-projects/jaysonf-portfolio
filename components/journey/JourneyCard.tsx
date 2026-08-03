"use client";

import { JourneyItem } from "./types";

interface Props {
    item: JourneyItem;
}

export default function JourneyCard({ item }: Props) {
    return (
        <div
            className="
                rounded-[40px]
                bg-[#111]
                p-12
                text-white
                transition-all
                duration-500
            "
        >
            <span className="text-sm uppercase tracking-[0.3em] text-[#FF5A2F]">
                {item.duration}
            </span>

            <h3 className="mt-3 text-5xl font-black">
                {item.title}
            </h3>

            <p className="mt-2 text-xl text-neutral-400">
                {item.company}
            </p>

            <p className="mt-8 leading-8 text-neutral-300">
                {item.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
                {item.technologies.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-full border border-white/20 px-4 py-2 text-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <div className="mt-10">
                <h4 className="mb-4 text-lg font-bold">
                    Key Achievements
                </h4>

                <ul className="space-y-3">

                    {item.achievements.map((achievement) => (
                        <li
                            key={achievement}
                            className="flex items-center gap-3"
                        >
                            <div className="h-2 w-2 rounded-full bg-[#FF5A2F]" />
                            {achievement}
                        </li>
                    ))}

                </ul>
            </div>
        </div>
    );
}