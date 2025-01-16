import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitterSquare,
} from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "https://github.com/Teejay-deen" },
  { icons: <FaLinkedin />, path: "https://www.linkedin.com/in/jimoh-tajudeen-bb29b32b1" },
  { icons: <FaTwitterSquare />, path: "https://twitter.com/m_modeller" },
  { icons: <FaYoutube />, path: "https://www.youtube.com/@JimohTajudeen-sq2pc" },
];


const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index)=>{
        return (
          
            <Link className={iconStyles} href={item.path} key={index}>
                {item.icons}
            </Link>
        )
    })}
  </div>;
};

export default Socials;
