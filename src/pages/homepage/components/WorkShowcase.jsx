import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from '../../../components/AppImage';

const WorkShowcase = () => {
  const shouldReduceMotion = useReducedMotion();

  const projects = [
    {
      id: 1,
      title: "TECHFLOW REBRAND",
      category: "FINTECH",
      image: "https://images.unsplash.com/photo-1717037536218-abb38d2305a9",
      alt: "Modern fintech interface design with clean typography and data visualization"
    },
    {
      id: 2,
      title: "ECOVIBE LAUNCH",
      category: "FASHION",
      image: "https://images.unsplash.com/photo-1638423045236-c48b7a56c3bd",
      alt: "Sustainable fashion brand showcase with eco-friendly packaging design"
    },
    {
      id: 3,
      title: "MEDICORE PLATFORM",
      category: "HEALTHCARE",
      image: "https://images.unsplash.com/photo-1665735373302-5eea4d200055",
      alt: "Healthcare technology platform with user-friendly interface design"
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
    <section className="py-20 bg-background">
      <div className="brutalist-container">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          {...motionProps}
        >
          <h2 className="text-4xl lg:text-6xl brutalist-heading text-primary mb-4">
            WORK THAT WORKS
          </h2>
          <p className="text-lg brutalist-text text-foreground">
            Results speak louder than awards and accolades.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="brutalist-grid">
          {projects?.map((project) => (
            <motion.div
              key={project?.id}
              className="col-span-4 p-4"
              {...motionProps}
            >
              <motion.div 
                className="brutalist-border brutalist-shadow bg-background cursor-pointer 
                          hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300
                          transform-gpu group"
                {...cardHoverProps}
              >
                <div className="overflow-hidden">
                  <Image
                    src={project?.image}
                    alt={project?.alt}
                    className="w-full h-64 object-cover brutalist-border-thin 
                             transition-transform duration-500 ease-out
                             group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6 transition-colors duration-300 group-hover:bg-gray-50">
                  <div className="text-xs font-black text-accent mb-2 
                                transition-colors duration-300 group-hover:text-red-600">
                    {project?.category}
                  </div>
                  <h3 className="text-xl font-black text-primary transition-colors duration-300 group-hover:text-gray-800">
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