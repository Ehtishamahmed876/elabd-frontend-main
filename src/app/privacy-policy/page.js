import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import React from "react";

const Privacy = () => {
  const guidelines = [
    "In all National Holidays our office will remain closed.",
    "In the case of three vacations without leave request in a month due to unsatisfactory performance in the Company, attention will be brought through a written show cause notice. If this happens for the third time, disciplinary action will be taken.",
    "Leave means leave taken in advance by call/WhatsApp from the responsible person. Leave without permission will be counted as absence. In case of emergency, CAR is immediately informed by phone. After coming back to the institution, leave will be accepted with written permission; otherwise, absence will be counted.",
    "If 7 consecutive days of vacation are taken, the middle and last weekly and all other holidays will be deducted. However, the annual holidays of Ramadan and Eid al-Fitr are exempt from this.",
    "Four days delay up to 15 minutes in the initial hours of lease is forgiven. In case of further delay, deductions will be made. Habitual lateness will result in disciplinary action after two warnings.",
    "During the period of leave, it can be exchanged for Remote Based Job. Work can also be done from home by mutual consent in case of reasons like strikes.",
    "It is not allowed to open any office computer/laptop for any unrelated function and website. Negligence will result in strict disciplinary action.",
    "Eating Paan, Gutka, Mainpuri, Cigarette, and Snuff are not allowed during office time. Personal use of mobile phones is not allowed during office time, except for emergency calls outside the office for a maximum of 10 minutes.",
    "Sleeping without the permission of the manager during office timings is not allowed. Having any kind of relationship or contact with any client without the permission of the Company is prohibited.",
    "According to the decided government procedure, income tax will be deducted from the salary. Re-submitting the file is the responsibility of the hirer.",
    "It is obligatory for every sane and mature Muslim man to pray in congregation five times a day. The Company has no issue with praying in congregation on time.",
  ];

  return (
    <div className="m-3">
      <div className="bg-white">
        <Navbar />
        <div className="bg-[#F6F6F6] p-4 m-3 lg:p-16 lg:m-10">
          <h1 className="text-[#21AC77] text-[36px] font-[700]">
            Our Policies
          </h1>
          <div className="p-4 flex flex-col gap-10">
            
            <ul className="list-disc pl-4">
              {guidelines.map((guideline, index) => (
                <li key={index} className="mb-2">
                  {guideline}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Privacy;
