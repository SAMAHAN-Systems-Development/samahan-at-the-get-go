import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

import SamahanAtTheGetGoLogo from "public/assets/images/SamahanAtTheGetGoLogo.png";
import UniversitySealLogo from "public/assets/images/UniversitySealLogo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-beige text-lightBlue p-10">
      <div className="grid grid-cols-1">
        <div className="lg:grid lg:grid-cols-2 ">
          <div>
            <div className="flex flex-row">
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
              <p className="font-artega font-medium mb-1 flex flex-wrap md:w-[491px] md:text-base">
                Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao
                Universidad
              </p>
              <p className="font-normal mb-2 md:text-sm">
                The Student Government of College Unit of the Ateneo de Davao
                University
              </p>
            </div>
          </div>

          <div className="mb-10 md:text-sm lg:grid lg:grid-cols-1 lg:justify-items-end lg:text-right">
            <div className="md:grid md:grid-cols-2 md:gap-10 md:w-[415px] lg:grid lg:grid-cols-1 lg:gap-2">
              <div className="mb-2 md:flex md:flex-wrap md:w-[215px]">
                <p className="font-bold">Address</p>
                <p className="font-normal leading-[0.875rem]">
                  Mezzanine Level, Martin Building Ateneo de Davao University E.
                  Jacinto Street, Davao City 8000
                </p>
              </div>
              <div className="mb-2">
                <p className="font-bold">Telephone</p>
                <p className="font-normal">(082) 221 2411 LOC 8328</p>
              </div>
            </div>

            <div className="md:grid md:grid-cols-2 gap-10 md:w-[415px] lg:grid lg:grid-cols-1 lg:gap-2 ">
              <div className="mb-2">
                <p className="font-bold">E-mail</p>
                <p className="font-normal">samahan@addu.edu.ph</p>
              </div>
              <div className="md:flex flex-col">
                <p className="font-bold">Socials</p>
                <div className="flex flex-row gap-5 mt-2">
                  <FaFacebookF className="w-[20px] h-[20px]" />
                  <FaInstagram className="w-[20px] h-[20px]" />
                  <FaTwitter className="w-[20px] h-[20px]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-2 grid md:grid-cols-3 lg:grid-cols-3 md:w-[461px] ">
          <div className="mb-2">
            <p className="font-bold">Quick Links</p>
            <p className="font-normal">About</p>
            <p className="font-normal">Student Judicial Court</p>
            <p className="font-normal">Events</p>
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
      </div>
      <hr />

      <div className="mt-5">
        <div className="mb-2 md:flex">
          <p className="font-normal">Assets by</p>
          <p className="font-bold">SAMAHAN Creative Team</p>
        </div>
        <div className="mb-2 md:flex ">
          <p className="font-normal">Developed by</p>
          <p className="font-bold">SAMAHAN Department of Systems Development</p>
        </div>
        <div className="flex">
          <p className="font-normal">About the Developers</p>
          <FiArrowUpRight />
        </div>
      </div>

      <div>
        <p className="font-normal">Copyright © 2023 | SAMAHAN At the Get-Go</p>
      </div>
    </footer>
  );
};

export default Footer;
