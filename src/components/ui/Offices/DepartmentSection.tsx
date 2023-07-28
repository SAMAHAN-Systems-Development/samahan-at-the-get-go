import React from 'react';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';
import {
  OSGDepartment,
  OSPDepartment,
  OSTDepartment,
  OVPDepartment,
} from '@/data/Departments';

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
    [key in OfficeDepartmentSectionProps['office']]: number;
  } = {
    OSP: 3,
    OVP: 4,
    OSG: 2,
    OST: 4,
  };

  const gridColumns = departmentGridColumns[office];

  return (
    <section className="container border-card border-lightBlue mt-5 rounded-section-card py-12 px-5 md:py-12 lg:py-16 lg:px-7">
      <div className="flex justify-between text-xl text-lightBlue mb-11 px-4">
        <p className="font-artega">03</p>
        <p className="uppercase">Departments</p>
      </div>
      <div
        className={`gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${gridColumns}`}
      >
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
