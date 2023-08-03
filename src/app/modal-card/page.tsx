import React from 'react';

import ModalUI from '@/components/ui/Advocasix/AdvocasixModalUI';
import { advocasixData } from '@/data/AdvocasixData';

export default function page() {
  return (
    <div className="flex flex-col p-6 gap-6">
      {advocasixData.map((item, index) => (
        <React.Fragment key={index}>
          <ModalUI {...item} />
        </React.Fragment>
      ))}
    </div>
  );
}
