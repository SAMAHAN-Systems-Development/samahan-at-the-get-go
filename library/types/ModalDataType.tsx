import type { StaticImageData } from 'next/image';

export type ModalDataType = {
  description: string;
  imageUrl1: StaticImageData;
  imageUrl2: StaticImageData;
  title: string;
  hashtag?: string;
  number?: string;
};
