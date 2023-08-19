import React from 'react';

import Modal from '@/components/ui/HelpPortal/HelpPortalModalButton';

function FAQSModalSection() {
  return (
    <div className="lg:px-[20rem] py-[5rem]">
      <div className="flex flex-wrap justify-center gap-6 ">
        <Modal title="SIS & AdDU Emails" />
        <Modal title="AdDU Online Learning" />
        <Modal title="AdDU GSuite Account" />
        <Modal title="Scholarship" />
        <Modal title="Enrollment & Registration" />
      </div>
    </div>
  );
}

export default FAQSModalSection;
