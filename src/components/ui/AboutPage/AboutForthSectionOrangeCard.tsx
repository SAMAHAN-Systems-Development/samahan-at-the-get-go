import React from "react";

type CardProps = {
  year: string;
};

const AboutForthSectionOrangeCard = (props: CardProps) => {
  return (
    <>
      {/* first card */}
      <div className="w-full bg-orange rounded-lg flex flex-col h-1/2 justify-center">
        <div className="flex flex-col sm:m-12 m-6">
          <div className="flex sm:mx-12 m-3 my-4">
            <p className="text-white lg:text-lg md:text-base text-sm font-light text-justify">
              But this time, as we move forward to reclaim the life we used to
              own, we envision a community that starts anew, a student body that
              expands to new directions, and a
            </p>
          </div>

          <div className="flex flex-col sm:ml-12 m-6">
            <h1 className="text-white lg:text-6xl md:text-4xl text-3xl font-semibold font-artega">
              {props.year}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutForthSectionOrangeCard;
