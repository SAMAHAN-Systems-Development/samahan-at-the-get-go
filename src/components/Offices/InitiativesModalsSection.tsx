import type { FC } from 'react';
import React from 'react';

import InitiativesModalUI from '@/components/ui/Offices/InitiativesModalUI';
import { initiativesOSG } from '@/data/InitiativesOSG';
import { initiativesOSP } from '@/data/InitiativesOSP';
import { initiativesOST } from '@/data/InitiativesOST';
import { initiativesOVP } from '@/data/InitiativesOVP';

type InitiativesModalsSectionProps = {
  office: 'OSP' | 'OVP' | 'OSG' | 'OST';
};

const InitiativesModalsSection: FC<InitiativesModalsSectionProps> = ({
  office,
}) => {
  const handleData = (office: InitiativesModalsSectionProps['office']) => {
    switch (office) {
      case 'OSP':
        return initiativesOSP;
      case 'OVP':
        return initiativesOVP;
      case 'OSG':
        return initiativesOSG;
      case 'OST':
        return initiativesOST;
      default:
        return [];
    }
  };

  const departmentData = handleData(office);

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap justify-center">
      {departmentData.map((item, index) => (
        <React.Fragment key={index}>
          <InitiativesModalUI {...item} />
        </React.Fragment>
      ))}
    </div>
  );
};

export default InitiativesModalsSection;
