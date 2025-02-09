"use client";

import { AnimatePresence,motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Stair from './Stair';


const StairTransition = () => {
  const pathname=  usePathname();
  return (
    <>
    
    <AnimatePresence mode='wait'>
      <div key={pathname}>
        <div className='w-screen h-screen top-0 right-0 left-0 fixed pointer-events-none z-40 flex'>
            <Stair/>
        </div>
        <motion.div
            className='w-screen h-screen top-0  fixed pointer-events-none bg-primary'
            initial={{opacity:1}}
            animate={{
                opacity:0,
                transition:{delay:1,duration:0.4,ease:"easeInOut"}
            }}
        />
      </div>
    </AnimatePresence>
    </>
  )
}

export default StairTransition
