import type { FC } from "react";
import React from "react";

import AboutForthSectionOrangeCard from "@/components/ui/AboutPage/AboutFourthSection/AboutForthSectionOrangeCard";
import Button from "@/components/ui/Button";

const HomePage: FC = () => {
  return (
    <>
      <AboutForthSectionOrangeCard year="SAMAHAN that is at the get-go." />
      <Button
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
      </Button>
    </>
  );
};

export default HomePage;
