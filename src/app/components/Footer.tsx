import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <div className='rounded-lg bg-surface flex items-center justify-between p-6'>
            <div>
                <p>2026 James Liu</p>
            </div>
            <div className='flex gap-6'>
                <a href="https://github.com/jjamesliu" target="_blank"
                className='hover:text-blue-accent duration-300 ease-in-out'><Github/></a>
                <a href="https://www.linkedin.com/in/jameszhiliu/" target="_blank"
                className="hover:text-blue-accent duration-300 ease-in-out"><Linkedin/></a>
                <a href="mailto:liujameszhi@gmail.com"
                className="hover:text-blue-accent duration-300 ease-in-out"><Mail/></a>
            </div>
        </div>
    )
}

export default Footer;