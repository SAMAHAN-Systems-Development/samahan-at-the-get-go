import React from 'react';

const AtTheGetGoDefinition: React.FC = () => {
  return (
    <div className="m-2 md:ml-10 flex flex-col items-start text-lightBlue">
      <div className="flex flex-col space-y-0">
        <h2 className="md:text-xl text-[0.625rem] font-artega leading-4">
          At
          <span className="md:text-sm font-sans text-[0.5rem] italic block">
            (prep.)
          </span>
        </h2>
        <p className="md:text-xl font-appleGaramond italic text-[0.563rem] font-[700] leading-4">
          Expressing time, location, or a particular point
        </p>
      </div>
      <div className="md:flex md:space-x-4">
        <div className="flex flex-col ">
          <h2 className="md:text-xl text-[0.625rem] font-artega leading-4">
            The
            <span className="md:text-sm font-sans text-[0.5rem] italic block">
              (det.)
            </span>
          </h2>
          <p className="md:text-xl font-appleGaramond italic text-[0.563rem] font-[700] leading-4">
            Used to move forward
          </p>
        </div>
        <div className="flex flex-col md:px-10">
          <h2 className="md:text-xl text-[0.625rem] font-artega leading-4">
            Get-go
            <span className="md:text-sm font-sans text-[0.5rem] italic block">
              (n.)
            </span>
          </h2>
          <p className="md:text-xl font-appleGaramond italic text-[0.563rem] font-[700] leading-4">
            the very beginning; the very start
          </p>
        </div>
      </div>
    </div>
  );
};

export default AtTheGetGoDefinition;
