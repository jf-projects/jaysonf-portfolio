import skills from "../knowledge/skills";

type SearchSkillsArgs = {
    query?: string;
};


export async function searchSkills(
    { query }: SearchSkillsArgs = {}
) {

    const keyword = query?.trim().toLowerCase();


    // Return everything when no query or "all"
    if (!keyword || keyword === "all") {
        return skills;
    }


    return skills.filter((skill) => {
        return (
            skill.category
                .toLowerCase()
                .includes(keyword) ||

            skill.items.some((item) =>
                item.toLowerCase().includes(keyword)
            )
        );
    });
}