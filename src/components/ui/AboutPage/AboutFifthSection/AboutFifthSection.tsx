import React from "react";
import Image from "next/image";

type TitleProps = {
  title: string;
};

const AboutFifthSection = (props: TitleProps) => {
  return (
    <>
      <div className="w-full h-screen flex justify-center">
        <div className="relative w-full m-5 border-2 border-blue rounded-lg flex flex-col gap-5">
          <div className="relative sm:w-36 sm:h-36 w-20 h-20 sm:mx-10 mx-4 mt-6 ">
            <Image
              src="/assets/images/LeftBlueArrow.png"
              alt="Blue Arrow"
              className="object-contain"
              fill
            />
          </div>
          <div className="flex flex-col sm:mx-14 sm:mb-14 mx-6 mt-6 gap-3 text-2xl lg:text-6xl md:text-5xl">
            <h1 className=" flex flex-col gap-2 text-blue font-semibold tracking-wide font-artega">
              <span className="text-blue sm:text-2xl text-sm font-appleGaramound italic font-semibold">
                We aim to be in our
              </span>{" "}
              {props.title}
            </h1>
          </div>

          <div className="flex flex-col">
            <div className="sm:mx-14 mx-6 mt-4">
              <p className="text-orange font-artega font-bold xl:text-2xl md:text-lg text-xs text-justify">
                Rooted in our renewed sense of purpose, we aspire to start up
                once more and invigorate a fullest comeback, to Ateneo and
                beyond
              </p>
            </div>

            <div className="sm:mx-14 mx-6 sm:mt-8 mt-4 mb-2 overflow-hidden">
              <p className="text-lightBlue text-sm lg:text-xl md:text-lg text-justify">
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
