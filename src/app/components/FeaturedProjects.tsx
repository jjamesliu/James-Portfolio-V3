import { Star, ArrowRight } from "lucide-react";
import ProjectCard from "@/app/components/ui/ProjectCard";
import projectsData from "@/app/data/projects.json";


const Projects = () => {
    const featuredProjects = projectsData.featured;

    return (
        <div className='space-y-8'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2 items-center'>
                    <Star size={30} className='text-blue-accent'/>
                    <h1>Featured Projects</h1>
                </div>
                <div className='flex items-center gap-1'>
                    <button className='underline decoration-dotted text-blue-accent'>View all</button>
                    <ArrowRight size={18} className='text-blue-accent'/>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </div>
    )
}

export default Projects;