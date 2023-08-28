import type { ModalDataType } from 'library/types/ModalDataType';
import paperboat from 'public/assets/images/initiatives/paperboat.jpg';
import waypoint from 'public/assets/images/initiatives/waypoint.png';
import paperboat2 from 'public/assets/images/InitiativesModal/paperboat2.jpg';
import waypoint2 from 'public/assets/images/InitiativesModal/waypoint2.jpg';

export const initiativesOSG: ModalDataType[] = [
  {
    title: 'The Ateneo Waypoint: SAMAHAN Helpdesk',
    number: '01',
    imageUrl1: waypoint,
    imageUrl2: waypoint2,
    description:
      'As we gear for the new University setup, it is vital that students are equipped with the guidance and support they need as they venture through the renewed University life. With proper information dissemination and a new query response system, the Ateneo Waypoint will set the marks as they find their way through the Ateneo.',
  },
  {
    title: 'The Paper Boat Project: Year 3',
    number: '02',
    imageUrl1: paperboat,
    imageUrl2: paperboat2,
    description:
      'As we continue the mission of partnering and connecting with our Mindanaoan learners, we ground ourselves on the vision to empower them as they set sail towards their dreams and aspirations. Through storytelling and dialogue, the Paper Boat Project aims to further the goals the younger generation will design themselves.',
  },
];
