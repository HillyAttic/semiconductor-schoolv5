import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import ServicesPage from './pages/services';
import Contact from './pages/contact';
import ContactVersion2 from './pages/contact/ContactVersion2';
import ProcessPage from './pages/process';
import About from './pages/about';
import CaseStudyPage from './pages/case-study';
import Homepage from './pages/homepage';
import PrivacyPolicy from './pages/privacy-policy';
import TermsConditions from './pages/terms-conditions';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact-version-2" element={<ContactVersion2 />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="/case-study/:slug" element={<CaseStudyPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;