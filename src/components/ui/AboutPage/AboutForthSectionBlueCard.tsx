import React from "react";

type CardProps = {
  year: string;
};

const AboutForthSectionBlueCard = (props: CardProps) => {
  return (
    <>
      {/* first card */}
      <div className="w-full bg-blue rounded-lg flex flex-col h-1/2 justify-center">
        <div className="flex flex-col sm:m-12 m-6">
          <div className="flex flex-col sm:mx-12 my-4">
            <h1 className="text-white lg:text-6xl md:text-4xl text-3xl font-semibold font-artega">
              {props.year}
            </h1>
          </div>

          <div className="flex sm:mx-12 m-6">
            <p className="text-white lg:text-xl md:text-base text-sm font-light text-justify">
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
