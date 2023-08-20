import Image from 'next/image';

import SCBHeaderImage from 'public/assets/images/SCBHeaderImage.png';
const SCBHeader = () => {
  return (
    <div className="flex justify-center relative h-[30rem] sm:h-[38.75rem] md:h-[59.375rem] lg:h-screen overflow-hidden w-full py-[3.31rem] sm:py-[6rem] md:py-[10rem] lg:py-[4rem] -z-10">
      <Image
        src={SCBHeaderImage}
        alt={`We are SAMAHAN Picture`}
        className="object-cover"
        placeholder="blur"
        draggable={false}
        fill
      />
      <div className="absolute inset-x-0 bottom-0 h-[3.31rem] md:h-[12.13rem] lg:h-[13rem] bg-gradient-to-b from-white/0 to-white" />
      <div className="flex text-center flex-col justify-end text-white p-[3rem] md:p-[3.8rem] lg:p-[6.31rem] z-10">
        <h1>
          <span className="font-appleGaramond block italic font-medium text-[1.5625rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[4rem]">
            We Are
          </span>
          <span className="font-artega uppercase font-medium text-[1.4375rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[4rem] lg:w-[53.3125rem] sm:no-wrap text-wrap">
            SAMAHAN
          </span>
        </h1>
        <p className="text-[0.625rem] w-[16.375rem] sm:text-[0.75rem] sm:w-[28rem] md:text-[1.25rem] md:w-[38.25rem] lg:text-[1.25rem] lg:w-[53.3125rem]">
          The Samahan ng mga Mag-aaral ng Pamantasang ng Ateneo de Davao, or
          SAMAHAN, is the lone autonomous Student Government of the College Unit
          of Ateneo de Davao University.
        </p>
      </div>
    </div>
  );
};

export default SCBHeader;
