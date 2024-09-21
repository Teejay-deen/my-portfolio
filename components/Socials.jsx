import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaTwitterSquare,
} from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "https://github.com/Teejay-deen" },
  { icons: <FaLinkedin />, path: "" },
  { icons: <FaYoutube />, path: "" },
  { icons: <FaTwitterSquare />, path: "" },
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
