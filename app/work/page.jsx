"use client";

import { motion } from 'framer-motion';

import React,{useState} from 'react';
import {Swiper,SwiperSlide} from "swiper/react";
import "swiper/css";

import {Tooltip,TooltipContent,TooltipProvider,TooltipTrigger} from "@/components/ui/tooltip";

import Link from 'next/link';
import Image from 'next/image';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import WorkSliderBtns from '@/components/WorkSliderBtns';


const projects=[
    {
  num:"01",
  category:"Fullstack",
  title:"project 2",
  description:"A full-stack application built with Next.js, TypeScript, and Tailwind CSS,prisma and postgresql featuring a responsive design and a user-friendly interface.",
  stack:[{name:"Next.js"},{name:"TypeScript"},{name:"Tailwindcss"},{name:"Prisma"},{name:"PostgreSQL"}],
  image:"/project2.png",
  live:"https://www.therobosphere.co.in/",
  github:"https://github.com/subhrodeep14/Robo-Sphere"
}, 
  {
  num:"02",
  category:"Fullstack",
  title:"project 1",
  description:"A full-stack application built with React.js and Tailwind CSS featuring a responsive design and a user-friendly interface.",
  stack:[{name:"React.js"},{name:"Tailwindcss"}],
  image:"/project1.png",
  live:"https://real-estate-nine-blush.vercel.app/",
  github:"https://github.com/subhrodeep14/Real-Estate"
},

]



const work = () => {

  const[project,setProject]=useState(projects[0]);

  const handleSlideChange=(swiper)=>{
    const currentIndex =swiper.activeIndex;

    setProject(projects[currentIndex]);
  }
  return (
   < motion.section 
   initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.2,delay:1 ,ease:"easeIn"}}}
   className='min-h-[80vh] flex flex-col justify-center'>
      <div className="px-4 md:container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-[350px] xl:w-[40%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>

              <p className='text-white/60'>{project.description}</p>

              <ul className='gap-4 grid grid-cols-2 md:grid-cols-3 '>
                {project.stack.map((item,index)=>{
                  return <li key={index} className='text-xl text-accent ' >{item.name}
                  {index !== project.stack.length -1 && ","}
                  </li>
                })}
              </ul>

              <div className='border border-white/20 '></div>
                  <div className='flex items-center gap-4'>
                    <Link href={project.live} target='_blank' rel='noreferrer'>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:rotate-45 transition-all duration-500'>
                              <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
                            </TooltipTrigger>
                            <TooltipContent >
                              <p>Live project</p>
                            </TooltipContent>
                          </Tooltip>
                          
                          </TooltipProvider> 
                    </Link>
                    <Link href={project.github} target='_blank' rel='noreferrer'>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group '>
                              <BsGithub className='text-white text-3xl group-hover:text-accent'/>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Github</p>
                            </TooltipContent>
                          </Tooltip>
                          
                          </TooltipProvider> 
                    </Link>
                  </div>
              
            </div>
          </div>
          <div className='w-[350px] xl:w-[60%]'>
                <Swiper spaceBetween={30}
                slidesPerView={1}
                className='xl:h-[520px] mb-12'
                onSlideChange={handleSlideChange}
                pagination={false}
                navigation={false}
                
                >
                  {projects.map((project,index)=>{
                    return <SwiperSlide key={index} className='w-full' > 
                     <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                     <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 '></div>
                     <div className='relative w-full h-full'>
                      <Image src={project.image} alt="" fill className=' md:object-fit object-cover  '/>
                     </div>
                     </div></SwiperSlide>
                  })}

                  <WorkSliderBtns containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none' btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all' />
                </Swiper>

          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default work
