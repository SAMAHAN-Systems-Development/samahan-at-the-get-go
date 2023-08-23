'use client';

import type { FC } from 'react';
import React from 'react';

import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/react-splide/css';

import SmallOfficesCard from '@/components/ui/Offices/SmallOfficesCard';
import { OfficesDescription } from '@/data/OfficesDescription';

type SmallOfficesCardCarouselProps = {
  officesPosition: string;
};

const SmallOfficesCardCarousel: FC<SmallOfficesCardCarouselProps> = ({
  officesPosition,
}) => {
  return (
    <div className="">
      <Splide
        options={{
          arrows: false,
          perPage: 1,
          fixedWidth: '435px',
          pagination: false,
        }}
      >
        {OfficesDescription.map((item, index) => {
          if (officesPosition !== item.officesPosition) {
            return (
              <SplideSlide key={index}>
                <SmallOfficesCard
                  officesTitle={item.officesTitle}
                  imageUrl={item.imageUrl}
                  officesPosition={item.officesPosition}
                />
              </SplideSlide>
            );
          }
        })}
      </Splide>
    </div>
  );
};

export default SmallOfficesCardCarousel;
