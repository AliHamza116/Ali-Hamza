"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaServer,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFramer,
  SiCplusplus,
  SiGraphql,
  SiPostgresql,
  SiShopify,
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
      fieldValue: "7+ Months",
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

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: (
    <ul className="list-disc pl-5 space-y-3">
      <li>
        <b>Kineteck — Full Time</b>
        <br />
        <b>
          Jr. MERN Stack Developer | Shopify App Developer (Nov 2025 – Present)
        </b>
        <br />
        Developed custom Shopify apps using React.js, Node.js, and Express.js.
        Integrated Shopify APIs (GraphQL) and worked with pgSQL database while
        writing clean, reusable code.
      </li>

      <li>
        <b>Three Arrows — Internship</b>
        <br />
        <b>Full Stack Web Developer (Aug 2025 – Oct 2025)</b>
        <br />
        Built responsive web applications with React & Next.js and developed
        REST APIs using Node.js and Express.js. Created reusable UI components.
      </li>

      <li>
        <b>Innoxitech — Internship</b>
        <br />
        <b>MERN Stack Developer (June 2025 – July 2025)</b>
        <br />
        Developed responsive web pages using React.js and Tailwind CSS,
        optimized performance, and followed clean front-end development
        practices.
      </li>
    </ul>
  ),
};

// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Recognized as a highly intelligent and exceptional student, consistently demonstrating brilliance, critical thinking, and academic excellence throughout the educational journey.",
  items: [
    {
      institution: "Govt. Municipal Graduate College (GCUF)",
      degree: "Pursuing BS Computer Science (BSCS)",
      duration: "2022 - 2026",
    },
    {
      institution: "Edify College Of IT",
      degree: "Full Stack Web Development",
      duration: "2025",
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

//  data
const skills = {
  title: "My skills",
  description:
    "Proficient in modern web & App development technologies with a strong command over the MERN stack, Next.js, and responsive UI design.",
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
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiFramer />,
      name: "Framer Motion",
    },
    {
      icon: <FaReact />,
      name: "react.js",
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
      icon: <FaServer />,
      name: "REST APIs",
    },
    {
      icon: <SiGraphql />,
      name: "graphql",
    },
    {
      icon: <SiMongodb />,
      name: "mongodb",
    },
    {
      icon: <SiPostgresql />,
      name: "pgsql database",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiShopify />,
      name: "shopify app",
    },
    {
      icon: <FaGithub />,
      name: "Github",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
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
