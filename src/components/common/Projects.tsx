"use client";

import { projectsData } from "@/lib/data";

import Image from "next/image";
import Link from "next/link";
import betanela from "../../../public/betanela.png";
import eamAccounts from "../../../public/eamAccounts.png";
import { WobbleCard } from "../ui/WobbleCard";
import Heading from "./Headings";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative flex flex-col w-full min-h-[calc(100vh)] z-40 py-10"
    >
      <Heading
        title="Bringing Ideas to Life"
        subtitle="Showcasing creative solutions and impactful applications"
      />

      <div className="pt-10 md:pt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
        <Link
          href={`https://accounts.eliteappmakers.in`}
          target="_blank"
          className="col-span-1 lg:col-span-2 h-full min-h-[300px] lg:min-h-[300px]"
        >
          <WobbleCard containerClassName="bg-pink-800">
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                EliteAppMakers Accounts
              </h2>
              <p className="mt-4 text-left  text-base/6 text-neutral-200">
                A unified sign-in platform for seamless access to all
                EliteAppMakers apps and services.
              </p>
              <ul className="mt-4 flex flex-wrap sm:flex-row  gap-2">
                {projectsData[0].tags.map((tag, index) => {
                  return (
                    <li
                      className="bg-neutral-800 px-3 py-1 text-[0.7rem] uppercase  text-white rounded-lg mb-2"
                      key={index}
                    >
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
            <Image
              src={eamAccounts}
              width={650}
              height={650}
              alt="linear demo image"
              className="absolute hidden md:block -right-4 lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </Link>
        <Link
          href={`https://hub.eliteappmakers.in`}
          target="_blank"
          className="col-span-1 h-full min-h-[300px] lg:min-h-[300px]"
        >
          <WobbleCard containerClassName="">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              EliteAppMakers Hub{" "}
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              Explore a centralized hub with documentation for all
              EliteAppMakers products, insightful blogs, and essential legal
              information.
            </p>
            <ul className="mt-4 flex flex-wrap sm:flex-row  gap-2">
              {projectsData[1].tags.map((tag, index) => {
                return (
                  <li
                    className="bg-neutral-800 px-3 py-1 text-[0.7rem] uppercase  text-white rounded-lg mb-2"
                    key={index}
                  >
                    {tag}
                  </li>
                );
              })}
            </ul>
          </WobbleCard>
        </Link>{" "}
        <Link
          href={`https://beta-nela.eliteappmakers.in`}
          target="_blank"
          className="col-span-1 lg:col-span-3 "
        >
          <WobbleCard containerClassName="bg-violet-900 min-h-[300px] lg:min-h-[600px] xl:min-h-[300px] ">
            <div className="max-w-lg">
              <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                EliteAppMakers NELA AGI
              </h2>
              <p className="mt-4 max-w-4xl text-left text-base/6 text-neutral-200">
                Our cutting-edge AGI (Artificial General Intelligence) not only
                tackles a wide array of text-based, image-based, audio-based,
                and video-based tasks, but it&#39;s also geared up to dazzle you
                with even more capabilities in future generation.
              </p>
              <ul className="mt-4 flex flex-wrap sm:flex-row  gap-2">
                {projectsData[2].tags.map((tag, index) => {
                  return (
                    <li
                      className="bg-neutral-800 px-3 py-1 text-[0.7rem] uppercase  text-white rounded-lg mb-2"
                      key={index}
                    >
                      {tag}
                    </li>
                  );
                })}
              </ul>
            </div>
            <Image
              src={betanela}
              width={650}
              height={650}
              alt="linear demo image"
              className="absolute hidden md:block -right-10 md:-right-[40%] lg:-right-[5%] -bottom-10 object-contain rounded-2xl"
            />
          </WobbleCard>
        </Link>
      </div>
    </section>
  );
};
export default Projects;
