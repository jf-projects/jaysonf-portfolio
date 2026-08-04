interface Props {
    onSelect: (value: string) => void;
}

const suggestions = [
    "Tell me about yourself",
    "Show Laravel projects",
    "View work experience",
    "What technologies do you use?",
];

export default function SearchSuggestions({
    onSelect,
}: Props) {
    return (
        <div className="mt-8 flex flex-wrap justify-center gap-3">

            {suggestions.map((item) => (
                <button
                    key={item}
                    onClick={() => onSelect(item)}
                    className="rounded-full border border-neutral-200 bg-white px-5 py-3 text-sm transition hover:bg-[#FF5A2F] hover:text-white"
                >
                    {item}
                </button>
            ))}

        </div>
    );
}