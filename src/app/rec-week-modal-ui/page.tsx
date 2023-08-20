import React from 'react';

import DCALogo from '/public/assets/images/Department Logos/samahan_campaigns_advocacies_logo.jpg';
import DCAHeaderImage from '/public/assets/images/Rec Week/SAMAHAN DCA.jpg';
import BigSectionUI from '@/components/ui/BigSectionUI';
import RecWeekDeptTitle from '@/components/ui/RecruitmentWeek/RecWeekDeptTitle';
import RecWeekModalBodyCard from '@/components/ui/RecruitmentWeek/RecWeekModalBodyCard';
import RecWeekModalHeader from '@/components/ui/RecruitmentWeek/RecWeekModalHeader';
import RecWeekModalUI from '@/components/ui/RecruitmentWeek/RecWeekModalUI';

const page = () => {
  return (
    <div>
      <RecWeekModalUI
        fullName="Department of Campaigns & Advocacies"
        name="SAMAHAN DCA"
        imageSrc={DCALogo}
      >
        <RecWeekModalHeader imageSrc={DCAHeaderImage} name="DCA" />
        <BigSectionUI>
          <RecWeekDeptTitle
            topText="Department of"
            bottomText="Campaigns & Advocacies"
          />
        </BigSectionUI>
        <BigSectionUI>
          <RecWeekModalBodyCard />
        </BigSectionUI>
      </RecWeekModalUI>
    </div>
  );
};

export default page;
