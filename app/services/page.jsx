"use client";

import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";

const services=[{
  num:'01',
  title:" Full Stack Web Devlopment",
  description:" Complete responsive web design and development",
  href:"/contact"
},
{
  num:'02',
  title:"UI/UX Design",
  description:"Beautiful and responsive UI/UX design",
  href:"/contact"
},
{
  num:'03',
  title:"SEO Optimization",
  description:"SEO optimization for your website",
  href:"/contact"
}];

const Services = () => {
  return (
   <section className="flex flex-col justify-center min-h-[80vh] py-12  xl:py-0">
    <div className=" mx-auto md:container px-4">
      <motion.div
      className=" grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.2,delay:1 ,ease:"easeIn"}}}>
        {services.map((service,index)=>{
          return <div key={index}
          className=" flex flex-1 flex-col justify-center gap-6 group">
            <div className=" w-full flex justify-between items-center">
              <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500" >{service.num}</div>
              <Link className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45" href={service.href}>
              <BsArrowDownRight className="text-primary text-3xl"/>
              </Link>
            </div>
            <h2 className="text-[42px] font-extrabold leading-none text-white group-hover:text-accent transition-all duration-500"
            >{service.title}</h2>
            <p className="text-white/60">{service.description}</p>
            <div className=" border-b border-white/20 w-full"></div>
          </div>
        })}
      </motion.div>
    </div>
   </section>
  )
}

export default Services
