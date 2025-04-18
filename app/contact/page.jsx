"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info=[
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"+91 1234567890",

  },
  {
    icon:<FaEnvelope/>,
    title:"Email",
    description:"subhrodeep022@gmail.com",
    
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:"Address",
    description:"Kolkata,India",
    
  }
]

import { motion } from "framer-motion";
const contact = () => {
  return (
    <motion.section
    initial={{opacity:0}} animate={{opacity:1,transition:{
      ease:"easeIn",duration:0.4, delay:2.4
    }}}
    className="py-6"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col  xl:flex-row gap-[30px]">
         {/*from */}
        <div className="xl:h-[54%] order-2 xl:order-none">
         <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl h-full">
          <h3 className="text-4xl text-accent">Let's work together</h3>
          <p className="text-white/60">Lorem, ipsum dolor sit amet consectetur adipisicing elit.aperiam culpa ullam temporibus nemo suscipit harum? Ex.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input type="firstname" placeholder='Firstname'/>
            <Input type="lastname" placeholder='Lastname'/>
            <Input type="email" placeholder='Email address'/>
            <Input type="phone" placeholder='Phone Number'/>
          </div>
         </form>
        </div>
        {/* info */}
        <div className="flex flex-1 items-center xl:justify-end mb-8 xl:mb-0 order-1 xl:order-none">
          info
        </div>
        </div>
      </div>

    </motion.section>
  )
}

export default contact
