import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Mail, MapPin } from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
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
              <Shield className="w-8 h-8 text-primary-400" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Privacy Policy
              </h1>
            </div>
            <p className="text-lg text-gray-300">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Opho World Privacy Policy</h2>
              <p className="text-sm text-gray-400 italic">Last Revised July 22, 2025</p>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-300 leading-relaxed">
                Opho World Inc. ("Opho World", "we", or "us") values your privacy and is fully compliant with applicable 
                privacy regulations including GDPR, CCPA, VCDPA, and other similar data protection laws. All 
                data shared with Opho World through our API endpoints and online services is securely 
                processed in accordance with ISO 27001 and SOC 2 Type II standards. For further details, 
                please refer to our Data Processing Agreement.
              </p>
            </div>

            {/* Privacy Policy Overview */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Opho World Privacy Policy Overview</h3>
              <p className="text-gray-300 leading-relaxed">
                This Privacy Policy outlines the privacy measures and practices of Opho World Inc. (referred to 
                as "Opho World", "we", or "us") in relation to our website (the "Website"), and any features, 
                products, and online services ("services") provided by Opho World. We value the privacy of our 
                visitors and users. This Policy explains the types of data and information we collect, and how we 
                safeguard that data.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Our Services That Process Data */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Our Services That Process Data</h3>
              <p className="text-gray-300 leading-relaxed">
                Opho World's primary service is centered on fraud detection and prevention. We may use data 
                relating to you to analyze transactions, registrations, clicks, and other user behaviors to 
                determine if the intent is malicious or fraudulent. Our machine learning algorithms and data 
                processing mechanisms are built with privacy and data protection in mind, helping prevent data 
                leakage and protect your privacy rights.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Web Server Log Files */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Web Server Log Files</h3>
              <p className="text-gray-300 leading-relaxed">
                Like most websites, Opho World uses log files through our web server. The data collected may 
                include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and 
                time stamps, referring and exit pages, and click data, to analyze trends, administer the website, 
                track user movement, and gather demographic information. These data points are not 
                personally identifiable on their own.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Scripts, Cookies, and Web Beacons */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Scripts, Cookies, and Web Beacons</h3>
              <p className="text-gray-300 leading-relaxed">
                Opho World may use cookies, pixel tags, embedded scripts, web beacons, and similar 
                technologies to store visitor preferences, record user behavior and actions, and customize 
                services based on the visitor's browser type or other information provided. Users with "Do Not 
                Track" enabled will have their request respected with limited data tracking.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Information & Data Collection */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Information & Data Collection</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary-400 mb-3">Personal Information:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    This is information that identifies you as an individual or relates to an 
                    identifiable individual, such as your name, unique identifier (such as account ID), email address, 
                    physical address, telephone number, credit card information, geolocation, and IP address. If you 
                    submit any Personal Information relating to others, you represent that you have the authority to 
                    do so and to allow us to use that information in accordance with this Privacy Policy.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary-400 mb-3">Non-Personal Information:</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Any information that does not directly reveal your specific identity 
                    or does not relate to an identifiable individual. This may include pseudonymous identifiers, 
                    device information, non-precise geolocation, and information collected through cookies and 
                    tracking technologies.
                  </p>
                </div>

                <div className="bg-primary-500/10 rounded-lg p-4 border border-primary-500/20">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Important:</strong> Opho World does not collect more information than is necessary to provide accurate fraud 
                    detection and prevention services.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Data Sharing & Data Processing */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Data Sharing & Data Processing</h3>
              
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Clients using our services may provide Opho World with transactional information, which can 
                  include IP addresses, email addresses, billing details, phone numbers, and similar user data. 
                  This information is securely processed to detect behavioral intent and analyze the risk profile of 
                  transactions and users. The data is used to identify fraud patterns and improve your account's 
                  machine learning algorithms.
                </p>

                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-green-400">Data Protection Commitment:</strong> Opho World <strong>does not sell your personal data</strong> or the personal data of your end users. Any data 
                    shared with Opho World will be confidential, securely processed, and maintained in line with 
                    industry security standards.
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  Your account's contact details may be shared with CRMs and marketing platforms that meet our 
                  standards for adequate security techniques and data processing safeguards.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  As required, Opho World may share necessary data with third parties for the purpose of 
                  investigating false-positive reports, unblocking or registering an IP address, or improving service 
                  accuracy. This may involve sharing certain data through feedback forms or related features.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Data Processing Agreement */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Data Processing Agreement</h3>
              <p className="text-gray-300 leading-relaxed">
                Please refer to our full Data Processing Agreement for further details on how Opho World 
                handles personal data, in accordance with applicable privacy laws including the General Data 
                Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA).
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Data Security */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Data Security</h3>
              <p className="text-gray-300 leading-relaxed">
                Opho World takes reasonable and appropriate measures to protect all data collected from 
                unauthorized access, breaches, loss, manipulation, falsification, destruction, or unauthorized 
                disclosure.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Your Privacy Rights & Access to Information */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Your Privacy Rights & Access to Information</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                You have the right to request access to any personal information we may have collected about 
                you. Opho World can provide a copy of your stored personal data upon request. To fulfill your 
                request, we may ask you to verify your identity. Please contact us at{' '}
                <a href="mailto:privacy@ophoworld.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                   info@ophotech.com 
                </a>{' '}
                to submit a personal information request.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Information Correction & Deletion */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Information Correction & Deletion</h3>
              <p className="text-gray-300 leading-relaxed">
                If you believe the information we have about you is incorrect, please contact us so we can 
                update it and keep your data accurate. You also have the right to request deletion of your 
                information. In order to comply, we may require you to verify your identity. Please contact{' '}
                <a href="mailto:info@ophotech.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                  info@ophotech.com
                </a>{' '}
                to request information deletion.
              </p>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* SMS Terms and Conditions */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">SMS Terms and Conditions</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Upon messaging opt-in, the end user agrees to receive messages from Opho World regarding 
                  account alerts, communications, marketing, and similar notifications. End users can opt-out by 
                  replying STOP or request more information by replying HELP. Message frequency varies. 
                  Message and data rates may apply. For assistance or questions about our SMS service, reply 
                  HELP to any message or contact our customer support team at{' '}
                  <a href="tel:18885796686" className="text-primary-400 hover:text-primary-300 transition-colors">
                    +1 (888) 579-6686
                  </a>.
                </p>

                <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-blue-400">Mobile Privacy:</strong> Mobile information will <strong>not</strong> be shared with third parties or affiliates for marketing or promotional 
                    purposes unrelated to Opho World.
                  </p>
                </div>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* CCPA Opt-Out */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">CCPA Opt-Out — "Do Not Sell Or Share My Personal Information"</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  Privacy laws such as the California Consumer Privacy Act (CCPA) and the Virginia Consumer 
                  Data Privacy Act (VCDPA) afford residents of certain jurisdictions the right to opt out of the sale 
                  or sharing of personal information, including transfers to third parties for advertising or profiling 
                  purposes.
                </p>

                <p className="text-gray-300 leading-relaxed">
                  To comply with your "do not share" request, we may require you to verify your identity. Please 
                  contact{' '}
                 <a href="mailto:info@ophotech.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                   info@ophotech.com
                  </a>{' '}
                  to submit your request or use our support form.
                </p>
              </div>
            </div>

            <hr className="border-gray-600 my-8" />

            {/* Data Compliance Officer */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Data Compliance Officer</h3>
              <div className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  If you have questions related to privacy or would like to contact our Data Compliance Officer, 
                  please use the contact information below:
                </p>

                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary-400 mt-0.5" />
                      <div>
                        <p className="text-white font-semibold">ATTN: Data Compliance Officer</p>
                        <p className="text-gray-300">Opho World Inc.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary-400 mt-0.5" />
                      <div className="text-gray-300">
                        <p>2302 - 228 Queens Quay W Downtown, Toronto M5J2X1</p>
                        <p>Canada</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-primary-400" />
                      <a 
                       href="mailto:info@ophotech.com" 
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                       info@ophotech.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="mt-12 pt-8 border-t border-gray-600">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-white mb-4">Questions About This Policy?</h4>
                <p className="text-gray-300 mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please don't hesitate to contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                   href="mailto:info@ophotech.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Contact Privacy Team
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

export default PrivacyPolicy;