import React from 'react';

const InfiniteMarquee = () => {
  return (
    <>
      <div className="relative flex overflow-x-hidden text-blue uppercase">
        <div className="py-12 animate-marquee whitespace-nowrap">
          <span className="mx-4 sm:text-xl md:text-2xl lg:text-4xl font-artega">
            At the Get Go
          </span>
          <span className="mx-4 sm:text-xl md:text-2xl lg:text-4xl font-artega">
            At the Get Go
          </span>
          <span className="mx-4 sm:text-xl md:text-2xl lg:text-4xl font-artega">
            At the Get Go
          </span>
          <span className="mx-4 sm:text-xl md:text-2xl lg:text-4xl font-artega">
            At the Get Go
          </span>
          <span className="mx-4 sm:text-xl md:text-2xl lg:text-4xl font-artega">
            At the Get Go
          </span>
        </div>
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
          <span className="mx-4 sm:text-xl md:text-2xl lg:text-4xl font-artega">
            At the Get Go
          </span>
          <span className="mx-4 sm:text-xl md:text-2xl lg:text-4xl font-artega">
            At the Get Go
          </span>
          <span className="mx-4 sm:text-xl md:text-2xl lg:text-4xl font-artega">
            At the Get Go
          </span>
          <span className="mx-4 sm:text-xl md:text-2xl lg:text-4xl font-artega">
            At the Get Go
          </span>
          <span className="mx-4 sm:text-xl md:text-2xl lg:text-4xl font-artega">
            At the Get Go
          </span>
        </div>
      </div>
    </>
  );
};

export default InfiniteMarquee;
