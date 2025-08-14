'use client';
import { useState } from 'react';
import { Github, Globe } from 'lucide-react';

export default function ProjectSection() {
    const projects = [
    {
        id: 'devdigest',
        title: "Dev Digest",
        desc: `DevDigest is a personalized, responsive web application built with Next.js, React, and 
        TailwindCSS, and deployed on Vercel. It curates and recommends trending content—such as GitHub 
        repositories, YouTube videos, and blog posts—based on your programming interests. 
        (Project in progress.)`,
        image: "/devdigest.png",
        github: "https://github.com/jjamesliu/DevDigest",
        website: "https://devdigestproto.vercel.app/",
        skills: ["React", "TailwindCSS", "NextJS", "Vercel", "Google YouTube API", "DevTo API", "Reddit API", "GitHub API"]
    },
    {
        id: 'salemwfs',
        title: "SalemWFS Walmart Blueprint VSL",
        desc: `Developed a fully responsive, high-converting landing page for a coaching program using React and TailwindCSS, 
        deployed via Vercel. The page features a compelling Video Sales Letter 
        (VSL) with client testimonials, and a lead capture system. Integrated Firebase and Zapier to 
        automate email workflows for new signups, enhancing client engagement. Designed to drive lead 
        conversion through a seamless user experience and modern frontend architecture.`,
        image: "/salemwfs.png",
        github: "https://github.com/zhidesign/salemwfs",
        website: "https://salemwfs.vercel.app/",
        skills: ["React", "TailwindCSS", "Vercel", "NextJS", "TypeScript", "Shadcn", "Google Firebase", "Zapier"]
    },
    {
        id: 'amzwinner',
        title: "AMZWinner Coaching Program",
        desc: `Developed a responsive landing page using React (Vite) and TailwindCSS for a coaching 
        program client. The site features a compelling video sales letter (VSL), 
        integrated client testimonials, and a Formspree-powered contact form to capture leads for 
        SMS and email marketing, boosting conversion.`,
        image: "/amzwinner.png",
        github: "https://github.com/zhidesign/amzwinners",
        website: "https://amzwinners.netlify.app/",
        skills: ["React", "TailwindCSS", "Netlify", "FormSpree API"]
    },
    {
        id: 'chefcowai',
        title: "Chef Cow AI",
        desc: `Built a responsive React web application using Vite and TailwindCSS, deployed via Netlify. 
      The app integrates MistralAI’s language model via Hugging Face’s inference API to generate real-time recipe suggestions based on user-inputted ingredients. 
      Implemented custom state management for efficient form handling and used React’s component-based architecture for dynamic UI rendering 
      and smooth user experience.`,
        image: "/chefcowai.png",
        github: "https://github.com/jjamesliu/ChefCowAI",
        website: "https://chefcowai.netlify.app/",
        skills: ["React", "TailwindCSS", "Netlify", "Hugging Interface API", "MistralAI"]
    },
    {
        id: 'reducecarbon',
        title: "Reduce Carbon",
        desc: `Developed a responsive React web application using Vite and TailwindCSS, deployed via Netlify. 
      The app integrates the Carbon Interface API to calculate users’ carbon emissions based on their selected transportation method 
      (e.g., car mileage or airport of departure). Leveraging the Meta LLaMA AI model, the app dynamically suggests personalized, 
      actionable strategies to help users reduce their carbon footprint. The UI guides users through selecting their travel type and inputting relevant data, 
      providing both educational insights and AI-generated recommendations in real time.`,
        image: "./reduceCarbon.png",
        github: "https://github.com/jjamesliu/reduceCO2",
        website: "https://reduceco2.netlify.app/",
        skills: ["React", "TailwindCSS", "Netlify", "Carbon Interface API", "Hugging Interface API", "Meta llama AI"]
    },
]

    const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>({});
    const toggleExpanded = (projectId: string) => {
        setExpandedProjects(prev => ({
            ...prev,
            [projectId]: !prev[projectId]
        }));
    };

    const truncateText = (text: string, wordlimit = 28) => {
        const words = text.trim().split(' ')
        if (words.length <= wordlimit) return text;
        return words.slice(0,wordlimit).join(' ') + '...';
    };

    return (
        <div className='py-6 px-15 border border-gray-400 border-dotted border-t-0'>
            <h1 className='font-mono font-semibold'>PROJECTS</h1>

                <div className='flex flex-col mt-3 gap-5'>
                    {projects.map( (project) => {
                        const isExpanded = expandedProjects[project.id];
                        const shouldTruncate = project.desc.trim().split(' ').length > 25;

                        return (
                            <div key={project.id}
                            className='flex flex-col border border-gray-400 p-6 rounded-xl border-dotted'>
                                <div className='overflow-hidden bg-red-100 w-full h-[15rem] sm:h-[25rem] mb-3 border border-gray-300 rounded-2xl shadow-lg'>
                                    <img className='w-full h-full object-cover'
                                    src={project.image}/>
                                </div>
                                <h1 className='text-[1.2rem] text-gray-700 hover:underline'><a href={project.website} target="_blank">{project.title}</a></h1>

                                <div className='text-sm md:text-[1rem] text-txt-color'>
                                    <p className='hidden sm:block'>{project.desc}</p>
                                    <div className='sm:hidden'>
                    
                                        <p>
                                            {isExpanded ? project.desc : truncateText(project.desc)}
                                        </p>
                                        {shouldTruncate &&  (
                                            <button onClick={ ()=>toggleExpanded(project.id)}
                                            className='text-blue-600 hover:text-blue-800 font-medium mt-1 text-xs'>
                                                {isExpanded ? 'Read less': 'Read more'}
                                            </button>
                                        )}

                                    </div>
                                </div>

                                <div className='mt-3 flex flex-row gap-1.5 flex-wrap'>
                                    {project.skills.map( (skill, index) => (
                                        <div key={index} className='border border-gray rounded-xl px-2 py-1 bg-[rgb(240,240,240)] text-gray-500 text-sm hover:scale-105 duration-300 hover:text-black'>
                                            <p className='text-xs md:text-[1rem]'>{skill}</p>
                                        </div>
                                    )
                                    )}
                                </div>
                                <div className='flex flex-col md:flex-row gap-1 md:gap-3 mt-4'>
                                    <a className='text-[0.8rem] md:text-[1rem] justify-center items-center flex flex-1 gap-1 border rounded-lg p-2 text-white bg-black shadow-2xl hover:scale-103 duration-300 hover:bg-green-400 hover:text-black'
                                    href={project.github}
                                    target="_blank"><Github />Github</a>
                                    <a className='text-[0.8rem] md:text-[1rem] justify-center items-center flex flex-1 gap-1 border rounded-lg p-2 text-white bg-black shadow-2xl hover:scale-103 duration-300 hover:bg-green-400 hover:text-black'
                                    href={project.website}
                                    target="_blank"><Globe />Website</a>
                                </div>
                            </div>
                    )}
                    )}
                </div>

        </div>
    )
}