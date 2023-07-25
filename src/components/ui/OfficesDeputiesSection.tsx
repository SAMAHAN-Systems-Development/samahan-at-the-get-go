'use client';

import React, { useEffect, useState } from 'react';

import type { officer } from 'lib/types/officerType';

import OfficerLargeCard from '@/components/ui/OfficerLargeCard';
import {
  OSGDeputies,
  OSPDeputies,
  OSTDeputies,
  OVPDeputies,
} from '@/data/Deputies';
import { cn } from '@/utils/cvaUtils';

type OfficesDeputiesSectionProps = {
  office: string;
};

const OfficesDeputiesSection: React.FC<OfficesDeputiesSectionProps> = ({
  office,
}) => {
  const [deputies, setDeputies] = useState<officer[]>([]);

  const handleData = () => {
    switch (office) {
      case 'OSP':
        setDeputies(OSPDeputies);
        break;
      case 'OVP':
        setDeputies(OVPDeputies);
        break;
      case 'OSG':
        setDeputies(OSGDeputies);
        break;
      case 'OST':
        setDeputies(OSTDeputies);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    handleData();
  }, [office]);

  return (
    <section className="container bg-white border-card border-lightBlue mt-5 rounded-section-card py-12 px-5 md:py-12 lg:py-16 lg:px-7">
      <div className="flex justify-between text-xl text-lightBlue mb-11 px-4">
        <p className="font-artega">02</p>
        <p className="uppercase">Deputies</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {deputies.map((person: officer, index: number) => {
          return (
            <div
              key={index}
              className={cn(
                'flex sm:justify-center',
                index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
              )}
            >
              <OfficerLargeCard
                officer={{
                  firstName: person.officer.firstName,
                  lastName: person.officer.lastName,
                  position: person.officer.position,
                }}
                imageUrl={person.imageUrl}
                isButton={false}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OfficesDeputiesSection;
