import Image from 'next/image'
import React from 'react'
import myImage from "@/assets/gm.png"

const About = () => {
    return (
        <div className='md:px-28 max-w-full md:p-14 p-7 bg-sky-800 dark:bg-sky-950' id='about'>
            <div className="grid md:grid-cols-3 grid-cols-1 rounded-full">
                <div className="p-7">
                    <Image
                        src={myImage}
                        alt='myImage'
                        className='rounded-2xl shadow-lg shadow-sky-400 w-2xl '
                    />
                </div>
                <div className=" p-7 md:col-span-2 flex flex-col items-start justify-center xl:gap-6 md:gap-4 gap-6">
                    <h2 className='text-3xl font-semibold text-white text-shadow-lg text-shadow-blue-400'>About me:</h2>
                    <p className='text-gray-400 xl:text-lg lg:text-xs md:text-xs text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima, laboriosam ad, laborum voluptas hic quaerat totam deserunt fugiat illum qui officia aperiam at numquam neque praesentium vitae in suscipit!
                    Expedita doloremque non iusto ad ea omnis itaque quae qui. Vel explicabo quo delectus eveniet cumque, itaque voluptatibus nulla alias beatae autem omnis unde libero voluptatum optio quibusdam quaerat nam!</p>
                    <p className='text-gray-400 xl:text-lg lg:text-xs md:text-xs text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo porro iste perspiciatis doloribus! Blanditiis, placeat sequi quidem alias, reprehenderit cumque dolores ipsam doloribus excepturi est quia, dolorum laboriosam vitae mollitia?</p>
                </div>
            </div>
        </div>
    )
}

export default About
