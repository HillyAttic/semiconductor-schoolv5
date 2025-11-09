import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ProcessNavigation = () => {
  const shouldReduceMotion = useReducedMotion();

  const steps = [
    {
      id: 1,
      number: "01",
      title: "PURIFY THE SILICON",
      description: "Convert raw quartz sand (SiO₂) into high-purity metallurgical silicon, then refine into electronic-grade polysilicon ready for crystal growth."
    },
    {
      id: 2,
      number: "02",
      title: "GROW CRYSTAL WAFERS",
      description: "Use the Czochralski or Float-Zone method to grow single-crystal ingots, slice them into thin wafers, and polish for circuit fabrication."
    },
    {
      id: 3,
      number: "03",
      title: "BUILD MICRO DEVICES",
      description: "Form transistors and circuits through repeated cycles of oxidation, photolithography, etching, ion implantation."
    },
    {
      id: 4,
      number: "04",
      title: "TEST & PACKAGE",
      description: "Test each wafer for functionality, dice the chips, package them using wire-bonding or flip-chip, and prepare for device integration."
    }
  ];

  // Container animation variants
  const containerVariants = shouldReduceMotion 
    ? {}
    : {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
          }
        }
      };

  // Card animation variants
  const cardVariants = shouldReduceMotion
    ? {}
    : {
        hidden: { 
          opacity: 0,
          y: 50,
          scale: 0.95
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.6
          }
        },
        hover: {
          scale: 1.03,
          y: -8,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 17
          }
        }
      };

  // Number animation variants
  const numberVariants = shouldReduceMotion
    ? {}
    : {
        hover: {
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
          }
        }
      };

  // Header animation variants
  const headerVariants = shouldReduceMotion
    ? {}
    : {
        hidden: { opacity: 0, y: -30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
            duration: 0.8
          }
        }
      };

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="brutalist-container">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-6xl brutalist-heading text-primary mb-4"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
            whileInView={shouldReduceMotion ? false : { opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            FROM SAND TO SILICON CHIP
          </motion.h2>
          <motion.p
            className="text-base md:text-lg brutalist-text text-foreground"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Four essential stages that transform raw sand into powerful semiconductor chips.
          </motion.p>
        </motion.div>

        {/* Process Grid - Responsive columns */}
        <motion.div 
          className="brutalist-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps?.map((step, index) => (
            <motion.div 
              key={step?.id}
              className="col-span-12 sm:col-span-6 lg:col-span-3 p-2 md:p-4"
              variants={cardVariants}
              whileHover="hover"
              custom={index}
            >
              <motion.div 
                className="brutalist-border brutalist-shadow p-6 md:p-8 bg-background h-full relative overflow-hidden group cursor-pointer"
                whileHover={{
                  boxShadow: shouldReduceMotion ? undefined : "8px 8px 0px rgba(0,0,0,0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                {/* Animated background overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={shouldReduceMotion ? {} : { 
                    scale: 1, 
                    rotate: 0,
                    transition: { duration: 0.3 }
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <motion.div 
                    className="text-3xl md:text-4xl font-black text-accent mb-4"
                    variants={numberVariants}
                    whileHover="hover"
                  >
                    {step?.number}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl md:text-2xl font-black text-primary mb-4 group-hover:text-accent transition-colors duration-300"
                    initial={shouldReduceMotion ? false : { x: -20, opacity: 0 }}
                    whileInView={shouldReduceMotion ? false : { x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    {step?.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="brutalist-text text-foreground text-sm md:text-base group-hover:text-foreground/80 transition-colors duration-300"
                    initial={shouldReduceMotion ? false : { x: -20, opacity: 0 }}
                    whileInView={shouldReduceMotion ? false : { x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  >
                    {step?.description}
                  </motion.p>
                </div>

                {/* Decorative corner element */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-accent opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: -180 }}
                  whileHover={shouldReduceMotion ? {} : {
                    scale: 1,
                    rotate: 0,
                    transition: { delay: 0.1, duration: 0.3 }
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessNavigation;