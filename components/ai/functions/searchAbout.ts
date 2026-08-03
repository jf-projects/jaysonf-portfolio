import about from "../knowledge/about";
type SearchAboutArgs = {
    query?: string;
};

export async function searchAbout({ query }: SearchAboutArgs) {
    if (!query?.trim()) {
        return about;
    }

    const keyword = query.trim().toLowerCase();

    return {
        name: about.name.toLowerCase().includes(keyword)
            ? about.name
            : undefined,

        title: about.title.toLowerCase().includes(keyword)
            ? about.title
            : undefined,

        location: about.location.toLowerCase().includes(keyword)
            ? about.location
            : undefined,

        summary: about.summary.toLowerCase().includes(keyword)
            ? about.summary
            : undefined,

        interests: about.interests.filter((interest) =>
            interest.toLowerCase().includes(keyword)
        ),
    };
}