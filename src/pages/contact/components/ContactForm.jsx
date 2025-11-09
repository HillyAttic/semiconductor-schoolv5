import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactForm = ({ formData, onChange, onSubmit, error, isSubmitting }) => {
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (field, value) => {
    onChange({
      ...formData,
      [field]: value
    });
  };

  const handleArrayChange = (field, value, isArray = true) => {
    if (isArray) {
      const currentArray = formData?.[field] || [];
      if (currentArray?.includes(value)) {
        onChange({ [field]: currentArray?.filter(item => item !== value) });
      } else {
        onChange({ [field]: [...currentArray, value] });
      }
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData?.fullName?.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!formData?.email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData?.phone?.trim()) {
      errors.phone = 'Phone number is required';
    }

    if (!formData?.city?.trim()) {
      errors.city = 'City is required';
    }

    if (!formData?.timezone) {
      errors.timezone = 'Timezone is required';
    }

    if (!formData?.consent?.length || formData?.consent?.length < 2) {
      errors.consent = 'Please accept all terms and conditions';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    const errors = validateForm();

    if (Object.keys(errors)?.length === 0) {
      onSubmit(formData);
    }
  };

  const timezoneOptions = [
    { value: 'ist', label: 'IST (UTC+5:30) - India' },
    { value: 'pst', label: 'PST (UTC-8) - Pacific Time' },
    { value: 'est', label: 'EST (UTC-5) - Eastern Time' },
    { value: 'gmt', label: 'GMT (UTC+0) - Greenwich Mean Time' },
    { value: 'cet', label: 'CET (UTC+1) - Central European Time' },
    { value: 'jst', label: 'JST (UTC+9) - Japan Standard Time' }
  ];

  const consentOptions = [
    {
      id: 'contact-consent',
      label: 'I agree to be contacted regarding my application',
      value: 'contact-consent'
    },
    {
      id: 'terms-consent',
      label: 'I have read and accept the Student/Tutor Terms and Code of Conduct',
      value: 'terms-consent'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-primary">
          Contact Information
        </h3>
        <p className="text-sm text-muted-foreground">
          We'll use this information to contact you about your application.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <Input
                label="Full Name"
                type="text"
                placeholder="John Smith"
                value={formData?.fullName || ''}
                onChange={(e) => handleInputChange('fullName', e?.target?.value)}
                onFocus={() => setFocusedField('fullName')}
                onBlur={() => setFocusedField(null)}
                required
                className="pl-10"
              />
              <Icon
                name="User"
                size={16}
                className={`absolute left-3 top-9 transition-colors duration-300 ${
                  focusedField === 'fullName' ? 'text-accent' : 'text-muted-foreground'
                }`}
              />
            </div>
            {error?.fullName && (
              <div className="flex items-center space-x-2 text-error text-sm mt-1">
                <Icon name="AlertCircle" size={16} />
                <span>{error.fullName}</span>
              </div>
            )}
          </div>

          <div>
            <div className="relative">
              <Input
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                value={formData?.email || ''}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                onFocus={() => setFocusedField('email')}
                onBlur={() => setFocusedField(null)}
                required
                className="pl-10"
              />
              <Icon
                name="Mail"
                size={16}
                className={`absolute left-3 top-9 transition-colors duration-300 ${
                  focusedField === 'email' ? 'text-accent' : 'text-muted-foreground'
                }`}
              />
            </div>
            {error?.email && (
              <div className="flex items-center space-x-2 text-error text-sm mt-1">
                <Icon name="AlertCircle" size={16} />
                <span>{error.email}</span>
              </div>
            )}
          </div>

          <div>
            <div className="relative">
              <Input
                label="Phone / WhatsApp"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData?.phone || ''}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                onFocus={() => setFocusedField('phone')}
                onBlur={() => setFocusedField(null)}
                required
                className="pl-10"
              />
              <Icon
                name="Phone"
                size={16}
                className={`absolute left-3 top-9 transition-colors duration-300 ${
                  focusedField === 'phone' ? 'text-accent' : 'text-muted-foreground'
                }`}
              />
            </div>
            {error?.phone && (
              <div className="flex items-center space-x-2 text-error text-sm mt-1">
                <Icon name="AlertCircle" size={16} />
                <span>{error.phone}</span>
              </div>
            )}
          </div>

          <div>
            <div className="relative">
              <Input
                label="City"
                type="text"
                placeholder="Bangalore"
                value={formData?.city || ''}
                onChange={(e) => handleInputChange('city', e?.target?.value)}
                onFocus={() => setFocusedField('city')}
                onBlur={() => setFocusedField(null)}
                required
                className="pl-10"
              />
              <Icon
                name="MapPin"
                size={16}
                className={`absolute left-3 top-9 transition-colors duration-300 ${
                  focusedField === 'city' ? 'text-accent' : 'text-muted-foreground'
                }`}
              />
            </div>
            {error?.city && (
              <div className="flex items-center space-x-2 text-error text-sm mt-1">
                <Icon name="AlertCircle" size={16} />
                <span>{error.city}</span>
              </div>
            )}
          </div>

          <div>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-primary">
                Timezone
              </label>
              <div className="relative">
                <select
                  value={formData?.timezone || ''}
                  onChange={(e) => handleInputChange('timezone', e.target.value)}
                  onFocus={() => setFocusedField('timezone')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full p-3 pl-10 border-2 border-concrete bg-background text-foreground focus:border-accent focus:outline-none"
                >
                  <option value="">Select timezone</option>
                  {timezoneOptions?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <Icon
                  name="Clock"
                  size={16}
                  className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                    focusedField === 'timezone' ? 'text-accent' : 'text-muted-foreground'
                  }`}
                />
              </div>
            </div>
            {error?.timezone && (
              <div className="flex items-center space-x-2 text-error text-sm mt-1">
                <Icon name="AlertCircle" size={16} />
                <span>{error.timezone}</span>
              </div>
            )}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label className="block text-sm font-semibold text-primary mb-2">
            Additional Notes (Optional)
          </label>
          <div className="relative">
            <textarea
              value={formData?.notes || ''}
              onChange={(e) => handleInputChange('notes', e?.target?.value)}
              onFocus={() => setFocusedField('notes')}
              onBlur={() => setFocusedField(null)}
              placeholder="Tell us about your goals—roles you aim for, modules you prefer, or questions."
              rows={4}
              className="w-full px-4 py-3 pl-10 border-2 border-concrete bg-input text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
            />
            <Icon
              name="MessageSquare"
              size={16}
              className={`absolute left-3 top-3 transition-colors duration-300 ${
                focusedField === 'notes' ? 'text-accent' : 'text-muted-foreground'
              }`}
            />
          </div>
        </div>

        {/* Consent Checkboxes */}
        <div className="space-y-4">
          <label className="block text-sm font-semibold text-primary">
            Consent & Agreements
          </label>
          <div className="space-y-3">
            {consentOptions?.map((option) => {
              const isChecked = formData?.consent?.includes(option.value);
              return (
                <div
                  key={option.id}
                  className="flex items-start space-x-3 p-3 border-2 border-concrete bg-card"
                >
                  <button
                    type="button"
                    onClick={() => handleArrayChange('consent', option.value)}
                    className={`w-5 h-5 border-2 mt-0.5 flex-shrink-0 transition-all duration-300 ${
                      isChecked
                        ? 'border-accent bg-accent'
                        : 'border-concrete bg-transparent hover:border-accent/50'
                    }`}
                  >
                    {isChecked && (
                      <Icon
                        name="Check"
                        size={12}
                        className="text-accent-foreground m-0.5"
                      />
                    )}
                  </button>
                  <label
                    htmlFor={option.id}
                    className="text-sm text-card-foreground cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
              );
            })}
          </div>
          {error?.consent && (
            <div className="flex items-center space-x-2 text-error text-sm">
              <Icon name="AlertCircle" size={16} />
              <span>{error.consent}</span>
            </div>
          )}
        </div>

        {/* Privacy Notice */}
        <div className="p-4 bg-concrete-light border-2 border-concrete">
          <div className="flex items-start space-x-3">
            <Icon name="Shield" size={16} className="text-accent mt-0.5 flex-shrink-0" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-primary mb-1">Your privacy matters</p>
              <p>
                We'll only use your information to process your application and contact you about program updates.
                No spam, no sharing with third parties.
              </p>
            </div>
          </div>
        </div>

        {error && error.submit && (
          <div className="p-4 bg-error/10 border-2 border-error text-error">
            <div className="flex items-center space-x-2">
              <Icon name="AlertCircle" size={16} />
              <span className="text-sm font-medium">{error.submit}</span>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          iconName="Send"
          iconPosition="right"
          className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold border-2 border-accent brutalist-shadow hover:shadow-none transition-all duration-300"
        >
          {isSubmitting ? 'Submitting Application...' : `Apply as ${formData?.role === 'student' ? 'Student' : 'Tutor'}`}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
