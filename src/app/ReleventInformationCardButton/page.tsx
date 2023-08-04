import React from 'react';

import ReleventInformationCardButton from '@/components/ui/HelpPortal/ReleventInformationCardButton';

const page = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2">
      <ReleventInformationCardButton title="1st Semester Schedule" />
      <ReleventInformationCardButton title="Enrollment & Payment" />
      <ReleventInformationCardButton title="Contact Details" />
      <ReleventInformationCardButton title="Appeals" />
      <ReleventInformationCardButton title="Shifting" />
      <ReleventInformationCardButton title="Leave of Absences" />
    </div>
  );
};

export default page;
