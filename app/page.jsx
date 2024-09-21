import Socials from "@/components/Social";
import { Button } from "@/components/ui/button";
import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
  return (
    <section className="h-full ">
      <div className=" container mx-auto h-full">
        <div className="flex justify-between flex-col xl:flex-row items-center xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              {" "}
              Hello I'm <br />{" "}
              <span className="text-emerald-500">Jimoh Tajudeen </span>{" "}
            </h1>

            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digit experienes and i am proficient
              in various programming language and technologies{" "}
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button className="uppercase flex items-center gap-2" size="lg">
                <span>Download CV</span>
                <MdOutlineFileDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles=" w-9 h-9 border hover:text-white hover:transition-all duration-500 border-emerald-500 rounded-full flex justify-center text-emerald-500 text-base hover:bg-emerald-500 items-center"
                />
              </div>
            </div>
          </div>
          <div>Photo</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
