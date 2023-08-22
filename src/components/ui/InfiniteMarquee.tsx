import React from 'react';

const InfiniteMarquee = () => {
  const atTheGetGo = [
    'At the Get Go',
    'At the Get Go',
    'At the Get Go',
    'At the Get Go',
    'At the Get Go',
  ];

  const renderPhrase = () => {
    return atTheGetGo.map((text, index) => (
      <span
        key={index}
        className="mx-4 sm:text-xl md:text-2xl lg:text-4xl font-artega"
      >
        {text}
      </span>
    ));
  };

  return (
    <div className="relative flex overflow-x-hidden text-blue uppercase">
      <div className="py-12 animate-marquee whitespace-nowrap">
        {renderPhrase()}
      </div>
      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        {renderPhrase()}
      </div>
    </div>
  );
};

export default InfiniteMarquee;
