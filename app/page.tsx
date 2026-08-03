import Journey from "@/components/journey/Journey";
import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/projects/Projects";
import About from "@/components/section/About";
// import Hero from "@/components/section/Hero";
import Hero from "@/components/hero/Hero";
import Statement from "@/components/section/Statement";
import Services from "@/components/services/Services";
import Technologies from "@/components/technologies/Technologies";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/section/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Hero />
      <About />
      <Technologies />
      <Journey />
      <Statement />
      <Projects />
      <Services />
      <Contact />

      <Footer />

      {/* <main className="min-h-screen bg-[#F8F5F0]">
      </main> */}
    </>
  );
}
