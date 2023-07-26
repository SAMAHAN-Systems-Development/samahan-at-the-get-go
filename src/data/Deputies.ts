import type { OfficerType } from 'lib/types/officerType';

import BastianImage from '/public/assets/images/Bastian.jpg';
import CaneteImage from '/public/assets/images/Canete.jpg';
import ClardeImage from '/public/assets/images/Clarde.jpg';
import FernandezImage from '/public/assets/images/Fernandez.jpg';
import GabatoImage from '/public/assets/images/Gabato.jpg';
import GironImage from '/public/assets/images/Giron.jpg';
import GutierrezImage from '/public/assets/images/Gutierrez.jpg';
import LipasanImage from '/public/assets/images/Lipasan.jpg';
import ParkImage from '/public/assets/images/Park.jpg';
import ParreñoImage from '/public/assets/images/Parreño.jpg';
import RuizImage from '/public/assets/images/Ruiz.jpg';
import SapsalImage from '/public/assets/images/Sapsal.jpg';
import ValdezImage from '/public/assets/images/Valdez.jpg';

export const OSPDeputies: OfficerType[] = [
  {
    position: 'Chief-of-Staff',
    firstName: 'John Paul',
    lastName: 'Sapsal',
    imageUrl: SapsalImage,
  },
  {
    position: 'Executive Secretary',
    firstName: 'Alvin',
    lastName: 'Parreno',
    imageUrl: ParreñoImage,
  },
  {
    position: 'Executive Undersecretary',
    firstName: 'Lendon John',
    lastName: 'Gabato',
    imageUrl: GabatoImage,
  },
  {
    position: 'Executive Undersecretary',
    firstName: 'Mark Loyd',
    lastName: 'Lipasan',
    imageUrl: LipasanImage,
  },
];

export const OVPDeputies: OfficerType[] = [
  {
    position: 'Legislative Secretary',
    firstName: 'Chang Hyun',
    lastName: 'Park',
    imageUrl: ParkImage,
  },
  {
    position: 'Legislative Undersecretary',
    firstName: 'Iesha Jaesamin',
    lastName: 'Bastian',
    imageUrl: BastianImage,
  },
  {
    position: 'Legislative Undersecretary',
    firstName: 'Andrea Petetricia',
    lastName: 'Giron',
    imageUrl: GironImage,
  },
];

export const OSGDeputies: OfficerType[] = [
  {
    position: 'Administrative Secretary',
    firstName: 'Khrysha Louise',
    lastName: 'Fernandez',
    imageUrl: FernandezImage,
  },
  {
    position: 'Administrative Undersecretary',
    firstName: 'Philipina',
    lastName: 'Gutierrez',
    imageUrl: GutierrezImage,
  },
  {
    position: 'Administrative Undersecretary',
    firstName: 'Jayle Mikyla',
    lastName: 'Valdez',
    imageUrl: ValdezImage,
  },
];

export const OSTDeputies: OfficerType[] = [
  {
    position: 'Finance Secretary',
    firstName: 'Mary Clair',
    lastName: 'Clarde',
    imageUrl: ClardeImage,
  },
  {
    position: 'Finance Undersecretary',
    firstName: 'Charles Andrew',
    lastName: 'Ruiz',
    imageUrl: RuizImage,
  },
  {
    position: 'Finance Undersecretary',
    firstName: 'Rafael Rex',
    lastName: 'Canete',
    imageUrl: CaneteImage,
  },
];
