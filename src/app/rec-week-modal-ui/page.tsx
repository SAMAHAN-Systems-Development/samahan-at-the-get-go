import React from 'react';

import DCALogo from '/public/assets/images/Department Logos/samahan_campaigns_advocacies_logo.jpg';
import DCAHeaderImage from '/public/assets/images/Rec Week/SAMAHAN DCA.jpg';
import RecWeekDeptCardSection from '@/components/ui/RecWeek/RecWeekDeptCardSection';
import RecWeekDeptTitle from '@/components/ui/RecWeek/RecWeekDeptTitle';
import RecWeekModalBodyButton from '@/components/ui/RecWeek/RecWeekModalBodyButton';
import RecWeekModalBodyCard from '@/components/ui/RecWeek/RecWeekModalBodyCard';
import RecWeekModalHeader from '@/components/ui/RecWeek/RecWeekModalHeader';
import RecWeekModalUI from '@/components/ui/RecWeek/RecWeekModalUI';
import RecWeekSectionUI from '@/components/ui/RecWeek/RecWeekSectionUI';

const page = () => {
  return (
    <div className="container-2xl grid gap-3">
      <RecWeekModalUI
        fullName="Department of Campaigns & Advocacies"
        name="SAMAHAN DCA"
        imageSrc={DCALogo}
      >
        <RecWeekModalHeader imageSrc={DCAHeaderImage} name="DCA" />
        <RecWeekSectionUI>
          <RecWeekDeptTitle
            topText="Department of"
            bottomText="Campaigns & Advocacies"
          />
        </RecWeekSectionUI>
        <RecWeekSectionUI>
          <RecWeekModalBodyCard
            text="The Department of Campaigns and Advocacies was established in 2019. It serves as the advocacy arm of the SAMAHAN Central Board, under the Office of the SAMAHAN President. It is tasked to emerge, empower, and safeguard the knowledge and actions of the students in their initiatives of realizing their social responsibilities as men and women for others, serving for the common good. The department will mainly materialize priority advocacies from the SAMAHAN Central Board, United Nations Sustainable Development Goals, as well as Ateneo de Davao University’s Vision and Mission. It envisions every Atenean to actualize the Ignatian values and to become dedicated to a lifelong journey of service for social justice and common good through active engagement in campaigns and advocacies inside and outside the university. Together, we will bring a SAMAHAN that will offer genuine service and commitment to do more."
            socials={{ facebook: 'https://www.facebook.com/' }}
          />
        </RecWeekSectionUI>
        <RecWeekSectionUI>
          <RecWeekDeptCardSection department="DCA" />
        </RecWeekSectionUI>
        <RecWeekSectionUI>
          <div className="flex flex-col w-full items-center space-y-5">
            <RecWeekModalBodyButton
              link="https://bit.ly/DCA-Apps-2023"
              title="Be part of SAMAHAN DCA"
            />
            <RecWeekModalBodyButton
              link="https://drive.google.com/open?id=1ms1aMdQ7kTLkwhw54cWTfIRAHZSbGqgt"
              title="Download our Primer"
            />
          </div>
        </RecWeekSectionUI>
      </RecWeekModalUI>
      <RecWeekModalUI
        fullName="Department of Academic Affairs"
        name="DAA"
        imageSrc={DCALogo}
      >
        <RecWeekModalHeader imageSrc={DCAHeaderImage} name="DAA" />
        <RecWeekSectionUI>
          <RecWeekDeptTitle
            topText="Department of"
            bottomText="Academic Affairs"
          />
        </RecWeekSectionUI>
        <RecWeekSectionUI>
          <RecWeekModalBodyCard
            text="The SAMAHAN DAA is the academic arm which prides itself as the hall of excellence and aids in crafting programs to bring out the students' academic prowess."
            socials={{
              facebook: 'https://www.facebook.com/',
              twitter: 'https://www.twitter.com/',
              instagram: 'https://www.instagram.com/',
            }}
          />
        </RecWeekSectionUI>
        <RecWeekSectionUI>
          <RecWeekDeptCardSection department="DAA" />
        </RecWeekSectionUI>
        <RecWeekSectionUI>
          <div className="flex flex-col w-full items-center space-y-5">
            <RecWeekModalBodyButton
              link="https://bit.ly/DCA-Apps-2023"
              title="Be part of SAMAHAN DAA"
            />
            <RecWeekModalBodyButton
              link="https://drive.google.com/open?id=1ms1aMdQ7kTLkwhw54cWTfIRAHZSbGqgt"
              title="Download our Primer"
            />
          </div>
        </RecWeekSectionUI>
      </RecWeekModalUI>
    </div>
  );
};

export default page;
