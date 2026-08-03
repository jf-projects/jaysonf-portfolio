"use client";

import { services } from "./data";
import ServiceMenu from "./ServiceMenu";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <section
            id="services"
            className="bg-[#F7F5F2] py-36"
        >
            <div className="mx-auto max-w-7xl">

                <div className="mb-20 text-center">

                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.4em] text-[#FF5A2F]">
                        
                        WHAT I BUILD
                    </p>

                    <h2 className="text-4xl font-black md:text-5xl lg:text-6xl">
                        Solutions I Deliver
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
                        Modern software crafted for businesses—from scalable web
                        applications to AI-powered automation.
                    </p>

                </div>

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-12
                        lg:grid-cols-[260px_1fr]
                        lg:gap-20
                    "
                >

                    <ServiceMenu />

                    <div className="space-y-14">

                        {services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                            />
                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}