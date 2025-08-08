import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import HeroSection from './components/HeroSection';
import SolutionCharacteristics from './components/SolutionCharacteristics';
import EcosystemOverview from './components/EcosystemOverview';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';
import SolutionDetail from './pages/SolutionDetail';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import DataProtection from './pages/DataProtection';
import Resources from './pages/Resources';
import EnterpriseStructure from './pages/EnterpriseStructure';
import JourneyStrategy from './pages/JourneyStrategy';
import Contact from './pages/Contact';
import TeamMember from './pages/TeamMember';
import Careers from './pages/Careers';
import CareersApplication from './pages/CareersApplication';
import CrossBUKnowledgeExchange from './pages/CrossBUKnowledgeExchange';
import MentorshipForesight from './pages/MentorshipForesight';
import ThoughtLeadership from './pages/ThoughtLeadership';
import EcosystemMapping from './pages/EcosystemMapping';
import BenchmarkingBestPractices from './pages/BenchmarkingBestPractices';
import DisruptionStrategy from './pages/DisruptionStrategy';
import ESGDataAggregation from './pages/ESGDataAggregation';
import GreenProductPathways from './pages/GreenProductPathways';
import CircularEconomyCompliance from './pages/CircularEconomyCompliance';
import DataSharingResearchHubs from './pages/DataSharingResearchHubs';
import AIMLSolutionCoCreation from './pages/AIMLSolutionCoCreation';
import IPDevelopmentFeedback from './pages/IPDevelopmentFeedback';
import EngageDiverseVoices from './pages/EngageDiverseVoices';
import PersonaBuildingDesignThinking from './pages/PersonaBuildingDesignThinking';
import PersonalizationModelsEngagement from './pages/PersonalizationModelsEngagement';
import DeepIndustryScans from './pages/DeepIndustryScans';
import IdeationLabsPrototyping from './pages/IdeationLabsPrototyping';
import ContinuousMonitoringInnovation from './pages/ContinuousMonitoringInnovation';
import ConnectCreateEvolve from './pages/ConnectCreateEvolve';

// Home page component
const HomePage = () => (
  <>
    <NavigationBar />
    <HeroSection />
    <SolutionCharacteristics />
    <EcosystemOverview />
    <Footer />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary-medium to-primary-950 text-white">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solution/:id" element={<SolutionDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/enterprise-structure" element={<EnterpriseStructure />} />
          <Route path="/journey-strategy" element={<JourneyStrategy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team/:memberId" element={<TeamMember />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers-application" element={<CareersApplication />} />
          <Route path="/leadership-enablement/cross-bu-knowledge" element={<CrossBUKnowledgeExchange />} />
          <Route path="/leadership-enablement/mentorship-foresight" element={<MentorshipForesight />} />
          <Route path="/leadership-enablement/thought-leadership" element={<ThoughtLeadership />} />
          <Route path="/competitor-mapping/ecosystem-mapping" element={<EcosystemMapping />} />
          <Route path="/competitor-mapping/benchmarking-best-practices" element={<BenchmarkingBestPractices />} />
          <Route path="/competitor-mapping/disruption-strategy" element={<DisruptionStrategy />} />
          <Route path="/sustainability-gaps/esg-data-aggregation" element={<ESGDataAggregation />} />
          <Route path="/sustainability-gaps/green-product-pathways" element={<GreenProductPathways />} />
          <Route path="/sustainability-gaps/circular-economy-compliance" element={<CircularEconomyCompliance />} />
          <Route path="/innovation-potential/data-sharing-research-hubs" element={<DataSharingResearchHubs />} />
          <Route path="/innovation-potential/aiml-solution-co-creation" element={<AIMLSolutionCoCreation />} />
          <Route path="/innovation-potential/ip-development-feedback" element={<IPDevelopmentFeedback />} />
          <Route path="/customer-intelligence/engage-diverse-voices" element={<EngageDiverseVoices />} />
          <Route path="/customer-intelligence/persona-building-design-thinking" element={<PersonaBuildingDesignThinking />} />
          <Route path="/customer-intelligence/personalization-models-engagement" element={<PersonalizationModelsEngagement />} />
          <Route path="/market-gaps-trends/deep-industry-scans" element={<DeepIndustryScans />} />
          <Route path="/market-gaps-trends/ideation-labs-prototyping" element={<IdeationLabsPrototyping />} />
          <Route path="/market-gaps-trends/continuous-monitoring-innovation" element={<ContinuousMonitoringInnovation />} />
          <Route path="/connect-create-evolve" element={<ConnectCreateEvolve />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;