import type { FC } from 'react';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

type SocialsType = {
  facebook?: string;
  instagram?: string;
  twitter?: string;
};

type RecWeekModalBodyCardProps = {
  socials: SocialsType;
  text: string;
};

const RecWeekModalBodyCard: FC<RecWeekModalBodyCardProps> = ({
  text,
  socials,
}) => {
  return (
    <div className="flex flex-col bg-lightBlue rounded-section-card px-8 py-10 sm:px-14 sm:py-16 lg:px-24 lg:py-36">
      <p className="text-white text-xs text-justify sm:text-base lg:text-2xl">
        {text}
      </p>
      <div className="flex flex-col space-y-2">
        <p className="font-appleGaramond-bold italic text-beige text-lg sm:text-2xl lg:text-3xl mt-8 sm:mt-14 lg:mt-20 mx-auto sm:mx-0 md:mx-0 lg:mx-0">
          Get to know us here:
        </p>
        <div className="flex text-white text-lg sm:text-2xl lg:text-4xl space-x-2 sm:space-x-4 lg:space-x-6 mx-auto sm:mx-0 md:mx-0 lg:mx-0">
          {socials.facebook && (
            <Link href={socials.facebook}>
              <FaFacebookF />
            </Link>
          )}
          {socials.twitter && (
            <Link href={socials.twitter}>
              <FaTwitter />
            </Link>
          )}
          {socials.instagram && (
            <Link href={socials.instagram}>
              <FaInstagram />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecWeekModalBodyCard;
