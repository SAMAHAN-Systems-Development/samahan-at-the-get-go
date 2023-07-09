import type { FC } from "react";
import React from "react";
import Link from "next/link";

import Button from "@/components/ui/Button";

const HomePage: FC = () => {
  return (
    <>
      <Link href="/SamahanCentralBoard">
        <Button className="font-artega bg-beige text-white">To SCB</Button>
      </Link>
    </>
  );
};

export default HomePage;
