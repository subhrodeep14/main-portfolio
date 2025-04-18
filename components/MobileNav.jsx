"use client";

import {Sheet,SheetClose,SheetContent,SheetTrigger} from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci"

const links=[
    {
      name:"home",
      path:"/"
    },
    {
      name:"services",
      path:"/services"
    },
    {
      name:"resume",
      path:"/resume"
    },
    {
      name:"work",
      path:"/work"
    },
    {
      name:"contact",
      path:"/contact"
    },
  ]

const MobileNav = () => {
    const pathname=usePathname();
  return (
    <nav>
        <Sheet>
            <SheetTrigger className="flex justify-center items-center" asChild>
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-24 mb-32 text-center text-2xl">
                    <Link href='/'>
                    <h1 className="text-4xl font-semibold">
                        Subhro<span className="text-accent">.</span>
                    </h1>
                    </Link>
                </div>
                <nav className="flex justify-center items-center gap-8 flex-col">
                    {links.map((link,index)=>{
                        return(
                          <SheetClose asChild key={index}>
                            <Link
                            className={`${link.path===pathname &&"border-accent text-accent border-b-2 "}transition-all text-xl capitalize hover:text-accent`}
                            href={link.path}
                            key={index}
                            >
                            {link.name}
                            </Link>
                            </SheetClose>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNav
