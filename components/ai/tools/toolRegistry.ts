import { searchProjects } from "@/components/ai/functions/searchProjects";
import { searchAbout } from "@/components/ai/functions/searchAbout";
import { searchExperience } from "@/components/ai/functions/searchExperience";
import { searchSkills } from "@/components/ai/functions/searchSkills";
import { searchServices } from "@/components/ai/functions/searchServices";
import { searchContact } from "@/components/ai/functions/searchContact";

const toolRegistry = {
    searchProjects,
    searchAbout,
    searchExperience,
    searchSkills,
    searchServices,
    searchContact,
};


export default toolRegistry;