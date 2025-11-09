import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import RoleSelector from './components/RoleSelector';
import ProgramDetails from './components/ProgramDetails';
import ContactForm from './components/ContactForm';
import ProgressIndicator from './components/ProgressIndicator';
import SuccessMessage from './components/SuccessMessage';

const Contact = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    // Role selection
    role: '',

    // Program details (Student)
    tracks: [],
    currentLevel: '',
    gradYear: '',
    prerequisites: [],
    tools: [],
    hardwareAccess: '',
    availability: '',
    cohortStart: '',
    scholarship: false,
    portfolioLinks: '',
    resume: null,

    // Program details (Tutor)
    expertise: [],
    experience: '',
    teachingHistory: '',
    toolProficiency: [],
    deliveryMode: [],
    compensation: '',
    compliance: [],

    // Contact information
    fullName: '',
    email: '',
    phone: '',
    city: '',
    timezone: '',
    notes: '',
    consent: []
  });
  const [errors, setErrors] = useState({});

  const steps = [
    {
      id: 1,
      title: 'Choose Role',
      description: 'Select Student or Tutor registration',
      estimatedTime: '1 minute',
      component: 'RoleSelector'
    },
    {
      id: 2,
      title: 'Program Details',
      description: 'Tell us about your background and interests',
      estimatedTime: '3 minutes',
      component: 'ProgramDetails'
    },
    {
      id: 3,
      title: 'Contact & Submit',
      description: 'Share your contact information',
      estimatedTime: '2 minutes',
      component: 'ContactForm'
    }
  ];

  // Save form progress to localStorage
  useEffect(() => {
    const savedData = localStorage.getItem('semiconductor-school-contact-form');
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        setFormData(prev => ({ ...prev, ...parsed }));
      } catch (error) {
        console.error('Error loading saved form data:', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('semiconductor-school-contact-form', JSON.stringify(formData));
  }, [formData]);

  const validateStep = (step) => {
    const stepErrors = {};

    switch (step) {
      case 1:
        if (!formData?.role) {
          stepErrors.role = 'Please select a role';
        }
        break;
      case 2:
        if (formData?.role === 'student') {
          if (formData?.tracks?.length === 0) stepErrors.tracks = 'Please select at least one track';
          if (!formData?.currentLevel) stepErrors.currentLevel = 'Please select your current level';
          if (!formData?.gradYear) stepErrors.gradYear = 'Please select graduation year';
          if (!formData?.availability) stepErrors.availability = 'Please select your availability';
        } else if (formData?.role === 'tutor') {
          if (formData?.expertise?.length === 0) stepErrors.expertise = 'Please select at least one area of expertise';
          if (!formData?.experience) stepErrors.experience = 'Please select your experience level';
          if (!formData?.availability) stepErrors.availability = 'Please select your availability';
        }
        break;
      case 3:
        if (!formData?.fullName?.trim()) stepErrors.fullName = 'Full name is required';
        if (!formData?.email?.trim()) {
          stepErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
          stepErrors.email = 'Please enter a valid email address';
        }
        if (!formData?.phone?.trim()) stepErrors.phone = 'Phone number is required';
        if (!formData?.city?.trim()) stepErrors.city = 'City is required';
        if (!formData?.timezone) stepErrors.timezone = 'Timezone is required';
        if (!formData?.consent?.length || formData?.consent?.length < 2) {
          stepErrors.consent = 'Please accept all terms and conditions';
        }
        break;
      default:
        break;
    }

    return stepErrors;
  };

  const handleNext = () => {
    const stepErrors = validateStep(currentStep);
    setErrors(stepErrors);
    
    if (Object.keys(stepErrors)?.length === 0) {
      if (currentStep < steps?.length) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  const handleFormSubmit = async (contactData) => {
    setIsSubmitting(true);
    setErrors({});
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Clear saved form data
      localStorage.removeItem('semiconductor-school-contact-form');
      
      setIsSubmitted(true);
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again or contact us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateFormData = (updates) => {
    setFormData(prev => ({ ...prev, ...updates }));
    setErrors({});
  };

  if (isSubmitted) {
    return (
      <>
        <Helmet>
          <title>Application Received - Semiconductor School</title>
          <meta name="description" content="Thank you for your application. Our admissions team will review your details and contact you within 24 hours." />
        </Helmet>
        <div className="min-h-screen bg-background">
          <Header />
          <main className="pt-20 pb-16 px-6 lg:px-8">
            <SuccessMessage formData={formData} />
          </main>
        </div>
      </>
    );
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <RoleSelector
            value={formData?.role}
            onChange={(role) => updateFormData({ role })}
            error={errors?.role}
          />
        );
      case 2:
        return (
          <ProgramDetails
            role={formData?.role}
            formData={formData}
            onChange={updateFormData}
            error={errors}
          />
        );
      case 3:
        return (
          <ContactForm
            formData={formData}
            onChange={updateFormData}
            onSubmit={handleFormSubmit}
            error={errors?.submit}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Register — Semiconductor School (Students & Tutors)</title>
        <meta name="description" content="Join India's first industry-aligned semiconductor school. Students enroll in chip design & fabrication cohorts; tutors mentor VLSI, RTL, Physical Design, and Cleanroom modules." />
        <meta name="keywords" content="semiconductor courses, VLSI training, RTL design, physical design, photolithography, tutor onboarding, chip design cohorts" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-20 pb-16">
          {/* Hero Section */}
          <section className="px-6 lg:px-8 py-12 border-b-2 border-concrete">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-black text-primary leading-tight">
                  Start Your
                  <span className="block text-accent">Semiconductor Journey</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Enroll as a <strong>Student</strong> or onboard as a <strong>Tutor</strong>. Transparent timelines, clear prerequisites, and focused learning paths.
                </p>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-accent" />
                  <span>24-hour response</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-accent" />
                  <span>No spam guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} className="text-accent" />
                  <span>1,000+ learners trained</span>
                </div>
              </div>
            </div>
          </section>

          {/* Form Section */}
          <section className="px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              {/* Progress Indicator */}
              <div className="mb-12">
                <ProgressIndicator
                  currentStep={currentStep}
                  totalSteps={steps?.length}
                  steps={steps}
                />
              </div>

              {/* Form Content */}
              <div className="bg-card border-2 border-concrete p-8 md:p-12 space-y-8">
                {renderStepContent()}

                {/* Navigation Buttons */}
                {currentStep < 3 && (
                  <div className="flex flex-col sm:flex-row gap-4 justify-between pt-8 border-t-2 border-concrete">
                    <Button
                      variant="outline"
                      onClick={handlePrevious}
                      disabled={currentStep === 1}
                      iconName="ArrowLeft"
                      iconPosition="left"
                      className="border-2 border-concrete hover:border-accent disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Previous Step
                    </Button>
                    
                    <Button
                      variant="default"
                      onClick={handleNext}
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold border-2 border-accent brutalist-shadow hover:shadow-none transition-all duration-300"
                    >
                      {currentStep === steps?.length ? 'Review & Submit' : 'Next Step'}
                    </Button>
                  </div>
                )}
              </div>

              {/* Help Section */}
              <div className="mt-12 text-center space-y-4">
                <h3 className="text-lg font-bold text-primary">
                  Need Help or Have Questions?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our admissions team is here to help you through the process
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:schoolsemiconductor@gmail.com"
                    className="inline-flex items-center space-x-2 text-sm text-accent hover:text-accent/80 transition-colors duration-300"
                  >
                    <Icon name="Mail" size={16} />
                    <span>schoolsemiconductor@gmail.com</span>
                  </a>

                  <a
                    href="tel:+918755396383"
                    className="inline-flex items-center space-x-2 text-sm text-accent hover:text-accent/80 transition-colors duration-300"
                  >
                    <Icon name="Phone" size={16} />
                    <span>+91 87553 96383</span>
                  </a>
                </div>

                <p className="text-xs text-muted-foreground mt-2">
                  Response within 24 hours. No admissions spam.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-background border-t-2 border-concrete py-8 md:py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-primary border-2 border-primary">
                    <div className="w-full h-full bg-accent transform translate-x-1 translate-y-1"></div>
                  </div>
                  <span className="text-xl font-black text-primary">Semiconductor School</span>
                </div>
                <p className="text-muted-foreground mb-4 text-sm md:text-base max-w-md">
                  Building India's chip talent pipeline through industry-aligned education and mentorship.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-10 h-10 border-2 border-concrete flex items-center justify-center hover:border-accent hover:bg-accent hover:text-white transition-colors duration-300 group"
                  >
                    <span className="sr-only">Behance</span>
                    <svg className="w-4 h-4 fill-current group-hover:text-white" viewBox="0 0 24 24">
                      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.498 1.19.906.26 1.576.72 2.022 1.37.448.66.673 1.5.673 2.52 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.76-.62.16-1.29.24-2 .24H0V4.51h6.938v-.007zM3.495 8.598h2.637c.408 0 .744-.07 1.024-.203.28-.134.49-.31.618-.53.13-.222.18-.48.18-.765 0-.56-.17-.97-.523-1.24-.35-.27-.86-.403-1.533-.403H3.495v3.14zm0 5.05h3.042c.476 0 .84-.06 1.09-.18.25-.12.43-.29.54-.51s.17-.48.17-.78c0-.38-.073-.69-.22-.94-.15-.25-.38-.44-.69-.56-.31-.12-.73-.18-1.26-.18H3.49v3.15h.005zm9.156-2.592h5.09c-.03-.4-.14-.74-.32-1.02-.18-.28-.43-.49-.73-.63-.3-.14-.65-.21-1.05-.21-.68 0-1.19.23-1.54.68-.35.45-.5 1.08-.44 1.89v.31zm7.125 2.25c.38 0 .668-.04.87-.12.2-.08.36-.19.47-.33.11-.14.18-.31.21-.51h2.4c-.12.64-.35 1.18-.68 1.61-.33.43-.77.75-1.32.97-.55.22-1.18.33-1.89.33-1.03 0-1.87-.32-2.52-.97-.65-.65-.975-1.54-.975-2.67 0-1.13.32-2.02.97-2.67.65-.65 1.49-.97 2.52-.97 1.03 0 1.87.32 2.52.97.65.65.97 1.54.97 2.67 0 .13-.005.26-.015.39h-7.125c.04.81.27 1.42.68 1.83.41.41.93.62 1.56.62zm1.95-7.39h-3.47v-1.39h3.47v1.39z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border-2 border-concrete flex items-center justify-center hover:border-accent hover:bg-accent hover:text-white transition-colors duration-300 group"
                  >
                    <span className="sr-only">Dribbble</span>
                    <svg className="w-4 h-4 fill-current group-hover:text-white" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm9.568 7.375c.53 1.013.832 2.158.832 3.375 0 .139-.006.278-.018.416-.935-.204-2.072-.347-3.367-.347-1.554 0-2.98.209-4.178.582-.524-1.278-1.097-2.482-1.714-3.611 2.046-.824 3.877-1.957 5.345-3.415z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border-2 border-concrete flex items-center justify-center hover:border-accent hover:bg-accent hover:text-white transition-colors duration-300 group"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-4 h-4 fill-current group-hover:text-white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border-2 border-concrete flex items-center justify-center hover:border-accent hover:bg-accent hover:text-white transition-colors duration-300 group"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="w-4 h-4 fill-current group-hover:text-white" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-primary mb-4">Programs</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/services" className="hover:text-accent transition-colors">VLSI Design</a></li>
                  <li><a href="/services" className="hover:text-accent transition-colors">Physical Design</a></li>
                  <li><a href="/services" className="hover:text-accent transition-colors">Verification</a></li>
                  <li><a href="/services" className="hover:text-accent transition-colors">Cleanroom Ops</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="font-bold text-primary mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="/about" className="hover:text-accent transition-colors">About</a></li>
                  <li><a href="/case-study" className="hover:text-accent transition-colors">Case Studies</a></li>
                  <li><a href="/process" className="hover:text-accent transition-colors">Process</a></li>
                  <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t-2 border-concrete-light mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} Semiconductor School. Building India's chip talent pipeline.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Student/Tutor Terms
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Code of Conduct
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Contact;