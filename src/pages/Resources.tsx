import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  BookOpen, 
  PenTool, 
  HelpCircle, 
  Download,
  ChevronRight,
  ArrowRight,
  Award,
  Target,
} from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  downloadUrl: string;
  readTime: string;
  publishDate: string;
}

interface WhitePaper {
  id: string;
  title: string;
  description: string;
  category: string;
  pages: number;
  downloadUrl: string;
  image: string;
  publishDate: string;
  downloads: number;
  publisher: string;
}

interface DocSection {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  sections: string[];
}

const Resources: React.FC = () => {
  const [activeSection, setActiveSection] = useState('case-studies');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dummy data for case studies
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'Coca-Cola Transforms Customer Engagement',
      industry: 'Microsoft',
      challenge: 'Need for AI-driven digital transformation to enhance customer engagement',
      solution: 'AI-driven digital transformation using Azure',
      results: ['Enhanced customer engagement', 'Improved digital transformation', 'Better data insights'],
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://customers.microsoft.com/en-us/story/828325-coca-cola-customer-engagement-azure-en',
      readTime: '8 min read',
      publishDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'Lufthansa Uses IBM Watson to Optimize Operations',
      industry: 'IBM',
      challenge: 'Need for AI and data-driven operational optimization',
      solution: 'AI and data-driven operational optimization using IBM Watson',
      results: ['Optimized operations', 'Better data-driven decisions', 'Enhanced efficiency'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://www.ibm.com/case-studies/lufthansa-ai-operations',
      readTime: '10 min read',
      publishDate: '2024-01-10'
    },
    {
      id: '3',
      title: 'Mayo Clinic Accelerates Medical Research with AI',
      industry: 'Google Cloud',
      challenge: 'Need for AI and cloud computing to accelerate medical research',
      solution: 'AI + cloud computing in healthcare using Google Cloud',
      results: ['Accelerated medical research', 'Better patient outcomes', 'Enhanced data analysis'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://cloud.google.com/customers/mayo-clinic',
      readTime: '12 min read',
      publishDate: '2024-01-05'
    },
    {
      id: '4',
      title: 'AEP Smart Grid Modernization with AI',
      industry: 'Accenture',
      challenge: 'Modernizing energy infrastructure with AI technology',
      solution: 'AI in energy infrastructure & industrial IoT',
      results: ['Smart grid modernization', 'Improved energy efficiency', 'Better infrastructure management'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://www.accenture.com/us-en/case-studies/utilities/aep-smart-grid-modernization',
      readTime: '9 min read',
      publishDate: '2024-01-08'
    },
    {
      id: '5',
      title: 'Toyota Enhances CX with Salesforce CRM + AI',
      industry: 'Salesforce',
      challenge: 'Enhancing customer experience through intelligent CRM integration',
      solution: 'Customer intelligence and digital integration',
      results: ['Enhanced customer experience', 'Better CRM integration', 'Improved customer intelligence'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://www.salesforce.com/customer-success-stories/toyota/',
      readTime: '7 min read',
      publishDate: '2024-01-12'
    },
    {
      id: '6',
      title: 'Cleveland Clinic Secures Hybrid Workforce',
      industry: 'Cisco',
      challenge: 'Implementing Zero Trust architecture for healthcare security',
      solution: 'Zero Trust architecture in healthcare',
      results: ['Secured hybrid workforce', 'Enhanced security posture', 'Better compliance'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://www.cisco.com/c/en/us/about/customer-stories/cleveland-clinic.html',
      readTime: '11 min read',
      publishDate: '2024-01-06'
    },
    {
      id: '7',
      title: 'SaaS Provider Secures Cloud with Prisma',
      industry: 'Palo Alto Networks',
      challenge: 'Implementing cloud-native cybersecurity architecture',
      solution: 'Cloud-native cybersecurity architecture',
      results: ['Secured cloud infrastructure', 'Enhanced cybersecurity', 'Better threat protection'],
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://www.paloaltonetworks.com/customers',
      readTime: '10 min read',
      publishDate: '2024-01-04'
    },
    {
      id: '8',
      title: 'FINRA Uses AWS for Real-Time Surveillance',
      industry: 'AWS',
      challenge: 'Implementing cybersecurity and regulatory compliance in finance',
      solution: 'Cybersecurity + regulatory compliance in finance',
      results: ['Real-time surveillance', 'Enhanced compliance', 'Better risk management'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://aws.amazon.com/solutions/case-studies/finra/',
      readTime: '13 min read',
      publishDate: '2024-01-03'
    },
    {
      id: '9',
      title: 'Sparebank 1 Enhances Fraud Detection with AI',
      industry: 'IBM',
      challenge: 'Need for advanced AI-powered fraud detection systems',
      solution: 'AI in fraud risk mitigation',
      results: ['Enhanced fraud detection', 'Reduced false positives', 'Better risk assessment'],
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://www.ibm.com/case-studies/sparebank-1',
      readTime: '9 min read',
      publishDate: '2024-01-02'
    },
    {
      id: '10',
      title: 'GE Oil & Gas Migrates to AWS Cloud',
      industry: 'AWS',
      challenge: 'Industrial cloud migration and deployment challenges',
      solution: 'Industrial cloud migration and deployment',
      results: ['Successful cloud migration', 'Improved scalability', 'Cost optimization'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://aws.amazon.com/solutions/case-studies/ge-oil-gas/',
      readTime: '11 min read',
      publishDate: '2024-01-01'
    },
    {
      id: '11',
      title: 'Spotify Scales Globally on Google Cloud',
      industry: 'Google Cloud',
      challenge: 'Need for cloud-native deployment at global scale',
      solution: 'Cloud-native deployment at scale',
      results: ['Global scalability', 'Enhanced performance', 'Better user experience'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://cloud.google.com/customers/spotify',
      readTime: '8 min read',
      publishDate: '2023-12-30'
    },
    {
      id: '12',
      title: 'LinkedIn Learning for Workforce Enablement',
      industry: 'LinkedIn Learning',
      challenge: 'Corporate upskilling in AI and cybersecurity domains',
      solution: 'Corporate upskilling in AI/cyber',
      results: ['Enhanced workforce skills', 'Better AI adoption', 'Improved cybersecurity awareness'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://learning.linkedin.com/customer-success-stories',
      readTime: '7 min read',
      publishDate: '2023-12-28'
    },
    {
      id: '13',
      title: 'Infosys Upskills 50,000+ Engineers via Coursera',
      industry: 'Coursera',
      challenge: 'Scalable technical training at enterprise level',
      solution: 'Scalable technical training at enterprise level',
      results: ['Massive skill development', 'Enhanced technical capabilities', 'Better project outcomes'],
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://www.coursera.org/business/customers/infosys',
      readTime: '10 min read',
      publishDate: '2023-12-25'
    },
    {
      id: '14',
      title: 'AI + Azure Learning Paths for Partners',
      industry: 'Microsoft Learn',
      challenge: 'Partner enablement and AI training requirements',
      solution: 'Partner enablement and AI training',
      results: ['Enhanced partner capabilities', 'Better AI implementation', 'Improved customer outcomes'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://learn.microsoft.com/en-us/training/',
      readTime: '9 min read',
      publishDate: '2023-12-22'
    },
    {
      id: '15',
      title: 'Stripe Enhances Developer Support with GPT',
      industry: 'OpenAI',
      challenge: 'Need for agentic AI and chat support automation',
      solution: 'Agentic AI and chat support automation',
      results: ['Improved developer experience', 'Automated support', 'Enhanced productivity'],
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://openai.com/customer-stories/stripe',
      readTime: '8 min read',
      publishDate: '2023-12-20'
    },
    {
      id: '16',
      title: 'NIST Cybersecurity Framework in Finance',
      industry: 'NIST',
      challenge: 'Government-backed security governance implementation',
      solution: 'Government-backed security governance',
      results: ['Enhanced security framework', 'Better compliance', 'Improved risk management'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://www.nist.gov/cyberframework/success-stories',
      readTime: '12 min read',
      publishDate: '2023-12-18'
    },
    {
      id: '17',
      title: 'AI Governance by World Economic Forum',
      industry: 'WEF',
      challenge: 'Ethics, trust, and policy in AI implementation',
      solution: 'Ethics, trust, and policy in AI',
      results: ['Better AI governance', 'Enhanced ethical standards', 'Improved policy frameworks'],
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://www.weforum.org/whitepapers/',
      readTime: '13 min read',
      publishDate: '2023-12-15'
    }
  ];

  // Dummy data for white papers
  const whitePapers: WhitePaper[] = [
    {
      id: '1',
      title: 'State of AI 2024 Report',
      description: 'Global AI trends, LLMs, policy, adoption',
      category: 'AI Trends',
      pages: 156,
      downloadUrl: 'https://aiindex.stanford.edu/report/',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-03-15',
      downloads: 15420,
      publisher: 'Stanford HAI / AI Index'
    },
    {
      id: '2',
      title: 'The Future of AI and the Workforce',
      description: 'Impact of AI on jobs, automation and upskilling',
      category: 'Workforce',
      pages: 89,
      downloadUrl: 'https://workofthefuture.mit.edu/research-publications/',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-02-20',
      downloads: 8750,
      publisher: 'MIT Task Force on Work of the Future'
    },
    {
      id: '3',
      title: 'Generative AI: The Next Productivity Frontier',
      description: 'Enterprise productivity using GenAI',
      category: 'Productivity',
      pages: 64,
      downloadUrl: 'https://www.mckinsey.com/business-functions/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-01-25',
      downloads: 12340,
      publisher: 'McKinsey & Company'
    },
    {
      id: '4',
      title: 'AI Governance: A Holistic Approach to Implement AI',
      description: 'Ethical AI and global policy frameworks',
      category: 'Governance',
      pages: 72,
      downloadUrl: 'https://www.weforum.org/whitepapers/',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-01-10',
      downloads: 6890,
      publisher: 'World Economic Forum (WEF)'
    },
    {
      id: '5',
      title: 'AI Adoption in the Enterprise',
      description: 'Enterprise maturity models, risk, scaling AI',
      category: 'Enterprise AI',
      pages: 48,
      downloadUrl: 'https://www2.deloitte.com/global/en/pages/about-deloitte/articles/ai-institute.html',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-01-05',
      downloads: 9560,
      publisher: 'Deloitte AI Institute'
    },
    {
      id: '6',
      title: 'NIST Cybersecurity Framework 2.0 (2024)',
      description: 'Secure-by-design cybersecurity implementation',
      category: 'Cybersecurity',
      pages: 112,
      downloadUrl: 'https://www.nist.gov/cyberframework',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-02-26',
      downloads: 18750,
      publisher: 'NIST (U.S. Government)'
    },
    {
      id: '7',
      title: 'Zero Trust Maturity Model',
      description: 'Zero Trust architecture roadmap',
      category: 'Security Architecture',
      pages: 95,
      downloadUrl: 'https://www.cisa.gov/resources-tools/resources/zero-trust-maturity-model',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-01-15',
      downloads: 7230,
      publisher: 'U.S. Department of Homeland Security (CISA)'
    },
    {
      id: '8',
      title: 'Cybersecurity Predictions 2024',
      description: 'Future threats, cloud-native security, AI security',
      category: 'Security Trends',
      pages: 58,
      downloadUrl: 'https://www.paloaltonetworks.com/resources/research/cybersecurity-predictions',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-01-08',
      downloads: 5670,
      publisher: 'Palo Alto Networks'
    },
    {
      id: '9',
      title: 'AI & Cybersecurity Convergence',
      description: 'Use of AI in modern security operations',
      category: 'AI Security',
      pages: 76,
      downloadUrl: 'https://www.ibm.com/reports/threat-intelligence',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-01-12',
      downloads: 8940,
      publisher: 'IBM X-Force Threat Intelligence'
    },
    {
      id: '10',
      title: 'Cloud Transformation Maturity Framework',
      description: 'Staged model for cloud adoption and readiness',
      category: 'Cloud Strategy',
      pages: 84,
      downloadUrl: 'https://aws.amazon.com/resources/analyst-reports/',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-01-20',
      downloads: 11250,
      publisher: 'AWS / IDC'
    },
    {
      id: '11',
      title: 'Unlocking the Value of Cloud at Scale',
      description: 'Accelerating cloud ROI in large organizations',
      category: 'Cloud ROI',
      pages: 67,
      downloadUrl: 'https://www.accenture.com/us-en/insights/cloud/cloud-value',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-01-18',
      downloads: 6780,
      publisher: 'Accenture'
    },
    {
      id: '12',
      title: 'The Digital Skills Gap Report',
      description: 'Future-ready training programs and certifications',
      category: 'Skills Development',
      pages: 92,
      downloadUrl: 'https://news.microsoft.com/skills/skills-report/',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-02-05',
      downloads: 9870,
      publisher: 'LinkedIn / Microsoft'
    },
    {
      id: '13',
      title: 'Closing the AI Skills Gap',
      description: 'Training ecosystem for AI literacy',
      category: 'AI Education',
      pages: 54,
      downloadUrl: 'https://www.weforum.org/reports/',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-01-28',
      downloads: 7450,
      publisher: 'World Economic Forum & Coursera'
    },
    {
      id: '14',
      title: 'AI Education & Responsible Use Framework',
      description: 'Policies for AI in education',
      category: 'Education Policy',
      pages: 78,
      downloadUrl: 'https://unesdoc.unesco.org/',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-02-12',
      downloads: 5230,
      publisher: 'UNESCO'
    }
  ];

  // Documentation sections
  const docSections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      description: 'Quick start guides and initial setup instructions',
      icon: <Target className="w-6 h-6" />,
      sections: ['Installation Guide', 'Quick Start', 'Configuration', 'First Steps']
    },
    {
      id: 'api-reference',
      title: 'API Reference',
      description: 'Complete API documentation and examples',
      icon: <BookOpen className="w-6 h-6" />,
      sections: ['Authentication', 'Endpoints', 'Examples', 'SDKs']
    },
    {
      id: 'tutorials',
      title: 'Tutorials',
      description: 'Step-by-step tutorials and use cases',
      icon: <PenTool className="w-6 h-6" />,
      sections: ['Basic Tutorials', 'Advanced Guides', 'Use Cases', 'Best Practices']
    },
    {
      id: 'troubleshooting',
      title: 'Troubleshooting',
      description: 'Common issues and solutions',
      icon: <HelpCircle className="w-6 h-6" />,
      sections: ['Common Issues', 'Error Codes', 'Debugging', 'FAQ']
    }
  ];

  const navigationItems = [
    { id: 'case-studies', label: 'Case Studies', icon: <Award className="w-5 h-5" /> },
    { id: 'white-papers', label: 'White Papers', icon: <FileText className="w-5 h-5" /> },
    { id: 'documentation', label: 'Documentation', icon: <BookOpen className="w-5 h-5" /> }
  ];

  const renderCaseStudies = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Case Studies</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Real-world success stories showcasing how our solutions transform businesses across industries.
        </p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {caseStudies.map((study) => (
          <div key={study.id} className="glass-effect rounded-xl overflow-hidden border border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-300 group flex flex-col h-full">
            <div className="p-4 flex flex-col flex-grow">
              {/* Header with tags */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded-full border border-primary-500/30">
                  {study.industry}
                </span>
                <span className="px-2 py-1 bg-white/10 text-white text-xs rounded-full">
                  {study.readTime}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                {study.title}
              </h3>
              
              <div className="space-y-2 mb-4 flex-grow">
                <div>
                  <h4 className="text-xs font-semibold text-primary-400 mb-1">Solution</h4>
                  <p className="text-gray-300 text-xs line-clamp-2">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-xs font-semibold text-primary-400 mb-1">Key Results</h4>
                  <ul className="space-y-0.5">
                    {study.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="flex items-start gap-1 text-gray-300 text-xs">
                        <div className="w-1 h-1 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-auto">
                <a
                  href={study.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary-400 hover:text-primary-300 text-xs font-semibold transition-colors"
                >
                  View Case Study
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderWhitePapers = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">White Papers</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          In-depth research and insights on the latest technology trends and best practices.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {whitePapers.map((paper) => (
          <div key={paper.id} className="glass-effect rounded-2xl p-6 border border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-300 group flex flex-col h-full">
            <div className="mb-4">
              <span className="px-3 py-1 bg-primary-500/20 text-primary-400 text-xs font-semibold rounded-full">
                {paper.category}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
              {paper.title}
            </h3>
            
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              {paper.description}
            </p>
            
            <div className="mb-6">
              <div className="text-xs text-gray-400">
                <span className="font-semibold text-primary-400">Publisher:</span> {paper.publisher}
              </div>
            </div>
            
            <div className="mt-auto">
              <a
                href={paper.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors no-underline"
              >
                <Download className="w-4 h-4" />
                View
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDocumentation = () => (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Documentation</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Comprehensive guides, API references, and tutorials to help you get the most out of our solutions.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {docSections.map((section) => (
          <div key={section.id} className="glass-effect rounded-2xl p-8 border border-white/20 backdrop-blur-xl hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                {section.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-300 text-sm">{section.description}</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {section.sections.map((item, index) => (
                <button
                  key={index}
                  className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg text-left transition-colors group/item"
                >
                  <span className="text-gray-300 group-hover/item:text-white transition-colors">
                    {item}
                  </span>
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover/item:text-primary-400 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'case-studies':
        return renderCaseStudies();
      case 'white-papers':
        return renderWhitePapers();
      case 'documentation':
        return renderDocumentation();
      default:
        return renderCaseStudies();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      <NavigationBar />
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our comprehensive collection of resources to help you succeed with technology transformation.
          </p>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-primary-dark/95 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {renderContent()}
        </div>
      </section>
      
      <Footer />

    </div>
  );
};

export default Resources;