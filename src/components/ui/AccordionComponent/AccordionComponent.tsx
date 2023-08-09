'use client';

import React, { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

import * as Accordion from '@radix-ui/react-accordion';

type AccordionComponentProps = {
  children: React.ReactNode;
  question: string;
};

const AccordionComponent: React.FC<AccordionComponentProps> = ({
  question,
  children,
}) => {
  const [clickCount, setClickCount] = useState(0);

  const handleAccordionClick = () => {
    setClickCount((prevCount) => prevCount + 1);
  };
  return (
    <div className="flex justify-center items-center">
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger onClick={handleAccordionClick}>
            <div className="w-full sm:w-[28rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem]">
              <div className="border border-[#263167] rounded-full">
                <div className="px-8 py-2">
                  <div className="pl-6 flex justify-between items-center">
                    <p className="text-[#263167] text-left">{question}</p>
                    <div
                      className={`pl-2 ${
                        clickCount % 2 === 0 && clickCount > 0
                          ? 'animate-rotateOut'
                          : 'animate-rotateIn'
                      }`}
                    >
                      <FiArrowUpRight color="#263167" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Trigger>
          <Accordion.Content
            className={`pt-4 ${
              clickCount % 2 === 0 && clickCount > 0
                ? 'animate-fadeOut'
                : 'animate-fadeIn'
            }`}
          >
            <div className="w-full sm:w-[28rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem]">
              <div className="px-10 py-6 bg-[#263167] rounded-[1.25rem]">
                <div className="list-decimal text-white">{children}</div>
              </div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

export default AccordionComponent;
