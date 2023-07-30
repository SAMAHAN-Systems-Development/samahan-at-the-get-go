import React from 'react';

import OfficesLabelCard from '@/components/ui/OfficesLabelCard';

const page = () => {
  return (
    <>
      <div className="container-xl my-3">
        <OfficesLabelCard title="Samahan Departments" />
      </div>
      <div className="container-xl my-3">
        <OfficesLabelCard title="Cluster Representatives " />
      </div>
    </>
  );
};

export default page;
