import type { StaticImageData } from 'next/image';

export type departmentOfficer = {
  officeName: string;
  officers: {
    firstName: string;
    lastName: string;
    position: string;
    department?: string;
    imageUrl: StaticImageData;
  }[];
};
