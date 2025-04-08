import React from "react";

type Props = {
  price: number;
  title: string;
  description: string;
  pic: string;
};

export default function MenuItem({ price, title, description, pic }: Props) {
  return (
    <div className="flex items-center justify-between gap-16 py-8 border-b text-neutral-900 border-b-neutral-300">
      <div>
        <div className="flex flex-row items-center">
          <img
            src={pic}
            alt=""
            className=" w-[10%] rounded-lg"
          />
          <h3 className="mb-2 ml-5 text-xl font-medium">{title}</h3>
        </div>
        <p>{description}</p>
      </div>
      {/* <p><span className="self-center text-xl font-medium">{price}.-</span></p> */}
    </div>
  );
}
