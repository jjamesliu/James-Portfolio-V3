import projectsData from "@/app/data/projects.json";
import ProjectCard from "@/app/components/ui/ProjectCard";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function Projects() {
    const projects = [...projectsData.featured, ...projectsData.other]
    return (
        <div>
            <Navbar />
            <div className='max-w-6xl mt-20 mx-auto p-10 space-y-30'>
                <div className='grid md:grid-cols-2 gap-8'>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
                <Footer />
            </div>
        </div>
    )
}