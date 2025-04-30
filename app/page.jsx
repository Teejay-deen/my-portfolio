import Photo from "@/components/Photo";
import Socials from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { MdOutlineFileDownload } from "react-icons/md";
import { Roboto } from 'next/font/google';

const Home = () => {
  return (
    <section className="h-full font-roboto">
      <div className="container mx-auto h-full">
        <div className="flex justify-between flex-col xl:flex-row items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-white">Software Developer.</span>
            <h1 className="h1 text-white mb-6">
              Hello {"I'm"} <br />
              <span className="text-emerald-500">Jimoh Tajudeen </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital experiences and I am proficient
              in various programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">  
              <a
                href="/assets/Jimoh-Tajudeen-CV.pdf"
                download="Jimoh_Tajudeen_CV.pdf"

              >
                <Button className="uppercase flex items-center gap-2" size="lg">
                  <span>Download CV</span>
                  <MdOutlineFileDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials 
                  containerStyles="flex gap-6"
                  iconStyles=" w-9 h-9 border hover:text-white hover:transition-all duration-500 border-emerald-500 rounded-full flex justify-center text-emerald-500 text-base hover:bg-emerald-500 items-center"
                />
              </div>
            </div>
          </div>
          
          <div className="order-1  mb-8 xl:mb-0 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
