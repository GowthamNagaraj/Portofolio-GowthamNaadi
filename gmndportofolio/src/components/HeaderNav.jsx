"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/app/ThemeToggle';
import { HiOutlineMenu, HiX } from "react-icons/hi";

const navItems = [
    { id: 1, name: "Home", path: "#home" },
    { id: 2, name: "About", path: "#about" },
    { id: 3, name: "Services", path: "#services" },
    { id: 4, name: "Contact", path: "#contact" },
];

const HeaderNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const saved = localStorage.getItem('active-section');
        if (saved) setActiveSection(saved);

        const handleScroll = () => {
            const scrollPos = window.scrollY;
            let current = "";

            for (let item of navItems) {
                const section = document.getElementById(item.path.slice(1));
                if (section && scrollPos >= section.offsetTop - 100) {
                    current = item.path;
                }
            }

            setActiveSection(current);
            localStorage.setItem('active-section', current);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // run once

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (path) => {
        setActiveSection(path);
        localStorage.setItem("active-section", path);
        setMenuOpen(false);
    };

    return (
        <div className='min-w-full bg-slate-900/100 p-6 px-28 fixed top-0 text-white dark:bg-slate-900/100 dark:text-white z-50'>
            {/* Desktop Navigation */}
            <nav className='hidden md:flex items-center justify-between'>
                <h1 className='text-lg font-bold'>GowthamNagaraj</h1>
                <ul className='flex space-x-6'>
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <a
                                href={item.path}
                                className={`cursor-pointer hover:text-blue-400 ${
                                    activeSection === item.path ? 'text-red-500 font-bold' : ''
                                }`}
                                onClick={() => handleLinkClick(item.path)}
                            >
                                {item.name}
                            </a>
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
                        <li key={item.id}>
                            <a
                                href={item.path}
                                className={`block w-full text-start text-xs cursor-pointer hover:text-blue-400 ${
                                    activeSection === item.path ? 'text-red-500 font-bold' : ''
                                }`}
                                onClick={() => handleLinkClick(item.path)}
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HeaderNav;
