"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{
        deley:2,
        duration:4,
        ease:"easeIn",
      }}}>
        <motion.div 
        initial={{opacity:0}} animate={{opacity:1,transition:{
          deley:0.4,
          duration:2,
          ease:"easeInOut",
        }}}
        className="w-[265px] h-[265px] xl:w-[398px] xl:h-[398px] mix-blend-lighten absolute overflow-hidden rounded-full top-0 left-0 z-10 object-fit-cover">
        <Image
          quality={100}
          width={500}
          height={500}
          
          alt=""
          className="object-contain overflow-hidden "
         src="/profile3.png"/>

        </motion.div>

        <motion.svg className="w-[300px] xl:w-[450px] h-[300px] xl:h-[450px]"
        fill='transparent'
        xmlns='http://www.w3.org/2000/svg'
        viewBox="0 0 450 450"
        >
          <motion.circle cx='200' cy='200' r='200' stroke='#00ff99' strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' initial={{strokeDasharray:"24 10 0 0"}}
          animate={{
            strokeDasharray:["15 120 25 25","16 25 92 72","4 250 22 22"],
            rotate:[120,360],
            
          }} 
          transition={{
            duration:20,
            repeat:Infinity,
            repeatType:"reverse"
          }}/>
        </motion.svg>
       
      </motion.div>
    </div>
  )
}

export default Photo
