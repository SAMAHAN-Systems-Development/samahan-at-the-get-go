import React from "react";

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
    </>
  );
};

export default AboutPage;
