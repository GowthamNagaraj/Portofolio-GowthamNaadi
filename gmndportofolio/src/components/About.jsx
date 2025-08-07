import Image from 'next/image'
import React from 'react'
import myImage from "@/assets/gm.png"
import { Button } from './ui/button'

const About = () => {
    return (
        <div className='md:px-28 max-w-full min-h-screen md:p-14 p-7 bg-[#010c84] dark:bg-sky-950' id='about'>
            <div className="grid md:grid-cols-3 grid-cols-1 rounded-full" data-aos="fade-up">
                <div className="p-7" data-aos="fade-left">
                    <Image
                        src={myImage}
                        alt='myImage'
                        className='rounded-2xl shadow-lg shadow-sky-400 w-2xl '
                        data-aos="fade-up"
                    />
                </div>
                <div className=" p-7 md:col-span-2 flex flex-col items-start justify-center xl:gap-6 md:gap-4 gap-6" data-aos="fade-right">
                    <h2 className='text-3xl font-semibold text-white text-shadow-lg text-shadow-blue-400' data-aos="fade-left">About me:</h2>
                    <p className='text-gray-400 xl:text-lg lg:text-xs md:text-xs text-xs' data-aos="fade-right">Hi, I’m Gowtham Nagaraj, a passionate Full Stack Developer with hands-on experience in MERN, Java technologies. I specialize in building complete web applications — from frontend design to backend logic and deployment.</p>
                    <p className='text-gray-400 xl:text-lg lg:text-xs md:text-xs text-xs' data-aos="fade-up">I enjoy solving real-world problems with clean, scalable code. I’m constantly learning and exploring new technologies to stay up to date. My goal is to grow as a developer and contribute to impactful products with a great team.</p>
                </div>
            </div>
        </div>
    )
}

export default About
