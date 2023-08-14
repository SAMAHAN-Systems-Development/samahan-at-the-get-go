import type { StaticImageData } from 'next/image';
import Image from 'next/image';

interface OfficesHeaderNewProps {
  imageSrc: StaticImageData;
  position: string; // Add a new prop for image source
}

const OfficesHeaderNew: React.FC<OfficesHeaderNewProps> = ({
  position,
  imageSrc,
}) => {
  return (
    <div className="w-full grid content-between text-lightBlue">
      <div className="overflow-y-hidden relative w-full h-[25rem] sm:h-[28rem] md:h-[42.0625rem] lg:h-screen">
        <Image
          alt={`Office Of The ${position}`}
          src={imageSrc}
          className="object-cover"
          placeholder="blur"
          draggable={false}
          fill
        />
        <div className="absolute inset-x-0 bottom-0 h-[10rem] bg-gradient-to-b from-white/0 to-white" />
      </div>
      <div className="mb-[3.81rem] mt-[5rem] md:mb-[3.81rem] md:mt-[9.25] lg:mb-[3.75rem] lg:mt-[12.5rem]">
        <h1 className="text-center">
          <span className="font-appleGaramond block italic font-bold text-[1.5625rem] sm:text-[2.4rem] md:text-[3.4375rem] lg:text-[3.9375rem] leading-[1.2rem] sm:leading-[2rem] md:leading-[2.7rem] lg:leading-none">
            Office of the
          </span>
          <span className="font-artega uppercase text-wrap font-medium text-[1.5rem] max-w-[20.3125rem] sm:text-[2.5rem] md:text-[3.8125rem] md:w-[46rem] lg:w-[36rem] lg:text-[4.6875rem] leading-[2rem] sm:leading-[3rem] md:leading-[4.5rem] lg:leading-none">
            {position}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default OfficesHeaderNew;
