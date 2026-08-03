type Props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    projects: any[];
    active: number;
    setActive: (index: number) => void;
};

export default function ProjectTabs({
    projects,
    active,
    setActive,
}: Props) {
    return (
        <div className="flex gap-4">

            {projects.map((project, index) => (

                <button
                    key={project.id}
                    onClick={() => setActive(index)}
                    className={`
                        h-175
                        w-28
                        rounded-[42px]
                        transition-all
                        duration-500

                        ${
                            active === index
                                ? "bg-[#FF5A2F] text-white"
                                : "bg-[#FFF7EB] hover:bg-[#FFE9D4]"
                        }
                    `}
                >
                    <span
                        className="
                            mt-16
                            block
                            text-7xl
                            font-black
                            -rotate-90
                        "
                    >
                        {project.tab}
                    </span>
                </button>

            ))}

        </div>
    );
}