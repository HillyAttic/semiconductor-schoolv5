import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SuccessMessage = ({ formData }) => {
  const nextSteps = [
    {
      step: 1,
      title: 'Application Review',
      description: 'Our admissions team will review your application and requirements',
      timeframe: 'Within 24 hours',
      icon: 'FileText'
    },
    {
      step: 2,
      title: 'Initial Assessment',
      description: 'We\'ll assess your background and program fit',
      timeframe: '2-3 business days',
      icon: 'UserCheck'
    },
    {
      step: 3,
      title: 'Interview/Orientation',
      description: 'Schedule an interview or orientation session',
      timeframe: '3-5 business days',
      icon: 'Video'
    },
    {
      step: 4,
      title: 'Enrollment Confirmation',
      description: 'Receive confirmation and next steps',
      timeframe: 'Upon completion',
      icon: 'CheckCircle'
    }
  ];

  const contactMethods = [
    {
      method: 'Email',
      value: 'schoolsemiconductor@gmail.com',
      icon: 'Mail',
      description: 'For application updates and questions'
    },
    {
      method: 'Phone',
      value: '+91 87553 96383',
      icon: 'Phone',
      description: 'Call us for urgent matters'
    },
    {
      method: 'LinkedIn',
      value: '@semiconductor-school',
      icon: 'Linkedin',
      description: 'Connect with our team'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Success Header */}
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-success border-4 border-primary mx-auto flex items-center justify-center">
          <Icon name="CheckCircle" size={32} className="text-success-foreground" />
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-black text-primary">
            Application Received!
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thank you {formData?.fullName}, we've received your {formData?.role} application and are excited to review your details.
          </p>
        </div>
      </div>

      {/* Application Summary */}
      <div className="bg-concrete-light border-2 border-concrete p-6 space-y-4">
        <div className="flex items-center space-x-2 mb-4">
          <Icon name="Briefcase" size={20} className="text-accent" />
          <h2 className="text-xl font-bold text-primary">
            Your Application Summary
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold text-primary">Role:</span>
            <span className="ml-2 text-muted-foreground capitalize">{formData?.role}</span>
          </div>
          <div>
            <span className="font-semibold text-primary">Contact:</span>
            <span className="ml-2 text-muted-foreground">{formData?.email}</span>
          </div>
          <div>
            <span className="font-semibold text-primary">Phone:</span>
            <span className="ml-2 text-muted-foreground">{formData?.phone}</span>
          </div>
          <div>
            <span className="font-semibold text-primary">City:</span>
            <span className="ml-2 text-muted-foreground">{formData?.city}</span>
          </div>
          {formData?.role === 'student' && formData?.tracks?.length > 0 && (
            <div className="md:col-span-2">
              <span className="font-semibold text-primary">Selected Tracks:</span>
              <div className="mt-1 flex flex-wrap gap-1">
                {formData?.tracks?.map((track, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-accent text-accent-foreground"
                  >
                    {track}
                  </span>
                ))}
              </div>
            </div>
          )}
          {formData?.role === 'tutor' && formData?.expertise?.length > 0 && (
            <div className="md:col-span-2">
              <span className="font-semibold text-primary">Areas of Expertise:</span>
              <div className="mt-1 flex flex-wrap gap-1">
                {formData?.expertise?.map((area, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-accent text-accent-foreground"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Next Steps */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-2">
            What Happens Next?
          </h2>
          <p className="text-muted-foreground">
            Here's our process for reviewing your application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {nextSteps?.map((step) => (
            <div
              key={step?.step}
              className="bg-card border-2 border-concrete p-6 space-y-3"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent border-2 border-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-accent-foreground">
                    {step?.step}
                  </span>
                </div>
                <Icon name={step?.icon} size={20} className="text-accent" />
                <h3 className="font-bold text-primary">
                  {step?.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground">
                {step?.description}
              </p>

              <div className="flex items-center space-x-2 text-xs text-accent font-medium">
                <Icon name="Clock" size={12} />
                <span>{step?.timeframe}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alternative Contact Methods */}
      <div className="bg-card border-2 border-concrete p-6 space-y-4">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-primary mb-2">
            Need to Reach Us Directly?
          </h3>
          <p className="text-sm text-muted-foreground">
            We're here to help with any questions about your application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {contactMethods?.map((contact) => (
            <div
              key={contact?.method}
              className="text-center p-4 border border-concrete hover:border-accent transition-colors duration-300"
            >
              <Icon name={contact?.icon} size={24} className="text-accent mx-auto mb-2" />
              <div className="font-semibold text-primary text-sm mb-1">
                {contact?.method}
              </div>
              <div className="text-sm text-muted-foreground mb-2">
                {contact?.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {contact?.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Response Time Guarantee */}
      <div className="bg-accent/10 border-2 border-accent p-6 text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Icon name="Zap" size={20} className="text-accent" />
          <h3 className="font-bold text-primary">
            24-Hour Response Guarantee
          </h3>
        </div>
        <p className="text-sm text-muted-foreground">
          We commit to responding to every application within 24 hours.
          If you don't hear from us, please call us directly.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link to="/case-study">
          <Button
            variant="outline"
            size="lg"
            iconName="FolderOpen"
            iconPosition="left"
            className="border-2 border-concrete hover:border-accent"
          >
            View Our Programs
          </Button>
        </Link>

        <Link to="/process">
          <Button
            variant="default"
            size="lg"
            iconName="GitBranch"
            iconPosition="left"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold border-2 border-accent"
          >
            Learn Our Process
          </Button>
        </Link>
      </div>

      {/* Footer Note */}
      <div className="text-center text-xs text-muted-foreground">
        <p>
          Application submitted on {new Date()?.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })} at {new Date()?.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </p>
      </div>
    </div>
  );
};

export default SuccessMessage;
