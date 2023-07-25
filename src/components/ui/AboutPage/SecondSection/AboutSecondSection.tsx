import React from "react";

import AboutSecondSectionBlueCard from "@/components/ui/AboutPage/SecondSection/AboutSecondSectionBlueCard";
import AboutSecondSectionWhiteCard from "@/components/ui/AboutPage/SecondSection/AboutSecondSectionWhiteCard";

const AboutSecondSection = () => {
  return (
    <>
      <div className="relative flex flex-col justify-between w-full gap-2 m-5 xl:flex-row md:flex-col">
        <AboutSecondSectionWhiteCard
          first_header="Commitmment"
          second_header="Navigate"
        />
        <AboutSecondSectionBlueCard title="This Year" />
      </div>
    </>
  );
};

export default AboutSecondSection;
