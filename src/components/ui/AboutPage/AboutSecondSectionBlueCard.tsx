import React from "react";

type CardProps = {
  title: string;
};

const AboutSecondSection = (props: CardProps) => {
  return (
    <>
      <div className="relative flex flex-col justify-start w-full gap-2 m-5 xl:flex-row md:flex-col">
        {/* +++++++++++++++++++++++++++++++++++++++++++++second card+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <div className="relative xl:w-2/5 md:w-full w-full bg-blue rounded-lg flex flex-col justify-center items-center gap-3">
          <div className="flex xl:items-center sm:items-end xl:flex-col lg:flex-row md:flex-row md:mx-0 lg:mx-0 justify-between lg:gap-80 md:gap-80 xl:gap-10 sm:gap-10 my-5 flex-col">
            <div className="flex justify-end ">
              <p className="text-xl text-white flex">Logo</p>
            </div>

            <h1 className="text-white xl:text-7xl text-5xl tracking-wider font-semibold font-helvetica mt-5">
              {props.title}
            </h1>
          </div>

          <div className="flex mx-10 my-6">
            <p className="text-white font-base text-lg text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSecondSection;
