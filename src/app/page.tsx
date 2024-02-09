import type { Metadata } from 'next';

import HomePage from '@/components/Home/HomePage';
import ChatPlugin from '@/components/MessengerPlugin/ChatPlugin';

export const metadata: Metadata = {
  title: 'SAMAHAN - At the Get Go',
  description:
    "The official website of the Ateneo de Davao University's Student Government",
};

export default function Home() {
  return (
    <main>
      <HomePage />
      <ChatPlugin />
    </main>
  );
}
