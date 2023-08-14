import React from 'react';

import RIACard from '@/components/ui/HelpPortal/RIACard';
import RIAModalUI from '@/components/ui/HelpPortal/RIAModalUI';

const RIAModalsSection = () => {
  return (
    <>
      <RIAModalUI title="1st Semester Schedule">
        <RIACard title="Schedule for 1st Semester (A.Y. 2023-2024) Enrollment and Classes">
          <ul>
            <li>
              <h4>July 10</h4>
              <p className="font-appleGaramond-bold italic">Pre-registration</p>
            </li>
            <li>
              <h4>July 31 to Aug 5</h4>
              <p className="font-appleGaramond-bold italic">
                Enrollment Period
              </p>
            </li>
            <li>
              <h4>Aug 7 to 11</h4>
              <p className="font-appleGaramond-bold italic">
                Late Enrollment Period
              </p>
            </li>
            <li>
              <h4>Aug 7</h4>
              <p className="font-appleGaramond-bold italic">
                Start of 1st Semester Classes
              </p>
            </li>
          </ul>
        </RIACard>
      </RIAModalUI>
      <RIAModalUI title="Leave of Absences">
        <RIACard title="Leave of Absences (LOA)">
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
        </RIACard>
        <div className="mt-4">
          <RIACard title="Reinstatement of Application">
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
          </RIACard>
        </div>
      </RIAModalUI>
      <RIAModalUI title="Enrollment and Payment">
        <RIACard title="Enrollment">
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
        </RIACard>
        <div className="mt-6">
          <RIACard title="Late Enrollment">
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
          </RIACard>
        </div>
        <div className="mt-6">
          <RIACard title="Payment Methods">
            <p>There are 4 options to pay your fees.</p>
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
                Drive-thru Payment Counter - no more google forms
                <ol className="list-disc ml-[2ch]">
                  <li>
                    The Drive-thru Payment Center is located at AdDU (1)
                    entrance gate of the Community Center building, Jacinto
                    campus; (2) GS/JHS Matina Campus; and (3) SHS Bangkal
                    Campus. Please make sure that you pay the exact amount in
                    cash for a faster transaction. Daily Schedule: 8AM to 4PM
                    only Mondays to Fridays and 8AM to 11:30AM on Saturdays.
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
          </RIACard>
        </div>
        <div className="mt-6">
          <RIACard title="Enrollment Hold">
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
          </RIACard>
        </div>
      </RIAModalUI>
    </>
  );
};

export default RIAModalsSection;
