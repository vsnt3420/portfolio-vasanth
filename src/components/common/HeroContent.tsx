"use client";

import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hook";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import Image from "next/image";
import { TypingEffect } from "../ui/TypingAnimation";
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoMail,
  IoPhonePortrait,
} from "react-icons/io5";
import { FloatingDock } from "../ui/Floating-Dock";
const HeroContent = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const SocialsMedia = [
    {
      title: "Home",
      icon: <IoPhonePortrait className="h-full w-full text-neutral-100" />,
      href: `tel:${9566465466}`,
    },

    {
      title: "Github",
      icon: <IoLogoGithub className="h-full w-full text-neutral-100" />,
      href: `https://github.com/vsnt3420`,
    },
    {
      title: "Mail",
      icon: <IoMail className="h-full w-full text-blue-400" />,
      href: `mailto:mvasanth2k@gmail.com`,
    },
    {
      title: "Aceternity UI",
      icon: <IoLogoWhatsapp className="h-full w-full text-green-600" />,
      href: `https://wa.me/9566465466`,
    },
    {
      title: "Linkedin",
      icon: <IoLogoLinkedin className="h-full w-full text-blue-500" />,
      href: `https://www.linkedin.com/in/vasanthm3420/`,
    },
  ];
  return (
    <section ref={ref} id="home" className="relative z-40">
      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full max-w-7xl flex flex-col md:flex-row min-h-[calc(100vh)] justify-center items-center mx-auto"
      >
        <div className="w-full flex flex-col justify-center items-start text-start space-y-8">
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="w-full flex flex-col text-4xl font-bold text-white"
          >
            <span>
              Empowering{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Innovations
              </span>{" "}
              through
            </span>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="w-full max-w-[600px] h-8 text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
          >
            <TypingEffect sentence="Full Stack Developer" />
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400  max-w-[600px]"
          >
            I&#39;m a dedicated Full Stack Software Engineer with over 2 years
            of experience in creating cutting-edge web, mobile and software
            solutions. Explore my journey through projects that push the
            boundaries of innovation.
          </motion.p>
          <motion.div
            className="flex items-center justify-center"
            variants={slideInFromLeft(0.8)}
           
          >
            <FloatingDock items={SocialsMedia} />
          </motion.div>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center mt-10 md:mt-0"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={500}
            width={500}
            className="hidden md:block"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroContent;
