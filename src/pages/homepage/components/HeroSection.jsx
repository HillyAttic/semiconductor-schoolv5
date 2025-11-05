import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/ui/Button';
import BriefFormPopup from '../../../components/BriefFormPopup';

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [counters, setCounters] = useState({
    brands: 0,
    success: 0,
    growth: 0
  });

  // Animated counter effect
  useEffect(() => {
    if (shouldReduceMotion) {
      setCounters({ brands: 150, success: 98, growth: 5 });
      return;
    }

    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          brands: Math.floor(150 * progress),
          success: Math.floor(98 * progress),
          growth: Math.floor(5 * progress)
        });
        
        if (step >= steps) {
          clearInterval(timer);
          setCounters({ brands: 150, success: 98, growth: 5 });
        }
      }, interval);
    };

    const timeout = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timeout);
  }, [shouldReduceMotion]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const metricVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const visualVariants = {
    hidden: { 
      opacity: 0, 
      x: 50,
      rotate: -5
    },
    visible: { 
      opacity: 1, 
      x: 0,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const motionProps = shouldReduceMotion 
    ? { initial: false, animate: false }
    : { 
        initial: "hidden", 
        animate: "visible",
        variants: containerVariants
      };

  const openPopup = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    console.log('Opening popup...'); // Debug log
    setIsPopupOpen(true);
  };
  
  const closePopup = () => {
    console.log('Closing popup...'); // Debug log
    setIsPopupOpen(false);
  };

  const handleViewWork = () => {
    navigate('/case-study');
  };

  return (
    <section className="min-h-screen bg-background">
      <div className="brutalist-container h-screen">
        <div className="brutalist-grid h-full items-center">
          {/* Content - 8 columns */}
          <motion.div 
            className="col-span-8 p-8"
            {...motionProps}
          >
            {/* H1 - Max 8 words */}
            <motion.h1 
              className="text-6xl lg:text-8xl brutalist-heading text-primary mb-4"
              variants={shouldReduceMotion ? {} : itemVariants}
            >
              MAKE BRANDS IMPOSSIBLE TO IGNORE
            </motion.h1>
            
            {/* Subline - Max 12 words */}
            <motion.p 
              className="text-2xl lg:text-3xl brutalist-text text-foreground mb-12"
              variants={shouldReduceMotion ? {} : itemVariants}
            >
              Strategic creativity that cuts through noise and drives results.
            </motion.p>

            {/* CTA Buttons - Removed motion wrapper around buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-16"
              variants={shouldReduceMotion ? {} : itemVariants}
              style={{ pointerEvents: 'auto' }} // Ensure pointer events are enabled
            >
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                style={{ pointerEvents: 'auto' }} // Ensure pointer events work
              >
                <Button 
                  onClick={openPopup}
                  variant="default" 
                  size="lg"
                  className="bg-accent hover:bg-accent text-white font-black px-12 py-4 brutalist-border brutalist-shadow uppercase tracking-wider transition-all duration-300 cursor-pointer"
                  style={{ pointerEvents: 'auto' }} // Explicit pointer events
                >
                  START A BRIEF
                </Button>
              </motion.div>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                style={{ pointerEvents: 'auto' }}
              >
                <Button 
                  onClick={handleViewWork}
                  variant="outline" 
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-black px-12 py-4 brutalist-border brutalist-shadow uppercase tracking-wider transition-all duration-300 cursor-pointer"
                  style={{ pointerEvents: 'auto' }}
                >
                  VIEW WORK
                </Button>
              </motion.div>
            </motion.div>

            {/* Three Metric Pills Only */}
            <motion.div 
              className="grid grid-cols-3 gap-4"
              variants={shouldReduceMotion ? {} : {
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.8
                  }
                }
              }}
            >
              <motion.div 
                className="brutalist-border brutalist-shadow p-6 bg-background text-center hover:scale-105 transition-transform duration-300"
                variants={shouldReduceMotion ? {} : metricVariants}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              >
                <div className="text-4xl font-black text-primary">{counters?.brands}+</div>
                <div className="text-sm brutalist-text">BRANDS</div>
              </motion.div>
              <motion.div 
                className="brutalist-border brutalist-shadow p-6 bg-background text-center hover:scale-105 transition-transform duration-300"
                variants={shouldReduceMotion ? {} : metricVariants}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              >
                <div className="text-4xl font-black text-primary">{counters?.success}%</div>
                <div className="text-sm brutalist-text">SUCCESS</div>
              </motion.div>
              <motion.div 
                className="brutalist-border brutalist-shadow p-6 bg-background text-center hover:scale-105 transition-transform duration-300"
                variants={shouldReduceMotion ? {} : metricVariants}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              >
                <div className="text-4xl font-black text-primary">{counters?.growth}X</div>
                <div className="text-sm brutalist-text">GROWTH</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Visual Element - 4 columns */}
          <motion.div 
            className="col-span-4 p-8"
            variants={shouldReduceMotion ? {} : visualVariants}
            animate={shouldReduceMotion ? {} : floatingAnimation}
          >
            <div className="w-full h-96 brutalist-border brutalist-shadow bg-accent"></div>
          </motion.div>
        </div>
      </div>
      {/* Brief Form Popup */}
      <BriefFormPopup isOpen={isPopupOpen} onClose={closePopup} />
    </section>
  );
};

export default HeroSection;