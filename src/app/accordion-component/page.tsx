import React from 'react';

import AccordionComponent from '@/components/ui/AccordionComponent/AccordionComponent';

const page = () => {
  return (
    <AccordionComponent question="How do I activate my AdDU?">
      <div className=" leading-loose">
        <ol className="list-decimal px-4">
          <li>
            Take pictures of yourself.
            <ol className="list-disc list-inside">
              <li>
                Torso/upper body (includes head down to elbows) holding AdDU ID
                close to head
              </li>
              <li>Close up of face with AdDU ID close to head.</li>
              <li>Close up of AdDU ID.</li>
            </ol>
          </li>
          <p>
            Note: Make sure that the ID and ID number is visible and legible on
            all three pictures. If AdDU ID is not available, a student may use a{' '}
            <strong>
              driver’s license, passport, voter’s ID, or any proof for
              identification.
            </strong>
          </p>
          <li>
            Send an email to gdsabaldan@addu.edu.ph and mtropenia@addu.edu.ph
            with the attached photos, complete name and course.
          </li>
          <li>Follow the specific instructions provided by them.</li>
        </ol>
        Note: Working hours of the personnel run from 8 AM to 5 PM
      </div>
    </AccordionComponent>
  );
};

export default page;
