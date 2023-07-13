import React from "react";

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
      <div className="w-full flex md:h-screen h-full justify-center">
        <AboutSecondSection />
      </div>
    </>
  );
};

export default AboutPage;
