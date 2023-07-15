import React from "react";

import AboutSecondSectionBlueCard from "@/components/ui/AboutPage/AboutSecondSection/AboutSecondSectionBlueCard";
import AboutSecondSectionWhiteCard from "@/components/ui/AboutPage/AboutSecondSection/AboutSecondSectionWhiteCard";

const AboutSecondSection = () => {
  return (
    <>
      <div className="flex flex-col justify-start w-full gap-2 p-5 xl:flex-row md:flex-col">
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
