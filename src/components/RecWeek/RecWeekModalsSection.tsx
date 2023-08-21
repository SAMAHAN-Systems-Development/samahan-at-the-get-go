import type { FC } from 'react';
import React from 'react';

import RecWeekDeptCardSection from '@/components/ui/RecWeek/RecWeekDeptCardSection';
import RecWeekDeptTitle from '@/components/ui/RecWeek/RecWeekDeptTitle';
import RecWeekModalBodyButton from '@/components/ui/RecWeek/RecWeekModalBodyButton';
import RecWeekModalBodyCard from '@/components/ui/RecWeek/RecWeekModalBodyCard';
import RecWeekModalHeader from '@/components/ui/RecWeek/RecWeekModalHeader';
import RecWeekModalUI from '@/components/ui/RecWeek/RecWeekModalUI';
import RecWeekSectionUI from '@/components/ui/RecWeek/RecWeekSectionUI';
import {
  OSGRecWeekData,
  OSPRecWeekData,
  OSTRecWeekData,
  OVPRecWeekData,
} from '@/data/RecWeekData';

type RecWeekModalsSectionProps = {
  office: string;
};

const RecWeekModalsSection: FC<RecWeekModalsSectionProps> = ({ office }) => {
  const handleData = (office: RecWeekModalsSectionProps['office']) => {
    switch (office) {
      case 'OSP':
        return OSPRecWeekData;
      case 'OVP':
        return OVPRecWeekData;
      case 'OSG':
        return OSGRecWeekData;
      case 'OST':
        return OSTRecWeekData;
      default:
        return [];
    }
  };

  return (
    <div className="grid gap-3">
      {handleData(office).map((item, index) => {
        return (
          <RecWeekModalUI
            fullName={item.fullName}
            name={item.name}
            imageSrc={item.buttonImageSrc}
            key={index}
          >
            <RecWeekModalHeader
              imageSrc={item.headerImageSrc}
              name={item.name}
            />
            <RecWeekSectionUI>
              <RecWeekDeptTitle
                topText={item.topText}
                bottomText={item.bottomText}
              />
            </RecWeekSectionUI>
            <RecWeekSectionUI>
              <RecWeekModalBodyCard text={item.text} socials={item.socials} />
            </RecWeekSectionUI>
            <RecWeekSectionUI>
              <RecWeekDeptCardSection department={item.name} />
            </RecWeekSectionUI>
            <RecWeekSectionUI>
              <div className="flex flex-col w-full items-center space-y-5">
                <RecWeekModalBodyButton
                  link={item.recruitmentFormLink}
                  title={`Be part of ${item.name}`}
                />
                <RecWeekModalBodyButton
                  link={item.primerLink}
                  title="Download our Primer"
                />
              </div>
            </RecWeekSectionUI>
          </RecWeekModalUI>
        );
      })}
    </div>
  );
};

export default RecWeekModalsSection;
