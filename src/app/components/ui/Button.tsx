import { LucideIcon } from "lucide-react";

interface ButtonProps {
    icon?: LucideIcon;
    buttonText: string;
    link: string;
}

export default function Button({ icon: Icon, buttonText, link }: ButtonProps) {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className='flex-1 cursor-pointer flex gap-2 justify-center items-center bg-soft-modern-blue text-white/90 rounded-lg text-center py-2 hover:opacity-80 transition-opacity duration-300'
        >
            {Icon && <Icon size={20} />}
            <p>{buttonText}</p>
        </a>
    )
}

