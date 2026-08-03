"use client";

import { services } from "./data";
import { useActiveSection } from "@/components/hook/useActiveSection";

export default function ServiceMenu() {
    const active = useActiveSection(
        services.map((service) => service.id)
    );

    return (
        <aside
            className="
                sticky
                top-32
                hidden
                h-fit
                lg:block
            "
        >
            <nav className="space-y-6">

                {services.map((service) => {

                    const isActive = active === service.id;

                    return (
                        <a
                            key={service.id}
                            href={`#${service.id}`}
                            className={`
                                group
                                flex
                                items-center
                                gap-3
                                text-lg
                                font-medium
                                transition-all
                                duration-300

                                ${isActive
                                    ? "text-[#FF5A2F]"
                                    : "text-neutral-400 hover:text-[#FF5A2F]"
                                }
                            `}
                        >
                            <span
                                className={`
                                    h-0.5
                                    bg-[#FF5A2F]
                                    transition-all
                                    duration-300

                                    ${isActive
                                        ? "w-8"
                                        : "w-0 group-hover:w-6"
                                    }
                                `}
                            />

                            {service.title}
                        </a>
                    );
                })}

            </nav>
        </aside>
    );
}