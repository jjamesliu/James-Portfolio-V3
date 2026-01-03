"use client";

import { useState, useEffect } from "react";
import { useTheme, type Theme} from "@/app/providers/theme-provider";
import { useIsMobile } from "@/app/hooks/useIsMobile";
import { Sun, Star, Moon, Menu, X } from "lucide-react";

const Navbar = () => {
    const isMobile = useIsMobile(); 
    useEffect(() => {
        if (!isMobile) {
            setHamburgerOpen(false);
        }
    }, [isMobile])

    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const {theme, setTheme} = useTheme();
    const themeOrder: Theme[] = ["light", "extra", "dark"];
    const cycleTheme = () => {
        const currentIndex = themeOrder.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themeOrder.length;
        setTheme(themeOrder[nextIndex]);
    };

    return (
        <div className='relative py-[18px] flex flex-row justify-between px-10 z-10 items-center'>
            <h1 className='text-2xl'>James Liu</h1>
            <div className='hidden md:flex gap-10'>
                <button>Projects</button>
                <button>Contact</button>
                <button onClick={cycleTheme}>
                    {theme === "light" ? <Star/> : theme === "extra" ? <Moon/> : <Sun/>}
                </button>
            </div>

            <div className="flex items-center md:hidden">
                <button onClick={() => setHamburgerOpen((prev) => !prev)}>
                    {hamburgerOpen ? <X/> : <Menu/>}
                </button>
            </div>

            {hamburgerOpen && (
                <>
                <div className="absolute top-full h-screen inset-0 z-5 glass">
                    <div className="flex flex-col space-y-6 p-6 w-full">
                    <button className='text-3xl font-bold'>Projects</button>
                    <button className='text-3xl font-bold'>Contact</button>
                    <button className='text-3xl font-bold flex items-center gap-2 mx-auto'
                    onClick={cycleTheme}>
                        Change Theme
                        {theme === "light" ? <Star/> : theme === "extra" ? <Moon/> : <Sun/>}
                    </button>
                    </div>
                </div>


                </>
            )}
        </div>
    )
}

export default Navbar;