"use client";
import TabsProduct from "@/components/modules/Product/TabsProduct";
import MenuItem from "@/components/ui/MenuItem";
import { paddingBot, paddingTop } from "@/utils/props";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import useMenuTabsStore from "../../../stores/useMenuTabsStore";

const pathPic = "/pic/menu/";
const menu = {
  entree: [
    {
      id: 1,
      title: "Veggie Spring Roll",
      pic: pathPic + "spring-roll.png",
      price: 30,
      category: "entree",
      description: "",
    },
    {
      id: 2,
      title: "Veggie Curry Puff",
      pic: pathPic + "curry-puff.png",
      price: 30,
      category: "entree",
      description: "",
    },
    {
      id: 3,
      title: "School Prawns",
      pic: pathPic + "school-prawn.png",
      price: 45,
      category: "entree",
      description: "",
    },
  ],
  main: [
    {
      id: 1,
      price: 23,
      category: "main",
      title: "Pad Thai",
      pic: pathPic + "pic.png",
      description: "",
    },
    {
      id: 2,
      price: 23,
      category: "main",
      title: "Pad See Ew",
      pic: pathPic + "pic.png",
      description: "",
    },
    {
      id: 3,
      price: 23,
      category: "main",
      title: "Fried Rice",
      pic: pathPic + "pic.png",
      description: "",
    },
    {
      id: 4,
      price: 23,
      category: "main",
      title: "Chilli Basil",
      pic: pathPic + "pic.png",
      description: "",
    },
    {
      id: 5,
      price: 23,
      category: "main",
      title: "Green Curry",
      pic: pathPic + "pic.png",
      description: "",
    },
    {
      id: 6,
      price: 23,
      category: "main",
      title: "Massaman Curry",
      pic: pathPic + "pic.png",
      description: "",
    },
    {
      id: 7,
      price: 23,
      category: "main",
      title: "Som Tum & Wings",
      pic: pathPic + "pic.png",
      description: "",
    },
    {
      id: 8,
      price: 23,
      category: "main",
      title: "Hokkien Noodles",
      pic: pathPic + "pic.png",
      description: "",
    },
    {
      id: 9,
      price: 23,
      category: "main",
      title: "Chicken & Chorizo Paella (GF)",
      pic: pathPic + "pic.png",
      description: "",
    },
    {
      id: 10,
      price: 23,
      category: "main",
      title: "Chicken Pad Thai Rice Noodles",
      pic: pathPic + "pic.png",
      description: "",
    },
    {
      id: 11,
      price: 23,
      category: "main",
      title: "Garlic Chicken",
      pic: pathPic + "pic.png",
      description: "",
    },
  ],
  dessert: [
    {
      id: 1,
      price: 23,
      category: "dessert",
      title: "Fried Ice Cream on A Stick",
      pic: pathPic + "pic.png",
      description: "",
    },
    {
      id: 2,
      price: 23,
      category: "dessert",
      title: "Mango Sticky Rice",
      pic: pathPic + "pic.png",
      description: "",
    },
  ],
  drink: [
    {
      id: 1,
      price: 23,
      category: "drink",
      title: "Lemon Ice Tea",
      pic: pathPic + "pic.png",
      description: "",
    },
  ],
};

type Props = {
  pb?: "md" | "xl";
  pt?: "md" | "xl";
};

export default function Menu({ pb = "md", pt = "md" }: Props) {
  const { tab, setTab } = useMenuTabsStore();

  return (
    <section
      id="Menu"
      className={clsx(
        "bg-light-ivory relative",
        paddingTop[pt],
        paddingBot[pb]
      )}
    >
      <div id="menu" className="absolute -top-20"></div>
      <div className="container container--xs">
        <div className="mx-auto">
          <h2 className="relative mb-4 text-4xl font-bold text-center font-brush text-neutral-900">
            <span className="relative z-10">Our Menu</span>
          </h2>
        </div>

        <TabsProduct tab={tab} setTab={setTab} />

        {tab == 0 &&
          menu.entree?.map(({ id, price, title, description, pic }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
              pic={pic}
            />
          ))}
        {tab == 1 &&
          menu.main?.map(({ id, price, title, description, pic }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
              pic={pic}
            />
          ))}
        {tab == 2 &&
          menu.dessert?.map(({ id, price, title, description, pic }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
              pic={pic}
            />
          ))}
        {tab == 3 &&
          menu.drink?.map(({ id, price, title, description, pic }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
              pic={pic}
            />
          ))}
      </div>
    </section>
  );
}
