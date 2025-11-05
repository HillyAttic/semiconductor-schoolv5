import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const CapabilitiesGrid = () => {
  const shouldReduceMotion = useReducedMotion();

  const capabilities = [
    {
      id: 1,
      title: "BRAND STRATEGY",
      description: "Clear positioning that cuts through market noise."
    },
    {
      id: 2,
      title: "VISUAL IDENTITY",
      description: "Memorable design systems that demand attention."
    },
    {
      id: 3,
      title: "DIGITAL EXPERIENCE",
      description: "Interfaces that convert visitors into customers."
    },
    {
      id: 4,
      title: "CAMPAIGN CREATIVE",
      description: "Messages that stick and drive real results."
    }
  ];

  const containerVariants = shouldReduceMotion 
    ? { animate: { transition: { duration: 0 } } }
    : {
        animate: {
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
          }
        }
      };

  const headerVariants = shouldReduceMotion 
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: -30 },
        animate: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        }
      };

  const cardVariants = shouldReduceMotion 
    ? { initial: {}, animate: {} }
    : {
        initial: { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        animate: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: "easeOut"
          }
        }
      };

  const hoverVariants = shouldReduceMotion 
    ? {}
    : {
        whileHover: {
          scale: 1.02,
          y: -8,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        },
        whileTap: {
          scale: 0.98
        }
      };

  return (
    <section className="py-12 md:py-20 bg-muted">
      <div className="brutalist-container">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-6xl brutalist-heading text-primary mb-4"
            variants={shouldReduceMotion ? {} : {
              initial: { opacity: 0, scale: 0.8 },
              animate: { 
                opacity: 1, 
                scale: 1,
                transition: {
                  duration: 0.6,
                  delay: 0.2,
                  ease: "easeOut"
                }
              }
            }}
          >
            WHAT WE DO
          </motion.h2>
          <motion.p 
            className="text-base md:text-lg brutalist-text text-foreground"
            variants={shouldReduceMotion ? {} : {
              initial: { opacity: 0, y: 20 },
              animate: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.4,
                  ease: "easeOut"
                }
              }
            }}
          >
            Four core services. Maximum impact.
          </motion.p>
        </motion.div>

        {/* Capabilities Grid - Responsive columns */}
        <motion.div 
          className="brutalist-grid"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {capabilities?.map((capability, index) => (
            <motion.div 
              key={capability?.id}
              className="col-span-12 sm:col-span-6 lg:col-span-3 p-2 md:p-4"
              variants={cardVariants}
              {...hoverVariants}
            >
              <motion.div 
                className="brutalist-border brutalist-shadow p-6 md:p-8 bg-background h-full cursor-pointer overflow-hidden relative"
                whileHover={shouldReduceMotion ? {} : {
                  boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/5 to-conversion/5 opacity-0"
                  whileHover={shouldReduceMotion ? {} : {
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                />
                <div className="relative z-10">
                  <motion.h3 
                    className="text-xl md:text-2xl font-black text-primary mb-4"
                    whileHover={shouldReduceMotion ? {} : {
                      x: 8,
                      transition: { duration: 0.2 }
                    }}
                  >
                    {capability?.title}
                  </motion.h3>
                  <motion.p 
                    className="brutalist-text text-foreground text-sm md:text-base"
                    whileHover={shouldReduceMotion ? {} : {
                      x: 4,
                      transition: { duration: 0.2, delay: 0.1 }
                    }}
                  >
                    {capability?.description}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilitiesGrid;