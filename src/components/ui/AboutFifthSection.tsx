import React from "react";

type TitleProps = {
  title: string;
};

const AboutFifthSection = (props: TitleProps) => {
  return (
    <>
      <div className="w-full h-screen flex justify-center">
        <div className="relative w-full m-5 border-2 border-blue rounded-lg flex flex-col gap-5">
          <div className="flex flex-row justify-start sm:m-14 mx-6 mt-6">
            <p className="text-blue font-light sm:text-xl text-sm font-artega">
              Logo
            </p>
          </div>
          <div className="flex flex-col sm:mx-14 sm:mb-14 mx-6 mt-6 gap-3">
            <h1 className="text-blue sm:text-xl text-sm font-appleGaramound italic font-bold">
              We aim to be in our
            </h1>
            <h1 className="text-blue text-2xl lg:text-6xl md:text-5xl font-semibold tracking-wide font-artega">
              {props.title}
            </h1>
          </div>

          <div className="flex flex-col">
            <div className="sm:mx-14 mx-6 mt-4">
              <p className="text-orange font-artega font-bold sm:text-lg text-sm text-justify">
                Rooted in our renewed sense of purpose, we aspire to start up
                once more and invigorate a fullest comeback, to Ateneo and
                beyond
              </p>
            </div>

            <div className="sm:mx-14 mx-6 mt-4 overflow-hidden">
              <p className="text-lightBlue text-lg sm:text-base text-justify">
                As we reignite the ambitions we once shared together, we dream
                of bringing them to life by leading our actions into limitless
                opportunities, striving to advance leadership towards
                people-centered advocacies, and bringing forth concrete actions
                in building a student government that is adaptive,
                transformative, and closer to its people, onwards to our real
                Atenean dream.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutFifthSection;
