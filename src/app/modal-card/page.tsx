import React from 'react';

import ModalUI from '@/components/ui/Offices/InitiativesModalUI';
import { initiativesOSP } from '@/data/InitiativesOSP';

export default function page() {
  return (
    <div className="flex flex-col min-[800px]:flex-row min-[800px]:flex-wrap justify-center p-6 gap-6">
      {initiativesOSP.map((item, index) => (
        <React.Fragment key={index}>
          <ModalUI {...item} number={String(index + 1).padStart(2, '0')} />
        </React.Fragment>
      ))}
    </div>
  );
}
