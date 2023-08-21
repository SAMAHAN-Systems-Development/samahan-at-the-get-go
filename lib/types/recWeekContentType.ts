import type { StaticImageData } from 'next/image';

import type { SocialsType } from '@/components/ui/RecWeek/RecWeekModalBodyCard';

export type RecWeekDataType = {
  bottomText: string;
  buttonImageSrc: StaticImageData;
  fullName: string;
  headerImageSrc: StaticImageData;
  name: string;
  primerLink: string;
  recruitmentFormLink: string;
  socials: SocialsType;
  text: string;
  topText: string;
};
