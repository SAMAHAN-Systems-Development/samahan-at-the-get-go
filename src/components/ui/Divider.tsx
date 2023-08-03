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
          'bg-orange py-[1rem] px-4 text-sm sm:text-sm md:text-base lg:text-base italic',
        SCBPage:
          'bg-blue py-8 px-4 md:py-[2rem] lg:py-[2rem] text-sm font-medium font-artega sm:text-base md:text-base lg:text-[1.625rem]',
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
    <div className="relative flex overflow-x-hidden">
      <div className={dividerVariants({ page })}>
        <p className="text-white absolute animate-marquee">{text}</p>
        <p className="text-white absolute animate-marquee2">{text}</p>
      </div>
    </div>
  );
};

export default Divider;
