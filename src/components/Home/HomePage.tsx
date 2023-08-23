import type { FC } from 'react';
import React from 'react';

import Button from '@/components/ui/Button';

const HomePage: FC = () => {
  return (
    <>
      <Button
        href="https://www.samahan.addu.edu.ph/"
        className="font-artega bg-beige text-white"
      >
        Click Me!
      </Button>
    </>
  );
};

export default HomePage;
