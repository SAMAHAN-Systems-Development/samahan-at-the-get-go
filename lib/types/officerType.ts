import type { StaticImageData } from 'next/image';

export type officer = {
  officer: {
    firstName: string;
    lastName: string;
    position: string;
    department?: string;
  };
  imageUrl: StaticImageData;
  link?: string;
};
