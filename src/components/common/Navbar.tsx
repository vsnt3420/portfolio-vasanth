import { links } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<string>(links[0].hash);

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = links.map((link) => {
        const section = document.querySelector(link.hash) as HTMLElement;
        return section
          ? {
              hash: link.hash,
              offsetTop: section.offsetTop,
              offsetHeight: section.offsetHeight,
            }
          : null;
      });

      const scrollPosition = window.scrollY + 500;
      for (let section of sectionOffsets) {
        if (
          section &&
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.hash);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative z-[999]">
      <nav className="w-full sm:max-w-md backdrop-blur-sm fixed flex sm:top-2 left-1/2 rounded-xl px-6 py-4 h-12 -translate-x-1/2 items-center justify-center bg-transparent border border-neutral-800 border-opacity-100">
        <ul className="flex flex-row items-center justify-center text-[0.9rem] font-medium text-neutral-300 space-x-7 lg:space-x-14">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={link.hash}
            >
              <Link
                className={cn(
                  "flex w-full items-center justify-center rounded-lg transition",
                  activeSection === link.hash
                    ? "bg-neutral-600 px-2 py-1  font-bold"
                    : "text-neutral-300"
                )}
                href={link.hash}
              >
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
