import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import Heading from "./Headings";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 min-h-[calc(100vh)] relative overflow-hidden lg:py-10"
      style={{ transform: "scale(0.9" }}
    >
      <Heading
        title="Mastering the Craft "
        subtitle="A toolkit of modern web development technologies"
      />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <ul className="max-w-5xl flex flex-wrap justify-center gap-6 text-lg text-neutral-100 ">
          {skillsData.map((skill, index) => (
            <motion.li
              className="rounded-xl px-5 py-3 backdrop-blur-lg  border border-neutral-300/50"
              key={index}
              initial="initial"
              variants={fadeInAnimationVariants}
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
