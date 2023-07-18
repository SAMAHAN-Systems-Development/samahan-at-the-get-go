import type { StaticImageData } from 'next/image';

export type largeOfficer = {
  officer: {
    firstName: string;
    lastName: string;
    position: string;
  };
  imageUrl: StaticImageData;
  link?: string;
};
