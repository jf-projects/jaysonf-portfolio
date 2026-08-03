"use client";

import { Search, ArrowUp } from "lucide-react";

interface Props {
    query: string;
    setQuery: (value: string) => void;
    onSearch: (value?: string) => void;
}

export default function SearchInput({
    query,
    setQuery,
    onSearch,
}: Props) {

    function submit() {
        if (!query.trim()) return;

        onSearch(query);
    }

    return (
        <div className="mx-auto w-full max-w-3xl">

            <div className="flex items-center rounded-[32px] border border-neutral-200 bg-white px-6 py-5 shadow-xl">

                <Search
                    size={22}
                    className="text-gray-400"
                />

                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            submit();
                        }
                    }}
                    type="text"
                    placeholder="Ask anything about me..."
                    className="ml-4 flex-1 bg-transparent text-lg outline-none"
                />

                <button
                    onClick={submit}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF5A2F] text-white transition hover:scale-105"
                >
                    <ArrowUp size={18} />
                </button>

            </div>

        </div>
    );
}