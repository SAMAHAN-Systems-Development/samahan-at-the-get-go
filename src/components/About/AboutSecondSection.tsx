import React from "react";

const AboutSecondSection = () => {
  return (
    <>
      <div className="relative flex flex-row justify-start w-full gap-2 m-5 ">
        <div className="w-3/5 border-4 border-blue-900 rounded-lg flex flex-col">
          <div className="flex flex-row justify-between m-11">
            <p className="text-blue-900">a</p>
            <p className="text-blue-900 text-lg font-bold">Since 92839</p>
          </div>

          <div className="flex flex-col ml-10 mb-6">
            <h1 className="text-blue-900 text-4xl">The</h1>
            <h1 className="text-blue-900 text-6xl font-semibold">SAMAHAN</h1>
          </div>

          <div className="flex justify-center items-center">
            <hr className="divider w-11/12 flex justify-center items-center bg-blue-900" />
          </div>
        </div>
        <div className="w-2/5 bg-blue-900 rounded-lg flex flex-col">b</div>
      </div>
    </>
  );
};

export default AboutSecondSection;
