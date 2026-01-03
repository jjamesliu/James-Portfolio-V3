import { Github, Linkedin, Mail } from "lucide-react";

const About = () => {
    return (
            <div className='flex flex-col space-y-6 max-w-3xl'>
                <h1>Hi! I'm James <span className='inline-block wobble'>👋</span></h1>
                <p className='leading-8 text-[1.25rem]'>
                    I'm a software engineer specialized in building web and mobile applications
                    that solve real problems, with a strong focus on usability, performance, and
                    clean architecture. I'm currently a 3rd year @ UCLA and I'm currently building Forecast,
                    a prediction market for UCLA students.
                </p>
                <div className='flex flex-row gap-3'>
                    <a href="https://github.com/jjamesliu" target="_blank"
                    rel="noopener noreferrer"
                    className='flex gap-1 justify-center items-center hover:text-soft-modern-blue transition duration-300 ease-in-out'>
                        <Github size={20}/>
                        <span>Github</span>
                    </a>
                    <span>|</span>
                    <a href="https://linkedin.com/in/jameszhiliu" target="_blank"
                    rel="noopener noreferrer"
                    className='flex gap-1 justify-center items-center hover:text-soft-modern-blue transition duration-300 ease-in-out'>
                        <Linkedin size={18}/>
                        <span>LinkedIn</span>
                    </a>
                    <span>|</span>
                    <a href="mailto:liujameszhi@gmail.com"
                    className='flex gap-1 justify-center items-center hover:text-soft-modern-blue transition duration-300 ease-in-out'>
                        <Mail size={20}/>
                        <span>Email</span>
                    </a>
                </div>
            </div>
    )
}

export default About;