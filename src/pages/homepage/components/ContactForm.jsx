import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Button from '../../../components/ui/Button';

const ContactForm = () => {
  const shouldReduceMotion = useReducedMotion();

  const motionProps = shouldReduceMotion 
    ? { initial: false, animate: false, transition: { duration: 0 } }
    : { 
        initial: { opacity: 0 }, 
        whileInView: { opacity: 1 }, 
        viewport: { once: true },
        transition: { duration: 0.3 } 
      };

  return (
    <section className="py-12 md:py-20 bg-primary">
      <div className="brutalist-container">
        <div className="brutalist-grid">
          {/* Header - 12 columns */}
          <motion.div 
            className="col-span-12 p-4 md:p-8 text-center"
            {...motionProps}
          >
            <h2 className="text-3xl md:text-5xl lg:text-7xl brutalist-heading text-white mb-4 md:mb-6">
              READY TO ENROLL?
            </h2>
            <p className="text-base md:text-xl brutalist-text text-white max-w-2xl mx-auto mb-8 md:mb-12">
              Join India's first industry-aligned semiconductor school. Start your chip design journey today.
            </p>
          </motion.div>

          {/* Contact Info - Responsive columns */}
          <motion.div 
            className="col-span-12 md:col-span-6 p-4 md:p-8"
            {...motionProps}
          >
            <div className="brutalist-border brutalist-shadow p-6 md:p-8 bg-background">
              <h3 className="text-xl md:text-2xl font-black text-primary mb-4 md:mb-6">
                GET IN TOUCH
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-black text-accent mb-1">EMAIL</div>
                  <div className="brutalist-text text-foreground">schoolsemiconductor@gmail.com</div>
                </div>
                <div>
                  <div className="text-sm font-black text-accent mb-1">PHONE</div>
                  <div className="brutalist-text text-foreground">+91 87553 96383</div>
                </div>
                <div>
                  <div className="text-sm font-black text-accent mb-1">LOCATION</div>
                  <div className="brutalist-text text-foreground">Delhi-NCR, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA - Responsive columns */}
          <motion.div 
            className="col-span-12 md:col-span-6 p-4 md:p-8 flex items-center"
            {...motionProps}
          >
            <div className="w-full text-center">
              <Button
                variant="default"
                size="lg"
                className="bg-accent hover:bg-accent text-white font-black px-6 py-4 md:px-12 md:py-6 brutalist-border brutalist-shadow uppercase tracking-wider text-base md:text-xl w-full"
              >
                ENROLL NOW
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;