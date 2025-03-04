"use client"
import { Info } from "lucide-react"
import { FaHtml5,FaCss3,FaJs,FaFigma,FaNodeJs,FaReact} from "react-icons/fa"

import {SiTailwindcss,SiNextdotjs} from "react-icons/si"

const about={
  title:"About Me",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem nesciunt temporibus, beatae voluptatem nulla optio, facilis consectetur minima quaerat ducimus et",
  info:[{
    fieldName:"Name",
    fieldValue:"Subhrodeep Acharya"
  },
  {
    fieldName:"Email",
    fieldValue:"subhrodeepacharya14@gmail.com"
  },{
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
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem nesciunt temporibus, beatae voluptatem nulla optio, facilis consectetur minima quaerat ducimus et",
  items:[{
    company:"Google",
    role:"Frontend Developer",
    duration:"2019-2021",
  },
  {
    company:"Google",
    role:"Frontend Developer",
    duration:"2019-2021",
  },
  {
    company:"Google",
    role:"Frontend Developer",
    duration:"2019-2021",
  },
  {
    company:"Google",
    role:"Frontend Developer",
    duration:"2019-2021",
  },
  {
    company:"Google",
    role:"Frontend Developer",
    duration:"2019-2021",
  },
  {
    company:"Google",
    role:"Frontend Developer",
    duration:"2019-2021",
  },
]
}

const education=[{
  icon:"/resume/cap.svg",
  title:" My Education",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem nesciunt temporibus, beatae voluptatem nulla optio, facilis consectetur minima quaerat ducimus et",

}]

const skills={
  title:" My Skills",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem nesciunt temporibus, beatae voluptatem nulla optio, facilis consectetur minima quaerat ducimus et",
  info:[{
    icon:<FaHtml5/>,
    title:"HTML"
  },{
    icon:<FaCss3/>,
    title:"CSS"
  },{
    icon:<FaJs/>,
    title:"JavaScript"
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
  }]
}


import {Tabs, TabsContent,TabsTrigger,TabsList} from "@/components/ui/tabs"

import {Tooltip,TooltipTrigger,TooltipContent,TooltipProvider} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const resume = () => {
  return (
    <motion.div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 " initial={{opacity:0}} animate={{opacity:1,transition:{
      ease:"easeIn",duration:0.4, delay:2.4
    }}}>
      <div className=" container mx-auto">
        <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="exprerience">Exprerience</TabsTrigger>
          <TabsTrigger value="skills"> Skills</TabsTrigger>
            <TabsTrigger value="about" > About me</TabsTrigger>
            
            <TabsTrigger value="education"> Education</TabsTrigger>
            
          </TabsList>
          <div className="min-h-[70vh] w-full">
          <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{exprerience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{exprerience.description}</p>
                
                <ScrollArea className="h-[400px]">
                  <ul>
                    {exprerience.items.map((item,index)=>{
                      return <li key={index} className="bg-[#232329 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1 lg:items-start">
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
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul>
                    {skills.info.map((item,index)=>{
                      return <li>
                        <span>{item.icon}</span>
                      </li>

                    })}
                  </ul>

                </ScrollArea>
                
              </div>
            </TabsContent>
            <TabsContent value="about" className="w-full">
              About
              </TabsContent>
              <TabsContent value="education" className="w-full">
              education
              </TabsContent>

          </div>
        </Tabs>
    

      </div>
    </motion.div>
  )
}

export default resume
