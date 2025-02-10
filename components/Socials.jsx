
import Link from "next/link"
import {FaGithub,FaLinkedinIn,FaTwitter} from "react-icons/fa";
const socials=[{icon:<FaGithub/> ,path:''},
    {icon:<FaLinkedinIn/> ,path:''},
    {icon:<FaTwitter/> ,path:''}
]

const Socials = ({containerStyle,iconStyle}) => {
  return (
    <div className={containerStyle}>
      {socials.map((items,index)=>{
        return(
            <Link className={iconStyle} key={index} href={items.path}>
            {items.icon}
            </Link>
        );
      })}
    </div>
  )
}

export default Socials
