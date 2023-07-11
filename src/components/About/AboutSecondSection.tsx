import React from "react";

const AboutSecondSection = () => {
  return (
    <>
      <div className="relative flex flex-col justify-start w-full gap-2 m-5 xl:flex-row md:flex-col">
        {/* first card */}
        <div className="xl:w-3/5 md:w-full w-full border-2 border-blue rounded-lg flex flex-col ">
          <div className="flex flex-row justify-between m-11">
            <p className="text-blue">a</p>
            <p className="text-blue text-base font-light font-artega">
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
                Commitment
              </p>
            </div>

            <div className="flex mx-10 mb-6">
              <p className="text-blue font-bold lg:text-lg md:text-base text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim
              </p>
            </div>

            {/* divider */}
            <div className="flex justify-center items-center my-4">
              <hr className="divider w-11/12 flex justify-center items-center bg-blue" />
            </div>

            <div className="flex flex-row gap-3 my-6 ml-10">
              <p className="text-blue">arrow</p>
              <p className="text-blue font-bold font-2xl italic font-appleGaramound">
                Commitment
              </p>
            </div>

            <div className="flex mx-10 mb-6">
              <p className="text-blue font-bold lg:text-lg md:text-base text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo
              </p>
            </div>
          </div>
        </div>

        {/* +++++++++++++++++++++++++++++++++++++++++++++second card+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

        <div className="relative xl:w-2/5 md:w-full w-full bg-blue rounded-lg flex flex-col justify-center items-center gap-3">
          <div className="flex xl:items-center sm:items-end xl:flex-col lg:flex-row md:flex-row md:mx-0 lg:mx-0 justify-between gap-10 my-5 flex-col">
            <div className="flex justify-end ">
              <p className="text-xl text-white flex">Logo</p>
            </div>

            <h1 className="text-white xl:text-7xl text-5xl tracking-wider font-semibold font-helvetica mt-5">
              This Year
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
