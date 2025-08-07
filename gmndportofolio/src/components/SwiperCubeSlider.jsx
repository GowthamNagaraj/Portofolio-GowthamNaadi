// app/components/SwiperCubeSlider.jsx or anywhere
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import Image from "next/image";

// import image1 from "@/assets/1.jpg"
// import image2 from "@/assets/2.jpg"
// import image3 from "@/assets/3.jpg"
// import image4 from "@/assets/4.jpg"

// const imagesPaths = [
//     { imagePath: image1 },
//     { imagePath: image2 },
//     { imagePath: image3 },
//     { imagePath: image4 },
// ]

const SwiperCubeSlider = ({imagesPaths}) => {
    return (
        <div className="flex items-center justify-center">
            <div className="">
                <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    autoplay={{
                        delay: 2000, // ⏱️ 2 seconds per slide
                        disableOnInteraction: false,
                    }}
                    modules={[EffectCube, Pagination, Autoplay]}
                    className="mySwiper xl:w-72 md:w-40 w-60 h-52 rounded-lg"
                >
                    {imagesPaths.map((src, index) => (
                        <SwiperSlide>
                            <Image
                                key={index}
                                src={src.imagePath}
                                alt={`slide-${index}`}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SwiperCubeSlider;
