"use client";

import { X, Sparkles } from "lucide-react";

interface Props {
    open: boolean;
    query: string;
    answer: string;
    loading: boolean;
    onClose: () => void;
}

export default function SearchResult({
    open,
    query,
    answer,
    loading,
    onClose,
}: Props) {
    return (
        <div
            className={`
                w-full
                overflow-hidden
                transition-all
                duration-500
                ${open
                    ? "mt-8 max-h-250 opacity-100"
                    : "mt-0 max-h-0 opacity-0"
                }
            `}
        >
            <div className="rounded-[32px] border border-neutral-200 bg-white shadow-xl">

                {/* Header */}

                <div className="flex items-center justify-between border-b border-neutral-200 px-8 py-6">

                    <div className="flex items-center gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF5A2F]/10">

                            <Sparkles className="h-5 w-5 text-[#FF5A2F]" />

                        </div>

                        <div className="text-left">

                            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
                                AI Assistant
                            </p>

                            <h2 className="font-semibold text-[#121212]">
                                {query}
                            </h2>

                        </div>

                    </div>

                    <button
                        onClick={onClose}
                        className="
                            rounded-full
                            p-2
                            transition
                            hover:bg-neutral-100
                        "
                    >
                        <X className="h-5 w-5" />
                    </button>

                </div>

                {/* Content */}

                <div className="min-h-62.5 p-8">

                    {loading ? (
                        <div className="flex h-full flex-col items-center justify-center py-12">

                            <div className="mb-6 h-12 w-12 animate-spin rounded-full border-4 border-[#FF5A2F] border-t-transparent" />

                            <p className="text-lg font-medium text-neutral-700">
                                Thinking...
                            </p>

                            <p className="mt-2 text-sm text-neutral-500">
                                Searching my experience and projects.
                            </p>

                        </div>
                    ) : (
                        <div
                            className="
                                whitespace-pre-wrap
                                text-left
                                text-[17px]
                                leading-8
                                text-neutral-700
                            "
                        >
                            {answer}
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}