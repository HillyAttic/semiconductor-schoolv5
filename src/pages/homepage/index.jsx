import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import WorkShowcase from './components/WorkShowcase';
import CapabilitiesGrid from './components/CapabilitiesGrid';
import ProcessNavigation from './components/ProcessNavigation';
import AboutSection from './components/AboutSection';
import ClientLogos from './components/ClientLogos';
import ContactForm from './components/ContactForm';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <WorkShowcase />
        <CapabilitiesGrid />
        <ProcessNavigation />
        <AboutSection />
        <ClientLogos />
        <ContactForm />
      </main>
      {/* Footer */}
      <footer className="bg-background border-t-2 border-concrete py-12">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary border-2 border-primary">
                  <div className="w-full h-full bg-accent transform translate-x-1 translate-y-1"></div>
                </div>
                <span className="text-xl font-black text-primary">Brand Forge</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Making brands impossible to ignore through brutalist design principles and strategic thinking.
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
              <h4 className="font-bold text-primary mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/services" className="hover:text-accent transition-colors">Brand Identity</a></li>
                <li><a href="/services" className="hover:text-accent transition-colors">Digital Experience</a></li>
                <li><a href="/services" className="hover:text-accent transition-colors">Brand Strategy</a></li>
                <li><a href="/services" className="hover:text-accent transition-colors">Motion Design</a></li>
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
              © {new Date()?.getFullYear()} Brand Forge. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;