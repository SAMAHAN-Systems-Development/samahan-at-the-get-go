import React from "react";

interface OfficesCardComponentProps {
  officesNumber: string;
  officesTitle: string;
  officesDescription: string;
}

const OfficesCardComponent: React.FC<OfficesCardComponentProps> = ({
  officesNumber,
  officesTitle,
  officesDescription,
}) => {
  return (
    <div className="ml-4 mr-4 p-8 text-white bg-orange rounded-t-3xl ">
      <div className="justify-self-start flex flex-row mb-4">
        <p className="font-artega font-medium"> {officesNumber} </p>
        <p className="font-appleGaramound italic font-bold justify-end ml-auto">
          #AtTheGetGo
        </p>
      </div>
      <div className=" flex flex-col items-center mb-16">
        <h1 className="font-artega text-3xl font-medium justify-self-center mb-8">
          {officesTitle}
        </h1>
        <p className="font-sans text-justify flex flex-wrap">
          {officesDescription}
        </p>
      </div>
      <div className="flex flex-row">
        <div className="w-4 h-4 rounded-full bg-blue"> </div>
        <p className="font-normal justify-end ml-auto "> SAMAHAN </p>
      </div>
    </div>
  );
};

export default OfficesCardComponent;
