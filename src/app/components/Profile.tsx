import Image from "next/image";
import { FileUser } from 'lucide-react';


export default function Profile() {
    return (
        <div className='py-8 mx-auto border border-gray-400 border-dotted border-t-0'>
            <div className='relative w-30 h-30 mx-auto overflow-hidden rounded-lg wobble'>
                <Image src="/jamesliuprofilepicture.png"
                alt="James Liu Profile Picture"
                className='object-cover object-[center_10%]'
                fill
                priority
                />
            </div>
            <div className='flex flex-col items-center mt-4 gap-1'>
                <h1 className='text-3xl font-bold'>James Liu</h1>
                <h3 className='text-xl font-medium text-txt-color'>Full Stack Developer</h3>
                <div className='rounded-lg  border-gray-500 border-2 text-gray-700 shadow-lg px-1.5 py-1 mt-2 hover:scale-110 duration-300 hover:bg-green-400 hover:text-gray-700'>
                    <a className='flex items-center justify-center gap-1 font-semibold text-[0.9rem]'
                    href="/james_resume.pdf" target="_blank">
                        <FileUser className='w-6'/>Resume 
                    </a>
                </div>
            </div>
        </div>
    )
}