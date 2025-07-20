import { Linkedin, Github, Mail} from 'lucide-react';


export default function Contact() {
    return(
        <div className='flex flex-col border border-gray-400 border-t-0 border-dotted py-6 px-15 gap-5'>
            <h1 className='font-mono font-semibold'>CONTACT</h1>
            <div className='flex flex-col gap-2 '>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-1'>
                        <Mail className='w-4'/>
                        <p>Email</p>
                    </div>
                    <a href="mailto:liujameszhi@gmail.com" 
                    className='text-txt-color hover:scale-110 transform transition duration-300'>liujameszhi@gmail.com</a>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-1'>
                        <Linkedin className='w-4'/>
                        <p>LinkedIn</p>
                    </div>
                    <a href="https://www.linkedin.com/in/jameszhiliu/" 
                    className='text-txt-color hover:scale-110 transform transition duration-300' target="_blank">/in/jameszhiliu</a>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row gap-1'>
                        <Github className='w-5'/>
                        <p>GitHub</p>
                    </div>
                    <a href="https://github.com/jjamesliu" 
                    className='text-txt-color hover:scale-110 transform transition duration-300' target="_blank">jjamesliu</a>
                </div>
            </div>
        </div>
    )
}