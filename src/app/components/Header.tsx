"use client";
import {useEffect, useState} from 'react'
import {MapPin} from 'lucide-react'

export default function Header() {
    const [time, setTime] = useState<Date | null>(null);
    useEffect(()=> {
        const interval = setInterval(()=> {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    const formattedTime = time ? time.toLocaleTimeString() : '';

    return(
        <div className='border border-gray-300 dotted'>
            <div className='flex flex-row font-mono justify-between items-center text-txt-color p-6 gap-3'>
                <div className='flex flex-row gap-1 items-center'>
                    <MapPin className='w-4'/>
                    <h3 className='text-xs md:text-[1rem]'>Los Angeles, California</h3>
                </div>
                <p className='text-xs md:text-[1rem]'>{formattedTime}</p>
            </div>
        </div>
    );
}