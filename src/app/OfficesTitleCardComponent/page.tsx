import React from "react";

import OfficesHeader from "@/components/ui/Offices/OfficesHeader";

const page = () => {
  return (
    <div>
      <OfficesHeader position="SECRETARY GENERAL" />
      <OfficesHeader position="PRESIDENT" />
      <OfficesHeader position="VICE PRESIDENT" />
      <OfficesHeader position="TREASURER" />
    </div>
  );
};

export default page;
