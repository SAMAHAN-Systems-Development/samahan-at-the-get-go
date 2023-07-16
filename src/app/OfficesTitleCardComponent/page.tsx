import React from "react";

import OfficesTitleCardComponent from "@/components/ui/OfficesTitleCardComponent";

const page = () => {
  return (
    <div>
      <OfficesTitleCardComponent position="SECRETARY GENERAL" />
      <OfficesTitleCardComponent position="PRESIDENT" />
      <OfficesTitleCardComponent position="VICE PRESIDENT" />
      <OfficesTitleCardComponent position="TREASURER" />
    </div>
  );
};

export default page;
