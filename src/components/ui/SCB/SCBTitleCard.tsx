import React from "react";
import Image from "next/image";

import SamahanAtTheGetGoLogo from "public/assets/images/SamahanAtTheGetGoLogo.png";

interface SCBTitleCardProps {
  title: string;
}

const SCBTitleCard: React.FC<SCBTitleCardProps> = ({ title }) => {
  return (
    <div className="h-[400px] w-full grid content-between border-2 border-solid border-blue rounded-xl p-6 md:h-[700px] lg:h-[700px] lg:px-[80px]">
      <div className="relative justify-self-end w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-28 lg:h-28">
        <Image
          src={SamahanAtTheGetGoLogo}
          alt="SamahanAtTheGetGoLogo"
          className="object-contain"
          fill
        />
      </div>
      <div className="font-artega font-bold uppercase text-blue text-[1.25rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[5.6rem] leading-[1.3rem] sm:leading-[2.3rem] md:leading-[3rem] lg:leading-[6rem]">
        {title.split(" ").map((word, index) => (
          <React.Fragment key={index}>
            {word}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SCBTitleCard;
