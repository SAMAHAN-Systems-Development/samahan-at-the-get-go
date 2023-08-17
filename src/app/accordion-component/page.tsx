import React from 'react';

import AccordionComponent from '@/components/ui/AccordionComponent/AccordionComponentMain';

const page = () => {
  return (
    <div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="What are the Scholarship Programs offered by the School?" isAccordionOpen={true}>
          <div className="leading-loose">
            <ol className="list-decimal list-inside">
              <li>JSF (Exclusive for Valedictorians and Salutatorians)</li>
              <li>GIA or Grant-in-Aid</li>
            </ol>
          </div>
        </AccordionComponent>
      </div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="How much is/are the grants given to students?" isAccordionOpen={true}>
          <div className=" leading-loose">
            <ol className="list-decimal px-4">
              <li>
                JSF
                <ol className="list-disc list-inside">
                  <li>100% Tuition ONLY for valedictorians</li>
                  <li>50% Tuition ONLY for salutatorians</li>
                </ol>
              </li>
              <li>
                Send an email to gdsabaldan@addu.edu.ph and
                mtropenia@addu.edu.ph with the attached photos, complete name
                and course.
              </li>
              <li>Follow the specific instructions provided by them.</li>
            </ol>
            Note: Working hours of the personnel run from 8 AM to 5 PM
          </div>{' '}
        </AccordionComponent>
      </div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="How to apply for the Scholarship Program?" isAccordionOpen={true}>
          <div>
            Preregistration is the prelisting of students, prior to the
            enrollment period, of courses they desire to take for the succeeding
            semester. Students may enlist in classes, depending on slot
            availability.
          </div>
        </AccordionComponent>
      </div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="I have a Government Grant, is it okay to apply for GIA or JSF Program?" isAccordionOpen={true}>
          <div>
            Preregistration is the prelisting of students, prior to the
            enrollment period, of courses they desire to take for the succeeding
            semester. Students may enlist in classes, depending on slot
            availability.
          </div>
        </AccordionComponent>
      </div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="What are the requirements?" isAccordionOpen={true}>
          <div>
            Preregistration is the prelisting of students, prior to the
            enrollment period, of courses they desire to take for the succeeding
            semester. Students may enlist in classes, depending on slot
            availability.
          </div>
        </AccordionComponent>
      </div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="Does GIA or JSF have allowances?" isAccordionOpen={true}>
          <div>
            Preregistration is the prelisting of students, prior to the
            enrollment period, of courses they desire to take for the succeeding
            semester. Students may enlist in classes, depending on slot
            availability.
          </div>
        </AccordionComponent>
      </div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="How to know the result of the GIA Application?" isAccordionOpen={true}>
          <div>
            Preregistration is the prelisting of students, prior to the
            enrollment period, of courses they desire to take for the succeeding
            semester. Students may enlist in classes, depending on slot
            availability.
          </div>
        </AccordionComponent>
      </div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="I am an ADDU Senior High School and have GIA, will I also apply?" isAccordionOpen={true}>
          <div>
            Preregistration is the prelisting of students, prior to the
            enrollment period, of courses they desire to take for the succeeding
            semester. Students may enlist in classes, depending on slot
            availability.
          </div>
        </AccordionComponent>
      </div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="How is/are grantees chosen?" isAccordionOpen={true}>
          <div>
            Preregistration is the prelisting of students, prior to the
            enrollment period, of courses they desire to take for the succeeding
            semester. Students may enlist in classes, depending on slot
            availability.
          </div>
        </AccordionComponent>
      </div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="Is there a grade that Scholars need to maintain?" isAccordionOpen={true}>
          <div>
            Preregistration is the prelisting of students, prior to the
            enrollment period, of courses they desire to take for the succeeding
            semester. Students may enlist in classes, depending on slot
            availability.
          </div>
        </AccordionComponent>
      </div>
    </div>
  );
};

export default page;
