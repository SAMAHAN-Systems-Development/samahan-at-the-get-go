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
  const handlePerPage = () => {
    return window.innerWidth >= 992 ? 3 : 1;
  };
  return (
    <Splide
      options={{
        arrows: false,
        perPage: handlePerPage(),
        // fixedWidth: '435px',
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
  );
};

export default SmallOfficesCardCarousel;
