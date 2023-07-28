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
  office: string;
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

  const isLastCardCentered = office.length % 2 === 1;
  return (
    <section className="container border-card border-lightBlue mt-5 rounded-section-card py-12 px-5 md:py-12 lg:py-16 lg:px-7">
      <div className="flex justify-between text-xl text-lightBlue mb-11 px-4">
        <p className="font-artega">03</p>
        <p className="uppercase">Departments</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {handleData(office).map((officer, index) => {
          return (
            <div
              key={index}
              className={cn(
                'flex flex-col items-center',
                isLastCardCentered && index === office.length - 1
                  ? 'md:col-span-2 lg:col-auto lg:row-auto lg:justify-self-center'
                  : ''
              )}
            >
              <OfficerSmallCard
                firstName={officer.firstName}
                lastName={officer.lastName}
                position={officer.position}
                department={officer.department}
                imageUrl={officer.imageUrl}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default DepartmentSection;
