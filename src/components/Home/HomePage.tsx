import type { FC } from "react";
import React from "react";

import AboutSecondSectionWhiteCard from "@/components/ui/AboutPage/AboutSecondSectionWhiteCard";

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
      <AboutSecondSectionWhiteCard
        first_header="commodo"
        second_header="dsamk"
      />
    </>
  );
};

export default HomePage;
