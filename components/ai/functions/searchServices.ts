import services from "../knowledge/services";

type SearchServicesArgs = {
    query?: string;
};


export async function searchServices(
    { query }: SearchServicesArgs = {}
) {

    const keyword = query?.trim().toLowerCase();


    // Return all services
    if (!keyword || keyword === "all") {
        return services;
    }


    return services.filter((service) => {
        return (
            service.title
                .toLowerCase()
                .includes(keyword) ||

            service.description
                .toLowerCase()
                .includes(keyword) ||

            service.technologies.some((tech) =>
                tech.toLowerCase().includes(keyword)
            ) ||

            service.projects.some((project) =>
                project.toLowerCase().includes(keyword)
            )
        );
    });
}