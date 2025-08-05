"use client"
import Image from 'next/image';
import React from 'react'
import { FaFaceSmileWink } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import myImage from "@/assets/gm.png"
import { Button } from './ui/button';

const Hero = () => {
    return (
        <div className='min-h-screen max-w-full grid grid-cols-1 md:grid-cols-2 justify-items-center px-14 md:p-28 lg:p-28 p-28 gap-6'>
            <div className='flex flex-col items-start justify-center' data-aos="zoom-in">
                <h1 className='flex items-center space-x-6 md:text-3xl sm:text-xl text-lg font-semibold text-shadow-lg dark:text-shadow-blue-600 text-[#010c84] dark:text-[#ffffff]' data-aos="fade-left">Hi, I am <FaFaceSmileWink className='text-sky-500 dark:text-sky-400 ml-6 md:text-5xl sm:text-3xl text-2xl' data-aos="fade-up"/></h1>
                <h1 className='md:text-6xl sm:text-4xl text-3xl font-bold text-shadow-lg text-[#010c84] dark:text-[#ffffff] dark:text-shadow-blue-600' data-aos="fade-right">Gowtham Nagaraj</h1>
                <div className='flex items-center space-x-6 mt-6'>
                    <Button className="bg-[#072a56] text-[#ffffff] hover:bg-[#465f7c] cursor-pointer" data-aos="fade-down">Download my resume <FaFileDownload /></Button>
                    <Button variant="outline" className="text-[#072a56] border-[#072a56] cursor-pointer dark:border-white dark:text-white" data-aos="fade-up">Contact Me</Button></div>
            </div>
            <div className='flex items-center justify-center w-full h-full' data-aos="flip-left">
                <Image
                    src={myImage}
                    alt='myImage'
                    className='bg-transparent shadow-2xl h-96 w-96 object-cover border-white border shadow-blue-500 rounded-2xl'
                />
            </div>
        </div>
    )
}

export default Hero;