import React from "react";

import AboutFifthSection from "@/components/ui/AboutFifthSection";
import AboutFourthSection from "@/components/ui/AboutFourthSection";
import AboutFirstSection from "@/components/ui/AboutPage/AboutPageSections/AboutFirstSection";
import AboutSecondSection from "@/components/ui/AboutSecondSection";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-white">
        {/* First Section */}
        <AboutFirstSection title="SAMAHAN" />
      </div>
      {/* Divider */}
      {/* <Divider /> */}
      {/* Second Section */}
      <div className="w-full flex h-full justify-center">
        <AboutSecondSection />
      </div>
      <div className="w-full flex h-full justify-center">
        <AboutFourthSection />
      </div>
      <div className="w-full flex h-full justify-center">
        <AboutFifthSection title="Year of Magis" />
      </div>
    </>
  );
};

export default AboutPage;
