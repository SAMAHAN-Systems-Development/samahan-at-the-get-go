import type { FC } from "react";
import React from "react";

import AboutForthSectionBlueCard from "@/components/ui/AboutPage/AboutForthSectionBlueCard";

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
      <AboutForthSectionBlueCard year="This 2023" />
    </>
  );
};

export default HomePage;
