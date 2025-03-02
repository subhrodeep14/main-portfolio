import { Info } from "lucide-react"
import { FaHtml5,FaCss3,FaJs,FaFigma,FaNodeJs,FaReact} from "react-icons/fa"

import {SiTailwindcss,SiNextdotjs} from "react-icons/si"

const about=[{
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
}]

const exprerience=[{
  icon:"/resume/badge.svg",
  title:" My Experience",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem nesciunt temporibus, beatae voluptatem nulla optio, facilis consectetur minima quaerat ducimus et",

}]

const education=[{
  icon:"/resume/cap.svg",
  title:" My Education",
  description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rem nesciunt temporibus, beatae voluptatem nulla optio, facilis consectetur minima quaerat ducimus et",

}]

const skills=[{
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
}]


import {Tabs, TabsContent,TabsTrigger,TabsList} from "@/components/ui/tabs"

import {Tooltip,TooltipTrigger,TooltipContent,TooltipProvider} from "@/components/ui/tooltip"

import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"

const resume = () => {
  return (
    <motion.div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 " initial={{opacity:0}} animate={{opacity:1,transition:{
      ease:"easeIn",duration:0.4, delay:2.4
    }}}>
      resume page
    </motion.div>
  )
}

export default resume
