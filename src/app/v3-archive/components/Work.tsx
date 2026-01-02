'use client';
import { useState } from 'react';
import { Github, Globe } from 'lucide-react';

export default function WorkExperienceSection() {
    const works = [
    {
        id: 'swiftymail',
        title: "SwiftyMail",
        desc: `Built a full-stack SaaS application that allows users to upload email lists and 
        send automated cold email campaigns with AI-assisted content generation. Implemented features 
        to improve deliverability and prevent spam via smart cooldowns and queuing logic.`,
        image: "./swiftypremium.png",
        github: "https://swiftypremium.com",
        website: "https://swiftypremium.com",
        skills: ["NextJS", "TailwindCSS", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "OpenAI API"]
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
        <div className='py-6 px-4 sm:px-15 border border-gray-400 border-dotted border-t-0 '>
            <h1 className='font-mono font-semibold px-11 sm:px-0'>WORK EXPERIENCE</h1>
            <div>
                <div className='flex flex-col mt-3 gap-5'>
                    {works.map((work) => (
                        <div key={work.id} className='border rounded-lg border-dotted border-gray-400 p-4 '>
                            <h2 className='font-semibold text-lg'>{work.title}</h2>
                        </div>
                    ))}
                </div>       
            </div>
        </div>
    )
}