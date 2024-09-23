"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data

const about = {
  title: "About me",
  description:
    " Hi, I'm Jimoh Tajudeen, a passionate Frontend Developer with a solid foundation in building responsive, accessible  and visually appealing web applications.  With a deep understanding of modern frontend technologies like HTML5, CSS3, TailwindCSS, Boostrap, JavaScript(ES6+) and popular frameworks like React.js and Next.js, I create intuitive and dynamic user interfaces that enhance user experience  ",

  info: [
    {
      fieldName: "Name:",
      fieldValue: "Jimoh Tajudeen",
    },
    {
      fieldName: "Phone:",
      fieldValue: "(+234) 814 466 9906",
    },
    {
      fieldName: "Experience:",
      fieldValue: "4+ years",
    },
    {
      fieldName: "Twitter:",
      fieldValue: "@m_modeller",
    },
    {
      fieldName: "Nationality:",
      fieldValue: "Nigeria",
    },
    {
      fieldName: "Email:",
      fieldValue: "Jimoh.tajudeen1017@gmail.com",
    },
    {
      fieldName: "Freelance:",
      fieldValue: "Available",
    },
    {
      fieldName: "Language:",
      fieldValue: "English, Yoruba, Hausa",
    },
  ],
};

// experience data

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "I am a dedicated frontend developer with expertise in building user interfaces that are responsive, intuitive, and visually appealing. Over the years, I have developed a solid foundation in HTML5,CSS3, JavaScript (ES6+), and modern frontend libraries and frameworks such as React.js, or Next.js.",
  Items: [
    {
      company: "Byna Solution Inc.",
      Posiion: "Front end Developer",
      duration: "2022- Present",
    },
    {
      company: "NitHub Unilag",
      Posiion: "Front end Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "Real Estate App",
      Posiion: "Freelance Web Developer",
      duration: "2021-2022",
    },
    {
      company: "Tech Academy",
      Posiion: "Teaching Assitant",
      duration: "2019-2021",
    },
    {
      company: "Digital Agency",
      Posiion: "Front end Developer",
      duration: "2021-2022",
    },
    {
      company: "Software Developer Firm",
      Posiion: "Junior Developer",
      duration: "2019-2020",
    },
  ],
};

//education data

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Gained a strong foundation in Mathematics and Computer Science fundamentals, Web Development, Software Engineering, etc..",

  Items: [
    {
      institution: "Kwara State College of Education, Ilorin",
      degree: "NCE in Mathematics & Computer Science",
      duration: "2015",
    },
    {
      institution: "Ibrahim Badamasi Babangida University, Lapai",
      degree: "Bsc in Mathematics",
      duration: "2021",
    },
    {
      institution: "Kwara State University, Malete",
      degree: "Msc in Mathematic",
      duration: " 2024",
    },
    {
      institution: "Online Course Platform ",
      degree: "Front end web Development Bootcamp",
      duration: " 2022",
    },
    {
      institution: "Online Course ",
      degree: "Programming Course",
      duration: " 2020-2021",
    },
    {
      institution: "Tech Institute ",
      degree: "Certified Web Developer",
      duration: " 2020",
    },
  ],
};

//skill data

const skill = {
  title: "My skills",
  description:
    "Frontend Development: Proficient in HTML5, CSS3, and JavaScript (ES6+) with expertise in React.js and Redux for building responsive, dynamic web applications. API Integration: Skilled in working with RESTful APIs and GraphQL, ensuring smooth frontend-backend integration.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaJs />,
      name: "Vanilla JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.Js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.Js",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-12 xl:py-0  min-h-[80vh] flex items-center justify-center"
    >
      <div className="container mx-auto ">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row  gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger className="" value="experience">
              Experience
            </TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skill">Skill</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>

                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.Items.map((items, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-emerald-500">
                            {items.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {items.Posiion}
                          </h3>

                          <div className="flex gap-3 item">
                            <span className="w-[6px] h-[6px] rounded-full bg-emerald-500 mt-4"></span>
                            <p className="text-white/60"> {items.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>

                <ScrollArea className="h-[300px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.Items.map((items, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-emerald-500">
                            {items.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {items.degree}
                          </h3>

                          <div className="flex gap-3 item">
                            <span className="w-[6px] h-[6px] rounded-full bg-emerald-500 mt-4"></span>
                            <p className="text-white/60">
                              {" "}
                              {items.institution}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skill" className="w-full h-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="dlex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skill.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                    {skill.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skill.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group ">
                              <div className="text-6xl group-hover:text-emerald-500 transition-all duration-300">
                                {item.icon}
                              </div>
                            </TooltipTrigger>

                            <TooltipContent>
                              <p className="capitalize">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
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
                        className="flex justify-center gap-4 items-start xl:justify-start"
                      >
                        <span className="text-white/60 text-xl">{item.fieldName}</span>
                        <span className="text-md">{item.fieldValue}</span>
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
