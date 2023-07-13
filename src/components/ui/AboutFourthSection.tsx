import React from "react";

import AboutForthSectionBlueCard from "@/components/ui/AboutPage/AboutForthSectionBlueCard";
import AboutForthSectionOrangeCard from "@/components/ui/AboutPage/AboutForthSectionOrangeCard";

const AboutFourthSection = () => {
  return (
    <>
      <div className="relative flex flex-col justify-start w-full gap-2 m-5">
        <AboutForthSectionBlueCard year="This 2023" />
        <AboutForthSectionOrangeCard year="SAMAHAN that is at the get-go. " />
      </div>
    </>
  );
};

export default AboutFourthSection;
