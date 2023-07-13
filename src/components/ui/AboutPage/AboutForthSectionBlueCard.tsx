import React from "react";

type CardProps = {
  year: string;
};

const AboutForthSectionBlueCard = (props: CardProps) => {
  return (
    <>
      {/* first card */}
      <div className="w-full bg-blue rounded-lg flex flex-col">
        <div className="flex flex-col justify-center mt-7">
          <div className="flex flex-col ml-12 mb-4">
            <h1 className="text-white lg:text-6xl md:text-4xl text-3xl font-semibold font-artega">
              {props.year}
            </h1>
          </div>

          <div className="flex mx-12 mb-6">
            <p className="text-white font-bold lg:text-lg md:text-base text-sm">
              For the past years, our SAMAHAN navigated a full circle of putting
              visions of every Atenean at the center. From there, we took a leap
              of faith to own the future, calling upon each Atenean to hold
              those visions more in motion and stride them to the here and now.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutForthSectionBlueCard;
