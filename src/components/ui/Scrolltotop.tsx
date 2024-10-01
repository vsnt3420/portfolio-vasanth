import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { IoArrowUp } from "react-icons/io5";

export const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
    useEffect(() => {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 300);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <button
        className={cn(
          "fixed right-4 bottom-20 sm:bottom-14 z-50 p-2.5 rounded-xl bg-neutral-700 border border-neutral-900 shadow-md shadow-neutral-800 transition-opacity opacity-0",
          {
            "opacity-100": isVisible,
          }
        )}
        onClick={scrollToTop}
      >
        <IoArrowUp className="mt-px w-5 h-5 text-white" />
        <span className="sr-only">Scroll To Top</span>
      </button>
    );
  };