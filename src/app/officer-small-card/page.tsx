import React from "react";

import OfficerSmallCard from "@/components/ui/OfficerSmallCard";

const page = () => {
  return (
    <div>
      <OfficerSmallCard
        firstName="Vincent Cesar"
        lastName="Canonigo"
        position="Director"
        department="Department of Camapigns & Advocacies"
        imageUrl="/assets/images/Canonigo.jpg"
      />
    </div>
  );
};

export default page;
