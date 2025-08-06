"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HeaderNav from "@/components/HeaderNav";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

export default function Home() {
 useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen max-w-full bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
      <HeaderNav />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
