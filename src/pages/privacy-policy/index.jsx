import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Semiconductor School</title>
        <meta
          name="description"
          content="Privacy Policy for Semiconductor School. Learn how we collect, use, and protect your personal information when you visit our website or submit your details through our forms."
        />
        <meta name="keywords" content="privacy policy, data protection, semiconductor school, personal information, data security" />
        <meta property="og:title" content="Privacy Policy | Semiconductor School" />
        <meta property="og:description" content="Learn how Semiconductor School protects and manages your personal information with transparent privacy practices." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/privacy-policy" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-20 pb-16">
          {/* Hero Section */}
          <section className="px-6 lg:px-8 py-12 border-b-2 border-concrete">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-black text-primary leading-tight">
                  Privacy Policy
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
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Semiconductor School values your privacy and is committed to protecting your personal information.
                </p>
              </div>
            </div>
          </section>

          {/* Content Section */}
          <section className="px-6 lg:px-8 py-12">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card border-2 border-concrete p-8 md:p-12 space-y-12">

                {/* Introduction */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Info" size={16} className="text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary">1. Introduction</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Semiconductor School ("we," "our," or "us") values your privacy and is committed to protecting your personal information.
                      This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit our website or submit your details through our forms.
                    </p>
                    <p>
                      By using this website, you agree to the practices described in this Privacy Policy.
                    </p>
                  </div>
                </div>

                {/* Information We Collect */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Database" size={16} className="text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary">2. Information We Collect</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We collect personal information that you voluntarily provide through registration or contact forms. This may include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Full Name</li>
                      <li>Email Address</li>
                      <li>Mobile Number</li>
                      <li>CV/Resume Upload (for tutor or student applications)</li>
                    </ul>
                    <p>
                      We may also collect non-personal information automatically, such as browser type, IP address, and usage data,
                      to improve site performance and user experience.
                    </p>
                  </div>
                </div>

                {/* How We Use Your Information */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Target" size={16} className="text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary">3. How We Use Your Information</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>Your information is used to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Process student and tutor registrations</li>
                      <li>Communicate with you regarding your application or inquiry</li>
                      <li>Provide updates about programs, opportunities, or relevant courses</li>
                      <li>Improve our website, user experience, and communication</li>
                    </ul>
                    <p>
                      We do not sell, rent, or share your personal data with third parties for marketing purposes.
                    </p>
                  </div>
                </div>

                {/* Data Storage and Security */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Shield" size={16} className="text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary">4. Data Storage and Security</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We use secure servers and encrypted communication to store and process your data.
                      Reasonable measures are taken to protect your information from unauthorized access, alteration, or disclosure.
                    </p>
                    <div className="bg-warning/10 border-2 border-warning p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="AlertTriangle" size={16} className="text-warning" />
                        <span className="font-semibold text-warning">Important Notice</span>
                      </div>
                      <p className="text-sm">
                        However, please note that no online platform is completely secure. By using our website, you acknowledge this inherent risk.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Cookies and Analytics */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Cookie" size={16} className="text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary">5. Cookies and Analytics</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Our website may use cookies or analytics tools (like Google Analytics) to understand visitor behavior and improve the experience.
                    </p>
                    <p>
                      Cookies do not store personal data — you can disable them through your browser settings if you prefer.
                    </p>
                  </div>
                </div>

                {/* Third-Party Services */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Users" size={16} className="text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary">6. Third-Party Services</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      If we use third-party services (e.g., email delivery, form handling, or hosting),
                      they may have access to limited personal data solely for performing specific functions on our behalf,
                      under strict confidentiality agreements.
                    </p>
                  </div>
                </div>

                {/* Your Rights */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="UserCheck" size={16} className="text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary">7. Your Rights</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>You have the right to:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Request access to your personal data</li>
                      <li>Request correction or deletion of your data</li>
                      <li>Withdraw consent to data processing</li>
                    </ul>
                    <p>
                      To exercise these rights, please contact us at <a href="mailto:schoolsemiconductor@gmail.com" className="text-accent hover:text-accent/80 font-semibold">schoolsemiconductor@gmail.com</a>.
                    </p>
                  </div>
                </div>

                {/* Data Retention */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Clock" size={16} className="text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary">8. Data Retention</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or comply with legal obligations.
                    </p>
                  </div>
                </div>

                {/* Updates to This Policy */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="FileText" size={16} className="text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary">9. Updates to This Policy</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      We may update this Privacy Policy from time to time to reflect new regulations or operational changes.
                      Updates will be posted on this page with the revised date.
                    </p>
                  </div>
                </div>

                {/* Contact Us */}
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-accent border-2 border-accent flex items-center justify-center">
                      <Icon name="Mail" size={16} className="text-white" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-primary">10. Contact Us</h2>
                  </div>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
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
              <div className="mt-12 text-center space-y-6">
                <div className="bg-primary p-8 border-4 border-primary brutalist-shadow">
                  <h3 className="text-2xl lg:text-3xl font-black text-white mb-4">
                    Questions About Your Privacy?
                  </h3>
                  <p className="text-white/90 mb-6">
                    We're committed to transparency and protecting your data. Reach out if you need clarification on any aspect of our privacy practices.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="mailto:schoolsemiconductor@gmail.com"
                      className="inline-flex items-center justify-center px-6 py-3 bg-accent hover:bg-accent/90 text-white font-bold border-2 border-accent transition-colors duration-300"
                    >
                      <Icon name="Mail" size={16} className="mr-2" />
                      Contact Us
                    </a>
                    <Link
                      to="/"
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-white/10 text-white font-bold border-2 border-white transition-colors duration-300"
                    >
                      <Icon name="ArrowLeft" size={16} className="mr-2" />
                      Back to Home
                    </Link>
                  </div>
                </div>
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
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-primary mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link to="/homepage" className="hover:text-accent transition-colors">Home</Link></li>
                  <li><Link to="/case-study" className="hover:text-accent transition-colors">Case Studies</Link></li>
                  <li><Link to="/services" className="hover:text-accent transition-colors">Courses</Link></li>
                  <li><Link to="/process" className="hover:text-accent transition-colors">Learning Process</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-bold text-primary mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms-conditions" className="hover:text-accent transition-colors">Terms & Conditions</Link></li>
                  <li><a href="mailto:schoolsemiconductor@gmail.com" className="hover:text-accent transition-colors">Contact</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t-2 border-concrete-light mt-8 pt-8 text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date()?.getFullYear()} Semiconductor School. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default PrivacyPolicy;
