import projects from "../knowledge/projects";

type SearchProjectsArgs = {
    query?: string;
};


export async function searchProjects(
    { query }: SearchProjectsArgs = {}
) {

    const keyword = query?.trim().toLowerCase();


    // Return all projects
    if (!keyword || keyword === "all") {
        return projects;
    }


    return projects.filter((project) => {
        return (
            project.name
                .toLowerCase()
                .includes(keyword) ||

            project.description
                .toLowerCase()
                .includes(keyword) ||

            project.role
                .toLowerCase()
                .includes(keyword) ||

            project.technologies.some((tech) =>
                tech.toLowerCase().includes(keyword)
            ) ||

            project.responsibilities.some((responsibility) =>
                responsibility.toLowerCase().includes(keyword)
            )
        );
    });
}