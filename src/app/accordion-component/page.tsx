import React from 'react';

import AccordionComponent from '@/components/ui/AccordionComponent/AccordionComponent';

const page = () => {
  return (
    <div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="What is the AdDU Student Information System?">
          <div>
            Students are required to check their SIS during pre-registration,
            enrollment, and the first week of classes for possible issues with
            their enrollment. Any issue raised belatedly, as resulting from the
            student’s failure to notice the same in his SIS shall not be
            corrected thereafter.
          </div>
        </AccordionComponent>
      </div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="What is the student’s obligation in the use of the Student Information System?">
          <div>
            Students are required to check their SIS during pre-registration,
            enrollment, and the first week of classes for possible issues with
            their enrollment. Any issue raised belatedly, as resulting from the
            student’s failure to notice the same in his SIS shall not be
            corrected thereafter.
          </div>
        </AccordionComponent>
      </div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="How do I activate my AdDU?">
          <div className=" leading-loose">
            <ol className="list-decimal px-4">
              <li>
                Take pictures of yourself.
                <ol className="list-disc list-inside">
                  <li>
                    Torso/upper body (includes head down to elbows) holding AdDU
                    ID close to head
                  </li>
                  <li>Close up of face with AdDU ID close to head.</li>
                  <li>Close up of AdDU ID.</li>
                </ol>
              </li>
              <p>
                Note: Make sure that the ID and ID number is visible and legible
                on all three pictures. If AdDU ID is not available, a student
                may use a{' '}
                <strong>
                  driver’s license, passport, voter’s ID, or any proof for
                  identification.
                </strong>
              </p>
              <li>
                Send an email to gdsabaldan@addu.edu.ph and
                mtropenia@addu.edu.ph with the attached photos, complete name
                and course.
              </li>
              <li>Follow the specific instructions provided by them.</li>
            </ol>
            Note: Working hours of the personnel run from 8 AM to 5 PM
          </div>
        </AccordionComponent>
      </div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="How do I log into my SIS?">
          <div className=" leading-loose">
            Your account name is formed from the initials of your first name +
            middle initial + surname. Here are some examples:
            <ol className="list-decimal px-4 list-inside">
              <li>
                (Theresa Joyce E. Lopez → tjelopez; John Marvin A. De la Cruz →
                jmdelacruz; M Jessica T. Uy → mjtuy)
              </li>
              <li>
                (If your name has Jr. attached to it, your account name will
                have the suffix ‘jr’: Victor Emmanuel C. Estuary Jr. →
                vecestuartjr)
              </li>
              <li>
                (If your name has an ‘ñ’, your account name will have an “n” in
                its place: Kromyko Justin B. Nuñez → kjbnunez)
              </li>
              <li>
                (If your name has a Roman numeral suffix such as II or III, your
                account name will have a Roman numeral suffix corresponding to
                the Roman numeral: Jerry Neil E. Bulao II → jnebulao2)
              </li>
            </ol>
          </div>
        </AccordionComponent>
      </div>
      <div className="pt-[1.25rem]">
        <AccordionComponent question="What is my SIS username and password?">
          <div>
            Your default password is formed from the phrase “AdDU,” followed by
            your ID barcode. Thus if your ID barcode is 6201706010342Z, your
            default password is AdDU6201706010342Z. Your SIS username is your
            GSuite username, and your ADDU email account (@addu.edu.ph). Your
            GSuite password is the same default password above.
          </div>
        </AccordionComponent>
      </div>
    </div>
  );
};

export default page;
