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
    <div className="flex justify-center items-center">
      <Accordion.Root type="single" collapsible>
        <Accordion.Item value="item-1">
          <div className="pt-[1.25rem]">
            <Accordion.Trigger>
              <div
                className="w-full md:w-[50rem] border border-[#263167] rounded-full px-8 py-2 md:px-8 md:py-2 flex items-center"
                onClick={handleAccordionClick}
                onKeyDown={handleAccordionKeyPress}
                role="button"
                tabIndex={0}
              >
                <p className="text-[#263167] text-left flex-grow">{question}</p>
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
          </div>
          <Accordion.Content
            className={cn(
              isAccordionOpen ? 'pt-2 animate-fadeIn' : 'pt-2 animate-fadeOut'
            )}
          >
            <div className="w-full md:w-[50rem] px-4 md:px-10 py-6 bg-[#263167] rounded-[1.25rem]">
              <div className="text-white">{children}</div>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

export default AccordionComponent;
