import type { officer } from 'lib/types/officerType';
import Canonigo from 'public/assets/images/Canonigo.jpg';
import Cortes from 'public/assets/images/Cortes.jpg';
import Lapatis from 'public/assets/images/Lapatis.jpg';
import Mendez from 'public/assets/images/Mendez.jpg';
import Nazareno from 'public/assets/images/Nazareno.jpg';
import Nobleza from 'public/assets/images/Nobleza.jpg';
import Reyes from 'public/assets/images/Reyes.jpg';
import Santella from 'public/assets/images/Santella.jpg';
import Tulipas from 'public/assets/images/Tulipas.jpg';

export const Representatives: officer[] = [
  {
    officer: {
      position: 'Accountancy Cluster Representative',
      firstName: 'Vincent Cesar',
      lastName: 'Canonigo',
    },
    imageUrl: Canonigo,
  },
  {
    officer: {
      position: 'Business and Management Representative',
      firstName: 'Justin Matthew',
      lastName: 'Nazareno',
    },
    imageUrl: Nazareno,
  },
  {
    officer: {
      position: 'Computer Studies Representative',
      firstName: 'Ariane Mae',
      lastName: 'Mendez',
    },
    imageUrl: Mendez,
  },
  {
    officer: {
      position: 'Hummanities and Lettters Representative',
      firstName: 'Donnabel',
      lastName: 'Nobleza',
    },
    imageUrl: Nobleza,
  },
  {
    officer: {
      position: 'Natural Science and Mathematics Representative',
      firstName: 'Carrie Louie',
      lastName: 'Tulipas',
    },
    imageUrl: Tulipas,
  },
  {
    officer: {
      position: 'School of Engineering and Architecture Representative',
      firstName: 'Cai Roxana',
      lastName: 'Reyes',
    },
    imageUrl: Reyes,
  },
  {
    officer: {
      position: 'School of Education Representative',
      firstName: 'Monica Gwen',
      lastName: 'Cortes',
    },
    imageUrl: Cortes,
  },
  {
    officer: {
      position: 'School of Nursing Representative',
      firstName: 'Leen Juliet',
      lastName: 'Lapatis',
    },
    imageUrl: Lapatis,
  },
  {
    officer: {
      position: 'Social Sciences Representative',
      firstName: 'Rey Angelo',
      lastName: 'Santella',
    },
    imageUrl: Santella,
  },
];
