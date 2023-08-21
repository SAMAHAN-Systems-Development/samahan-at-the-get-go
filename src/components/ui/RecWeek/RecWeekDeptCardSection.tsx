import React from 'react';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';
import {
  ASP,
  DAA,
  DCA,
  DEA,
  DRRM,
  Ecoteneo,
  RND,
  SAMACOMMS,
  SAS,
  SCT,
  SLD,
  SYSDEV,
} from '@/data/RecWeekDepartments';

type RecWeekDeptCardSectionProps = {
  department:
    | 'ASP'
    | 'DAA'
    | 'DCA'
    | 'DEA'
    | 'DRRM'
    | 'Ecoteneo'
    | 'RND'
    | 'SAMACOMMS'
    | 'SAS'
    | 'SCT'
    | 'SLD'
    | 'SYSDEV'
    | string;
};

const RecWeekDeptCardSection: React.FC<RecWeekDeptCardSectionProps> = ({
  department,
}) => {
  const handleData = (
    department: RecWeekDeptCardSectionProps['department']
  ) => {
    switch (department) {
      case 'ASP':
        return ASP;
      case 'DAA':
        return DAA;
      case 'DCA':
        return DCA;
      case 'DEA':
        return DEA;
      case 'DRRM':
        return DRRM;
      case 'ESU':
        return Ecoteneo;
      case 'R&D':
        return RND;
      case 'SAMACOMMS':
        return SAMACOMMS;
      case 'SAS':
        return SAS;
      case 'SCT':
        return SCT;
      case 'SLD':
        return SLD;
      case 'SYSDEV':
        return SYSDEV;
      default:
        return [];
    }
  };

  const departmentData = handleData(department);

  return (
    <section className="flex justify-center p-4">
      <div className="grid gap-3 lg:gap-5 grid-cols-1 md:grid-cols-2">
        {departmentData.map((department, index) => (
          <div key={index}>
            <OfficerSmallCard
              firstName={department.firstName}
              lastName={department.lastName}
              email={department.email}
              position={department.position}
              imageUrl={department.imageUrl}
              textColorClass="text-blue"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecWeekDeptCardSection;
