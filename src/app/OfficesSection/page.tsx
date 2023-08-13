import React from 'react';

import OfficesCardNew from '@/components/ui/Offices/OfficesCardNew';
import OfficesHeaderNew from '@/components/ui/Offices/OfficesHeaderNew';
const page = () => {
  return (
    <div>
      <OfficesHeaderNew position="Vice President" />
      <div className="mx-5">
        <OfficesCardNew
          title="The OVP"
          description="aims to supervise the internal affairs of the SAMAHAN Central Board and lead the Student Assembly.
"
        />
      </div>
    </div>
  );
};

export default page;
