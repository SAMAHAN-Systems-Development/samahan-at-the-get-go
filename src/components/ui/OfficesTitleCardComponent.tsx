import React from "react";
import Image from "next/image";

import SamahanAtTheGetGoLogo from "public/assets/images/SamahanAtTheGetGoLogo.png";

interface OfficesTitleCardComponentProps {
  officesPosition: string;
  officesNumber: string;
}

const OfficesTitleCardComponent: React.FC<OfficesTitleCardComponentProps> = ({
  officesPosition,
  officesNumber,
}) => {
  return (
    <div className="ml-4 mr-4 p-8 text-white bg-transparent rounded-3xl border-2 border-blue">
      <div className="justify-self-start flex flex-row mb-30">
        <p className="font-artega font-medium text-blue"> {officesNumber} </p>
        <div className=" justify-end ml-auto text-blue relative h-20 w-20">
          <Image
            alt="AtTheGetGoLogo"
            src={SamahanAtTheGetGoLogo}
            style={{ objectFit: "contain" }}
            fill={true}
          />
        </div>
      </div>
      <div className=" bottom-0 left-0 flex flex-col p-4 text-blue ">
        <h2 className="font-appleGaramound italic text-2xl font-bold">
          Office of the
        </h2>
        <h1 className="font-artega text-4xl font-medium">{officesPosition}</h1>
      </div>
    </div>
  );
};

export default OfficesTitleCardComponent;
