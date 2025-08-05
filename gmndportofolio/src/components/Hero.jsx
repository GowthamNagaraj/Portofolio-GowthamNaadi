"use client"
import Image from 'next/image';
import React from 'react'
import { FaFaceSmileWink } from "react-icons/fa6";
import { FaFileDownload } from "react-icons/fa";
import myImage from "@/assets/gm.png"
import { Button } from './ui/button';

const Hero = () => {
    return (
        <div className='max-w-full grid grid-cols-1 md:grid-cols-2 justify-items-center  px-7 md:p-28 lg:p-28 p-28 gap-6' id='home'>
            <div className='flex flex-col items-start justify-center w-full sm:p-7' data-aos="zoom-in">
                <h1 className='flex items-center space-x-6 xl:text-3xl lg:text-2xl sm:text-xl text-lg font-semibold text-shadow-lg dark:text-shadow-blue-600 text-[#010c84] dark:text-[#ffffff]' data-aos="fade-left">Hi, I am <FaFaceSmileWink className='text-sky-500 dark:text-sky-400 ml-6 md:text-5xl sm:text-3xl text-2xl' data-aos="fade-up"/></h1>
                <h1 className='xl:text-6xl lg:text-4xl md:text-3xl sm:text-4xl text-3xl font-bold text-shadow-lg text-[#010c84] dark:text-[#ffffff] dark:text-shadow-blue-600' data-aos="fade-right">Gowtham Nagaraj</h1>
                <div className='flex sm:items-center md:items-start items-start space-x-6 mt-6 lg:flex-row md:flex-col '>
                    <Button className="bg-[#072a56] text-[#ffffff] hover:bg-[#465f7c] cursor-pointer text-xs" data-aos="fade-down">Download my resume <FaFileDownload /></Button>
                    <Button variant="outline" className="text-[#072a56] border-[#072a56] cursor-pointer text-xs dark:border-white dark:text-white" data-aos="fade-up">Contact Me</Button></div>
            </div>
            <div className='flex items-center justify-center w-full h-full' data-aos="flip-left">
                <Image
                    src={myImage}
                    alt='myImage'
                    className='bg-transparent shadow-2xl xl:h-96 xl:w-96 md:h-60 md:w-60 h-96 w-96 object-cover rounded-full shadow-blue-500'
                />
            </div>
        </div>
    )
}

export default Hero;