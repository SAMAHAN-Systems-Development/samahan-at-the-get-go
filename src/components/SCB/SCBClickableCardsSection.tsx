import React from 'react';
import Link from 'next/link';

import type { largeOfficer } from 'lib/types/largeOfficerType';

import CunananImage from '/public/assets/images/Cunanan.jpg';
import DabonImage from '/public/assets/images/Dabon.jpg';
import GomezImage from '/public/assets/images/Gomez.jpg';
import LegaspinaImage from '/public/assets/images/Legaspina.jpg';
import OfficerLargeCard from '@/components/ui/OfficerLargeCard';
import { cn } from '@/utils/cvaUtils';

const SCBOfficers: largeOfficer[] = [
  {
    officer: {
      firstName: 'Chyna Marie',
      lastName: 'Legaspina',
      position: 'President',
    },
    imageUrl: LegaspinaImage,
    link: 'office-of-the-president',
  },
  {
    officer: {
      firstName: 'Daniel Dave',
      lastName: 'Gomez',
      position: 'Vice President',
    },
    imageUrl: GomezImage,
    link: 'office-of-the-vice-president',
  },
  {
    officer: {
      firstName: 'Zoreyn Victorio',
      lastName: 'Dabon',
      position: 'Secretary-General',
    },
    imageUrl: DabonImage,
    link: 'office-of-the-secretary-general',
  },
  {
    officer: {
      firstName: 'Michelle Anne',
      lastName: 'Cunanan',
      position: 'Treasurer',
    },
    imageUrl: CunananImage,
    link: 'office-of-the-treasurer',
  },
];

const SCBClickableCardsSection = () => {
  return (
    <section className="bg-lightBlue mt-5 rounded-section-card py-12 px-5 md:py-12 lg:py-16 lg:px-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {SCBOfficers.map((officer: largeOfficer, index: number) => {
          if (officer.link) {
            return (
              <Link
                href={officer.link}
                key={index}
                className={cn(
                  'flex sm:justify-center',
                  index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'
                )}
              >
                <OfficerLargeCard
                  officer={{
                    firstName: officer.officer.firstName,
                    lastName: officer.officer.lastName,
                    position: officer.officer.position,
                  }}
                  imageUrl={officer.imageUrl}
                  isButton={true}
                />
              </Link>
            );
          }
        })}
      </div>
    </section>
  );
};

export default SCBClickableCardsSection;
