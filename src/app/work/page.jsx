"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    title: "TrustDash : AI Badges & Summary",
    category: "Shopify App",
    description:
      "	𝙏𝙧𝙪𝙨𝙩𝘿𝙖𝙨𝙝 a Project by 𝙆𝙞𝙣𝙚𝙩𝙚𝙘𝙠 𝙎𝙤𝙡𝙪𝙩𝙞𝙤𝙣𝙨, an AI-powered Shopify app developed at 𝙆𝙞𝙣𝙚𝙩𝙚𝙘𝙠 𝙎𝙤𝙡𝙪𝙩𝙞𝙤𝙣𝙨 alongside my team. Currently live, helping merchants boost trust, conversions, and revenue.",
    stack: [
      { name: "Html 5" },
      { name: "CSS" },
      { name: "React.js" },
      { name: "Polaris" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "GraphQL" },
      { name: "PostgreSQL" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://apps.shopify.com/trustdash?search_id=0f1d09d5-72af-44f0-b01f-a8e5cc055a4a&surface_detail=trustdash&surface_inter_position=1&surface_intra_position=1&surface_type=search",
  },
  {
    num: "02",
    title: "Smart Stock AI",
    category: "Inventory Management System",
    description:
      "𝙎𝙢𝙖𝙧𝙩𝙎𝙩𝙤𝙘𝙠 𝘼𝙄, is our Final Year Project (FYP), an AI-powered inventory management system built with the 𝙈𝙀𝙍𝙉 𝙎𝙩𝙖𝙘𝙠 and AI Models. It combines real-time market intelligence with inventory analytics to recommend which products businesses should invest in.",
    stack: [
      { name: "React.js" },
      { name: "MUI" },
      { name: "Framer Motion" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Mongodb" },
      { name: "Gemini AI" },
      { name: "Tavily" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://smartstockai-fyp.vercel.app/",
  },
  {
    num: "03",
    title: "Travel App",
    category: "Travel App",
    description:
      "A fully responsive and visually appealing travel App built with Next.js and Tailwind CSS, focusing on intuitive UI/UX and smooth navigation.",
    stack: [
      { name: "Html 5" },
      { name: "Tailwind.css" },
      { name: "Next.js 15" },
    ],
    // image: "/assets/work/thumb3.png",
    live: "https://travel-app-phi.vercel.app/",
    github: "https://github.com/AliHamza116/travel_app.git",
  },
  {
    num: "04",
    title: "Marketing app",
    category: "Zeta Marketing Theme",
    description:
      "A responsive, dark-themed marketing web application built with React.js and Tailwind CSS during my time at Three Arrows Company.",
    stack: [{ name: "Html 5" }, { name: "Tailwind.css" }, { name: "React.js" }],
    image: "/assets/work/thumb4.png",
    live: "https://zeta-dark.vercel.app/",
    github: "https://github.com/AliHamza116/Zeta.git",
  },
  // {
  //   num: "04",
  //   category: "Stock Management System",
  //   title: "Stock Management System",
  //   description:
  //     "A full stack project built with Next.js, providing robust functionality for real-time inventory management and seamless CRUD operations.",
  //   stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Next.js 15" }],
  //   image: "/assets/work/thumb4.png",
  //   live: "https://deploy-stock-management-system.vercel.app/",
  //   github: "https://github.com/AliHamza116/deploy-stock-management-system.git",
  // },
  // {
  //   num: "04",
  //   category: "Auth MERN App",
  //   title: "Auth MERN App",
  //   description:
  //     "A full stack authentication system built with MongoDB, Express, React, and Node.js, implementing secure login and signup functionality using JWT and password hashing.",
  //   stack: [
  //     { name: "Html 5" },
  //     { name: "Css 3" },
  //     { name: "React.js" },
  //     { name: "Node.js" },
  //     { name: "Express.js" },
  //     { name: "MongoDB" },
  //   ],
  //   image: "/assets/work/thumb4.png",
  //   live: "https://deploy-mern-app-4rkf.vercel.app/signup",
  //   github: "https://github.com/AliHamza116/deploy-mern-app.git",
  // },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
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
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* project title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project category */}
              <h3 className="text-[20px] font-semibold text-accent/80 capitalize -mt-4">
                {project.category}
              </h3>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <React.Fragment key={index}>
                    <li className="text-xl text-accent inline">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                    {/* Break line after React.js */}
                    {item.name === "React.js"}
                  </React.Fragment>
                ))}
              </ul>

              {/* bordrer */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4 ">
                {/* live project button */}
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project */}
                {project.github && (
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnsStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
