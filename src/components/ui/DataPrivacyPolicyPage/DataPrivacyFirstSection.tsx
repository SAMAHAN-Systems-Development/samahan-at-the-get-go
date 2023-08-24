import React from 'react';
import Image from 'next/image';

import PolicyPageImage from '/public/assets/images/PolicyPageImage.png';

const DataPrivacyFirstSection = () => {
  return (
    <div className="w-full grid content-between text-lightBlue mb-[3.75rem] md:mb-[5rem] lg:mb-[3.31rem] ">
      <div className="overflow-y-hidden relative w-full h-[30.875rem]">
        <Image
          src={PolicyPageImage}
          alt="PolicyImage"
          className="object-cover"
          placeholder="blur"
          draggable={false}
          layout="fill"
        />
      </div>

      <div className="text-center text-lightBlue w-full justify-center px-[2rem] md:px-[4rem] lg:px-[7.87rem] mb-[4.69rem] md:mb-[6.44rem] lg:mb-[8.5rem]">
        <h2 className="font-artega text-[1.25rem] md:text-[1.5625rem] lg:text-[1.9375rem] mb-[3.12rem] mt-[7.44rem] md:mt-[11rem] md:mb-[3.5rem] lg:mb-[3.06rem]">
          PRIVACY NOTICE
        </h2>
        <p className="text-justify font-[0.8125rem] md:text-[1rem] lg:text-[1.25rem]">
          <span className="block mb-[2rem]">
            This privacy notice for Ateneo de Davao University
            (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our,&rdquo;)
            describes how and why we might collect, store, use, and/or share
            (&ldquo;process&rdquo;) your information when you use our services
            (&ldquo;Services&rdquo;), such as when you: Visit our website at
            samahan.addu.edu.ph, or any website of ours that links to this
            privacy notice.
          </span>

          <span className="block">
            Engage with us in other related ways, including any sales,
            marketing, or events. Questions or concerns? Reading this privacy
            notice will help you understand your privacy rights and choices. If
            you do not agree with our policies and practices, please do not use
            our Services. If you still have any questions or concerns, please
            contact us at samahan@addu.edu.ph.
          </span>
        </p>
      </div>

      <div className="text-center text-lightBlue w-full justify-center px-[2rem] md:px-[4rem] lg:px-[7.87rem]">
        <h2 className="font-artega text-[1.25rem] md:text-[1.5625rem] lg:text-[1.9375rem] mb-[3.69rem]">
          SUMMARY OF KEY POINTS
        </h2>
        <p className="text-justify font-[0.8125rem] md:text-[1rem] lg:text-[1.25rem]">
          This summary provides key points from our privacy notice, but you can
          find out more details about any of these topics by clicking the link
          following each key point or by using our table of contents below to
          find the section you are looking for.
        </p>
      </div>
    </div>
  );
};

export default DataPrivacyFirstSection;
