import React from 'react';

import DepartmentSection from '@/components/ui/Offices/DepartmentSection';

const page = () => {
  return (
    <div>
      <DepartmentSection office="OSP" />
      <DepartmentSection office="OVP" />
      <DepartmentSection office="OSG" />
      <DepartmentSection office="OST" />
    </div>
  );
};

export default page;
