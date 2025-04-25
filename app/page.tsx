"use client"
import About from "@/Components/Home/About";
import Blogs from "@/Components/Home/Blogs";
import Contact from "@/Components/Home/Contact";
import Hero from "@/Components/Home/Hero";
import Portfolio from "@/Components/Home/Portfolio";
import Service from "@/Components/Home/Service";
import Skills from "@/Components/Home/Skills";

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from "react";

export default function Home() {

  useEffect(()=>{
    const intAOS = async()=>{
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
      });
    };
    intAOS();
  },[])

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
