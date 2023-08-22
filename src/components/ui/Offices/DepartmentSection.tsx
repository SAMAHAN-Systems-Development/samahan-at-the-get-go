import React from 'react';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';
import SmallSectionUI from '@/components/ui/SmallSectionUI';
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
    OSP: 'gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    OVP: 'gap-4 grid grid-cols-1 md:grid-cols-4',
    OSG: 'flex flex-wrap justify-center gap-2',
    OST: 'gap-4 grid grid-cols-1 md:grid-cols-4',
  };

  const gridColumns = departmentGridColumns[office];

  return (
    <SmallSectionUI>
      <section className="mt-5 rounded-section-card py-12 px-5 md:py-12 lg:py-16 lg:px-7">
        <div className="col-span-full text-center mt-20 mb-7">
          <h2 className="text-blue sm:text-xl lg:text-4xl font-artega font-medium uppercase">
            Departments
          </h2>
        </div>
        <div className={cn(`${gridColumns}`)}>
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
      </section>
    </SmallSectionUI>
  );
};

export default DepartmentSection;
