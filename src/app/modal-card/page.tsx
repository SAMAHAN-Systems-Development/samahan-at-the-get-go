import React from 'react';

import ModalUI from '@/components/ui/Offices/InitiativesModalUI';
import { initiativesOSP } from '@/data/InitiativesOSP';

export default function page() {
  return (
    <div className="container-xl grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {initiativesOSP.map((item, index) => (
        <React.Fragment key={index}>
          <ModalUI {...item} />
        </React.Fragment>
      ))}
    </div>
  );
}
