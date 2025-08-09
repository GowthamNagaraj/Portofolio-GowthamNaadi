"use client";
import React from "react";
import SwiperCubeSlider from "./SwiperCubeSlider";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import p1 from "@/assets/projects/portofolio/p1.png";
import p2 from "@/assets/projects/portofolio/p2.png";
import p3 from "@/assets/projects/portofolio/p3.png";
import p4 from "@/assets/projects/portofolio/p4.png";
import p5 from "@/assets/projects/portofolio/p5.png";

import e1 from "@/assets/projects/EggsEcom/e1.png";
import e2 from "@/assets/projects/EggsEcom/e2.png";
import e3 from "@/assets/projects/EggsEcom/e3.png";
import e4 from "@/assets/projects/EggsEcom/e4.png";
import e5 from "@/assets/projects/EggsEcom/e5.png";
import e6 from "@/assets/projects/EggsEcom/e6.png";
import e7 from "@/assets/projects/EggsEcom/e7.png";
import e8 from "@/assets/projects/EggsEcom/e8.png";
import e9 from "@/assets/projects/EggsEcom/e9.png";

import c1 from "@/assets/projects/Calc/c1.png"
import c2 from "@/assets/projects/Calc/c2.png"

import t1 from "@/assets/projects/TodoList/t1.png"
import t2 from "@/assets/projects/TodoList/t2.png"
import t3 from "@/assets/projects/TodoList/t3.png"
import t4 from "@/assets/projects/TodoList/t4.png"
import t5 from "@/assets/projects/TodoList/t5.png"


// Shared image array
const PortofolioImages = [
  { imagePath: p1 },
  { imagePath: p2 },
  { imagePath: p3 },
  { imagePath: p4 },
  { imagePath: p5 },
];

const eggsShopEcomImages = [
  { imagePath: e1 },
  { imagePath: e2 },
  { imagePath: e3 },
  { imagePath: e4 },
  { imagePath: e5 },
  { imagePath: e6 },
  { imagePath: e7 },
  { imagePath: e8 },
  { imagePath: e9 },
];

const todoListAppImages = [
  { imagePath: t1 },
  { imagePath: t2 },
  { imagePath: t3 },
  { imagePath: t4 },
  { imagePath: t5 },
];

const calcImages = [
  { imagePath: c1 },
  { imagePath: c2 },
];

const projects = [
  {
    id: 1,
    projectName: "Eggs-Shop",
    projectDescription: "Eggshop Ecommerce website.",
    projectLink: "https://eggshopclient.vercel.app/",
    slidePaths: eggsShopEcomImages,
  },
  {
    id: 2,
    projectName: "Portfolio",
    projectDescription: "Portfolio website.",
    projectLink: "https://portofolio-gowtham-naadi.vercel.app/",
    slidePaths: PortofolioImages,
  },
  {
    id: 3,
    projectName: "TodoApp",
    projectDescription: "Task Added",
    projectLink: "https://gmnd-todo-app.vercel.app/",
    slidePaths: todoListAppImages,
  },
  {
    id: 4,
    projectName: "Calculator",
    projectDescription: "Calc your sums",
    projectLink: "https://gmnd-calculator.vercel.app/",
    slidePaths: calcImages,
  },
];

const Projects = () => {
  return (
    <div
      className="md:px-28 max-w-full min-h-screen md:p-14 p-7 bg-[#010c84] dark:bg-sky-950"
      id="projects"
      data-aos="fade-up"
    >
      <h2
        className="text-3xl font-semibold text-center text-white drop-shadow-md"
        data-aos="fade-left"
      >
        Projects
      </h2>

      <div
        className="shadow-2xl mt-16 shadow-sky-400 rounded-2xl bg-transparent border-2 border-blue-400 md:mx-20 md:p-2 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 justify-items-center gap-6"
        data-aos="fade-down"
      >
        {projects.map((item, i) => (
          <Card className="w-full max-w-sm" key={i} data-aos="fade-right">
            <CardHeader>
              <CardTitle className="text-xl">{item.projectName}</CardTitle>
              <CardDescription className="text-xs">
                {item.projectDescription}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <SwiperCubeSlider imagesPaths={item.slidePaths} />
            </CardContent>

            <CardFooter className="flex-col gap-2">
              <Link
                href={item.projectLink}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Live
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
