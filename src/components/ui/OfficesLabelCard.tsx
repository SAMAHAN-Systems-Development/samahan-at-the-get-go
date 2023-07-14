import React from "react";
import Image from "next/image";

type OfficesLabelCardProps = {
  title: string;
};

const OfficesLabelCard: React.FC<OfficesLabelCardProps> = ({ title }) => {
  return (
    <div className="flex justify-between items-center rounded-section-card bg-lightBlue px-4 lg:px-14 py-3">
      <p className="font-artea font-semibold uppercase text-white lg:text-[1.6rem] ">
        {title}
      </p>
      <div className="relative w-16 h-10">
        <Image
          src="/assets/images/orange_arrow.png"
          alt="Orange Arrow"
          className="object-contain"
          fill
        />
      </div>
    </div>
  );
};

export default OfficesLabelCard;
