import React from 'react';
import Image from 'next/image';

import BDO1 from 'public/assets/images/OnlinePayments/BDO_1.png';
import BDO2 from 'public/assets/images/OnlinePayments/BDO_2.png';
import BPI1 from 'public/assets/images/OnlinePayments/BPI_1.png';
import BPI2 from 'public/assets/images/OnlinePayments/BPI_2.png';
import GCash from 'public/assets/images/OnlinePayments/GCASH.png';
import Landbank from 'public/assets/images/OnlinePayments/LANDBANK.png';
import Metrobank from 'public/assets/images/OnlinePayments/METROBANK.png';
import RCBC from 'public/assets/images/OnlinePayments/RCBC.png';
import Unionbank from 'public/assets/images/OnlinePayments/UNIONBANK.png';

import AccordionComponent from '@/components/ui/HelpPortal/AccordionComponentMain';
import HelpPortalModalUI from '@/components/ui/HelpPortal/HelpPortalModalUI';
import RIAModalBodyCard from '@/components/ui/HelpPortal/RIAModalBodyCard';

const RIAModalsSection = () => {
  return (
    <section className="container-xs sm:container-sm md:container-md lg:container-lg my-5 lg:my-10 lg:flex lg:flex-wrap lg:justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <HelpPortalModalUI title="2nd Semester Schedule">
        <RIAModalBodyCard title="Schedule for 2nd Semester (A.Y. 2023-2024) Enrollment and Classes">
          <ul>
            <li>
              <h4>December 16, 2023</h4>
              <p className="font-appleGaramond-bold italic">Pre-registration</p>
            </li>
            <li>
              <h4>January 2 to January 9</h4>
              <p className="font-appleGaramond-bold italic">
                Enrollment Period
              </p>
            </li>
            <li>
              <h4>January 15, 2024 5:00PM</h4>
              <p className="font-appleGaramond-bold italic">
                Enrollment Confirmation & Reservation Cancelling
              </p>
            </li>
            <li>
              <h4>Within the first week of class</h4>
              <p className="font-appleGaramond-bold italic">
                Late Enrollment Period
              </p>
            </li>
            <li>
              <h4>January 10, 2024</h4>
              <p className="font-appleGaramond-bold italic">
                Start of 2nd Semester Classes
              </p>
            </li>
          </ul>
        </RIAModalBodyCard>
        <div className="mt-6">
          <RIAModalBodyCard title="Enrollment Reminders">
            <ol className="list-decimal ml-[2ch]">
              <li>
                Courses to be offered must be within the curriculum intended for
                the semester.
              </li>
              <li>
                Students will not be allowed to enroll for advanced classes, nor
                shall such be offered for these purposes.
              </li>
              <li>
                must settle their enrollment issues during the enrollment period
                only.
              </li>
            </ol>
          </RIAModalBodyCard>
        </div>
      </HelpPortalModalUI>
      <HelpPortalModalUI title="Enrollment and Payment">
        <RIAModalBodyCard title="Enrollment">
          <ol className="list-decimal ml-[2ch]">
            <li>
              Clear all tagged obligations from the previous semester by
              contacting concerned offices.
            </li>
            <li>
              Choose the schedule of classes of the courses that are required to
              be taken.
            </li>
            <li>
              Pay the required amount online. Once the payment has been
              processed, the student will be tagged as “enrolled” in the SIS.
            </li>
            <li>
              Payment will reflect within one (1) to three (3) business days.
              For other concerns, please message the AdDU Finance on Facebook,
              or through their telephone number (082) 221 2411 loc 8237 or 8217.
            </li>
            <li>
              Print or screenshot the schedule and wait for the start of the
              semester.
            </li>
          </ol>
        </RIAModalBodyCard>
        <div className="mt-6">
          <RIAModalBodyCard title="Late Enrollment">
            <ol className="list-decimal ml-[2ch]">
              <li>
                Late enrollment may be allowed until the first week of the
                semester, subject to the payment of surcharges.
              </li>
              <li>
                Students who failed to confirm their enrollment via their
                payment of the fees before the deadline set (or the commencement
                of the Enrolment Confirmation and Reservation Cancellation
                Procedure) shall be treated as late enrollees when no payment
                has been made prior to the start of classes.
              </li>
            </ol>
          </RIAModalBodyCard>
        </div>
        <div className="mt-6">
          <RIAModalBodyCard title="Payment Methods">
            <p>There are 3 options to pay your fees.</p>
            <ol className="list-decimal ml-[2ch]">
              <li>Online Payments (Banks, GCASH)</li>
              <li>
                Over-The-Counter (OTC) Payment Center (Banks, Cebuana, Savemore,
                etc.)
                <ol className="list-disc ml-[2ch]">
                  <li>
                    You can still make payments using any of AdDU&apos;s
                    recognized banks or online payment channels. For further
                    information, please visit SAMAHAN&apos;s prior postings.
                  </li>
                </ol>
              </li>
              <li>
                Walk-in Payments
                <ol className="list-disc ml-[2ch]">
                  <li>
                    The Finance Office Jacinto Campus is now open to accept
                    walk-in payments starting November 8, 2021 from 9:00AM -
                    4:00PM every Monday-Friday, and 9:00AM-12:00 noon every
                    Saturday except Holidays.
                  </li>
                  <li>
                    Please be aware that the finance office is located in the
                    Bellarmine Building, and the Jacinto Gate will be the only
                    entrance and exit for walk-in clients. Furthermore, face
                    masks are still necessary, and please bring your own pens to
                    fill out the health declaration form when entering the
                    campus.
                  </li>
                </ol>
              </li>
            </ol>
          </RIAModalBodyCard>
        </div>
        <div className="mt-6">
          <RIAModalBodyCard title="Enrollment Hold">
            <p className="mb-10">
              The student&apos;s enrollment registration for the current
              semester/summer term is not updated/created yet due to:
            </p>
            <ol className="flex flex-col space-y-10 list-decimal ml-[2ch]">
              <li>
                <strong>Finance Hold</strong> - A hold coming from the finance
                office which requires students to pay their outstanding balances
                for the previous semester.
                <div className="ml-[2ch] my-7">
                  <strong>Finance Office</strong>
                  <p>
                    Email: tertiary.finance@addu.edu.ph Tel: 221-2411 local 8217
                    or 8237 Facebook/Messenger:
                    https://www.facebook.com/addufinance
                  </p>
                </div>
                All the Finance Associates are available from 8 AM to 5 PM on
                Monday through Friday and from 8 AM to 12 PM only on Saturday.
                Offices are closed on Sundays and holidays.
              </li>
              <li>
                <strong>OSA Hold</strong> – A hold coming from the Office of
                Student Affairs (OSA) for uncompleted or non-compliance with
                directives/call slips relating to violations of the student
                handbook (e.g., uniform, ID, validation, etc.)
                <div className="ml-[2ch] my-7">
                  <strong>Office of Student Affairs (OSA)</strong>
                  <ul>
                    <li>
                      Email: <i>univ.studentsaffairs@addu.edu.ph</i>
                    </li>
                    <li>
                      Facebook: <i>Addu Office of Student Affairs - Official</i>
                    </li>
                    <li>
                      Twitter: <i>@AdDUOSA</i>
                    </li>
                  </ul>
                </div>
                Please be informed that the regular working schedule of the
                Office of Student Affairs for online queries is from 8AM-12NN,
                1PM-5PM every Monday to Friday and 8AM-12NN every Saturday,
                excluding holidays.
              </li>
              <li>
                <strong>Department Hold</strong> - A hold coming from the
                respective department to require students to contact their
                departments to fulfill certain requirements.
              </li>
              <li>
                <strong>QPI Hold</strong> – For not obtaining the required QPI
                to be retained in the University. The student has to contact the
                concerned department/office to settle and unblock the hold
                before his registration be created.
              </li>
            </ol>
          </RIAModalBodyCard>
        </div>
      </HelpPortalModalUI>
      {/* NEW ADDITION - ONLINE PAYMENT METHODS - CONTENT TO BE UPDATED LATER*/}
      <HelpPortalModalUI title="Online Payment Methods List">
        <AccordionComponent question="GCash">
          <Image src={GCash} alt="Gcash Guide" />
        </AccordionComponent>
        <AccordionComponent question="Banco De Oro (BDO)">
          <Image src={BDO1} alt="BDO Guide" />
        </AccordionComponent>
        <AccordionComponent question="Banco De Oro (BDO) -  Website">
          <Image src={BDO2} alt="BDO Guide" />
        </AccordionComponent>
        <AccordionComponent question="Bank of the Philippine Islands (BPI)">
          <Image src={BPI1} alt="BPI Guide" />
          <Image src={BPI2} alt="BPI Guide" />
        </AccordionComponent>
        <AccordionComponent question="Unionbank">
          <Image src={Unionbank} alt="Unionbank Guide" />
        </AccordionComponent>
        <AccordionComponent question="Rizal Commercial Banking Corporation (RCBC)">
          <Image src={RCBC} alt="RCBC Guide" />
        </AccordionComponent>
        <AccordionComponent question="Metrobank - Online Bills Payment">
          <Image src={Metrobank} alt="Metrobank Guide" />
        </AccordionComponent>
        <AccordionComponent question="LandBank">
          <Image src={Landbank} alt="Landbank Guide" />
        </AccordionComponent>
      </HelpPortalModalUI>
      <HelpPortalModalUI title="Contact Details">
        <div>
          <RIAModalBodyCard title="Directory of Academic Departments">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ol className="mb-8">
                  <li className="font-bold">
                    School of Arts and Sciences (SAS) Office
                  </li>
                  <li>
                    Contact Number: <i>09435742785</i>
                  </li>
                  <li>
                    Email: <i>sas.dean@addu.edu.ph | rdpilapil@addu.edu.ph </i>
                  </li>
                </ol>
                <ol className="mb-8">
                  <li className="font-bold">
                    School of Engineering and Architecture (SEA) Office
                  </li>
                  <li>
                    Contact Number: <i>09173036037 | 09563893829</i>
                  </li>
                  <li>
                    Email: <i>enggarchi@addu.edu.ph</i>
                  </li>
                </ol>
                <ol>
                  <li className="font-bold">School of Nursing (SON) Office</li>
                  <li>
                    Contact Number: <i>09338599018</i>
                  </li>
                  <li>
                    Email: <i>mmbulac@addu.edu.ph | lgfloresca@addu.edu.ph</i>
                  </li>
                </ol>
              </div>
              <div>
                <ol className="mb-8">
                  <li className="font-bold">
                    School of Business and Governance (SBG) Office
                  </li>
                  <li>
                    Contact Number: <i>09399160886</i>
                  </li>
                  <li>
                    Email: <i>jychan@addu.edu.ph</i>
                  </li>
                </ol>
                <ol>
                  <li className="font-bold">
                    School of Education (SOE) Office
                  </li>
                  <li>
                    Contact Number: <i>09430057706</i>
                  </li>
                  <li>
                    Email:{' '}
                    <i>ajcasumpa@addu.edu.ph | dmherbabuena@addu.edu.ph</i>
                  </li>
                </ol>
              </div>
            </div>
          </RIAModalBodyCard>
        </div>
        <div className="mt-6">
          <RIAModalBodyCard title="Directory of Offices">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ol className="mb-8">
                  <li className="font-bold">
                    Office of the Academic Vice President (AVP)
                  </li>
                  <li>
                    Email: <i>vp.academics@addu.edu.ph</i>
                  </li>
                </ol>
                <ol className="mb-8">
                  <li className="font-bold">Office of Student Affairs (OSA)</li>
                  <li>
                    Email: <i>univ.studentsaffairs@addu.edu.ph</i>
                  </li>
                  <li>
                    Facebook: <i>Addu Office of Student Affairs - Official</i>
                  </li>
                  <li>
                    Twitter: <i>@AdDUOSA</i>
                  </li>
                </ol>
                <ol className="mb-8 break-words">
                  <li className="font-bold">Admissions Office</li>
                  <li>
                    Email: <i>admission@addu.edu.ph</i>
                  </li>
                  <li>
                    For Scholarship inquiries: <i>scholarship@addu.edu.ph</i>
                  </li>
                  <li>
                    Facebook/Messenger:{' '}
                    <i>https://www.facebook.com/ADDUCollegeAdmission</i>
                  </li>
                </ol>
                <ol>
                  <li className="font-bold">Physical Plant Office (PPO)</li>
                  <li>
                    Email: <i>tpferolin@addu.edu.ph</i>
                  </li>
                </ol>
              </div>
              <div>
                <ol className="mb-8">
                  <li className="font-bold">Finance Office</li>
                  <li className="flex">
                    <div className="mr-2">Email:</div>
                    <ul className="italic">
                      <li>tertiary.finance@addu.edu.ph</li>
                      <li>addufinance1@gmail.com</li>
                      <li>addufinance2@gmail.com</li>
                      <li>addufinance3@gmail.com</li>
                    </ul>
                  </li>
                  <li>
                    Telephone: <i>221-2411 local 8217 or 8237</i>
                  </li>
                  <li>
                    Facebook/Messenger:{' '}
                    <i>https://www.facebook.com/addufinance</i>
                  </li>
                </ol>
                <ol className="mb-8">
                  <li className="font-bold">Registrar</li>
                  <li>
                    Email: <i>registrar@addu.edu.ph</i>
                  </li>
                </ol>
                <ol className="mb-8">
                  <li className="font-bold">
                    Management Information Office (MIS)
                  </li>
                  <li>
                    Email: <i>mis@addu.edu.ph | bmjereza@addu.edu.ph</i>
                  </li>
                  <li>
                    Twitter: <i>@addu_mis</i>
                  </li>
                </ol>
                <ol>
                  <li className="font-bold">
                    Community Center and Martin Hall Operations Office
                  </li>
                  <li>
                    Email: <i>smadoromal@addu.edu.ph | cmapayart@addu.edu.ph</i>
                  </li>
                </ol>
              </div>
            </div>
          </RIAModalBodyCard>
        </div>
      </HelpPortalModalUI>
      <HelpPortalModalUI title="Appeals">
        <div>
          <RIAModalBodyCard title="QPI Appeal">
            <div>
              <ol className="list-decimal ml-[2ch]">
                <li>Log on to your SIS Account.</li>
                <li>
                  Open the QPI Appeal Form which can be found on the upper left
                  part of the page.
                </li>
                <li>
                  Fill in the necessary information in the QPI Appeal Form and
                  click the “Submit” button upon completion.
                </li>
                <div className="py-6 italic">
                  Note: The University Standards Committee deliberates QPI
                  Appeals endorsed by the Academic Vice President. If an
                  application of a student for QPI Appeal has been approved for
                  a probationary enrolment in his/her program, the Department
                  Chairperson will be notified in his/her Administrator
                  Information Management account. The Department Chairperson
                  will advise the student of his/her maximum course load and
                  list of courses to enroll in the following semester.
                </div>
                <li>
                  A notification will appear in the SIS account. If approved,
                  students can now enroll by following online enrollment
                  procedures.
                </li>
                <li>
                  Note: A disapproved notification means dismissal from the
                  university. The student may re-appeal to AVP by sending an
                  e-mail to vp.academics@addu.edu.ph.
                </li>
              </ol>
            </div>
          </RIAModalBodyCard>
        </div>
        <div className="mt-6">
          <RIAModalBodyCard title="Grade Appeal">
            <ol className="list-decimal ml-[2ch]">
              <li>
                Send an email to the faculty member containing the complaint on
                the final grade received.
              </li>
              <li>
                If the original grade needs to be changed, the faculty member
                will email the grade appeal to standardscom@addu.edu.ph with the
                reason for changing the grade and an attachment of a copy of the
                class record.
              </li>
              <li>
                If the appeal is approved by the University Standards Committee,
                the AVP will email the Registrar to implement a change of grade.
                A notification will be sent to both the faculty member and the
                student.
              </li>
            </ol>
          </RIAModalBodyCard>
        </div>
      </HelpPortalModalUI>
      <HelpPortalModalUI title="Shifting">
        <RIAModalBodyCard title="Shifting">
          <ol className="list-decimal ml-[2ch]">
            <li>Log on to your SIS Account.</li>
            <li>
              Open the Shifting Form which can be found on the upper left part
              of the page.
            </li>
            <li>
              Fill in the necessary information and click “Submit” button once
              completed.
            </li>
            <li>
              Wait for the notification of approval from the current Department
              Chairperson and the Department Chairperson of the desired new
              program. The notice will appear in the SIS account.
            </li>
            <li>
              Note: If shifting application is approved, the student will be
              released by his/her Department Chairperson. The Department
              Chairperson of the new program is notified through the
              Administrator Information Management account and will create a new
              enrolment registration for the student. The Chairperson will also
              determine maximum course load and academic status of the student.
              The student may enroll following the online procedures once the
              notification of approval to shift is received.
            </li>
          </ol>
        </RIAModalBodyCard>
      </HelpPortalModalUI>
      <HelpPortalModalUI title="Leave of Absences">
        <RIAModalBodyCard title="Leave of Absences (LOA)">
          <p>
            LOA is processed by a student who needs to temporarily discontinue
            his/her enrollment.
          </p>
          <ol className="list-decimal ml-[2ch]">
            <li>Open the LOA form available in the SIS account.</li>
            <li>
              Fill in necessary information and click “Submit” button once the
              form is completed.
            </li>
            <li>
              Wait for the notification from the Finance Office in the SIS
              account. Once cleared by the finance office, a notification of
              approval from the Admission Director will be received in the SIS
              account.
            </li>
          </ol>
        </RIAModalBodyCard>
        <div className="mt-4">
          <RIAModalBodyCard title="Reinstatement of Application">
            <ol className="list-decimal ml-[2ch]">
              <li>
                Accomplish the Leave of Absence (LOA) form and/or Reinstatement
                Application.
              </li>
              <li>
                Confirm with the Registrar regarding the accomplished
                Reinstatement Application.
              </li>
              <li>
                Contact the Management Information System (MIS) Office regarding
                the Add and Drop button in the Student Information System (SIS).
              </li>
            </ol>
            <div>
              <p>
                Registrar: <i>registrar@addu.edu.ph</i>
              </p>
              <p>
                MIS: <i>mis@addu.edu.ph</i>
              </p>
            </div>
          </RIAModalBodyCard>
        </div>
      </HelpPortalModalUI>
    </section>
  );
};

export default RIAModalsSection;
