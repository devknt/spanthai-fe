import Image from "next/image";
import Button from "../components/ui/Button";
import Hero from "@/components/layout/Hero";
import About from "@/components/layout/About";
import { Testimonials } from "@/components/layout/Testimonials";
import Footer from "@/components/layout/Footer";
import Features from "@/components/layout/Features";
import Header from "@/components/layout/Header";
import Team from "@/components/layout/Team";
import Contact from "@/components/layout/Contact";
import Products from "@/components/layout/menu/Products";
import Categories from "@/components/layout/Categories";
import Banner from "@/components/layout/Banner";
import DividerSharp from "@/components/layout/DividerSharp";
import PageWrapper from "@/components/layout/PageWrapper";
import ImgEaster from "@/public/pic/EasterShow.webp";

export default function Home() {
  return (
    <PageWrapper className="overflow-x-hidden">
      <Hero />
      {/* <div className="relative w-full h-24 -mt-20 rounded-tl-full rounded-tr-full bg-light-ivory"></div> */}
      <div className="bg-light-ivory h-[120px] justify-items-center">
        <h1></h1>
      </div>
      <div className="justify-items-center">
        <Image
          className="w-[50%] p-10 h-auto transition duration-500 group-hover:scale-110"
          src={ImgEaster}
          loading="lazy"
          alt={"easter show"}
        />
      </div>
      <Categories pt="xl" />
      <About />
      {/* <DividerSharp /> */}
      {/* <Banner /> */}
      {/* <Features /> */}
      <Products />
      <Contact />
      <Footer />
    </PageWrapper>
  );
}
