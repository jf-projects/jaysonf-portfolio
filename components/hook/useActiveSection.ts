"use client";

import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
    const [activeSection, setActiveSection] = useState(ids[0]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find(
                    (entry) => entry.isIntersecting
                );

                if (visible) {
                    setActiveSection(visible.target.id);
                }
            },
            {
                root: null,
                rootMargin: "-40% 0px -40% 0px",
                threshold: 0.2,
            }
        );

        ids.forEach((id) => {
            const el = document.getElementById(id);

            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, [ids]);

    return activeSection;
}