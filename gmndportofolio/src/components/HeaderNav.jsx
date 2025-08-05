"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ThemeToggle from '@/app/ThemeToggle';
import { HiOutlineMenu, HiX } from "react-icons/hi";

const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
];

const HeaderNav = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='min-w-full bg-slate-900/100 p-6 px-28 fixed top-0 text-white dark:bg-slate-900/100 dark:text-white'>
            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center justify-between'>
                <h1 className='text-lg font-bold'>GowthamNagaraj</h1>
                <ul className='flex space-x-6'>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <Link href={item.path} className={`list-none cursor-pointer hover:text-blue-400 ${pathname === item.path ? 'text-red-500' : ''}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ThemeToggle />
            </nav>

            {/* Mobile Navigation */}
            <nav className='md:hidden flex items-center justify-between'>
                <h1 className='text-xs font-bold'>GowthamNagaraj</h1>
                <div className="flex items-center space-x-4">
                    <ThemeToggle />
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {menuOpen ? <HiX size={20} /> : <HiOutlineMenu size={20} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div 
                className={`md:hidden absolute top-full left-0 w-full bg-slate-900 dark:bg-slate-800 transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? 'max-h-screen' : 'max-h-0'}`}
            >
                <ul className='flex flex-col items-center justify-center space-y-4 p-4'>
                    {navItems.map((item) => (
                        <li key={item.id} onClick={toggleMenu}>
                            <Link href={item.path} className={`block w-full text-start list-none text-xs cursor-pointer hover:text-blue-400 ${pathname === item.path ? 'text-red-500' : ''}`}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HeaderNav;