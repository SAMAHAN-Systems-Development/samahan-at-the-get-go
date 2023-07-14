import type { FC } from "react";
import React from "react";

import Button from "@/components/ui/Button";
import OfficerCard from "@/components/ui/OfficerLargeCard";

const HomePage: FC = () => {
  return (
    <>
      <OfficerCard
        firstName="Chyna Marie"
        lastName="Legaspina"
        position="President"
        imageUrl="/assets/images/Dabon.jpg"
        link="/"
      />
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
