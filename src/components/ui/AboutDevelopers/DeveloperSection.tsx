import React from 'react';

import Carin from 'public/assets/images/Carin.jpg';
import Panes from 'public/assets/images/Panes.jpg';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';
import { FrontEndDevs } from '@/data/FrontEndDevs';

const DeveloperSection = () => {
  return (
    <>
      {/* Project head (iya) */}
      <div className="col-span-full text-center mb-7 mt-10 lg:mt-16">
        <h2 className="text-blue sm:text-xl lg:text-4xl font-artega font-medium uppercase">
          Project Head
        </h2>
      </div>

      <div className="flex items-center justify-center space-y-14">
        <OfficerSmallCard
          firstName="Julienne Andrea"
          lastName="Panes"
          position="Secretary General"
          department="SAMAHAN Systems Development"
          imageUrl={Panes}
          email=""
          textColorClass="text-blue"
        />
      </div>

      {/* front end devs */}
      <div className="col-span-full text-center mt-20 mb-7">
        <h2 className="text-blue sm:text-xl lg:text-4xl font-artega font-medium uppercase">
          front end developers
        </h2>
      </div>
      <div className="container-2xl flex flex-wrap justify-center items-center">
        {FrontEndDevs.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center my-3"
          >
            <OfficerSmallCard {...item} textColorClass="text-blue" />
          </div>
        ))}
      </div>

      {/* UX/UI (mark) */}
      <div className="col-span-full text-center mt-20 mb-7">
        <h2 className="text-blue sm:text-xl lg:text-4xl font-artega font-medium uppercase">
          ux/ui designer
        </h2>
      </div>

      <div className="flex items-center justify-center md:col-span-2 md:justify-center lg:col-span-4 lg:justify-self-center mb-12">
        <OfficerSmallCard
          firstName="Mark Lyod"
          lastName="Carin"
          position="UX/UI Head"
          department="SAMAHAN Systems Development"
          imageUrl={Carin}
          email=""
          textColorClass="text-blue"
        />
      </div>
    </>
  );
};

export default DeveloperSection;
