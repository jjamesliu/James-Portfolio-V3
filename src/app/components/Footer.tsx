
import Link from "next/link"
import { Github, Linkedin, Mail, Copyright } from "lucide-react";

const Footer = () => {
    return (
        <div className='rounded-lg bg-surface flex items-center justify-between p-6 shadow-md'>
            <div>
                <div className='flex items-center gap-1 w-fit'>
                    <Copyright size={10} />
                    <p>2026 James Liu</p>
                </div>
                <Link href="/v3-archive" target="_blank" className='italic fade font-semibold underline'>Click here for old portfolio</Link>
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