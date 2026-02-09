import Link from "next/link";

import { Star, ArrowRight } from "lucide-react";
import ProjectCard from "@/app/components/ui/ProjectCard";
import projectsData from "@/app/data/projects.json";


const Projects = () => {
    const featuredProjects = projectsData.featured;
    return (
        <div className='space-y-8'>
            <div className='flex justify-between items-center gap-2'>
                <div className='flex gap-2 items-center'>
                    <Star size={30} className='text-soft-modern-blue'/>
                    <h1 className='text-[15px] md:text-xl'>Featured Projects</h1>
                </div>
                <div className='flex items-center gap-1 group'>
                    <Link href="/projects" className='underline decoration-dotted text-blue-accent group-hover:text-soft-modern-blue duration-300 ease-in-out text-[14px] md:text-lg'>View all</Link>
                    <ArrowRight size={18} className='text-blue-accent group-hover:text-soft-modern-blue duration-300 ease-in-out'/>
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