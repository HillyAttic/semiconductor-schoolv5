import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Button from '../components/ui/Button';
import Icon from '../components/AppIcon';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>404 - Page Not Found | Semiconductor School</title>
        <meta name="description" content="The page you're looking for doesn't exist. Let's get you back on track with your semiconductor journey." />
      </Helmet>
      <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 concrete-texture opacity-20"></div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Circuit Pattern Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="w-full max-w-md">
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M20 0 L20 40 M0 20 L40 20" stroke="currentColor" strokeWidth="1" fill="none"/>
                    <circle cx="20" cy="20" r="2" fill="currentColor"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#circuit)" />
              </svg>
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-card border-4 border-concrete p-8 sm:p-12 brutalist-shadow relative z-10">
            {/* 404 Number */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <h1 className="text-8xl sm:text-9xl lg:text-[12rem] font-black text-primary/10 leading-none">404</h1>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent border-2 border-primary animate-pulse"></div>
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-4 mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-primary leading-tight">
                Circuit Break: Page Not Found
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                The page you're searching for has been disconnected from our network.
                Like a damaged trace on a chip, this link no longer conducts.
              </p>
            </div>

            {/* Semiconductor Themed Message */}
            <div className="bg-background border-2 border-concrete p-6 mb-8">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Icon name="Cpu" size={24} className="text-accent" />
                <h3 className="text-lg font-bold text-primary">Learning Path Disrupted</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Don't worry—every engineer faces broken circuits. Let's reroute you to the right pathway
                in your semiconductor education journey.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="ArrowLeft"
                iconPosition="left"
                onClick={() => window.history?.back()}
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold border-2 border-accent brutalist-shadow"
              >
                Go Back
              </Button>

              <Button
                variant="outline"
                iconName="Home"
                iconPosition="left"
                onClick={handleGoHome}
                className="border-2 border-concrete text-primary hover:border-accent hover:bg-accent hover:text-accent-foreground font-bold brutalist-shadow"
              >
                Return to Foundation
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <Link
              to="/"
              className="group p-4 bg-card border-2 border-concrete hover:border-accent transition-colors duration-300 brutalist-shadow"
            >
              <Icon name="Home" size={20} className="text-accent mx-auto mb-2" />
              <span className="text-sm font-semibold text-primary group-hover:text-accent">Home</span>
            </Link>

            <Link
              to="/services"
              className="group p-4 bg-card border-2 border-concrete hover:border-accent transition-colors duration-300 brutalist-shadow"
            >
              <Icon name="BookOpen" size={20} className="text-accent mx-auto mb-2" />
              <span className="text-sm font-semibold text-primary group-hover:text-accent">Programs</span>
            </Link>

            <Link
              to="/process"
              className="group p-4 bg-card border-2 border-concrete hover:border-accent transition-colors duration-300 brutalist-shadow"
            >
              <Icon name="Workflow" size={20} className="text-accent mx-auto mb-2" />
              <span className="text-sm font-semibold text-primary group-hover:text-accent">Process</span>
            </Link>

            <Link
              to="/contact"
              className="group p-4 bg-card border-2 border-concrete hover:border-accent transition-colors duration-300 brutalist-shadow"
            >
              <Icon name="Mail" size={20} className="text-accent mx-auto mb-2" />
              <span className="text-sm font-semibold text-primary group-hover:text-accent">Contact</span>
            </Link>
          </div>

          {/* Help Text */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Need help navigating?{' '}
              <a
                href="mailto:schoolsemiconductor@gmail.com"
                className="text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                Contact our support team
              </a>
            </p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-4 w-6 h-6 bg-accent/20 border border-accent transform rotate-45"></div>
        <div className="absolute top-1/3 right-8 w-4 h-4 bg-primary/20 border border-primary"></div>
        <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-accent/10 border-2 border-accent transform rotate-12"></div>
        <div className="absolute bottom-1/3 right-4 w-3 h-3 bg-primary/30"></div>
      </div>
    </>
  );
};

export default NotFound;