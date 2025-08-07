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

  // Dummy data for white papers
  const whitePapers: WhitePaper[] = [
    {
      id: '1',
      title: 'AI-Driven Business Intelligence: Enhancing Operational Efficiency',
      description: 'Explores AI-powered BI tools to optimize business operations and identify growth opportunities.',
      category: 'White Paper',
      pages: 42,
      downloadUrl: 'https://www.researchgate.net/publication/386086165_AI-Driven_Business_Intelligence_Enhancing_Operational_Efficiency_and_Driving_Market_Innovation',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-01-15',
      downloads: 2340,
      publisher: 'OphoWorld Research'
    },
    {
      id: '2',
      title: 'AI and Cybersecurity: Navigating Future Threats',
      description: 'Provides insights into integrating AI with cybersecurity to address evolving threats.',
      category: 'White Paper',
      pages: 48,
      downloadUrl: 'https://www.mimecast.com/resources/white-papers/ai-and-cybersecurity/',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-01-20',
      downloads: 1890,
      publisher: 'OphoWorld Research'
    },
    {
      id: '3',
      title: 'Advancing Multi-Agent Systems Through Model Context Protocol',
      description: 'Introduces a framework for enhancing multi-agent systems, relevant for OphoWorld\'s AI Smart Labs and agentic AI workflows.',
      category: 'White Paper',
      pages: 45,
      downloadUrl: 'https://arxiv.org/abs/2504.21030',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-01-25',
      downloads: 1560,
      publisher: 'OphoWorld Research'
    },
    {
      id: '4',
      title: 'Cloud Architecture for Scalable SaaS Platforms',
      description: 'Guides cloud infrastructure design, crucial for OphoWorld\'s scalable platform hosting and multi-BU integration.',
      category: 'White Paper',
      pages: 52,
      downloadUrl: 'https://docs.aws.amazon.com/whitepapers/latest/saas-architecture-fundamentals/saas-architecture-fundamentals.html',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-01-30',
      downloads: 2100,
      publisher: 'OphoWorld Research'
    },
    {
      id: '5',
      title: 'Ethical AI and Governance Frameworks',
      description: 'Presents governance models ensuring ethical AI deployment, compliance, and trustworthiness, critical for OphoWorld\'s reputation.',
      category: 'White Paper',
      pages: 38,
      downloadUrl: 'https://www.governanceinstitute.com.au/thought-leadership/ai-ethics-and-governance-white-paper-launch/',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-02-05',
      downloads: 1780,
      publisher: 'OphoWorld Research'
    },
    {
      id: '6',
      title: 'Digital Trust in Government: A Strategic Overview',
      description: 'Valuable for OphoWorld\'s government partnerships, this outlines trust-building and digital transformation strategies.',
      category: 'White Paper',
      pages: 48,
      downloadUrl: 'https://www.weforum.org/publications/industries-in-the-intelligent-age-white-paper-series/cybersecurity/',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-02-10',
      downloads: 1450,
      publisher: 'OphoWorld Research'
    },
    {
      id: '7',
      title: 'AI-Driven Business Intelligence for Enterprises',
      description: 'Explains frameworks to implement AI-powered BI tools, improving decision-making and strategic planning in OphoWorld\'s BUs.',
      category: 'White Paper',
      pages: 44,
      downloadUrl: 'https://example.com/ai-business-intelligence.pdf',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-02-15',
      downloads: 1680,
      publisher: 'OphoWorld Research'
    },
    {
      id: '8',
      title: 'Cybersecurity in the Age of AI',
      description: 'Covers AI-enabled cybersecurity measures, essential for protecting OphoSecure and enterprise data in OphoWorld ecosystem.',
      category: 'White Paper',
      pages: 50,
      downloadUrl: 'https://example.com/ai-cybersecurity.pdf',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-02-20',
      downloads: 1890,
      publisher: 'OphoWorld Research'
    },
    {
      id: '9',
      title: 'Multi-Agent Systems for Scalable AI Applications',
      description: 'Discusses architecture of multi-agent AI systems supporting OphoWorld\'s AI Smart Labs and agentic AI workflows.',
      category: 'White Paper',
      pages: 46,
      downloadUrl: 'https://example.com/multi-agent-systems.pdf',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-02-25',
      downloads: 1560,
      publisher: 'OphoWorld Research'
    },
    {
      id: '10',
      title: 'Cloud Architecture for Scalable SaaS Platforms',
      description: 'Guides cloud infrastructure design, crucial for OphoWorld\'s scalable platform hosting and multi-BU integration.',
      category: 'White Paper',
      pages: 52,
      downloadUrl: 'https://example.com/cloud-architecture.pdf',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-03-01',
      downloads: 2100,
      publisher: 'OphoWorld Research'
    },
    {
      id: '11',
      title: 'Ethical AI and Governance Frameworks',
      description: 'Presents governance models ensuring ethical AI deployment, compliance, and trustworthiness, critical for OphoWorld\'s reputation.',
      category: 'White Paper',
      pages: 40,
      downloadUrl: 'https://example.com/ethical-ai-framework.pdf',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-03-05',
      downloads: 1780,
      publisher: 'OphoWorld Research'
    },
    {
      id: '12',
      title: 'Digital Trust in Government: A Strategic Overview',
      description: 'Valuable for OphoWorld\'s government partnerships, this outlines trust-building and digital transformation strategies.',
      category: 'White Paper',
      pages: 48,
      downloadUrl: 'Link',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      publishDate: '2024-03-10',
      downloads: 1450,
      publisher: 'OphoWorld Research'
    }
  ];

  // Updated case studies data
  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'Real Estate Auction Platforms: Technologies & Trends',
      industry: 'Use Case',
      challenge: 'Demonstrates best practices and tech stacks for PropBidNow platform, relevant for OphoWorld\'s real estate auction solutions.',
      solution: 'Real estate auction solutions with advanced technology stack',
      results: ['Enhanced auction platform', 'Improved user experience', 'Better transaction processing'],
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://www.bidhom.com/case-studies',
      readTime: '8 min read',
      publishDate: '2024-01-15'
    },
    {
      id: '2',
      title: 'AI-Powered Customer Segmentation and Personalization',
      industry: 'Use Case',
      challenge: 'Shows how RFM analysis and AI-driven customer insights improve upselling and cross-selling, enhancing OphoWorld\'s marketing BUs.',
      solution: 'AI-driven customer insights and personalization',
      results: ['Enhanced customer segmentation', 'Improved upselling', 'Better cross-selling strategies'],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://www.pecan.ai/blog/ai-customer-segmentation-marketing/',
      readTime: '10 min read',
      publishDate: '2024-01-10'
    },
    {
      id: '3',
      title: 'AI-Enabled Workflow Automation in Enterprises',
      industry: 'Use Case',
      challenge: 'Explains AI-driven workflow automation to optimize processes, increase efficiency, and reduce operational costs in OphoWorld.',
      solution: 'AI-driven workflow automation and process optimization',
      results: ['Optimized processes', 'Increased efficiency', 'Reduced operational costs'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://aisera.com/blog/workflow-automation/',
      readTime: '12 min read',
      publishDate: '2024-01-05'
    },
    {
      id: '4',
      title: 'AI in Education: Curriculum Design and Implementation',
      industry: 'Use Case',
      challenge: 'Details AI literacy program development, useful for OphoWorld\'s AI Viksit Bharat educational initiatives.',
      solution: 'AI literacy program development and implementation',
      results: ['Enhanced AI education', 'Better curriculum design', 'Improved learning outcomes'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      downloadUrl: 'https://timesofindia.indiatimes.com/city/delhi/ai-but-verify-navigating-future-of-learning/articleshow/123080374.cms',
      readTime: '9 min read',
      publishDate: '2024-01-08'
    },
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