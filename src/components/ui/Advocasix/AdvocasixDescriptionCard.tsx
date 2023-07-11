import type { FC } from "react";
import React from "react";
import Image from "next/image";

import arrow from "public/assets/images/orangeArrow1.png";

type CardType = {
  title: string;
  desc: string;
};

const AdvocasixDescriptionCard: FC<CardType> = ({ title, desc }) => {
  return (
    <>
      <div className="w-full h-[41.25rem] bg-blue rounded-xl p-12 pt-14 flex flex-col justify-end">
        <div className="flex mb-auto">
          <div className="font-artega text-white mr-auto">{title}</div>
          <div className="relative w-64 ml-3">
            <Image
              alt="/"
              src={arrow}
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <div className="text-white">{desc}</div>
      </div>
    </>
  );
};

export default AdvocasixDescriptionCard;
