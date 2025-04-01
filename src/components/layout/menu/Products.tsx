"use client";
import React from "react";
import Product from "../../modules/Product/Product";
import Ramen1 from "@/public/products/ramen/ramen-shoyu.avif";
import Ramen2 from "@/public/products/ramen/ramen-miso.avif";
import ScrollAnimated from "../ScrollAnimated";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { paddingBot, paddingTop } from "@/utils/props";
import clsx from "clsx";
import ZigzagSVG from "@/components/svg/ZigzagSVG";
import ImgEntree1 from "@/public/pic/SpringRolls.png"
import ImgEntree2 from "@/public/pic/SchoolPrawns.png"
import ImgDessert1 from "@/public/pic/IceCreamStick.png"
import ImgDessert2 from "@/public/pic/MangoStickyRice.jpg"

const products = [
  {
    id: 1,
    price: 18,
    category: "entree",
    imgScr: ImgEntree1,
    title: "Spring Roll",
    description: "",
  },
  {
    id: 2,
    price: 20,
    category: "entree",
    imgScr: ImgEntree2,
    title: "School Prawns",
    description:
      "",
  },
  {
    id: 3,
    price: 22,
    category: "dessert",
    imgScr: ImgDessert1,
    title: "Fried Ice Cream on A Stick",
    description:
      "",
  },
  {
    id: 4,
    price: 24,
    category: "dessert",
    imgScr: ImgDessert2,
    title: "Mango Sticky Rice",
    description: "",
  },
];

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Products({ pb = "md", pt = "md" }: Props) {
  return (
    <section
      id="Products"
      className={clsx(
        "bg-neutral-900 featured-section",
        paddingTop[pt],
        paddingBot[pb]
      )}
    >
      <ScrollAnimated className="container container--sm">
        <div className="mx-auto">
          <h2 className="relative mb-4 text-center heading-second text-neutral-200">
            <span className="relative z-10">Featured</span>
          </h2>
          <ZigzagSVG />

          <section className="mt-8 space-y-8 lg:mt-12">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              navigation={true}
              modules={[Navigation]}
            >
              {products.map(({ id, price, imgScr, title, description }) => {
                return (
                  <SwiperSlide key={id}>
                    <Product
                      price={price}
                      imgSrc={imgScr}
                      title={title}
                      description={description}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </section>
        </div>
      </ScrollAnimated>
    </section>
  );
}
