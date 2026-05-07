import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientsMarquee from "@/components/ClientsMarquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 pt-32 pb-20 lg:pt-40 lg:pb-32 space-y-32">
        <Hero />
        <ClientsMarquee />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
      </main>
      <ScrollToTop />
    </div>
  );
}
