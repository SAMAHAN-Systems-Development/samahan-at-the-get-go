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
    fullName: 'SAMAHAN DCA',
    imageSrc: DCA,
    name: 'Department of Campaigns & Advocacies',
  },
  {
    fullName: 'DEA',
    imageSrc: DEA,
    name: 'Department of External Affairs',
  },
  {
    fullName: 'ESU',
    imageSrc: ESU,
    name: 'Ecoteneo Student Unit',
  },
  {
    fullName: 'DAA',
    imageSrc: DAA,
    name: 'Department of Academic Affairs',
  },
  {
    fullName: 'DRRM',
    imageSrc: DRRM,
    name: 'Disaster Risk Reduction and Managament',
  },
  {
    fullName: 'ASP',
    imageSrc: ASP,
    name: 'Ateneo SAMAHAN Productions',
  },
  {
    fullName: 'SAMACOMMS',
    imageSrc: SAMACOMMS,
    name: 'Samahan Department of Communications',
  },
  {
    fullName: 'SAMAHAN R&D',
    imageSrc: RND,
    name: 'Department of Research & Development',
  },
  {
    fullName: 'SCT',
    imageSrc: SCT,
    name: 'Samahan Creative Team',
  },
  {
    fullName: 'SYSDEV',
    imageSrc: SYSDEV,
    name: 'Samahan Systems Development',
  },
  {
    fullName: 'SAS',
    imageSrc: SAS,
    name: 'Samahan Sponsorship and Support',
  },
  {
    fullName: 'SLD',
    imageSrc: SLD,
    name: 'Samahan Logistics Department',
  },
];

const RecWeekModalsSection = () => {
  return (
    <div className="container-lg grid gap-5">
      {departments.map((department, index) => {
        return (
          <React.Fragment key={index}>
            <RecWeekModalButton
              fullName={department.fullName}
              imageSrc={department.imageSrc}
              name={department.name}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default RecWeekModalsSection;
