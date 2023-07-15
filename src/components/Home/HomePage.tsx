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
        Title="The OSP"
        Description="is the highest executive office, aims to establish harmony and efficiency in both the internal operations of the student government and external relations."
      />
    </>
  );
};

export default HomePage;
