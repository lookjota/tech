// import { Carrousel } from "@/components/Carrousel";
import { About } from "@/components/About";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Price } from "@/components/Price";
import { Section } from "@/components/Section";
import { Space } from "@/components/Space";
// import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Section/>
      <Gallery/>
      <Space/>
      <Card/>
      <About/>
      <Price/>
      <Footer/>
      {/* <Carrousel/> */}
    </div>
  );
}
