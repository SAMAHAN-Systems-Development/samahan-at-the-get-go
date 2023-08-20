import React from 'react';

const MARQUEE_CONTENT =
  'The Samahan ng mga Mag-aaral ng Pamantasang ng Ateneo de Davao, or SAMAHAN, is the lone autonomous Student Government of the College Unit of Ateneo de Davao University.';

const MainPageMarquee: React.FC = () => {
  return (
    <div className="relative flex overflow-x-hidden w-full">
      <div className="w-full h-auto rounded-[1.25rem] relative flex whitespace-nowrap justify-center items-center m:py-[1rem] py-[0.5rem] px-4 uppercase md:text-[1rem] text-[0.6rem] overflow-hidden">
        <p className="text-blue absolute animate-marquee">{MARQUEE_CONTENT}</p>
        <p className="text-blue absolute animate-marquee2">{MARQUEE_CONTENT}</p>
      </div>
    </div>
  );
};

export default MainPageMarquee;
