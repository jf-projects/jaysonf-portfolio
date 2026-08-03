"use client";

import { useState } from "react";

import { journey } from "./data";
import Timeline from "./Timeline";
import JourneyCard from "./JourneyCard";

export default function Journey() {
    const [active, setActive] = useState(0);

    return (
        <section
            id="experience"
            className="bg-[#F7F5F2] py-36"
        >
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-20 text-center">

                    <span className="rounded-full bg-[#FFF3E8] px-6 py-3 text-[#FF5A2F]">
                        MY JOURNEY
                    </span>

                    <h2 className="mt-6 text-5xl font-black">
                        Building software,
                        learning every day.
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg text-neutral-600">
                        My journey from student to full stack engineer.
                    </p>

                </div>

                <div className="grid gap-20 lg:grid-cols-[250px_1fr]">

                    <Timeline
                        items={journey}
                        active={active}
                        onSelect={setActive}
                    />

                    <JourneyCard item={journey[active]} />

                </div>
            </div>


        </section>
    );
}