import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Button from './ui/Button';
import Input from './ui/Input';
import { X } from 'lucide-react';

const BriefFormPopup = ({ isOpen, onClose }) => {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    role: '',
    fullName: '',
    email: '',
    track: '',
    availability: '',
    goals: '',
    resume: null
  });
  const [resumeFile, setResumeFile] = useState(null);

  // Close popup when pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e?.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e?.preventDefault();

    // Validation
    if (!formData?.role) {
      alert('Please select whether you are applying as a Student or Tutor');
      return;
    }
    if (!formData?.fullName?.trim()) {
      alert('Please enter your full name');
      return;
    }
    if (!formData?.email?.trim()) {
      alert('Please enter your email address');
      return;
    }
    if (!formData?.track) {
      alert('Please select a program track');
      return;
    }
    if (!formData?.availability) {
      alert('Please select your availability');
      return;
    }
    if (!formData?.resume) {
      alert('Please upload your resume (PDF only)');
      return;
    }

    console.log('Form submitted:', formData);
    alert('Application submitted! We will review your details and get back to you within 24 hours.');

    // Handle form submission here
    onClose();

    // Reset form
    setFormData({
      role: '',
      fullName: '',
      email: '',
      track: '',
      availability: '',
      goals: '',
      resume: null
    });
    setResumeFile(null);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  const overlayVariants = shouldReduceMotion ? {} : {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = shouldReduceMotion ? {} : {
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8, 
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          
          {/* Modal */}
          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] bg-background brutalist-border brutalist-shadow overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b-2 border-concrete bg-background">
              <h2 className="text-3xl font-black text-primary">JOIN SEMICONDUCTOR SCHOOL</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="w-10 h-10 p-0 border-2 border-concrete hover:border-accent hover:bg-accent hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Form Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-120px)]">
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Role Selection */}
                <div>
                  <label className="block text-sm font-black text-primary mb-2">
                    APPLY AS *
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, role: 'student'})}
                      className={`p-3 border-2 transition-all duration-300 ${
                        formData?.role === 'student'
                          ? 'border-accent bg-accent text-accent-foreground'
                          : 'border-concrete bg-card text-card-foreground hover:border-accent/50'
                      }`}
                    >
                      <div className="text-sm font-semibold">Student</div>
                      <div className="text-xs opacity-80">Enroll in programs</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({...formData, role: 'tutor'})}
                      className={`p-3 border-2 transition-all duration-300 ${
                        formData?.role === 'tutor'
                          ? 'border-accent bg-accent text-accent-foreground'
                          : 'border-concrete bg-card text-card-foreground hover:border-accent/50'
                      }`}
                    >
                      <div className="text-sm font-semibold">Tutor</div>
                      <div className="text-xs opacity-80">Teach & mentor</div>
                    </button>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-black text-primary mb-2">
                      FULL NAME *
                    </label>
                    <Input
                      type="text"
                      name="fullName"
                      value={formData?.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full brutalist-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-primary mb-2">
                      EMAIL *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData?.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full brutalist-border"
                    />
                  </div>
                </div>

                {/* Program Track */}
                <div>
                  <label className="block text-sm font-black text-primary mb-2">
                    PROGRAM TRACK *
                  </label>
                  <select
                    name="track"
                    value={formData?.track}
                    onChange={handleChange}
                    required
                    className="w-full p-3 brutalist-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select program track</option>
                    <option value="digital-vlsi">Digital VLSI (RTL/Verilog)</option>
                    <option value="physical-design">Physical Design (PnR)</option>
                    <option value="verification">Verification (UVM)</option>
                    <option value="fpga">FPGA Prototyping</option>
                    <option value="embedded">Embedded Systems</option>
                    <option value="analog-ic">Analog IC Design</option>
                    <option value="wafer-fab">Wafer Fab & Photolithography</option>
                    <option value="dft">DFT & Testing</option>
                    <option value="packaging">Packaging & Reliability</option>
                  </select>
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-black text-primary mb-2">
                    AVAILABILITY *
                  </label>
                  <select
                    name="availability"
                    value={formData?.availability}
                    onChange={handleChange}
                    required
                    className="w-full p-3 brutalist-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select availability</option>
                    <option value="weekday-evening">Weekday Evening</option>
                    <option value="weekend">Weekend</option>
                    <option value="intensive-bootcamp">Intensive Bootcamp</option>
                  </select>
                </div>

                {/* Goals/Notes */}
                <div>
                  <label className="block text-sm font-black text-primary mb-2">
                    GOALS & INTERESTS (Optional)
                  </label>
                  <textarea
                    name="goals"
                    value={formData?.goals}
                    onChange={handleChange}
                    placeholder="Tell us about your semiconductor career goals, specific interests, or any questions you have..."
                    rows={4}
                    className="w-full p-3 brutalist-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-black text-primary mb-2">
                    UPLOAD RESUME (PDF) *
                  </label>
                  <div className="border-2 border-dashed border-concrete p-6 text-center hover:border-accent/50 transition-colors duration-300">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => {
                        const file = e?.target?.files?.[0];
                        if (file && file.type === 'application/pdf') {
                          setResumeFile(file);
                          setFormData({...formData, resume: file});
                        } else {
                          alert('Please select a PDF file only');
                          e.target.value = '';
                        }
                      }}
                      className="hidden"
                      id="resume-upload-popup"
                      required
                    />
                    <label htmlFor="resume-upload-popup" className="cursor-pointer">
                      <svg className="w-8 h-8 text-muted-foreground mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-sm text-muted-foreground mb-1">
                        {resumeFile ? resumeFile.name : 'Click to upload or drag and drop'}
                      </p>
                      <p className="text-xs text-muted-foreground">PDF files only (max 5MB)</p>
                    </label>
                  </div>
                </div>

                {/* Info Note */}
                <div className="p-3 bg-concrete-light border-2 border-concrete">
                  <div className="flex items-start space-x-2">
                    <svg className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div className="text-xs text-muted-foreground">
                      <p className="font-medium text-primary mb-1">Quick Application</p>
                      <p>We'll review your application and get back to you within 24 hours. For detailed applications, visit our full registration page.</p>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent hover:bg-accent text-white font-black py-4 brutalist-border brutalist-shadow uppercase tracking-wider transition-all duration-300"
                  >
                    APPLY NOW
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BriefFormPopup;