"use client"
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { useLanguage } from '@/languageContext';
import React, { useEffect, useState } from 'react'
import { getDictionary } from '../dictionariees';

const EmploymentTerms = () => {
  const { selectedLanguage} = useLanguage(); 

  const [heading, setheading] = useState("")
  const [point1heading, setpoint1heading] = useState("")
  const [point1para, setpoint1para] = useState("")
  const [point2heading, setpoint2heading] = useState("")
  const [point2para, setpoint2para] = useState("")
  const [point3heading, setpoint3heading] = useState("")
  const [point3para, setpoint3para] = useState("")
  const [point3Aheading, setpoint3Aheading] = useState("")
  const [point3Apara, setpoint3Apara] = useState("")
 


  

  


 // Assuming getDictionary returns a Promise
 useEffect( ()  => {
   const dictPromise =  getDictionary(selectedLanguage);
   dictPromise.then((dict) => {
    
   setheading(dict?.terms?.heading)
   setpoint1heading(dict?.terms?.point1heading)
   setpoint1para(dict?.terms?.point1para)
   setpoint2heading(dict?.terms?.point2heading)
   setpoint2para(dict?.terms?.point2para)
   setpoint3heading(dict?.terms?.point3heading)
   setpoint3para(dict?.terms?.point3para)
   setpoint3Aheading(dict?.terms?.point3Aheading)
   setpoint3Apara(dict?.terms?.point3Apara)
  }).catch((error) => {
    console.error("Error fetching dictionary:", error);
  });

 }, [selectedLanguage])
  return (
    <div className='m-3'>
      <div className='bg-white'>
        {/* Assuming Navbar and Footer components are defined */}
        <Navbar />
        <div className='bg-[#F6F6F6] p-4 m-3 lg:p-16 lg:m-10'>
          <h1 className='text-[#21AC77] text-[36px] font-[700]'>{heading}</h1>
          <div className='p-4 flex flex-col gap-10'>
            <ul className="">
              <li><span className='font-[700]'>{point1heading}</span>{point1para}</li>
              <li><span className='font-[700]'>{point2heading}</span> {point2para}</li>
              <li><span className='font-[700]'>{point3heading}</span> {point3para}
                <ul>
                  <li><span className='font-[700]'>a.) Employee’s Termination.</span> The Employee shall have the right to terminate this Agreement by providing at least 30 days’ notice. If the Employee should terminate this Agreement, he or she shall be entitled to severance, equal to their pay at the time of termination, for a period of 1 month.</li>
                  <li><span className='font-[700]'>b.) Employer’s Termination.</span> The Employer shall have the right to terminate this Agreement by providing at least 30 days’ notice. If the Employer should terminate this Agreement, the Employee shall be entitled to severance, equal to their pay at the time of termination, for a period of 1 month.</li>
                </ul>
              </li>
              <li><span className='font-[700]'>IV. PAY.</span> As compensation for the services provided, the Employee shall be paid Thirty Thousand Rupees (Rs.30,000/-) salary on a monthly basis (“Compensation”). The Compensation is a gross amount that is subject to all local, State, Federal, and any other taxes and deductions as prescribed by law. Payment shall be distributed to the Employee on or before 07 of every month. You will get a quarterly (after every 03 months) increment of 10-20% on your salary depending on your performance.</li>
              <li><span className='font-[700]'>V. TRIAL PERIOD.</span> Other than certain benefits prescribed by law, the Employee will not be eligible for Benefits, Vacation Time, or Personal Leave until after the first 60 days of employment ("Trial Period"). In addition, the Employee will not be eligible for vacation time, sick leave, or any time off that would be paid or unpaid. After the probation period, you will be eligible for a raise depending upon your performance.</li>
              <li><span className='font-[700]'>VI. VACATION TIME.</span> After the Trial Period is complete, the Employee is entitled to 07 days off per year of which is required to be mutually beneficial to the Employer and the Employee. It is required for the Employee to give notice before scheduling their vacation in accordance with Company policy.</li>
              <li><span className='font-[700]'>VII. PERSONAL LEAVE.</span> After the Trial Period, the Employee shall be eligible for 02 days of paid time off per month for personal and/or medical issues. Any leave other than above mentioned will be considered as unpaid leave and a certain amount will be deducted from salary every month based on their per day salary calculation.</li>
              <li><span className='font-[700]'>VIII. CONFIDENTIALITY.</span> The Employee understands and agrees to keep any and all information confidential regarding the business plans, inventions, designs, products, services, processes, trade secrets, copyrights, trademarks, customer information, customer lists, prices, analytics data, costs, affairs, and any other information that could be considered proprietary to the Employer ("Confidential Information"). The Employee understands that disclosure of any such Confidential Information, either directly or indirectly, shall result in litigation with the Employer eligible for equitable relief to the furthest extent of the law, including but not limited to filing claims for losses and/or damages. In addition, if it is found that the Employee divulge Confidential Information to a third (3rd) party with the Employer shall be entitled any and all reimbursement for their legal and attorney’s fees.
                <ul>
                  <li><span className='font-[700]'>a.) Post Termination.</span> After the Employee has terminated their employment with the Employer, the Employee shall be bound to Section VIII of this Agreement (“Confidentiality Term”). If the Confidentiality Term is beyond any limit set by local, State, or Federal laws, then the Confidentiality Term shall be the maximum allowed legal time frame.</li>
                </ul>
              </li>
              <li><span className='font-[700]'>IX. NON-COMPETE.</span> During the term of employment, the Employee understands that he or she will be subject to learning proprietary information, including trade secrets, which could be applied to competitors of the employer.
                <ul>
                  <li><span className='font-[700]'>a.)</span> Communicating with related business owners, partners, members, officers, or agents;</li>
                  <li><span className='font-[700]'>b.)</span> Being employed by or consulting any related business;</li>
                  <li><span className='font-[700]'>c.)</span> Being self-employed in a related business; or</li>
                  <li><span className='font-[700]'>d.)</span> Soliciting any customer, client, affiliate, vendor, or any other relationship of the Employer.</li>
                </ul>
              </li>
              <li><span className='font-[700]'>X. EMPLOYEE’S ROLE.</span> The Employee shall not have the right to act in the capacity of the Employer. This includes, but is not limited to, making written or verbal agreements with any customer, client, affiliate, vendor, or third (3rd) party.</li>
              <li><span className='font-[700]'>XI. APPEARANCE.</span> The Employee must appear at the Employer’s desired workplace at the time scheduled ( 9 AM to 5 PM). If the Employee does not appear, for any reason, on more than 07 separate occasions in a 1-month calendar period, the Employer has the right to terminate this Agreement immediately. In such an event, the Employee would not be granted severance as stated in Section III.</li>
              <li><span className='font-[700]'>XII. DISABILITY.</span> If for any reason the Employee cannot perform their duties, by physical or mental disability, the Employer may terminate this Agreement by giving the Employee 21 days’ written notice.</li>
              <li><span className='font-[700]'>XIII. COMPLIANCE.</span> The Employee agrees to adhere to all sections of this Agreement in addition to any rules, regulations, or conduct standards of the Employer, including obeying all local and federal laws. If the Employee does not adhere to this Agreement, company policies, including any task or obligation that is related to the responsibilities of their Position, the Employer may terminate this Agreement without severance as stated in Section III.</li>
              <li><span className='font-[700]'>XIV. RETURN OF PROPERTY.</span> The Employee agrees to return any and all property of the Employer upon the termination of employment. This includes, but is not limited to, equipment, electronics, records, access, notes, data, tests, vehicles, reports, models, or any property that is requested by the Employer.</li>
              <li><span className='font-[700]'>XV. NOTICE.</span> All notices that are to be sent under this Agreement shall be done in writing and to be delivered via Certified Mail (return receipt) to the following mailing addresses:
                <ul>
                  <li>Employer Office No 02, 1st Floor, Munawar Plaza, I-10 Markaz, Islamabad</li>
                  <li>Employee House No. 447, Street No 21, Mohallah Jameel Abad, Taxila, District Rawalpindi.</li>
                </ul>
                The aforementioned addresses may be changed with the act of either party providing written notice.
              </li>
              <li><span className='font-[700]'>XVI. AMENDMENTS.</span> This Agreement may be modified or amended under the condition that any such amendment is attached and authorized by all parties.</li>
              <li><span className='font-[700]'>XVII. SEVERABILITY.</span> This Agreement shall remain in effect in the event a section or provision is unenforceable or invalid. All remaining sections and provisions shall be deemed legally binding unless a court rules that any such provision or section is invalid or unenforceable, thus, limiting the effect of another provision or section. In such a case, the affected provision or section shall be enforced as so limited.</li>
              <li><span className='font-[700]'>XVIII. WAIVER OF CONTRACTUAL RIGHTS.</span> If the Employer or Employee fails to enforce a provision or section of this Agreement, it shall not be determined as a waiver or limitation. Either party shall remain the right to enforce and compel the compliance of this Agreement to its fullest extent.</li>
              <li><span className='font-[700]'>XIX. ENTIRE AGREEMENT.</span> This Agreement, along with any attachments or addendums, represents the entire agreement between the parties. Therefore, this Agreement supersedes any prior agreements, promises, conditions, or understandings between the Employer and Employee.</li>
            </ul>
          </div>
        </div>
        {/* Assuming Footer component is defined */}
        <Footer />
      </div>
    </div>
  );
}

export default EmploymentTerms;

