import type { FC } from "react";
import React from "react";

import SCBOfficerCard from "@/components/ui/SCB/SCBOfficerCard";

const HomePage: FC = () => {
  return (
    <div className="m-5">
      <SCBOfficerCard
        firstName="Chyna Marie"
        lastName="Legaspina"
        position="President"
        imageUrl="/"
        link="/"
      />
    </div>
  );
};

export default HomePage;
