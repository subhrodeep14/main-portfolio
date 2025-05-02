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
    description:"+91 9748728720",

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
import { useState } from "react";
const contact = () => {
 
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2cfb6c69-edd3-4566-9c91-34cd861f7140");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.section
    initial={{opacity:0}} animate={{opacity:1,transition:{duration:0.2,delay:1 ,ease:"easeIn"}}}
    className="py-6"
    >
      <div className="px-4 md:container mx-auto ">
        <div className="flex flex-col  xl:flex-row gap-[30px]">
         {/*from */}
        <div className="xl:w-[54%] order-2 xl:order-none ">
         <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl h-full" onSubmit={onSubmit}>
          <h3 className="text-4xl text-accent">Let's work together</h3>
          <p className="text-white/60"></p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Input name="firstname" type="text" placeholder='Firstname'/>
            <Input  name="lastname" type="text" placeholder='Lastname'/>
            <Input name="email" type="email" placeholder='Email address'/>
            <Input name="phone" type='number' placeholder='Phone Number'/>
          </div>
          <Select placeholder="" name="service">
            <SelectTrigger className="w-full" >
              <SelectValue placeholder='Select a Service'/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel value="service1" className="">Select a Service</SelectLabel>
                <SelectItem value='Web Deveopment'>Web Development</SelectItem>
                <SelectItem value='UI/UX Design'>UI/UX Design</SelectItem>
                <SelectItem value='Logo Design'>Logo Design</SelectItem>
                
              </SelectGroup>
            </SelectContent>
            </Select>

            <Textarea className='h-[200px]' type="message"  name="text" placeholder="Type your message here"/>

            <Button type="submit" size='md' className="bg-accent max-w-[300px]  hover:bg-accent/80 transition-all duration-300 ease-in-out">Send Message</Button>

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
                  <h3 className="text-xl max-w-[250px] ">{item.description}</h3>
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
