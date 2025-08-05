"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes";
import { HiSun,HiMoon} from "react-icons/hi";

export default function ThemeToggle(){
    const {theme, setTheme} = useTheme();
    
  return (
    <Button
        variant="outline"
        size="icon"
        className="rounded-full md:w-8 md:h-8 w-6 h-6"
        onClick={()=> setTheme(theme === "light" ? "dark" : "light")}
    >
        <HiSun className="absolute h-10 w-10 text-yellow-500 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 "/>
        <HiMoon className="absolute h-10 w-10 rotate-90 scale-0 dark:-rotate-0 dark:scale-100 "/>
    </Button>
  )
}
