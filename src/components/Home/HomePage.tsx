import type { FC } from "react";
import React from "react";

import Button from "@/components/ui/Button";
import OfficesCardComponent from "@/components/ui/OfficesCardComponent";

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
      <OfficesCardComponent
        officesNumber="01"
        officesTitle="The OVP"
        officesDescription="aims to supervise the internal affairs of the SAMAHAN Central Board and lead the Student Assembly."
      />
    </>
  );
};

export default HomePage;
