import React from "react";

type TitleProps = {
  title: string;
};

const AboutFirstSection = (props: TitleProps) => {
  return (
    <>
      <div className="w-full h-screen flex justify-center">
        <div className="relative w-full m-5 border-card border-blue rounded-section-card flex flex-col">
          <div className="flex flex-row justify-between sm:m-14 m-6">
            <p className="text-blue font-light sm:text-xl text-xs font-artega">
              About us
            </p>
            <p className="text-blue font-semibold sm:text-2xl text-xs italic font-appleGaramound">
              #AtTheGetGo
            </p>
          </div>

          <div className="absolute flex flex-col bottom-0 sm:m-14 m-6">
            <h1 className="text-blue md:text-4xl lg:text-7xl text-xl font-appleGaramound italic font-bold">
              THIS is
            </h1>
            <h1 className="text-blue text-2xl lg:text-8xl md:text-5xl font-semibold tracking-wide font-artega">
              {props.title}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFirstSection;
