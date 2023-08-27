import React from 'react';

const AdvocasixDescriptionCard = () => {
  return (
    <>
      <div className="w-full overflow-x-hidden bg-lightBlue flex flex-col justify-start p-9 md:p-16 xl:p-32 h-fit">
        <h1 className="font-artega leading-normal text-white pb-5 md:pb-10 xl:pb-14 text-2xl sm:text-4xl md:text-6xl xl:text-8xl">
          ADVOCASIX
        </h1>
        <p className="text-white text-base md:text-xl xl:text-2xl">
          The Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao, guided
          by its Jesuit, Filipino, and Mindanaoan values, aspires to be an
          autonomous student government that is genuinely present in championing
          here and now its chosen six pillar advocacies.
        </p>
      </div>
    </>
  );
};

export default AdvocasixDescriptionCard;
