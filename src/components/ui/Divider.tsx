import React from 'react';

import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

const dividerVariants = cva(
  [
    'w-full h-auto rounded-[1.25rem] relative flex whitespace-nowrap justify-center items-center',
  ],
  {
    variants: {
      page: {
        aboutPage: 'bg-orange py-[1rem] px-4',
        scbPage: 'bg-blue py-8 px-4 md:py-[2rem] lg:py-[2rem]',
      },
    },
  }
);
const textVariants = cva(['text-white absolute'], {
  variants: {
    style: {
      aboutText: 'text-xs sm:text-sm md:text-base lg:text-base',
      scbText:
        'text-sm font-medium font-artega sm:text-base md:text-base lg:text-[1.625rem]',
    },
  },
});

type TextProps = {
  page: string;
  style: 'aboutText' | 'scbText';
  text: string;
} & VariantProps<typeof dividerVariants>;

const Divider: React.FC<TextProps> = ({ page, style, text }) => {
  return (
    <div className=" flex overflow-x-hidden">
      <div className={dividerVariants({ page })}>
        <p className={`${textVariants({ style })} animate-marquee`}>{text}</p>
        <p className={`${textVariants({ style })} animate-marquee2`}>{text}</p>
      </div>
    </div>
  );
};

export default Divider;
