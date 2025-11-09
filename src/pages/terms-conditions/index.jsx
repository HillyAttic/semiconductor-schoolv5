import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Semiconductor School</title>
        <meta
          name="description"
          content="Terms and Conditions for Semiconductor School. Understand the terms, conditions, and policies governing the use of our website and services."
        />
        <meta name="keywords" content="terms and conditions, legal, semiconductor school, user agreement, website terms" />
        <meta property="og:title" content="Terms and Conditions | Semiconductor School" />
        <meta property="og:description" content="Review the terms and conditions that govern your use of Semiconductor School's website and educational services." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/terms-conditions" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16 sm:pt-20 pb-12 sm:pb-16">
          {/* Hero Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 border-b-2 border-concrete">
            <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-primary leading-tight">
                  Terms and Conditions
                </h1>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={14} className="sm:w-4 sm:h-4 text-accent" />
                    <span>Effective Date: October 23, 2025</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-concrete"></div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Globe" size={14} className="sm:w-4 sm:h-4 text-accent" />
                    <span>www.semiconductorschool.com</span>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
                  Please read these terms and conditions carefully before using our website or services.
                </p>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border-2 border-concrete p-6 sm:p-8 lg:p-12 space-y-8 sm:space-y-12">

                {/* Introduction */}
                <div>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Info" size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-primary">1. Introduction</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-sm sm:text-base">
                      Welcome to Semiconductor School ("we," "our," or "us"). By accessing or using this website, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our website or services.
                    </p>
                  </div>
                </div>

                {/* Use of the Website */}
                <div>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Monitor" size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-primary">2. Use of the Website</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-sm sm:text-base">
                      This website is designed to provide information and registration opportunities for students and tutors interested in semiconductor education.
                    </p>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-4">
                      <li className="text-sm sm:text-base">You agree to use the website only for lawful purposes and in a way that does not infringe upon the rights of others.</li>
                      <li className="text-sm sm:text-base">You must not attempt to disrupt or harm the website, its servers, or its data security in any manner.</li>
                    </ul>
                  </div>
                </div>

                {/* Account Registration and Submissions */}
                <div>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="UserPlus" size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-primary">3. Account Registration and Submissions</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-sm sm:text-base">When submitting forms (such as student or tutor registrations), you agree that:</p>
                    <ul className="list-disc list-inside space-y-1.5 sm:space-y-2 ml-4">
                      <li className="text-sm sm:text-base">All information you provide is true, accurate, and complete.</li>
                      <li className="text-sm sm:text-base">You are responsible for ensuring your contact details remain up-to-date.</li>
                      <li className="text-sm sm:text-base">We may contact you using the information you provide for updates, verification, or communication regarding your application.</li>
                      <li className="text-sm sm:text-base">Uploaded documents (e.g., CVs) must not contain any harmful, illegal, or copyrighted material without permission.</li>
                    </ul>
                  </div>
                </div>

                {/* Intellectual Property Rights */}
                <div>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Copyright" size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-primary">4. Intellectual Property Rights</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-sm sm:text-base">
                      All content on this website — including text, graphics, logos, illustrations, and layouts — is the intellectual property of Semiconductor School unless otherwise stated.
                    </p>
                    <p className="text-sm sm:text-base">
                      You may not copy, reproduce, distribute, or modify any part of this website without prior written permission.
                    </p>
                  </div>
                </div>

                {/* Lead Forms and Data Handling */}
                <div>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Database" size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-primary">5. Lead Forms and Data Handling</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-sm sm:text-base">
                      When you submit a form on this website, your information may be stored securely and used for internal review, communication, and updates related to Semiconductor School activities.
                    </p>
                    <div className="bg-accent/10 border-2 border-accent p-3 sm:p-4">
                      <p className="text-xs sm:text-sm text-primary font-semibold">
                        Your data will be handled as per our <Link to="/privacy-policy" className="text-accent hover:text-accent/80 underline">Privacy Policy</Link>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Third-Party Links */}
                <div>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="ExternalLink" size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-primary">6. Third-Party Links</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-sm sm:text-base">
                      Our website may include links to external sites for reference or resources. We are not responsible for the content, privacy policies, or practices of these third-party websites.
                    </p>
                  </div>
                </div>

                {/* Limitation of Liability */}
                <div>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Shield" size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-primary">7. Limitation of Liability</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-sm sm:text-base">
                      While we strive to keep all information accurate and up to date, Semiconductor School does not guarantee that all content is free of errors or interruptions.
                    </p>
                    <p className="text-sm sm:text-base">
                      We are not liable for any losses or damages resulting from the use or inability to use the website or its materials.
                    </p>
                  </div>
                </div>

                {/* Disclaimer */}
                <div>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="AlertTriangle" size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-primary">8. Disclaimer</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-sm sm:text-base">
                      The materials and illustrations on this site are for educational and informational purposes only.
                    </p>
                    <p className="text-sm sm:text-base">
                      We do not promise any employment, certification, or academic credit through registration unless explicitly stated.
                    </p>
                  </div>
                </div>

                {/* Changes to the Terms */}
                <div>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="FileText" size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-primary">9. Changes to the Terms</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-sm sm:text-base">
                      We may update or modify these Terms and Conditions at any time. All changes will be effective immediately upon posting on this page. You are encouraged to review this page periodically to stay informed.
                    </p>
                  </div>
                </div>

                {/* Governing Law */}
                <div>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Scale" size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-primary">10. Governing Law</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-sm sm:text-base">
                      These Terms shall be governed and interpreted in accordance with the laws of India. Any disputes arising from the use of this website will be subject to the jurisdiction of courts located in New Delhi, India.
                    </p>
                  </div>
                </div>

                {/* Contact Us */}
                <div>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Mail" size={12} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-primary">11. Contact Us</h2>
                  </div>
                  <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed">
                    <p className="text-sm sm:text-base">
                      If you have any questions about these Terms and Conditions, please contact us at:
                    </p>
                    <div className="bg-background border-2 border-concrete p-4 sm:p-6 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-1 sm:space-y-0">
                        <div className="flex items-center space-x-2">
                          <Icon name="Mail" size={14} className="sm:w-4 sm:h-4 text-accent" />
                          <span className="font-semibold text-sm sm:text-base">Email:</span>
                        </div>
                        <a href="mailto:schoolsemiconductor@gmail.com" className="text-accent hover:text-accent/80 text-sm sm:text-base sm:ml-2">
                          schoolsemiconductor@gmail.com
                        </a>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 space-y-1 sm:space-y-0">
                        <div className="flex items-center space-x-2">
                          <Icon name="Globe" size={14} className="sm:w-4 sm:h-4 text-accent" />
                          <span className="font-semibold text-sm sm:text-base">Website:</span>
                        </div>
                        <span className="text-primary text-sm sm:text-base sm:ml-2">www.semiconductorschool.com</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Action Section */}
              <div className="mt-8 sm:mt-12 text-center space-y-4 sm:space-y-6">
                <div className="bg-primary p-6 sm:p-8 border-2 lg:border-4 border-primary brutalist-shadow">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-3 sm:mb-4">
                    Questions About Our Terms?
                  </h3>
                  <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base px-4">
                    We're here to help clarify any questions you may have about our terms and conditions.
                    Contact us for support or clarification.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <a
                      href="mailto:schoolsemiconductor@gmail.com"
                      className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-white font-bold border-2 border-accent transition-colors duration-300 w-full sm:w-auto"
                    >
                      <Icon name="Mail" size={16} className="mr-2" />
                      Contact Us
                    </a>
                    <Link
                      to="/privacy-policy"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-white/10 text-white font-bold border-2 border-white transition-colors duration-300 w-full sm:w-auto"
                    >
                      <Icon name="FileText" size={16} className="mr-2" />
                      Privacy Policy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-background border-t-2 border-concrete py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Brand */}
              <div className="sm:col-span-2 lg:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary border-2 border-primary">
                    <div className="w-full h-full bg-accent transform translate-x-1 translate-y-1"></div>
                  </div>
                  <span className="text-lg sm:text-xl font-black text-primary">Semiconductor School</span>
                </div>
                <p className="text-muted-foreground mb-4 text-xs sm:text-sm lg:text-base max-w-md">
                  Building India's chip talent pipeline through industry-aligned education and mentorship.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-primary mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li><Link to="/homepage" className="hover:text-accent transition-colors">Home</Link></li>
                  <li><Link to="/case-study" className="hover:text-accent transition-colors">Case Studies</Link></li>
                  <li><Link to="/services" className="hover:text-accent transition-colors">Courses</Link></li>
                  <li><Link to="/process" className="hover:text-accent transition-colors">Learning Process</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-bold text-primary mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
                  <li><a href="mailto:schoolsemiconductor@gmail.com" className="hover:text-accent transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t-2 border-concrete-light mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
              <p className="text-xs sm:text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} Semiconductor School. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TermsConditions;
