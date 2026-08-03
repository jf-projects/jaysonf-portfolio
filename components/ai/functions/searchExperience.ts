import experience from "../knowledge/experience";

type SearchExperienceArgs = {
    query?: string;
};


export async function searchExperience(
    { query }: SearchExperienceArgs = {}
) {

    const keyword = query?.trim().toLowerCase();


    const genericQueries = [
        "all",
        "work",
        "experience",
        "work experience",
        "career",
        "background",
        "history",
        "professional experience",
    ];


    // Return all experience for general questions
    if (!keyword || genericQueries.includes(keyword)) {
        return experience;
    }


    return experience.filter((job) => {
        return (
            job.company
                .toLowerCase()
                .includes(keyword) ||

            job.position
                .toLowerCase()
                .includes(keyword) ||

            job.location
                .toLowerCase()
                .includes(keyword) ||

            job.summary
                .toLowerCase()
                .includes(keyword) ||

            job.technologies.some((tech) =>
                tech.toLowerCase().includes(keyword)
            ) ||

            job.responsibilities.some((responsibility) =>
                responsibility.toLowerCase().includes(keyword)
            )
        );
    });
}