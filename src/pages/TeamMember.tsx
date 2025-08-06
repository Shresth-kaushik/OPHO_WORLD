import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft, Mail, Phone, MapPin, Award, Users, Building, ExternalLink, User,
} from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

interface TeamMemberData {
  name: string;
  position: string;
  image?: string;
  bio: string;
  expertise: string[];
  summary: string;
  experience: {
    title: string;
    details: string[];
  }[];
  education: string[];
  certifications: string[];
  memberships: string[];
  committees: string[];
  languages: string[];
  contact?: {
    email?: string;
    phone?: string;
    location?: string;
  };
}

const teamMembers: { [key: string]: TeamMemberData } = {
  'bhavneet': {
    name: 'Mr. Bhavneet',
    position: 'Founder',
    image: '/member_3.jpeg',
    bio: 'Visionary entrepreneur with extensive experience in organizational leadership, AI, and strategic innovation',
    expertise: ['Organizational Leadership', 'Facilitation', 'Team Building', 'Artificial Intelligence (AI)', 'Creativity and Innovation', 'Strategic Visionary', 'Program Evaluation', 'Methods Engineering', 'Leadership'],
    summary: 'A visionary entrepreneur and technology leader with over 5 years of experience as Chief Executive Officer at OphoWorld. Based in Toronto, Ontario, Canada, Bhavneet has demonstrated exceptional skills in organizational leadership, artificial intelligence, and strategic innovation. His expertise spans team building, creativity and innovation, strategic visionary thinking, and program evaluation. He has also served as a Trustee for Little Big Things, providing legal aid and support to women, children, and senior citizens, and has been Chair of the Board of Trustees for the World Association Of Supercomputing (WAS) since 2018.',
    experience: [
      {
        title: 'Chief Executive Officer - OphoWorld',
        details: [
          'Leading OphoWorld as CEO since December 2019 (5+ years)',
          'Based in Toronto, Ontario, Canada',
          'Specialized in Organizational Leadership, Team Building, and Artificial Intelligence (AI)',
          'Driving strategic vision with expertise in Creativity and Innovation',
          'Implementing Methods Engineering and Program Evaluation frameworks'
        ]
      },
      {
        title: 'Trustee - Little Big Things',
        details: [
          'Freelance position since October 2019 (5+ years)',
          'Based in Delhi, India (Remote)',
          'Provided legal aid and support to women, children, and senior citizens in need',
          'Ensured protection of rights for vulnerable populations',
          'Supported educational institutions and initiatives for children with special needs',
          'Organized events and fundraisers to raise awareness and funds for the organization\'s mission'
        ]
      },
      {
        title: 'Chair of the Board of Trustees - World Association Of Supercomputing (WAS)',
        details: [
          'Freelance leadership role since November 2018 (6+ years)',
          'Leading governance and strategic direction for supercomputing initiatives',
          'Promoting advancement in high-performance computing technologies',
          'Facilitating collaboration between global supercomputing organizations'
        ]
      }
    ],
    education: [
      'Professional development in Organizational Leadership and Strategic Management',
      'Specialized training in Artificial Intelligence and Methods Engineering'
    ],
    certifications: [
      'Leadership and Organizational Development',
      'Artificial Intelligence (AI) Specialization',
      'Strategic Visionary and Innovation Management'
    ],
    memberships: [
      'World Association Of Supercomputing (WAS) - Chair of Board of Trustees',
      'Little Big Things - Trustee',
      'Technology Leadership and Innovation Communities'
    ],
    committees: [],
    languages: ['English'],
    contact: {
     email: 'info@ophotech.com',
      location: 'Toronto, Ontario, Canada'
    }
  },
  'shivender-sofat': {
    name: 'Mr. Shivender Sofat',
    position: 'Advisory Board Member',
    image: '/member_1.jpeg',
    bio: 'CPA, CFE, FCA - Seasoned finance professional with extensive US & India experience',
    expertise: ['Corporate Finance', 'Taxation', 'Audit & Compliance', 'Strategic Consulting'],
    summary: 'A seasoned finance professional with extensive experience spanning the United States and India, bringing deep expertise in corporate finance, taxation, audit, project consulting, compliance, and cost management. Career includes leadership roles in both public accounting firms and private industry, with a focus on high-net-worth individuals, not-for-profits, government audits, and small businesses.',
    experience: [
      {
        title: 'Public Accounting (USA)',
        details: [
          'Delivered tax, consulting, and compliance services to HNWIs',
          'Conducted audits and reviews for nonprofits, governmental entities, and small businesses',
          'Led negotiations with banks and financial institutions',
          'Enhanced financial systems and provided growth-focused financial analytics',
          'Built and mentored high-performing finance teams'
        ]
      },
      {
        title: 'Public Accounting (India)',
        details: [
          'Partner in an Indian accounting firm managing statutory/tax audits',
          'Provided tax consulting and BPO assignments',
          'Led project financing initiatives',
          'Managed complex compliance requirements across multiple jurisdictions'
        ]
      },
      {
        title: 'Private Industry (USA)',
        details: [
          'Prior to public practice, worked in corporate finance roles in U.S. industry sectors',
          'Specialized in financial planning and analysis',
          'Led cross-functional teams in financial process improvements',
          'Structured deals with financial institutions'
        ]
      }
    ],
    education: [
      'B.Com. – Punjabi University, India'
    ],
    certifications: [
      'Chartered Accountant (India)',
      'Certified Public Accountant (USA)',
      'Certified Fraud Examiner (CFE)'
    ],
    memberships: [
      'American Institute of CPAs (AICPA)',
      'NY State Society of CPAs (NYSSCPA)',
      'Association of Certified Fraud Examiners (ACFE)',
      'Institute of Chartered Accountants of India (ICAI)'
    ],
    committees: [
      'NYSSCPA - Anti-Money Laundering & Counter Terrorist Financing Committee',
      'NYSSCPA - Relations with the IRS Committee'
    ],
    languages: ['English', 'Hindi', 'Punjabi']
  },
  'rajvir-singh': {
    name: 'Mr. Rajvir Singh',
    position: 'Advisory Board Member',
    image: '/member_2.jpeg',
    bio: 'ICS 1991 - Retired as Addl.Dy CAG at Special Secretary level, Government of India',
    expertise: ['Government Administration', 'Legal Affairs', 'Financial Audit', 'Sports Development'],
    summary: 'A distinguished civil servant from the Indian Civil Service (1991 batch) who retired as Additional Deputy Comptroller and Auditor General at the level of Special Secretary to Government of India. Brings extensive experience in government administration, legal affairs, financial auditing, and sustainable development across various ministries and departments.',
    experience: [
      {
        title: 'Comptroller and Auditor General Office',
        details: [
          'Served as Additional Deputy CAG supervising audit of various States',
          'Conducted performance audits on SDGs and sustainable development',
          'Worked as DG Legal for about 5 years supervising audit of State Governments',
          'Managed supplementary audits of PSUs and their performance audits'
        ]
      },
      {
        title: 'Government of India - Various Ministries',
        details: [
          'Worked as Joint Secretary Sports GOI and framed Khelo India scheme',
          'Promoted sports excellence and spread of sports in Rural and Urban India',
          'Worked as Advisor in SAO and Ministry of Finance under USAID and World Bank projects',
          'Helped in capacity building in performance and environmental audit'
        ]
      },
      {
        title: 'State and Regional Assignments',
        details: [
          'Served as AG audit Manipur and AG audit Delhi',
          'Prepared Commonwealth Games performance report',
          'Worked as PD Audit Northern Railway and audited contracts',
          'Served as Director Finance NDMC implementing BOT projects'
        ]
      },
      {
        title: 'Agriculture and Development',
        details: [
          'Worked as Deputy Secretary to GOI Ministry of Agriculture',
          'Proposed decentralisation of FCI and village foodgrains bank scheme',
          'Worked for establishment of farmers markets in Urban centres',
          'Focused on liberating farmers from clutches of middlemen'
        ]
      }
    ],
    education: [
      'B.Sc (Hons Agriculture)',
      'M.Sc (Agricultural Economics)',
      'LLB from Delhi University',
      'LLM from Kurukshetra University'
    ],
    certifications: [
      'Indian Civil Service (1991 Batch)',
      'Additional Deputy CAG qualification',
      'UN Audits experience'
    ],
    memberships: [
      'Indian Civil Service Association',
      'Government Audit and Accounts Service',
      'Legal and Administrative Services'
    ],
    committees: [],
    languages: ['English', 'Hindi'],
    contact: {
      location: 'India'
    }
  }
};

const TeamMember: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const member = teamMembers[memberId || ''];

  if (!member) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950 flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-4">Team Member Not Found</h1>
          <button onClick={() => navigate('/')} className="btn-primary text-sm md:text-base px-4 py-2 rounded bg-primary-600 text-white hover:bg-primary-700 transition">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950 overflow-x-hidden">
      <NavigationBar />
      {/* Navigation Spacer */}
      <div className="pt-16 sm:pt-20"></div>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm sm:text-base"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to About
        </Link>
      </div>

      {/* Member Profile Header */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="glass-effect rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 backdrop-blur-xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-start">
              {/* Profile Image and Basic Info */}
              <div className="text-center md:col-span-2 lg:col-span-1">
                <div className="relative mb-6">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full mx-auto object-cover object-top border-4 border-primary-500/30 shadow-2xl"
                    />
                  ) : (
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto bg-gradient-to-r from-primary-500 to-primary-600 flex items-center justify-center border-4 border-primary-500/30 shadow-2xl">
                      <User className="w-16 h-16 sm:w-20 sm:h-20 text-white" />
                    </div>
                  )}
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">{member.name}</h1>
                <p className="text-primary-400 font-medium mb-4 text-base sm:text-lg">{member.position}</p>

                {/* Expertise */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.expertise.map((skill, index) => (
                    <span key={index} className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs sm:text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Contact Info */}
                {member.contact && (
                  <div className="space-y-3 bg-white/5 rounded-lg p-4 text-left text-sm sm:text-base">
                    <h4 className="text-white font-semibold mb-2 text-center">Contact Information</h4>
                    {member.contact.email && (
                      <div className="flex items-center gap-2 text-gray-300">
                        <Mail className="w-4 h-4 text-primary-400" />
                        <span>{member.contact.email}</span>
                      </div>
                    )}
                    {member.contact.phone && (
                      <div className="flex items-center gap-2 text-gray-300">
                        <Phone className="w-4 h-4 text-primary-400" />
                        <span>{member.contact.phone}</span>
                      </div>
                    )}
                    {member.contact.location && (
                      <div className="flex items-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4 text-primary-400" />
                        <span>{member.contact.location}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="md:col-span-2 space-y-8 text-sm sm:text-base">
                {/* Summary */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary-400" />
                    Summary
                  </h2>
                  <p className="text-gray-300 leading-relaxed">{member.summary}</p>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                    <Building className="w-5 h-5 text-primary-400" />
                    Experience Highlights
                  </h2>
                  <div className="space-y-4">
                    {member.experience.map((exp, i) => (
                      <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <h3 className="text-white font-semibold text-base mb-2">{exp.title}</h3>
                        <ul className="space-y-2 list-none">
                          {exp.details.map((detail, j) => (
                            <li key={j} className="flex items-start gap-2 text-gray-300">
                              <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education & Certifications */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary-400" />
                      Education
                    </h3>
                    <ul className="space-y-2">
                      {member.education.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary-400" />
                      Certifications
                    </h3>
                    <ul className="space-y-2">
                      {member.certifications.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Memberships */}
                {member.memberships.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Professional Memberships</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {member.memberships.map((m, i) => (
                        <div key={i} className="flex items-start gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Committees */}
                {member.committees.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">Committee Involvement</h3>
                    <ul className="space-y-2">
                      {member.committees.map((c, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Languages */}
                <div>
                  <h3 className="text-lg font-bold text-white mb-3">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {member.languages.map((lang, i) => (
                      <span key={i} className="px-3 py-1 bg-primary-500/20 text-primary-400 text-sm rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="glass-effect rounded-xl p-6 sm:p-8 backdrop-blur-xl border border-white/20">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Interested in Working Together?</h2>
            <p className="text-gray-300 mb-5 text-sm sm:text-base">Connect with our team to discuss how we can help transform your business.</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
            >
              Get in Touch
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default TeamMember;