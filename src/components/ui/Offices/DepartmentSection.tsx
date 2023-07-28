import React from 'react';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';
import {
  OSGDepartment,
  OSPDepartment,
  OSTDepartment,
  OVPDepartment,
} from '@/data/Departments';
import { cn } from '@/utils/cvaUtils';

type OfficeDepartmentSectionProps = {
  office: 'OSP' | 'OVP' | 'OSG' | 'OST';
};

const DepartmentSection: React.FC<OfficeDepartmentSectionProps> = ({
  office,
}) => {
  const handleData = (office: OfficeDepartmentSectionProps['office']) => {
    switch (office) {
      case 'OSP':
        return OSPDepartment;
      case 'OVP':
        return OVPDepartment;
      case 'OSG':
        return OSGDepartment;
      case 'OST':
        return OSTDepartment;
      default:
        return [];
    }
  };

  const departmentData = handleData(office);

  const departmentGridColumns: {
    [key in OfficeDepartmentSectionProps['office']]: string;
  } = {
    OSP: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    OVP: 'grid-cols-1 md:grid-cols-4',
    OSG: 'grid-cols-1 md:grid-cols-2',
    OST: 'grid-cols-1 md:grid-cols-4',
  };

  const gridColumns = departmentGridColumns[office];

  return (
    <section className="container border-card border-lightBlue mt-5 rounded-section-card py-12 px-5 md:py-12 lg:py-16 lg:px-7">
      <div className="flex justify-between text-xl text-lightBlue mb-11 px-4">
        <p className="font-artega">03</p>
        <p className="uppercase">Departments</p>
      </div>
      <div className={cn(`gap-4 grid ${gridColumns}`)}>
        {departmentData.map((officer, index) => (
          <div key={index} className="flex flex-col items-center">
            <OfficerSmallCard
              firstName={officer.firstName}
              lastName={officer.lastName}
              position={officer.position}
              department={officer.department}
              imageUrl={officer.imageUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DepartmentSection;
