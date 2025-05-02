"use client";

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";


const PageTransistion = ({children}) => {
    const pathname=usePathname();
  return (
    
        <div key={pathname}>
           
        {children}
        </div>
      
   
  )
}

export default PageTransistion
