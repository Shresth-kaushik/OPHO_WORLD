import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Mail } from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      <NavigationBar />
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* Header Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-primary-400" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Terms of Service
              </h1>
            </div>
            <p className="text-lg text-gray-300">
              Please read these terms and conditions carefully before using our services.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-effect rounded-2xl p-6 md:p-8 lg:p-12 backdrop-blur-xl border border-white/20">
            
            {/* Main Title */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Opho World Terms and Conditions of Use</h2>
              <p className="text-sm text-gray-400 italic">Last Revised July 22, 2025</p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 1. User's Acknowledgment and Acceptance of Terms */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">1. User's Acknowledgment and Acceptance of Terms</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Opho World Inc. (collectively referred to as "Opho World", "We", "Us", or "Our") provides the 
                  ophoworld.com website and various related services (collectively, the "Site" or "Services") to you, 
                  the "User," "Client," or "Customer," subject to your compliance with all the terms, conditions, and 
                  notices contained or referenced herein (the "Terms of Use," "Terms and Conditions," 
                  "Agreement," or "Terms"), as well as any other written agreement between us and you. When 
                  using particular services or materials on this Site, users shall be subject to any posted rules 
                  applicable to such services or materials, which may contain additional terms and conditions. All 
                  such rules are hereby incorporated by reference.
                </p>

                <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-red-400">BY USING THIS SITE, YOU AGREE TO BE BOUND BY THESE TERMS OF USE. IF YOU DO 
                    NOT AGREE, PLEASE EXIT THE SITE. YOUR REMEDY FOR DISSATISFACTION IS TO 
                    STOP USING THE SITE AND/OR THE RELATED PRODUCTS OR SERVICES. YOUR 
                    AGREEMENT TO THESE TERMS BECOMES EFFECTIVE IMMEDIATELY UPON YOUR 
                    FIRST USE OF THIS SITE.</strong>
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  These Terms are effective as of July 22, 2025. Opho World reserves the right to amend these 
                  Terms at any time without prior notice. You acknowledge and agree that it is your responsibility 
                  to review this Site and these Terms of Use regularly to stay informed of modifications. Your 
                  continued use of the Site constitutes acknowledgment and acceptance of any changes.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  References to "Affiliates" include our owners, subsidiaries, affiliated companies, officers, 
                  directors, suppliers, partners, sponsors, advertisers, and all parties involved in creating or 
                  delivering this Site and its contents.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 2. Description of Services */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">2. Description of Services</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Opho World offers various data services and documentation through the Site, including, but not 
                  limited to, Fraud Detection, Bot Detection, Data Validation, IP Intelligence, Email Validation, 
                  Phone Validation, User and Payment Screening, Device Fingerprinting, and other related 
                  services ("Opho World Services").
                </p>

                <p className="text-gray-300 leading-relaxed">
                  You are responsible for providing, at your own expense, all equipment and Internet access 
                  necessary to use Opho World Services, and any fees associated with such access.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Opho World grants you a non-exclusive, non-transferable, non-sublicensable license to access 
                  and use Opho World Services. You agree to use the Services in compliance with all applicable 
                  laws, regulations, and these Terms. Opho World reserves the right to modify or discontinue any 
                  part of the Site or its features at any time, with or without notice. Any new features or services 
                  added will also be subject to these Terms of Use.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 3. Registration Data and Privacy */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">3. Registration Data and Privacy</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  To access certain services, you must (a) create an account and password via our online 
                  registration, and (b) keep your registration data accurate and updated. By registering, you 
                  confirm all information provided is accurate, current, and complete.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Upon registration, your account contact information may be transferred to a secure CRM 
                  system. You may be contacted by support or marketing teams by automated or manual means. 
                  To opt out, please submit a support request or written notice.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 4. Use of Logo */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">4. Use of Logo</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Client authorizes Opho World to use its name, logo, and/or trademark in Opho World marketing 
                  materials (e.g., website, non-public brochures) in accordance with brand guidelines or accepted 
                  standards of decency.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Client may revoke this right with seven (7) business days' written notice.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 5. Data Processing Agreement */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">5. Data Processing Agreement</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Opho World processes Client Data in accordance with its Data Processing Agreement ("DPA"), 
                  which is incorporated by reference. The DPA outlines the parties' roles and legal bases for 
                  processing personal data under applicable privacy laws, including the GDPR and the CCPA.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Opho World implements and maintains appropriate safeguards to protect Client Data. Clients are 
                  responsible for ensuring that any data sharing with Opho Tech complies with applicable data 
                  protection laws.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 6. Conduct on Site */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">6. Conduct on Site</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Your use of the Site and Services must comply with all laws and regulations; you are solely 
                  responsible for your communications and conduct. You may not attempt to breach security, gain 
                  unauthorized access, or interfere with another's use of the Site. Violations may result in criminal 
                  or civil liability.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Opho World is not a consumer reporting agency under the Fair Credit Reporting Act (FCRA), and 
                  our data does not constitute "consumer reports." You agree not to use Opho World Services for 
                  purposes governed by the FCRA.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  We may terminate your account at our sole discretion for violations. We will cooperate with law 
                  enforcement as required. If your account is terminated, a pro-rated refund will be issued for any 
                  paid services.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 7. Third Party Sites and Information */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">7. Third Party Sites and Information</h3>
              <p className="text-gray-300 leading-relaxed">
                Opho World Services may contain links or references to third-party websites or resources 
                ("Third-Party Content"). Such content is provided for convenience only and does not constitute 
                endorsement or affiliation. Opho World does not control and is not responsible for the availability, 
                accuracy, or legality of Third-Party Content. All dealings are solely between you and the third 
                party.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 8. Intellectual Property Information */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">8. Intellectual Property Information</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-white">Copyright © 2011 – 2025 Opho World Inc. All Rights Reserved.</strong>
                </p>

                <p className="text-gray-300 leading-relaxed">
                  "Opho World Content" includes all information, data, reports, analytics, software, API responses, 
                  documentation, graphics, audio, video, designs, and other materials provided through Opho 
                  World Services.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  All Content and intellectual property rights are the exclusive property of Opho World and/or its 
                  licensors and are protected by applicable laws. Use of the Services does not grant you any 
                  rights beyond those expressly granted here.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Opho World trademarks, service marks, and logos ("Opho World Marks") are property of Opho 
                  World or its affiliates. This Agreement grants you no right to use any Opho World Marks or 
                  third-party trademarks.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 9. Disclaimer of Warranties */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">9. Disclaimer of Warranties</h3>
              <div className="space-y-4">
                <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-yellow-400">ALL SERVICES AND MATERIALS ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT 
                    WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. OPHO TECH MAKES NO WARRANTY 
                    WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. OPHO WORLD MAKES NO WARRANTY 
                    THAT SERVICES WILL MEET YOUR REQUIREMENTS OR THAT THEY WILL BE 
                    UNINTERRUPTED, SECURE, OR ERROR-FREE. YOU USE THE SITE AT YOUR OWN RISK.</strong>
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Opho World is not responsible for errors, omissions, or outdated materials, nor for damages 
                  resulting from your use or downloading of materials.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Some jurisdictions do not allow exclusion of certain warranties; some limitations may not apply.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 10. Limitation of Liability */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">10. Limitation of Liability</h3>
              <div className="space-y-4">
                <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-red-400">IN NO EVENT SHALL OPHO WORLD OR ITS AFFILIATES BE LIABLE FOR ANY SPECIAL, 
                    INCIDENTAL, INDIRECT, OR CONSEQUENTIAL DAMAGES, OR ANY DAMAGES 
                    WHATSOEVER RESULTING FROM LOSS OF USE, DATA, OR PROFITS, WHETHER IN 
                    ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, ARISING OUT OF 
                    OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SITE OR SERVICES.</strong>
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  If any limitation of liability is unenforceable, Opho World's sole obligation for damages shall be 
                  limited to the amount actually paid by Client to Opho World in the 12 months preceding the 
                  subject claim.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 11. Non-Disparagement */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">11. Non-Disparagement</h3>
              <p className="text-gray-300 leading-relaxed">
                Both parties agree not to disparage the other or their officers, directors, employees, 
                shareholders, or agents, except as required by legal process.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 12. Indemnification */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">12. Indemnification</h3>
              <p className="text-gray-300 leading-relaxed">
                You agree to defend, indemnify, and hold harmless Opho World, its affiliates, officers, employees, 
                agents, licensors, and suppliers from all liabilities, claims, and expenses (including legal fees) 
                arising from your misuse of the Site or Services.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 13. Security and Password */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">13. Security and Password</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  You are responsible for keeping your password and account information secure and for all 
                  actions taken under your account. Opho World personnel will never ask for your password. You 
                  may enable Two-Factor Authentication (2FA) for additional security.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Accounts may not be shared or transferred. Violation may result in immediate termination.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  Opho World employs robust security measures to protect client data and complies with all 
                  applicable privacy regulations.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 14. Participation in Promotions */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">14. Participation in Promotions</h3>
              <p className="text-gray-300 leading-relaxed">
                Any interaction with third-party advertisers is solely between you and the advertiser. Opho Tech 
                assumes no responsibility for any aspect of such interactions.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 15. Termination of Use */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">15. Termination of Use</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Opho World may suspend or terminate your access to all or part of the Site or Services, with or 
                  without notice, for any reason, including breach of these Terms. Upon termination, your right to 
                  use the Site ceases immediately, and Opho World may delete your account and associated data. 
                  Opho World is not liable for damages arising from such actions.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  If Opho World terminates your account, you will receive a pro-rated refund for unused paid 
                  services. You may terminate this Agreement at any time with 30 days' written notice, but all 
                  outstanding fees will become immediately due and no refunds will be issued for unused 
                  services.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 16. API & Data Usage */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">16. API & Data Usage</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed mb-4">
                  <strong className="text-white">You may not:</strong>
                </p>

                <ul className="space-y-3 ml-6">
                  <li className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      Reverse engineer or attempt to extract source code from any API or related software, 
                      except as expressly permitted by law.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      Interfere with, abuse, or disrupt the APIs or networks.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      Sublicense an API or create a competing API without written approval.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      Use the APIs to replicate or compete with Opho World core products without written 
                      approval.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">
                      Use APIs for hazardous activities (e.g., life support, air traffic control).
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 17. Free Account Limitations */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">17. Free Account Limitations</h3>
              <p className="text-gray-300 leading-relaxed">
                Users may not create multiple accounts to receive additional free credits. Abuse may result in 
                suspension or termination. For legitimate business needs, contact Opho World support for 
                authorization.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 18. Premium Plans & Queries */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">18. Premium Plans & Queries</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Each API request deducts a query credit from your account, except where otherwise stated. 
                  Query usage is tracked and billed as per your subscription or prepaid plan.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  All purchases are final and non-refundable, except where required by law. You are responsible 
                  for monitoring your usage and maintaining an active account balance.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 19. Affiliate Program & Referrals */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">19. Affiliate Program & Referrals</h3>
              <p className="text-gray-300 leading-relaxed">
                Opho World offers an affiliate program to active users. Referrals must remain in good standing 
                and are defined within your dashboard. Earnings are paid on a NET-60 schedule, and Opho 
                World reserves the right to withhold commissions at its discretion.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 20. Client Data */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">20. Client Data</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Client may transmit transactional, behavioral, or user data ("Client Data") to Opho World for fraud 
                  detection, risk analysis, and threat intelligence services. Opho World may use anonymized or 
                  aggregated Client Data to improve global scoring, without disclosing PII or client-specific 
                  business data.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  All Client Data is protected with industry-standard safeguards and processed in accordance with 
                  privacy regulations and the Data Processing Agreement.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 21. Governing Law */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">21. Governing Law</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  This Site is operated from Ontario, Canada. By accessing the Site, both parties agree that the 
                  laws of the Province of Ontario, without regard to its conflict of law principles, shall govern all 
                  matters relating to the use of the Site and Services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Both parties consent to the exclusive jurisdiction and venue of courts in Ontario for any 
                  disputes arising under this Agreement.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 22. Entire Agreement */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">22. Entire Agreement</h3>
              <p className="text-gray-300 leading-relaxed">
                These Terms represent the complete agreement between the parties, superseding all prior 
                discussions or agreements. Any modifications must be in writing and signed by both parties.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 23. Class Action Waiver */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">23. Class Action Waiver</h3>
              <p className="text-gray-300 leading-relaxed">
                Both Opho World and Client waive the right to a trial by jury and agree that all disputes must be 
                brought individually, not as part of any class action or representative proceeding.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 24. Severability */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">24. Severability</h3>
              <p className="text-gray-300 leading-relaxed">
                If any provision of this Agreement is held invalid or unenforceable, the remainder of this 
                Agreement will continue in full force and effect.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 25. Survival */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">25. Survival</h3>
              <p className="text-gray-300 leading-relaxed">
                The following Sections survive termination: 8 (Intellectual Property), 9 (Disclaimer of 
                Warranties), 10 (Limitation of Liability), 11 (Non-Disparagement), 12 (Indemnification), 15 
                (Termination of Use), 16 (API & Data Usage), 20 (Client Data), 21 (Governing Law), 22 (Entire 
                Agreement), 23 (Class Action Waiver), 28 (Reseller Governance), and 30 (Miscellaneous).
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 26. Failure to Enforce */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">26. Failure to Enforce</h3>
              <p className="text-gray-300 leading-relaxed">
                Opho World's failure to enforce any provision of these Terms shall not constitute a waiver of that 
                provision or the right to enforce it in the future.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 27. Anti-Bribery */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">27. Anti-Bribery</h3>
              <p className="text-gray-300 leading-relaxed">
                Neither party will, directly or indirectly, offer or accept bribes, secret commissions, or illegal 
                gratuities. Any breach is grounds for termination and potential legal action. The breaching party 
                is liable for resulting losses.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 28. Reseller Governance */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">28. Reseller Governance</h3>
              <p className="text-gray-300 leading-relaxed">
                If Services are purchased through an authorized reseller, these Terms govern usage and 
                access, while payment terms are governed by the agreement with the reseller. Opho Tech is not 
                access, while payment terms are governed by the agreement with the reseller. Opho World is not 
                liable for financial arrangements between Client and Reseller.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 29. Signature */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">29. Signature</h3>
              <p className="text-gray-300 leading-relaxed">
                Your electronic acceptance or use of Opho World Services constitutes your binding agreement to 
                these Terms.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* 30. Miscellaneous */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">30. Miscellaneous</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">Prevailing Party Fees:</span>
                    <span className="text-gray-300 ml-2">The prevailing party in any legal action will be entitled to reasonable legal fees and costs.</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">Limitation on Claims:</span>
                    <span className="text-gray-300 ml-2">All claims must be brought within one (1) year or they are waived and barred.</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">Assignment:</span>
                    <span className="text-gray-300 ml-2">Client may not assign this Agreement without Opho World's prior written consent; Opho World may assign freely.</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">Force Majeure:</span>
                    <span className="text-gray-300 ml-2">Opho World is not liable for failures caused by events beyond its reasonable control.</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <span className="text-white font-semibold">No Waiver:</span>
                    <span className="text-gray-300 ml-2">No failure or delay by Opho World in exercising any right shall constitute a waiver.</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Contact Information</h3>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="space-y-2">
                  <p className="text-white font-semibold">Opho World Inc.</p>
                  <p className="text-gray-300">2302 - 228 Queens Quay W Downtown, Toronto M5J2X1</p>
                  <p className="text-gray-300">Canada</p>
                  <a 
                    href="mailto:info@ophotech.com" 
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    info@ophotech.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 pt-8 border-t border-gray-600">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-4">Questions About These Terms?</h4>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these Terms of Service, please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                   href="mailto:info@ophotech.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Legal Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;