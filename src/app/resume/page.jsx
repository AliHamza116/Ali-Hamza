"use client";

import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "I’m not just a developer — I’m a problem solver, a creative thinker, and a continuous learner. With a strong foundation in the MERN stack and real-world experience through projects, I bring ideas to life through clean, efficient, and scalable code.I don’t just build websites; I build solutions that make an impact. Whether it's debugging a tricky issue or crafting seamless user experiences, I bring energy, curiosity, and dedication to every line of code. I’m now looking for the next challenge where I can contribute, collaborate, and create with purpose.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ali Hamza",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 311 7192869",
    },
    {
      fieldName: "Experience",
      fieldValue: "Fresh",
    },
    {
      fieldName: "Email",
      fieldValue: "alihamzaafzal888@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistan",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu",
    },
  ],
};

// Experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I completed an intensive hands-on Full Stack Web Development course (MERN Stack) at Edify College of IT from November 2024 to March 2025, where I focused on building scalable full-stack applications using the MERN stack and Next.js. The course emphasized real-world, project-based learning and modern development practices. During this time, I built several key projects including an Auth MERN App (a secure authentication system using JWT, Express, and MongoDB), a Stock Management System (a complete inventory management solution with real-time CRUD operations), a Travel App (a feature-rich travel booking platform built with Next.js and Tailwind CSS), and a Hydro Landing Page (a clean, responsive product landing page showcasing UI/UX best practices). All projects are deployed and live on Vercel, highlighting my practical deployment and version control skills. I am currently seeking my first on-site or remote opportunity to apply and grow my skills in a professional environment.",
};

// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Recognized as a highly intelligent and exceptional student, consistently demonstrating brilliance, critical thinking, and academic excellence throughout the educational journey.",
  items: [
    {
      institution: "Edify College Of IT",
      degree: "Full Stack Web Development",
      duration: "2025",
    },
    {
      institution: "Govt. Municipal Graduate College (GCUF)",
      degree: "Pursuing BS Computer Science (BSCS)",
      duration: "2022 - 2026",
    },
    {
      institution: "Heaven Computer College Khurrianwala",
      degree: "Certification in MS Office",
      duration: "2021",
    },
    {
      institution: "Govt. Degree College Khurrianwala",
      degree: "FSC Pre-Engineering",
      duration: "2019 - 2021",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Proficient in modern web development technologies with a strong command over the MERN stack, Next.js, and responsive UI design.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiExpress />,
      name: "express.js",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 "
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
