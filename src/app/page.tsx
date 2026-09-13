import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Starfield from "@/components/Starfield";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100">
      <Starfield />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Projects />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
