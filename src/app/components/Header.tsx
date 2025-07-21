"use client";
import {useEffect, useState} from 'react'
import {MapPin} from 'lucide-react'

export default function Header() {
    // const [time, setTime] = useState<Date | null>(null);
    // useEffect(()=> {
    //     const interval = setInterval(()=> {
    //         setTime(new Date());
    //     }, 1000);
    //     return () => clearInterval(interval);
    // }, []);
    
    // const formattedTime = time ? time.toLocaleTimeString() : '';
    const formattedTime=1

    return(
        <div className='border border-gray-300 dotted'>
            <div className='flex flex-row font-mono justify-between text-txt-color p-6'>
                <div className='flex flex-row gap-1'>
                    <MapPin className='w-4'/>
                    <h3>Los Angeles, California</h3>
                </div>
                <p>{formattedTime}</p>
            </div>
        </div>
    );
}