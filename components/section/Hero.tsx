import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
    return (
        <section
            id="home"
            className="bg-[#F8F5F0]"
        >
            <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-8">

                {/* LEFT */}

                <div className="flex-1">

                    <span className="mb-6 inline-flex rounded-full bg-[#FFF2D8] px-4 py-2 text-sm font-semibold text-[#FF5A2F]">
                        AVAILABLE FOR WORK
                    </span>

                    <h1 className="max-w-3xl text-7xl font-black leading-[0.9] tracking-tighter text-[#121212]">
                        FULL STACK
                        <br />
                        SOFTWARE
                        <br />
                        ENGINEER.
                    </h1>

                    <p className="mt-8 max-w-xl text-xl leading-9 text-[#555]">
                        I build scalable web applications,
                        AI-powered experiences,
                        and modern software that helps
                        businesses grow.
                    </p>

                    <div className="mt-10 flex gap-5">

                        <Button
                            className="
              rounded-full
              bg-[#FF5A2F]
              px-8
              py-7
              text-white
              shadow-lg
              hover:bg-[#eb4c22]
            "
                        >
                            View Projects
                        </Button>

                        <Button
                            variant="outline"
                            className="
              rounded-full
              px-8
              py-7
              border-2
            "
                        >
                            Let&apos;s Talk
                        </Button>

                    </div>

                    <div className="mt-14 flex flex-wrap gap-3">

                        {[
                            "Next.js",
                            "React",
                            "Laravel",
                            "Node.js",
                            "TypeScript",
                            "Supabase",
                        ].map((tech) => (
                            <span
                                key={tech}
                                className="
                  rounded-full
                  border
                  border-[#DDD]
                  bg-white
                  px-4
                  py-2
                  text-sm
                  font-semibold
                "
                            >
                                {tech}
                            </span>
                        ))}

                    </div>

                </div>

                {/* RIGHT */}

                <div className="hidden flex-1 items-center justify-center lg:flex">
                    <div className="relative h-150 w-125 overflow-hidden rounded-[48px] bg-[#FFE6D5]">
                        <Image
                            src="https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=987&auto=format&fit=crop"
                            alt="Developer"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}