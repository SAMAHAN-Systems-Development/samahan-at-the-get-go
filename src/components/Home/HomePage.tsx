import type { FC } from "react";
import React from "react";

import AboutSecondSectionWhiteCard from "@/components/ui/AboutPage/AboutSecondSection/AboutSecondSectionWhiteCard";

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
        first_header="Commitment"
        second_header="Navigate"
      />
    </>
  );
};

export default HomePage;
