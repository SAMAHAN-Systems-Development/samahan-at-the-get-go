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
      <div className="w-full h-[41.25rem] bg-blue rounded-xl p-12 flex flex-col justify-end">
        <div className="flex mb-auto">
          <div className="font-artega text-white mr-auto">{title}</div>
          <Image alt="/" src={arrow} height={20} />
        </div>
        <div className="text-white">{desc}</div>
      </div>
    </>
  );
};

export default AdvocasixDescriptionCard;
