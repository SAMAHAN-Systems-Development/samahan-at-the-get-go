import React from 'react';
// import Link from 'next/link';

// import type { largeOfficer } from 'lib/types/LargeOfficerType';
// import CunananImage from '/public/assets/images/Cunanan.jpg';
// import DabonImage from '/public/assets/images/Dabon.jpg';
// import GomezImage from '/public/assets/images/Gomez.jpg';
// import LegaspinaImage from '/public/assets/images/Legaspina.jpg';
// import OfficerLargeCard from '@/components/ui/OfficerLargeCard';

// const SCBOfficers: largeOfficer[] = [
//   {
//     officer: {
//       firstName: 'Chyna Marie',
//       lastName: 'Legaspina',
//       position: 'President',
//     },
//     imageUrl: LegaspinaImage,
//     link: 'OSP',
//   },
//   {
//     officer: {
//       firstName: 'Daniel Dave',
//       lastName: 'Gomez',
//       position: 'Vice President',
//     },
//     imageUrl: GomezImage,
//     link: 'OVP',
//   },
//   {
//     officer: {
//       firstName: 'Zoreyn Victorio',
//       lastName: 'Dabon',
//       position: 'Secretary-General',
//     },
//     imageUrl: DabonImage,
//     link: 'OSG',
//   },
//   {
//     officer: {
//       firstName: 'Michelle Anne',
//       lastName: 'Cunanan',
//       position: 'Treasurer',
//     },
//     imageUrl: CunananImage,
//     link: 'OST',
//   },
// ];

const SCBClickableCardsSection = () => {
  return (
    <section className="bg-lightBlue mt-5 rounded-section-card py-12 px-5 md:py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        SCB Clickable Section
        {/* {SCBOfficers.map((officer: largeOfficer, index: number) => {
          if (officer.link) {
            return (
              <Link href={officer.link} key={index} className="">
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
        })} */}
      </div>
    </section>
  );
};

export default SCBClickableCardsSection;
