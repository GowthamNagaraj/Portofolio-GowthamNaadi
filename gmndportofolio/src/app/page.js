"use client"
import HeaderNav from "@/components/HeaderNav";
import Hero from "@/components/Hero";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }) // You can customize duration, easing, etc.
  }, [])

  return (
    <div className="min-h-screen max-w-full bg-white dark:bg-black text-black dark:text-white transition-all duration-300">
      <HeaderNav />
      <Hero />
    </div>
  );
}
