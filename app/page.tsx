import About from "@/Components/Home/About";
import Blogs from "@/Components/Home/Blogs";
import Contact from "@/Components/Home/Contact";
import Hero from "@/Components/Home/Hero";
import Portfolio from "@/Components/Home/Portfolio";
import Service from "@/Components/Home/Service";
import Skills from "@/Components/Home/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Portfolio />
      <Skills />
      <Blogs />
      <Contact />
    </div>
  );
}
