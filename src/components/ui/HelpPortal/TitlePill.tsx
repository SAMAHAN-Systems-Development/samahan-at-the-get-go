import React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const pillVariants = cva(
  [
    'px-5 py-2 bg-lightBlue font-artega w-fit h-fit text-white capitalize rounded-section-card text-base text-center',
  ],
  {
    variants: {
      color: {
        orange: 'bg-orange',
        blue: 'bg-lightBlue',
      },
    },
  }
);

type TitlePillProps = {
  color: string;
  title: string;
} & VariantProps<typeof pillVariants>;

const TitlePill: React.FC<TitlePillProps> = ({ color, title }) => {
  return <div className={pillVariants({ color })}>{title}</div>;
};

export default TitlePill;
