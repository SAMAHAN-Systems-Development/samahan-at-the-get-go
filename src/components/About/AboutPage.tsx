import React from "react";

import AboutFirstSection from "@/components/About/AboutFirstSection";
import AboutSecondSection from "@/components/About/AboutSecondSection";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-white">
        {/* First Section */}
        <div className="w-full h-screen flex justify-center">
          <AboutFirstSection />
        </div>
        {/* Divider */}
        <div className="w-full ">
          <div className="bg-orange-500 rounded-md mx-5">fd</div>
        </div>
        {/* Second Section */}
        <div className="w-full h-screen flex justify-center">
          <AboutSecondSection />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
