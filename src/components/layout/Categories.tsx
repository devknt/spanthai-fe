"use client";
import Image from "next/image";
import clsx from "clsx";
import { paddingBot, paddingTop } from "@/utils/props";
import ScrollAnimated from "./ScrollAnimated";
import { motion } from "framer-motion";
import CategoryTile from "../ui/CategoryTile";
import Link from "next/link";
import useMenuTabsStore from "../../stores/useMenuTabsStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import ImgDessert from "@/public/pic/MangoStickyRice.jpg"
import ImgDrink from "@/public/pic/Drink.jpg"
import ImgRice from "@/public/pic/Rice.jpg"
import ImgNoodle from "@/public/pic/Noodle.jpg"

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Categories({ pb = "md", pt = "md" }: Props) {
  const { setTab } = useMenuTabsStore();
  const isMobile = useMediaQuery(`(max-width: 1280px)`);

  return (
    <section
      id="Categories"
      className={clsx("bg-neutral-100", paddingTop[pt], paddingBot[pb])}
    >
      <ScrollAnimated className={clsx(!isMobile && "container container--sm")}>
        <div className="grid gap-2 sm:gap-6 md:gap-2 lg:gap-6 bento">
          <CategoryTile
            tabId={1}
            title={"Drink"}
            imgSrc={ImgDrink}
            width={384}
            height={384}
          />
          <CategoryTile
            tabId={3}
            span={2}
            title={"Rice"}
            imgSrc={ImgRice}
            width={384}
            height={682}
          />
          <CategoryTile
            tabId={0}
            title={"Noodle"}
            imgSrc={ImgNoodle}
            width={384}
            height={256}
          />
          <CategoryTile
            tabId={2}
            title={"Dessert"}
            imgSrc={ImgDessert}
            width={384}
            height={256}
          />
          <div className="relative w-full h-full bg-primary-500 text-neutral-100">
            <div className="flex flex-col justify-center h-full mx-auto text-base font-medium sm:text-lg w-fit sm:mx-0 sm:px-4 lg:px-8 xl:px-16 sm:gap-2 md:gap-0 xl:gap-2 xl:text-2xl">
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(0)}>Entree</span>
              </Link>
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(1)}>Main</span>
              </Link>
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(2)}>Dessert</span>
              </Link>
              <Link href={"/menu#menu"} className="hover:underline w-fit">
                <span onClick={() => setTab(3)}>Drink</span>
              </Link>
            </div>
            {/* <Image
              className="hidden sm:block w-3/4 h-3/4 lg:w-[180px] lg:h-[180px] xl:w-[250px] lg:h-[250px] absolute right-2 bottom-0 md:right-12 md:bottom-0"
              width={250}
              height={250}
              src={RamenSVG}
              loading="lazy"
              alt=""
            /> */}
          </div>
        </div>
      </ScrollAnimated>
    </section>
  );
}
