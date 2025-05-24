"use client"
import { Info } from "lucide-react"
import { FaHtml5,FaCss3,FaJs,FaFigma,FaNodeJs,FaReact} from "react-icons/fa"
import { SiTypescript ,SiPrisma,SiMongodb, SiPostgresql, SiGithub} from "react-icons/si";
import Image from "next/image"

import {SiTailwindcss,SiNextdotjs} from "react-icons/si"

const about={
  title:"About Me",
  description:"I am a passionate full-stack web developer with a keen interest in UI/UX design. I have hands-on experience in building responsive and user-friendly web applications using modern technologies.",
  info:[{
    fieldName:"Name",
    fieldValue:"Subhrodeep Acharya"
  }, {
    fieldName:"Email",
    fieldValue:"subhrodeep022@gmail.com"
  },
 {
    fieldName:"Freelance",
    fieldValue:"Available"
  },{
    fieldName:"Languages",
    fieldValue:"English,Bengali,Hindi"
  }]
}

const exprerience={
  icon:"/resume/badge.svg",
  title:" My Experience",
  description:" Gained hands-on experience in building full-stack applications, and confident in delivering similar projects end-to-end.",
  items:[{
    company:"Freelance",
    role:"Full Stack web Developer",
    duration:"2025-present",
  },
  
]
}

const education={
  icon:"/resume/cap.svg",
  title:" My Education",
  description:"Pre-final year Electronics and Communication engineering student with hands-on experience in full-stack web development and UI/UX design.",
  items:[{
    school:"Kalyani Government Engineering College",
    degree:"B.Tech in Electronics and Communication Engineering",
    duration:"2022-Present",}
    ,
    {
      school:"Sodepur High School",
      degree:"Higher Secondary",
      duration:"2020-2022",},{
        school:"Ramakrishna Mission boys' Home",
        degree:" Secondary",
        duration:"2010-2020",}
      
      ]

}

const skills={
  title:" My Skills",
  description:"Skilled in full-stack development with React, Node.js, Express, MongoDB, along with experience in Git, Postman, and responsive design.",
  info:[{
    icon:<FaHtml5/>,
    title:"HTML"
  },{
    icon:<FaCss3/>,
    title:"CSS"
  },{
    icon:<SiTypescript/>,
    title:"TypeScript"
  },{
    icon:<FaReact/>,
    title:"React"
  },{
    icon:<SiNextdotjs/>,
    title:"Next.js"
  },{
    icon:<FaNodeJs/>,
    title:"Node.js"
  },{
    icon:<SiTailwindcss/>,
    title:"Tailwind CSS"
  },{
    icon:<FaFigma/>,
    title:"Figma"
  },{
    icon:<SiPrisma/>,
    title:"Prisma"
  },{
    icon:<SiMongodb/>,
    title:"MongoDB"
  },{
    icon:<SiPostgresql/>,
    title:"PostgreSQL"
  },{
    icon:<SiGithub/>,
    title:"GitHub"
  }]
}


import {Tabs, TabsContent,TabsTrigger,TabsList} from "@/components/ui/tabs"

import {Tooltip,TooltipTrigger,TooltipContent,TooltipProvider} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const resume = () => {
  return (
    <motion.div 
    initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.2,delay:1 ,ease:"easeIn"}}}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 " >
      <div className="md:container mx-auto px-4">
        <Tabs
        defaultValue="about"
        className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="about" > About me</TabsTrigger>
          <TabsTrigger value="skills"> Skills</TabsTrigger>
          <TabsTrigger value="ex"> Exprerience</TabsTrigger>
            <TabsTrigger value="education"> Education</TabsTrigger>           
          </TabsList>
          <div className="min-h-[70vh] w-[350px] md:w-full">
          <TabsContent value="about" className="w-full text-center px-0 xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold text-accent ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1  gap-y-6 md:min-w-[750px] w-[300px] mx-auto px-0 text-left xl:mx-0">
                  {about.info.map((info,index)=>{
                    return <li key={index} className="flex items-center justify-start xl:justify-start gap-4">
                      <span className="text-accent">{info.fieldName}-</span>
                      <span className="text-lg max-w-[250px]">{info.fieldValue}</span>
                    </li>
                  })}
                </ul>
              </div>
          </TabsContent>
          <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold text-accent ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-7">
                  {skills.info.map((skill,index)=>{
                    return <li key={index} >
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] mb-8 rounded-xl flex items-center justify-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className=" capitalize">{skill.title}</p>
                            </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                    </li>
                  })}     
                </ul>
                </ScrollArea>
              </div>
          </TabsContent>
          <TabsContent value="ex" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{exprerience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{exprerience.description}</p>               
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {exprerience.items.map((item,index)=>{
                      return <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1 lg:items-start">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.role}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
          </TabsContent>
          
          
          <TabsContent value="education" className="w-full">
              <div  className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              </div>
              <div>
              <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-1  gap-[30px]">
                    {education.items.map((item,index)=>{
                      return <li key={index} className="bg-[#232329] h-[200px] mt-3 py-7 px-10 rounded-xl flex flex-col justify-center items-center gap-1 lg:items-start">
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[360px] min-h-[100px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.school}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              
              </div>
          </TabsContent>

          </div>
        </Tabs>
    

      </div>
    </motion.div>
  )
}

export default resume
