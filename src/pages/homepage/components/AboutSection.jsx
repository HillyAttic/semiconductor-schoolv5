import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const AboutSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = shouldReduceMotion 
    ? { animate: { transition: { duration: 0 } } }
    : {
        animate: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
          }
        }
      };

  const headerVariants = shouldReduceMotion 
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: -50, scale: 0.9 },
        animate: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          transition: {
            duration: 0.8,
            ease: "easeOut"
          }
        }
      };

  const subtitleVariants = shouldReduceMotion 
    ? { initial: {}, animate: {} }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut"
          }
        }
      };

  const cardVariants = shouldReduceMotion 
    ? { initial: {}, animate: {} }
    : {
        initial: { 
          opacity: 0, 
          y: 60,
          scale: 0.85,
          rotateX: 15
        },
        animate: { 
          opacity: 1, 
          y: 0,
          scale: 1,
          rotateX: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        }
      };

  const hoverVariants = shouldReduceMotion 
    ? {}
    : {
        whileHover: {
          scale: 1.05,
          y: -12,
          rotateY: 5,
          transition: {
            duration: 0.3,
            ease: "easeOut"
          }
        },
        whileTap: {
          scale: 0.95,
          transition: { duration: 0.1 }
        }
      };

  const cards = [
    {
      id: 'strategy',
      title: 'STRATEGY',
      description: 'Data-driven decisions that cut through market noise.',
      gradient: 'from-blue-500/10 to-indigo-500/10'
    },
    {
      id: 'design',
      title: 'DESIGN',
      description: 'Visual identity that stops scrolling and starts conversations.',
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      id: 'results',
      title: 'RESULTS',
      description: 'Measurable impact that transforms businesses and drives growth.',
      gradient: 'from-emerald-500/10 to-teal-500/10'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="brutalist-container">
        <motion.div 
          className="brutalist-grid"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Header - 12 columns */}
          <motion.div 
            className="col-span-12 p-8 text-center"
            variants={headerVariants}
          >
            <motion.h2 
              className="text-5xl lg:text-7xl brutalist-heading text-primary mb-6"
              whileHover={shouldReduceMotion ? {} : {
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              NO FLUFF. PURE RESULTS.
            </motion.h2>
            <motion.p 
              className="text-xl brutalist-text text-foreground max-w-2xl mx-auto"
              variants={subtitleVariants}
            >
              We build brands that demand attention through strategic creativity.
            </motion.p>
          </motion.div>

          {/* Content Grid - 3 columns each */}
          {cards?.map((card, index) => (
            <motion.div 
              key={card?.id}
              className="col-span-4 p-8"
              variants={cardVariants}
              {...hoverVariants}
            >
              <motion.div 
                className="brutalist-border brutalist-shadow p-6 bg-background h-full cursor-pointer overflow-hidden relative"
                whileHover={shouldReduceMotion ? {} : {
                  boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${card?.gradient} opacity-0`}
                  whileHover={shouldReduceMotion ? {} : {
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                />
                <motion.div
                  className="absolute -top-2 -left-2 w-4 h-4 bg-accent opacity-0"
                  whileHover={shouldReduceMotion ? {} : {
                    opacity: 1,
                    scale: [0, 1.2, 1],
                    transition: { duration: 0.4, delay: 0.1 }
                  }}
                />
                <div className="relative z-10">
                  <motion.h3 
                    className="text-2xl font-black text-primary mb-4"
                    whileHover={shouldReduceMotion ? {} : {
                      x: 10,
                      color: "#000000",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {card?.title}
                  </motion.h3>
                  <motion.p 
                    className="brutalist-text text-foreground"
                    whileHover={shouldReduceMotion ? {} : {
                      x: 6,
                      transition: { duration: 0.2, delay: 0.05 }
                    }}
                  >
                    {card?.description}
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

export default AboutSection;