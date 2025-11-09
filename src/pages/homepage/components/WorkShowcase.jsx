import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const WorkShowcase = () => {
  const shouldReduceMotion = useReducedMotion();

  const projects = [
    {
      id: 1,
      title: "VLSI CHIP DESIGN",
      category: "DIGITAL VLSI"
    },
    {
      id: 2,
      title: "PHYSICAL DESIGN",
      category: "PnR TOOLS"
    },
    {
      id: 3,
      title: "CLEANROOM OPS",
      category: "FAB PROCESS"
    }
  ];

  const motionProps = shouldReduceMotion ? 
    { initial: false, animate: false, transition: { duration: 0 } } :
    {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      viewport: { once: true },
      transition: { duration: 0.3 }
    };

  const cardHoverProps = shouldReduceMotion ?
    {} :
    {
      whileHover: { 
        scale: 1.02,
        y: -8,
        transition: { 
          duration: 0.3,
          ease: "easeOut"
        }
      },
      whileTap: { 
        scale: 0.98,
        transition: { duration: 0.1 }
      }
    };

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="brutalist-container">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 md:mb-12"
          {...motionProps}
        >
          <h2 className="text-3xl md:text-4xl lg:text-6xl brutalist-heading text-primary mb-4">
            HANDS-ON TRAINING
          </h2>
          <p className="text-base md:text-lg brutalist-text text-foreground">
            Real projects, real tools, real semiconductor experience.
          </p>
        </motion.div>

        {/* Projects Grid - Responsive columns */}
        <div className="brutalist-grid">
          {projects?.map((project) => (
            <motion.div
              key={project?.id}
              className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 md:p-4"
              {...motionProps}
            >
              <motion.div 
                className="brutalist-border brutalist-shadow bg-background cursor-pointer 
                          hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300
                          transform-gpu group"
                {...cardHoverProps}
              >
                <div className="aspect-video bg-concrete-light flex items-center justify-center">
                  <div className="text-4xl font-black text-primary/10">0{project?.id}</div>
                </div>
                
                <div className="p-4 md:p-6 transition-colors duration-300 group-hover:bg-gray-50">
                  <div className="text-xs font-black text-accent mb-2 
                                transition-colors duration-300 group-hover:text-red-600">
                    {project?.category}
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-primary transition-colors duration-300 group-hover:text-gray-800">
                    {project?.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkShowcase;