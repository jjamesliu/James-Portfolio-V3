import { Github, Globe } from "lucide-react";
import Button from "@/app/components/ui/Button";
interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    github: string;
    demo: string;
    tags: string[];
    image: string;
}


export default function ProjectCard({
    id,
    title,
    description,
    longDescription,
    github,
    demo,
    tags,
    image
}: ProjectCardProps) {
    return (
        <div className='flex flex-col border border-surface shadow-md rounded-lg overflow-hidden hover:border-blue-accent duration-300 group'>
            <a href={demo} target="_blank" rel="noopener noreferrer">
                <div className='h-100'><img className='w-full h-full object-cover hover:scale-105 duration-300' src={image}/></div>
            </a>
            <div className='flex flex-col justify-between gap-4 p-4 flex-1'>
                <div className='flex flex-col space-y-2'>
                    <h1 className='group-hover:text-soft-modern-blue duration-300'>{title}</h1>
                    <p>{description}</p>
                    <div className='flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <div key={tag} className='rounded-lg px-2 py-1 bg-surface '>
                            {tag}
                        </div>
                    ))}
                    </div>
                </div>
                <div>
                    {github.length > 0 ? (
                        <div className='flex gap-2'>
                            <Button icon={Github} link="https://github.com/jjamesliu" buttonText="Open Github"/>
                            <Button icon={Globe} link={demo} buttonText="Open App"/>
                        </div>
                    ) : (
                        <Button icon={Globe} link={demo} buttonText="Open App"/>
                    )}
                </div>
            </div>
        </div>
    )
}