import type { Metadata } from 'next';

import HomePage from '@/components/Home/HomePage';

export const metadata: Metadata = {
  title: 'SAMAHAN - At the Get Go',
  description:
    "The official website of the Ateneo de Davao University's Student Government",
};

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
