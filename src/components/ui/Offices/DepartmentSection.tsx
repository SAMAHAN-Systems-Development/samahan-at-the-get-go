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

  return (
    <div className="py-2 lg:py-5">
      <div className="col-span-full text-center">
        <h3 className="font-artega uppercase text-lightBlue text-center mb-7 lg:mb-16 text-xl sm:text-title-sm lg:text-title-md">
          Departments
        </h3>
      </div>
      <div className="flex flex-wrap justify-center">
        {departmentData.map((officer, index) => (
          <div key={index} className="flex flex-col items-center">
            <OfficerSmallCard
              firstName={officer.firstName}
              lastName={officer.lastName}
              position={officer.position}
              department={officer.department}
              imageUrl={officer.imageUrl}
              textColorClass="text-blue"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentSection;
