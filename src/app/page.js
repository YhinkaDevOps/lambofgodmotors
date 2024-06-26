// import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Choose from "@/components/Choose";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Gallery />
      <Choose />
      <Testimonials />
      <Services />
    </div>
  );
}
