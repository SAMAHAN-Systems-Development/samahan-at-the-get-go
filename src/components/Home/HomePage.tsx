import type { FC } from "react";
import React from "react";

import Button from "@/components/ui/Button";
import Footer from "@/components/ui/Footer";
const HomePage: FC = () => {
  return (
    <>
      <Button
        href="https://www.samahan.addu.edu.ph/"
        className="font-artega bg-beige text-white"
      >
        Click Me!
      </Button>
      <Button
        href="https://www.samahan.addu.edu.ph/"
        className="font-appleGaramound bg-beige text-white"
      >
        Click Me!
      </Button>
      <Footer />
    </>
  );
};

export default HomePage;
