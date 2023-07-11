import type { FC } from "react";
import React from "react";
import Image from "next/image";

import logo from "public/assets/images/logo.png";

type CardType = {
  title: string;
  subTitle: string;
};

const AdvocasixHeaderCard: FC<CardType> = ({ title, subTitle }) => {
  return (
    <>
      <div className="w-full h-[41.25rem] bg-orange rounded-xl px-12 py-14 flex flex-col justify-end">
        <div className="relative w-10 h-16 mb-auto self-end">
          <Image
            alt="/"
            src={logo}
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="font-appleGaramound italic text-white text-3xl mb-1">
          {subTitle}
        </div>
        <div className="font-artega text-white text-5xl">{title}</div>
      </div>
    </>
  );
};

export default AdvocasixHeaderCard;
