"use client"
import Image from "next/image";
import { FileUser, MoveRight } from 'lucide-react';
import { TypeAnimation } from "react-type-animation";


export default function Profile() {
    return (
        <div className='pt-4 pb-8 mx-auto border border-gray-400 border-dotted border-t-0'>
            <a href="https://zhidesign.framer.website/" target="_blank" rel="noopener noreferrer">
                <div className='flex justify-end'>
                    <div className='inline-flex flex-row gap-1 text-txt-color text-xs items-center pr-2 mt-2 mb-8 hover:scale-105 hover:text-black transform transition duration-300 fade cursor-pointer'>
                        <MoveRight size={12}/>
                        <span>ecommerce/agency portfolio</span>
                    </div>
                </div>
            </a>
            <div className='relative w-30 h-30 mx-auto overflow-hidden rounded-lg wobble'>
                <Image src="/jamesliuprofilepicture.png"
                alt="James Liu Profile Picture"
                className='object-cover object-[center_10%]'
                fill
                priority
                />
            </div>
            <div className='flex flex-col items-center mt-4 gap-1'>
                <h1 className='text-3xl font-bold'>
                    <TypeAnimation
                    sequence={['James Liu'
                    ]}
                    wrapper="span"
                    speed={3}
                    cursor={false}
                    repeat={0}/>
                </h1>
                <h3 className='text-xl font-medium text-txt-color'>
                    <TypeAnimation
                    sequence={['Full Stack Developer']}
                    wrapper="span"
                    speed={5}
                    cursor={false}
                    repeat={0}/>
                </h3>
                <div className='rounded-lg  border-black border-2 text-gray-700 shadow-lg px-1.5 py-1 mt-2 hover:scale-110 duration-300 hover:bg-green-400 hover:text-gray-700 active:bg-green-400 active:text-gray-700'>
                    <a className='flex items-center justify-center gap-1 font-semibold text-[0.9rem]'
                    href="/james_resume.pdf" target="_blank">
                        <FileUser className='w-6'/>Resume 
                    </a>
                </div>
            </div>
        </div>
    )
}