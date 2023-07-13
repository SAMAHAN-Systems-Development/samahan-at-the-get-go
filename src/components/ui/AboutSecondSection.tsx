import React from "react";

import AboutSecondSectionBlueCard from "@/components/ui/AboutPage/AboutSecondSectionBlueCard";
import AboutSecondSectionWhiteCard from "@/components/ui/AboutPage/AboutSecondSectionWhiteCard";

const AboutSecondSection = () => {
  return (
    <>
      <div className="relative flex flex-col justify-start w-full gap-2 m-5 xl:flex-row md:flex-col" />
      <AboutSecondSectionWhiteCard
        first_header="Commitmment"
        second_header="dasdsa"
      />
      <AboutSecondSectionBlueCard title="This Year" />
    </>
  );
};

export default AboutSecondSection;
