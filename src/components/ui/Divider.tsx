import React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const dividerVariants = cva(
  [
    'w-full h-8 overflow-hidden rounded-md relative flex justify-center items-center',
  ],
  {
    variants: {
      color: {
        default: 'bg-orange',
        blue: 'bg-blue',
      },
    },
  }
);

type TextProps = {
  text: string;
  color: string;
} & VariantProps<typeof dividerVariants>;

const Divider: React.FC<TextProps> = ({ text, color }) => {
  return (
    <div className={dividerVariants({ color })}>
      <p className="text-white inline-block absolute">{text}</p>
    </div>
  );
};

export default Divider;
