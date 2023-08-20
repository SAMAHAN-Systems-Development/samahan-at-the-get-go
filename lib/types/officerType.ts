import type { StaticImageData } from 'next/image';

export type OfficerType = {
  firstName: string;
  imageUrl: StaticImageData;
  lastName: string;
  position: string;
  department?: string;
  email?: string;
};
