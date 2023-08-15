import type { OfficesType } from 'lib/types/officesType';

import OSGImage from '/public/assets/images/OSGImage.png';
import OSPImage from '/public/assets/images/OSPImage.png';
import OSTImage from '/public/assets/images/OSTImage.png';
import OVPImage from '/public/assets/images/OVPImage.png';

export const OfficesDescription: OfficesType[] = [
  {
    officesNumber: '01',
    officesTitle: 'The OSP',
    officesPosition: 'PRESIDENT',
    officesDescription:
      'is the highest executive office, aims to establish harmony and efficiency in both the internal operations of the student government and external relations.',
    imageUrl: OSPImage,
  },
  {
    officesNumber: '01',
    officesTitle: 'The OVP',
    officesPosition: 'VICE PRESIDENT',
    officesDescription:
      'aims to supervise the internal affairs of the SAMAHAN Central Board and lead the Student Assembly.',
    imageUrl: OVPImage,
  },
  {
    officesNumber: '01',
    officesTitle: 'The OSG',
    officesPosition: 'SECRETARY GENERAL',
    officesDescription:
      'aims to ensure efficiency on administrative and secretariat works that shall mobilize the student government to operate its services and meet its goals.',
    imageUrl: OSGImage,
  },
  {
    officesNumber: '01',
    officesTitle: 'The OST',
    officesPosition: 'TREASURER',
    officesDescription:
      'aims to establish a well-financed, transparent, and resourceful student government that can utilize its funds to meet its goals and implement its mandates.',
    imageUrl: OSTImage,
  },
];

export default OfficesDescription;
