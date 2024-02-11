import React from 'react';
import Link from 'next/link';

import HelpPortalModalUI from '@/components/ui/HelpPortal/HelpPortalModalUI';
import RIAModalBodyCard from '@/components/ui/HelpPortal/RIAModalBodyCard';
import StudentServicesButton from '@/components/ui/HelpPortal/StudentServicesButton';

const StudentServicesModalsSection = () => {
  return (
    <section className="container-xs sm:container-sm md:container-md lg:container-lg my-5 lg:my-10 lg:flex lg:flex-wrap lg:justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdpCHygaKo64U6MUpV9kO6wCdWpWnuw29TZOPLwxcg5pVpAGA/viewform">
        <StudentServicesButton title="Concept Paper Submissions" />
      </Link>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfD7NdpLyGHiFTzhDTwadbOaJ-6SM5oVwFmGi7869z0nHDxAQ/viewform">
        <StudentServicesButton title="Registrar Document Request" />
      </Link>
      <Link href="https://docs.google.com/forms/d/1dpu7Yn4GIvnMq4cqqAvEye51hkrmtJ27-Z-Xhyc6OLA/viewform">
        <StudentServicesButton title="Certificate of Good Moral Character" />
      </Link>
      <HelpPortalModalUI title="University Paraphernalia">
        <RIAModalBodyCard title="University Paraphernalia">
          Requests for University Pins, ID Cases and Lanyards, Caduceus Pin, and
          other University Paraphernalia are catered through the University
          Bookstore at the Mezzanine Level of the Martin Hall (near the SAMAHAN
          Central Board Office, beside the Campus Ministry Office)
        </RIAModalBodyCard>
      </HelpPortalModalUI>
      <Link href="https://helpdesk.addu.edu.ph">
        <StudentServicesButton title="UITO-TSO HelpDesk" />
      </Link>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfZECyMcQ7dCiQUr8dosFKrdfuoExv_9AxDNQzMZ8oWzimhHQ/viewform">
        <StudentServicesButton title="iCOMMP Booking for Equipment and Studios" />
      </Link>
      <Link href="https://forms.gle/KtAoAz5TanBershC9">
        <StudentServicesButton title="Facility Damage Incident Report" />
      </Link>
      <Link href="Remote Library">
        <StudentServicesButton title="Remote Library" />
      </Link>
    </section>
  );
};

export default StudentServicesModalsSection;
