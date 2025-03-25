"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[250px] h-[250px]  xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden flex items-center justify-center mix-blend-lighten"
        >
          <Image
  
          
            className="object-cover"
            src="/assets/teejay.jpg"
            priority
            quality={100}
            alt="Profile Image"
            width={450}
            height={450}
          />

        </motion.div>


        <motion.svg
          className="absolute top-0 left-0 w-[250px] h-[250px] xl:w-[450px] xl:h-[450px]"
          fill="transparent"
          viewBox="0 0 450 450"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="225"
            cy="225"
            r="215"
            stroke="#00ff99"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "0 1", rotate: 0 }}
            animate={{
              strokeDasharray: ["10 200", "20 200", "30 150"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
              repeatType: "reverse"
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
