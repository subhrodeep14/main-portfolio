
import Link from "next/link"
import {FaGithub,FaLinkedinIn,FaTwitter} from "react-icons/fa";
const socials=[{icon:<FaGithub/> ,path:'https://github.com/subhrodeep14'},
    {icon:<FaLinkedinIn/> ,path:'www.linkedin.com/in/subhrodeep14'},
    {icon:<FaTwitter/> ,path:'https://x.com/Subhrodeep1905'}
]

const Socials = ({containerStyle,iconStyle}) => {
  return (
    <div className={containerStyle}>
      {socials.map((items,index)=>{
        return(
            <Link className={iconStyle} key={index} href={items.path} target="_blank" rel="noopener noreferrer">
            {items.icon}
            </Link>
        );
      })}
    </div>
  )
}

export default Socials
