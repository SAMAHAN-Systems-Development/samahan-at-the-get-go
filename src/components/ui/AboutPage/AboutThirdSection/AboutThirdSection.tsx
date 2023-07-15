import React from "react";
import Image from "next/image";

import AboutThirdSectionOrangeCard from "@/components/ui/AboutPage/AboutThirdSection/AboutThirdSectionOrangeCard";

const AboutThirdSection = () => {
  return (
    <>
      <div className="flex flex-col justify-start w-full gap-2 p-5 xl:flex-row md:flex-col">
        <AboutThirdSectionOrangeCard
          first_header="We"
          second_header="Navigate"
        />
        <div className="relative w-2/5 h-96">
          <Image
            src="/assets/images/RoxasGate (2).png"
            alt="Ateneo Gate"
            className="object-fill"
            fill
          />
        </div>
      </div>
    </>
  );
};

export default AboutThirdSection;
