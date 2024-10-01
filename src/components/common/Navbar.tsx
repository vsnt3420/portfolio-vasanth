import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  return (
    <header className="relative z-[999]">
      <nav className="w-full sm:max-w-md backdrop-blur-sm fixed flex top-0  left-1/2 rounded-lg px-6 py-4 h-12 -translate-x-1/2 items-center justify-center bg-transparent">
        <ul className="flex flex-row items-center justify-center text-[0.9rem] font-medium text-neutral-300 space-x-7 lg:space-x-14">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={link.hash}
            >
              <Link
                className={cn(
                  "flex w-full items-center justify-center transition",
                  {
                    "px-2 py-1.5 text-white rounded-xl bg-neutral-500": activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-lg bg-transparent "
                    layoutId="activeSection"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
