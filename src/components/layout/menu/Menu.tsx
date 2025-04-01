"use client";
import TabsProduct from "@/components/modules/Product/TabsProduct";
import MenuItem from "@/components/ui/MenuItem";
import { paddingBot, paddingTop } from "@/utils/props";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import useMenuTabsStore from "../../../stores/useMenuTabsStore";

const menu = {
  entree: [
    {
      id: 1,
      title: "Spring Roll",
      price: 30,
      category: "entree",
      description: "",
    },
    {
      id: 2,
      title: "School Prawns",
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
      description: "",
    },
    {
      id: 2,
      price: 23,
      category: "main",
      title: "Pad See Ew",
      description: "",
    },
    {
      id: 3,
      price: 23,
      category: "main",
      title: "Fried Rice",
      description: "",
    },
    {
      id: 4,
      price: 23,
      category: "main",
      title: "Chilli Basil",
      description: "",
    },
    {
      id: 5,
      price: 23,
      category: "main",
      title: "Chilli Basil",
      description: "",
    },
    {
      id: 6,
      price: 23,
      category: "main",
      title: "Massaman Curry",
      description: "",
    },
    {
      id: 7,
      price: 23,
      category: "main",
      title: "Som Tum",
      description: "",
    },
    {
      id: 8,
      price: 23,
      category: "main",
      title: "Wings",
      description: "",
    },
    {
      id: 9,
      price: 23,
      category: "main",
      title: "Hokkien Noodles",
      description: "",
    },
    {
      id: 10,
      price: 23,
      category: "main",
      title: "Chicken & Chorizo Paella (GF)",
      description: "",
    },
    {
      id: 11,
      price: 23,
      category: "main",
      title: "Chicken Pad Thai Rice Noodles",
      description: "",
    },
    {
      id: 12,
      price: 23,
      category: "main",
      title: "Garlic Chicken",
      description: "",
    },
  ],
  dessert: [
    {
      id: 1,
      price: 23,
      category: "dessert",
      title: "Fried Ice Cream on A Stick",
      description: "",
    },
    {
      id: 2,
      price: 23,
      category: "dessert",
      title: "Mango Sticky Rice",
      description: "",
    },
  ],
  drink: [
    {
      id: 1,
      price: 23,
      category: "drink",
      title: "Lemon Ice Tea",
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
          menu.entree?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
        {tab == 1 &&
          menu.main?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
        {tab == 2 &&
          menu.dessert?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
        {tab == 3 &&
          menu.drink?.map(({ id, price, title, description }) => (
            <MenuItem
              key={id}
              title={title}
              description={description}
              price={price}
            />
          ))}
      </div>
    </section>
  );
}
