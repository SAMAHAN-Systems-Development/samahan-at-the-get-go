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
        AboutPage:
          'py-[1rem] px-4 text-sm sm:text-sm md:text-base lg:text-base italic',
        SCBPage:
          'py-8 px-4 md:py-[2rem] lg:py-[2rem] text-sm font-medium font-artega sm:text-base md:text-base lg:text-[1.625rem]',
      },
    },
  }
);

type TextProps = {
  page: string;
  text: string;
} & VariantProps<typeof dividerVariants>;

const Divider: React.FC<TextProps> = ({ page, text }) => {
  return (
    <div className="relative flex overflow-x-hidden px-6 py-2">
      <div className={dividerVariants({ page })}>
        <p className="text-lightBlue absolute animate-marquee">{text}</p>
        <p className="text-lightBlue absolute animate-marquee2">{text}</p>
      </div>
    </div>
  );
};

export default Divider;
