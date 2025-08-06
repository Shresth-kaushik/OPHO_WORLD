import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Code, 
  FileText, 
  Plus, 
  Minus, 
  ChevronLeft, 
  ChevronRight, 
  Check,
  Search,
  Filter,
  Clock,
  DollarSign,
  Building,
  X,
  Send,
  Upload
} from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

interface FormData {
  // Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  country: string;
  dateOfBirth: string;
  
  // Education
  education: Array<{
    degree: string;
    institution: string;
    year: string;
    fieldOfStudy: string;
  }>;
  
  // Experience
  experience: Array<{
    position: string;
    company: string;
    duration: string;
    description: string;
  }>;
  
  // Skills
  technicalSkills: string[];
  softSkills: string[];
  languages: string[];
  
  // Additional Info
  portfolio: string;
  linkedin: string;
  github: string;
  coverLetter: string;
}

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  posted: string;
}

const CareersApplication: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formCompleted, setFormCompleted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    country: '',
    dateOfBirth: '',
    education: [{ degree: '', institution: '', year: '', fieldOfStudy: '' }],
    experience: [{ position: '', company: '', duration: '', description: '' }],
    technicalSkills: [''],
    softSkills: [''],
    languages: [''],
    portfolio: '',
    linkedin: '',
    github: '',
    coverLetter: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const steps = [
    {
      title: 'Personal Information',
      icon: <User className="w-6 h-6" />,
      description: 'Basic personal details'
    },
    {
      title: 'Education',
      icon: <GraduationCap className="w-6 h-6" />,
      description: 'Educational background'
    },
    {
      title: 'Experience',
      icon: <Briefcase className="w-6 h-6" />,
      description: 'Work experience'
    },
    {
      title: 'Skills',
      icon: <Code className="w-6 h-6" />,
      description: 'Technical and soft skills'
    },
    {
      title: 'Additional Info',
      icon: <FileText className="w-6 h-6" />,
      description: 'Portfolio and links'
    }
  ];

  const jobs: Job[] = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: '5565 silver creek valley rd Suite#600 San Jose CA 95138, CA',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$150,000 - $200,000',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for OphoWorld enterprise clients.',
      requirements: ['5+ years in AI/ML', 'Python, TensorFlow, PyTorch', 'PhD in CS or related field'],
      responsibilities: ['Design AI architectures', 'Lead ML projects', 'Mentor junior engineers'],
      benefits: ['Health insurance', 'Stock options', '$5,000 learning budget'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$130,000 - $170,000',
      description: 'Design and implement scalable cloud infrastructure solutions for OphoWorld enterprise platforms.',
      requirements: ['4+ years cloud experience', 'AWS/Azure/GCP', 'Kubernetes, Docker'],
      responsibilities: ['Design cloud architectures', 'Implement DevOps practices', 'Optimize performance'],
      benefits: ['Remote work', 'Health insurance', 'Professional development'],
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'New Delhi, India',
      type: 'Full-time',
      experience: '3+ years',
      salary: '₹25,00,000 - ₹35,00,000',
      description: 'Analyze complex datasets and build predictive models for OphoWorld AI solutions.',
      requirements: ['3+ years in data science', 'Python, R, SQL', 'Statistics background'],
      responsibilities: ['Build predictive models', 'Analyze data patterns', 'Present insights'],
      benefits: ['Health insurance', 'Flexible hours', 'Learning budget'],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'Product',
      location: 'Toronto, Canada',
      type: 'Full-time',
      experience: '4+ years',
      salary: 'CAD $120,000 - CAD $160,000',
      description: 'Drive product strategy and roadmap for OphoWorld AI-powered enterprise solutions.',
      requirements: ['4+ years product management', 'Technical background', 'Agile experience'],
      responsibilities: ['Define product strategy', 'Work with engineering', 'Analyze market trends'],
      benefits: ['Health insurance', 'Stock options', 'Learning budget'],
      posted: '5 days ago'
    },
    {
      id: 5,
      title: 'UX Designer',
      department: 'Design',
      location: 'Andorra la Vella, Andorra',
      type: 'Full-time',
      experience: '3+ years',
      salary: '€70,000 - €90,000',
      description: 'Create intuitive user experiences for OphoWorld AI-powered applications.',
      requirements: ['3+ years UX design', 'Figma, Sketch', 'User research experience'],
      responsibilities: ['Design user interfaces', 'Conduct user research', 'Create prototypes'],
      benefits: ['Health insurance', 'Creative freedom', 'Professional development'],
      posted: '1 week ago'
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$110,000 - $150,000',
      description: 'Build and maintain CI/CD pipelines and infrastructure for OphoWorld platforms.',
      requirements: ['3+ years DevOps', 'Docker, Kubernetes', 'AWS/Azure experience'],
      responsibilities: ['Maintain CI/CD pipelines', 'Monitor infrastructure', 'Automate deployments'],
      benefits: ['Remote work', 'Health insurance', 'Learning budget'],
      posted: '4 days ago'
    }
  ];

  const departments = ['all', 'Engineering', 'Data Science', 'Product', 'Design'];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleArrayChange = (field: keyof FormData, index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).map((item, i) => i === index ? value : item)
    }));
  };

  const handleObjectArrayChange = (field: 'education' | 'experience', index: number, subField: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => 
        i === index ? { ...item, [subField]: value } : item
      )
    }));
  };

  const addArrayItem = (field: keyof FormData) => {
    if (field === 'education') {
      setFormData(prev => ({
        ...prev,
        education: [...prev.education, { degree: '', institution: '', year: '', fieldOfStudy: '' }]
      }));
    } else if (field === 'experience') {
      setFormData(prev => ({
        ...prev,
        experience: [...prev.experience, { position: '', company: '', duration: '', description: '' }]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: [...(prev[field] as string[]), '']
      }));
    }
  };

  const removeArrayItem = (field: keyof FormData, index: number) => {
    if (field === 'education' || field === 'experience') {
      setFormData(prev => ({
        ...prev,
        [field]: prev[field].filter((_, i) => i !== index)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: (prev[field] as string[]).filter((_, i) => i !== index)
      }));
    }
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setFormCompleted(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleJobClick = (job: Job) => {
    setSelectedJob(job);
  };

  const handleApply = (job: Job) => {
    setSelectedJob(job);
    setShowApplicationModal(true);
  };

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Application submitted for ${selectedJob?.title}!`);
    setShowApplicationModal(false);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Personal Information
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone *</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                placeholder="Enter your address"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Country *</label>
                <select
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                  required
                >
                  <option value="" className="bg-primary-dark">Select Country</option>
                  <option value="US" className="bg-primary-dark">United States</option>
                  <option value="UK" className="bg-primary-dark">United Kingdom</option>
                  <option value="CA" className="bg-primary-dark">Canada</option>
                  <option value="IN" className="bg-primary-dark">India</option>
                  <option value="AD" className="bg-primary-dark">Andorra</option>
                  <option value="Other" className="bg-primary-dark">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Date of Birth</label>
                <input
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                />
              </div>
            </div>
          </div>
        );

      case 1: // Education
        return (
          <div className="space-y-6">
            {formData.education.map((edu, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 sm:p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base sm:text-lg font-semibold text-white">Education {index + 1}</h4>
                  {formData.education.length > 1 && (
                    <button
                      onClick={() => removeArrayItem('education', index)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Degree *</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => handleObjectArrayChange('education', index, 'degree', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                      placeholder="e.g., Bachelor's, Master's, PhD"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Institution *</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => handleObjectArrayChange('education', index, 'institution', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                      placeholder="University/College name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Year *</label>
                    <input
                      type="text"
                      value={edu.year}
                      onChange={(e) => handleObjectArrayChange('education', index, 'year', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                      placeholder="e.g., 2020-2024"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Field of Study *</label>
                    <input
                      type="text"
                      value={edu.fieldOfStudy}
                      onChange={(e) => handleObjectArrayChange('education', index, 'fieldOfStudy', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                      placeholder="e.g., Computer Science"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => addArrayItem('education')}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-sm sm:text-base"
            >
              <Plus className="w-4 h-4" />
              Add Education
            </button>
          </div>
        );

      case 2: // Experience
        return (
          <div className="space-y-6">
            {formData.experience.map((exp, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4 sm:p-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-base sm:text-lg font-semibold text-white">Experience {index + 1}</h4>
                  {formData.experience.length > 1 && (
                    <button
                      onClick={() => removeArrayItem('experience', index)}
                      className="text-red-400 hover:text-red-300 transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Position *</label>
                    <input
                      type="text"
                      value={exp.position}
                      onChange={(e) => handleObjectArrayChange('experience', index, 'position', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                      placeholder="Job title"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company *</label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => handleObjectArrayChange('experience', index, 'company', e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                      placeholder="Company name"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Duration *</label>
                  <input
                    type="text"
                    value={exp.duration}
                    onChange={(e) => handleObjectArrayChange('experience', index, 'duration', e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                    placeholder="e.g., Jan 2020 - Dec 2022"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                  <textarea
                    value={exp.description}
                    onChange={(e) => handleObjectArrayChange('experience', index, 'description', e.target.value)}
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none text-sm sm:text-base"
                    placeholder="Describe your role and achievements"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={() => addArrayItem('experience')}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-sm sm:text-base"
            >
              <Plus className="w-4 h-4" />
              Add Experience
            </button>
          </div>
        );

      case 3: // Skills
        return (
          <div className="space-y-8">
            {/* Technical Skills */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Technical Skills</h4>
              <div className="space-y-3">
                {formData.technicalSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleArrayChange('technicalSkills', index, e.target.value)}
                      className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                      placeholder="e.g., Python, React, AWS"
                    />
                    {formData.technicalSkills.length > 1 && (
                      <button
                        onClick={() => removeArrayItem('technicalSkills', index)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => addArrayItem('technicalSkills')}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus className="w-4 h-4" />
                  Add Technical Skill
                </button>
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Soft Skills</h4>
              <div className="space-y-3">
                {formData.softSkills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <input
                      type="text"
                      value={skill}
                      onChange={(e) => handleArrayChange('softSkills', index, e.target.value)}
                      className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                      placeholder="e.g., Leadership, Communication"
                    />
                    {formData.softSkills.length > 1 && (
                      <button
                        onClick={() => removeArrayItem('softSkills', index)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => addArrayItem('softSkills')}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus className="w-4 h-4" />
                  Add Soft Skill
                </button>
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Languages</h4>
              <div className="space-y-3">
                {formData.languages.map((language, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <input
                      type="text"
                      value={language}
                      onChange={(e) => handleArrayChange('languages', index, e.target.value)}
                      className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                      placeholder="e.g., English (Native), Spanish (Fluent)"
                    />
                    {formData.languages.length > 1 && (
                      <button
                        onClick={() => removeArrayItem('languages', index)}
                        className="text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Minus className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  onClick={() => addArrayItem('languages')}
                  className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-sm sm:text-base"
                >
                  <Plus className="w-4 h-4" />
                  Add Language
                </button>
              </div>
            </div>
          </div>
        );

      case 4: // Additional Info
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Portfolio URL</label>
              <input
                type="url"
                value={formData.portfolio}
                onChange={(e) => handleInputChange('portfolio', e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                placeholder="https://yourportfolio.com"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">LinkedIn Profile</label>
                <input
                  type="url"
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange('linkedin', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">GitHub Profile</label>
                <input
                  type="url"
                  value={formData.github}
                  onChange={(e) => handleInputChange('github', e.target.value)}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                  placeholder="https://github.com/yourusername"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Cover Letter</label>
              <textarea
                value={formData.coverLetter}
                onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                rows={6}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none text-sm sm:text-base"
                placeholder="Tell us why you're interested in joining OphoWorld..."
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (!formCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
        <NavigationBar />
        {/* Navigation Spacer */}
        <div className="pt-20"></div>

        {/* Form Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <button
                onClick={() => navigate('/careers')}
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors mb-6 text-sm sm:text-base"
              >
                <ChevronLeft className="w-4 h-4" />
                Back to Careers
              </button>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Your Profile
              </h1>
              <p className="text-base sm:text-lg text-gray-300 px-2">
                Help us understand your background and find the perfect role for you at OphoWorld
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center justify-between mb-4 overflow-x-auto pb-2">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center flex-shrink-0">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      index <= currentStep 
                        ? 'bg-primary-500 border-primary-500 text-white' 
                        : 'border-gray-600 text-gray-400'
                    }`}>
                      {index < currentStep ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : React.cloneElement(step.icon as React.ReactElement, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-8 sm:w-16 h-0.5 mx-1 sm:mx-2 transition-all duration-300 ${
                        index < currentStep ? 'bg-primary-500' : 'bg-gray-600'
                      }`}></div>
                    )}
                  </div>
                ))}
              </div>
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{steps[currentStep].title}</h3>
                <p className="text-sm sm:text-base text-gray-400 px-2">{steps[currentStep].description}</p>
              </div>
            </div>

            {/* Form Content */}
            <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 backdrop-blur-xl border border-white/20 mb-6 sm:mb-8">
              {renderStepContent()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
              <button
                onClick={prevStep}
                disabled={currentStep === 0}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={nextStep}
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-sm sm:text-base"
              >
                {currentStep === steps.length - 1 ? 'Complete Profile' : 'Next'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950">
      <NavigationBar />
      {/* Navigation Spacer */}
      <div className="pt-20"></div>

      {/* Job Listings Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Open Roles at OphoWorld
            </h1>
            <p className="text-base sm:text-lg text-gray-300 px-2">
              Find your perfect role and join our innovative team
            </p>
          </div>

          {/* Search and Filter */}
          <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-xl border border-white/20 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="pl-10 pr-8 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base w-full sm:w-auto"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept} className="bg-primary-dark">
                      {dept === 'all' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Jobs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Jobs List */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              {filteredJobs.map(job => (
                <div
                  key={job.id}
                  className={`glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-xl border transition-all duration-300 cursor-pointer hover:bg-white/15 ${
                    selectedJob?.id === job.id ? 'border-primary-500 bg-white/10' : 'border-white/20'
                  }`}
                  onClick={() => handleJobClick(job)}
                >
                  <div className="flex flex-col gap-3 sm:gap-4 mb-3 sm:mb-4">
                    {/* Job Title and Meta Info */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="truncate max-w-[120px] sm:max-w-none">{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <DollarSign className="w-4 h-4" />
                          <span className="truncate">{job.salary}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Posted Date and Apply Button */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                      <div className="text-xs sm:text-sm text-gray-400">{job.posted}</div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleApply(job);
                        }}
                        className="px-3 sm:px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-xs sm:text-sm font-medium whitespace-nowrap self-start sm:self-auto"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>

            {/* Job Details Sidebar */}
            <div className="lg:col-span-1 order-first lg:order-last">
              {selectedJob ? (
                <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-xl border border-white/20 lg:sticky lg:top-24">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4">{selectedJob.title}</h3>
                  
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                      <Building className="w-4 h-4" />
                      {selectedJob.department}
                    </div>
                    <div className="flex items-start gap-2 text-gray-300 text-sm sm:text-base">
                      <MapPin className="w-4 h-4" />
                      <span className="break-words">{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                      <Clock className="w-4 h-4" />
                      {selectedJob.type} • {selectedJob.experience}
                    </div>
                    <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base">
                      <DollarSign className="w-4 h-4" />
                      {selectedJob.salary}
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {selectedJob.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Responsibilities</h4>
                      <ul className="space-y-2">
                        {selectedJob.responsibilities.map((resp, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"></div>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {selectedJob.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => handleApply(selectedJob)}
                    className="w-full mt-4 sm:mt-6 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base"
                  >
                    Apply for this Position
                  </button>
                </div>
              ) : (
                <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-xl border border-white/20 text-center">
                  <div className="text-gray-400 mb-4">
                    <Briefcase className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-4" />
                    <p className="text-sm sm:text-base">Select a job to view details</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationModal && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950 rounded-xl sm:rounded-2xl border border-white/20 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/20">
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">Apply for {selectedJob.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 break-words">{selectedJob.department} • {selectedJob.location}</p>
              </div>
              <button
                onClick={() => setShowApplicationModal(false)}
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 sm:p-6 overflow-y-auto max-h-[calc(95vh-120px)] sm:max-h-[calc(90vh-140px)]">
              {/* Profile Summary */}
              <div className="bg-white/10 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3">Your Profile Summary</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div>
                    <span className="text-gray-400">Name:</span>
                    <span className="text-white ml-2">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Email:</span>
                    <span className="text-white ml-2 break-all">{formData.email}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Phone:</span>
                    <span className="text-white ml-2">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Country:</span>
                    <span className="text-white ml-2">{formData.country}</span>
                  </div>
                </div>
              </div>

              {/* Application Form */}
              <form onSubmit={handleApplicationSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Why are you interested in this position? *
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none text-sm sm:text-base"
                    placeholder="Tell us what excites you about this role at OphoWorld..."
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Expected Salary
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base"
                      placeholder="e.g., $120,000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Availability
                    </label>
                    <select className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm sm:text-base">
                      <option value="" className="bg-primary-dark">Select availability</option>
                      <option value="immediate" className="bg-primary-dark">Immediate</option>
                      <option value="2weeks" className="bg-primary-dark">2 weeks notice</option>
                      <option value="1month" className="bg-primary-dark">1 month notice</option>
                      <option value="other" className="bg-primary-dark">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Upload Resume
                  </label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-4 sm:p-6 text-center">
                    <Upload className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 mx-auto mb-2" />
                    <p className="text-gray-300 mb-1 text-sm sm:text-base">Click to upload or drag and drop</p>
                    <p className="text-gray-500 text-xs sm:text-sm">PDF, DOC, DOCX (Max 5MB)</p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-5 h-5" />
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default CareersApplication;