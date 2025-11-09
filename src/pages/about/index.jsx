import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import TeamSection from './components/TeamSection';
import FoundingStorySection from './components/FoundingStorySection';
import ValuesSection from './components/ValuesSection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Semiconductor School – From Sand to Silicon, Made Understandable</title>
        <meta
          name="description"
          content="Discover Semiconductor School's philosophy of visual-first, job-aligned learning. Meet the mentors, makers, and researchers helping learners master the wafer-to-chip journey."
        />
        <meta name="keywords" content="semiconductor education, VLSI training, lithography labs, wafer to chip, HDL learning, TCAD, fabrication basics, semiconductor school team" />
        <meta property="og:title" content="About Semiconductor School — Making the Wafer-to-Chip Journey Visible" />
        <meta property="og:description" content="We turn complex semiconductor science into clear, job-ready skills through simulations, mentors, and outcome-driven projects." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <HeroSection />
          <PhilosophySection />
          <FoundingStorySection />
          <TeamSection />
          <ValuesSection />
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-12 border-t-4 border-accent">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-accent border-2 border-white">
                    <div className="w-full h-full bg-white transform translate-x-1 translate-y-1"></div>
                  </div>
                  <span className="text-xl font-black tracking-tight">Semiconductor School</span>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Making the wafer-to-chip journey visible since 2023.
                </p>
              </div>

              <div>
                <h4 className="font-black text-lg mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="/homepage" className="block text-white/80 hover:text-accent transition-colors">Home</a>
                  <a href="/case-study" className="block text-white/80 hover:text-accent transition-colors">Case Studies</a>
                  <a href="/services" className="block text-white/80 hover:text-accent transition-colors">Courses</a>
                  <a href="/process" className="block text-white/80 hover:text-accent transition-colors">Learning Process</a>
                </div>
              </div>

              <div>
                <h4 className="font-black text-lg mb-4">Ready to Begin?</h4>
                <div className="space-y-2">
                  <a href="/services" className="block text-accent font-semibold hover:text-white transition-colors">Start Your Cohort</a>
                  <a href="/contact" className="block text-accent font-semibold hover:text-white transition-colors">Schedule a Call</a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 pt-8 text-center">
              <p className="text-white/60">
                © {new Date()?.getFullYear()} Semiconductor School. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;