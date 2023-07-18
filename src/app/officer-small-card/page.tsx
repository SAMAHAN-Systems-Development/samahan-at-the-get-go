import React from "react";

import OfficerSmallCard from "@/components/ui/OfficerSmallCard";

const officer = {
  firstName: "Vincent Cesar",
  lastName: "Canonigo",
  position: "Director",
};

const page = () => {
  return (
    <div>
      <OfficerSmallCard
        officer={officer}
        department="Department of Camapigns & Advocacies"
        imageUrl="/assets/images/Canonigo.jpg"
      />
    </div>
  );
};

export default page;
