"use client";
import {useEffect, useState} from 'react'


export default function Header() {
    const [time, setTime] = useState(new Date());
    useEffect(()=> {
        const interval = setInterval(()=> {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    
    const formattedTime = time.toLocaleTimeString();

    return(
        <div className='flex flex-row font-sans justify-between bg-red-100'>
            <h3>Los Angeles, California</h3>
            <p>{formattedTime}</p>
        </div>
    );
}