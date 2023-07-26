import React from 'react';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';
import { Department } from '@/data/Departments';

const DepartmentSection: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-x-5">
        {Department.map((item, index) => (
          <OfficerSmallCard key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default DepartmentSection;
