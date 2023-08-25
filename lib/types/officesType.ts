import type { StaticImageData } from 'next/image';

export type OfficesType = {
  imageUrl: StaticImageData;
  officesDescription: string;
  officesNumber: string;
  officesPosition: string;
  officesTitle: string;
  pageLink?: string;
};
