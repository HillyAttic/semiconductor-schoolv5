import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Image from '../../../components/AppImage';

const ClientLogos = () => {
  const shouldReduceMotion = useReducedMotion();

  const clients = [
    {
      id: 1,
      name: "TECHFLOW",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1166229a4-1762102668457.png",
      logoAlt: "TechFlow company logo featuring modern geometric design"
    },
    {
      id: 2,
      name: "ECOVIBE",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11600de65-1762102667491.png",
      logoAlt: "EcoVibe sustainable fashion brand logo"
    },
    {
      id: 3,
      name: "MEDICORE",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10ec9632e-1762102667145.png",
      logoAlt: "MediCore healthcare technology logo"
    },
    {
      id: 4,
      name: "URBANSPACE",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f7cfe618-1762102667190.png",
      logoAlt: "UrbanSpace real estate company logo"
    },
    {
      id: 5,
      name: "FOODIEHUB",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1d26f8a77-1762102667678.png",
      logoAlt: "FoodieHub restaurant platform logo"
    },
    {
      id: 6,
      name: "GREENENERGY",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_14339219a-1762102666938.png",
      logoAlt: "GreenEnergy renewable power company logo"
    }
  ];

  // Animation variants for staggered entrance
  const containerVariants = shouldReduceMotion ? {} : {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = shouldReduceMotion ? {} : {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const hoverVariants = shouldReduceMotion ? {} : {
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const headerMotionProps = shouldReduceMotion ?
    { initial: false, animate: false, transition: { duration: 0 } } :
    {
      initial: { opacity: 0, y: 30 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6, ease: "easeOut" }
    };

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="brutalist-container">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-16"
          {...headerMotionProps}>
          <h2 className="text-3xl md:text-4xl lg:text-6xl brutalist-heading text-primary mb-4">
            TRUSTED BY LEADERS
          </h2>
          <p className="text-base md:text-lg brutalist-text text-foreground">
            Brands that chose results over comfort zones.
          </p>
        </motion.div>

        {/* Logo Grid with Enhanced Animations - Responsive columns */}
        <motion.div
          className="brutalist-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}>
          {clients?.map((client) => (
            <motion.div
              key={client?.id}
              className="col-span-6 sm:col-span-4 lg:col-span-2 p-2 md:p-4"
              variants={cardVariants}>
              <motion.div
                className="brutalist-border p-4 md:p-6 bg-background h-20 md:h-24 flex items-center justify-center relative overflow-hidden cursor-pointer group"
                variants={hoverVariants}
                whileHover="hover"
                whileTap="tap">
                
                {/* Background gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Border enhancement on hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 transition-colors duration-300" />
                
                {/* Logo with enhanced hover effects */}
                <motion.div
                  className="relative z-10"
                  whileHover={{ scale: shouldReduceMotion ? 1 : 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}>
                  <Image
                    src={client?.logo}
                    alt={client?.logoAlt}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
                </motion.div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-accent/10 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional: Floating elements for extra visual interest */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/20 rounded-full"
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary/30 rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.5, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientLogos;