"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    description: "+2348144669906",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Jimoh.tajudeen1017@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adress",
    description: "Sagwari Layout Dutse, Abuja",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none  ">
            <form
              action=""
              className="flex flex-col gap-6 bg-[#27272c] rounded-xl p-10"
            >
              <h3 className="text-4xl text-emerald-500">Let's work together</h3>
              <p className="text-white/60">
                Whether you're looking to build a modern, user-friendly web
                application or improve your current digital product, I'm here to
                help. I bring expertise in front-end development, a passion for
                clean code, and a commitment to delivering exceptional user
                experiences. Let’s collaborate to turn your ideas into reality.
                Together, we can create something innovative, efficient, and
                tailored to your needs. Reach out, and let’s start building a
                better digital future!
              </p>
              {/* input */}

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  className="bg-black/70 text-white"
                  placeholder="FirstName"
                  type="firstName"
                />
                <Input
                  className="bg-black/70 text-white"
                  placeholder="Last Name"
                  type="lastName"
                />
                <Input
                  className="bg-black/70 text-white"
                  placeholder="Email address"
                  type="email"
                />
                <Input
                  className="bg-black/70 text-white"
                  placeholder="Phone Number"
                  type="phone"
                />
              </div>
              {/* select */}

              <Select className="">
                <SelectTrigger className="w-full bg-black/70">
                  <SelectValue placeholder="select a services" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX</SelectItem>
                    <SelectItem value="mss">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Type your messages here"
              />

              {/* button */}
              <Button className="max-w-40">Send Message</Button>
            </form>
          </div>

          {/* info */}
          <div className="flex flex-1 items-center xl:justify-end xl:order-none order-1 mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 ">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-emerald-500 rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
