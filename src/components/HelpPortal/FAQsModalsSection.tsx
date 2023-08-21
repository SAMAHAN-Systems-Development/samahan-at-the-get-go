import React from 'react';
import Link from 'next/link';

import AccordionComponent from '@/components/ui/HelpPortal/AccordionComponentMain';
import RIAModalUI from '@/components/ui/HelpPortal/RIAModalUI';
function FAQsModalsSection() {
  return (
    <section className="container-xs sm:container-sm md:container-md lg:container-lg my-5 lg:my-10 lg:flex lg:flex-wrap lg:justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <RIAModalUI title="SIS & ADDU Emails">
        <div>
          <AccordionComponent question="What is the AdDU Student Information System?">
            <div>
              The AdDU Student Information System (SIS) is the online portal for
              official transactions with the University for Student Services.
              Students may enroll, check their academic statuses, accounts by
              accessing https://sis.addu.edu.ph/
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="What is the student’s obligation in the use of the Student Information System?">
            <div>
              Students are required to check their SIS during pre-registration,
              enrollment, and the first week of classes for possible issues with
              their enrollment. Any issue raised belatedly, as resulting from
              the student’s failure to notice the same in his SIS shall not be
              corrected thereafter.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="How do I activate my AdDU?">
            <div className=" leading-loose">
              <ol className="list-decimal px-4">
                <li>
                  Take pictures of yourself.
                  <ol className="list-disc list-inside">
                    <li>
                      Torso/upper body (includes head down to elbows) holding
                      AdDU ID close to head
                    </li>
                    <li>Close up of face with AdDU ID close to head.</li>
                    <li>Close up of AdDU ID.</li>
                  </ol>
                </li>
                <p>
                  Note: Make sure that the ID and ID number is visible and
                  legible on all three pictures. If AdDU ID is not available, a
                  student may use a{' '}
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
        <div>
          <AccordionComponent question="How do I log into my SIS?">
            <div className=" leading-loose">
              Your account name is formed from the initials of your first name +
              middle initial + surname. Here are some examples:
              <ol className="list-decimal px-4 list-inside">
                <li>
                  (Theresa Joyce E. Lopez → tjelopez; John Marvin A. De la Cruz
                  → jmdelacruz; M Jessica T. Uy → mjtuy)
                </li>
                <li>
                  (If your name has Jr. attached to it, your account name will
                  have the suffix ‘jr’: Victor Emmanuel C. Estuary Jr. →
                  vecestuartjr)
                </li>
                <li>
                  (If your name has an ‘ñ’, your account name will have an “n”
                  in its place: Kromyko Justin B. Nuñez → kjbnunez)
                </li>
                <li>
                  (If your name has a Roman numeral suffix such as II or III,
                  your account name will have a Roman numeral suffix
                  corresponding to the Roman numeral: Jerry Neil E. Bulao II →
                  jnebulao2)
                </li>
              </ol>
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="What is my SIS username and password?">
            <div>
              Your default password is formed from the phrase “AdDU,” followed
              by your ID barcode. Thus if your ID barcode is 6201706010342Z,
              your default password is AdDU6201706010342Z. Your SIS username is
              your GSuite username, and your ADDU email account (@addu.edu.ph).
              Your GSuite password is the same default password above.
            </div>
          </AccordionComponent>
        </div>
      </RIAModalUI>
      <RIAModalUI title="AdDU Online Learning">
        <div>
          <AccordionComponent question="What applications will professors use?">
            <div>
              Professors will be using Daigler20{' '}
              <Link href={'https://daigler20.addu.edu.ph/'}>
                (https://daigler20.addu.edu.ph)
              </Link>{' '}
              as the official medium to post their assignments and assessments,
              and to receive the outputs from their students. For video
              conferences, Google Meet, Zoom, or the Big Blue Button (via
              Daigler) may be used.
            </div>
          </AccordionComponent>
        </div>
      </RIAModalUI>
      <RIAModalUI title="AdDU GSuite Account">
        <div>
          <AccordionComponent question="What do I do if my GSuite has still not been activated even after I have submitted the requirements?">
            <div>
              Contact your professors using your personal email account and
              inform them of your current situation.
            </div>
          </AccordionComponent>
          <AccordionComponent question="Why have I not received a response to my emails?">
            <div>
              There is heavy traffic as there are many concerns that are being
              sent to multitude of students. However, it is assured that
              assigned personnel are working overtime to attend to each
              student’s requests and concerns.
            </div>
          </AccordionComponent>
        </div>
      </RIAModalUI>
      <RIAModalUI title="Scholarship">
        <div>
          <AccordionComponent question="What are the Scholarship Programs offered by the School?">
            <div className="leading-loose">
              <ol className="list-decimal list-inside">
                <li>JSF (Exclusive for Valedictorians and Salutatorians)</li>
                <li>GIA or Grant-in-Aid</li>
              </ol>
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="How much is/are the grants given to students?">
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
                  GIA or Grant-in-Aid
                  <ol className="list-disc list-inside">
                    <li>10,000 up to 100% tuition and fees</li>
                  </ol>
                </li>
              </ol>
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="How to apply for the Scholarship Program?">
            <div className=" leading-loose">
              <ol className="list-decimal px-4 list-inside">
                The application will be through online which will be posted on
                our social media accounts:
                <li>
                  Facebook Page: Ateneo de Davao – College Admission and Aid /
                  Ateneo de Davao Scholars Society
                </li>
                <li>Twitter: @addu_scholars</li>
              </ol>
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="I have a Government Grant, is it okay to apply for GIA or JSF Program?">
            <div className=" leading-loose">
              <ol className="list-decimal px-4 list-inside">
                <li>
                  For DOST and CHED grants: It is allowed however, GIA/JSF grant
                  will be adjusted if the total scholarship grant of the scholar
                  exceeds the student’s total assessment
                </li>
                <li>
                  STEP/EBSU: They do not allow having a GIA grant. But they will
                  allow students with JSF grant.
                </li>
              </ol>
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="What are the requirements?">
            <div className=" leading-loose">
              <ol className="list-disc px-4 list-inside">
                Requirements are as follows:
                <li>ITR for both parents who are working</li>
                <li>
                  Or Certificate of Low/No Income from the Barangay stamp by BIR
                </li>
                <li>
                  Senior High School report card with at least 85% and above as
                  average
                </li>
                <li>Filled out the online application</li>
              </ol>
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="Does GIA or JSF have allowances?">
            <div>Both grants do not have allowances.</div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="How to know the result of the GIA Application?">
            <div>
              We will text or email the applicants. Mobile and Email address
              during application must be active.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="I am an ADDU Senior High School and have GIA, will I also apply?">
            <div>
              Yes, ADDU SHS graduates are required to apply for GIA Grant. There
              is no automatic granting for ADDU SHS graduates.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="How is/are grantees chosen?">
            <div>
              The committee will deliberate on the information provided, as well
              as the documents submitted.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="Is there a grade that Scholars need to maintain?">
            <div>
              A QPI of 2.5 (C+) for GIA and a QPI of 3 (B) for JSF scholars.
            </div>
          </AccordionComponent>
        </div>
      </RIAModalUI>
      <RIAModalUI title="Enrollment & Registration">
        <div>
          <AccordionComponent question="What is a “pre-registration?">
            <div>
              Preregistration is the prelisting of students, prior to the
              enrollment period, of courses they desire to take for the
              succeeding semester. Students may enlist in classes, depending on
              slot availability.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="When and how can pre-registration be done?">
            <div>
              Pre-registration is done online via sis.addu.edu.ph which shall
              commence on the period as set and announced in the same portal.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="Is enrollment guaranteed with pre-registration?">
            <div>
              The pre-registered courses shall remain in the student’s SIS
              account until the commencement of the Enrolment Confirmation and
              Reservation Cancellation Procedure.Unpaid registrations shall be
              thereafter deemed expired, and slots reserved shall be vacated.
              Vacated slots shall be made available to other students.Students
              are encouraged to confirm their enrollment via their payment of
              the fees before the deadline set. Otherwise, they may be compelled
              to find other open slots during the enrollment period.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="When and how can pre-registration be done?">
            <div>
              Given the prevailing health conditions, adding and dropping are
              done until the first week of the semester or the first two days
              during summer, online via sis.addu.edu.ph. No request for adding
              and dropping will be entertained thereafter.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="How much is the minimum required down payment for enrollment in a semester to be fully enrolled?">
            <div>
              The student needs to pay 10% of the total amount due for the said
              semester.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="When will a student be tagged as Enrolled after he/she has paid for at least the minimum required tuition fee down payment?">
            <div>
              It will take one (1) to three (3) banking days for the student’s
              My Registration page on his/her SIS account to have the status of
              “Enrolled” for the current semester.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="Why does a student have un-updated registration during enrollment?">
            <div className="leading-loose ">
              The student’s enrollment registration for the current
              semester/summer term is not updated/created yet due to:
              <ol className="list-disc list-inside px-4 ">
                <li>
                  Finance Hold – A hold coming from the finance office which
                  requires students to pay their outstanding balances for the
                  previous semester.
                </li>
                <li>
                  OSA Hold – A hold coming from the Office of Student Affairs
                  (OSA) for uncompleted or non-compliance with directives/call
                  slips relating to violations of the student handbook (e.g.,
                  uniform, ID, validation, etc.)
                </li>
                <li>
                  Department Hold – A hold coming from the respective department
                  to require students to contact their departments to fulfill
                  certain requirements.
                </li>
                <li>
                  QPI Hold – For not obtaining the required QPI to be retained
                  in the University. The student has to contact the concerned
                  department/office to settle and unblock the hold before his
                  registration be created.
                </li>
              </ol>
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="Why can’t a student find the subject even if he searched for the correct subject code or class code?">
            <div>
              The search function is limited only to the subjects included in
              the student’s curriculum assignment. If the subject is outside of
              the student’s specific curricula, it can’t be searched.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="If class has been filled up, may a student ask for a slot extension?">
            <div>
              No. Class sizes are fixed for the efficient delivery of
              instruction and in compliance with existing school and CHED
              regulations.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="What is the difference between dropping and withdrawal?">
            <div>
              “Dropping” refers to the removal of some subjects enrolled by a
              student, as opposed to “adding” which is the inclusion of those
              where the latter has not previously been enlisted for. Withdrawal
              on the other hand is the deletion of all the student’s enlistment
              for the semester.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="Can a student enroll after the enrollment period or when classes have already started?">
            <div>
              Late enrollment may be allowed until the first week of the
              semester or the first two days during summer, subject to the
              payment of surcharges. Students who failed to confirm their
              enrollment via their payment of the fees before the deadline set
              (or the commencement of the Enrolment Confirmation and Reservation
              Cancellation Procedure) shall be treated as late enrollees when no
              payment has been made prior to the start of classes.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="What will happen to excess payments or balances?">
            <div>
              Excess payments or balances may be refunded or be deducted in the
              student’s tuition in the following semester.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="If a student overpays for the previous semester, is he automatically enrolled?">
            <div>
              For the upcoming semesters, if the overpayment is sufficient to
              cover the fees required for enrollment, the student will be tagged
              as enrolled.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="What should a student do when his enrolled classes are dissolved?">
            <div>
              Dissolved classes shall be appropriately marked as such on the SIS
              registration of the students. If a class is dissolved during the
              enrollment, or during the adding and dropping period, substitute
              courses may be added online. The assistance and endorsement of the
              Department Chairpersons are required for dissolutions after such
              periods.
            </div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="Who to coordinate about crediting of subjects?">
            <div>For transferees, coordinate with the admissions office.</div>
          </AccordionComponent>
        </div>
        <div>
          <AccordionComponent question="When and how can withdrawal be made?">
            <div>
              A student may officially withdraw his enrollment within six weeks
              from the start of the semester or within two weeks from the start
              of summer school. No request for withdrawal will be entertained
              thereafter. For now, this may be done by sending a request to
              admissions@addu.edu.ph (for the first years and, new students) and
              registrar@addu.edu.ph (for old students).
            </div>
          </AccordionComponent>
        </div>
        <AccordionComponent question="What are the financial implications of withdrawal?">
          <div className="p-4">
            <p className="mb-4">
              The University may withhold or charge the following amounts for
              the withdrawal, varying on the period when the same is made.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border divide-y divide-gray-300">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold">
                      Enrollment Period
                    </th>
                    <th className="px-6 py-3 text-left font-semibold">
                      Withdrawal Charge
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-300">
                  <tr>
                    <td className="px-6 py-4">1st Week of classes</td>
                    <td className="px-6 py-4">10% of Total Assessment</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">2nd and 3rd Week of classes</td>
                    <td className="px-6 py-4">25% of Total Assessment</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">4th and 5th Week of classes</td>
                    <td className="px-6 py-4">50% of Total Assessment</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">6th Week of classes</td>
                    <td className="px-6 py-4">75% of Total Assessment</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">7th Week of classes</td>
                    <td className="px-6 py-4">100% of Total Assessment</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              As the withdrawal charge changes according to the period when it
              is settled or paid, this must be paid right away upon request for
              withdrawal to avoid the escalating charges.
            </p>
          </div>
        </AccordionComponent>

        <div>
          <AccordionComponent question="Can a transferee’s previously taken subject/s be credited in AdDU?">
            <div>
              It will depend on the subject and respective policy of the
              student’s desired program department. The student can contact
              his/her desired program’s department or the Registrar’s Office to
              inquire on the creditability of the previously taken subject/s.{' '}
            </div>
          </AccordionComponent>
        </div>
      </RIAModalUI>
    </section>
  );
}

export default FAQsModalsSection;
