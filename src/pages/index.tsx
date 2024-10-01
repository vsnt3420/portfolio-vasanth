import Experience from "@/components/common/Experience";
import Footer from "@/components/common/Footer";
import HeroContent from "@/components/common/HeroContent";
import Navbar from "@/components/common/Navbar";
import Projects from "@/components/common/Projects";
import Skills from "@/components/common/Skills";
import { ScrollToTopButton } from "@/components/ui/Scrolltotop";
import StarsCanvas from "@/components/ui/StarBackground";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${inter.className} w-full flex flex-col min-h-screen px-5 sm:px-20 bg-neutral-950 overflow-x-hidden`}
    >
      <StarsCanvas />
      <Navbar />
      <ScrollToTopButton />
      <HeroContent />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
