"use client";

import { useState } from "react";
import { useTheme, type Theme} from "../providers/theme-provider";
import { Sun, Star, Moon } from "lucide-react";

export default function Navbar() {
    const {theme, setTheme} = useTheme();
    const themeOrder: Theme[] = ["light", "extra", "dark"];
    const cycleTheme = () => {
        const currentIndex = themeOrder.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themeOrder.length;
        setTheme(themeOrder[nextIndex]);
    };

    return (
        <div className='glass py-[18px] flex flex-row justify-between px-40 z-10'>
            <h1>James</h1>
            <div className='flex gap-10'>
                <button>Projects</button>
                <button>Contact</button>
                <button onClick={cycleTheme}>
                    {theme === "light" ? <Star/> : theme === "extra" ? <Moon/> : <Sun/>}
                </button>
            </div>
        </div>
    )
}