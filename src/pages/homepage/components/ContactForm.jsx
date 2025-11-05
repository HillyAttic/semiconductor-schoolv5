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
    <section className="py-20 bg-primary">
      <div className="brutalist-container">
        <div className="brutalist-grid">
          {/* Header - 12 columns */}
          <motion.div 
            className="col-span-12 p-8 text-center"
            {...motionProps}
          >
            <h2 className="text-5xl lg:text-7xl brutalist-heading text-white mb-6">
              READY TO START?
            </h2>
            <p className="text-xl brutalist-text text-white max-w-2xl mx-auto mb-12">
              Stop blending in. Start demanding attention. Get results.
            </p>
          </motion.div>

          {/* Contact Info - 6 columns */}
          <motion.div 
            className="col-span-6 p-8"
            {...motionProps}
          >
            <div className="brutalist-border brutalist-shadow p-8 bg-background">
              <h3 className="text-2xl font-black text-primary mb-6">
                GET IN TOUCH
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-black text-accent mb-1">EMAIL</div>
                  <div className="brutalist-text text-foreground">hello@brandforge.com</div>
                </div>
                <div>
                  <div className="text-sm font-black text-accent mb-1">PHONE</div>
                  <div className="brutalist-text text-foreground">+1 (555) 123-4567</div>
                </div>
                <div>
                  <div className="text-sm font-black text-accent mb-1">LOCATION</div>
                  <div className="brutalist-text text-foreground">New York, NY</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA - 6 columns */}
          <motion.div 
            className="col-span-6 p-8 flex items-center"
            {...motionProps}
          >
            <div className="w-full text-center">
              <Button 
                variant="default" 
                size="lg"
                className="bg-accent hover:bg-accent text-white font-black px-12 py-6 brutalist-border brutalist-shadow uppercase tracking-wider text-xl w-full"
              >
                START YOUR PROJECT
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;