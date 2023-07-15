import React from "react";

import OfficesTitleCardComponent from "@/components/ui/OfficesTitleCardComponent";

const page = () => {
  return (
    <div>
      <OfficesTitleCardComponent officesPosition="SECRETARY GENERAL" />
      <OfficesTitleCardComponent officesPosition="PRESIDENT" />
      <OfficesTitleCardComponent officesPosition="VICE PRESIDENT" />
      <OfficesTitleCardComponent officesPosition="TREASURER" />
    </div>
  );
};

export default page;
