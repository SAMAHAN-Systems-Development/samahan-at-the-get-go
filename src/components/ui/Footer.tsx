import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiArrowUpRight } from 'react-icons/fi';
import Image from 'next/image';

import SamahanAtTheGetGoLogo from 'public/assets/images/SamahanAtTheGetGoLogo.png';
import UniversitySealLogo from 'public/assets/images/UniversitySealLogo.png';

const Footer = () => {
  return (
    <footer className=" w-full bg-beige text-lightBlue p-10">
      <div className="grid grid-cols-1 md:gap-y-[2.625rem] lg:grid-cols-2 lg:grid-rows-2 lg:justify-between">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-row lg:mr-[2rem]">
            <div className="relative h-[3.34975rem] w-[3.36206rem] md:h-[5.01006rem] md:w-[5.0285rem] lg:h-[5.01006rem] lg:w-[5.0285rem] mr-[0.81rem] md:mr-[1.21rem] lg:mr-[1.21rem] mb-[1.12rem] md:mb-[1.5rem] lg:mb-[1.5rem]">
              <Image
                alt="UniversitySealLogo"
                src={UniversitySealLogo}
                className="object-contain"
              />
            </div>
            <div className="relative h-[3.33175rem] w-[2.09863rem] md:h-[4.98313rem] md:w-[3.13881rem] lg:h-[4.98313rem] lg:w-[3.13881rem]">
              <Image
                alt="AtTheGetGoLogo"
                src={SamahanAtTheGetGoLogo}
                className="object-contain"
                fill={true}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-artega text-wrap font-medium mb-1 sm:w-[30.6875rem] flex flex-wrap md:w-[30.6875rem] text-sm md:text-base lg:text-base lg-w[29.6875rem]">
              Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao
              Universidad
            </h2>
            <p className="font-normal text-xs md:text-sm lg:text-sm">
              The Student Government of College Unit of the Ateneo de Davao
              University
            </p>
          </div>
        </div>

        <div className="grid row-start-3 sm:grid-cols-3 md:grid-cols-3 md:row-start-3 lg:grid-cols-3 lg:row-start-2 sm:w-[26rem] md:w-[28.8125rem] text-xs md:text-sm lg:text-sm mb-[1.12rem] md:mb-[1.5rem] lg:mb-[1.5rem] ">
          <div className="mb-2">
            <p className="font-bold text-sm">Quick Links</p>
            <p className="font-normal">About</p>
            <p className="font-normal">Student Judicial Court</p>
            <p className="font-normal">Events</p>
          </div>

          <div className="mb-2">
            <p className="font-bold text-sm">Offices</p>
            <p className="font-normal">President</p>
            <p className="font-normal">Vice-President</p>
            <p className="font-normal">Secretary-General</p>
            <p className="font-normal">Treasurer</p>
          </div>
          <div className="mb-2">
            <p className="font-bold text-sm">Policies</p>
            <p className="font-normal">Privacy Policy</p>
            <p className="font-normal">Data</p>
          </div>
        </div>
        <div className="grid row-start-2 md:row-start-2 lg:col-start-12 lg:col-span-2 lg:row-span-full text-xs md:text-sm lg:text-sm w-auto  mb:6 lg:mb-10">
          <div className="flex flex-col sm:flex-row sm:justify-start md:flex-row md:justify-start lg:flex-col lg:justify-end ">
            <div className="mb-2 md:mr-[2.38rem] w-[13.4375rem] md:w-[13.4375rem] lg:w-[13.4375rem] lg:mr-0">
              <p className="font-bold lg:text-right">Address</p>
              <p className="font-normal leading-[0.875rem] lg:text-right">
                Mezzanine Level, Martin Building Ateneo de Davao University E.
                Jacinto Street, Davao City 8000
              </p>
            </div>
            <div className="mb-2">
              <p className="font-bold lg:text-right">Telephone</p>
              <p className="font-normal lg:text-right">
                (082) 221 2411 LOC 8328
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-start md:flex-row md:justify-start lg:flex-col lg:justify-end ">
            <div className="mb-2 sm:mr-[5.5rem] md:mr-[6.25rem] lg:mr-0">
              <p className="font-bold lg:text-right">E-mail</p>
              <p className="font-normal lg:text-right">samahan@addu.edu.ph</p>
            </div>
            <div className="flex md:flex flex-col">
              <p className="font-bold lg:text-right">Socials</p>
              <div className="flex flex-row gap-5 mt-2 lg:ml-auto">
                <a href="https://www.facebook.com/AdDUSAMAHAN">
                  <FaFacebookF className="w-[1.26525rem] h-[1.26525rem] md:w-[1.69075rem] md:h-[1.69075rem] lg:w-[1.69075rem] lg:h-[1.69075rem] hover:-translate-y-0.5" />
                </a>
                <a href="https://www.instagram.com/samahan_ateneo">
                  <FaInstagram className="w-[1.26525rem] h-[1.26525rem] md:w-[1.69075rem] md:h-[1.69075rem] lg:w-[1.69075rem] lg:h-[1.69075rem] hover:-translate-y-0.5" />
                </a>

                <a href="https://twitter.com/addusamahan">
                  <FaTwitter className="w-[1.26525rem] h-[1.26525rem] md:w-[1.69075rem] md:h-[1.69075rem] lg:w-[1.69075rem] lg:h-[1.69075rem] hover:-translate-y-0.5 transition duration-150 ease-out active:ease-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="flex flex-col lg:flex-row w-full justify-between text-xs md:text-sm lg:text-sm mt-[1.12rem] md:mt-[1.5rem] lg:mt-[1.5rem]">
        <div className="flex-col mb-2">
          <p className="mb-2 md:flex">
            <span className="font-normal mr-1">Assets by</span>
            <a href="https://www.facebook.com/SAMAHANCreativeTeam">
              <span className="font-bold">SAMAHAN Creative Team</span>
            </a>
          </p>
          <p className="mb-2 md:flex">
            <span className="font-normal mr-1">Developed by</span>
            <a href="https://www.facebook.com/SAMAHANSysDev">
              <span className="font-bold">
                SAMAHAN Department of Systems Development
              </span>
            </a>
          </p>
          <p className="flex">
            <span className="font-normal">About the Developers</span>
            <FiArrowUpRight />
          </p>
        </div>

        <div>
          <p className="font-normal justify-end">
            Copyright © 2023 | SAMAHAN At the Get-Go
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
