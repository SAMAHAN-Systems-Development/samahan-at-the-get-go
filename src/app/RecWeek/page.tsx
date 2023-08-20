import React from 'react';

import DAA from '/public/assets/images/Department Logos/samahan_academic_affairs_logo.jpg';
import RecWeekModalUI from '@/components/ui/RecruitmentWeek/RecWeekModalUI';

const page = () => {
  return (
    <section className="container-2xl mt-5">
      <RecWeekModalUI
        name="DAA"
        fullName="Department of Academic Affairs"
        imageSrc={DAA}
      >
        Hello
      </RecWeekModalUI>
    </section>
  );
};

export default page;
