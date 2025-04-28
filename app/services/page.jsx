"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development", 
    description:
      "Web Development is the process of creating, building, and maintaining websites and web applications that are accessible over the internet. It involves various aspects such as web design, web programming, content creation, and database management to ensure websites are visually appealing, functionally robust, and responsive across different devices",
    href: "",
  },
  {
    
    num: "02",
    title: "UI/UX Design",
    description:
      "Design refers to the process of creating and enhancing user interfaces and user experiences for digital products, such as websites, mobile apps, and software. It combines creativity, psychology, and technology to craft interfaces that are visually appealing, easy to navigate, and focused on providing an optimal user experience",
    href: "",
  },
  {
    num: "03",
    title: "Mobile Application",
    description:
      "Mobile Application Development refers to the process of creating software applications specifically designed to run on mobile devices like smartphones and tablets. These applications can be pre-installed on devices or downloaded from app stores such as Google Play (for Android) or the Apple App Store (for iOS). Mobile app development involves a combination of user interface (UI) design, backend development.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Discover an impressive portfolio featuring interactive, visually captivating web designs created with React, Next.js, and Framer Motion. Experience cutting-edge animations and responsive layouts that enhance user engagement and performance.",
    href: "",
  },
];

const Services = () => {
  return (    
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
        
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex-col flex justify-center gap-6 group  "
              >
                <div className="flex justify-between w-full items-center">
                  <div className="text-5xl font-extrabold  text-white text-outline group-hover:text-emerald-500">{service.num}</div>
                  <Link className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-emerald-500 transition-all duration-500 flex justify-center hover:-rotate-45  " href={service.href}>
                    <BsArrowDownRight className="text-black text-3xl flex justify-center mt-5"  />
                  </Link>
                </div>

                <h2 className="text-white text-[42px] font-bold leading-none group-hover:text-emerald-500 transition-all duration-500">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                {/* border */}

                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
