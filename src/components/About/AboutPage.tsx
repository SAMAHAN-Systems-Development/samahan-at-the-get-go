import React from "react";

import AboutSecondSection from "@/components/About/AboutSecondSection";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-white">
        {/* Second Section */}
        <div className="w-full flex md:h-screen h-full justify-center">
          <AboutSecondSection />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
