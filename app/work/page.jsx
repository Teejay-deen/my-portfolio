"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipContent,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import { MdCategory } from "react-icons/md";
import { Projector } from "lucide-react";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet tempore aut animi.",

    stack: [{ name: "Html 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/Teejay-deen?tab=repositories",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet tempore aut animi.",

    stack: [
      { name: "TypeScript" },
      { name: "NextJs" },
      { name: "Tailwind.CSS" },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "https://github.com/Teejay-deen?tab=repositories",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet tempore aut animi.",

    stack: [
      { name: "TypeScript" },
      { name: "ReactJs" },
      { name: "Tailwind.Css" },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "https://github.com/Teejay-deen?tab=repositories",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;

    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="mx-auto container">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-emerald-500 transition-all duration-500 capitalize">
                {project.category} Project jhjgj
              </h2>

              <p>{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-4xl text-emerald-500">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full justify-center items-center flex bg-white/5 group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-emerald-500" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p className="bg-white text-black px-2 rounded-lg">
                          Live Project
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full justify-center items-center flex bg-white/5 group">
                        <BsGithub className="text-white text-3xl group-hover:text-emerald-500" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p className="bg-white text-black px-2 rounded-lg">
                          Github repository
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[520px] mb-12"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide className="w-full" key={index}>
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>

                      {/* image */}
                      <div className="w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="project photo"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* slide button */}

              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 justify-between w-full xl:w-max xl:justify-none" btnStyles="bg-emerald-500 hover:bg-text-emerald-500 text-black text-[22px] w-[44px] h-[44px] justify-center items-center transition-all  flex " />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
