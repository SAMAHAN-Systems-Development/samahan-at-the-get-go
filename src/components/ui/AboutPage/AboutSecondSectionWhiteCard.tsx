import React from "react";

type CardProps = {
  first_header: string;
  second_header: string;
};

const AboutSecondSectionWhiteCard = (props: CardProps) => {
  return (
    <>
      {/* first card */}
      <div className="xl:w-3/5 md:w-full w-full border-2 border-blue rounded-lg flex flex-col ">
        <div className="flex flex-row justify-between m-11">
          <p className="text-blue">a</p>
          <p className="text-blue text-base font-bold font-artega">
            Since 1982
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-col ml-10 mb-6">
            <h1 className="text-blue text-4xl italic font-appleGaramound">
              The
            </h1>
            <h1 className="text-blue lg:text-6xl md:text-4xl text-xl font-semibold font-artega">
              SAMAHAN
            </h1>
          </div>
          {/* divider */}
          <div className="flex justify-center items-center my-4">
            <hr className="divider w-11/12 flex justify-center items-center bg-blue" />
          </div>

          <div className="flex flex-row gap-3 my-6 ml-10">
            <p className="text-blue">arrow</p>
            <p className="text-blue font-bold font-2xl italic font-appleGaramound">
              {props.first_header}
            </p>
          </div>

          <div className="flex mx-10 mb-6">
            <p className="text-blue font-bold lg:text-lg md:text-base text-sm">
              remains committed in our collective agenda of creating impactful
              results, solutions, and initiatives{" "}
              <span className="text-orange">for the greater communities.</span>
            </p>
          </div>

          {/* divider */}
          <div className="flex justify-center items-center my-4">
            <hr className="divider w-11/12 flex justify-center items-center bg-blue" />
          </div>

          <div className="flex flex-row gap-3 my-6 ml-10">
            <p className="text-blue">arrow</p>
            <p className="text-blue font-bold font-2xl italic font-appleGaramound">
              {props.second_header}
            </p>
          </div>

          <div className="flex mx-10 mb-6">
            <p className="text-blue font-bold lg:text-lg md:text-base text-sm">
              endures, and actively continues to be at the heart of navigating{" "}
              <span className="text-orange">
                our ever-changing University with, for, and by our students.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSecondSectionWhiteCard;
