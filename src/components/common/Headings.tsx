"use client";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";
import { motion } from "framer-motion";

interface HeadingProps {
  title: string;
  subtitle: string;
}
const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-y-5">
      <motion.span
        variants={slideInFromLeft(0.5)}
        className="mt-[10px] mb-[15px] text-3xl sm:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        {title}
      </motion.span>
      <motion.span
        variants={slideInFromRight(0.5)}
        className="mt-[10px] mb-[15px] cursive text-lg text-neutral-50 text-center"
      >
        {subtitle}
      </motion.span>
    </div>
  );
};

export default Heading;
