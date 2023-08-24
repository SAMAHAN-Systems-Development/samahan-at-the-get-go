'use client';
import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

import * as Accordion from '@radix-ui/react-accordion';

import { cn } from '@/utils/cvaUtils';

type AccordionComponentProps = {
  children: React.ReactNode;
  question: string;
};

const AccordionComponent: React.FC<AccordionComponentProps> = ({
  question,
  children,
}) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionClick = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const handleAccordionKeyPress = (
    event: React.KeyboardEvent<HTMLDivElement>
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleAccordionClick();
    }
  };

  return (
    <Accordion.Root type="single" collapsible>
      <Accordion.Item value="item-1">
        <Accordion.Trigger className="pt-[1.25rem] w-full">
          <div
            className="border border-lightBlue rounded-card px-8 py-2 flex items-center"
            onClick={handleAccordionClick}
            onKeyDown={handleAccordionKeyPress}
            role="button"
            tabIndex={0}
          >
            <p className="text-lightBlue text-left flex-grow">{question}</p>
            <div className="flex-shrink-0">
              <FiArrowUpRight
                color="#263167"
                className={cn(
                  isAccordionOpen
                    ? 'transform rotate-180'
                    : 'transform rotate-0'
                )}
              />
            </div>
          </div>
        </Accordion.Trigger>
        <Accordion.Content
          className={cn(
            isAccordionOpen ? 'pt-2 animate-fadeIn' : 'pt-2 animate-fadeOut'
          )}
        >
          <div className="w-full text-white px-4 md:px-10 py-6 bg-lightBlue rounded-[1.25rem]">
            <p>{children}</p>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
};

export default AccordionComponent;
