import type { StaticImageData } from 'next/image';

export type officer = {
  imageUrl: StaticImageData;
  officer: {
    firstName: string;
    lastName: string;
    position: string;
    department?: string;
  };
  link?: string;
};
