import React from 'react';

import AccordionComponent from '@/components/ui/HelpPortal/AccordionComponentMain';

type DataPrivacyPolicyAccordionDataType = {
  answer: string;
  question: string;
};

const DataPrivacyPolicyAccordionData: DataPrivacyPolicyAccordionDataType[] = [
  {
    question: 'What personal information do we process?',
    answer:
      'When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.',
  },
  {
    question: 'Do we process any sensitive personal information?',
    answer: 'We do not process sensitive personal information.',
  },
  {
    question: 'Do we receive any information from third parties?',
    answer: 'We do not receive any information from third parties.',
  },
  {
    question: 'How do we process your information?',
    answer:
      'We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.',
  },
  {
    question:
      'In what situations and with which parties do we share personal information?',
    answer:
      'We may share information in specific situations and with specific third parties.',
  },
  {
    question: 'How do we keep your information safe?',
    answer:
      'We have organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information.',
  },
  {
    question: 'What are your rights?',
    answer:
      'Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.',
  },
  {
    question: 'How do you exercise your rights?',
    answer:
      'The easiest way to exercise your rights is by visiting samahan@addu.edu.ph, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.Want to learn more about what we do with any information we collect?',
  },
];

const DataPrivacyPolicyAccordion = () => {
  return (
    <>
      {DataPrivacyPolicyAccordionData.map((item, index) => {
        return (
          <AccordionComponent key={index} question={item.question}>
            {item.answer}
          </AccordionComponent>
        );
      })}
    </>
  );
};

export default DataPrivacyPolicyAccordion;
