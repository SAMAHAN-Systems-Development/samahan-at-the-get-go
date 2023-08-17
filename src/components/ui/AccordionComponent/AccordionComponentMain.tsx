'use client';

import { FiArrowUpRight } from 'react-icons/fi';

import * as Accordion from '@radix-ui/react-accordion';
import { cn } from '@/utils/cvaUtils';
import { useState } from 'react';

type AccordionComponentProps = {
  children: React.ReactNode;
  question: string;
  isAccordionOpen: boolean
};

const AccordionComponent: React.FC<AccordionComponentProps> = ({
  question,
  children,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="flex justify-center items-center">
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>
            <div className="w-full sm:w-[28rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] border border-[#263167] rounded-full px-8 py-2 pl-6 flex justify-between items-center"
              onClick={handleAccordionClick}>
              <p className="text-[#263167] text-left">{question}</p>
              <FiArrowUpRight color="#263167" className={cn(isAccordionOpen ? "transform rotate-180" : "transform rotate-0")} />
            </div>
          </Accordion.Trigger>
          <Accordion.Content className={cn(isAccordionOpen ? " pt-2 animate-fadeIn" : "pt-2 animate-fadeOut")}>
            <div className="w-full sm:w-[28rem] md:w-[48rem] lg:w-[64rem] xl:w-[80rem] px-10 py-6 bg-[#263167] rounded-[1.25rem]">
              <div className="text-white">{children}</div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

export default AccordionComponent;
