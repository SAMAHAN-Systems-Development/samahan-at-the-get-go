import type { FC } from "react";
import React from "react";

import Button from "@/components/ui/Button";

const HomePage: FC = () => {
  return (
    <Button
      href="https://www.samahan.addu.edu.ph/"
      className="bg-pink-900 text-lg"
    >
      Click me!
    </Button>
  );
};

export default HomePage;
