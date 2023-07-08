import React from "react";

const AboutFirstSection = () => {
  return (
    <>
      <div className="relative w-full m-5 border-4 border-blue-900 rounded-lg flex flex-col">
        <div className="flex flex-row justify-between m-14">
          <p className="text-black font-bold text-2xl">Abt us</p>
          <p className="text-black font-bold text-2xl">#abt us</p>
        </div>

        <div className="absolute flex flex-col bottom-0 m-14">
          <h1 className="text-blue-900 text-7xl">THIS IS</h1>
          <h1 className="text-blue-900 text-9xl font-semibold">SAMAHAN</h1>
        </div>
      </div>
    </>
  );
};

export default AboutFirstSection;
