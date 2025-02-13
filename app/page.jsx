
import Photo from "@/components/Photo"
import Socials from "@/components/Socials"
import Stats from "@/components/Stats"
import { Button } from "@/components/ui/button"
import {FiDownload} from "react-icons/fi"


const Home = () => {
  return (
    <section className="h-screen ">
      <div className=" container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-12 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Devloper</span>
            <h1 className="h1">
              Hello I'm <br/> <span className="text-accent text-[100px]">Subhrodeep Acharya</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegent digital experience and I am proficient in various programing languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="flex gap-2 items-center uppercase">
                <span>Download cv</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyle="flex gap-6" iconStyle="w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent text-xl hover:bg-accent hover:text-primary transition-all duration-500"/>
                </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0 xl:pr-10 pt-2">
            <Photo/>
          </div>
        </div>
      
      </div>
      
     
    </section>
  )
}

export default Home
