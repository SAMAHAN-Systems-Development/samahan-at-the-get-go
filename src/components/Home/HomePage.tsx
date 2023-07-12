import type { FC } from "react";
import React from "react";

import Button from "@/components/ui/Button";
import OfficesTitleCardComponent from "@/components/ui/OfficesTitleCardComponent";

const HomePage: FC = () => {
  return (
    <>
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
      <OfficesTitleCardComponent officesPosition="PRESIDENT" />
    </>
  );
};

export default HomePage;
