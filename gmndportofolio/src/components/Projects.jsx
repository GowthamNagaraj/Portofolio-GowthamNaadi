import React from 'react'
import SwiperCubeSlider from './SwiperCubeSlider'
import Link from 'next/link'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const projects = [
    { id: 1, projectName: "Eggs-Shop", projectDescription: "Eggshop Ecommerce website.", projectLink: "https://eggshopclient.vercel.app/" },
    { id: 2, projectName: "Portofolio", projectDescription: "Portofolio website.", projectLink: "https://portofolio-gowtham-naadi.vercel.app/" },
    { id: 3, projectName: "Portofolio", projectDescription: "Portofolio website.", projectLink: "https://portofolio-gowtham-naadi.vercel.app/" },
    { id: 4, projectName: "Eggs-Shop", projectDescription: "Eggshop Ecommerce website.", projectLink: "https://eggshopclient.vercel.app/" },
    { id: 5, projectName: "Portofolio", projectDescription: "Portofolio website.", projectLink: "https://portofolio-gowtham-naadi.vercel.app/" },
    { id: 6, projectName: "Portofolio", projectDescription: "Portofolio website.", projectLink: "https://portofolio-gowtham-naadi.vercel.app/" },
]

const Projects = () => {
    return (
        <div className='md:px-28 max-w-full min-h-screen md:p-14 p-7 bg-[#010c84] dark:bg-sky-950' id='projects' data-aos="fade-up">
            <h2 className="text-3xl font-semibold text-center text-white text-shadow-lg text-shadow-blue-400" data-aos="fade-left">Projects</h2>
            <div className="shadow-2xl mt-16 shadow-sky-400 rounded-2xl bg-transparent border-2 border-blue-400 md:mx-20 md:p-2 grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 justify-items-center gap-6" data-aos="fade-down">
                {
                    projects.map((item, i) => (
                        <Card className="w-full max-w-sm" key={i} data-aos="fade-right">
                            <CardHeader>
                                <CardTitle className='text-xl'>{item.projectName}</CardTitle>
                                <CardDescription className='md:text-[10px]'>
                                    {item.projectDescription}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <SwiperCubeSlider />
                            </CardContent>
                            <CardFooter className="flex-col gap-2">
                                <Link href={item.projectLink} target='_blank'>Link</Link>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
