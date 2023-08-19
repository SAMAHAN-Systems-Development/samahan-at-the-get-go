import React from 'react';

import type { departmentType } from 'lib/types/departmentType';

import ASP from '/public/assets/images/Department Logos/asp_logo.jpg';
import DAA from '/public/assets/images/Department Logos/samahan_academic_affairs_logo.jpg';
import DCA from '/public/assets/images/Department Logos/samahan_campaigns_advocacies_logo.jpg';
import SAMACOMMS from '/public/assets/images/Department Logos/samahan_communications_logo.jpg';
import DRRM from '/public/assets/images/Department Logos/samahan_drrm_logo.jpg';
import ESU from '/public/assets/images/Department Logos/samahan_ecoteneo_logo.jpg';
import DEA from '/public/assets/images/Department Logos/samahan_external_affairs_logo.jpg';
import SLD from '/public/assets/images/Department Logos/samahan_logistics_logo.jpg';
import RND from '/public/assets/images/Department Logos/samahan_r&d_logo.png';
import SAS from '/public/assets/images/Department Logos/samahan_sponsorship_logo.jpg';
import SYSDEV from '/public/assets/images/Department Logos/samahan_sysdev_logo.jpg';
import SCT from '/public/assets/images/Department Logos/sct_logo.jpg';
import RecWeekModalButton from '@/components/ui/RecruitmentWeek/RecWeekModalButton';

const departments: departmentType[] = [
  {
    fullName: 'DCA',
    imageSrc: DCA,
    name: 'Department of Campaigns & Advocacies',
    office: 'OSP',
  },
  {
    fullName: 'DEA',
    imageSrc: DEA,
    name: 'Department of External Affairs',
    office: 'OSP',
  },
  {
    fullName: 'ESU',
    imageSrc: ESU,
    name: 'Ecoteneo Student Unit',
    office: 'OSP',
  },
  {
    fullName: 'DAA',
    imageSrc: DAA,
    name: 'Department of Academic Affairs',
    office: 'OVP',
  },
  {
    fullName: 'DRRM',
    imageSrc: DRRM,
    name: 'Disaster Risk Reduction and Managament',
    office: 'OVP',
  },
  {
    fullName: 'ASP',
    imageSrc: ASP,
    name: 'Ateneo SAMAHAN Productions',
    office: 'OSG',
  },
  {
    fullName: 'SAMACOMMS',
    imageSrc: SAMACOMMS,
    name: 'Samahan Department of Communications',
    office: 'OSG',
  },
  {
    fullName: 'Research & Development',
    imageSrc: RND,
    name: 'Department of Research & Development',
    office: 'OSG',
  },
  {
    fullName: 'SCT',
    imageSrc: SCT,
    name: 'Samahan Creative Team',
    office: 'OSG',
  },
  {
    fullName: 'SYSDEV',
    imageSrc: SYSDEV,
    name: 'Samahan Systems Development',
    office: 'OSG',
  },
  {
    fullName: 'SAS',
    imageSrc: SAS,
    name: 'Samahan Sponsorship and Support',
    office: 'OST',
  },
  {
    fullName: 'Logistics',
    imageSrc: SLD,
    name: 'Samahan Logistics Department',
    office: 'OST',
  },
];

const page = () => {
  return (
    <div className="container-lg grid gap-5">
      {departments.map((department, index) => {
        return (
          <React.Fragment key={index}>
            <RecWeekModalButton
              fullName={department.fullName}
              imageSrc={department.imageSrc}
              name={department.name}
              office={department.office}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default page;
