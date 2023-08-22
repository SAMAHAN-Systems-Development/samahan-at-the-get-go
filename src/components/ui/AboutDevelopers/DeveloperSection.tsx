import React from 'react';

import OfficerSmallCard from '@/components/ui/OfficerSmallCard';
import { FrontEndDevs } from '@/data/FrontEndDevs';

const DeveloperSection = () => {
  return (
    <section className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {/* Project head (iya) */}
      <div className="col-span-full text-center mt-20 mb-7">
        <h2 className="text-blue sm:text-xl lg:text-4xl font-artega font-medium uppercase">
          Project Head
        </h2>
      </div>

      <div className="flex items-center md:col-span-2 md:justify-center lg:col-span-4 lg:justify-self-center">
        <div>helo</div>
      </div>

      {/* front end devs */}
      <div className="col-span-full text-center mt-20 mb-7">
        <h2 className="text-blue sm:text-xl lg:text-4xl font-artega font-medium uppercase">
          front end developers
        </h2>
      </div>
      {FrontEndDevs.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <OfficerSmallCard {...item} textColorClass="text-blue" />
        </div>
      ))}

      {/* UX/UI (mark) */}
      <div className="col-span-full text-center mt-20 mb-7">
        <h2 className="text-blue sm:text-xl lg:text-4xl font-artega font-medium uppercase">
          ux/ui designer
        </h2>
      </div>

      <div className="flex items-center md:col-span-2 md:justify-center lg:col-span-4 lg:justify-self-center">
        <div>helo</div>
      </div>
    </section>
  );
};

export default DeveloperSection;
