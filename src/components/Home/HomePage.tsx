import type { FC } from "react";
import React from "react";

import AboutFirstSection from "@/components/ui/AboutPage/AboutPageSections/AboutFirstSection";

const HomePage: FC = () => {
  return (
    <>
      {/* <Button
        href="https://www.samahan.addu.edu.ph/"
        className="font-artega bg-beige text-white"
      >
        Click Me!
      </Button>
      <Button
        href="https://www.samahan.addu.edu.ph/"
        className="font-appleGaramound bg-beige text-white"
      >
        Click Me!
      </Button> */}
      <AboutFirstSection title="SAMAHAN" />
    </>
  );
};

export default HomePage;
