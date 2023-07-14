import type { FC } from "react";
import React from "react";

import AboutThirdSectionOrangeCard from "@/components/ui/AboutPage/AboutThirdSectionOrangeCard";
import Button from "@/components/ui/Button";

const HomePage: FC = () => {
  return (
    <>
      <AboutThirdSectionOrangeCard first_header="We" second_header="Navigate" />
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
