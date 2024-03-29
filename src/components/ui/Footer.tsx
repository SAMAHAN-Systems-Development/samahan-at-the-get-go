import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TbArrowUpRight } from 'react-icons/tb';
import Image from 'next/image';
import Link from 'next/link';

import SamahanAtTheGetGoLogo from 'public/assets/images/SamahanAtTheGetGoLogo.png';
import UniversitySealLogo from 'public/assets/images/UniversitySealLogo.png';

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const currentYear = getCurrentYear();

const quickLinksData = [
  {
    title: 'Quick Links',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Student Judicial Court', href: '/samahan-central-board' },
      { title: 'Recruitment Week', href: '/recruitment-week' },
    ],
  },
  {
    title: 'Offices',
    links: [
      { title: 'President', href: '/offices/office-of-the-president' },
      {
        title: 'Vice President',
        href: '/offices/office-of-the-vice-president',
      },
      {
        title: 'Secretary-General',
        href: '/offices/office-of-the-secretary-general',
      },
      { title: 'Treasurer', href: '/offices/office-of-the-treasurer' },
    ],
  },
  {
    title: 'Policies',
    links: [{ title: 'Privacy Policy', href: '/privacy-policy' }],
  },
];

const socialIconsData = [
  {
    url: 'https://www.facebook.com/AdDUSAMAHAN',
    label: 'Facebook',
  },
  {
    url: 'https://www.instagram.com/samahan_ateneo',
    label: 'Instagram',
  },
  {
    url: 'https://twitter.com/addusamahan',
    label: 'Twitter',
  },
];

function renderIcon(socialName: string) {
  switch (socialName.toUpperCase()) {
    case 'FACEBOOK':
      return (
        <FaFacebookF
          className={
            'w-[1.26525rem] h-[1.26525rem] md:w-[1.69075rem] md:h-[1.69075rem] lg:w-[1.69075rem] lg:h-[1.69075rem] hover:-translate-y-0.5 transition duration-150 ease-out active:ease-in'
          }
        />
      );

    case 'INSTAGRAM':
      return (
        <FaInstagram
          className={
            'w-[1.26525rem] h-[1.26525rem] md:w-[1.69075rem] md:h-[1.69075rem] lg:w-[1.69075rem] lg:h-[1.69075rem] hover:-translate-y-0.5 transition duration-150 ease-out active:ease-in'
          }
        />
      );

    case 'TWITTER':
      return (
        <FaTwitter
          className={
            'w-[1.26525rem] h-[1.26525rem] md:w-[1.69075rem] md:h-[1.69075rem] lg:w-[1.69075rem] lg:h-[1.69075rem] hover:-translate-y-0.5 transition duration-150 ease-out active:ease-in'
          }
        />
      );

    default:
      throw 'NotFound';
  }
}

const contactSection = [
  {
    title: 'Address',
    content:
      'Mezzanine Level, Martin Building Ateneo de Davao University E. Jacinto Street, Davao City 8000',
  },
  {
    title: 'Telephone',
    content: '(082) 221 2411 LOC 8328',
  },
  {
    title: 'E-mail',
    content: 'samahan@addu.edu.ph',
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-beige text-lightBlue p-10">
      <div className="grid grid-cols-1 gap-y-[2rem] sm:gap-y-[1.5rem] md:gap-y-[2.3rem] lg:grid-cols-2 lg:grid-rows-2 lg:gap-y-0 h-fit">
        <div className="grid grid-flow-row lg:grid-flow-col gap-[1.12rem] sm:gap-[1.5rem] md:gap-[1.5rem] lg:gap-[2rem] w-fit">
          <div className="grid grid-flow-col gap-[1.21rem] w-fit">
            <div className="relative h-[3.34975rem] w-[3.36206rem] md:h-[5.01006rem] md:w-[5.0285rem] lg:h-[5.01006rem] lg:w-[5.0285rem]">
              <Image
                alt="UniversitySealLogo"
                src={UniversitySealLogo}
                className="object-contain"
                draggable={false}
                placeholder="blur"
              />
            </div>
            <div className="relative h-[3.33175rem] w-[2.09863rem] md:h-[4.98313rem] md:w-[3.13881rem] lg:h-[4.98313rem] lg:w-[3.13881rem]">
              <Image
                alt="AtTheGetGoLogo"
                src={SamahanAtTheGetGoLogo}
                className="object-contain"
                draggable={false}
                placeholder="blur"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-artega mb-1 font-medium sm:max-w-[30.6875rem] md:max-w-[30.6875rem] lg-max-w-[29.6875rem] text-sm md:text-base lg:text-base">
              Samahan ng mga Mag-aaral ng Pamantasan ng Ateneo de Davao
              Universidad
            </h2>
            <h3 className="font-normal text-xs sm:w-[30.6875rem] md:w-[30.6875rem] lg-w[29.6875rem] md:text-sm lg:text-sm">
              The Student Government of College Unit of the Ateneo de Davao
              University
            </h3>
          </div>
        </div>

        <div className="grid row-start-3 sm:grid-cols-3 md:grid-cols-3 md:row-start-3 lg:grid-cols-3 lg:row-start-2 sm:w-[26rem] md:w-[28.8125rem] lg:w-[32rem] text-xs md:text-sm lg:text-sm gap-y-[1.12rem] sm:gap-x-[3rem] md:gap-x-[3.12rem] lg:gap-x-[3.12rem] lg:-mt-4">
          {quickLinksData.map((section, index) => (
            <div
              className="grid grid-flow-row h-fit gap-y-[0.75rem] font-normal"
              key={index}
            >
              <h4 className="font-bold text-sm">{section.title}</h4>
              {section.links.map((link, linkIndex) => (
                <Link href={link.href} key={linkIndex} className="w-fit">
                  {link.title}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="grid font-normal row-start-2 md:row-start-2 lg:col-start-12 lg:row-span-full text-xs md:text-sm lg:text-sm sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-y-[1.12rem] lg:gap-y-auto sm:max-w-[28rem] md:max-w-[28rem] lg:max-w-[13.4375rem] lg:text-right flex-wrap">
          {contactSection.map((content, index) => (
            <div key={index}>
              <h4 className="font-bold">{content.title}</h4>
              <p className="leading-[0.875rem]">{content.content}</p>
            </div>
          ))}
          <div>
            <h4 className="font-bold">Socials</h4>
            <div className="grid grid-flow-col w-fit gap-x-5 mt-2 lg:ml-auto">
              {socialIconsData.map((iconData, index) => (
                <a href={iconData.url} key={index} aria-label={iconData.label}>
                  {renderIcon(iconData.label)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <hr className="my-[1.12rem] sm:my-[1.12rem] md:my-[1.5rem] lg:my-[1.5rem]" />
      <div className="flex flex-col lg:flex-row w-full justify-between text-xs md:text-sm lg:text-sm mt-[1.12rem] md:mt-[1.5rem] lg:mt-[1.5rem]">
        <div className="flex-col mb-2">
          <p className="mb-2 flex flex-col sm:flex-row md:flex-row lg:flex-row">
            <span className="font-normal mr-1">Assets by</span>
            <a
              className="font-bold"
              href="https://www.facebook.com/SAMAHANCreativeTeam"
            >
              SAMAHAN Creative Team
            </a>
          </p>
          <p className="mb-2 flex flex-col sm:flex-row md:flex-row lg:flex-row">
            <span className="font-normal mr-1">Developed by</span>
            <a
              className="font-bold"
              href="https://www.facebook.com/SAMAHANSysDev"
            >
              SAMAHAN Department of Systems Development
            </a>
          </p>
          <p>
            <Link className="flex flex-row" href="/developers">
              <span className="align-baseline font-normal">
                About the Developers
              </span>
              <TbArrowUpRight className="align-baseline text-base md:text-lg lg:text-lg" />
            </Link>
          </p>
        </div>

        <div>
          <p className="font-normal justify-end">
            Copyright © {currentYear} | SAMAHAN At the Get-Go
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
