import React from 'react';

type TextProps = {
  text: string;
};

const Divider = (props: TextProps) => {
  return (
    <div className="w-full overflow-hidden bg-orange rounded-md relative">
      <p className="text-white inline-block absolute">{props.text}</p>
    </div>
  );
};

export default Divider;
