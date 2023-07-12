import React from "react";
import Image from "next/image";

import SamahanAtTheGetGoLogo from "public/assets/images/SamahanAtTheGetGoLogo.png";
import UniversitySealLogo from "public/assets/images/UniversitySealLogo.png";
const Footer = () => {
  return (
    <footer className="w-full bg-beige text-lightBlue p-10">
      <div className="">
        <div className="flex flex-row ">
          <div className="h-20 w-20 relative mb-5">
            <Image
              alt="UniversitySealLogo"
              src={UniversitySealLogo}
              className="object-contain"
              fill={true}
            />
          </div>
          <div className="h-20 w-20 relative">
            <Image
              alt="AtTheGetGoLogo"
              src={SamahanAtTheGetGoLogo}
              className="object-contain"
              fill={true}
            />
          </div>
        </div>
        <div className="mb-2">
          <p className="font-artega font-medium mb-1">
            Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao
            Universidad
          </p>
          <p className="font-normal mb-5">
            The Student Government of College Unit of the Ateneo de Davao
            University
          </p>
        </div>
        <div className="mb-5">
          <div className="mb-2">
            <p className="font-bold"> Address</p>
            <p className="font-normal">
              Mezzanine Level, Martin Building Ateneo de Davao University E.
              Jacinto Street, Davao City 8000
            </p>
          </div>
          <div className="mb-2">
            <p className="font-bold"> Telephone </p>
            <p className="font-normal">(082) 221 2411 LOC 8328</p>
          </div>

          <div className="mb-2">
            <p className="font-bold"> E-mail </p>
            <p className="font-normal">samahan@addu.edu.ph</p>
          </div>

          <p className="font-bold"> Socials </p>
        </div>
        <div className="mb-2">
          <div className="mb-2">
            <p className="font-bold"> Quick Links</p>
            <p className="font-normal">About</p>
            <p className="font-normal">Student Judicial Court</p>
            <p className="font-normal">Events </p>
          </div>

          <div className="mb-2">
            <p className="font-bold">Offices</p>
            <p className="font-normal">President</p>
            <p className="font-normal">Vice-President</p>
            <p className="font-normal">Secretary-General</p>
            <p className="font-normal">Treasurer</p>
          </div>
          <div className="mb-2">
            <p className="font-bold">Policies</p>
            <p className="font-normal">Privacy Policy</p>
            <p className="font-normal">Data</p>
          </div>
        </div>
        <hr />

        <div className="mt-5">
          <div className="mb-2">
            <p className="font-normal">Assets by</p>
            <p className="font-bold">SAMAHAN Creative Team</p>
          </div>

          <p className="font-normal">Developed by</p>
          <p className="font-bold">SAMAHAN Department of Systems Development</p>

          <p className="font-normal">About the Developers</p>
        </div>
        <div>
          <p className="font-normal">
            Copyright © 2023 | SAMAHAN At the Get-Go
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
