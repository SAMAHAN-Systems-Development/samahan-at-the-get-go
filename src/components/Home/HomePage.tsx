import type { FC } from "react";
import React from "react";

import Button from "@/components/ui/Button";
import OfficerSmallCard from "@/components/ui/OfficerSmallCard";

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
      <OfficerSmallCard
        firstName="Vincent Cesar"
        lastName="CANONIGO"
        position="Accountancy Representative"
        imageUrl="/assets/images/Canonigo.jpg"
      />
    </>
  );
};

export default HomePage;
