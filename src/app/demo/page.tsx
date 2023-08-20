import React from 'react';

import AdvocasixModalUI from '@/components/ui/Advocasix/AdvocasixModalUI';
import { advocasixData } from '@/data/AdvocasixData';

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6">
      {advocasixData.map((item, index) => (
        <React.Fragment key={index}>
          <AdvocasixModalUI {...item} />
        </React.Fragment>
      ))}
    </div>
  );
}
