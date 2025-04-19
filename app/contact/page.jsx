"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info=[
  {
    icon:<FaPhoneAlt/>,
    title:"Phone",
    description:"+91 974872872",

  },
  {
    icon:<FaEnvelope/>,
    title:"Email",
    description:"subhrodeepacaharya19@gmail.com",
    
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
      <div className="px-7 md:container mx-auto ">
        <div className="flex flex-col  xl:flex-row gap-[30px]">
         {/*from */}
        <div className="xl:w-[54%] order-2 xl:order-none ">
         <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl h-full">
          <h3 className="text-4xl text-accent">Let's work together</h3>
          <p className="text-white/60">Lorem, ipsum dolor sit amet consectetur adipisicing elit.aperiam culpa ullam temporibus nemo suscipit harum? Ex.</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Input type="firstname" placeholder='Firstname'/>
            <Input type="lastname" placeholder='Lastname'/>
            <Input type="email" placeholder='Email address'/>
            <Input type="phone" placeholder='Phone Number'/>
          </div>
          <Select placeholder="">
            <SelectTrigger className="w-full" >
              <SelectValue placeholder='Select a Service'/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel value="service1" className="">Select a Service</SelectLabel>
                <SelectItem value='est'>Web Development</SelectItem>
                <SelectItem value='cst'>UI/UX Design</SelectItem>
                <SelectItem value='mst'>Logo Design</SelectItem>
                
              </SelectGroup>
            </SelectContent>
            </Select>

            <Textarea className='h-[200px]' placeholder="Type your message here"/>

            <Button size='md' className="bg-accent max-w-[300px]  hover:bg-accent/80 transition-all duration-300 ease-in-out">Send Message</Button>

         </form>
        </div>
        {/* info */}
        <div className="flex flex-1 items-center xl:justify-between mb-8 xl:mb-0 order-1 xl:order-none">
          <ul className="flex flex-col gap-4 xl:gap-8">
            {info.map((item,index)=>{
              return <li key={index} className="flex items-center gap-6 mb-8 xl:mb-0">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] flex items-center justify-center rounded-xl bg-[#27272c] text-accent ">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl ">{item.description}</h3>
                </div>
              </li>
            })}
          </ul>
        </div>
        </div>
      </div>

    </motion.section>
  )
}

export default contact
