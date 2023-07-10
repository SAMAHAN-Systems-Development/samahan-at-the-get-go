import React from "react";

import AboutFirstSection from "@/components/About/AboutFirstSection";
import AboutSecondSection from "@/components/About/AboutSecondSection";
import Divider from "@/components/ui/Divider";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-white">
        {/* First Section */}
        <div className="w-full h-screen flex justify-center">
          <AboutFirstSection />
        </div>
        {/* Divider */}
        <Divider />
        {/* Second Section */}
        <div className="w-full flex md:h-screen h-full justify-center">
          <AboutSecondSection />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
