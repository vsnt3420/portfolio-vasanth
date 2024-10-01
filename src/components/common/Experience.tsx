import { useSectionInView } from "@/lib/hook";
import { IoArrowRedoSharp } from "react-icons/io5";
import { Timeline } from "../ui/Timeline";
import Heading from "./Headings";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);

  const data = [
    {
      title: "2017 - 2021",
      content: (
        <div className="flex flex-col space-y-8">
          <h3 className="text-3xl font-semibold text-white">
            B.E in Electrical & Electronics Engineering
          </h3>
          <p className="text-neutral-300 text-base font-medium">
            During this period, I completed my undergraduate degree and began my
            journey into web development.
          </p>
          <div className="flex flex-col space-y-4 text-neutral-100 text-lg">
            <div className="flex items-start space-x-2">
              <IoArrowRedoSharp className="text-neutral-100 mt-1" />
              <span>
                Gained foundational knowledge in electrical systems, circuit
                design, and embedded technologies.
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <IoArrowRedoSharp className="text-neutral-100 mt-1" />
              <span>
                Discovered a passion for web development by exploring various
                online resources and tutorials.
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <IoArrowRedoSharp className="text-neutral-100 mt-1" />
              <span>
                Led academic projects focused on software-based solutions,
                honing my problem-solving skills.
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <IoArrowRedoSharp className="text-neutral-100 mt-1" />
              <span>
                Built basic web applications using HTML, CSS, and JavaScript to
                enhance my understanding of web development.
              </span>
            </div>
          </div>
          <p className="text-neutral-100 text-lg font-normal">
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Location :</strong> Coimbatore, Tamil Nadu
          </p>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div className="flex flex-col space-y-8">
          <h3 className="text-3xl font-semibold text-white">
            Front-end Developer at Pratian Technologies
          </h3>
          <p className="text-neutral-300 text-base font-medium">
            Worked on various web applications, gaining hands-on experience in
            full-stack development.
          </p>
          <div className="flex flex-col space-y-4 text-neutral-100 text-lg">
            <div className="flex items-start space-x-2">
              <IoArrowRedoSharp className="text-neutral-100 mt-1" />
              <span>
                Developed responsive and scalable web applications using Angular
                and Tailwind CSS.
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <IoArrowRedoSharp className="text-neutral-100 mt-1" />
              <span>
                Worked on the JobCheck project, which involved complex user
                interfaces, forms, and dashboards.
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <IoArrowRedoSharp className="text-neutral-100 mt-1" />
              <span>
                Collaborated with backend developers to ensure smooth
                integration between frontend and backend.
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <IoArrowRedoSharp className="text-neutral-100 mt-1" />
              <span>
                Focused on improving performance, accessibility, and user
                experience across multiple devices.
              </span>
            </div>
          </div>
          <p className="text-neutral-100 text-lg font-normal">
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Location :</strong> Bangalore, Karnataka
          </p>
        </div>
      ),
    },
    {
      title: "2023 - present",
      content: (
        <div className="flex flex-col space-y-8">
          <h3 className="text-3xl font-semibold text-white">
            Full-stack Developer at EliteAppMakers AI Solutions
          </h3>
          <p className="text-neutral-300 text-base font-medium">
            Currently working as a full-stack developer, involved in
            cutting-edge AI and web applications.
          </p>
          <div className="flex flex-col space-y-4 text-neutral-100 text-lg">
            <div className="flex items-start space-x-2">
              <IoArrowRedoSharp className="text-neutral-100 mt-1" />
              <span>
                Leading frontend development for AI-driven applications like
                Nela AGI and Solodoer.
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <IoArrowRedoSharp className="text-neutral-100 mt-1" />
              <span>
                Utilizing React, Next.js, TypeScript, Tailwind, and MongoDB to
                build scalable and maintainable applications.
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <IoArrowRedoSharp className="text-neutral-100 mt-1" />
              <span>
                Creating seamless user experiences by collaborating closely with
                product and backend teams.
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <IoArrowRedoSharp className="text-neutral-100 mt-1" />
              <span>
                Implementing advanced animations and transitions using Framer
                Motion for dynamic user interfaces.
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <IoArrowRedoSharp className="text-neutral-100 mt-1" />
              <span>
                Contributing to architectural design and system optimization for
                enhanced performance.
              </span>
            </div>
          </div>
          <p className="text-neutral-100 text-lg font-normal">
            <strong className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Location :</strong> Coimbatore, Tamil Nadu
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative flex flex-col w-full min-h-[calc(100vh)] z-40 lg:py-10"
    >
      <Heading
        title="Building Expertise"
        subtitle=" Professional journey through innovation and teamwork"
      />

      <Timeline data={data} />
    </section>
  );
};

export default Experience;