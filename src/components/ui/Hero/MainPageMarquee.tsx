import React from 'react';

const MARQUEE_CONTENT =
  'The Samahan ng mga Mag-aaral ng Pamantasang ng Ateneo de Davao, or SAMAHAN, is the lone autonomous Student Government of the College Unit of Ateneo de Davao University.';

const MainPageMarquee: React.FC = () => {
  return (
    <div className="relative flex overflow-x-hidden w-screen">
      <div className="w-full h-auto rounded-[1.25rem] relative flex whitespace-nowrap justify-center items-center py-[0.8rem] px-4 uppercase md:text-[1rem] text-[0.6rem] font-artega overflow-hidden">
        <p className="text-lightBlue absolute animate-marquee">
          {MARQUEE_CONTENT}
        </p>
        <p className="text-lightBlue absolute animate-marquee2">
          {MARQUEE_CONTENT}
        </p>
      </div>
    </div>
  );
};

export default MainPageMarquee;
