import React from 'react';

import AdvocasixModalUI from '@/components/ui/Advocasix/AdvocasixModalUI';
import BigSectionUI from '@/components/ui/BigSectionUI';
import { advocasixData } from '@/data/AdvocasixData';

const AdvocasixModalsSection = () => {
  return (
    <div>
      <BigSectionUI>
        <div className="flex flex-col space-y-4">
          {advocasixData.map((item, index) => (
            <React.Fragment key={index}>
              <AdvocasixModalUI {...item} />
            </React.Fragment>
          ))}
        </div>
      </BigSectionUI>
    </div>
  );
};

export default AdvocasixModalsSection;
