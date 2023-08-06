import React from 'react';
import Image from 'next/image';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import AtTheGetGoMainPageLogo from 'public/assets/images/AtTheGetGoMainPageLogo.png';
import Carousel1 from 'public/assets/images/carousel/carousel1.png';
import Carousel2 from 'public/assets/images/carousel/carousel2.png';
import Carousel3 from 'public/assets/images/carousel/carousel3.png';
import Carousel4 from 'public/assets/images/carousel/carousel4.png';
import Carousel5 from 'public/assets/images/carousel/carousel5.png';

import '@splidejs/react-splide/css';

const AtTheGetGoLogo: React.FC = () => {
  return (
    <div className="relative">
      <div className="relative top-0 z-10">
        <Image
          src={AtTheGetGoMainPageLogo}
          alt="At The Get Go Logo"
          placeholder="blur"
          draggable={false}
        />
      </div>

      <div className="absolute top-0">
        <Splide
          options={{
            autoplay: true,
            type: 'loop',
            arrows: false,
            speed: 2000,
            interval: 4000,
          }}
        >
          <SplideSlide>
            <Image
              src={Carousel1}
              alt="At The Get Go Logo"
              placeholder="blur"
              draggable={false}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={Carousel2}
              alt="At The Get Go Logo"
              placeholder="blur"
              draggable={false}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={Carousel3}
              alt="At The Get Go Logo"
              placeholder="blur"
              draggable={false}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={Carousel4}
              alt="At The Get Go Logo"
              placeholder="blur"
              draggable={false}
            />
          </SplideSlide>
          <SplideSlide>
            <Image
              src={Carousel5}
              alt="At The Get Go Logo"
              placeholder="blur"
              draggable={false}
            />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default AtTheGetGoLogo;
