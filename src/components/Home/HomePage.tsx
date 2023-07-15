import type { FC } from "react";
import React from "react";

import AboutSecondSectionBlueCard from "@/components/ui/AboutPage/AboutSecondSection/AboutSecondSectionBlueCard";

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
      <AboutSecondSectionBlueCard title="This Year" />
    </>
  );
};

export default HomePage;
