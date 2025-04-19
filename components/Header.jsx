import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <header className="pb-8 xl:pb-10 pt-4 xl:pt-6 text-white">
        <div className=" px-4 md:container mx-auto flex justify-between items-center">
            <Link href='/'>
            <h1 className="text-4xl font-semibold">
                Subhro<span className="text-accent">.</span>
            </h1>
            </Link>
            {/*desktop nav*/}
            <div className="hidden xl:flex items-center gap-8">
            <Nav/>
            <Link href='/contact'>
                <Button>Hire me</Button>
            </Link>
            </div>
           <div className="xl:hidden">
              <MobileNav/>
           </div>
        </div>
    </header>
  )
}

export default Header
