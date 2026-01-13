import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HybridGrid from "@/components/HybridGrid";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white min-h-screen pt-16">
      <Header />
      <Hero />
      <HybridGrid />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
